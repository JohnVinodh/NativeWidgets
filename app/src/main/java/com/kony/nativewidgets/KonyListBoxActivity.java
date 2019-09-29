package com.kony.nativewidgets;

import android.app.Dialog;
import android.content.Context;
import android.content.DialogInterface;
import android.graphics.drawable.Drawable;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.view.ViewGroup;
import android.view.Window;
import android.widget.AbsListView;
import android.widget.AdapterView;
import android.widget.ArrayAdapter;
import android.widget.LinearLayout;
import android.widget.ListView;
import android.widget.Toast;

public class KonyListBoxActivity extends AppCompatActivity {

    ListView dialog_ListView;
    private LinearLayout.LayoutParams layoutparams = null;
    private LinearLayout.LayoutParams listparams = null;
    private LinearLayout layoutbox = null;
    String[] listContent = {
            "January", "February", "March", "April",
            "May", "June", "July", "August", "September",
            "October", "November", "December"};
    private Drawable popupTitleDefaultBackgroundColor = null;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_kony_list_box);
    }

    public void onBtnOpenKonyListBoxClick(View view) {
        Dialog listdialog = null;
        Context context = KonyListBoxActivity.this;
        int dialogIdentifier = getResources().getIdentifier("DeviceDefaultDialog", "style", getPackageName());
        if(dialogIdentifier != 0)
            listdialog = new Dialog(context, dialogIdentifier);
        else
            listdialog = new Dialog(context);
        //Another Approach
       /* int iconAlignment = Window.FEATURE_LEFT_ICON ;
        listdialog.getWindow().requestFeature(iconAlignment);
        View titleTextView = listdialog.findViewById(android.R.id.title);
        LinearLayout titleLayout = (LinearLayout) (titleTextView).getParent();
        popupTitleDefaultBackgroundColor = titleLayout.getBackground();
        layoutbox = new LinearLayout(context);
        this.layoutparams = new LinearLayout.LayoutParams(AbsListView.LayoutParams.WRAP_CONTENT, AbsListView.LayoutParams.WRAP_CONTENT);
        listparams = new LinearLayout.LayoutParams(AbsListView.LayoutParams.FILL_PARENT, AbsListView.LayoutParams.WRAP_CONTENT);
        if (KonyListBoxActivity.this.getParent() != null)
            ((ViewGroup)KonyListBoxActivity.this.getParent()).removeView(KonyListBoxActivity.this);
        listdialog.setContentView(KonyListBoxActivity.this, listparams);*/

        listdialog.setContentView(R.layout.dialoglayout);
        //listdialog.setTitle("Select");
        listdialog.setCancelable(true);
        //listdialog.set
        listdialog.setCanceledOnTouchOutside(true);
        listdialog.setOnCancelListener(new onCancelListener(){});
        if(listdialog.isShowing())
            return;

        final Dialog listDialogFinal = listdialog;
        dialog_ListView = (ListView)listdialog.findViewById(R.id.dialoglist);
        ArrayAdapter<String> adapter
                = new ArrayAdapter<String>(this,
                android.R.layout.simple_list_item_1, listContent);
        dialog_ListView.setAdapter(adapter);
        dialog_ListView.setOnItemClickListener(new AdapterView.OnItemClickListener(){

            @Override
            public void onItemClick(AdapterView<?> parent, View view,
                                    int position, long id) {
// TODO Auto-generated method stub
                Toast.makeText(KonyListBoxActivity.this,
                        parent.getItemAtPosition(position).toString() + " clicked",
                        Toast.LENGTH_LONG).show();
                listDialogFinal.dismiss();
                //listdialog.dismiss();
                //dismissDialog(CUSTOM_DIALOG_ID);
            }});

        listdialog.show();
    }

    private class onCancelListener implements DialogInterface.OnCancelListener {
        @Override
        public void onCancel(DialogInterface dialogInterface) {

        }
    }
}
