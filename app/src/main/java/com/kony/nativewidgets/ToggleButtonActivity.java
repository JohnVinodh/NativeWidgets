package com.kony.nativewidgets;

import android.os.Bundle;
import android.app.Activity;
import android.support.v7.app.AppCompatActivity;
import android.view.ViewGroup;
import android.widget.CompoundButton;
import android.widget.LinearLayout;
import android.widget.Toast;
import android.widget.ToggleButton;

public class ToggleButtonActivity extends BaseAppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        //setContentView(R.layout.activity_toggle_button);
        ToggleButton toggle = new ToggleButton(ToggleButtonActivity.this);
        ViewGroup.LayoutParams params = new LinearLayout.LayoutParams(ViewGroup.LayoutParams.MATCH_PARENT, ViewGroup.LayoutParams.WRAP_CONTENT);
        LinearLayout layout = new LinearLayout(this);
        toggle.setLayoutParams(params);
        ViewGroup.LayoutParams layoutParams = new LinearLayout.LayoutParams(ViewGroup.LayoutParams.MATCH_PARENT, ViewGroup.LayoutParams.WRAP_CONTENT);

        //ToggleButton toggle = (ToggleButton) findViewById(R.id.btn_toggleButton);
        toggle.setOnCheckedChangeListener( new MyOnCheckedListener()/*new CompoundButton.OnCheckedChangeListener() {
            public void onCheckedChanged(CompoundButton buttonView, boolean isChecked) {
                if (isChecked) {
                    Toast.makeText(getApplicationContext(),"Toggle is checked",Toast.LENGTH_LONG).show();
                } else {
                    // The toggle is disabled
                    Toast.makeText(getApplicationContext(),"Toggle is disabled",Toast.LENGTH_LONG).show();
                }
            }
        }*/);

        layout.addView(toggle);
        this.addContentView(layout,layoutParams);
    }

    private class MyOnCheckedListener implements CompoundButton.OnCheckedChangeListener {

        @Override
        public void onCheckedChanged(CompoundButton buttonView, boolean isChecked) {
            if (isChecked) {
                Toast.makeText(getApplicationContext(),"Toggle is checked",Toast.LENGTH_LONG).show();
            } else {
                // The toggle is disabled
                Toast.makeText(getApplicationContext(),"Toggle is disabled",Toast.LENGTH_LONG).show();
            }
        }
    }

}
