package com.kony;

import android.app.Application;
import android.content.Context;
import android.content.res.Configuration;
import android.util.Log;


/**
 * Created by KH2195 on 01-Oct-18.
 */

public class MyApplication extends Application {

    @Override
    public void onCreate() {
        super.onCreate();
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
