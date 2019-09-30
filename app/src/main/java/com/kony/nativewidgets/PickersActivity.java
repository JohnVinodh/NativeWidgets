package com.kony.nativewidgets;

import android.annotation.TargetApi;
import android.app.DialogFragment;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.TextView;
import android.widget.Toast;

public class PickersActivity extends BaseAppCompatActivity {
    static TextView tvPickers;
    static Button btnDatePicker;
    static int selectedDay;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_pickers);
        tvPickers = (TextView) findViewById(R.id.tv_pickerinfo);
        btnDatePicker = (Button) findViewById(R.id.btn_DatePicker);

    }
    @TargetApi(24)
    public void onBtnDatePickerClick(View view) {
        DialogFragment newFragment = new DatePickerFragment();
        newFragment.show(getFragmentManager(), "datePicker");
    }

    public static void updateDateToTexView(int year, int month, int day) {
        tvPickers.setText("Year ::"+year+" Month::"+month+" day::"+day);
        btnDatePicker.setText("Year ::"+year+" Month::"+month+" day::"+day);
        selectedDay = day;
    }

    public void onBtnClearCalendarData(View view) {
        Toast.makeText(getApplicationContext(),"Before Clearing day::"+selectedDay,Toast.LENGTH_LONG).show();
        btnDatePicker.setText("Date Picker");
        tvPickers.setText("Picker Info is shown here");
        Toast.makeText(getApplicationContext(),"After Clearing day::"+selectedDay,Toast.LENGTH_LONG).show();
    }

}
