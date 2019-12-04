package com.kony;

import android.app.ActivityManager;
import android.app.Application;
import android.content.Context;
import android.content.res.Configuration;
import android.os.Build;
import android.util.Log;
import android.webkit.WebView;

import com.konylabs.android.KonyApplication;


/**
 * Created by KH2195 on 01-Oct-18.
 */

public class MyApplication extends Application {

    @Override
    public void onCreate() {
        super.onCreate();
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.P) {

            String processName = getProcessName(this);
            if (!"com.arjun.webviewdemo".equals(processName)) {
                WebView.setDataDirectorySuffix(processName);
            }
        }


    }

    public String getProcessName(Context context) {
        if (context == null) return null;
        ActivityManager manager = (ActivityManager) context.getSystemService(Context.ACTIVITY_SERVICE);
        for (ActivityManager.RunningAppProcessInfo processInfo : manager.getRunningAppProcesses()) {
            if (processInfo.pid == android.os.Process.myPid()) {
                return processInfo.processName;
            }
        }
        return null;
    }


/*
    @Override
    public void onConfigurationChanged(Configuration newConfig) {
        super.onConfigurationChanged(newConfig);
        Configuration configuration = new Configuration(newConfig);
        Utils.adjustFontScale(configuration,getApplicationContext(),411);
    }
*/

/*    @Override
    protected void attachBaseContext(Context newBase) {
        super.attachBaseContext(newBase);
        final Configuration override = new Configuration(
        // Copy the original configuration so it isn’t lost.
                newBase.getResources().getConfiguration()
        );
        override.fontScale = 1.0f;
        applyOverrideConfiguration(override);

    }*/
}
