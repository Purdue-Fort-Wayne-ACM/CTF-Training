# Cryptography
Cryptography is the process of hiding or encoding information so that only those intended to read the message can.

In this section we will be identifying common ciphers used and how to decode them.

We call text we are decoding 'Ciphertext' and the text we feed in or get out of the encryption algorithm 'Plaintext'.

## Challenges

<details>
<summary>Challenge 1</summary>

<BR>

**We have captured this message, we think that it was encoded multiple times. We also found the number 10 near it, could this be important?**  

  ```
  ....-/----./-..../...../-..../-.../-..../-../-..../---../-..../-..../-..../----./--.../....-/--.../...../-..../----./-..../---../--.../.----/..---/-----/....-/-..../....-/----./..---/-----/--.../...../--.../...../--.../...--/-..../---../-..../-...
  ```

  * How many times was this encrypted?
  * What is the plain text?

<br>
<details>
<summary>Walkthrough</summary>

<br>

> [!NOTE]
> We will use the tool [Cyberchef](https://gchq.github.io/CyberChef/#input=Li4uLi0vLS0tLS4vLS4uLi4vLi4uLi4vLS4uLi4vLS4uLi8tLi4uLi8tLi4vLS4uLi4vLS0tLi4vLS4uLi4vLS4uLi4vLS4uLi4vLS0tLS4vLS0uLi4vLi4uLi0vLS0uLi4vLi4uLi4vLS4uLi4vLS0tLS4vLS4uLi4vLS0tLi4vLS0uLi4vLi0tLS0vLi4tLS0vLS0tLS0vLi4uLi0vLS4uLi4vLi4uLi0vLS0tLS4vLi4tLS0vLS0tLS0vLS0uLi4vLi4uLi4vLS0uLi4vLi4uLi4vLS0uLi4vLi4uLS0vLS4uLi4vLS0tLi4vLS4uLi4vLS4uLg) to work with this problem.

> We can see that the first encryption measure was into a cipher that replaces different characters with `.` or `-` and seperates different characters with `/`. This cipher is most likely a morse code cipher to start out with.
> 
> After plugging in a `From Morse Code` block in Cyberchef, we can see that the output is now in yet another cipher. This one seems to be going between 0 and F, so it is likely in hexidecimal.
>
> Plugging in a `From Hex` block in Cyberchef, we can see that the output is now in yet another cipher. This one seems to be in regular text, just scrambled. There are a few common scramble ciphers (or shift ciphers). However, two main ones use a number as a key, a rail-fence cipher and a caesar cipher (or ROT). Let's try them both set to 10.
>
> We are going to plug in both for our Cyberchef (order does not matter). If you search for caesar cipher in the *operations* section of Cyberchef, there won't be any results. So we will want to use a ROT cipher instead. We can use ROT13 and modify the settings. We will also want to add a `Rail Fence Cipher Decode`. Let's try setting the *Key* for the Rail Fence cipher to 10 and the *Amount* for the ROT13 to 10 as well.
</details>

<details>
<summary>Answers</summary>
  
  1) How many times was this encrypted? **_This was encrypted 4 times_**
  2) What is the plain text? **_Super Secure Password_**
</details>
</details>

---

<details>
<summary>Challenge 2</summary>

**We captured this image from a hacker. We think that it contains a hidden message can you find it?**

  * How was this encrypted?
  * What was the plain text?  

![image](https://github.com/Purdue-Fort-Wayne-ACM/CTF-Training-Spring-2024/assets/84486562/c81040d4-f0ce-42f2-ac69-2e8d10d8e9b2)
[DOWNLOAD LINK](https://github.com/Purdue-Fort-Wayne-ACM/CTF-Training-Spring-2024/blob/main/assets/rickysteg.jpg)


<details>
<summary>Walkthrough</summary>

> There are only a few ways to hide information in an image without visually distorting the image. We could hide the data in the metadata, unused space in the file, or in the image itself. After analyzing the image's metadata and using the unix command `strings <FILE>` on it, we can see that the data must be hidden in a different way. The image itself...
>
> When we hide the data inside the image itself, we call it steganography. As we know, images are made up of pixels. Each pixel stores three values: R (Red), G (Green), and B (Blue); each ranging from 0 to 255[^1]. If we google steganography decoder, we can see several sites right away. A few will give gibberish, but some sites like [Steganographic Decoder](https://futureboy.us/stegano/decinput.html) and [Aperi'Solve](https://www.aperisolve.com/) will give us the correct plaintext. Both of these sites use a similar technique to find the information.

[^1]: SIDE NOTE: This results in 256<sup>3</sup> different combinations or approximately 16,777,216 different colors. However, the average human eye can only detect around a million different colors. This gives us plenty of room to hide data by modifing small values of pixels. By changing small values in each pixel we can store our information in the image and have it visually look identical to the unmodified image.
</details>
<details>Answers</summary>

  1) How was this encrypted? **_StegHide_**
  2) What was the plain text?
  ```txt
Never gonna give you up
Never gonna let you down
Never gonna run around and desert you
Never gonna make you cry
Never gonna say goodbye
Never gonna tell a lie and hurt you
  ```
</details>
</details>