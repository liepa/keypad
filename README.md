## virtual keypad
  Responsive virtual keyboard. Easy to customize.

## Usage

1. Create keypad HTML:

    %table#keypad
      %tr.row
        %td.btns{ data: {value:"1"} } 1
        %td.btns{ data: {value:"2"} } 2
        %td.btns{ data: {value:"3"} } 3
      %tr.row
        %td.btns{ data: {value:"4"} } 4
        %td.btns{ data: {value:"5"} } 5
        %td.btns{ data: {value:"6"} } 6
      %tr.row
        %td.btns{ data: {value:"7"} } 7
        %td.btns{ data: {value:"8"} } 8
        %td.btns{ data: {value:"9"} } 9
      %tr.row
        %td.btns{ data: {value:"."} } .
        %td.btns{ data: {value:"0"} } 0
        %td.btns{ data: {value:"<"} } <

2. Init keyboard:

    $('keypad_screen').keypad();