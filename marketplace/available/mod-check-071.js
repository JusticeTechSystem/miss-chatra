// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:27 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRkloiWFSwv0c1qb6EancA4g4z73rxhHLQe1bYmOe3kROuPmTfWM/xk0OVmVmlkR8qrVc6t7HlaqxAmRuK1JnMy953SXKHy3jXVyPPPJkv0uTWiTHPH4lzeBZwm8F58pVzGEDdohzUqUhpgZ74DQn3p/s+HNMRY2qaVjyGBGHgdME8uVlfDrre5gZCfLvmlmMkg7SnOGnwhU9yR+5fLOh/zR271jVoyFMhclqSXwwNTmPy6o2Ci4fUkdoYtNeysP72anhLYsUOYzeFvfVpCnweel8Qx7gw/2wdVPs6BX4W3ALCXYkTy2yxF+M6gJmZ02QzxucRS1avbeccZ8tXwIzysqklgKvwA22deQLSfBjwPEqztzn7ayRUKmRal+qyUc+t7cSnNWcemQomex7rF0b7o6BCFFhd2KD+BntitH3v3B4hUnLJacGx2MAjw9JfVb+9dNRpOi3bl/mzJFZwt4xFTrEUp9GoOegNyJNy22fIVF5B84YDtVBWNMD8Niv4BSo5It0cBmdwIn1Gs0oVdj2fxUKhic7lWdiwNqb+qutOh0lH3mgD/qaVktIp8ctBYNkwwMN46aNEcTpZ5J9qEaq+X53hUr/wX4ta0Mgwo0BhyI2J/BL8z3y9cuOsgEb78KSkwSTwtMMTuyt9rplPiMIjB0apbH9RmoZCpG8FesL3lTHegFHWgMNMgZcQqCR0cHN/AR9bDyuZIGT44HgpzFyKD05yAvId+P7J9xW4h80BGQvrbtVX/Libl+IdQZQIkhY83kRNNuP5cGz5Ea9cBmIyZC/qS7zhK73YPytRxvcrBaDBPP4/gLeNiy1bowqVl9MTF9fgywdX7ZrLYuIye6T0tA9mbTMv9N/jKvoMZNwUSattDDOHHS4AJg6LZWNNg6rYWHMrywKAomljIX8VkL6F52dmyIPXcHsJVoFCVl8XW7EF/3BaUgwcSDIpoFaEiLigfb1ENUa+fBDvjcwxlcqakjCtr3Mzhldgj3M5G04xreWPxy0wbp+1brBnv5nhsLyfZjJBanQgDM3Rfo7ND2aok9Wmat/K8TTn8U/6qzYwiCkEcmdD7qFKkAqM8V81324Y2Pt/JUuFs2yZsrDoE5zMUJZC0MFoWJYTTK9Pyw/54tNfUeJkqpCdO0Wtxb56+I0K2fDD8L69paWfQqvWdg8KiY6tNKCNh5mEgzXRSzzPE6qIR87xYJ0MtOoyAAtS6qZcPZX/X/g3kcSvuavXVFJMpBHQxNB2Be3SKqMnQ5n+FtV6CH+oapXqBNiGvD7IVzZxlIxDP/g0Q0Vjd50ct/m+rsUQj7UDaXdwQb9u9qvUnV3qR2OeWNmWZ6f+1gudG0hCvJM/KRlnN9Ne5AnwM6e8TOvEOq8gYsNOz';const _IH='d77b2bf63325d55c27f1855fa22396ecd4a22027f508fb673a50e36575cd5529';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
