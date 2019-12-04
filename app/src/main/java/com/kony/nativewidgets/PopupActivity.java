package com.kony.nativewidgets;

import android.os.Bundle;
import android.view.View;

public class PopupActivity extends BaseAppCompatActivity {

    CustomPopupWindow cPopupWindow;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_popup);
    }

    public void onBtnPopupWindowClick(View view) {
        cPopupWindow = new  CustomPopupWindow(PopupActivity.this);
        cPopupWindow.initializePopup();
    }



   /* private void initiatePopupWindow() {
        try {
// We need to get the instance of the LayoutInflater
            PopupWindow pwindo;
            LayoutInflater inflater = (LayoutInflater) PopupActivity.this
                    .getSystemService(Context.LAYOUT_INFLATER_SERVICE);
            View activity_videoview = inflater.inflate(R.activity_videoview.screen_popup,
                    (ViewGroup) findViewById(R.id.popup_element));
            pwindo = new PopupWindow(activity_videoview, 300, 370, true);
            pwindo.showAtLocation(activity_videoview, Gravity.CENTER, 0, 0);

            btnClosePopup = (Button) activity_videoview.findViewById(R.id.btn_close_popup);
            btnClosePopup.setOnClickListener(cancel_button_click_listener);

        } catch (Exception e) {
            e.printStackTrace();
        }
    }*/

    @Override
    public void onBackPressed() {
        cPopupWindow.dismissPopup();
        super.onBackPressed();
        finish();
    }
}
