package com.kony.nativewidgets;

import android.app.Activity;
import android.os.Bundle;
import android.os.PersistableBundle;
import android.support.v7.app.AppCompatActivity;
import android.text.Editable;
import android.text.TextWatcher;
import android.view.View;
import android.widget.EditText;
import android.widget.TextView;
import android.widget.Toast;

/**
 * Created by KH2195 on 10/5/2016.
 */
public class EditTextActivity extends AppCompatActivity implements TextWatcher {

    EditText mEditText = null;
    TextView mTextView = null;
    final String forbiddenChar = ",";
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_edittext);
        mEditText = (EditText) findViewById(R.id.ed_firstname);
        mTextView = (TextView) findViewById(R.id.tv_edtext);
        mEditText.addTextChangedListener(this);
        mEditText.setText("John here");
        mEditText.setSelection(0);
        mEditText.setFocusable(true);
    }


    @Override
    public void beforeTextChanged(CharSequence s, int start, int count, int after) {
        Toast.makeText(getApplicationContext(),"beforeTextchanged ::"+s,Toast.LENGTH_LONG).show();
    }

    @Override
    public void onTextChanged(CharSequence s, int start, int before, int count) {
        Toast.makeText(getApplicationContext(),"onTextchanged ::"+s,Toast.LENGTH_LONG).show();
        //mTextView.setText(s);
        //mEditText.setSelection(0);
    }

    @Override
    public void afterTextChanged(Editable s) {
        if (s.toString().contains(forbiddenChar)){
            String finalStr = s.toString().replaceFirst(forbiddenChar,"");
            s.replace(0, s.length(), finalStr);
        }
        //Toast.makeText(getApplicationContext(),"AfterTextchanged ::"+s.toString(), Toast.LENGTH_LONG).show();
    }
}
