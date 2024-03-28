# Open Source Intelligence
Open source intelligence is the process of gathering information from publicly accessable sources.  

In the following challenges we will be utilizing a variety of free online tools, and information that is obtained by googling.

## Challenges

<details>
<summary> Challenge 1 (EASY)</summary>

<br>

**Based on the following image, can you identify the following bits of information:**
   + [ ] Where was this image shot?</label>
   + [ ] What is the name of the series this image was from?
   + [ ] What is the name of the episode this image was from?
![image](https://github.com/Purdue-Fort-Wayne-ACM/CTF-Training-Spring-2024/assets/84486562/16669296-747e-4d93-b1f4-84b85d1e9d30)

  <details>
    <Summary>Walkthrough</Summary>

  > How would we be able to get a location from a screengrab? In this section we discuss a fairly simple way to do just that!
>  
  > How we would typically go about solving this type of question, is to first start by reverse image searching. Most search engines will have an option when right clicking an image to do a reverse image search. This is essentially like googling, but instead of words you are googling with images. For instance in chrome you can right click on an image and select the `Search Image with Google` to open a side pane. This side pane will have the results of your image search in them and will link to external sites.
>   
  > In our case, as this image is from a TV show (we can tell this both by the question and the way that the image is composed), we will likely get a lot of hits. From there, once we get the episode number and series name (it should be one of the first results), we can use the google search `Where was <SERIES NAME> filmed` and get all of the required information.

  </details>

  <details>
    <Summary>Answers</Summary>

  > 1. Where was this image shot? **_Portmeirion, Wales_**
>
  > 2. What is the name of the series this image was from? **_The Prisoner (1968)_**
>      
  > 3. What is the name of the episode this image was from? **_Free for All (S1 E4)_**
  </details>

</details>

---

<details>
<summary>Challenge 2 (EASY)</Summary>

<br>

**Using the following image please tell us the following information:**  
   + [ ] What were the camera settings used for this image?
   + [ ] What city is in the image?
   + [ ] What is the name of the building that is directly in front of the camera?
   + [ ] What is the name of the bridge that the photo was taken on?
      
![image](https://github.com/Purdue-Fort-Wayne-ACM/CTF-Training-Spring-2024/blob/main/assets/_MG_9319%20copy.jpg)
Image by Neal Birchfield, Image used with permission. [Download Image](https://github.com/Purdue-Fort-Wayne-ACM/CTF-Training-Spring-2024/blob/main/assets/_MG_9319%20copy.jpg)  

<details>
<summary>Walkthrough</summary>

> Let's start with the camera settings. When you take a picture, the phone or camera will save a little bit of information about the image in addition to the picture taken. This 'metadata' as we call it stores settings such as lens, aperture (how much light was let in), shutter speed (how long the shutter was open for), and more. There are plenty of free metadata viewers online.
>
> After finding the viewing the metadata, we found the camera settings, but unfortunately not the location of the image. We can try reverse image search to see if there are any hits. In doing this, we can see that there are two possible hits, one on a photo site and one on an instagram post. Both were taken in the same city, but can we get down to the bridge. The instagram post could help us with that. It was taken by Cloudgate (aka the 'Chicago Bean'). On google maps, it shows that there are only two bridges anywhere near the bean, one to the east and one to the south. The one to the east doesn't seem to fit, so it must be the one to the south! We can then check what building the bridge is connecting.

</details>

<details>
<summary>Answers</Summary>

1. What were the camera settings used for this image?

    ```txt    
    Camera Brand: Canon
    Camera Model: Canon EOS Rebel T6
    Lens Size: 39 mm
    Aperture: f/7.1
    Shutter Speed: 1/100 sec
    ISO: 100
    ```

2. What city is in the image? **_Chicago_**
3. What is the name of the building that is directly in front of the camera? **_The Art Institute of Chicago_**
4. What is the name of the bridge that the photo was taken on? **_Nichols Bridgeway_**

</details>
</details>

---

<details>
<summary>Challenge 3 (MEDIUM)</summary>

<br>

```txt
Jenna Coleman: Deep Breath
Karen Gillan: The Girl Who Waited
Catherine Tate: Forest of the Dead
Billie Piper: ???
```

**Using the above, please answer the following:**
* What is the missing title?
* What ties these titles together?

<br>

<details>
    <summary>Walkthrough</summary>

> These seem to follow the same pattern, a name then a title. We can make a guess that these might be author's and their books or something similar. If we google one of the names, we can see that they are actors. If we google the title, we can see that these are all names of Doctor Who episodes. Let's use IMDb to figure out any other information about each episode. Let's try it with the last one, the _Forest of the Dead_.
>
> Looking at the cast, we can see that *Catherine Tate* is one of the actors who credited for the episode. We seem to be on the right track! If we do this with the others, we will also see that they follow the same pattern.
>
> Let's check the details of each episode to see if anything matches. If we look under Filming locations, we can see that they all share a common filming location! Looking into this, we see that there are a total of 7 (as of writing) episodes that use this location on IMDb.
>
> To determine what the correct episode is, we can check which one (outside of the three that we know) has the actor *Billie Piper* credited in. 
</details>
<details>
    <summary>Answers</summary>
    
1) What is the missing title? **_The Girl in the Fireplace_**
2) What ties these titles together? **_These all share common filming locations. Specifically_ Dyffryn Gardens, St Nicholas, Vale of Glamorgan, Wales, UK**

</details>
</details>

---

<details>
<summary>Challenge 4 (MEDIUM)</summary>

<br>

```txt
Pecos Hank: (32.8,-89.11),(33.04,-88.65),6,3,1930
Tim Samaras (RIP): (34.05,-88.45),(34.31,-87.92),137,23,2042
Reed Timmer: (34.39,-85.98),(34.77,-85.52),0,25,2319
Jo Harding: |REDACTED|
```

**Using the above, please answer the following:**

* What is the value for Jo Harding? (Give this in the same format as above)  
* What is the common element?  

<br>
<details>
<summary>Walkthrough</summary>

>This seems harder than the last question, but we are also given a lot more information to compensate! Our pattern here follows a very strict format as well!
>
>```
>Name: Number Pair, Number Pair, number, number, number
>```
>
> At first glance, we can tell that the number pairs seem to be close together and look like Latitude/Longitude pairs. The middle two numbers seem odd, but the last number could be a year. However, this probably is not the case as we quickly go beyond the current date and some of these data points would be in the future. So, we have only three bits of actionable information: the name, the first Latitude/Longitude pair, and the second Latitude/Longitude pair. Let's try googling these names to start.
>
> It seems that these are storm chasers. So, we might be tracking storms or tornadoes with these data points. Let's try googling these Latitude/Longitude points and putting them on google maps.
>
> After putting them in Google maps, we can see that these are in Alabama and Mississipi. As we can assume that these are tornadoes, one pair of Latitude/Longitude should be the start or end point of the path the storm took.
>
> Let's try googling a tornado track database.

> [!NOTE]
> This walkthrough will assume that you are using the [MRCC Database](https://mrcc.purdue.edu/gismaps/cntytorn) or [Tornado Archive](https://tornadoarchive.com/explorer/2.2.1)

> After the google mapping of the Lat/Long pairs, we can see that one is in the eastern side of Mississippi towards the center and the other two are in the northern part of Alabama.
>
> After finding them in the database, we can see that they actually share a lot more than we first suspected! They are all EF5s that happened during the same outbreak! There should be only one other tornado that matches this criteria, try filtering for it on the database!

</details>

<details>
<summary>Answers</summary>

1) What is the value for Jo Harding? **_(34.11,-88.15),(35.09,-86.15),145,72,2005_**
2) What is the common element? **_These are all EF5 tornado tracks, specifically all from the same outbreak on April 27<sup>th</sup>, 2011. Each line is in the format:_**

        (START Lat/Lon),(END Lat/Lon),Fatalities,Injuries,Time (UTC)

</details>

</details>

---


<details>
<summary> Challenge 5 (HARD)</Summary>  
 
<br>

**Based on the following image, can you identify the following bits of information:**
  + [ ] What is the name of the video?
  + [ ] Where was the video being reacted to originally posted?
  + [ ] What country is the video being reacted to shot in?
  + [ ] What type of battery was the cause of the critical failure?
![image](https://github.com/Purdue-Fort-Wayne-ACM/CTF-Training-Spring-2024/assets/84486562/f86d7440-da22-4849-81f4-15179ba307ff)

<details>
  <summary>Walkthrough</summary>

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
</details>
<details>
  <summary>Answer Key</summary>

  > 1. What is the name of the video? **_Spicy Pillows, Bulging Batteries, And You | Lexplanations ft. r/spicypillows_**
>
  > 2. Where was the video being reacted to originally posted? **_Viber or r/Slovenia_**
>      
  > 3. What country is the video being reacted to shot in? **_Slovenia_**
>
>   4. What type of battery was the cause of the critical failure? **_3.7V Li-ION 18650_**
</details>
</details>