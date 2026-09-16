const CHAPTERS=[
 {title:'A Stranger on My Team',loc:'Shanghai · Saturday 23:16',bg:'club',task:'Search the table and find a way to open the wooden box.',hint:'A brass key lies at the lower left of the table. Pick it up into your keepsakes, select it, then tap the wooden box on the right. The order of the symbols is hidden on the backs of the cards.'},
 {title:'The Same Frequency',loc:"Miss's room · fragments of a few nights",bg:'room',task:'Find the same melody and read all four exchanges.',hint:'Inspect the old ticket for the frequency; tap the radio and tune it to 96.4. Then tap the phone and read about the band, the game, the ball, the snow and the aurora.'},
 {title:'Lunch, and a Long Drive Home',loc:'After work · the road home',bg:'car',task:'Wipe the rain off the glass and hear the song in the car.',hint:'Tap the wiper switch and drag the slider above 80; then tap the car radio and choose the song playing in the car.'},
 {title:'Words Never Spoken',loc:'League of Legends Expo · dessert shop after dinner',bg:'date',task:'Adjust the focus and keep one photo together.',hint:'Tap the camera on the table, set the focus between 70 and 80, then press the shutter.'},
 {title:'The Memories, Read Backwards',loc:'Room · 02:41',bg:'memory',task:'Put the four fragments back together and see whether they give an answer.',hint:'Open the photo fragments and choose in order: the night as teammates, the late-night playlist, the drive in the rain, the photo taken close together. No puzzle can decide his feelings for him.'},
 {title:'Whose Drawer Is It',loc:'Call with sister · evening',bg:'memory',task:'Give his guesses back to him, and take your feelings back for yourself.',hint:'Tap a card and then a drawer, or drag it. Why he said no, whether he will come back, what he will promise — those belong to "his answers". Your sadness, your courage and your wishes belong to "my feelings".'},
 {title:'After the Rain Stops',loc:'Music festival · evening, a light rain',bg:'festival',task:'Pack your small bag, then choose where to focus your attention.',hint:'Tap your bag and pack the raincoat, earplugs and ticket. When you are ready, choose your own next step, and finally turn the volume up.'}
];
const L=(s,t,choices,scene)=>({s,t,choices,scene});
const SCRIPTS={
 '0-intro':[
 L('Miss','My best friend, sister, invited me to a board game cafe at the last minute. The rain was light that night, and I had not brought an umbrella.'),
 L('sister','Stop sitting by the door. There is room over here.'),
 L('Miss','When I looked up, he happened to be pushing the cards over. A blue-grey cuff, his fingertips resting on the corner of a card. The kind of face I would glance at more than once.'),
 L('Mr','You drew this faction too? Then we are on the same team.'),
 L('Miss','I was knocked out early, but I kept covering for him. In the last round he pretended to switch sides — and somehow everyone believed it.'),
 L('Mr','I owed you that one just now. Without your move earlier, I am not sure I could have won.'),
 L('Miss','Before everyone left, we cleared the table together. Tonight’s team cards sat inside the wooden box. But the box was still locked.')],
 '0-outro':[
 L('sister','Do you have a crush on him?'),
 L('Miss','I held the team card between my fingers.',[
 {t:'"Yeah. A little."',reply:'Admitting it was not as hard as I had imagined.',attach:1},
 {t:'"Let me just get to know him first."',reply:'I was not ready to give this little flutter a name yet.'}]),
 L('Miss','After I got home, I opened the group member list. I stopped on that blue-grey avatar and pressed "Add to Contacts".'),
 L('Miss','So an ordinary night could turn into a new beginning, just like that.')],
 '1-intro':[
 L('Miss','He accepted the friend request. I typed "Hi" into the chat box and pressed send.'),
 L('Miss','Hi.'),
 L('Mr','Hi, teammate from tonight.'),
 L('Miss','"Your acting in that last round was way too good. I almost believed you myself."'),
 L('Mr','You acted pretty well too. I almost convinced my own teammates, too.'),
 L('Mr','By the way, did you get home safely?'),
 L('Miss','Just got in. I added you the moment I sat down.'),
 L('Miss','The conversation drifted from board games and getting off work to the songs saved on our phones.'),
 L('Mr','You like Muxi too? I was at their last festival show as well.'),
 L('Miss','I dug out the old ticket stub from my drawer. On its back was a string of numbers — a radio frequency I had written down back then.')],
 '1-outro':[
 L('Miss','The same show, the same game, the same frustrated complaints about a match. My phone hardly went quiet.'),
 L('Miss','I thought if our interests could fit together this perfectly, then perhaps people could too.'),
 L('Mr','By the way, I am going back to the UK soon.'),
 L('Miss','That soon?'),
 L('Mr','Yeah. The holiday is too short.'),
 L('Miss','I stared at "the holiday is too short" — and still thought first of the way he had sounded when he talked about the aurora.'),
 L('Mr','Is your internship near Jing’an? I happen to be renting a car to Suzhou and I will pass through Shanghai tomorrow on the way back. Are you free for lunch?'),
 L('Miss','I am. Lunch is on me — the best place near our office.')],
 '2-intro':[
 L('Miss','He really came. I took him to lunch near my office. A two-hour break passed in what felt like a few minutes.'),
 L('Mr','Go back to work. I will wander around the area this afternoon.'),
 L('Miss','When I got off work that evening, my phone lit up again.'),
 L('Mr','I have not left yet. Want a ride home?'),
 L('Miss','Traffic will be terrible at this hour.'),
 L('Mr','It is fine. No rush.'),
 L('Miss','We got into the car. The red brake lights stretched beyond sight, and the rain grew thicker on the glass.')],
 '2-outro':[
 L('Miss','The navigation added another ten minutes. He simply tapped the beat twice with his fingers on the steering wheel.'),
 L('Miss','Looking at all the red on the route, I quietly thought: he is willing to spend this much time on me.',[
 {t:'Keep this night to myself',reply:'I did not say it out loud. The rain outside filled the silence for me.',attach:1},
 {t:'Tell him: "Thanks for driving me home."',reply:'"Anytime." He smiled a little. I smiled too.'}]),
 L('Miss','When we reached my building, the rain suddenly grew heavy. He stopped at the entrance and said he still had to return the car to the rental company.'),
 L('Miss','Want to wait until it lightens up?'),
 L('Mr','It is fine. Hurry upstairs. Do not get wet.'),
 L('Miss','I stepped into the hallway and looked back at his car slowly merging into the traffic in the rain.'),
 L('Miss','Back in my room, I kept checking my phone. After a long time, the screen finally lit up.',null,{bg:'room',loc:"Miss's room · late-night messages",task:'Read the messages from the rainy night and decide on your next move.'}),
 L('Mr','I finally got back to my place... traffic was awful again after dropping you off.'),
 L('Miss','That long! You did not get soaked, did you?'),
 L('Mr','I forgot my umbrella. I only noticed after returning the car, so I walked all the way back from the rental company in the rain. My clothes are soaked.'),
 L('Miss','Go take a hot shower and change right now.'),
 L('Mr','Then how are you going to make it up to me?'),
 L('Miss','Even through the screen, I could almost hear the playful, coaxing tone in his voice.'),
 L('Miss','Should I take you to the League of Legends Expo? And dinner too — my treat.'),
 L('Mr','Sounds good. It is a deal then. You are in charge of showing me around.'),
 L('Miss','Deal. Now go shower first.'),
 L('Miss','I put my phone down, then picked it up again for one more look. So the next meeting could simply be arranged like this.')],
 '3-intro':[
 L('Miss','On the weekend, I waited for him at the entrance of the League of Legends Expo. This was the "compensation" I had promised.',null,{bg:'exhibition',loc:'Weekend · League of Legends Expo',task:'Keep the rainy-night promise and walk through the expo with him.'}),
 L('Mr','I will follow you today, teammate.'),
 L('Miss','Screens in the hall glowed with the familiar Rift map. We stood close behind the crowd, talking about the lanes we played and the matches we had watched.'),
 L('Mr','Want to see that booth? Let us go over.'),
 L('Miss','I nodded. He slowed his pace to wait for me and casually took the souvenir bag from my hand.'),
 L('Miss','After the expo, we had dinner as planned. When the food arrived, we were still talking about the booths we had just seen.',null,{bg:'dinner',loc:'Evening · a table by the restaurant window',task:'Share a meal and keep the conversation going slowly.'}),
 L('Mr','This "compensation" is very sincere.'),
 L('Miss','Of course. I said it would be my treat.'),
 L('Miss','After dinner, we went to the dessert shop I liked.',null,{bg:'date',loc:'After dinner · by the dessert shop window'}),
 L('Mr','Stand over there. I will take it for you.'),
 L('Miss','He was good with a camera and kept carrying the takeaway bag for me. Every little thing pushed the word "like" closer to the tip of my tongue.'),
 L('Miss','Before leaving, I asked: can we take one together?'),
 L('Mr','Sure. Here is the camera. We can use the timer.')],
 '3-outro':[
 L('Miss','We stood very close in that photo. I did not even dare ask when he would come back to Shanghai.'),
 L('Miss','He saw me onto the subway. Back home, I kept looking at the photo.'),
 L('Mr','Did you have something you wanted to tell me today?'),
 L('Miss','The input box blinked. This time I did not want to circle around it anymore.',[
 {t:'"I think I kind of like you."',reply:'After I sent it, I laid the phone face-down on the bed.'},
 {t:'"After you go back to the UK, will we still talk like this?"',reply:'I hoped he would understand, and I hoped I would understand his answer too.'}]),
 L('Mr','I think we are both smart enough. You should know what I mean.'),
 L('Mr','I just got out of a long-distance relationship. We broke up precisely because we were not in the same place. I have not moved on yet, and I do not want to start anything now.'),
 L('Mr','That trip to Suzhou was to revisit the place where we spent the most time together. Starting something now would not be fair to the other person either.'),
 L('Mr','You are wonderful, but I do not want you to misunderstand.'),
 L('Miss','The room had not changed. Yet the things I had wanted to reach for a moment ago, I now did not want to touch at all.'),
 L('Miss','I still replied.',[
 {t:'"I understand. Thank you for being clear."',reply:'Typing the graceful sentence did not make the sadness leave at once.',self:1},
 {t:'"Did I say it too early?"',reply:'"It is not your fault," he said. After that, his messages grew shorter and shorter.',attach:1}]),
 L('Miss','No new playlists, no game invites. An occasional "mm" could keep me frozen in front of my phone for a long time.')],
 '4-intro':[
 L('Miss','I scrolled up through the chat history again and again.'),
 L('Miss','If he did not mean it, why wait for me after work? Why tease me about making it up to him after getting caught in the rain? Why share so many faraway places?'),
 L('Miss','I spread out the ticket, the photo, the mixtape and the team card. As if putting them in the right order would reveal the missing sentence.')],
 '4-outro':[
 L('Miss','The four fragments were assembled. No new clue appeared.'),
 L('Miss','"Then maybe I really have seen you before" was real. "I do not want to start anything now" was real.'),
 L('Miss','These memories told me what happened, but they could not say what he wanted for him.'),
 L('Miss','I typed again: maybe once you have moved on...',[
 {t:'Delete the sentence and put the phone down',reply:'What I could not bear to lose was also the version of myself who believed everything was about to begin.',self:1},
 {t:'Scroll up once more',reply:'The rainy night was still where it had always been. I read it again, and the answer did not change.',attach:1}]),
 L('Miss','sister sent one line: you did not eat properly again tonight, did you? Want to call?')],
 '5-intro':[
 L('Miss','In my pajamas, phone in hand, I went through every detail all over again. Sister was still rushing to finish her work at home, but when she heard this part, the sound of her keyboard slowly stopped.',null,{bg:'friend-call',loc:'Two rooms · one phone call',task:'Listen to sister, and listen to your own feelings too.'}),
 L('sister','What do you actually want to know now — whether he ever liked you, or whether you can keep waiting?'),
 L('Miss','I do not know. I just feel like we fit so well.'),
 L('sister','Put plainly, he did not like you enough to be willing to start a relationship. And you do not have to force yourselves to be friends.'),
 L('Miss','But that day, he really was so good to me.'),
 L('sister','I know. But kindness on one day does not automatically turn into a promise for later.'),
 L('sister','You do not have to pretend to be a casual friend while waiting for him to turn around. When it hurts, I am here.'),
 L('Miss','There were two drawers on the desk. For the first time, I wanted to sort these things apart instead of piecing them together.',null,{bg:'memory',loc:"Miss's room · sorting the drawers"})],
 '5-outro':[
 L('sister','Him not choosing you and you not being worth choosing are two different things.',null,{bg:'friend-call',loc:'Two rooms · the call has not ended',task:'Hear her out, then slowly move forward.'}),
 L('Miss','I put the things that belonged to me in their place. The sadness was still there, but it finally no longer had to prove anything.'),
 L('Miss','I was brave, and I liked someone sincerely. None of that became invalid because of his answer.'),
 L('sister','Your festival ticket is still around, right? Do not stop listening to the songs you love just because of one person.'),
 L('Miss','Mm. I already bought a raincoat too.')],
 '6-intro':[
 L('Miss','After a while, I came anyway. A long queue stretched from the festival entrance, and a light rain began again.'),
 L('Miss','I did not look for someone to shield me from the rain first. I opened the bag I had prepared myself.')],
 '6-outro':[
 L('Miss','The ticket, the raincoat and the earplugs were all there. Suddenly a new post from him appeared on my phone.'),
 L('Miss','I can still remember that rain. But coming here today was my own decision.'),
 L('Miss','Before the band came on stage, I decided to...',[
 {t:'Leave one more line: "How have you been?"',route:'waiting',reply:'The cursor blinked after the sentence. I was not ready to say goodbye yet.'},
 {t:'Like the post, like an ordinary friend',route:'friends',reply:'One small like. I would still wait to see whether he would come to me because of it.'},
 {t:'Send sister a video from the crowd, then put the phone away',route:'free',self:1,reply:'"Have fun," sister replied. I slipped the phone back into my pocket and walked toward the stage.'}]),
 L('Miss','The familiar intro began. This time, I wanted to hear my own life first.')]
};
const TOPICS={
 band:{title:'The Encore',sub:'Band · the same festival · two angles',icon:'♫',lines:[
 ['Mr','You went to Muxi’s last show too?'],['Miss','I did. I cried so much I used up all the tissues from the people next to me.'],['Miss','Let me show you what I took that day. I was a little to the right of the front row.'],['Miss','Live photo · the stage from front row, slightly right',{photo:'festival-her',caption:'My photo · front row right, the band taking their encore'}],['Mr','That close! I was at the side of the back row, where I could see the whole crowd.'],['Mr','I have one too. Wait, let me find it.'],['Mr','Live photo · the wide view from the side of the back row',{photo:'festival-him',caption:'His photo · back row side, under the same stage lights'}],['Miss','It really is the same show! Even that blue light is the same — only the angle is completely different.'],['Mr','Right. Everyone shouted for an encore until our voices were gone.'],['Miss','So we were that close that day.'],['Mr','Then maybe I really have seen you before.'],
 {prompt:'The cursor paused for a moment. How do you want to reply?',choices:[{t:'I should have turned around that day.',attach:1},{t:'Which song of theirs is your favorite?'}]},
 ['Mr','I will send you the playlist I listened to on the road that day. Take your time with it.'],['Miss','Okay. I will listen to every song, one by one.'],['System','One shared melody is tucked into the old mixtape.']]},
 game:{title:'So You Play LOL Too',sub:'LOL · jungle and ADC · one normal match',icon:'⌘',lines:[
 ['Miss','Ugh, my favorite team played so badly today.'],['Mr','Which game?'],['Miss','LOL. I was furious watching it.'],['Mr','You watch LOL too? I watch it as well, and I play regularly.'],['Miss','What a coincidence! I thought I was the only one getting angry here.'],['Mr','I get it. Watching pro play is more stressful than playing yourself. Which lane do you play?'],['Miss','Bot lane ADC. You?'],['Mr','Jungle. Want to queue a normal match? I will gank bot a lot for you.'],['Miss','Let us go. I could use a change of mood. Send me your ID.'],['System','Game friends added. The two of you enter the same lobby, select normal match, and start looking for a game.'],['Mr','Can you hear me on voice?'],['Miss','I can. Do not expect too much from my mechanics.'],['Mr','It is fine. I am playing with you, not taking an exam.'],['System','That night · a normal LOL match · Mr in the jungle, Miss as ADC'],['Mr','I will gank bot after I finish this camp. Freeze the wave for now, do not push.'],['Miss','Got it. I am holding my abilities. Their ADC used Flash.'],['Mr','Coming. Wait for me to go around behind — now, go in.'],['Miss','Connected! That engage was clean.'],['Mr','You followed quickly too. Push the wave and recall first; I will watch for you.'],['System','He pathed around to bot lane again and again. She slowly learned his rhythm — sometimes a single ping was enough to know which way to move.'],['Miss','Why are you here again? Have you moved into bot lane?'],['Mr','When there is an ADC with this kind of synergy, of course I have to come more often.'],{prompt:'Hearing him say "an ADC with this kind of synergy" made you smile, your hand still resting on the mouse.',choices:[{t:'Then come help me next time too.',attach:1},{t:'You ping, and I will follow.'}]},['System','The match ends. The results screen lights up, but the voice call stays connected.'],['Miss','We make a pretty good team. I can save being mad at my favorite team for tomorrow.'],['Mr','Glad to help. You have work tomorrow, right? Sleep soon. We can queue again next time.']]},
 ball:{title:'Even Far Away Has Its Jokes',sub:'Stories from the UK · the ball',icon:'◇',photo:'ball',caption:'An old photo he sent · the university hall',lines:[
 ['Mr','Did you know someone in our dorm cooked bacon and set off the smoke alarm? In the middle of the night, the whole building had to go downstairs and freeze in the wind.'],['Miss','A flock of penguins in pajamas?'],['Mr','Someone was wrapped in a duvet — the king of the penguins.'],['Miss','Haha. Then a school ball must be like in the movies, right?'],['Mr','Not really. Everyone was just pretending they knew how to dance.'],['Miss','What about you?'],['Mr','A little. I know how to stop right before I step on someone.'],['Miss','That is a kind of talent too.'],['Mr','I can teach you next time, if there is a chance.'],{prompt:'The words "next time" sounded very close.',choices:[{t:'Then I will remember that.',attach:1},{t:'Sure, first let me enjoy the photo.'}]},['System','The hall was beautiful. His world suddenly felt a little closer to your room.']]},
 snow:{title:'Snow Falls, the Sky Brightens',sub:'Snow in the UK · the aurora · an invitation to Norway',icon:'✧',photo:'snow',caption:'An old photo he sent · last winter',lines:[
 ['Mr','Let me show you photos from last winter. The road outside our dorm was completely white.'],['Miss','So beautiful. Shanghai only has the cold; it rarely snows like this.'],['Mr','Then you need to feel the cold over there. Walk for ten minutes and your hands stop obeying you.'],['Miss','That sounds like a travel risk warning.'],['Mr','Exactly. Remember gloves.'],['Miss','Is the green one later in your album the aurora?'],['System','He sends another travel photo.'],['Mr','Mm, I chased it up north later. Waited for hours and thought we would not see it.'],['Miss','And then?'],['Mr','The edge of the sky suddenly lit up. To the naked eye it was not as saturated as in the photo — just a faint green, moving.'],['Miss','I want to see it too! Seeing the aurora is actually on my bucket list.'],['Mr','Sure! I was actually thinking of going to Norway this winter.'],['Mr','If you want to come, I can sort out the driving and accommodation.'],['Mr','I will round people up right away.'],['Miss','Haha, are we forming a party already?'],['Mr','Of course. Invite any friends you want to bring along too, all together.'],{prompt:'You zoom into the aurora photo a little more and start imagining this winter.',choices:[{t:'Then let me check the holiday schedule. I am genuinely tempted.',attach:1},{t:'Sure, I will ask my friends too.',self:1}]},['Mr','Deal. Check your dates and tell me; we will figure it out together.'],['System','The photo is saved to the album. That night, Norway was still only a plan in a chat, yet it already felt much closer.']]}
};
const ITEMS={key:{icon:'⚿',name:'Brass Key',desc:'The key to the board game cafe box. Select it first, then tap the box.'},card:{icon:'☾',name:'Team Card',desc:'Moon, star, rain. That night we stood on the same side.'},ticket:{icon:'▤',name:'Old Ticket Stub',desc:'An old festival ticket. FM 96.4 is written on the back. So we had heard the same encore.'},tape:{icon:'▣',name:'Mixtape',desc:'A fictional melody we both loved. Hearing the same songs does not mean wanting to go in the same direction.'},photo:{icon:'▧',name:'Photo Together',desc:'A photo from the second meeting. That close, fleeting moment really existed.'},raincoat:{icon:'♧',name:'Raincoat',desc:'A raincoat I prepared myself before going out. You can move forward without waiting for the rain to stop.'}};
const ENDINGS={waiting:{tag:'ENDING 01 / 03',title:'Still Typing',text:'"How have you been?" is still left in the input box. The cursor blinks on and on.\nTonight’s songs are beautiful, but you have not finished listening to them.',last:'It is all right. Moving on sometimes takes more than one night.'},friends:{tag:'ENDING 02 / 03',title:'Just Friends, Gracefully',text:'You occasionally like each other’s posts and exchange greetings on holidays.\nBut every time the phone lights up, you still check first whether it is him.',last:'Maybe one day, "friend" will no longer be another name for waiting.'},free:{tag:'ENDING 03 / 03',title:'Before the Rain Ends,\nI Will Go First',text:'I will still remember that rain, and remember that I truly liked him.\nBut those feelings do not have to be returned for them to have been real.',last:'I do not need to wait for anyone to turn back. I already know where I am going.'}};
