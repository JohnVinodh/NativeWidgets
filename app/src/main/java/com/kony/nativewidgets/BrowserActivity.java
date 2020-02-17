package com.kony.nativewidgets;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.EditText;
import android.widget.Toast;

public class BrowserActivity extends BaseAppCompatActivity {
    private String LOG_TAG="Kony";
    Intent mIntent = null;
    EditText mEditText = null;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_browser);
        mEditText = (EditText) findViewById(R.id.ed_url);
        mEditText.setText("https://www.hackerrank.com/privacy");//https://www.sit.amway.in/mobileContactUs // https://www.missionfed.com/rates?mobileview=1 //http://docs.google.com/gview?embedded=true&url=file:///android_asset/DailyStatus.docx
        //gdocs https://docs.google.com/gview?url=http://www.dbs.com.hk/iwov-resources/pdf/en/terms.pdf&embedded=true
    }

    public void onBtnStaticContentBrowserClick(View v) {
        mIntent = new Intent(getApplicationContext(),WebViewActivity.class);
        mIntent.putExtra("ContentType","StaticContent");
        mIntent.putExtra("URL","");
        startActivity(mIntent);

    }

    public void onBtnDynamicContentBrowserClick(View v) {
        mIntent = new Intent(getApplicationContext(),WebViewActivity.class);
        mIntent.putExtra("ContentType","DynamicContent");
        mIntent.putExtra("URL", "https://www.missionfed.com/rates?mobileview=1");
        startActivity(mIntent);
    }

    public void onBtnGoClick(View v) {
       String text =  mEditText.getText().toString();
    /*    try {
            URL url = new URL(text);
            Log.i(LOG_TAG,"URL Validation :: "+url.toURI());

        } catch (MalformedURLException e) {
            Log.i(LOG_TAG,"MalformedURLException :: "+e.getMessage());
        } catch (URISyntaxException e) {
            Log.i(LOG_TAG,"URISyntaxException :: "+e.getMessage());
        }*/
        if(text!=null && !text.isEmpty()) {
            mIntent = new Intent(getApplicationContext(), WebViewActivity.class);
            mIntent.putExtra("ContentType", "DynamicContent");
            mIntent.putExtra("URL", text);
            startActivity(mIntent);
        } else {
            Toast.makeText(getApplicationContext(),"Empty Text is not allowed ",Toast.LENGTH_LONG).show();
        }

        //public void onBtnShow
    }
}
