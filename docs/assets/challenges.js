export default {
    "General": {
        "OSINT": {
            "Title": "Open-Source Intelligence",
            "Background": [
                {
                    "type": "p",
                    "text": "Open-source intelligence is the process of gathering information from publicly accessible sources."
                },
                {
                    "type": "p",
                    "text": "In the following challenges we will be utilizing a variety of free online tools, and information that is obtained by googling."
                }
            ]
        },
        "Cryptography": {
            "Title": "Cryptography",
            "Background": [
                {
                    "type": "p",
                    "text": "Cryptography is the process of hiding or encoding information so that only those intended to read the message can."
                },
                {
                    "type": "p",
                    "text": "In this section we will be identifying common ciphers used and how to decode them."
                },
                {
                    "type": "NOTE",
                    "text": "<b>NOTE: </b><br>We call the text we are decoding 'Ciphertext' and the text we feed in or get out of the encryption algorithm 'Plaintext'."
                }
            ]
        },
        "Digital Forensics": {
            "Title": "Digital Forensics",
            "Background": [
                {
                    "type": "NOTE",
                    "text": "<b>NOTE: </b><br>Coming Soon..."
                }
            ]
        },
        "Log Analysis": {
            "Title": "Log Analysis",
            "Background": [
                {
                    "type": "NOTE",
                    "text": "<b>NOTE: </b><br>Coming Soon..."
                }
            ]
        },
        "Password Cracking": {
            "Title": "Password Cracking",
            "Background": [
                {
                    "type": "NOTE",
                    "text": "<b>NOTE: </b><br>Coming Soon..."
                }
            ]
        },
        "Scanning": {
            "Title": "Network Scanning",
            "Background": [
                {
                    "type": "NOTE",
                    "text": "<b>NOTE: </b><br>Coming Soon..."
                }
            ]
        },
        "Network Traffic Analysis": {
            "Title": "Wi-Fi Analysis",
            "Background": [
                {
                    "type": "NOTE",
                    "text": "<b>NOTE: </b><br>Coming Soon..."
                }
            ]
        },
        "Web Application Exploitation": {
            "Title": "Web Application Security",
            "Background": [
                {
                    "type": "NOTE",
                    "text": "<b>NOTE: </b><br>Coming Soon..."
                }
            ]
        },
        "Reverse Engineering": {
            "Title": "Reverse Engineering",
            "Background": [
                {
                    "type": "NOTE",
                    "text": "<b>NOTE: </b><br>Coming Soon..."
                }
            ]
        }
    },
    "OSINT": [
        {
            "name": "The Village",
            "difficulty": "Easy",
            "icon": "https://www.svgrepo.com/show/489216/village.svg",
            "short_description": "Exercise your reverse image searching skills to determine where a TV show was filmed.",
            "description": "One of our field agents was captured by mysterious forces. Luckily, we got one picture from them before they went off the grid. Can you help us find them based on the image?",
            "hasImage": true,
            "assetURL": "../challenge_assets/2024/OSINT_q1_q1.png",
            "questions": [
                "Where was this image shot?",
                "What is the name of the series this image was from?",
                "What is the name of the episode this image was from?"
            ],
            "answers": [
                "35d199bc642f05baaac575557450c74a7a21e4353ad0e1ca75dc4b6a96837f721ab7129d59eaf0f76800228e9f16c87b42cd4bee7a3a49b68e8cff0500cbd766",
                "568abc7a9a55626a17e4317c163555c44e253a98ff1799e5f8fe901c2c8d1ad4d35ff07e2bc05cccb3ed4b9dff16b00e0d99d8469889bd414cb2303823908405",
                "eb7a618236418b1b970141e3bc9f5a0ccb9d2cbbafccb04626228930dc9def69868d74ebb5d33957d4cff65bc717aed41effcf3fc5ea0fb44481d5df02d5c398"
            ],
            "walkthrough": [
                {
                    "type": "p",
                    "text": "How would we be able to get a location from a screengrab? In this section we discuss a fairly simple way to do just that!"
                },
                {
                    "type": "p",
                    "text": "How we would typically go about solving this type of question is to first start by reverse image searching. Most search engines will have an option when right clicking an image to do a reverse image search. This is essentially like googling, but instead of words you are googling with images. For instance, in chrome, you can right click on an image and select the <code>Search Image with Google</code> to open a side pane. This side pane will have the results of your image search in them and will link to external sites."
                },
                {
                    "type": "p",
                    "text": "In our case, as this image is from a TV show (we can tell this both by the question and the way that the image is composed), we will likely get a lot of hits. From there, once we get the episode number and series name (it should be one of the first results), we can use the google search <code>Where was {SERIES NAME}</code> filmed and get all of the required information."
                }
            ]
        },
        {
            "name": "The Bridge",
            "difficulty": "Easy",
            "icon": "https://www.svgrepo.com/show/493853/bridge-engineering.svg",
            "short_description": "Take your reverse image searching skills to another level as you find the location of a mysterious photograph.",
            "description": "One of our operatives sent us this photo. We think that they are close to catching a SAB3RT00TH asset. Can you help us find them so we can send backup?",
            "hasImage": true,
            "canDownload": true,
            "assetURL": "../challenge_assets/2024/iMG9319.jpg",
            "questions": [
                "What city is in the image?",
                "What is the name of the building that is directly in front of the camera?",
                "What is the name of the bridge that the photo was taken on?",
                "What were the camera settings used for this image give answer in the following format (Camera Brand, Camera Model, Lens Size, Aperture, Shutter Spped, ISO)?"
            ],
            "answers": [
                "db2649fff7bec1629136fe845d9d5afde61756b715793791e6a94e57b7317aa83ba0eea637bf363d01d9437a8a0713af50749433031fa91835c86f036701e5b8",
                "400a899b68a4b943feabe9246e4f761100247606a9e928ad686b9ce3949a8cce50d099e18cb1b52db6e74879dfed34c3016b7707bee9efd5c67373dd4a5f837e",
                "a6b8485c253071959d75dfa823b41fe818dbed71081e9718a22cd2ca42a96d7a7561512a667a4cd76c30baaeca08e71e8269251cc07b225d49baa6b2de672f11",
                "e5e190c00c772a9db53306d47216ed042945c3c6dac9771a39634a2997b08c369a13debad84b311052bf54ec9e6c26f4fa9d390d8d4ca7da7d04070766128e2d"
            ],
            "walkthrough": [
                {
                    "type": "p",
                    "text": "Let's start with the camera settings. When you take a picture, the phone or camera will save a little bit of information about the image in addition to the picture taken. This 'metadata' as we call it stores settings such as lens, aperture (how much light was let in), shutter speed (how long the shutter was open for), and more. There are plenty of free metadata viewers online."
                },
                {
                    "type": "p",
                    "text": "After finding the viewing the metadata, we found the camera settings, but unfortunately not the location of the image. We can try reverse image search to see if there are any hits. In doing this, we can see that there are two possible hits, one on a photo site and one on an Instagram post. Both were taken in the same city, but can we get down to the bridge? The Instagram post could help us with that. It was taken by Cloud Gate (aka the 'Chicago Bean'). On google maps, it shows that there are only two bridges near the bean, one to the east and one to the south. The one to the east doesn't seem to fit, so it must be the one to the south! We can then check what building the bridge is connecting."
                }
            ]
        },
        {
            "name": "Versailles",
            "difficulty": "Medium",
            "icon": "https://www.svgrepo.com/show/490623/castle.svg",
            "short_description": "Exercise your pattern recognition skills to find the missing element of a pattern.",
            "description": "A note was dropped off at our main office. Can you figure out what it could mean?",
            "hasImage": false,
            "assetCode": "Jenna Coleman: Deep Breath<br>Karen Gillan: The Girl Who Waited<br>Catherine Tate: Forest of the Dead<br>Billie Piper: ???",
            "questions": [
                "What is the missing title?"
            ],
            "answers": [
                "400465055c560315f4c6dfced37313975d8586f2612d20059c431532f65dcbf8c37c41513e5ace3e156ac190c548492d1cc8d46ed354b64a016063feef2f85dd"
            ],
            "walkthrough": [
                {
                    "type": "p",
                    "text": "These seem to follow the same pattern, a name then a title. We can make a guess that these might be author's and their books or something similar. If we google one of the names, we can see that they are actors. If we google the title, we can see that these are all names of Doctor Who episodes. Let's use IMDb to figure out any other information about each episode. Let's try it with the last one, the <i>Forest of the Dead</i>."
                },
                {
                    "type": "p",
                    "text": "Looking at the cast, we can see that <i>Catherine Tate</i> is one of the actors who credited for the episode. We seem to be on the right track! If we do this with the others, we will also see that they follow the same pattern."
                },
                {
                    "type": "p",
                    "text": "Let's check the details of each episode to see if anything matches. If we look under filming locations, we can see that they all share a common filming location! Looking into this, we see that there are a total of 7 (as of writing) episodes that use this location on IMDb."
                },
                {
                    "type": "p",
                    "text": "To determine what the correct episode is, we can check which one (outside of the three that we know) has the actor <i>Billie Piper</i> credited in."
                }
            ]
        },
        {
            "name": "Twister",
            "difficulty": "Medium",
            "icon": "https://www.svgrepo.com/show/437325/tornado.svg",
            "short_description": "Take your pattern recognition skills to another level as you find the missing element of a complex pattern.",
            "description": "We are tracking some SAB3RT00TH agents and found this slip of paper. We think that if we find the next value in the series, we could track down the agents.",
            "hasImage": false,
            "assetCode": "Pecos Hank: (32.8,-89.11),(33.04,-88.65),6,3,1930<br>Tim Samaras (RIP): (34.05,-88.45),(34.31,-87.92),137,23,2042<br>Reed Timmer: (34.39,-85.98),(34.77,-85.52),0,25,2319<br>Jo Harding: ???",
            "questions": [
                "What is the value of Jo Harding? (Give this in the same format as below)"
            ],
            "answers": [
                "de1a7ae3844d578d5ddd4ee75e5357dbc8ceff1667cf7257f7d5a86006fcb280d1ccc30543b4c49fea33f75f56262fd79338dcaec31fab21ce380bde63cbcdea"
            ],
            "walkthrough": [
                {
                    "type": "p",
                    "text": "At first glance, we can tell that the number pairs seem to be close together and look like Latitude/Longitude pairs. The middle two numbers seem odd, but the last number could be a year. However, this probably is not the case as we quickly go beyond the current date and some of these data points would be in the future. So, we have only three bits of actionable information: the name, the first Latitude/Longitude pair, and the second Latitude/Longitude pair. Let's try googling these names to start."
                },
                {
                    "type": "p",
                    "text": "It seems that these are storm chasers. So, we might be tracking storms or tornadoes with these data points. Let's try googling these Latitude/Longitude points and putting them on google maps."
                },
                {
                    "type": "p",
                    "text": "After putting them in Google maps, we can see that these are in Alabama and Mississippi. As we can assume that these are tornadoes, one pair of Latitude/Longitude should be the start or end point of the path the storm took."
                },
                {
                    "type": "NOTE",
                    "text": "<b>NOTE: </b><br>This walkthrough will assume that you are using the <a target='_blank' href='https://mrcc.purdue.edu/gismaps/cntytorn'>MRCC Database</a> or <a target='_blank' href='https://tornadoarchive.com/explorer/2.2.1/'>Tornado Archive</a>"
                },
                {
                    "type": "p",
                    "text": "After the google mapping of the Lat/Long pairs, we can see that one is in the eastern side of Mississippi towards the center and the other two are in the northern part of Alabama."
                },
                {
                    "type": "p",
                    "text": "After finding them in the database, we can see that they actually share a lot more than we first suspected! They are all EF5s that happened during the same outbreak! There should be only one other tornado that matches these criteria, try filtering for it on the database!"
                }
            ]
        },
        {
            "name": "Spicy",
            "difficulty": "Hard",
            "icon": "https://www.svgrepo.com/show/490897/pillow.svg",
            "short_description": "Test your skills as you combine your reverse image searching skills, pattern recognition, and powers of observation to gain key information with minimal starting information.",
            "description": "We stumbled upon this video, we think it contains crucial information. What can you find out?",
            "hasImage": true,
            "assetURL": "../challenge_assets/2024/OSINT_q5_q1.png",
            "questions": [
                "What is the name of the video?",
                "Where was the video being reacted to originally posted?",
                "What country is the video being reacted to shot in?",
                "What model component was the cause of the critical failure?"
            ],
            "answers": [
                "4d5b797e07532dcd007b0fd2fd02493c3e124483f8e18d4fda3241e7fc9043af6619691464962b6237d6f322284c9144d05137d63dfdb990f111594d2a8f53b5",
                "bc7c7e84f79a953016ffbf5c63155a0199a36b0a1ee527b0a9e8c0633fd802da72273dbac2579a1c1a21010adf44a0c6e80b0bc772cf4e260cc3063d43d6049c",
                "4107eb84daf2445dac3201c3646963f5b405f84434df0616945a33065ccfe31cc7a3305fe31636cfbc28b281680df578b04a5e28f678e7901593d8d30bdde135",
                "0b83538da68e8d9329923d6ae90eb7346b8cd272ee61d1dd36567fee1775e1e5fc2d14ec0c029db6f98bc2d2540b318cc0fb3db2499923657e9fe8505c6a8c05"
            ],
            "walkthrough": [
                {
                    "type": "p",
                    "text": "You will quickly realize that reverse image search does not give any valuable information. So, we will need to resort to our powers of observation! We know that this is from a video. We know this both from the way that the question is asked and how the image is composed like a 'react' video from YouTube or other popular video sharing platforms. For this section, we will assume that this image is taken from a YouTube video given the aspect ratio. So, we have an idea of where to search once we get more information on the image."
                },
                {
                    "type": "p",
                    "text": "Looking specifically at the video that is being reacted to in the image we can gain some more information. We can clearly see that the video has something on fire, however, the fire looks odd. Instead of being a more traditional match/firewood/etc. fire, it is a brilliant white. This might seem to be inconsequential, but we can gain more information from this. Next looking closely, we can see that the video was taken in what seems to be a parking lot. Looking at this, it seems that the thing burning is likely made of some metal. To determine this, we can look up <code>metals that burn white</code>, we get metals such as Magnesium, Titanium, Nickle, Chromium, and Aluminum. Given that the burning object takes up a small amount of space in the parking spot, we can assume that the burning metal object is also lightweight. Some common metals that are used in transportation and are light weight, we can safely assume that it is made of either aluminum or titanium. So, we know what the item is made of, but what could it be? For that, we can look up things that are commonly made of aluminum and are small. This will lead to something like a bike or scooter."
                },
                {
                    "type": "p",
                    "text": "Both of these also have 'electric' versions of them. Next, we can see what powers the electric version of a bike or scooter. This will lead to a type of battery. Our instinct is confirmed as well given our last question is asking what type of battery is the cause of the fire. After googling <code>electric scooter battery</code>, we can see that they are commonly using Lithium-Ion batteries."
                },
                {
                    "type": "p",
                    "text": "Looking at it we know now; we know that we are looking for a YouTube video, in which the YouTuber is reacting to a video of an e-scooter or e-bike on fire that was powered by a lithium-ion battery that failed. Knowing this, we know that the YouTube video will likely not have 'Lithium Ion Battery', 'e-bike fire', or 'e-scooter fire'. We can then return to google for more information. When googling <code>lithium-ion battery 'slang'</code>, we will get 'spicy pillow' as slang/common saying for 'Lithium-Ion Batteries'. This seems like something that might be a good YouTube video title. So, let's google <code>YouTuber reacts to spicy pillows</code>. The first result shows a YouTuber or seems to look similar to the one in our screenshot. Watching/skimming through the first result on YouTube, we can quickly confirm that this is the video that the screenshot was taken from."
                },
                {
                    "type": "p",
                    "text": "We can then go to the subreddit that posted the video using the keywords that were given in the video right before the YouTuber's reaction to the video. We should be able to find the video that was being reacted to. It turns out that the video was reposted from another subreddit. The subreddit that it was originally posted on is a country's subreddit, so we have answer 3. We can then use google translate to determine the rest of the answers."
                }
            ]
        },
        {
            "name": "New Ride",
            "difficulty": "Easy",
            "icon": "https://www.svgrepo.com/show/533553/car-side.svg",
            "short_description": "Exercise your reverse image searching skills to determine key information about a car.",
            "description": "Our field officers tracked the evil SAB3RT00TH to a secret hiding spot. We have seen this car a few times. Can you identify the make, model, and year of the car so that we can issue a warning to law enforcement?",
            "hasImage": true,
            "assetURL": "../challenge_assets/2023/car.jpg",
            "questions": [
                "What is the make of the car?",
                "What is the model of the car?",
                "What is the year of the car?"
            ],
            "answers": [
                "faa3d304760a9b150d84c00c4290a0b148b88838271373aed0e3d2735d2f538e4e95192bfb4bf18985ea0d915ab12129136342294b724ce24bc4712205b61278",
                "b8a71510559a16569a05f59b96de9ae50366cfb717898662272b77d82f3fce7e2881f57dae14e7dd58e6bcf5bfdb01b8c358afba531124b5948abdf28167cfef",
                "9955e8eeabf92e58d06d2f592d0d8d1edbaf207219068271259ba3fbe363e1456b200704d6d07b183c8ed791ef4dfd579d2a530ec029d4235e563352c2c31135"
            ],
            "walkthrough": [
                {
                    "type": "p",
                    "text": ""
                },
                {
                    "type": "NOTE",
                    "text": "Coming soon..."
                }
            ]
        },
        {
            "name": "Shopping",
            "difficulty": "Medium",
            "icon": "https://www.svgrepo.com/show/521847/shopping-cart.svg",
            "short_description": "Exercise your pattern recognition skills to find the missing element of a pattern.",
            "description": "Our intel officers intercepted some suspicious numbers. What could they mean? And what is the evil SAB3RT00TH trying to build?",
            "questions": [
                "What is the 992.919.91?",
                "What is the 105.476.36?",
                "What is the 703.755.28?",
                "What is the 605.113.62?"
            ],
            "answers": [
                "ec014f82f09581999ea3bbd57f325a7c3af706e5524e59f1d094499e5efcb1fa22b62c84f2070e2428439b650dfa41affc48149967fdf73f1e4218e0da7ff3ab",
                "cc777ae9bbd0c4a180990f34713831b4941b3f32ef2a26c3f102048233c030f18f4b9dcbe4c11f3acb83a0855126621717a428c7fdad312889b91a4f5a601a07",
                "b555c4ca6c480d0c48d78146c000cd21c7cd3f4e46b173808692cabc0028eac35a4152d84b05c6a30377a2668892910d36f51206d7f6bd55b04703463a14e0c5",
                "cc777ae9bbd0c4a180990f34713831b4941b3f32ef2a26c3f102048233c030f18f4b9dcbe4c11f3acb83a0855126621717a428c7fdad312889b91a4f5a601a07"
            ],
            "walkthrough": [
                {
                    "type": "p",
                    "text": ""
                },
                {
                    "type": "NOTE",
                    "text": "Coming soon..."
                }
            ]
        },
        {
            "name": "Travel",
            "difficulty": "Medium",
            "icon": "https://www.svgrepo.com/show/509196/plane.svg",
            "short_description": "Take your reverse image searching skills to another level as you find the location of a mysterious photograph.",
            "description": "Good job foiling the plans of SAB3RT00TH! We have been watching their leader for a while now and they sent this image to the SAB3RT00TH Admins, can you find out what state the leader is in?",
            "hasImage": true,
            "assetURL": "../challenge_assets/2023/travel.jpg",
            "questions": [
                "What state is the leader of SAB3RT00TH in?",
                "What is their address?"
            ],
            "answers": [
                "999dec7744816a9a9cb3a3a9bdce1f74f9339ea94097267d8852757fff1fb174135ca2f60ba1cfdea5bcf31f4fdb00052b07c0108bda34154ea30f89cb66427e",
                "5689c34ee2b1b4d5f70cb3b40815ad951e392c08e603edc6aec150e56c274455e74bcca423b9279c23b34d1ca12c2b21df4714cc3c297cab6863e13f86ddf57a"
            ],
            "walkthrough": [
                {
                    "type": "p",
                    "text": ""
                },
                {
                    "type": "NOTE",
                    "text": "Coming soon..."
                }
            ]
        },
        {
            "name": "Recon I",
            "difficulty": "Easy",
            "icon": "https://www.svgrepo.com/show/532551/search-alt-1.svg",
            "short_description": "Exercise your googling skills as you find a variety of information.",
            "description": "We have found some interesting email behavior from some domains. Can you get us more information about how these domains handle their emails?",
            "questions": [
                "What is the policy for potential fraudulent emails sent by a pfw email?",
                "What is the policy for potential fraudulent emails sent by a microsoft email?",
                "What email address gets message-specific forensic information for a potentially fraudulent email sent from a microsoft account?"
            ],
            "answers": [
                "33773131aad342fd29cc9efb3478770a2fd10c522e848dba433a855047ba7738d11b006635764a00e0534b62a56d22be3695873f00635330a7d115e9839a6735",
                "571351677e4cf89cd7853a4d85eefea21f5817dda3322893441e3c16472985dd49b67c9a80635a90823d6221fd8d0c17580f913e55addb50891eacd24a70a943",
                "7ec2151ea5c3f1d3c6dded7e5de14a15f84591eaae251280abe7631fa2b741ed7b7586f1f6b424bd4809b6b9ec8d3b7a4cf85d9562ab339594ed1ba6b0401bc4"
            ],
            "walkthrough": [
                {
                    "type": "p",
                    "text": ""
                },
                {
                    "type": "NOTE",
                    "text": "Coming soon..."
                }
            ]
        },
        {
            "name": "Recon II",
            "difficulty": "Easy",
            "icon": "https://www.svgrepo.com/show/532551/search-alt-1.svg",
            "short_description": "Exercise your googling skills as you find a variety of information.",
            "description": "We have some found that some SAB3RT00TH has switched how they are transmitting information. Can you crack their protocol?",
            "questions": [
                "When was RFC 2549 published (M/D/YYYY)?",
                "Who published RFC 2549?",
                "Who owns KLAF?",
                "Who owns KFWA?"
            ],
            "answers": [
                "7b8705b46afc894b0bef3e6810fa22d5a5fcd74c35239391a7b42df8e4b1508a4b339cefc3f2f96c3bca99eb9e58d5ac13b895d3562c28d705309881c6439b11",
                "42d56581e318bbcb7e36fbc7c8dba1e9e3247e427dc72a2b9e3e298c05974fa63f7134802d54915900a6addd351f6e5894abed799681181e0ff4ac7782577b61",
                "80eff33ab6af981380edd2ea203380b13aa11ec8bdb101f0f57f4432c19138a6120541455eebd8701837f841e5b86101679051ad127a3a4f107af19831709f3f",
                "28cee625ff77b0c71687640702b7e22c2986d4e9d9e0c9393c9c975765698da9e862b19f3dcd916ddbf19a626b29cd4cdc6b9bc6c28d006670c57cbc3edcf166"
            ],
            "walkthrough": [
                {
                    "type": "p",
                    "text": ""
                },
                {
                    "type": "NOTE",
                    "text": "Coming soon..."
                }
            ]
        },
        {
            "name": "The Numbers Speak to Me",
            "difficulty": "Easy",
            "icon": "https://www.svgrepo.com/show/309771/math-formula.svg",
            "short_description": "Use google to identify a variety of ciphers.",
            "description": "We have found some mysterious numbers written on a sticky note that an operative managed to capture from SAB3RT00TH. Can you find what they might be?",
            "questions": [
                "What is 2539979203",
                "What is 134744072",
                "What is 3627729582"
            ],
            "answers": [
                "ab6041b657e1ddf45e45f188a259b7584dbc664c4377a1ebf9e37e6f8d33619d164e7604b15157652948f008a2db5be0c9ca58f151087f938fbe0580ddf4bdce",
                "1aae4721891b426e3389e9e76b50e727d2be6f5f247532081ddcb793638aa794aaf818181820965abcfe6b86a934c3ab75cb1f017411395bbdd0d815c2caa207",
                "7d97069b49078b4cb1e1f548f270009fcd23705c8f90245793612958b033996a7ad50e3cdc0c7f68343d5bc59b3b5e387b08058c6bd4c324a33123f6cc2f4e06"
            ],
            "walkthrough": [
                {
                    "type": "p",
                    "text": ""
                },
                {
                    "type": "NOTE",
                    "text": "Coming soon..."
                }
            ]
        },
        {
            "name": "Old School",
            "difficulty": "Easy",
            "icon": "https://www.svgrepo.com/show/431253/school.svg",
            "short_description": "Use google to identify a variety of ciphers.",
            "description": "It seems that SAB3RT00TH has decided to go old school with some of their ciphers. We think that this will lead us to a dead drop location. Where could it be?",
            "hasImage": true,
            "assetURL": "../challenge_assets/2023/OldSchool.png",
            "questions": [
                "What is the hidden message?"
            ],
            "answers": [
                "8bd6e47f587814f75192d63ff223624fea8448ee542dd94d6c5722deb7dca9cac108e0c7a18ece471838ddfc0a98ad9a3f0a562ebc8a01359582524a783fff02"
            ],
            "walkthrough": [
                {
                    "type": "p",
                    "text": ""
                },
                {
                    "type": "NOTE",
                    "text": "Coming soon..."
                }
            ]
        },
        {
            "name": "Bill",
            "difficulty": "Medium",
            "icon": "https://www.svgrepo.com/show/509353/eye-closed.svg",
            "short_description": "Take your reverse image searching skills to another level as you find the location of a mysterious photograph.",
            "description": "We received this image from a field agent. We suspect that they have had an encounter with a six fingered man. Can you find out where they are before a deal is made?",
            "hasImage": true,
            "canDownload": true,
            "assetURL": "../challenge_assets/2023/Bill.jpg",
            "questions": [
                "Where was this image supposedly taken?",
                "At what time was this image taken (M/D/YYYY H:MMam/pm)?",
                "What was the type of camera used to take this image?",
                "Where was this image actually taken?"
            ],
            "answers": [
                "37d460787c8a5a5ca5b2888a35b106afd5d5c5fbe1fee1b241e4ae2872ebcee028eee4b0624b8527c1a4ab08d881385cd955edba67c6389b58662d3ff47ad01f",
                "0dbf15dd6ceb0d23a7d675c4e18bea628c6b980ee84c04e8b9314498eb31bd6afa91ff4de8649eab902a200fa9385b440aacbbf5e08021823e5ec74bd69de192",
                "fdfaaa3515a5cde903eb772ea6a11000ffcc910de1c87252b218d3838bb2b8b4752c17a3d02463768ca57aa51e90feaa18c4e6c27957461f47ea9276f5879f2f",
                "d139534b749fedade19646a2c064318882c5c936bed51561327dcd9b951b72dacbfbe31d272f0d1a522b0f4b016da24c34d42cba2226f66bd9a235a0b0503149"
            ],
            "walkthrough": [
                {
                    "type": "p",
                    "text": ""
                },
                {
                    "type": "NOTE",
                    "text": "Coming soon..."
                }
            ]
        },
        {
            "name": "Blown Away",
            "difficulty": "Medium",
            "icon": "https://www.svgrepo.com/show/470897/storm.svg",
            "short_description": "Take your reverse image searching skills to another level as you find the location of a mysterious photograph.",
            "description": "SAB3RT00TH was sending the attached image to one of their field agents telling them to pick up a dead drop at a certain location. We think it has something to do with where the image was taken. Can you track them down?",
            "hasImage": true,
            "assetURL": "../challenge_assets/2023/Tornado.jpg",
            "questions": [
                "What tornado is pictured?",
                "What is this image commonly called?",
                "Who took this photo?",
                "What was the address where this image was taken?",
                "(BONUS) Was the provided image modified?"
            ],
            "answers": [
                "2df7f8be54739daaf8856497d443811aafe7830ea59cd342840bd3d8fcc170b7d0246a634937984a67afe238002839e67f9e141a410f8487c4ca730aec1633a0",
                "96132bdbb7b2a23d6c929b7d523ca40d386e2bfa66e792013c3ce17f49794e8de9d3d57e328f08d73f85258afad75bce614bda7ddc2a9ac9016bb209b77c3461",
                "1a4dbd479be69eb48c856c12f82c0a8e0cb267e2bed90e3223720f801cf44fc2ad658c429b24c3d967394f0758ba2ca74dad1fab307ff065cdbe22eaf0a2e817",
                "e46df517a1f66b76ac3ecd69b19d48e167797534c4d1f95a0b9d20ff3395fadcf9a9248ccce0d25423ea07984269505041877347f27e31347c4132f22478925e",
                "7573dbd5c3467c75c236abad84e7948881b0d192910d0755af74f50f2cef99cda1d57acc6d0ff600f75c6299dfde8e7ff2e5f44c9945769b8f1d946df2946195"
            ],
            "walkthrough": [
                {
                    "type": "p",
                    "text": ""
                },
                {
                    "type": "NOTE",
                    "text": "Coming soon..."
                }
            ]
        },
        {
            "name": "Threats",
            "difficulty": "Easy",
            "icon": "https://www.svgrepo.com/show/483652/hacker.svg",
            "short_description": "Research key information about potential cyber threats.",
            "description": "We think that some APTs that we are tracking have taken inspiration from other famous APTs. Can you find out more about some?",
            "questions": [
                "Who is Housefly connected to?",
                "What country is connected to Stardust Chollima?",
                "Who released the NotPetya worm?",
                "What is the Mandiant APT id for BRONZE FLEETWOOD?",
                "Who identified Monster Libra?"
            ],
            "answers": [
                "bd92eddcc897c1063aecff3b3fa4f4266ea7ed6e159b0625ba83b5cd33c1a79433f1a3364e6871d831233a392eb3e8219b0a8df778d83782fa606ff464a930a2",
                "27a24ad143e371046200645747ba5eb8815ebe28d87ed69f4121f5e573b37bb6acd9759834a710513d226dac102c36f92a605b30d308b64e2ec84d24b16e2862",
                "47ef59f7edf37a96707c081fbefba62ea3154878461c6dcb34692e656a27bf5de0612b6d7633ee292869957421712adcd11844f76bfaaabaf17d2bf3692b2041",
                "ec2283d40cbe6e1f46b8e120423be27694ef51f05054f7d568b940c5527b13586489901b9f2f0d04f6605455c18039077a6a3bd3e75db93b7f363be7c4f55a0b",
                "200b3093c79a9acb31dd0fed651c135ca601eb534076099d0654b76a82a8dd26259c29ef2565c09e8a2fcf48e745d9f731e65a42cadbdd084d02d38abdc29e80"
            ],
            "walkthrough": [
                {
                    "type": "p",
                    "text": ""
                },
                {
                    "type": "NOTE",
                    "text": "Coming soon..."
                }
            ]
        },
        {
            "name": "Foodie",
            "difficulty": "Medium",
            "icon": "https://www.svgrepo.com/show/532587/cookie.svg",
            "short_description": "Use a clip from a video to gain critical information.",
            "description": "We found this video saved on a hard drive belonging to Apollo. We think that Apollo is going to get the cookie reviewed in the video, but we don't know where.",
            "hasVideo": true,
            "assetURL": "../challenge_assets/2024/Foodie.mp4",
            "questions": [
                "What is the full name of the person reviewing the cookie?",
                "Where was the cookie bought? (Town, State/Territory)",
                "When was this cookie made? (MM/DD/YYYY HH:MM)",
                "What is the ID of the video?"
            ],
            "answers": [
                "345fff10b03eaf290d199814c99472aee3c4d96758ee2875bc15b7bbf645ef6219fb900b3cb34efeb4970e07201e908c4baf42653892cf27bb31a8e78fe07caf",
                "662d091e906ebbc2fc12474917d78723eb3cb25221c689a1b48e5b9e38e504a77ef78314ae8ed431fe684bcaa6c0c8bb18df28924752730bfc28ae9ae5cf0540",
                "c888a24c703f7bee86faf12fb959682e371d71861d000083dcd38c237f69c0678c804c019eb1844eb7df2302ceb0f24da2ef6eba3436e6db652aa55141c23339",
                "f9b8f90256677da53c6fe39ff0ecb04c19ebb12ca9d843b3640c283f6e548e2b177d9ebb8aaf5c75700bef90eacd169e0efa851dd42453892cc64d9a847be1dd"
            ],
            "walkthrough": [
                {
                    "type": "p",
                    "text": ""
                },
                {
                    "type": "NOTE",
                    "text": "Coming soon..."
                }
            ]
        },
        {
            "name": "On Par",
            "difficulty": "Challenge",
            "icon": "https://www.svgrepo.com/show/480491/golf-8.svg",
            "short_description": "Exercise your pattern recognition skills to find the missing element of a pattern.",
            "description": "We have tracked the locations of several radio transmissions sent by Centipede, but we can't find the last one. We suspect that the next signal will be sent from a device somewhere in California.",
            "assetCode": "38.3266625, -77.0405319<br>29.4639600, -98.4514000<br>42.298649, -87.851212",
            "questions": [
                "What is the make and model of the device that all locations had in common?",
                "If the signal was sent from the device, how many feet could it have been effectively heard from?",
                "How tall is the device in cm?",
                "What are the GPS coordinates of the next location?"
            ],
            "answers": [
                "6fecb5826cfac219bede55825cc11441cf9a5f1224f3899de7dab52ec7409c84a55c149db7723c57671e0a4213b22d361d49d8fae257bf04ad5c31671faf40d3",
                "3c93457c61411a0c77df29385f6ced1df6a8bc8bb5d1bb3575430481b6b9057e2187b03de67c16cd79f391f42ca8f28c77f2679723e137c7e69e2fa29ad72d4f",
                "c5734030523aab44f03d71d22e43b4cc2094b4bf76fc601dceb2063d643253635105e1a49fb9765c38ee3dbd697677ca0dab17edca87570454bc1ee26b3f75f8",
                "949865821d2e90633673d84f6e3e2894fc970d54e5ad1625f73e3c0cc56b9c3c2a762325aa1c2873b2ba99e83607799c481797a6ced2c9bd2224c9bd55aecf9a"
            ],
            "walkthrough": [
                {
                    "type": "p",
                    "text": ""
                },
                {
                    "type": "NOTE",
                    "text": "Coming soon..."
                }
            ]
        }
    ],
    "Cryptography": [
        {
            "name": "Dots and Dashes",
            "difficulty": "Medium",
            "icon": "https://www.svgrepo.com/show/209201/morse-code.svg",
            "short_description": "Exercise your puzzle solving skills to decrypt text that has been encrypted multiple times.",
            "description": "We have captured this message, we think that it was encoded multiple times. We also found the number 10 near it, could this be important?",
            "assetCode": "....-/----./-..../...../-..../-.../-..../-../-..../---../-..../-..../-..../----./--.../....-/--.../...../-..../----./-..../---../--.../.----/..---/-----/....-/-..../....-/----./..---/-----/--.../...../--.../...../--.../...--/-..../---../-..../-...",
            "questions": [
                "How many times was this encrypted?",
                "What is the plain text?"
            ],
            "answers": [
                "9536c1dde53c7b959941fcd4a11caa96c77983e25a26cfa1d631ca26e24f217a4fd1c9ab5bf6631f8f2f994804685b47b46fa5d232404208266336910ec8ed28",
                "420d993150cb9f8f57b79efb6cd1ef7ffede4456a5846b0a380f5bd13b8a9ac505a2776783702e7d086725830050f624dd218c07975f2eac2a9a045d585b0a37"
            ],
            "walkthrough": [
                {
                    "type": "NOTE",
                    "text": "We will use the tool <a target=\"_blank\" href=\"https://gchq.github.io/CyberChef/#input=Li4uLi0vLS0tLS4vLS4uLi4vLi4uLi4vLS4uLi4vLS4uLi8tLi4uLi8tLi4vLS4uLi4vLS0tLi4vLS4uLi4vLS4uLi4vLS4uLi4vLS0tLS4vLS0uLi4vLi4uLi0vLS0uLi4vLi4uLi4vLS4uLi4vLS0tLS4vLS4uLi4vLS0tLi4vLS0uLi4vLi0tLS0vLi4tLS0vLS0tLS0vLi4uLi0vLS4uLi4vLi4uLi0vLS0tLS4vLi4tLS0vLS0tLS0vLS0uLi4vLi4uLi4vLS0uLi4vLi4uLi4vLS0uLi4vLi4uLS0vLS4uLi4vLS0tLi4vLS4uLi4vLS4uLg\">Cyberchef</a> to work with this problem."
                },
                {
                    "type": "p",
                    "text": "We can see that the first encryption measure was into a cipher that replaces different characters with <code>.</code> or <code>-</code> and separate different characters with <code>/</code>. This cipher is most likely a morse code cipher to start out with."
                },
                {
                    "type": "p",
                    "text": "After plugging in a <code>From Morse Code</code> block in Cyberchef, we can see that the output is now in yet another cipher. This one seems to be going between 0 and F, so it is likely in hexadecimal."
                },
                {
                    "type": "p",
                    "text": "Plugging in a <code>From Hex</code> block in Cyberchef, we can see that the output is now in yet another cipher. This one seems to be in regular text, just scrambled. There are a few common scramble ciphers (or shift ciphers). However, two main ones use a number as a key, a rail-fence cipher and a Caesar cipher (or ROT). Let's try them both set to 10."
                },
                {
                    "type": "p",
                    "text": "We are going to plug in both for our Cyberchef (order does not matter). If you search for Caesar cipher in the <i>operations</i> section of Cyberchef, there won't be any results. So we will want to use a ROT cipher instead. We can use ROT13 and modify the settings. We will also want to add a <code>Rail Fence Cipher Decode</code>. Let's try setting the <i>Key</i> for the Rail Fence cipher to 10 and the <i>Amount</i> for the ROT13 to 10 as well."
                }
            ]
        },
        {
            "name": "Ricky",
            "difficulty": "Medium",
            "icon": "https://www.svgrepo.com/show/120758/twirl-grid.svg",
            "short_description": "Find data that has been hidden in plain sight.",
            "description": "We captured this image from a hacker. We think that it contains a hidden message can you find it?",
            "hasImage": true,
            "canDownload": true,
            "assetURL": "../challenge_assets/2024/rickysteg.jpg",
            "questions": [
                "How was this image encrypted?",
                "What is the plaintext?"
            ],
            "answers": [
                "81e0798180596c0a76deb6c3155a32b5dd5164fd2238cc628cbe1860ba0a1272331aa595a1b9b7c3836a121b70b6563c31be4bfc0da07a21c87dc043af0443ef",
                "72471b4ea3028b00163bf51876b7ffc036ca493d8192e2a84dfd367331c5b8d40c1619a79eca1a612b57e573191f32e932238f5fe8af0aa4e491e9ac03383ed1"
            ],
            "walkthrough": [
                {
                    "type": "p",
                    "text": "There are only a few ways to hide information in an image without visually distorting the image. We could hide the data in the metadata, unused space in the file, or in the image itself. After analyzing the image's metadata and using the UNIX command <code>strings {FILE}</code> on it, we can see that the data must be hidden in a different way. The image itself..."
                },
                {
                    "type": "p",
                    "text": "When we hide the data inside the image itself, we call it steganography. As we know, images are made up of pixels. Each pixel stores three values: R (Red), G (Green), and B (Blue); each ranging from 0 to 255. If we google <code>steganography decoder</code>, we can see several sites right away. A few will give gibberish, but some sites like <a href=\"https://futureboy.us/stegano/decinput.html\" target=\"_blank\">Steganographic Decoder</a> and <a href=\"https://www.aperisolve.com/\" target=\"_blank\">Aperi'Solve</a> will give us the correct plaintext. Both of these sites use a similar technique to find the information."
                },
                {
                    "type": "NOTE",
                    "text": "<i>Aside: </i><br>Images are stored in pixels, as each pixel is a set of three values with a range of 256, this results in 256<sup>3</sup> different combinations or approximately 16,777,216 different colors that it can display. However, the average human eye can only detect around a million different colors. This gives us plenty of room to hide data by modifying small values of pixels. By changing small values in each pixel, we can store our information in the image and have it visually look identical to the unmodified image."
                }
            ]
        },
        {
            "name": "Dance Monkey",
            "difficulty": "Medium",
            "icon": "https://www.svgrepo.com/show/8549/dancer-motion.svg",
            "short_description": "Identify the cipher and decrypt to find the plaintext.",
            "description": "",
            "hasImage": true,
            "canDownload": true,
            "assetURL": "../challenge_assets/2023/DanceMonkey.png",
            "questions": [
                "What is the plaintext?"
            ],
            "answers": [
                "e02dbc3139cd1addbdd3ea97ae35f12498dcf16b58c6eaca245845e14ef6de52fb366aef7eb8a0d1dea2849806ad359c83ce4935e2def06fff2c28ab7277491c"
            ],
            "walkthrough": []
        },
        {
            "name": "Pikachu",
            "difficulty": "Medium",
            "icon": "https://www.svgrepo.com/show/315521/pokemon.svg",
            "short_description": "We captured this image from a hacker. We think that it contains a hidden message can you find it?",
            "description": "",
            "hasImage": true,
            "canDownload": true,
            "assetURL": "../challenge_assets/2023/captain_pikachusteg.jpg",
            "questions": [
                "What is the plaintext?"
            ],
            "answers": [
                "138da1b09fc11f84f452d573861c9fecba4146afb90873bee98857f1e851f194d14587473ed58a8440a3663949991f3315be1ed7cc3ff9108310a35eb6877ae0"
            ],
            "walkthrough": []
        },
        {
            "name": "Shifty",
            "difficulty": "Easy",
            "icon": "https://www.svgrepo.com/show/448010/gear-box.svg",
            "short_description": "Identify the cipher and decrypt to find the plaintext.",
            "description": "",
            "questions": [
                "What is Bmeeiadp?",
                "What is xdlyaf?",
                "What is Snbbrn?",
                "What is dwyoqvi?",
                "What is praodsws"
            ],
            "answers": [
                "dceb060f775b65369bec51c97da2b12e874eb093a59d8eb867988f9b44d42eacb5ae7aff471874b9b943d1313501876477844452c1c73aaee72121253ee0d69b",
                "a5cd272287098b7b4c9f6c359b9d25f7367b3c0b7360b0eea29c72544d7b88d9c301e55417675e26bf23f9fc88ab37929f0b34c122d6ca56b3a46249b18f85b2",
                "cdb3004752b3674032f5e17ba60c404b8dbeea9f57cf4cf71eac461f1e5d5ad96580b3f245ee00d3b97c33d0f04a417a96c50eb60f4891f7961691295a87a6a8",
                "cbf922713ad64bf6d53635ad4c8cf3bc0cad8cd7a90a68b7f64b543d5a60ab7b404fdec3752f56c331f11b2a4f7fac9e31b3d271751e2631c3fa04f496796591",
                "afe99137967ee6f5ec8f08df89dd8076db932e13d4ca8d7b32feda3dc919ae3e1657cf30616523d28500727755eddad5a6e18fe255b407a9c5f6dd8de1a43b99"
            ],
            "walkthrough": []
        },
        {
            "name": "The Basics",
            "difficulty": "Easy",
            "icon": "https://www.svgrepo.com/show/281904/book-mortarboard.svg",
            "short_description": "Identify the cipher and decrypt to find the plaintext.",
            "description": "",
            "questions": [
                "What is 01010000 01100001 01110011 01110011 01110111 01101111 01110010 01100100 00110001 00110010 00110011?",
                "What is 6578616D706C65?",
                "What is IFSG22LONFZXI4TBORXXE===?",
                "What is R2lvdmFubmk=?"
            ],
            "answers": [
                "52e9a1424242b276c60732a3dee61fc5fba68d55e53c87e256320ea016b209b755ee68aaae13b2cc09de0c22a880794fffcd2e454032e00d9d65c36f0c00eb22",
                "666122910be45bf57a3092136e92bb95765cf250c8f6df980da7de112b528989fed89fa5e8bb7c13c5a6e6c295bd31eddf706dd63a7a48721003906216764207",
                "67d87ed793494f774a54c07aec789b897435baeee3600598b112fb9cefc76e83ccb4a83403f7c630b9068c9d17919bd93cb33e6f3f0ffeffe8905ecd30c74585",
                "0ca96fa9de394ec3e9f681e244e06b8c2031eeff4597504bf07afb5c4c7581f87b561316dd65ffd405e96f9b9bb1cc5d5ea9b31ea1efee3a83369a705812531b"
            ],
            "walkthrough": []
        },
        {
            "name": "What do you Meme?",
            "difficulty": "Hard",
            "icon": "https://www.svgrepo.com/show/352799/laugh-beam.svg",
            "short_description": "Find data that has been hidden in plain sight.",
            "description": "We captured this image from a hacker. We think that it contains a hidden message can you find it?",
            "hasImage": true,
            "canDownload": true,
            "assetURL": "../challenge_assets/2023/WhatDoYouMeme.png",
            "questions": [
                "What method was used to hide the information?",
                "What site did SAB3RT00TH log in to?",
                "What is the flag?"
            ],
            "answers": [
                "01e54c9f375cbdbb570da3ab2a8f691bd0ab10cbb00b93dd0c791b5cf3cd8c0e24db89396193ccb957b5621230ece46d8ed4e9587656d6abed78a0784d0e5b61",
                "e6eec7885bf1dd2c67e3d7304db145b3f39560109df68f58231ec49a9347192ed226e987c3ba2223f0cfd92f448beacd8cb53b38b44e812354c31cb474f5962d",
                "0016399256e5f353ba8ac14048a9a0d9587ec73a11f8fbc869b5c493f2b7972d2462ff9da183fb29db28e1644a44cdc4bd56502e04806a0ca92fdf5ba978914b"
            ],
            "walkthrough": []
        }, {
            "name": "Poached",
            "difficulty": "Hard",
            "icon":"https://www.svgrepo.com/show/478160/radio-tower-free-illustration-2.svg",
            "short_description": "Find data that has been hidden in plain sight.",
            "description": "We found that some ",
            "hasAudio": true,
            "assetURL": "../challenge_assets/2024/Poached.webm",
            "assetCode": "44349   48950   10642   61323   37117\n80392   23148   82094   86889   15203\n61108   44224   81178   86191   01358\n46239   46947   66522   32898   81935\n95916   28267   37722   47854   67140\n09312   32940   33215   96665   63576\n15999   95861   54426   64848   77089\n11867   60289   09261   14601   79687\n64966   29943   54057   36644   61581\n34474   58713   14115   77267   56767\n81187   68945   30720   64262   55059\n55074   20103   37166   62555   41557\n43100   24458   04106   18157   84722\n41603   39715   44755   91932   18109\n32730   86075   42673   93608   71753\n78733   51702   30438   72905   08045\n29335   94485   39026   70444   90599\n15891   28384   63729   28510   26125\n75405   99315   93574   07594   48590\n68784   88413   73275   50490   13701",
            "questions": [
                "What is the key?",
                "What is the flag?"
            ],
            "answers": [
                "6ca094991d70a2927a7719f374b6e57e9a22a736796780c8b6125baa35a2422a7e7df8c5674790acd2c761dcfa13e35e48396efd4cda5852680d3378732e8d8f",
                "e549195a6558df6afb6428b1727d5d3470713aa1ec13624c51d4923517795135526954578961665ba4ae1380d8d4625130016d33ecb247952c43a7a8bacb8f95"
            ],
            "walkthrough": []
        },
        {
            "name": "Alert",
            "difficulty": "Challenge",
            "icon": "https://www.svgrepo.com/show/507464/alert-square.svg",
            "short_description": "Decode a radio transmission to get key insights.",
            "description": "We have some found that some Corrupted Cancer agents have switched how they are transmitting information. Can you crack their new protocol?",
            "hasAudio": true,
            "assetURL": "../challenge_assets/2023/radio1.wav",
            "questions": [
                "What is the encoding method?",
                "What counties are affected? (County 1, County 2, ...)",
                "At what day is the event? (MM/DD)",
                "What is the event?",
                "Who sent the message?"
            ],
            "answers": [
                "f526c281a280e51fba6e75444bbcd837f6b90741e3a3f9ff9299a6afff9d32ec02643b79e44dccde109800b57a9d374f0a2afded4a66bca1382bbdf2e444dd46",
                "b10d1191fa5605874e08e25b3d280a2f30d53bb310b6b3646a803ef139c2036074feec66afa2af59fea48a0b32f4b995b661caaf81c5a46edfbd819d6383b5f6",
                "64a963c5f480c9c44ff19ff63f7c8be47e090de00816c30a09db2e6459fdae748491a969b2540f8637b02f5b0541e80a3fab192efcf23906b9e1e2956367e1fb",
                "e322ea913e8176231d2d352ca571444ac87ff2099ca4f93af9929eeb0fccf2bfdad28575ccf8de9eed0763debba1f2f5e73ff9c216990c6e7c6264d3a10884e7",
                "91709414ff48e9c1a18da9fb29ae0ab2d74390ecaaa22e6682344cfd14000b307c7d56678da8578a82dbcff1049280b20efc1997813c80bb7d2ce0a7d4ec5b3b"
            ],
            "walkthrough": [
                {
                    "type": "p",
                    "text": ""
                },
                {
                    "type": "NOTE",
                    "text": "Coming soon..."
                }
            ]
        },
        {
            "name": "A Night at the Opera",
            "difficulty": "Challenge",
            "icon": "https://www.svgrepo.com/show/480246/violin-2.svg",
            "short_description": "Decode a radio transmission to get key insights.",
            "description": "We have some found that some Corrupted Cancer agents have switched how they are transmitting information. Can you crack their new protocol?",
            "hasAudio": true,
            "canDownload": true,
            "assetURL": "../challenge_assets/2024/opera.webm",
            "questions": [
                "What is the flag?"
            ],
            "answers": [
                "866d4deb35412a914d57c2f8367b25c2834ad97a5e575b82a943c42a8335a7b8c35d4e51bb29e4e4d45f3588558d13a26396a48c0990d0e2a62e3ec2dfb04d4b"
            ],
            "walkthrough": [
                {
                    "type": "p",
                    "text": ""
                },
                {
                    "type": "NOTE",
                    "text": "Coming soon..."
                }
            ]
        }
    ],
    "Forensics": [
        {
            "name": "Corrupted",
            "difficulty": "Easy",
            "icon": "https://www.svgrepo.com/show/493706/paper-shredder-destroy-delete-remove-paper-machine.svg",
            "short_description": "Recover information that appears to have been corrupted.",
            "description": "We have recovered a word document. It seems to be corrupted though.",
            "canDownload": true,
            "assetURL": "../challenge_assets/2024/capturedfile.docx",
            "questions": [
                "Who made the document?",
                "How many fonts are embedded in the document?",
                "What is the name of the hidden file?",
                "What is the password to deactivate the document?"
            ],
            "answers": [
                "53e3564ee992e7a29c877ee6f1e577d0aebd4c10cd5d0ebabd131399320a7e82310749d911f8dabf285865de0ddcfaf907033bbcdc2d3b0e95b2d0048290d4e5",
                "9c449bbc7edb91888598df45955cd44c9925d4bf945fae86977fecf399da3a4a3c43ae6650c840aaabb00abae5b7fd85a9f10c6a592c6e95fbc3fcef3e83abe8",
                "48e3eb8289c5b961821241ccb81bde8ac1f7b0f37ab2e0faee3aaa6f00e846c073903e9a1fcb938cca1f624d956eaf6787337010cd5354088f6f775542c8277f",
                "afe99137967ee6f5ec8f08df89dd8076db932e13d4ca8d7b32feda3dc919ae3e1657cf30616523d28500727755eddad5a6e18fe255b407a9c5f6dd8de1a43b99"
            ],
            "walkthrough": []
        },
        {
            "name": "Saved",
            "difficulty": "Easy",
            "icon": "https://www.svgrepo.com/show/494393/game-competition.svg",
            "short_description": "Recover information that appears to have been corrupted.",
            "description": "We have managed to recover a backup file on a server belonging to SAB3RT00TH. Can you tell us anything about it?",
            "canDownload": true,
            "assetURL": "../challenge_assets/2023/Giovanni.sav",
            "questions": [
                "What is the rival’s name?",
                "What is the trainer id of the save?",
                "What members of the party are from other players?",
                "What are the stats of the strongest party member?"
            ],
            "answers": [
                "a2657ec579414e7f042b0c5992361eac615f491aff47c75b012a4df1043d5002a0fe30a714c50863bb7f1493c5fd7bd89dcd62d461fa7b4be82af3a8a0a1dbeb",
                "27159f6e140c8c9d2652f2c07b74c8a485593f08a6da8b955d2887102a127a4508fff44e74dffae07ccf546b5d3be5fa4f1ec14a2dc9f6a2576635e623f50c87",
                "fead72b1a6ec3a9b59bfb1be2c9ae6401cf1e15eac86290005629d92e7bfb3bc4ed1ce37a3f9b0a9793db9432d7f96536cd64cdbe58b1020cc6c866d72c5ef40",
                "1fbf239ccfb8b0060f94b0c1a578c58a58c0114f34dce41a3f17f5dfdf9cf40c9e4c3efdd511363918cfa11389f35e2cffa89782619fd07dc39d298dc3a34c2d"
            ],
            "walkthrough": []
        },
        {
            "name": "Wordy",
            "difficulty": "Challenge",
            "icon": "https://www.svgrepo.com/show/532183/letter-chinese-a.svg",
            "short_description": "Recover a hidden message inside a word document.",
            "description": "We captured this file from SAB3RT00TH's expert cryptographer, Holden C. Retts. However, it seems Holden was on to us and switched up their protocol. Can you figure it out?",
            "canDownload": true,
            "assetURL": "../challenge_assets/2024/Memo-314_Captured.docx",
            "questions": [
                "What is the flag?"
            ],
            "answers": [
                "bf35d860e1f0354c17155549307e503d568978f4cb973769bfb56c1ae4b47622e013ef8176a862c74bd0d11a254f41a3a6a6581accd942aa0d2c7678275e3c8b"
            ],
            "walkthrough": [
                {
                    "type": "p",
                    "text": ""
                },
                {
                    "type": "NOTE",
                    "text": "Coming soon..."
                }
            ]
        }
    ],
    "Log": [
        {
            "name": "Crash",
            "difficulty": "Hard",
            "icon": "https://www.svgrepo.com/show/393264/defibrillator.svg",
            "short_description": "Exercise your sleuthing skills to find out what happened in an operating room.",
            "description": "We have recovered a log file from computer and we want to find out more about what it is.",
            "canDownload": true,
            "assetURL": "../challenge_assets/2024/LogAnalysis.patient.ssx",
            "questions": [
                "What was the model used?",
                "What was the manufacturer used?",
                "What computer was this captured on?",
                "Did the patient live?",
                "How many shocks did the patient receive?",
                "When was this recorded?"
            ],
            "answers": [
                "eebb601f070a7e3356cc53a270cb9b268bb19230494f0986ea788b55b7e624662e2debadbe46f0be820f15b492e0f0043e0c9475bd238ab10930023dc0e9dcef",
                "b317260e6888a947b1704c6819e346332710c37c4efad66227d316a548a8c22da2b03f6ca20e94c9197d19830e358751ef57e86c571cd851b5eab4e1caadf5c9",
                "801c3057374624351563eab46929b3bb335a3684b6a95fec023e91014cec6bb1d5115eab61c83e7f4c792b2bff0db641ca7df0773f014ebd6a4eb971a76fa337",
                "3d7b895c45098fd40b4f2fc28708745c4e155c502627eea080ceb01052a5f10884d0f56c24a312cf66b6b9e02b8ccc59eb9350bafbfdc26f6c1f8a249fb65899",
                "453b7d143d32100ed56dbc69e28869bc20750985eac3fe0ae089da0751b1c27f77fccd2ffd2db3d19e25e41982775117812b60000fbaa621775be33060dc3793",
                "a220d46181f4aa133669cac2af7fbd75e1aa64249c1857c14025b8a60f29c6658d55c30bcee597b008345930bf7b8741d234c157369ad0f21200bdb3d40a2851"
            ],
            "walkthrough": []
        },
        {
            "name": "Soaked",
            "difficulty": "Medium",
            "icon": "https://www.svgrepo.com/show/499901/rain.svg",
            "short_description": "Exercise your sleuthing skills to find out key information from a mysterious log.",
            "description": "We have recovered a log file from computer and we want to find out more about what it is.",
            "canDownload": true,
            "assetURL": "../challenge_assets/2023/soaked.log",
            "questions": [
                "What county made the most reports?",
                "How many stations made less than 5 observations during the time period?",
                "What was the total amount recorded from all stations across the time period?",
                "How many times were measurements of T or M recorded?"
            ],
            "answers": [
                "147aedeb411d9a6eda270e0d571c15c15087db80f49fe591bed710fce83cc5a7f76ae8f00ef1133c1c64add80fb08e46b8c815ab17b727b5ae2624eb48e0bcf7",
                "55a535b9169f98b41a31f9ff9ec1584debb89d6f0b9eca954b4c674023eecb2b05b10b1796fb28911d69c58045a8809a0487ed662a36ad939f742745bf5fc366",
                "bf24ce97e549d7cb56e633bc8d782ac3f6f2134d213c113d553749738d2a56ebcdc7d081dd9b50ea9a5d8e6051a260f8e3cc5428754ec4d84dd2797f5edbfe97",
                "5b9ae06e45fb0233273b9dd2db678949773890f4f08a33c71175710926b9941a27fb23f5cf29e5588d1c1ede27d25b5097b3a3fccf15b9adfec6aa68335cf0d8"
            ],
            "walkthrough": []
        }
    ],
    "Cracking": [
        {
            "name": "Common",
            "difficulty": "Medium",
            "icon": "https://www.svgrepo.com/show/469601/recycle.svg",
            "short_description": "Identify and exploit weaknesses in common hashing algorithms.",
            "description": "We interecepted some passwords from SAB3RT00TH, but they seem to be hashed. Can you decrypt them?",
            "questions": [
                "What is 42f749ade7f9e195bf475f37a44cafcb?",
                "What is A532443f3e04a9e00295a8cd2a75e080?",
                "What is 99adebc7cea629b373992e519849cd88dc7d1ef2?",
                "What is b1b3773a05c0ed0176787a4f1574ff0075f7521e?"
            ],
            "answers": [
                "52e9a1424242b276c60732a3dee61fc5fba68d55e53c87e256320ea016b209b755ee68aaae13b2cc09de0c22a880794fffcd2e454032e00d9d65c36f0c00eb22",
                "aefd9bde048a6e86c7b625d335fcc64912c748fe98ae9cf7eed864864653b7550e358aa30442386f05d76bb1762317efda8003da43a01584e63b0e9e2d77088e",
                "90016e2a99d168926149adef0eb6d04183cbddf5d919136f8c9e97b00eb172545ac5844a81583835135e75589ed6c79b060c593ddd24919947ae38a5e2fbb09a",
                "a5cd272287098b7b4c9f6c359b9d25f7367b3c0b7360b0eea29c72544d7b88d9c301e55417675e26bf23f9fc88ab37929f0b34c122d6ca56b3a46249b18f85b2"
            ],
            "walkthrough": []
        },
        {
            "name": "There's a Leak in the Boat!",
            "difficulty": "Medium",
            "icon": "https://www.svgrepo.com/show/326515/boat-outline.svg",
            "short_description": "Recover some passwords that were found in a password leak.",
            "description": "We interecepted some passwords from SAB3RT00TH, but they seem to be hashed in a pattern similar to those found in the RockYou Breach. Can you decrypt them?",
            "questions": [
                "What is e5e9fa1ba31ecd1ae84f75caaa474f3a663f05f4?",
                "What is 4bbf2ddc38798e41cdc1d415c756faa92ba47ffd?",
                "What is d3d918987cc94953e596480e4759a8f8c209fc16?",
                "What is Admin:$1$Etg2ExUZ$0e52e7aaeb2ecadf0f99ee7a39d43d8b"
            ],
            "answers": [
                "db6a3145a6a15399ed08a67a4433a8eef5cfd1a57b48340ab9d77b3e801c23e438965f507fc3fcfb5d4688e85d1c5d39f071d3fb19ac5fad00a15b5b6928c6f9",
                "882533f7dfa654393b77c7ba65da47e2035e892b79f35d444bd7c0a5ddab7c1f103dc37c4220b5af4a2bd60076adcd213b4a14d52f64f01a4eaf00392c497633",
                "1496747b2dd420a553bdc45a312d0a57a8e0bbcadf209437a88a490e4979eafd9dfa16f9e84dda17b79abbdd7a70d040c8014d109ccc9826a500c3da2885e86b",
                "afe99137967ee6f5ec8f08df89dd8076db932e13d4ca8d7b32feda3dc919ae3e1657cf30616523d28500727755eddad5a6e18fe255b407a9c5f6dd8de1a43b99"
            ],
            "walkthrough": []
        },
        {
            "name": "Masked",
            "difficulty": "Medium",
            "icon": "https://www.svgrepo.com/show/352261/mask.svg",
            "short_description": "Identify and exploit weaknesses in common hashing algorithms.",
            "description": "We interecepted some passwords from SAB3RT00TH, but they seem to be hashed. They seem to follow a pattern though, PFW-AAAA-###. Can you decrypt them?",
            "questions": [
                "What is 32824d5c7270e2bc18efe66e96badf34?",
                "What is 92bb53e02de7efd03b0ded37df6b7903?"
            ],
            "answers": [
                "ef647a5fdb62371de66a62c50ac0d0434dd8ecaa2b9298695831da96f5061e61d3fe7f67cc2f44f8caf08ec377a1b30efc0f5e43d29a7cc0749b1b40b709596e",
                "a0bd5eb84513607ce681594e94c63280a079359dc65484d94debd67cd0dca830e0daf2fe7bd705a9c7ba6d66614d6e506d60ba344749d24b61d8e02552dc1026"
            ],
            "walkthrough": []
        },
        {
            "name": "Hashes",
            "difficulty": "Easy",
            "icon": "https://www.svgrepo.com/show/502784/password-key.svg",
            "short_description": "Identify and exploit weaknesses in common hashing algorithms.",
            "description": "We interecepted some passwords from SAB3RT00TH, but they seem to be hashed. Can you decrypt them?",
            "questions": [
                "What is the md5 hash of admin?",
                "What is the sha1 hash of apollo?",
                "What is the sha256 of hello world?",
                "What is the whirlpool hash of sandworm?"
            ],
            "answers": [
                "22b12a761a4cc5fb8b3633b2bf728ce7ffc1db96593b9fa3adbdb6c88df1f974cd306ef4d6217f5406781dcf7d165822e3a8d2cd2bf8eb425330def115eb9920",
                "88e1955fbe334ea55fa1a386825245beb335a1e79f42cc0e50e5201e64396bc0b8847ff44f44bc4920eb1a88b5532562852afddfcc6ce5fec0fab532cdaa0d6f",
                "55cda124307c2dbd815213717d5391a4874e8daa7b64cd64c59d68a7040bc56288d5dbb85a6f45216e6d073db4af28f1a83d973419b3752b8986771aec3fb8db",
                "f80a146897920e503fd09dd008035994b87541d1df3a053dfe66628a47f852e95f2969d427ae94f457ec1d405b809e6e1a91c4f8399c4229a842fb3c46ecba4c"
            ],
            "walkthrough": []
        },
        {
            "name": "An Open Window",
            "difficulty": "Medium",
            "icon": "https://www.svgrepo.com/show/290874/window-curtains.svg",
            "short_description": "Identify and exploit weaknesses in common hashing algorithms.",
            "description": "We interecepted some passwords from SAB3RT00TH, but they seem to be hashed. Can you decrypt them?",
            "questions": [
                "What is E52CAC67419A9A224A3B108F3FA6CB6D:A4F49C406510BDCAB6824EE7C30FD852?",
                "What is 87199F718F851325359D3FC755B08C91:8695B1A5AD5DA22C504B9E8DEAB23D51?",
                "What is 795A00303D8DBA577584248B8D2C9F9E:8407E5CD6E75341AFDDE41CD8A137AD1?" 
            ],
            "answers": [
                "dceb060f775b65369bec51c97da2b12e874eb093a59d8eb867988f9b44d42eacb5ae7aff471874b9b943d1313501876477844452c1c73aaee72121253ee0d69b",
                "3877fb24c501836c2307f250744ebe3588f5b05aa20f6d8ff4eae284dc796a4b6ba687ad4078c37749d22c2b033b94d578ccb89f70577ce121f9d3c86ed8ca99",
                "dd8300b311addc126a29df226833e0ca6fd33433e86e9c9e48e98b4c8424c0140017b8000bc5186bc5f1103da0ad206d33d237f88955138b667ef4186bc0d7d9"
            ],
            "walkthrough": []
        },
        {
            "name": "Top Secret",
            "difficulty": "Hard",
            "icon": "https://www.svgrepo.com/show/282766/cassette.svg",
            "short_description": "Identify and exploit weaknesses in common hashing algorithms.",
            "description": "We interecepted some passwords from SAB3RT00TH, but they seem to be hashed. Can you decrypt them?",
            "questions": [
                "What is $1$4UjLRjJI$ahzDw6BJBQAjsg3e5YODv0?",
                "What is $1$sw7OszoD$QByaohyCROIoWVF8mVZA4.?",
                "What is $1$lMVrlkgd$bytov6NvnuwIoJRpB66C31?",
                "What is $1$M/tA.I6P$ouye.8Ez5M2Ut7eG2k4ut/?",
                "What is $1$v4ndvG0U$2JI8PPaUcKWob5UAuoQ61.?"
            ],
            "answers": [
                "a6e8cc58620d62cb4ebf8fbbc447565abf04af12cafa7da145e2ee0f8969416e1c48e8c1720cce8eac8329bffd9597d54346be788c3954c3bec29282592153c5",
                "8841a7523c8a8a0b898b599f3518ed53ea1ac0ddef04e8ddfec5d2bde0da92947d0b61e491d460b180bed2926f4357480b4f6ed0af0ea1702724770d058377f6",
                "b1e4077f6c0c253bf879b53a5453eb3450bafb6fc3379debf6294f4a8a27f83dca314953b8b882f9bcc64d1470491b92c5e7bb57ce6624cbbd02e4589a455418",
                "829a23537eab485bbf38b04c72e207971a670c3604456565044266d5f0f4f0c181c797a15c80557cc3dfbe8bc218da3e55c279f768073f3f210cec221123cc7d",
                "81e06bb2463942b5806f5e081111dbd8ca79506ee5c158213047d939b9ef281a40a25c60a71f6621d3ccfd9c0f5ad2f0d474504029aab0e8151283d2b60e1d2e"
            ],
            "walkthrough": []
        },
        {
            "name": "An Open Window",
            "difficulty": "Hard",
            "icon": "https://www.svgrepo.com/show/290874/window-curtains.svg",
            "short_description": "Identify and exploit weaknesses in common hashing algorithms.",
            "description": "We interecepted some passwords from SAB3RT00TH, but they seem to be hashed. Can you decrypt them?",
            "questions": [
                "What is E52CAC67419A9A224A3B108F3FA6CB6D:A4F49C406510BDCAB6824EE7C30FD852?",
                "What is 87199F718F851325359D3FC755B08C91:8695B1A5AD5DA22C504B9E8DEAB23D51?",
                "What is 795A00303D8DBA577584248B8D2C9F9E:8407E5CD6E75341AFDDE41CD8A137AD1?" 
            ],
            "answers": [
                "dceb060f775b65369bec51c97da2b12e874eb093a59d8eb867988f9b44d42eacb5ae7aff471874b9b943d1313501876477844452c1c73aaee72121253ee0d69b",
                "3877fb24c501836c2307f250744ebe3588f5b05aa20f6d8ff4eae284dc796a4b6ba687ad4078c37749d22c2b033b94d578ccb89f70577ce121f9d3c86ed8ca99",
                "dd8300b311addc126a29df226833e0ca6fd33433e86e9c9e48e98b4c8424c0140017b8000bc5186bc5f1103da0ad206d33d237f88955138b667ef4186bc0d7d9"
            ],
            "walkthrough": []
        },
        {
            "name": "An Open Window",
            "difficulty": "Challenge",
            "icon": "https://www.svgrepo.com/show/290874/window-curtains.svg",
            "short_description": "Identify and exploit weaknesses in common hashing algorithms.",
            "description": "We interecepted some passwords from SAB3RT00TH, but they seem to be hashed. Can you decrypt them?",
            "questions": [
                "What is E52CAC67419A9A224A3B108F3FA6CB6D:A4F49C406510BDCAB6824EE7C30FD852?",
                "What is 87199F718F851325359D3FC755B08C91:8695B1A5AD5DA22C504B9E8DEAB23D51?",
                "What is 795A00303D8DBA577584248B8D2C9F9E:8407E5CD6E75341AFDDE41CD8A137AD1?" 
            ],
            "answers": [
                "dceb060f775b65369bec51c97da2b12e874eb093a59d8eb867988f9b44d42eacb5ae7aff471874b9b943d1313501876477844452c1c73aaee72121253ee0d69b",
                "3877fb24c501836c2307f250744ebe3588f5b05aa20f6d8ff4eae284dc796a4b6ba687ad4078c37749d22c2b033b94d578ccb89f70577ce121f9d3c86ed8ca99",
                "dd8300b311addc126a29df226833e0ca6fd33433e86e9c9e48e98b4c8424c0140017b8000bc5186bc5f1103da0ad206d33d237f88955138b667ef4186bc0d7d9"
            ],
            "walkthrough": []
        }
    ],
    "Scan": [
        {
            "name": "Ping",
            "difficulty": "Easy",
            "icon": "https://www.svgrepo.com/show/521786/ping-pong.svg",
            "short_description": "Discover key information about a server given only its URL.",
            "description": "We think that there is something is hiding in the code of scanme.nmap.org, can you check it out and see what you can find?",
            "questions": [
                "How many open ports are there?",
                "What is the most likely Operating system of the server?",
                "What is the version of ther service running on the second lowest port?"
            ],
            "answers": [
                "9536c1dde53c7b959941fcd4a11caa96c77983e25a26cfa1d631ca26e24f217a4fd1c9ab5bf6631f8f2f994804685b47b46fa5d232404208266336910ec8ed28",
                "b995a52f58bf4ba4a31efc31cc6c084386e293f18dda28d74b3d1a43cc440bd9b5633515d43e5e2e4bdb8abeb70dab7dba7bebbe21eac76f2b00b558b0c9a1f4",
                "6a75ec188bc716be7cb86d0459eb3b4ebdb2467327054445930a598005f69d4654af7b256139a0a7d47ef6cb0ed8fc7951ede06af2ae16c335fad60880b8e21d"
            ],
            "walkthrough": []
        }
    ],
    "Enum": [
        {
            "name": "Login",
            "difficulty": "Easy",
            "icon": "https://www.svgrepo.com/show/383214/school-staff-pass-id-teacher.svg",
            "short_description": "Find and recover the password to a website.",
            "description": "We have found this site that requires a password, can you get into the website?",
            "isIframe": true,
            "assetURL": "../challenge_assets/2024/enum/obfuscatedCode_one.html",
            "questions": [
                "What is the password?"
            ],
            "answers": [
                "393398a36eb9f806a120ac849e9050276fdf695d6303661a0fb65c5bb98c17480ab1422463688f3e6130b834584dbe87e17d7efc10d4c3a8f775ec94bdea357c"
            ],
            "walkthrough": []
        }
    ],
    "WebApp": [
        {
            "name": "Employees Only",
            "difficulty": "Easy",
            "icon": "https://www.svgrepo.com/show/372383/employee-group.svg",
            "short_description": "Exploit a website's vulnerabilities to gain access to restricted information.",
            "description": "We can't seem to login to this employee panel. Can you login as an admin for us?",
            "isIframe": true,
            "assetURL": "../challenge_assets/2024/employeepanel/",
            "hasQuestion": false,
            "walkthrough": []
        },
        {
            "name": "OurSpace",
            "difficulty": "Easy",
            "icon": "https://www.svgrepo.com/show/478768/blog-writing.svg",
            "short_description": "Exploit a website's vulnerabilities to gain access to restricted information.",
            "description": "We have found this site that requires a password, can you get into the website?",
            "isIframe": true,
            "assetURL": "../challenge_assets/2024/ourspace/",
            "hasQuestion": false,
            "walkthrough": []
        }
    ],
    "Net": [
        {
            "name": "Sus",
            "difficulty": "Hard",
            "icon": "https://www.svgrepo.com/show/426779/space-suit.svg",
            "short_description": "Learn how to read network traffic and see what information is being transmitted.",
            "description": "Our hackers seem to communicate a lot over online games. Luckily our analysts were able to capture a few of their games can you tell us anything from the network traffic capture?",
            "canDownload": true,
            "assetURL": "../challenge_assets/2024/sus_export.pcapng",
            "questions": [
                "What is the game?",
                "How many players where there?",
                "What player wore the brain slug item?",
                "What was the IP address of the game server?",
                "What was the host port number?"
            ],
            "answers": [
                "9c6aabf0a3284b074764905d64ce73cca1560904822a1a80fb977e8411ef645410cf79027a2033645cc1b4bd8ddd6a7ee80c8fe29970b23799201ea7e55c1aa8",
                "64c008d6460c2b98aba616b1d0d11a06b9df564b87d3aeedda83b36aacd3d0c160465109eb06c62e86e360cf026faa27a616dbbf2bec269be9ad128af96073bb",
                "95b45d176fc3170304e79acd0f1fbbce97514ccfe06098f4d6972953c9f58a3457777f96d04a9cb7b6739e6780b2c26dddf374b298ac85d367598296ac3b015f",
                "ec122ea6e0bf6693e39c161523fa504b0d51606dc54bd3a1b1859e268a8db9e09aa26346e4588b85ed013a33c7ff9f1db28fb7e284b7470d4c0f6153b60aee1a",
                "8fdae124319c363c45392d4170b15be05022167562abcccd0f9bac5addc68ade9042744f2bdcc3b0eb8a0bd4338984fc42448cac41568e93fea00dcbfe50b04d"
            ],
            "walkthrough": []
        },
        {
            "name": "Grinch",
            "difficulty": "Easy",
            "icon": "https://www.svgrepo.com/show/487201/christmas-tree.svg",
            "short_description": "Learn how to read network traffic and see what information is being transmitted.",
            "description": "Our hackers seem to communicate a lot over online games. Luckily our analysts were able to capture a few of their games can you tell us anything from the network traffic capture?",
            "canDownload": true,
            "assetURL": "../challenge_assets/2024/grinch.pcapng",
            "questions": [
                "What is the IPv4 of the server being scanned?",
                "What is the IPv4 of the scanner?",
                "What kind of scan attack was captured?"
            ],
            "answers": [
                "ef859f894084b064c8623ab7cb0ee7dcf029e1cff36330715c4fd21c0ead4ed7234424d8db8834cd4d867675a9db131e3e9bf41a9487fd9d54faeb69cd100c1a",
                "6a50497f6d52aa9bd59eb5293f15b608651e797d8227d07b05ec1f0b67678eca6ffa5f80e12d7f83156e95c63ff13987694de6768f53ea006b903e2d8778f2fb",
                "9d06dbb00cf6377997239acc8ef4fc186dbdc773230484eb6546490d786d0235476d1342e6d6c72bdc292edfc2c6679157cf524b3b1340e62fdc8e46bdf9432c"
            ],
            "walkthrough": []
        }
    ]
}