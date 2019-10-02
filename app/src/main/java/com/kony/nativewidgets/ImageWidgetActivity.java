package com.kony.nativewidgets;

import android.graphics.Bitmap;
import android.os.Bundle;
import android.view.View;
import android.widget.EditText;
import android.widget.ImageView;
import android.widget.Toast;

import com.kony.nativewidgets.utilities.AsyncTaskCompleted;
import com.kony.nativewidgets.utilities.ImageLoadTask;

import java.net.MalformedURLException;
import java.net.URL;

public class ImageWidgetActivity extends BaseAppCompatActivity implements AsyncTaskCompleted {

    ImageView mIVImgBillPayment = null;
    EditText mEdImageURL = null;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_image_widget);
        mIVImgBillPayment = (ImageView) findViewById(R.id.imgBillPayment);
        mEdImageURL = (EditText) findViewById(R.id.ed_imageurl);
        //http://images.ctfassets.net/a9odgsv44wmq/2xMPtTX0LOkwWGuSE6skoA/6679db0fb376d536cfcc770b9b4ab311/Product_0_0003_M17_M004_3.1_Junior_Jumbo_Jack_Cheeseburger.png
    }

    public void onBtnLoadImageClick(View view) {
            //Download the image and set it to image widget
        String url = mEdImageURL.getText().toString();
        if(url!=null && !url.isEmpty()) {
            try {
                URL mURL = new URL(url);
                ImageLoadTask imageLoadTask = new ImageLoadTask(null, true, "downloadingImage",ImageWidgetActivity.this);
                //imageLoadTask.executeOnExecutor(AsyncTask.THREAD_POOL_EXECUTOR);
                imageLoadTask.execute(mURL);
            } catch (MalformedURLException e) {
                e.printStackTrace();
            }
        } else {
            Toast.makeText(getApplicationContext(),"Makesure the URL is correct and not Empty",Toast.LENGTH_LONG).show();
        }

    }

    @Override
    public void onTaskCompleted(Bitmap bitmap) {
        mIVImgBillPayment.setImageBitmap(bitmap);
    }

    @Override
    public void onTaskCompleted(String result) {

    }
}
