8/25/25 Charletta Hudson CIS 182


Report:
Console reported the below Error in file email_list.js on Line 36:
Uncaught TypeError: $(...).submitt is not a function.

Result:
Corrected spelling of submit funtion.


Steps:
[1] Start the application, enter an email address in the first text box, and click the Join List button. Note the error messages that are displayed to the right of the other two text boxes. 

Recieved Response:
---- Emails must match.
---- First name is required.

[2] Enter a different email address in the second text box, and enter your name in the third text box. Then, click the Join List button to see what error messages are displayed. 

Recieved Response:
---- Emails must match.

[3] Enter valid data in all three text boxes and click the Join List button. Then, note that nothing happens. 
Used Developer tool to locate the statement that delayed joining list.

Discovered Response
---- Nothing Happens
---- Console reported the below Error in file email_list.js on Line 36:
Uncaught TypeError: $(...).submitt is not a function.

Use your editor or IDE to fix the error (change submitt to submit). Then, save your files, and test the application again with valid data. This time, a new page should be displayed when you click the Join List button. 

 

