package com.kony;

import android.app.Dialog;
import android.content.Context;
import android.support.annotation.Nullable;
import android.util.AttributeSet;
import android.widget.LinearLayout;

/**
 * Created by KH2195 on 24-Jan-19.
 */

public class KonyListBoxCustomWidgetLayout extends LinearLayout {

    public KonyListBoxCustomWidgetLayout(Context context, @Nullable AttributeSet attrs) {
        super(context);
        Dialog listdialog = null;
        int dialogIdentifier = getResources().getIdentifier("DeviceDefaultDialog", "style", context.getPackageName());
        if(dialogIdentifier != 0)
            listdialog = new Dialog(context, dialogIdentifier);
        else
            listdialog = new Dialog(context);
    }
}
