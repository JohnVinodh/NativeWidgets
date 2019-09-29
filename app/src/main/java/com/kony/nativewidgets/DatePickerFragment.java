package com.kony.nativewidgets;

import android.app.DatePickerDialog;
import android.app.Dialog;
import android.app.DialogFragment;
import android.os.Bundle;
import android.widget.DatePicker;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;
import java.util.Locale;

/**
 * Created by KH2195 on 3/2/2017.
 */

public  class DatePickerFragment extends DialogFragment
        implements DatePickerDialog.OnDateSetListener {

    @Override
    public Dialog onCreateDialog(Bundle savedInstanceState) {
        // Use the current date as the default date in the picker
        final Calendar c = Calendar.getInstance();
        int year = c.get(Calendar.YEAR);
        int month = c.get(Calendar.MONTH);
        int day = c.get(Calendar.DAY_OF_MONTH);
        //c.set(Calendar.DAY_OF_MONTH, day);
        DatePickerDialog datePickerDialog = new DatePickerDialog(getActivity(), this, year, month, day);

        /*SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd",Locale.getDefault());
        String date = sdf.format(new Date());
        long timeInMilliseconds = 0;
        try {
            Date mDate = sdf.parse(date);
             timeInMilliseconds = mDate.getTime();
            System.out.println("Date in milli :: " + timeInMilliseconds);
        } catch (ParseException e) {
            e.printStackTrace();
        }*/
        datePickerDialog.getDatePicker().setSpinnersShown(false);
        datePickerDialog.getDatePicker().setCalendarViewShown(false);
        datePickerDialog.getDatePicker().setMinDate(c.getTimeInMillis());
        // Create a new instance of DatePickerDialog and return it
        return datePickerDialog;
    }

        public void onDateSet(DatePicker view, int year, int month, int day) {
        // Do something with the date chosen by the user
           /* Calendar cal = Calendar.getInstance();
            cal.set(Calendar.MONTH, month);
            cal.set(Calendar.DAY_OF_MONTH, day);
            cal.set(Calendar.YEAR, year);
            if(cal.before(c)) {
                return;
            }*/
        String dateinfo = "Year ::"+year+" Month::"+month+" day::"+day;
        PickersActivity.updateDateToTexView(year,month,day);
    }
}