package com.kony.wrapper;

import android.content.Intent;

import androidx.annotation.NonNull;
import androidx.core.app.ActivityCompat;
//import android.support.v4.content.ContextCompat;
//import android.widget.Toast;
//import com.konylabs.android.KonyMain;

/**
 * Created by KH2195 on 18-Sep-18.
 */

public class CallingWrapper implements ActivityCompat.OnRequestPermissionsResultCallback {

    static Intent mIntent = null;
    static String mPhoneNumber ="";
    //static KonyMain context = null;
    private static final int MY_PERMISSIONS_REQUEST_CALL_PHONE = 8085;

    public static void directDial(String phoneNumber) {/*
        mPhoneNumber = phoneNumber;
        context = KonyMain.getActivityContext();
        if (ContextCompat.checkSelfPermission(context, android.Manifest.permission.CALL_PHONE)
                != PackageManager.PERMISSION_GRANTED) {

            ActivityCompat.requestPermissions(context,
                    new String[]{android.Manifest.permission.CALL_PHONE},
                    MY_PERMISSIONS_REQUEST_CALL_PHONE);

            // MY_PERMISSIONS_REQUEST_CALL_PHONE is an
            // app-defined int constant. The callback method gets the
            // result of the request.
        } else {
            //You already have permission
            try {
                startCallActivity();
            } catch(SecurityException e) {
                e.printStackTrace();
            }
        }*/
    }

    public static void startCallActivity() {
        /*context = KonyMain.getActivityContext();
        mIntent = new Intent(Intent.ACTION_CALL);
        //String phoneNumber ="+917013292857";
        mIntent.setData(Uri.parse("tel:" + mPhoneNumber));
        context.startActivity(mIntent);*/
    }
    @Override
    public void onRequestPermissionsResult(int requestCode, @NonNull String[] permissions, @NonNull int[] grantResults) {/*
        context = KonyMain.getActivityContext();
        if(requestCode == MY_PERMISSIONS_REQUEST_CALL_PHONE ) {
            if (grantResults.length > 0
                    && grantResults[0] == PackageManager.PERMISSION_GRANTED) {
                startCallActivity();
                // permission was granted, yay! Do the
                // contacts-related task you need to do.
            } else {
                Toast.makeText(context,"CALL_PHONE permission is required to continue making a call",Toast.LENGTH_LONG).show();
            }
        }*/
    }
}
