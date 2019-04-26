package com.kony.nativewidgets;

import android.app.Activity;
import android.content.Context;
import android.view.Gravity;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.view.WindowManager;
import android.widget.PopupWindow;

/**
 * Created by KH2195 on 13-Oct-17.
 */

public class CustomPopupWindow {
    Activity mActivity = null;
    PopupWindow pwindo;

    CustomPopupWindow(Activity pActivity) {
        mActivity = pActivity;
    }

   public void initializePopup() {
       try {
// We need to get the instance of the LayoutInflater

           LayoutInflater inflater = (LayoutInflater) mActivity
                   .getSystemService(Context.LAYOUT_INFLATER_SERVICE);
           View layout = inflater.inflate(R.layout.popup_screen,
                   (ViewGroup) this.mActivity.findViewById(R.id.popup_element));
           pwindo = new PopupWindow(layout, 750, 700, true);
           //pwindo.setSoftInputMode(WindowManager.LayoutParams.SOFT_INPUT_ADJUST_RESIZE);
           pwindo.showAtLocation(layout, Gravity.BOTTOM, 0, 0);

       } catch (Exception e) {
           e.printStackTrace();
       }

    }

    public void dismissPopup() {
        pwindo.dismiss();
    }
}
