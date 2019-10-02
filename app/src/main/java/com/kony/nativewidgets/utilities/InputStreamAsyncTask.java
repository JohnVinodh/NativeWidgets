package com.kony.nativewidgets.utilities;

import android.content.Context;
import android.net.Uri;
import android.os.AsyncTask;
import android.os.ParcelFileDescriptor;
import android.util.Base64;
import android.util.Log;
import android.widget.Toast;

import org.apache.commons.io.IOUtils;

import java.io.BufferedOutputStream;
import java.io.File;
import java.io.FileDescriptor;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;

public class InputStreamAsyncTask extends AsyncTask<Uri, Void, String> {

    private Context mContext = null;
    private String mBase64Data = "";
    private FileOutputStream mFileOutputStream = null;
    private InputStream mFileInputStream = null;
    private BufferedOutputStream mBufferedOutputStream = null;
    private byte[] mByteArray;

    public InputStreamAsyncTask(Context context) {
        this.mContext = context;

    }

    @Override
    protected String doInBackground(Uri... uris) {
        try {
            //String filePath = new File(mContext.getCacheDir(), "tmp").getAbsolutePath();
            final ParcelFileDescriptor pfd = mContext.getContentResolver().openFileDescriptor(uris[0], "rw");
            FileDescriptor fileDescriptor = null;
            if (pfd != null) {
                fileDescriptor = pfd.getFileDescriptor();
                mFileInputStream = new FileInputStream(fileDescriptor);
                mByteArray = Utils.convertInputStreamToByteArray(mFileInputStream);
                mBase64Data = Base64.encodeToString(mByteArray, 0);
            }
           /* mFileInputStream = new FileInputStream(fileDescriptor);
            mFileOutputStream = new FileOutputStream(filePath);
            int read;
            byte[] bytes = new byte[4096];
            while ((read = mFileInputStream.read(bytes)) != -1) {
                mFileOutputStream.write(bytes, 0, read);
            }
            File file = new File(filePath);
            FileInputStream fileInputStream = new FileInputStream(file);*/

            //IOUtils.readFileToByteArray(file);
            //mBufferedOutputStream = new BufferedOutputStream(mFileOutputStream,mBufferSize);
            //mByteArray= mBufferedOutputStream.
        } catch (FileNotFoundException e) {
            //Toast.makeText(mContext,"Could not Find the File as it is not local"+e.getMessage(),Toast.LENGTH_LONG).show();
            Log.e("JohnVinodh", "FileNotFound  AsyncTask" + e.getMessage());
            e.printStackTrace();
        } catch (IOException e) {
            Log.e("JohnVinodh", "IOException  AsyncTask" + e.getMessage());
            e.printStackTrace();
        } catch (Exception e) {
            Log.e("JohnVinodh", "Exception  AsyncTask" + e.getMessage());
        }
        return mBase64Data;
    }
}
