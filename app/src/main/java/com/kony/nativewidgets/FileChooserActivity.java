package com.kony.nativewidgets;

import android.content.ContentResolver;
import android.content.Context;
import android.content.Intent;
import android.graphics.Bitmap;
import android.net.Uri;
import android.os.Build;
import android.os.Bundle;
import android.support.v7.app.AppCompatActivity;
import android.util.Log;
import android.view.View;
import android.webkit.MimeTypeMap;

import com.kony.nativewidgets.utilities.InputStreamAsyncTask;

import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.InputStream;
import java.util.concurrent.ExecutionException;

public class FileChooserActivity extends AppCompatActivity {

    private static final int PICKFILE_RESULT_CODE = 100;
    String[] mimeTypes = {"application/pdf", "application/msword", "text/plain"};
    private InputStream mInputStream = null;
    private byte[] mByteArray = null;
    private String mBase64Data="";
    private  String pageType;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_file_choooser);

    }

    public void onBtnFileChooserClick(View view) {
        doOpenFileChooser(mimeTypes);
    }

    public void doOpenFileChooser(String[] mimeTypes) {
        Intent chooseFile;
        if(Build.VERSION.SDK_INT >= Build.VERSION_CODES.KITKAT){
            chooseFile = new Intent(Intent.ACTION_OPEN_DOCUMENT);
            chooseFile.putExtra(Intent.EXTRA_ALLOW_MULTIPLE, true);
            chooseFile.addFlags(Intent.FLAG_GRANT_PERSISTABLE_URI_PERMISSION);
        }else{
            chooseFile = new Intent(Intent.ACTION_GET_CONTENT);
        }
        chooseFile.putExtra(Intent.EXTRA_LOCAL_ONLY, true);
        chooseFile.addFlags(Intent.FLAG_GRANT_READ_URI_PERMISSION);
        // = new Intent(Intent.ACTION_GET_CONTENT); //"android.intent.action.GET_CONTENT" Intent.ACTION_OPEN_DOCUMENT
        //chooseFile.addCategory("android.intent.category.OPENABLE");
        if (Build.VERSION.SDK_INT >= 19) {
            chooseFile.setType(mimeTypes.length == 1 ? mimeTypes[0] : "*/*");
            if (mimeTypes.length > 0)
                chooseFile.putExtra("android.intent.extra.MIME_TYPES", mimeTypes);
        }
        else {
            String mimeTypesStr = "";
            for (String mimeType : mimeTypes) {
                mimeTypesStr = mimeTypesStr + mimeType + "|";
            }
            chooseFile.setType(mimeTypesStr.substring(0, mimeTypesStr.length() - 1));
        }

        startActivityForResult(
                Intent.createChooser(chooseFile, "Choose a file"),
                PICKFILE_RESULT_CODE);
    }

    public void onActivityResult(int requestCode, int resultCode, Intent data)
    {
        super.onActivityResult(requestCode, resultCode, data);
        if ((requestCode == PICKFILE_RESULT_CODE) && (resultCode == -1)) {
            final int takeFlags = data.getFlags() & Intent.FLAG_GRANT_READ_URI_PERMISSION;
            ContentResolver cR = getContentResolver();
            final Uri content_describer = data.getData();
            //cR.takePersistableUriPermission(content_describer, takeFlags);
            MimeTypeMap mime = MimeTypeMap.getSingleton();
            pageType = mime.getExtensionFromMimeType(cR.getType(content_describer));

            try {
                InputStreamAsyncTask inputStreamAsyncTask = new InputStreamAsyncTask(FileChooserActivity.this);
                mBase64Data = inputStreamAsyncTask.execute(content_describer).get();
                Log.i("JohnVinodh","base64String from Asynctask"+mBase64Data);

                setResultOfFilePicked(mBase64Data,pageType);
            } catch (ExecutionException e) {
                e.printStackTrace();
            } catch (InterruptedException e) {
                e.printStackTrace();
            }

            System.out.println("Finished process..");
        } else {
            onBackPressed();
        }
    }




    private void setResultOfFilePicked(String result, String pageType) {
        Intent intent;
       /* if(Build.VERSION.SDK_INT >= Build.VERSION_CODES.KITKAT){
            intent = new Intent(Intent.ACTION_OPEN_DOCUMENT);
            intent.putExtra(Intent.EXTRA_ALLOW_MULTIPLE, true);
            intent.addFlags(Intent.FLAG_GRANT_PERSISTABLE_URI_PERMISSION);
        }else{
            intent = new Intent(Intent.ACTION_GET_CONTENT);
        }*/
        intent = new Intent(Intent.ACTION_GET_CONTENT);
        intent.putExtra(Intent.EXTRA_LOCAL_ONLY, true);
        intent.addFlags(Intent.FLAG_GRANT_READ_URI_PERMISSION);
        //intent.addFlags(-1);
        intent.putExtra("RESULT_PAGE_TYPE", pageType);
        BasicWidgetsActivity.mBase64String=result;
        //intent.putExtra("RESULT_PAGE", result);
        setResult(8595, intent);
        finish();
    }

    @Override
    protected void attachBaseContext(Context newBase) {
        super.attachBaseContext(newBase);
    }
}
