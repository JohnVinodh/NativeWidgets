package com.kony.nativewidgets.utilities;

import android.app.Activity;
import android.app.ProgressDialog;
import android.graphics.Bitmap;
import android.graphics.BitmapFactory;
import android.os.AsyncTask;
import android.util.Log;
import android.widget.ImageView;

import com.kony.nativewidgets.ImageWidgetActivity;

import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.net.HttpURLConnection;
import java.net.MalformedURLException;
import java.net.URL;

/**
 * Created by KH2195 on 07-Aug-18.
 */

public class ImageLoadTask extends AsyncTask<URL,Void,Bitmap> {
    private String mData = "",
            mReqMethod = "",
            mServiceCall = "",
            LOG_TAG="HTTPAsyncTask";
    private Bitmap mResult=null;
    private HttpURLConnection mConnection = null;
    private InputStream mInStream = null;
    private int mRespCode = 0;
    private AsyncTaskCompleted asyncTaskCompleted = null;
    private ProgressDialog dialog;

    public ImageLoadTask(String pData,boolean pIsGet, String pServiceCall,Activity callback) {
        mData = pData;
        mServiceCall = pServiceCall;
        mReqMethod = pIsGet? "GET" :"POST";
        asyncTaskCompleted = (AsyncTaskCompleted) callback;
        dialog = new ProgressDialog(callback);
    }

    @Override
    protected void onPreExecute() {
        //super.onPreExecute();
        dialog.setMessage("Loading");
        dialog.show();

    }

    @Override
    protected Bitmap doInBackground(URL... urls) {
        try {
            mConnection = (HttpURLConnection)urls[0].openConnection();
            mConnection.setReadTimeout(60000);
            mConnection.setConnectTimeout(60000);

            if(mReqMethod.equalsIgnoreCase("POST")) {
                mConnection.setDoOutput(true);
            } else {
                mConnection.setDoInput(true);
            }
            mConnection.setRequestMethod(mReqMethod);
            mConnection.setRequestProperty("Connection", "Keep-Alive");
            mConnection.setRequestProperty("Content-Type", "application/json");

            if(mData !=null && !mData.isEmpty() && mReqMethod.equalsIgnoreCase("POST")) {
                OutputStream os = mConnection.getOutputStream();
                os.write(mData.getBytes());
                os.flush();
            }
            mRespCode = mConnection.getResponseCode();
            mInStream = (mRespCode == 200 || mRespCode == 201) ? mConnection.getInputStream(): mConnection.getErrorStream();
            mResult = BitmapFactory.decodeStream(mInStream);
            Log.i("Kony","Response :: "+mResult);
        } catch(MalformedURLException me) {
            Log.i(LOG_TAG, "MalformedURLException :: " + me.getMessage());
        } catch (IOException e) {
            Log.i(LOG_TAG,"IOException :: "+e.getMessage());
        } catch(Exception e) {
            Log.i(LOG_TAG, "Generic exception :: " + e.getMessage());
        } finally {

            if (mConnection != null) {
                mConnection.disconnect();
            }
        }
        return mResult;
    }

    @Override
    protected void onPostExecute(Bitmap bitmap) {
        //super.onPostExecute(bitmap);
        //setBitMap(bitmap);
        //if (dialog.isShowing()) {
            dialog.dismiss();
        //}
        asyncTaskCompleted.onTaskCompleted(bitmap);
    }
}
