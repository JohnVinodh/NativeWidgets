package com.kony.nativewidgets;

import android.content.Intent;
import android.os.Bundle;
import androidx.appcompat.app.AppCompatActivity;

import android.view.View;

/**
 * Created by KH2195 on 10/12/2016.
 */
public class AdvanceWidgetsActivity extends BaseAppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_advance_widgets);
    }

    public void onBtnBrowserClick(View v) {

        Intent intent = new Intent(getApplicationContext(),BrowserActivity.class);
        startActivity(intent);
    }

    public void onBtnMapClick(View v) {
        Intent intent = new Intent(getApplicationContext(),MapsActivity.class);

        startActivity(intent);
    }
}
