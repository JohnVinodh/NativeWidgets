package com.kony.nativewidgets;

import android.app.Dialog;
import android.content.Context;
import android.content.DialogInterface;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.widget.AdapterView;
import android.widget.ArrayAdapter;
import android.widget.ListView;
import android.widget.Toast;

public class AccessiblityTestActivity extends AppCompatActivity {

    ListView dialog_ListView;
    String[] listContent = {
            "January", "February", "March", "April",
            "May", "June", "July", "August", "September",
            "October", "November", "December"};

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_accessiblity_test);
    }

    public void onBtnOpenKonyListBoxClick(View view) {
        Dialog listdialog = null;
        Context context = AccessiblityTestActivity.this;
        int dialogIdentifier = getResources().getIdentifier("DeviceDefaultDialog", "style", getPackageName());
        if(dialogIdentifier != 0)
            listdialog = new Dialog(context, dialogIdentifier);
        else
            listdialog = new Dialog(context);
        listdialog.setContentView(R.layout.dialoglayout);
        //listdialog.setTitle("Select");
        listdialog.setCancelable(true);
        //listdialog.set
        listdialog.setCanceledOnTouchOutside(true);
        listdialog.setOnCancelListener(new AccessiblityTestActivity.onCancelListener(){});
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
                Toast.makeText(AccessiblityTestActivity.this,
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

    public void onBtnSubmitClick(View view) {
        Toast.makeText(getApplicationContext(),"Clicked on Submit button",Toast.LENGTH_LONG).show();
    }
}
