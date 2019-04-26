package com.kony;

import android.app.Application;
import android.content.res.Configuration;

import com.kony.nativewidgets.utilities.Utils;

/**
 * Created by KH2195 on 01-Oct-18.
 */

public class MyApplication extends Application {

    @Override
    public void onCreate() {
        super.onCreate();
    }

    @Override
    public void onConfigurationChanged(Configuration newConfig) {
        super.onConfigurationChanged(newConfig);
        Configuration configuration = new Configuration(newConfig);
        Utils.adjustFontScale(configuration,getApplicationContext(),411);
    }
}
