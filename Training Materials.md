# Training Materials for Spring 2024 CTF Event
Jump to a section that you would like to learn more about and then try the challenges in each section. Answers will be posted below each section.

<details>
  <Summary>Open Source Intelligence (OSINT)</Summary>

## Open Source Intelligence:
### Reverse Image Searching
#### 1) Based on the following image, can you identify the following bits of information:  
   + [ ] Where was this image shot?</label>
   + [ ] What is the name of the series this image was from?
   + [ ] What is the name of the episode this image was from?
![image](https://github.com/Purdue-Fort-Wayne-ACM/CTF-Training-Spring-2024/assets/84486562/16669296-747e-4d93-b1f4-84b85d1e9d30)

<details>
<Summary>Walkthrough and Answers</Summary>

  ##### Walkthrough
  > How would we be able to get a location from a screengrab? In this section we discuss a fairly simple way to do just that!
>  
  > How we would typically go about solving this type of question, is to first start by reverse image searching. Most search engines will have an option when right clicking an image to do a reverse image search. This is essentially like googling, but instead of words you are googling with images. For instance in chrome you can right click on an image and select the `Search Image with Google` to open a side pane. This side pane will have the results of your image search in them and will link to external sites.
>   
  > In our case, as this image is from a TV show (we can tell this both by the question and the way that the image is composed), we will likely get a lot of hits. From there, once we get the episode number and series name (it should be one of the first results), we can use the google search `Where was <SERIES NAME> filmed` and get all of the required information.

  ##### Answers
  > 1. Where was this image shot? **_Portmeirion, Wales_**
>
  > 2. What is the name of the series this image was from? **_The Prisoner (1968)_**
>      
  > 3. What is the name of the episode this image was from? **_Free for All (S1 E4)_**
</details>

#### 2) Based on the following image, can you identify the following bits of information:
  + [ ] What is the name of the video?
  + [ ] Where was the video being reacted to originally posted?
  + [ ] What country is the video being reacted to shot in?
  + [ ] What type of battery was the cause of the critical failure?
![image](https://github.com/Purdue-Fort-Wayne-ACM/CTF-Training-Spring-2024/assets/84486562/f86d7440-da22-4849-81f4-15179ba307ff)

<details>
<Summary>Walkthrough and Answers</Summary>

  ##### Walkthrough
  > This one is much harder than the last one, but is still a good reverse image search experiment.
> 
> You will quickly realize that reverse image search does not give any valuable information. So, we will need to resort to our powers of observation! We know that this is from a video. We know this both from the way that the question is asked and how the image is composed like a 'react' video from YouTube or other popular video sharing platforms. For this section, we will assume that this image is taken from a YouTube video given the aspect ratio. So we have an idea of where to search once we get more information on the image.
> 
> Looking specificially at the video that is being reacted to in the image we can gain some more information. We can clearly see that the video has something on fire, however, the fire looks odd. Instead of being more traditional match/firewood/etc. fire, it is a brilliant white. This might seem to be inconsquectial, but we can gain more information from this. Next looking closely, we can see that the video was taken in what seems to be a parking lot. Looking at this, it seems that the thing burning is likely made of some metal. To determine this, we can look up `metals that burn white`, we get metals such as Magnesium, Titanium, Nickle, Chromium, and Aluminum. Given that the burning object takes up a small amount of space in the parking spot, so we can assume that the burning metal object is also lightweight. Some common metals that are used in transportation and are light weight, we can safely assume that it is made of either aluminum or titanium. So we know what the item is made of, but what could it be? For that, we can look up things that are commonly made of aluminum and are small. This will lead to something like a bike or scooter.
> 
> Both of these are also have 'electric' versions of them. Next, we can see what powers the electric version of a bike or scooter. This will lead to a type of battery. Our instinct is confirmed as well given our last question asking what type of battery is the cause of the fire. After googling `electric scooter battery`, we can see that they are commonly using Lithium Ion batteries.
> 
> Looking at we know now; we know that we are looking for a YouTube video, in which, the YouTuber is reacting to a video of an e-scooter or e-bike on fire that was powered by a lithium ion battery that failed. Knowing this, we know that the YouTube video will likely not have 'Lithium Ion Battery', 'e-bike fire', or 'e-scooter fire'. We can then return to google for more information. When googleing `lithium ion battery "slang"`[^1], we will get "spicy pillow" as slang/common saying for 'Lithium Ion Batteries'. This seems like something that might be a good YouTube video title. So let's google `YouTuber reacts to spicy pillows`. The first result shows a YouTuber or seems to look similar to the one in our screenshot. Watching/skimming through the first result on YouTube, we can quickly confirm that this is the video that the screenshot was taken from.
> 
> We can then go to the subreddit that posted the video using the keywords that were given in the video right before the YouTuber's reaction to the video. We should be able to find the video that was being reacted to. It turns out that the video was reposted from another subreddit. The subreddit that it was _originally_ posted on is a country's subreddit, so we have answer 3. We can then use google translate to determine the rest of the answers.
[^1]: When you use `"<WORD or PHRASE>` or `-<WORD>` in a google search, we refer to this as google dorking. Google dorking is when you modify the google search so that it provides more relevent results for you. `"<WORD or PHRASE>` will force google to return only results that contain that word or phrase verbatim. Using `-<WORD>` will force google to return results that don't contain that word.
  ##### Answers
  > 1. What is the name of the video? **_Spicy Pillows, Bulging Batteries, And You | Lexplanations ft. r/spicypillows_**
>
  > 2. Where was the video being reacted to originally posted? **_Viber or r/Slovenia_**
>      
  > 3. What country is the video being reacted to shot in? **_Slovenia_**
>
>   4. What type of battery was the cause of the critical failure? **_3.7V Li-ION 18650_**
</details>

### Metadata
3) Using the image on the right please tell us the following information:
    * What were the camera settings used for this image?
    * What city is in the image?
    * What is the name of the building that is directly in front of the camera?
    * What is the name of the bridge that the photo was taken on?
      
![image](https://github.com/Purdue-Fort-Wayne-ACM/CTF-Training-Spring-2024/blob/main/assets/_MG_9319%20copy.jpg)
Image by Neal Birchfield, Image used with permission. [Download Image](https://github.com/Purdue-Fort-Wayne-ACM/CTF-Training-Spring-2024/blob/main/assets/_MG_9319%20copy.jpg)  

### Pattern Recognition

4) Using the following information below please tell us the following information:
    * Deep Breath
    * The Girl Who Waited
    * Forest of the Dead

    * What is missing?
    * What is the common element?
</details>
<details>
  <summary>Cryptography</summary>

1) We have this, we think that it was encoded multiple times:  
  ```....-/----./-..../...../-..../-.../-..../-../-..../---../-..../-..../-..../----./--.../....-/--.../...../-..../----./-..../---../--.../.----/..---/-----/....-/-..../....-/----./..---/-----/--.../...../--.../...../--.../...--/-..../---../-..../-...```  
    * How many times was this encrypted?
    * What was the plain text?
2) We have this, we think that it contains a hidden message:
    * How was this encrypted?
    * What was the plain text?  
