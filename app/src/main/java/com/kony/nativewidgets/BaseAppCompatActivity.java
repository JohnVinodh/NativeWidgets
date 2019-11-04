package com.kony.nativewidgets;

import android.content.Context;
import android.content.res.Configuration;
import android.os.Bundle;
import android.os.PersistableBundle;
import androidx.annotation.Nullable;
import androidx.appcompat.app.AppCompatActivity;

public class BaseAppCompatActivity extends AppCompatActivity {

    @Override
    public void onCreate(@Nullable Bundle savedInstanceState, @Nullable PersistableBundle persistentState) {
        super.onCreate(savedInstanceState, persistentState);
    }

    @Override
    protected void attachBaseContext(Context newBase) {
        super.attachBaseContext(newBase);
        final Configuration override = new Configuration(
                // Copy the original configuration so it isn’t lost.
                newBase.getResources().getConfiguration()
        );
        override.fontScale = 1.0f;
        //Toast.makeText(newBase,"Calling onAttachbasecontext",Toast.LENGTH_LONG).show();
        applyOverrideConfiguration(override);
    }
}
