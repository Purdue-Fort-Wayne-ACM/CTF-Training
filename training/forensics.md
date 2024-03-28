# Digital Forensics

## Challenges
<details>
<summary>Challenge 1</summary>

<br>

**We have recovered a word document. It seems to be corrupted though.**

Download [capturedfile.docx](https://github.com/Purdue-Fort-Wayne-ACM/CTF-Training-Spring-2024/raw/main/assets/capturedfile.docx)

Can you find the following information about the document?

   * Who made the document?
   * Are there any fonts embedded in the document?
   * Are there any images in the document?   
   * What is the text in the document?
   * What is the password to deactivate the document?

<details>
<summary>Walkthrough</summary>
</details>
<details>
<summary>Answers</summary>

1) Who made the document? **_Sabertooth_**
2) Are there any fonts embedded in the document? **_Yes, 11_**
3) Are there any images in the document? **_Yes, 1. rickroll.gif_**
4) What is the text in the document?
```txt
MEMO to head office
We have successfully infiltrated our target. 
To make our presence known we have made it so that every time that a user attempts to open a file, it will rick rolls them. 
The password to deactivate is 5f4dcc3b5aa765d61d8327deb882cf99.

We stand ready for future attacks and are awaiting orders from head office.

Sabertooth
```
5) What is the password to deactivate the document? **_password_**
</details>