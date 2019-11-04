package com.kony.nativewidgets;

import android.content.Context;
import android.content.Intent;
import android.content.pm.PackageManager;
import android.net.Uri;
import android.os.Bundle;
import androidx.annotation.NonNull;
import androidx.annotation.Nullable;
import androidx.core.app.ActivityCompat;
import androidx.core.content.ContextCompat;
import androidx.appcompat.app.AppCompatActivity;
import android.util.Log;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.Toast;

import com.kony.nativewidgets.utilities.HTTPAsyncTask;

import java.net.MalformedURLException;
import java.net.URL;
import java.util.concurrent.ExecutionException;

public class BasicWidgetsActivity extends AppCompatActivity {
    private static final int MY_PERMISSIONS_REQUEST_CALL_PHONE = 8085;
    Intent mIntent = null;
    EditText edServiceURL=null;
    private String LOG_TAG="Kony";
    Button mButtonActivity = null;
    public static String mBase64String="";
    private static int PICKFILE_RESULT_CODE = 8595;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_basic_widgets);
        edServiceURL = (EditText) findViewById(R.id.ed_surl);
        mButtonActivity = (Button) findViewById(R.id.btn_ButtonActivity);
        //mButtonActivity.setFocusable(true);
        //mButtonActivity.setFocusableInTouchMode(true);
    }

    public void onServiceCallClick(View v) {

        HTTPAsyncTask mHttpAsyncTask = new HTTPAsyncTask(null,true,"servicecall");
        String url = edServiceURL.getText().toString();
       // String url = "https://28e6e8be.ngrok.io/api/v1/getTAndC?language={name:English(India),language:en,country:IN}&language={name:English(India),language:en,country:IN}";
        //String url2 = "https://api.myjson.com/bins/r8qm";
        if(url!=null &&!url.isEmpty()) {
            try {
                String response = mHttpAsyncTask.execute(new URL(url)).get();
                Toast.makeText(getApplicationContext(), "Response :: " + response, Toast.LENGTH_LONG).show();
            } catch (MalformedURLException e) {
                Log.e(LOG_TAG,"MalformedURLException :: "+e.getMessage());
                Toast.makeText(getApplicationContext(),"MalformedURLException :: "+e.getMessage(), Toast.LENGTH_LONG).show();
            } catch (InterruptedException e) {
                Log.e(LOG_TAG,"InterruptedException :: "+e.getMessage());
                Toast.makeText(getApplicationContext(),"InterruptedException :: "+e.getMessage(), Toast.LENGTH_LONG).show();
            } catch (ExecutionException e) {
                Log.e(LOG_TAG,"ExecutionException :: "+e.getMessage());
                Toast.makeText(getApplicationContext(),"ExecutionException :: "+e.getMessage(), Toast.LENGTH_LONG).show();
            }
        } else {
            Toast.makeText(getApplicationContext(), "A Service Call Can't be done on a Empty URL", Toast.LENGTH_LONG).show();
        }
    }

    public void onBtnButtonClick(View v) {
        mIntent = new Intent(getApplicationContext(),ButtonActivity.class);
        startActivity(mIntent);
    }

    public void onBtnEditTexClick(View v) {
        mIntent = new Intent(getApplicationContext(),EditTextActivity.class);
        startActivity(mIntent);
    }

    public void onBtnTextViewClick(View v) {
        mIntent = new Intent(getApplicationContext(),TextViewActivity.class);
        startActivity(mIntent);
    }

    public void onBtnCheckBoxClick(View v) {
        mIntent = new Intent(getApplicationContext(),CheckBoxActivity.class);
        startActivity(mIntent);
    }

    public void onBtnCalendarClick(View v) {
        mIntent = new Intent(getApplicationContext(),CalendarActivity.class);
        startActivity(mIntent);
    }

    public void onBtnToggleButtonClick(View v) {
        mIntent = new Intent(getApplicationContext(),ToggleButtonActivity.class);
        startActivity(mIntent);
    }

    public void onBtnSpinnerClick(View v) {
        mIntent = new Intent(getApplicationContext(),SpinnerActivity.class);
        startActivity(mIntent);
    }

    public void onBtnLinkClick(View v) {
        mIntent = new Intent(getApplicationContext(),LinkActivity.class);
        startActivity(mIntent);
    }

    public void onBtnTableLayoutClick(View v) {
        mIntent = new Intent(getApplicationContext(),TableLayoutActivity.class);
        startActivity(mIntent);
    }

    public void onBtnAlertClick(View view) {
        mIntent = new Intent(getApplicationContext(),AlertActivity.class);
        startActivity(mIntent);
    }

    public void onBtnPickersClick(View view) {
        mIntent = new Intent(getApplicationContext(),PickersActivity.class);
        startActivity(mIntent);
    }

    public void onBtnListViewClick(View view) {
        mIntent = new Intent(getApplicationContext(),MyListViewActivity.class);
        startActivity(mIntent);
    }

    public void onBtnKeyboardTypesClick(View view) {
        mIntent = new Intent(getApplicationContext(),KeyboardTypesActivity.class);
        startActivity(mIntent);
    }

    public void onBtnPopupClick(View view) {
        mIntent = new Intent(getApplicationContext(),PopupActivity.class);
        startActivity(mIntent);
    }

    public void onBtnGetCurrentLocationClick(View view) {
        mIntent = new Intent(getApplicationContext(),CurrentLocationActivity.class);
        startActivity(mIntent);
    }

    public void onBtnImageWidgetClick(View view) {
        mIntent = new Intent(getApplicationContext(),ImageWidgetActivity.class);
        startActivity(mIntent);
    }

    public void onBtnCallClick(View view) {

        if (ContextCompat.checkSelfPermission(getApplicationContext(), android.Manifest.permission.CALL_PHONE)
                != PackageManager.PERMISSION_GRANTED) {

            ActivityCompat.requestPermissions(BasicWidgetsActivity.this,
                    new String[]{android.Manifest.permission.CALL_PHONE},
                    MY_PERMISSIONS_REQUEST_CALL_PHONE);

            // MY_PERMISSIONS_REQUEST_CALL_PHONE is an
            // app-defined int constant. The callback method gets the
            // result of the request.
        } else {
            //You already have permission
            try {
                startCallActivity();
            } catch(SecurityException e) {
                e.printStackTrace();
            }
        }
        //startActivity(mIntent);
    }

    public void onBtnKonyListBoxClick(View view) {
        mIntent = new Intent(getApplicationContext(),KonyListBoxActivity.class);
        startActivity(mIntent);
    }
    public void startCallActivity() {
        mIntent = new Intent(Intent.ACTION_CALL);
        String phoneNumber ="+917013292857";
        mIntent.setData(Uri.parse("tel:" + phoneNumber));
        startActivity(mIntent);
    }

    @Override
    public void onRequestPermissionsResult(int requestCode, @NonNull String[] permissions, @NonNull int[] grantResults) {
        if(requestCode == MY_PERMISSIONS_REQUEST_CALL_PHONE ) {
            if (grantResults.length > 0
                    && grantResults[0] == PackageManager.PERMISSION_GRANTED) {
                startCallActivity();
                // permission was granted, yay! Do the
                // contacts-related task you need to do.
            } else {
                Toast.makeText(getApplicationContext(),"CALL_PHONE permission is required to continue making a call",Toast.LENGTH_LONG).show();
            }
        }
    }

    public void onBtnOpenAccessbilityActivityClick(View view) {
       mIntent = new Intent(getApplicationContext(),AccessiblityTestActivity.class);
        startActivity(mIntent);
    }

    public void onBtnOpenFileChooserClick(View view) {
        mIntent = new Intent(getApplicationContext(), FileChooserActivity.class);
        startActivityForResult(mIntent,PICKFILE_RESULT_CODE);
    }
    public void onBtnOpenFacebookPageClick(View view) {
        String facebookPageID = "Selective";


        String facebookUrl = "https://www.facebook.com/" + facebookPageID;


        String facebookUrlScheme = "fb://page/" + facebookPageID;

        try {

            int versionCode = getPackageManager().getPackageInfo("com.facebook.katana", 0).versionCode;

            if (versionCode >= 3002850) {

                Uri uri = Uri.parse("fb://facewebmodal/f?href=" + facebookUrl);
                startActivity(new Intent(Intent.ACTION_VIEW, uri));
            } else {

                startActivity(new Intent(Intent.ACTION_VIEW, Uri.parse(facebookUrlScheme)));
            }
        } catch (PackageManager.NameNotFoundException e) {
               startActivity(new Intent(Intent.ACTION_VIEW, Uri.parse(facebookUrl)));

        }
    }


    @Override
    protected void onActivityResult(int requestCode, int resultCode, @Nullable Intent data) {
        super.onActivityResult(requestCode, resultCode, data);
        if(requestCode ==PICKFILE_RESULT_CODE) {
            try {
                Log.i("FileChooserUtil", "RESULT_PAGE Output");
                if(data !=null) {
                    String base64Data = mBase64String;//data.getStringExtra("RESULT_PAGE");
                    String format = data.getStringExtra("RESULT_PAGE_TYPE");
                    //String base64Data = Base64.encodeToString(bout.toByteArray(), Base64.DEFAULT);
                    Log.i("JohnVinodh", "base64Data ::" + base64Data + " ::format ::" + format);
                }
            } catch (Exception e) {
                e.printStackTrace();
            }
        }
    }

    @Override
    protected void attachBaseContext(Context newBase) {
        super.attachBaseContext(newBase);
    }
}
