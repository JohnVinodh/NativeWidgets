package com.kony.nativewidgets;

import android.app.AlertDialog;
import android.content.Intent;
import android.os.Build;
import android.os.Bundle;
import android.os.Handler;
import android.widget.VideoView;

public class SplashScreenActivity extends BaseAppCompatActivity {

    VideoView videoView;
    private static int SPLASH_TIME_OUT = 3000;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_splash_screen);
        AlertDialog.Builder builder = new AlertDialog.Builder(getApplicationContext());
     
        String locale = getResources().getConfiguration().locale.getCountry();
        // TelephonyManager tm = (TelephonyManager) getSystemService(Context.TELEPHONY_SERVICE);
        //String countryCodeValue = tm.getNetworkCountryIso();
        //tm.get
        //Toast.makeText(getApplicationContext(),"my local::"+locale+" countrycode::"+countryCodeValue,Toast.LENGTH_LONG).show();
        new Handler().postDelayed(new Runnable() {
            @Override
            public void run() {
                // This method will be executed once the timer is over
                // Start your app main activity
                startActivity(new Intent(SplashScreenActivity.this, LauncherActivity.class));

                // close this activity
                finish();
            }
        }, SPLASH_TIME_OUT);
       /* videoView = (VideoView) findViewById(R.id.videoView);

        Uri video = Uri.parse("android.resource://" + getPackageName() + "/" + R.raw.splash2);
        videoView.setVideoURI(video);

        videoView.setOnCompletionListener(new MediaPlayer.OnCompletionListener() {
            public void onCompletion(MediaPlayer mp) {
                startNextActivity();
            }
        });

        videoView.start();*/
    }

    private void startNextActivity() {
       // if (isFinishing())
           // return;
        startActivity(new Intent(SplashScreenActivity.this, LauncherActivity.class));
        finish();
    }


}
