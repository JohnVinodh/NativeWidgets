package com.kony.nativewidgets;

import android.content.ContentResolver;
import android.content.Intent;
import android.net.Uri;
import android.os.Build;
import android.os.Bundle;
import android.support.v7.app.AppCompatActivity;
import android.util.Base64;
import android.util.Log;
import android.view.View;
import android.webkit.MimeTypeMap;

import com.kony.nativewidgets.utilities.Utils;

import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.io.InputStream;

public class FileChooserActivity extends AppCompatActivity {

    private static final int PICKFILE_RESULT_CODE = 100;
    String[] mimeTypes = {"application/pdf", "application/msword", "text/plain"};
    private InputStream mInputStream = null;
    private byte[] mByteArray = null;
    private String mBase64Data="";
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_file_choooser);

    }

    public void onBtnFileChooserClick(View view) {
        doOpenFileChooser(mimeTypes);
    }

    public void doOpenFileChooser(String[] mimeTypes) {
        Intent chooseFile = new Intent("android.intent.action.GET_CONTENT");
        chooseFile.addCategory("android.intent.category.OPENABLE");
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
            Uri content_describer = data.getData();
            ContentResolver cR = getContentResolver();
            MimeTypeMap mime = MimeTypeMap.getSingleton();
            String pageType = mime.getExtensionFromMimeType(cR.getType(content_describer));

            try {

                mInputStream = getContentResolver().openInputStream(content_describer);
                Runnable runnable = new Runnable() {
                    @Override
                    public void run() {
                        try {
                            mByteArray = Utils.convertInputStreamToByteArray(mInputStream);
                            Log.i("JohnVinodh","FileChooser Activity byteArrayFromthread inside thread::"+mByteArray);
                            mBase64Data = Base64.encodeToString(mByteArray, 0);
                        } catch (IOException e) {
                            e.printStackTrace();
                        }
                    }
                };
                new Thread(runnable).start();
                /*int len = 0;
                byte[] inBuff = new byte[2048];

                while ((len = in.read(inBuff, 0, inBuff.length)) != -1)
                    bout.write(inBuff, 0, len);*/
            }
            catch (Exception exception) {
                Log.e("JohnVinodh", "Error Converting input stream to ByteArray"+exception.getMessage());
                exception.printStackTrace();
            } finally {
                try {
                    if (mInputStream != null)
                        mInputStream.close();
                }
                catch (IOException localIOException2) {
                }
            }

            /*Intent intent = new Intent(getIntent().getAction());
            intent.addFlags(-1);
            intent.putExtra("RESULT_PAGE_TYPE", pageType);
            intent.putExtra("RESULT_PAGE", mBase64Data);
            setResult(100, intent);*/
            finish();
            System.out.println("Finished process..");
        } else {
            onBackPressed();
        }
    }
}
