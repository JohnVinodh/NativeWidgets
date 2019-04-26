package com.kony.nativewidgets;

import android.app.Activity;
import android.os.Build;
import android.os.Bundle;
import android.support.annotation.RequiresApi;
import android.support.v7.app.AppCompatActivity;
import android.util.Log;
import android.view.View;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.webkit.WebViewClient;
import android.widget.Toast;

/**
 * Created by KH2195 on 10/12/2016.
 */
public class WebViewActivity extends AppCompatActivity {

    WebView mWebView = null;
    String url = null;
    @RequiresApi(api = Build.VERSION_CODES.JELLY_BEAN)
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        //this.getWindow().setFlags(WindowManager.LayoutParams.FLAG_FULLSCREEN,WindowManager.LayoutParams.FLAG_FULLSCREEN);
        setContentView(R.layout.activity_webview);
        View decorView = getWindow().getDecorView();
// Hide the status bar.
        int uiOptions = View.SYSTEM_UI_FLAG_FULLSCREEN;
        decorView.setSystemUiVisibility(uiOptions);
        mWebView = (WebView) findViewById(R.id.webview);

        WebSettings webViewSettings =  mWebView.getSettings();
        webViewSettings.setJavaScriptEnabled(true);
        webViewSettings.setDomStorageEnabled(true);
        webViewSettings.setAllowFileAccess(true);
        webViewSettings.setAllowUniversalAccessFromFileURLs(true);
        webViewSettings.setUseWideViewPort(true);
        webViewSettings.setLoadWithOverviewMode(true);
        Log.i("JohnVinodh","Just a test message");
       final  Activity activity = this;
        mWebView.setWebChromeClient(new CustomWebChromeClient(activity));
        mWebView.setWebViewClient(new WebViewClient() {
            public void onReceivedError(WebView view, int errorCode, String description, String failingUrl) {
                Toast.makeText(activity, "Oh no! " + description, Toast.LENGTH_SHORT).show();
            }
            public boolean shouldOverrideUrlLoading(WebView view, String url) {

                view.loadUrl(url);

                return true;
            }
        });

        Bundle extras = getIntent().getExtras();
        if (extras != null) {
            String value = extras.getString("ContentType");
            url = extras.getString("URL");
            loadWebView(value);
        }
    }

    private void loadWebView(String value) {
        if(value.equalsIgnoreCase("StaticContent")) {
            mWebView.loadUrl("file:///android_asset/test.html");
            //Toast.makeText(getApplicationContext(),"Static Content it is",Toast.LENGTH_LONG).show();
        } else if(value.equalsIgnoreCase("DynamicContent")) {
           // Toast.makeText(getApplicationContext(),"Dynamic Content it is",Toast.LENGTH_LONG).show();
            mWebView.loadUrl("https://www.ultratechaccess.com/UTCLInfo/salesTrend?CNo=620221S043");//http://10.10.3.98:8080/neo/ModifyCustomerDSD-StartPage.htm");
            //https://uattmbbank.tau2904.com/dev/page/view/webview-tmb-business-touch.html?mib_view
            mWebView.loadUrl(url);
        }
    }
}