[DOWNLOAD LINK](https://github.com/Purdue-Fort-Wayne-ACM/CTF-Training-Spring-2024/blob/main/assets/rickysteg.jpg)
![image](https://github.com/Purdue-Fort-Wayne-ACM/CTF-Training-Spring-2024/assets/84486562/c81040d4-f0ce-42f2-ac69-2e8d10d8e9b2)
</details>
<details>
  <summary>Password Cracking</summary>

  ## Password Cracking
  ```bash
c870152b79fd1f55e87c0b5af8d13aa1
d8b98e69f7298208b27886a30400a603
b5c0b187fe309af0f4d35982fd961d7e
627fe11eeef8994b7254fc1da4a0a3c7
daf839300e6394e455a0caf1cf80fb36
8470f3c26d43f5ceca7fc33982c22243
f9b20372fee2d3b8fb87deee330b12ff
f4021ad1ea872387461331899b86e8b1
c3a61b7e621781e5d688da556f11200c
015504c3b7b55e2202e6a71675d4b0c4
dd7536794b63bf90eccfd37f9b147d7f
7fc56270e7a70fa81a5935b72eacbe29
a1853eca7c7cc9b3284d9f91a27f88a4
d75dbd6d1a4e14db1deb9d479a66027a
3260fcbfd052121337ffd7b9175e27d6
5a5af20037bf6c096d7c21b09901781f
8644981e243b6db72a5a1ae779951acc
50f207163fcc448ca1c92f0684d7ca53
2bf548966d9f732596042bd4bb613fe6
71fa8d21fc965a94c99088bc7e6ad263
f01509181f2b21920bb2f4678e6711f5
1694384d1952ab9dee33c346130aea88
bd805a6be924ef32429f4538f72d4b9b
d31715d7098cbf0bd771bcc55af26162
95bd1e3f4ca5eb6fe0fde97155916582
78f17c5da35163a83e4cb55e0d8560be
b99834bc19bbad24580b3adfa04fb947
6f6179654ad5000f5df22e79c4c58404
38a2e462336b731aceec2501bfdc8772
4d78399408e3605b0a91bd2f40ff6253
726e4b9aa84a99321c9f06a5fb99689f
228709856c863ea7b614623aadd1c8b8
0359a9977c037fa2ddb16888580f232c
f27d5da236b2dee7be3d121d139ee7e3
77d6747db3c576327329253d93fc791b
05823fa16def5b8d7eba5dd9db70d92e
59251b907a068e66821223bfadeedca2
39136543e9117d842c4396f0e99f1b79
a9fb5cf3e8f7a465c8da0cd5789621d0
bd7656d444c2cd80a4f74b88b9544234
cd024ef739c2eb0042cea0e6963c86e8
be92b0d7ddbff2f36c4d9436267d3d4a
c5dd9539e8d4c2eb53b8dc818502ff5e
905a49a06e7c163ddc4a003bc59c7e01
1d22ed5a67ebe24f5a0fe4886c9cc1ff
ffbcde20e43136ba3740c72524aab8a5
530524db2a24c4cda31726822c8fdb49
b90091604524151559d3d231fc88a52d
  ```
</details>
<details>
  <summary>Network Traffic Analysis</summary>

  [sus.pcap](https://github.com/Purdue-Fort-Wayne-ACM/CTF-Training-Spring-2024/raw/main/assets/sus_export.pcapng)
1) Using the wireless traffic capture, please tell us the following information
    * How many players where there?
    * Did the players win or did the imposter win?
    * What colors where playing?
    * Did anyone have any special outfits?

</details>
<details>
  <summary>Log Analysis</summary>

  [healtcare log](https://github.com/Purdue-Fort-Wayne-ACM/CTF-Training-Spring-2024/raw/main/assets/LogAnalysis.patient.ssx)
1) Using the log capture, please tell us the following information:
    * What was the model and manufacturer used?
    * What computer was this captured on?
    * Did the patient live?
    * How many shocks did the patient receive?
    * When was this recorded?
</details>
<details>
  <summary>Scanning</summary>

1) We think that there is something is hiding  in the code of scanme.nmap.org, can you check it out and see what you can find?
    * How many open ports are there?
    * What is the most likely Operating system of the server?
    * How long has the server been operational?
</details>
<details>
  <summary>Digital Forensics</summary>

  [capturedfile.docx](https://github.com/Purdue-Fort-Wayne-ACM/CTF-Training-Spring-2024/raw/main/assets/capturedfile.docx)
1) We have recovered a word document. It seems to be corrupted though. Can you find the following information about the document?
    * Who made the document
    * Are there any fonts embedded in the document
    * Are there any images in the document
    * What is the text in the document
</details>
<details>
  <summary>Reverse Engineering</summary>

  Go to [JS Code](https://purdue-fort-wayne-acm.github.io/CTF-Training-Spring-2024/obfuscatedCode_one.html)
</details>
<details>
  <summary>Web Application Exploitation</summary>

1) We have found some vulnerable websites can you find the vulnerabilities?
    * [Employee Panel](https://purdue-fort-wayne-acm.github.io/CTF-Training-Spring-2024/employeepanel)
    * [OurSpace](https://purdue-fort-wayne-acm.github.io/CTF-Training-Spring-2024/ourspace)
</details>
