## virtual keypad
  Responsive virtual keyboard. Easy to customize.

## Usage

1. Create keypad HTML:

  HAML
    <pre>
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
        %td.btns{ data: {value:"<"} } Del
    </pre>
  HTML
    <pre>
    <table id="keypad" style="bottom: 0px;">
      <tr class="row">
        <td data-value="1" class="btns">1</td>
        <td data-value="2" class="btns">2</td>
        <td data-value="3" class="btns">3</td>
      </tr>
      <tr class="row">
        <td data-value="4" class="btns">4</td>
        <td data-value="5" class="btns">5</td>
        <td data-value="6" class="btns">6</td>
      </tr>
      <tr class="row">
        <td data-value="7" class="btns">7</td>
        <td data-value="8" class="btns">8</td>
        <td data-value="9" class="btns">9</td>
      </tr>
      <tr class="row">
        <td data-value="." class="btns">.</td>
        <td data-value="0" class="btns">0</td>
        <td data-value="&lt;" class="btns">&lt;</td>
      </tr>
    </table>
    </pre>

2. Init keyboard:

    $('keypad_screen').keypad();


## Options
