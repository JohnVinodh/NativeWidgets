package com.kony.nativewidgets;

import android.app.Activity;
import android.content.Context;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.text.InputType;
import android.text.method.HideReturnsTransformationMethod;
import android.text.method.PasswordTransformationMethod;
import android.view.View;
import android.view.inputmethod.InputMethodManager;
import android.widget.Button;
import android.widget.EditText;
import android.widget.Toast;

public class TemporaryTest extends AppCompatActivity {

    EditText mEditText;
    Button mButton;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_temporary_test);
        mEditText = (EditText) findViewById(R.id.ed_test);
        mButton = (Button) findViewById(R.id.btnshowHide);
    }

    public void onBtnClickmeClick(View v) {

        InputMethodManager imm = (InputMethodManager)getSystemService(Context.INPUT_METHOD_SERVICE);
        imm.hideSoftInputFromWindow(mEditText.getWindowToken(), 0);
       if(mButton.getText().equals("Hide")) {
           mButton.setText("Show");
           mEditText.setInputType(InputType.TYPE_CLASS_TEXT | InputType.TYPE_TEXT_VARIATION_PASSWORD);
           mEditText.setTransformationMethod(PasswordTransformationMethod.getInstance());
           //Toast.makeText(getApplicationContext(),"Clicked me",Toast.LENGTH_LONG).show();
       } else{
           mButton.setText("Hide");
           mEditText.setInputType(InputType.TYPE_CLASS_TEXT | InputType.TYPE_TEXT_VARIATION_PASSWORD);
           mEditText.setTransformationMethod(HideReturnsTransformationMethod.getInstance());
       }
    }
}
