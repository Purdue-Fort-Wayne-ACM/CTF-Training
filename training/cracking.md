# Password Cracking


## Challenges
<details>
<summary> Challenge 1</summary>

**We have obtained a hacker password dump, can you try to recover some passwords from it?**
<details>
<summary> Passwords</summary>

```txt
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

[Download Password File](../assets/dump.txt)

<details>
<summary>Walkthrough</summary>
</details>

The first step in password cracking is hash identification. In a computer, your password is not stored as plain text (human-readable) instead, it is stored in something called a hash. These hashs are the product of a function called a hash function, these functions are designed to generate a unique identifier value that can be used to represent a value instead of the value itself. However, some hash functions remove data so that the hash generated fits a certain length. This means that some insecure hashes (like the ones above) are vulnerable to attacks.   

After running these through a hash identifier, we can see that these passwords were stored using an MD5 hash algorithm. To solve this, we can use two methods:Google (most of these should be solvable on these sites)
 2. a password cracking software like ophcrack or hashcat.

For this, we are going to be using hashcat.

Hashcat has multiple different settings that we will need to know. Typically a call to hashcat will be in the format of `hashcat -m {FORMAT_ID} -a {ATTACK_ID} {HASH or HASH_FILE} {OTHER PARAMETERS}`. For MD5 hashs, the `FORMAT_ID` is `0`. To recover the passwords we will use the following commands.

```bash
hashcat -m0 -a7 -1 {HASHFILE} ?s?d ?1?1?1 lyrics.txt
hashcat -m0 -a3 -1 {HASHFILE} ?d?l ?1?1?1?1?1?1
hashcat -m0 -a3 -1 {HASHFILE} ?d?u?l ?1?1?1?1?1?1
hashcat -m0 -a3 {HASHFILE} ?d?u?l?s ?1?1?1?1?1?1
```
After cracking some wiht the above methods, we can see that it could be lyrics *Never Going to Give You Up* by Rick Astely. Let's try to put the lyrics to the song in a text file name lyrics.txt and feed it into our program.
```bash
hashcat -m0 -a0 {HASHFILE} lyrics.txt
hashcat -m0 -a1 {HASHFILE} lyrics.txt lyrics.txt
hashcat -m0 -a6 {HASHFILE} lyrics.txt ?d?d?d
hashcat -m0 -a7 {HASHFILE} ?d?d?d lyrics.txt
hashcat -m0 -a6 {HASHFILE} lyrics.txt -j "" -1 ?d?s ?1?1?1
```
For a breakdown on what the `ATTACK_ID` does here is a small key:
```bash
-a 0 :: Straight (no modification)
-a 1 :: Combination (Combines two wordlists)
-a 3 :: Brute-force (try everythign)
-a 6 :: Hybrid Wordlist + Mask (append a wordlist with a selected mask)
-a 7 :: Hybrid Mask + Wordlist (prepend a wordlist with a selected mask)
-a 9 :: Association ()
```

There is a lot of depth in the software so try to mess around with it!

<details>
<summary>Answers</summary>

**Passwords**
```txt
we'reno
strangersto
love
y0u
kn0w
th3
rul32
4n6
2o
6o
I
A
FuLl
cOmMITmEnt'S
WhAT
I'M
tHINKinG
oF
y0U
w0uLDn'T
G3t
7Hi2
Fr0M
An9
O7h3R
gU9
|
Ju$7
w@nN@
T3||
y0|_|
H0\/\/
|'m
f33|iNG
G0++@
m@K3
Y0|_|
UNd3rsT@nD
never12
gonna872
give19#
you^&1
up()8
123never
456gonna
&*9let
)(1you
1*3down
```
<details>

</details>