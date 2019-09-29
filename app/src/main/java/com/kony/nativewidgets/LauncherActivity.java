package com.kony.nativewidgets;

import android.app.Activity;
import android.content.Context;
import android.content.Intent;
import android.content.pm.PackageManager;
import android.content.pm.Signature;
import android.content.res.Configuration;
import android.content.res.TypedArray;
import android.graphics.Color;
import android.os.Bundle;
import android.provider.Settings;
import android.support.constraint.ConstraintLayout;
import android.support.v7.app.ActionBar;
import android.support.v7.app.AppCompatActivity;
import android.support.v7.widget.Toolbar;
import android.util.Log;
import android.view.View;
import android.view.WindowManager;
import android.widget.LinearLayout;
import android.widget.TextView;
import android.widget.Toast;

import com.kony.nativewidgets.utilities.HTTPAsyncTask;
import com.kony.nativewidgets.utilities.Utils;

import org.w3c.dom.Text;

import java.net.MalformedURLException;
import java.net.URL;
import java.security.MessageDigest;
import java.util.concurrent.ExecutionException;

public class LauncherActivity extends AppCompatActivity {

    TextView mTextViewMD5Info = null;
    TextView mTextViewDeviceName= null;
    private Toolbar toolbar;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_launcher);
       ConstraintLayout constraintLayout =  (ConstraintLayout) findViewById(R.id.activity_launcher);
        /*getWindow().setFlags(WindowManager.LayoutParams.FLAG_SECURE,
                WindowManager.LayoutParams.FLAG_SECURE);*/
        //toolbar = new Toolbar(LauncherActivity.this);
        LinearLayout.LayoutParams toolBarParams = new LinearLayout.LayoutParams(
                Toolbar.LayoutParams.MATCH_PARENT,
                150
        ); //getActionBarHeight(getApplicationContext())
        //toolbar.setLayoutParams(toolBarParams);
        //toolbar.setBackgroundColor(Color.BLUE);
        //toolbar.setTitle("NativeWidgets");
        //toolbar.setTitleTextColor(Color.WHITE);
        //toolbar.setVisibility(View.VISIBLE);

        //constraintLayout.addView(toolbar,0);
        //this.setSupportActionBar(toolbar);
        //this.getSupportActionBar().show();

        //getSupportActionBar() is getting null when we call this before setSupportActionBar(toolbar);
        //setActionBar();

       // showActionBar(true,this.getSupportActionBar());

        mTextViewMD5Info = (TextView) findViewById(R.id.tv_md5info);
        mTextViewDeviceName = (TextView) findViewById(R.id.tv_devicename);
        getCertificateInfo();
       String deviceName = Settings.System.getString(getContentResolver(), "device_name");
       mTextViewDeviceName.setText("Device Name is ::"+deviceName);
       Toast.makeText(getApplicationContext(),"Device Name is ::"+deviceName,Toast.LENGTH_LONG).show();
    }

    private void getCertificateInfo() {
        try {
            Signature[] sigs = null;
            String pkg ="com.kony.nativewidgets";
            sigs = getPackageManager().getPackageInfo(pkg, PackageManager.GET_SIGNATURES).signatures;
            String fingerprintMD5;
            byte[] hexBytes;
            byte[] md5digest;
            MessageDigest digest;
            StringBuilder sb;

            int len;
            Signature   sig = sigs[0];
            hexBytes = sig.toByteArray();
            digest = MessageDigest.getInstance("MD5");
            md5digest = new byte[0];
            md5digest = digest.digest(hexBytes);
            sb = new StringBuilder();
            len = md5digest.length;
            for(int i = 0; i < len; ++i)
            {
                sb.append((Integer.toHexString((md5digest[i] & 0xFF) | 0x100)).substring(1, 3));
            }
            fingerprintMD5 = sb.toString();
            mTextViewMD5Info.setText("MD5 Info: "+fingerprintMD5);
            Log.i("JohnVinodh","FingerPrintMD5 is ::"+fingerprintMD5);
            Toast.makeText(getApplicationContext(),"MD5 is ::"+fingerprintMD5,Toast.LENGTH_LONG).show();
        }catch (Exception e) {
            Log.i("JohnVinodh","Error retreiving the certificate Info ::"+e.getMessage());
        }
    }

    public void onBtnBasicWidgetsClick(View v) {
        Intent intent = new Intent(getApplicationContext(),BasicWidgetsActivity.class);
        startActivity(intent);
    }

    public void onBtnAdvanceWidgetsClick(View v) {
        Intent intent = new Intent(getApplicationContext(),AdvanceWidgetsActivity.class);
        startActivity(intent);
    }

    public void onBtnNativeBehaviorClick(View view) {
        Toast.makeText(getApplicationContext(),"Clicked me.. !",Toast.LENGTH_LONG).show();
    }

    public void onBtnGetPublicIP(View view) {
        String url ="https://api.ipify.org/?format=json";
        HTTPAsyncTask mHttpAsyncTask = new HTTPAsyncTask(null,true,"serviceipaddresscall");
        String response = null;
        try {
            response = mHttpAsyncTask.execute(new URL(url)).get();
            Toast.makeText(getApplicationContext(), "Response :: " + response, Toast.LENGTH_LONG).show();
        } catch (InterruptedException e) {
            e.printStackTrace();
        } catch (ExecutionException e) {
            e.printStackTrace();
        } catch (MalformedURLException e) {
            e.printStackTrace();
        }

    }

    public static int getActionBarHeight(Context context) {
        int[] attrs = new int[] {context.getResources().getIdentifier("actionBarSize", "attr", context.getPackageName())};
        TypedArray ta = context.obtainStyledAttributes(attrs);
        int toolBarHeight = ta.getDimensionPixelSize(0, -1);
        ta.recycle();
        return toolBarHeight;
    }

    public static void showActionBar(boolean flag,ActionBar actionBar){
        actionBar.show();
/*
            if(flag){
                if(!actionBar.isShowing())
                    actionBar.show();
            }
            else if(actionBar.isShowing())
                actionBar.hide();*/

    }

}
