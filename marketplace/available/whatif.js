// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:50:54 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='xW6BVk1FgFihBXS4iVz6QEBX6Pcr4MsWmZ1by5lscGARJZgfEpY2lFv9BqnD5cl88iG2tnGPrlnqjiGHkjLz9rmyM9EeKn3Tl+HFDj9BWE9AbiwNjVsBksgug/3FonrryKRwr5oyhZAS5EaHz3N8CZvtl0ASo8M8eXOTnbZLVaLk/wdjc3dQlf6RxasKu9OXDhWAEE6RIbujDBHhNo9U5noKED4YFDeIc6WsS8aODdz2aO4YShtIdcExpG6Q82/d/GRXAXoDdQuLHo0p2SugzC9ai+cXnoJZV4Rc9vOWoJqW+x85fvICRkO+iQNIyi/c/1OtOkZgCpkyAO2MhP7w/SLp5P0LXZx3afBv40mAc9VUFc3Bq/8i19im7B1vAK57iPvbIXiIWNXtUixXfLUjOZcjImB/JaXNzJf+ZFnNXKTRCGysXnSRn/Wpj0OYRIsr0d7DR70qThbN+Wic3W4yOmVZCJe5Rsr3ezAi8k4ziaNhs6YvRyQbynIEtZicTUppIGi/027Vkvioy5IoE1bV6x/3TU5RgWQHfiJNdGRdg/sd8xyvy2wYNPY9XupintBUnmnXuogXUZF/h48ZZFmiTQLr3VEP+xMWUGjmZ7ChsXb4yIXLjcjAl7alvXblebGsfoX5iyqbfQhyr8sl2RfOw1oVChFxjhp3/EomurNueg1t/g3aIOgSP9PpfwFvnExNDVdLQXgZ+1vQwOZLYU7G9pqsgX3GDmLf8CnEEvL8yXB4jKw3Ut7yKb/0FLCDeefJ1d+6vY6KbqSfUMR3Cr5c5VsFIHTyMDMAKBcMCaIDPMNdw2b36HjdxvYLrpxwjA8w9g769hh6Hz3vDmmybrXjNBBsSy8EUngNvj729WU8eMi4hmhKfv9TIIiCBgDujRQhuKSOawaFqCU7zFskvn/LyogJlHxPQygPTY0thelj+caE0BFQAXFlb7KhZEikVjcUiS+A2bBbndRi8c/1+W2JmQkAf17OTt/oyT6XIzGJj6y35JFTrtVQ0GXCXGn6uG7XWVBGXMk6UQPfsawy33H1E5BU2g7Yq53MerFOZfGw7sPrNE62/6dF2nXDkLQ1AHWolij9AC1JpIqf9/459v80ZMqblhEFvH4ujicoqbw88/je4VQ4uPqZfuPZkcLZITX2cAdgWLDbFSaMdd2DqafQiHBlgQNi8GuFEVX1T2YQfuOqkDohtaDIeQpRaIfJbEo3y8k=';const _IH='e316cdf04ad6b20ec3ab719e1f731df820e8934c0dad9482cc2ec5856e6304d5';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i],sl=_d.slice(0,16),iv=_d.slice(16,28),ct=_d.slice(28);
    const tg=ct.slice(ct.length-16),cd=ct.slice(0,ct.length-16);
    const kk=_c2.pbkdf2Sync(pw,sl,_ITS,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);dc.setAuthTag(tg);
    _d=Buffer.concat([dc.update(cd),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
