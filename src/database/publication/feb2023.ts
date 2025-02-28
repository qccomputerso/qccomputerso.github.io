import { PublicationData } from ".";

import MisconceptionsImage from "@/assets/publication/feb2023-1st.png";

PublicationData.push({
	title: `Feburary 2023- 5G misconceptions`,
	imageSrc: MisconceptionsImage,
	chinese: `
"5G影響飛行安全？航空公司警告「只差200MHz」很危險"
<br><br>
"K Kwong指手機信號輻射強睡覺應關5G"
<br><br>
相信這樣的新聞， 大家已多有耳聞。然而這些真是是事實嗎？5G 設備會不會發出高頻輻射而致癌？5G會導致飛機失事？莫急，以下我爲大家一一説來。
<br><br>
5G技術是什麼？用處在哪裡？
<br><br>
很多人對5G 的印象就是超高速的網絡。沒錯， 5G 網絡的速度的確比4G 快約20倍，它是最新一代移動通信技術，為4G系统的演進。
5G快的原因是它比一般電訊業現行使用的頻譜高出許多 (毫米波频段)。但雖然它有極快的傳輸速度，能達到4G網絡的100倍，而且時延很低，
但訊號繞過障礙物的能力十分有限，且傳送距離很短，因此需要很多的發射站。
正因它極快的傳輸速度， 5G廣泛用於新興科技，例如無人駕駛汽車、遙距手術、智能城市、虛擬實境、無人機等等，可說對人類的科技發展有莫大的幫助。
<br><br>
5G 對健康有威脅？
<br><br>
上文提及， 5G的頻段較高。有讀過物理的同學立即就會想到，高頻射線會影響健康，甚至致癌。事實真是這樣嗎？其實5G只屬於非游離性的電波
 (non-ionizing radiation)，和紫外線、伽瑪射線等不同。它不能把電子從基本分子中分離出來，能量很低，因此不會對我們的DNA造成傷害。英國也有研究指出，如果5G只可穿透人體0.2cm， 因此，5G會致癌等說法只屬謠言。
 <br><br>
5G使飛機失事？
<br><br>
航空業測量飛機高度的無線電高度表，都會使用4.2 Ghz至4.4 Ghz的頻譜。而一般國家5G的頻譜是3.3GHz至3.8GHz，和航空業使用的都相差一段
距離，因此不會造成威脅。 現在美國聯邦航空甚至已批准電訊商Verizon及AT&T在機場附近啟用新5G網絡。
<br><br>
總的來說，5G對人類的影響微乎其微。 因此大家不用擔心， 可以放心使用5G設備，享受5G帶來的便利！
	
`.replaceAll("\n", ""),
	english: `
"5G may affect air safety, warns airline company."
<br><br>
"K Kwong says that 5G should be turned off while sleeping."
<br><br>
You’ve probably seen similar headlines before, but are they true? Will 5G really cause cancer or make planes crash?
<br><br>
Actually, what even is 5G used for?
<br><br>
Most peoples’ know 5G for its high network speed- 5G is quicker than 4G by a magnitude of about 20 times! 
It’s the newest standard in communications technology, developed from 4G. 5G is extremely fast because it 
transmits data using waves of high frequencies, meaning that more information can be fit into a single second. 
Unfortunately, this also has the caveat of making the transmission distance of 5G much shorter, so more 
broadcasting stations need to be set up.
<br>
Due to its high network speed, 5G has allowed for the development of a lot of new technology, in various areas 
such as self-driving cars, remote surgery, virtual reality, and drones.
<br><br>
5G affects health?
<br><br>
Anyone who has taken physics should know that higher frequency waves also have a higher energy, which can cause 
adverse health effects like cancer. However, 5G still has a much lower frequency than the more dangerous 
"ionising radiation", including high energy rays like ultraviolet and gamma. Due to its inability to ionise 
particles (duh), it causes much less harm to us. Additionally, studies from the UK have found that 5G can only 
penetrate the human body by 0.2cm, so the idea that 5G can cause cancer is but a myth.
<br><br>
5G causes plane crashes?
<br><br>
The frequency that flight instruments use to transmit data are typically in the range of 4.2GHz to 4.4GHz,
much higher than the usual standard for 5G which is 3.3GHz to 3.8GHz (Quite ironically, since nobody says flight
instruments are causing cancer), so the chance of interference is low. In fact, the USA has already permitted
certain telecommunications companies to set up 5G networks in the vicinity of airports!
<br><br>
To summarise, 5G has little to no effects on humans or flight safety. You can enjoy 5G to the fullest without
worrying about plane crashes or having your insides cooked. 
`.replaceAll("\n", " "),
});