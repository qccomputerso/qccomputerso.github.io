import { Page } from "..";

import FamousComputerScientistImage from "@/assets/publication/dec2022-1st.png";

Page.content.cards.push({
	title: `December 2022- Famous Computer Scientists`,
	content: `
<img style="float: right; clear: right; margin: 10px;" src="${FamousComputerScientistImage}" width="250px">
計算機科學有今日的發展和成就，少不了一衆計算機科學家們的貢獻，以下我就介紹幾位給大家認識認識吧！
<br><br>

<b>亞倫·圖靈(Alan Turing, 1912-1954)</b>
<br><br>
圖靈被譽為「電腦科學與人工智慧之父」，是最有影響力的計算機科學家之一。他發明了圖靈機，一台將人們普通的計算行為抽象化為邏輯算式的計算模型。
它的用途在於找出計算數式及執行指令的限制，可以處理世上所有存在的電腦運算，是一個典型的中央處理器(CPU)例子。
<br>
於第二次世界大戰中，圖靈應用他創造的運算模型，成功助英軍破解德軍傳送訊息所用的密碼，協助將德軍的侵略暫緩，
變相保住了受戰火波及地區的幾萬條人命，功德無量。然而，因性取向緣故，他於1954年自殺身亡，以42歲之齡，英年早逝。
<br><br>

<b>愛達·勒芙蕾絲(Ada Lovelace, 1815-1852)</b>
<br><br>
勒芙蕾絲獲公認為史上首位計算機科學家。1842年，她發表了史上第一段演算法，也即是第一段電腦程式。作為早期的程式設計師，
她真正認識到計算機的潛能，對用於邏輯計算，執行複雜指令的現代電腦貢獻殊偉。
<br><br>

<b>文頓·瑟夫(Vinton Cerf, 1943- ) 及 羅伯特·卡恩(Robert Kahn, 1938- )</b>
<br><br>
1983年1月1日是互聯網面世的大日子，於此，瑟夫和卡恩兩位科學家居功至偉。他們一起發明了傳輸控制協定(TCP)及網際網絡協定(IP)，
其中IP能根據不同電腦的位址來進行認證及傳送資料，是互聯網的關鍵組成部分。自此，網絡世界的交流變得更方便，可靠，時至今日仍影響深遠。
<br><br>

<b>吉多·範羅蘇姆(Guido van Rossum, 1956- )</b>
<br><br>
Python 是當下最常用的編程語言之一，Dropbox，Battlefield 2等著名遊戲、工具，甚至不少人工智能(AI)背後的程式皆使用Python語言編寫，
而這語言的設計者便是範羅蘇姆。1989的聖誕節，他在家中無所事事，便開始創作Python語言解悶，最後於1991年發表了0.9.0版本。
截至2022年1月14日，Python已然發展至3.11.0版本。
<br>
Python語言優點在於言簡意賅，比起其他語言，執行相同的指令時能省下不少代碼，且較容易明白。不過，它執行指令的速度較慢，因此不常用於大型專案。
<br><br><hr><br>

Even with the amazing developments of modern computer science, we should not forget the giants of the past 
who paved the way for such a feat. Let's talk about some of them!
<br><br>

<b>Alan Turing (1912-1954)</b>
<br><br>
Turing has been dubbed "the father of computer science and artificial intelligence", quite rightfully as 
one of the most influential computer scientists even today. He invented the Turing Machine, a hypothetical 
abstract model of a CPU which is able to handle any computation action that can exist, whether or not it 
has been invented. It allows people to figure out what limitations any type of computer might have.
<br>
In WWII, Turing used his computational model to solve the "Enigma" code used by Nazi Germany, allowing 
them to decrypt all messages sent by them. This impeded the progres of the Nazis and saved countless 
lives. Unfortunately, due to his sexuality, he was driven to suicide by the British government at only 
the age of 42.
<br><br>

<b>Ada Lovelace (1815-1852)</b>
<br><br>
Ada Lovelace is widely regarded as the world's first computer scientist. In 1842, she published the first 
known example of an "algorithm", which can be thought of as a computer program. As an early example of a 
programmer, she realised the potential of calculators beyond solving simple arithmetics, and laid groundwork 
for far more complex computing today.
<br><br>

<b>Vinton Cerf (1943- ) and Robert Kahn (1938- )</b>
<br><br>
On Jan 1 1983, the world saw the Internet for the first time. Computer Scientists Vinton Cerf and Robert Kahn 
played a big role in its invention, by developing the Transmission Control Protocol (TCP) and Internet Protocol (IP) 
which help networks communicate correctly and efficiently. IP is the most well known, acting like your home 
address but for your computer's position in the Internet instead, and it ensures that data is sent to the 
correct machines. This made the Internet possible, and most importantly, reliable, and the system is still 
being used and updated today.
<br><br>

<b>Guido van Rossum (1956- )</b>
<br><br>
Python is an all-pervasive language, being used in different tools and games like Dropbox and Battlefield 2, 
even acting as the language of choice for communicating with AI or robotics frameworks. Guido van Rossum 
invented python in the Christmas of 1989 when he was bored at home, and released the major edition Python 
0.9.0 in 1991. Python is still being updated today, with the latest version being 3.11.0. 
<br>
Python is intuitive and accomplishes a lot with few words. It is very declarative in nature, with many 
libraries helping it. However, since Python is fairly slow during execution, it may not be suitable 
for handling the backend of computationally heavy tasks. 
`.replaceAll("\n", ""),
});