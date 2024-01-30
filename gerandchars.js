/*!
---------- Gerandchars V1.2.6 ---------- 
 * MIT License
 * Copyright (c) 2023 - 2024 Nest NPack
 */

'use strict';

const gerandchars = (function() {
  function randStr(length, size = 'normal') {
    const string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    let result = '';
    
    if (typeof length === 'undefined') {
      throw Error('Enter the length of the string to be generated');
    }
    
    if (length <= 0) {
      throw Error('Invalid character length (0)');
    }
  
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * string.length);
      result += string.charAt(randomIndex);
    }
  
    switch (size) {
      case 'high':
        result = result.toUpperCase();
        break;
      
      case 'low':
        result = result.toLowerCase();
        break;
      
      default:
        result;
    }
  
    return result;
  }
  
  function randNum(length) {
    const number = '0123456789';
    let result = '';
    
    if (typeof length === 'undefined') {
      throw Error('Enter the length of the number to be generated');
    }
    
    if (length <= 0) {
      throw Error('Invalid character length (0)');
    }
  
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * number.length);
      result += number.charAt(randomIndex);
    }
  
    return result;
  }
  
  function randStrNum(length, size = 'normal') {
    const strnum = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz01234567890123456789';
    let result = '';
    size = size.toLowerCase();
    
    if (typeof length === 'undefined') {
      return Error('Enter the length of the string and number to be generated');
    }
    
    if (length <= 0) {
      return Error('Invalid character length (0)');
    }
  
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * strnum.length);
      result += strnum.charAt(randomIndex);
    }
  
    switch (size) {
      case 'high':
        result = result.toUpperCase();
        break;
      
      case 'low':
        result = result.toLowerCase();
        break;
      
      default:
        result;
    }
  
    return result;
  }
  
  function randPasswd(length) {
    const charset = 'abcdefghijklmnopqrstuvwxyz'+
      'ABCDEFGHIJKLMNOPQRSTUVWXYZ'+
      '0123456789'+
      '0123456789'+
      '!@#$%^&*()-_=+'+
      '!@#$%^&*()-_=+';
    let result = '';
    
    if (typeof length === 'undefined') {
      throw Error('Enter the length of the password to be generated');
    }
    
    if (length <= 0) {
      throw Error('Invalid character length (0)');
    }
  
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      result += charset.charAt(randomIndex);
    }
  
    return result;
  }
  
  function randBool() {
    function randBoolMath() {
      return Math.random() < 0.5;
    }
    return randBoolMath();
  }
  
  function randColor(type, opacity) {
    let color;
    let alpha;
    
    if(typeof type === 'undefined') {
      throw Error('Enter the type of color that will be generated');
    }
    
    if (typeof opacity === 'undefined') {
      opacity = 0.1 + Math.random() * 1;
    }
    
    if (opacity == 'normal') {
      opacity = 1;
    }
    
    type = type.toLowerCase();
    opacity = Math.min(1, Math.max(0, opacity));
    
    if(type == 'hex') {
      const red = Math.floor(Math.random() * 256);
      const green = Math.floor(Math.random() * 256);
      const blue = Math.floor(Math.random() * 256);
      
      function toHex(decimalValue) {
        const hex = decimalValue.toString(16);
        return hex.length === 1 ? "0" + hex : hex;
      }
      
      if (opacity < 1) {
        alpha = Math.round(opacity * 255);
        opacity = alpha;
      } else {
        opacity = 255;
      }
      
      color = `#${toHex(red)}${toHex(green)}${toHex(blue)}${toHex(opacity)}`;
    }
    
    if(type == 'rgb') {
      const red = Math.floor(Math.random() * 256);
      const green = Math.floor(Math.random() * 256);
      const blue = Math.floor(Math.random() * 256);
      
      if(opacity < 1) {
        alpha = Math.round(opacity * 999);
        opacity = `0.${alpha}`;
      }
      
      color = `rgba(${red}, ${green}, ${blue}, ${opacity})`;
    }
    
    if(type == 'hsl') {
      const hue = Math.floor(Math.random() * 360);
      const saturation = Math.floor(Math.random() * 101);
      const lightness = Math.floor(Math.random() * 101);
      
      if(opacity < 1) {
        alpha = Math.round(opacity * 999);
        opacity = `0.${alpha}`;
      }
      
      color = `hsla(${hue}, ${saturation}%, ${lightness}%, ${opacity})`;
    }
    
    if(typeof color === 'undefined') {
      throw Error(`[type: ${type}] not found`);
    }
    
    return color;
  }
  
  function randEmote(type, length) {
    const Emote = {
      face: "😀😁😂😃😄😅😆😉😊😋😎😍😘😗😙😚☺🙂🤗🤔😐😑😶🙄😏😣😥😮🤐😯😪😫😴😌😛😜😝😒😓😔😕🙃🤑😲🙁😖😞😟😤😢😭😦😧😨😩😬😰😱😳😵😡😠😷🤒🤕😇🤓",
      facecat: "😺😸😹😻😼😽🙀😿😾",
      hand: "💪👈👉☝👆🖕👇✌🖖🤘🖐✋👌👍👎✊👊👋👏👐🙌🙏",
      clock: "🕛🕧🕐🕜🕑🕝🕒🕞🕓🕟🕔🕠🕕🕡🕖🕢🕗🕣🕘🕤🕙🕥🕚🕦",
      cloud: "☁⛅⛈🌤🌥🌦🌧🌨🌩",
      animal: "🐵🐒🐶🐕🐩🐺🐱🐈🦁🐯🐅🐆🐴🐎🦄🐮🐂🐃🐄🐷🐖🐗🐽🐏🐑🐐🐪🐫🐘🐭🐁🐀🐹🐰🐇🐿🐻🐨🐼🐾🦃🐔🐓🐣🐤🐥🐦🐧🕊🐸🐊🐢🐍🐲🐉🐳🐋🐬🐟🐠🐡🐙🐚🦀🐌🐛🐜🐝🐞🕷🕸🦂",
      month: "🌑🌒🌓🌔🌕🌖🌗🌘🌙🌚🌛�",
      number: "0⃣1⃣2⃣3⃣4⃣5⃣6⃣7⃣8⃣9⃣🔟",
      countryflag: "🇦🇩🇦🇪🇦🇫🇦🇬🇦🇮🇦🇱🇦🇲🇦🇴🇦🇷🇦🇸🇦🇹🇦🇺🇦🇼🇦🇽🇦🇿🇧🇦🇧🇧🇧🇩🇧🇪🇧🇫🇧🇬🇧🇭🇧🇮🇧🇯🇧🇲🇧🇳🇧🇴🇧🇷🇧🇸🇧🇹🇧🇼🇧🇾🇧🇿🇨🇦🇨🇨🇨🇩🇨🇫🇨🇬🇨🇭🇨🇮🇨🇰🇨🇱🇨🇲🇨🇳🇨🇴🇨🇷🇨🇺🇨🇻🇨🇼🇨🇽🇨🇾🇨🇿🇩🇪🇩🇯🇩🇰🇩🇲🇩🇴🇩🇿🇪🇨🇪🇪🇪🇬🇪🇷🇪🇸🇪🇹🇪🇺🇫🇮🇫🇯🇫🇲🇫🇴🇫🇷🇬🇦🇬🇧🇬🇩🇬🇪🇬🇬🇬🇭🇬🇮🇬🇱🇬🇲🇬🇳🇬🇶🇬🇷🇬🇹🇬🇺🇬🇼🇬🇾🇭🇰🇭🇳🇭🇷🇭🇹🇭🇺🇮🇩🇮🇪🇮🇱🇮🇲🇮🇳🇮🇴🇮🇶🇮🇷🇮🇸🇮🇹🇯🇪🇯🇲🇯🇴🇯🇵🇰🇪🇰🇬🇰🇭🇰🇮🇰🇲🇰🇳🇰🇵🇰🇷🇰🇼🇰🇾🇰🇿🇱🇦🇱🇧🇱🇨🇱🇮🇱🇰🇱🇷🇱🇸🇱🇹🇱🇺🇱🇻🇱🇾🇲🇦🇲🇨🇲🇩🇲🇪🇲🇬🇲🇭🇲🇰🇲🇱🇲🇲🇲🇳🇲🇴🇲🇵🇲🇷🇲🇸🇲🇹🇲🇺🇲🇻🇲🇼🇲🇽🇲🇾🇲🇿🇳🇦🇳🇪🇳🇫🇳🇬🇳🇮🇳🇱🇳🇴🇳🇵🇳🇷🇳🇺🇳🇿🇴🇲🇵🇦🇵🇪🇵🇫🇵🇬🇵🇭🇵🇰🇵🇱🇵🇳🇵🇷🇵🇸🇵🇹🇵🇼🇵🇾🇶🇦🇷🇴🇷🇸🇷🇺🇷🇼🇸🇦🇸🇧🇸🇨🇸🇩🇸🇪🇸🇬🇸🇮🇸🇰🇸🇱🇸🇲🇸🇳🇸🇴🇸🇷🇸🇸🇸🇹🇸🇻🇸🇽🇸🇾🇸🇿🇹🇨🇹🇩🇹🇬🇹🇭🇹🇯🇹🇰🇹🇱🇹🇲🇹🇳🇹🇴🇹🇷🇹🇹🇹🇻🇹🇼🇹🇿🇺🇦🇺🇬🇺🇸🇺🇾🇺🇿🇻🇦🇻🇨🇻🇪🇻🇬🇻🇮🇻🇳🇻🇺🇼🇸🇾🇪🇿🇦🇿🇲🇿",
      all: "😀😁😂😃😄😅😆😉😊😋😎😍😘😗😙😚☺🙂🤗🤔😐😑😶🙄😏😣😥😮🤐😯😪😫😴😌😛😜😝😒😓😔😕🙃🤑😲🙁😖😞😟😤😢😭😦😧😨😩😬😰😱😳😵😡😠😷🤒🤕😇🤓😈👿👹👺💀☠👻👽👾🤖💩😺😸😹😻😼😽🙀😿😾🙈🙉🙊👶👦👧👨👩👴👵👮🕵💂👷👸👳👲👱👰👼🎅🙍🙎🙅🙆💁🙋🙇💆💇🚶🏃💃👯🛀🛌🕴🗣👤👥🏇⛷🏂🏌🏄🚣🏊⛹🏋🚴🚵🏎🏍👫👬👭💏👨‍❤‍💋‍👨👩‍❤‍💋‍👩💑👨‍❤‍👨👩‍❤‍👩👪👨‍👩‍👧👨‍👩‍👧‍👦👨‍👩‍👦‍👦👨‍👩‍👧‍👧👨‍👨‍👦👨‍👨‍👧👨‍👨‍👧‍👦👨‍👨‍👦‍👦👨‍👨‍👧‍👧👩‍👩‍👦👩‍👩‍👧👩‍👩‍👧‍👦👩‍👩‍👦‍👦👩‍👩‍👧‍👧💪👈👉☝👆🖕👇✌🖖🤘🖐✋👌👍👎✊👊👋✍👏👐🙌🙏💅👂👃👣👀👁👁‍🗨👅👄💋💘❤💓💔💕💖💗💙💚💛💜💝💞💟❣💌💤💢💣💥💦💨💫💬🗨🗯💭🕳👓🕶👔👕👖👗👘👙👚👛👜👝🛍🎒👞👟👠👡👢👑👒🎩🎓⛑📿💄💍💎🐵🐒🐶🐕🐩🐺🐱🐈🦁🐯🐅🐆🐴🐎🦄🐮🐂🐃🐄🐷🐖🐗🐽🐏🐑🐐🐪🐫🐘🐭🐁🐀🐹🐰🐇🐿🐻🐨🐼🐾🦃🐔🐓🐣🐤🐥🐦🐧🕊🐸🐊🐢🐍🐲🐉🐳🐋🐬🐟🐠🐡🐙🐚🦀🐌🐛🐜🐝🐞🕷🕸🦂💐🌸💮🏵🌹🌺🌻🌼🌷🌱🌲🌳🌴🌵🌾🌿☘🍀🍁🍂🍃🍇🍈🍉🍊🍋🍌🍍🍎🍏🍐🍑🍒🍓🍅🍆🌽🌶🍄🌰🍞🧀🍖🍗🍔🍟🍕🌭🌮🌯🍳🍲🍿🍱🍘🍙🍚🍛🍜🍝🍠🍢🍣🍤🍥🍡🍦🍧🍨🍩🍪🎂🍰🍫🍬🍭🍮🍯🍼☕🍵🍶🍾🍷🍸🍹🍺🍻🍽🍴🔪🏺🌍🌎🌏🌐🗺🗾🏔⛰🌋🗻🏕🏖🏜🏝🏞🏟🏛🏗🏘🏙🏚🏠🏡🏢🏣🏤🏥🏦🏨🏩🏪🏫🏬🏭🏯🏰💒🗼🗽⛪🕌🕍⛩🕋⛲⛺🌁🌃🌄🌅🌆🌇🌉♨🌌🎠🎡🎢💈🎪🎭🖼🎨🎰🚂🚃🚄🚅🚆🚇🚈🚉🚊🚝🚞🚋🚌🚍🚎🚐🚑🚒🚓🚔🚕🚖🚗🚘🚙🚚🚛🚜🚲🚏🛣🛤⛽🚨🚥🚦🚧⚓⛵🚤🛳⛴🛥🚢✈🛩🛫🛬💺🚁🚟🚠🚡🛰🚀🛎🚪🛏🛋🚽🚿🛁⌛⏳⌚⏰⏱⏲🕰🕛🕧🕐🕜🕑🕝🕒🕞🕓🕟🕔🕠🕕🕡🕖🕢🕗🕣🕘🕤🕙🕥🕚🕦🌑🌒🌓🌔🌕🌖🌗🌘🌙🌚🌛🌜🌡☀🌝🌞⭐🌟🌠☁⛅⛈🌤🌥🌦🌧🌨🌩🌪🌫🌬🌀🌈🌂☂☔⛱⚡❄☃⛄☄🔥💧🌊🎃🎄🎆🎇✨🎈🎉🎊🎋🎍🎎🎏🎐🎑🎀🎁🎗🎟🎫🎖🏆🏅⚽⚾🏀🏐🏈🏉🎾🎱🎳🏏🏑🏒🏓🏸🎯⛳⛸🎣🎽🎿🎮🕹🎲♠♥♦♣🃏🀄🎴🔇🔈🔉🔊📢📣📯🔔🔕🎼🎵🎶🎙🎚🎛🎤🎧📻🎷🎸🎹🎺🎻📱📲☎📞📟📠🔋🔌💻🖥🖨⌨🖱🖲💽💾💿📀🎥🎞📽🎬📺📷📸📹📼🔍🔎🔬🔭📡🕯💡🔦🏮📔📕📖📗📘📙📚📓📒📃📜📄📰🗞📑🔖🏷💰💴💵💶💷💸💳💹💱💲✉📧📨📩📤📥📦📫📪📬📭📮🗳✏✒🖋🖊🖌🖍📝💼📁📂🗂📅📆🗒🗓📇📈📉📊📋📌📍📎🖇📏📐✂🗃🗄🗑🔒🔓🔏🔐🔑🗝🔨⛏⚒🛠🗡⚔🔫🏹🛡🔧🔩⚙🗜⚗⚖🔗⛓💉💊🚬⚰⚱🗿🛢🔮🏧🚮🚰♿🚹🚺🚻🚼🚾🛂🛃🛄🛅⚠🚸⛔🚫🚳🚭🚯🚱🚷📵🔞☢☣⬆↗➡↘⬇↙⬅↖↕↔↩↪⤴⤵🔃🔄🔙🔚🔛🔜🔝🛐⚛🕉✡☸☯✝☦☪☮🕎🔯♈♉♊♋♌♍♎♏♐♑♒♓⛎🔀🔁🔂▶⏩⏭⏯◀⏪⏮🔼⏫🔽⏬⏸⏹⏺⏏🎦🔅🔆📶📳📴♀♂⚕♻⚜🔱📛🔰⭕✅☑✔✖❌❎➕➖➗➰➿〽✳✴❇‼⁉❓❔❕❗〰©®™#⃣*⃣0⃣1⃣2⃣3⃣4⃣5⃣6⃣7⃣8⃣9⃣🔟💯🔠🔡🔢🔣🔤🅰🆎🅱🆑🆒🆓ℹ🆔Ⓜ🆕🆖🅾🆗🅿🆘🆙🆚🈁🈂🈷🈶🈯🉐🈹🈚🈲🉑🈸🈴🈳㊗㊙🈺🈵▪▫◻◼◽◾⬛⬜🔶🔷🔸🔹🔺🔻💠🔘🔲🔳⚪⚫🔴🔵🏁🚩🎌🏴🏳🇦🇩🇦🇪🇦🇫🇦🇬🇦🇮🇦🇱🇦🇲🇦🇴🇦🇷🇦🇸🇦🇹🇦🇺🇦🇼🇦🇽🇦🇿🇧🇦🇧🇧🇧🇩🇧🇪🇧🇫🇧🇬🇧🇭🇧🇮🇧🇯🇧🇲🇧🇳🇧🇴🇧🇷🇧🇸🇧🇹🇧🇼🇧🇾🇧🇿🇨🇦🇨🇨🇨🇩🇨🇫🇨🇬🇨🇭🇨🇮🇨🇰🇨🇱🇨🇲🇨🇳🇨🇴🇨🇷🇨🇺🇨🇻🇨🇼🇨🇽🇨🇾🇨🇿🇩🇪🇩🇯🇩🇰🇩🇲🇩🇴🇩🇿🇪🇨🇪🇪🇪🇬🇪🇷🇪🇸🇪🇹🇪🇺🇫🇮🇫🇯🇫🇲🇫🇴🇫🇷🇬🇦🇬🇧🇬🇩🇬🇪🇬🇬🇬🇭🇬🇮🇬🇱🇬🇲🇬🇳🇬🇶🇬🇷🇬🇹🇬🇺🇬🇼🇬🇾🇭🇰🇭🇳🇭🇷🇭🇹🇭🇺🇮🇩🇮🇪🇮🇱🇮🇲🇮🇳🇮🇴🇮🇶🇮🇷🇮🇸🇮🇹🇯🇪🇯🇲🇯🇴🇯🇵🇰🇪🇰🇬🇰🇭🇰🇮🇰🇲🇰🇳🇰🇵🇰🇷🇰🇼🇰🇾🇰🇿🇱🇦🇱🇧🇱🇨🇱🇮🇱🇰🇱🇷🇱🇸🇱🇹🇱🇺🇱🇻🇱🇾🇲🇦🇲🇨🇲🇩🇲🇪🇲🇬🇲🇭🇲🇰🇲🇱🇲🇲🇲🇳🇲🇴🇲🇵🇲🇷🇲🇸🇲🇹🇲🇺🇲🇻🇲🇼🇲🇽🇲🇾🇲🇿🇳🇦🇳🇪🇳🇫🇳🇬🇳🇮🇳🇱🇳🇴🇳🇵🇳🇷🇳🇺🇳🇿🇴🇲🇵🇦🇵🇪🇵🇫🇵🇬🇵🇭🇵🇰🇵🇱🇵🇳🇵🇷🇵🇸🇵🇹🇵🇼🇵🇾🇶🇦🇷🇴🇷🇸🇷🇺🇷🇼🇸🇦🇸🇧🇸🇨🇸🇩🇸🇪🇸🇬🇸🇮🇸🇰🇸🇱🇸🇲🇸🇳🇸🇴🇸🇷🇸🇸🇸🇹🇸🇻🇸🇽🇸🇾🇸🇿🇹🇨🇹🇩🇹🇬🇹🇭🇹🇯🇹🇰🇹🇱🇹🇲🇹🇳🇹🇴🇹🇷🇹🇹🇹🇻🇹🇼🇹🇿🇺🇦🇺🇬🇺🇸🇺🇾🇺🇿🇻🇦🇻🇨🇻🇪🇻🇬🇻🇮🇻🇳🇻🇺🇼🇸🇾🇪🇿🇦🇿🇲🇿🇼"
    }
    const foundType = ['face', 'facecat', 'hand', 'clock', 'cloud', 'animal', 'month', 'number', 'countryflag', 'all'];
    let result = '';
    type = type.toLowerCase();
    
    if(typeof type === 'undefined') {
      return Error('Enter the type of emote that will be generated');
    }
    
    if (length <= 0) {
      return Error('Invalid character length (0)');
    }
    
    if(!foundType.includes(type)) {
      return Error('Type emote ('+ type +') not found \n\nList of type emote\n ['+ foundType +']');
    }
    
    if(type == 'face') {
      for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * Emote.face.length);
        result += Emote.face.charAt(randomIndex);
      }
    }
    
    if(type == 'facecat') {
      for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * Emote.facecat.length);
        result += Emote.facecat.charAt(randomIndex);
      }
    }
    
    if(type == 'hand') {
      for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * Emote.hand.length);
        result += Emote.hand.charAt(randomIndex);
      }
    }
    
    if(type == 'clock') {
      for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * Emote.clock.length);
        result += Emote.clock.charAt(randomIndex);
      }
    }
    
    if(type == 'cloud') {
      for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * Emote.cloud.length);
        result += Emote.cloud.charAt(randomIndex);
      }
    }
    
    if(type == 'animal') {
      for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * Emote.animal.length);
        result += Emote.animal.charAt(randomIndex);
      }
    }
    
    if(type == 'month') {
      for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * Emote.month.length);
        result += Emote.month.charAt(randomIndex);
      }
    }
    
    if(type == 'number') {
      for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * Emote.number.length);
        result += Emote.number.charAt(randomIndex);
      }
    }
    
    if(type == 'countryflag') {
      for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * Emote.countryflag.length);
        result += Emote.countryflag.charAt(randomIndex);
      }
    }
    
    if(type == 'all') {
      for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * Emote.all.length);
        result += Emote.all.charAt(randomIndex);
      }
    }
    
    return result;
  }
  
  const gerandchars = {
    randStr,
    randNum,
    randStrNum,
    randPasswd,
    randBool,
    randColor,
    randEmote
  }
  
  return gerandchars;
})();