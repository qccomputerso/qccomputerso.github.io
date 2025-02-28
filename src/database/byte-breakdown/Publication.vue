<script setup lang="ts">
import App from "@/App.vue";
import Card from "@/components/Card.vue";

import Evolution1 from "@/assets/publication/evolution_1.png";
import Evolution2 from "@/assets/publication/evolution_2.png";
import HowDeepfakesWork1 from "@/assets/publication/how_deepfakes_work_1.png";
import HowDeepfakesWork2 from "@/assets/publication/how_deepfakes_work_2.png";
</script>

<template>
	<App>
		<Card>
			<template #header>
				How Deepfakes Work
			</template>
			<div>
				Deepfakes, in short, use generative AI to map the face of a person onto the head of another
				person. Let us dive into the details of how the AI really works.<br>
			</div>
			<div>
				As with all other artificial intelligence, deepfake models rely on training using a large
				amount of data. This data is a large dataset of images or videos of the target person,
				which can be obtained from various sources such as publicly available images and videos,
				social media platforms, or private collections. This data allows the AI to be trained far more
				accurately than using just a few images.<br>
			</div>
			<div>
				<img
					class="c-publication-image"
					:src="HowDeepfakesWork1"
					width="250"
				>
				The central dogma of deepfakes lies in its face detection technology. First, we have to know
				where the faces actually are; Face detection algorithms are used to identify the presence and
				location of faces in images or video frames. Once the faces are detected, they need to be
				aligned and normalized to ensure that the positioning of features, the size of faces and their
				orientation stay roughly the same in all the data. Without this step, training becomes significantly
				harder.
				<br><br>
				The next step is identifying where all the features of the face are. This is done using other
				types of AI, most commonly convolutional neural networks (CNNs). These networks take in the raw image
				of the face as the input, learning to identify features of the face with relatively little supervision.
				Using labels of features of the face rather than the whole image greatly increases the efficiency of
				deepfake models. The same thing is done for the source image or video so that the features of the
				target person's face can be mapped easily to the source face. This allows us to retain the facial
				expressions of the source face while having the appearance of the target face.<br>
			</div>
			<div>
				Next comes the process of generation. Nowadays, GANs are used for this purpose. First, an autoencoder
				is used to simplify the source image, while being able to reconstruct the modified image from the
				simplified data output. GANs consist of two networks: a generator and a discriminator. The generator
				generates fake images, and the discriminator tries to distinguish between real and fake images.
				Through an adversarial training process, where the error of the GAN decreases by generating images that
				the discriminator sees as real while the error of the discriminator decreases if it successfully
				identifies the output of the generator as fake, the generator learns to create increasingly realistic
				deepfake images. After training is done, only the generator is used to create fake images.<br>
			</div>
			<div>
				<img
					class="c-publication-image"
					:src="HowDeepfakesWork2"
					width="250"
				>
				Some post-processing may have to be done to make the deepfakes generated more convincing.
				The generated face has to be blended into the target video or image to ensure that it seamlessly
				integrates with the surrounding context. This involves adjusting the lighting, color, and
				texture of the generated face to match the target scene. More advanced techniques may also
				consider factors like facial movements and expressions to make the deepfake more convincing.
			</div>
		</Card>
		<Card>
			<template #header>
				Evolution of Deepfake Technology
			</template>
			<div>
				Deepfake technology has undergone remarkable evolution since its inception, pushing the
				boundaries of what is possible in the realm of digital manipulation.
				<br><br>
				Initially, in the 1990s, deepfakes emerged as a method to swap faces in photos and videos
				using computational resources and technical expertise. For example, deepfakes are used to
				superimpose celebrities' faces onto thebodies of adult film actors. Limited technology meant
				that the early deepfakes exhibited noticeable flaws and artifacts, making them easier to detect.
				<br><br>
				However, as the technology advanced, the potential applications and sophistication of deepfakes
				increased, resulting in higher quality and more realistic generated content. With the
				introduction of more powerful machine learning algorithms and access to vast datasets,
				deepfakes have become increasingly convincing, making it challenging to distinguish them from
				genuine footage. For example, deepfakes can now encompass voice synthesis, body movements, and
				even entire personas.
				<br>
				<br><br>
				In 2014, Generative Adversarial Networks (GANs) were introduced as a breakthrough in machine
				learning. GANs are a type of neural network framework that consists of two main components:
				a generator and a discriminator.
				<br><br>
				The generator's role in GANs is to create synthetic data, such as images or videos, that
				resemble real data. Initially, the generator produces random output, which is then fed into
				the discriminator. The discriminator's task is to distinguish between real data and the
				generated data from the generator.
				<br><br>
				During the training process, the discriminator provides feedback to the generator by
				evaluating the authenticity of the generated data. The generator uses this feedback to
				iteratively improve its output, aiming to generate data that is increasingly difficult
				for the discriminator to distinguish from real data. This adversarial training process
				between the generator and discriminator continues until the generator becomes proficient
				at generating highly realistic output.
				<br><br>
				In the context of deepfakes, GANs are utilized to create convincing and deceptive content
				by training the generator specifically to produce synthetic images or videos that closely
				mimic the appearance of a specific target individual. The generator learns from a dataset
				consisting of real images or videos of the target individual, allowing it to capture their
				unique facial features, expressions, and other visual characteristics. By leveraging the
				power of GANs, deepfakes can generate content that is difficult to distinguish from authentic
				footage, enabling the creation of highly realistic digital manipulations.
			</div>
			<div>
				<table>
					<tr>
						<td>
							<img
								:src="Evolution1"
								height="300"
							>
						</td>
						<td>
							<img
								:src="Evolution2"
								height="300"
							>
						</td>
					</tr>
					<tr>
						<td>Early deepfake</td>
						<td>Late deepfake</td>
					</tr>
				</table>
				The uncanny similarity in the appearances between the latest deepfakes and the person they
				are mimicking raised concerns about the potential misuse of the technology for malicious
				purposes, such as spreading disinformation, blackmail, or impersonation.
				<br><br>
				To counter the negative implications of deepfake technology, researchers and tech companies
				have been actively working on developing robust detection methods. These involve using
				machine learning algorithms to analyze visual and audio cues, identifying inconsistencies
				and anomalies that would not appear in a "normal" recording.
				<br><br>
				As deepfake technology continues to progress, it is crucial to strike a balance between
				its creative potential and the need for responsible use. Ethical considerations,
				regulations, and public awareness will play vital roles in shaping the future evolution
				of deepfake technology, ensuring it is harnessed for positive applications while mitigating
				its potential risks.
			</div>
		</Card>
		<Card>
			<template #header>
				Applications and Misuse of Deepfakes
			</template>
			Deepfake technology, powered by artificial intelligence, has revolutionised the way we interact
			with media content. As AI and deepfake technology evolve, people are finding more and more
			applications of deepfakes across various industries.
			<br><br>
			Deepfakes have many uses. One of which is that it can be used in entertainment. One of the
			more famous examples is a film called Rogue One. In the movie, several characters' actors were
			deceased and to recreate the shots, they utilised deepfake technologies to present characters on
			screen. At that time, the technology was still very much in its infancy so the uncanny valley was
			quite deep for that movie. However, with the advance of technology, realism has greatly increased
			and this was part of the reason that caused the SAG-AFTRA strikes as actors were afraid they would
			be replaced by this technology.
			<br><br>
			Another thing it can be utilised in is art and history. Multiple figures and their speeches have
			been brought to life thanks to this technology. For instance, John F. Kennedy"s speech on the day
			of the assassination was recreated with this technology. The speech Nixon planned on giving if the
			moon landing failed was also recreated with deep fakes. This allows us to gain a whole new
			perspective on different historical events more interactively.
			<br><br>
			You may have also seen the video of the Mona Lisa moving. That video was also created with a
			deepfake. Famous painter Salvador Dal was also "brought to life" with this technology to say some
			of his famous quotes. This technology adds a whole new dimension to appreciating art.
			<br><br>
			Marketers are also looking to jump on the bandwagon. This technology allows employees to create
			personalised messages for customers and have celebrities' faces cast over them to create a personalised
			message. One such example is "Lay's Messi Messages" where "Messi" would invite the viewer to see his
			game and say their name in a few different languages. However, the ethical implications of this
			application are still a subject of debate. Nevertheless, it remains one of the many uses of deepfake
			technology.
			<br><br>
			Surprisingly, deepfake technology has found applications in the medical field as well. To train medical
			robots, a large amount of data is needed. This data is hard to obtain due to privacy concerns but deepfakes
			can provide this. One such case is when it provides realistic brain scans for other AI to train on, so the
			AI can better recognize patterns in brain diseases and better diagnose them.
			<br><br>
			In addition to the benefits of deepfakes, we must also be aware of the malicious activities that can
			result from this technology. Deepfake scams now appear on the news more than ever before. Fraudsters
			can modify publicly available video and footage to cheat people out of money. In Hong Kong alone,
			several such cases have already been reported.
			For example, a finance employee working for a multinational company fell victim to a sophisticated
			scam involving deepfake technology. In this elaborate scheme, the fraudsters used deepfake technology
			to create virtual replicas of the company's chief financial officer and other staff members. The
			unsuspecting worker was deceived into participating in a video conference call with these deepfake
			impersonations.
			<br><br>
			The worker initially became suspicious when he received a message that claimed to be from the
			company's Chief Financial Officer based in the UK. The message discussed the necessity of conducting
			a confidential transaction, resembling a typical phishing email. However, the worker's doubts were
			set aside after the video call because the individuals present in the call appeared and sounded
			identical to his recognized colleagues. In the end, the worker was tricked into paying HKD$200 million.
			Furthermore, between July and September of 2023, a total of eight stolen Hong Kong identity cards,
			which had previously been reported as lost by their owners, were exploited for fraudulent purposes.
			These stolen cards were employed to initiate 90 loan applications and 54 bank account registrations.
			Remarkably, during these transactions, cutting-edge AI deepfake technology was utilized on at least
			20 occasions to deceive facial recognition systems. By skillfully mimicking the appearances of the
			individuals depicted on the stolen identity cards, the deepfake creations successfully tricked the
			facial recognition programs, allowing the fraudsters to proceed with their illicit activities undetected.
			Another concerning incident occurred in late January 2024, when the internet witnessed the rapid
			dissemination of pornographic images featuring the renowned American pop star, Taylor Swift. What
			made this case particularly alarming was the fact that these explicit images were not real
			photographs but rather AI-generated deepfakes, highlighting the detrimental impact that artificial
			intelligence technology can have.
			<br><br>
			The emergence of deepfake technology also presents a significant peril to the integrity of elections
			globally. In the US, a fake version of President Joe Biden's voice had been used in automatically
			generated robocalls to discourage Democrats from taking part in the primary election in the state
			of New Hampshire. The voice on the call sounded remarkably like the president, and the catchphrase
			was a familiar one.
			<br><br>
			A similar situation unfolded in Slovakia in October 2023, just days before the polls opened. A fabricated
			audio clip purportedly showing one candidate discussing vote manipulation and raising beer prices began to
			circulate online. Ultimately, the pro-Western party lost to a pro-Russian politician, leading to speculation
			that the deepfake had influenced the outcome.
			<br><br>
			A particular concern is the personalised targeting of voters using AI. A possible scenario where a malicious
			actor deploys AI technology to mimic a real person's voice and misinforms voters about their specific
			polling locations is possible. This could be replicated across multiple languages and affect numerous
			voters. AI-generated fakes could target local elections, particularly given the decline of local news
			outlets. Synthetic media becomes particularly difficult for voters to navigate in these cases, as local
			journalists may be scarce or unable to tackle misinformation effectively.
			<br><br>
			While deepfake technology presents various opportunities and benefits in entertainment, art, marketing, and
			even the medical field, it also poses significant risks and challenges. The rise of deepfake scams, as well
			as the potential for election interference and targeted misinformation, highlight the need for robust
			regulation and awareness.
		</Card>
		<Card>
			<template #header>
				How to Spot Deepfakes
			</template>
			To spot deepfake images or videos, here are some tips. First of all, when you are in doubt about
			the authenticity of an image or video, slow down and look for unusual or unnatural visual elements.
			Look for any signs or inconsistencies that may indicate manipulation such as a mismatched earrings
			or glass frames, unusual ear and tooth shapes and loss of contrast, or other discrepancies. Look for
			irregular or unnatural eye movements, such as blinking that seems too frequent or not occurring at
			appropriate times. In deepfake videos, facial expressions or lip-syncing may also appear unnatural or
			out of sync with the audio. If something seems off, it could be a sign of a deepfake.
			<br><br>
			In addition, deepfake videos often exhibit visual anomalies like blurring, pixelation, or mismatched
			edges around the subject's face or objects in the video. These irregularities can be a strong indicator
			of manipulation.
			<br><br>
			Deepfake videos may have inconsistent lighting and shadows on the manipulated face or body, which can be
			a clue that the video has been digitally altered. Pay attention to any blurriness or distortion, especially
			at the edges, as deepfake algorithms may struggle to achieve perfection. Deepfakes may have variations in
			image resolution and overall video quality.
			<br><br>
			Moreover, it's crucial to verify the source and context of the video. If you do not trust a claim,
			an image or a video, you can also use a standard internet search or a reverse image search
			to check for duplicates or similar images and see what other people say about it. You should
			also cross-reference the video with trusted sources or news outlets to ensure its authenticity.
			<br><br><br>
			The uncanny effect also plays a role in distinguishing deepfakes from real videos. It refers to the feeling
			of unease or discomfort that arises when a human-like entity,
			such as a robot, computer-generated character, or even a manipulated video, appears almost but not quite
			convincingly human. It is often associated with the phenomenon of the "uncanny valley," which suggests
			that as the appearance or behavior of an artificial entity becomes more human-like, there is a corresponding
			increase in the negative emotional response from humans.The uncanny effect plays a role in deepfakes because
			even though the technology can produce highly realistic results, there are often subtle imperfections or
			inconsistencies that can trigger a sense of unease or suspicion in viewers. When viewers sense that something
			is not quite right with a deepfake video, it can diminish the effectiveness of the deception. Therefore, trust
			your instincts if something feels too perfect or not quite right.
			<br><br>
			According to the Testing H10 of the research done by Ilkka Kaate and others, a repeated measures ANOVA was
			performed to compare the effect of persona modality on uncanny valley. There was a significant effect of
			persona modality on the uncanny valley between at least two groups. More detailed examination shows that
			deepfake personas exhibit a higher uncanny valley effect than narrative personas(NPs) and classic personas(CPs),
			while NPs and CPs do not exhibit significant differences. Therefore, H10 is fully supported: Deepfake personas
			result in a higher sense of abnormality than (a) classic persona profiles and (b) narrative personas.
		</Card>
	</App>
</template>

<style scoped>
.c-publication-image {
	float: right;
	clear: right;
	margin: 10px;
}

:deep(.c-paragraph-card__title) {
	padding-right: 6rem;
}
</style>
