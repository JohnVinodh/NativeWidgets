package com.kony.nativewidgets;

import android.app.Activity;
import android.os.Bundle;
import android.support.v7.app.AppCompatActivity;
import android.webkit.WebChromeClient;
import android.webkit.WebSettings;
import android.webkit.WebStorage;
import android.webkit.WebView;
import android.widget.Toast;

public class WebSqlActivity extends AppCompatActivity {

    WebView webView = null;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_web_sql);
        webView  = (WebView) findViewById(R.id.main_webview);
        WebSettings settings = webView.getSettings();
        settings.setJavaScriptEnabled(true);
        String databasePath = "/data/data/"+this.getPackageName()+"/databases/";
        settings.setDatabasePath(databasePath);
        settings.setDomStorageEnabled(true);
        webView.loadUrl("file:///android_asset/test.html");
        Toast.makeText(getApplicationContext(),"DatabasePath"+databasePath,Toast.LENGTH_LONG).show();
        webView.setWebChromeClient(new WebChromeClient() {

            /** Called when the database exceeds it's maximum size **/
            @Override
            public void onExceededDatabaseQuota(String url, String databaseIdentifier, long currentQuota, long estimatedSize, long totalUsedQuota, WebStorage.QuotaUpdater quotaUpdater) {
                //Double the estimated size of the Database
                quotaUpdater.updateQuota(estimatedSize * 2);
            }
        });
    }
}
