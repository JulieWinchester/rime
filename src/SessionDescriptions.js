import React from 'react';

function SessionDescriptions(props) {
  if (props.session === 1) {
    return (
      <div>
        <p>Icewind Dale lies under a blanket of cursed darkness, supposedly imposed by the cruel wintry goddess Auril the Frostmaiden. A wealthy and esteemed society mage, Vellyne Harpell, organizes an expedition to bring aid to the Ten Towns. And four wanderers, each one believing themselves to be wholly alone in the world, are hired by this enterprise. They are entirely unaware that this prosaic decision actually puts them on a path toward a shocking and momentous destiny…</p>
        <p>Cam Sarris broods on a stagecoach, the small slice of his already-pale exposed face totally drained of color against the white frozen backdrop. The stagecoach is stuck in the snow in the criss-crossing mountain paths of the Ten Trail, high up in the Spine of the World. The blizzard encircling Icewind Dale was not supposed to extend this far south.</p>
        <p>The stagecoach is rescued by a sled dog team run by the Reghed Uki Skeaŋka, Ace the white kobold, and Mairwen with the fire in her eyes. The group travels north up the mountain, trying to reach the Three Feathers Inn at the top of the Ten Trail, but they are interrupted by a mysterious sight. A traveler lies died, impaled by a beautiful but deadly dagger formed entirely from ice. More immediately, gnawing at the body and lying in wait under the snow are decaying fiends with the faces of hyenas and the bodies of people, jaws dripping with black slime and hungry for living flesh!</p>  
      </div>
    );
  } else if (props.session === 2) {
    return (
      <div>
        <p>En route to meet Vellyne Harpell and deliver supplies to the expedition in Icewind Dale, the wanderers reach the supposed safety of the Three Feathers Inn. The Inn sits in the middle of a mountain lake at the highest elevation of the Ten Trail that cuts through the Spine of the World, connecting the Dale to the southern realms. Over a single night at the Three Feathers, the group finds far more than a good night's sleep. They are warmly welcomed by those filling the common room, and the ale and spirits flow freely. Cam tries to break the ice among the newly met wanderers, Uki enthusiastically relishes many drinks and multiple plates of food, Ace is first at ease to be in a group but then is embarrassed after drawing too much individual attention, and Mairwen not-too-subtly pretends to eat and drink while avoiding both.</p>
        <p>It quickly becomes apparent the building is full of suspicious characters, and it's hard to tell how friendly is TOO friendly. Cam wins an arm-wrestling contest against a hothead from Torrga Icevein's traveling market caravan, and Mairwen learns a little more about the fallen traveler outside the Inn. But schemes are clearly afoot: the night is punctuated by a surprise dead body found in Ace's room, a bungled case of murderous mistaken identity, and religious masquerades combined with a knocking coffin. All of this concludes with fire and smoke filling the Inn's second floor, as Uki leads the others in mortal combat against another of the hyena fiends, this time joined by the risen undead corpses of the adventurers who brought the fiend inside.</p>
      </div>
    );
  } else {
    return null;
  }
}

export default SessionDescriptions;