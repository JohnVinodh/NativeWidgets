package com.kony.nativewidgets;

import android.content.ContentResolver;
import android.content.Intent;
import android.net.Uri;
import android.os.Build;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.util.Base64;
import android.view.View;
import android.webkit.MimeTypeMap;

import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.io.InputStream;

public class FileChoooserActivity extends AppCompatActivity {

    private static final int PICKFILE_RESULT_CODE = 100;
    String[] mimeTypes = {"application/pdf", "application/msword", "text/plain"};
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
            InputStream in = null;
            ByteArrayOutputStream bout = new ByteArrayOutputStream();
            try {
                in = getContentResolver().openInputStream(content_describer);
                int len = 0;
                byte[] inBuff = new byte[2048];

                while ((len = in.read(inBuff, 0, inBuff.length)) != -1)
                    bout.write(inBuff, 0, len);
            }
            catch (Exception exception) {
                exception.printStackTrace();
            } finally {
                try {
                    if (in != null)
                        in.close();
                }
                catch (IOException localIOException2) {
                }
            }
            String base64Data = Base64.encodeToString(bout.toByteArray(), 0);
            Intent intent = new Intent(getIntent().getAction());
            intent.addFlags(-1);
            intent.putExtra("RESULT_PAGE_TYPE", pageType);
            intent.putExtra("RESULT_PAGE", base64Data);
            setResult(100, intent);
            finish();
            System.out.println("Finished process..");
        } else {
            onBackPressed();
        }
    }
}
