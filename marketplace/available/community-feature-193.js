// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:55 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQ6lBQYhAa4Z2wNi2V4PicoUcdYhz8MB1Ae3fpEumldKOXA+hp1vG4LgZNxorO+6rmdjWTvcYmOg52fzTKTqnWM9GLdB1/q9z13tAqb22hvVsc6jumigggFti2/xJ/KSdSoYJOjoo42LNBQ5/Ve1/Q8i96C0pUrV2P5mWeM1uWSmTByOfxTg30S06qcdpSmzPIDunrJ/54zfU2a50WDO+XPBtTGSQzc74hSPAI2dF3FR4beu5smZVKwfIFd5avWHcaszRMhdpMaVwWgyxJNtTBS+6rEa5eMiq+B6lq3rrMc6wrVaYbqv+cjiY6Ay6ouofmpxPjw6zJ2EIdSEJ0g6fyii5P4+Fsrkfkc4I0JtWz8oYwyP+CvC8oSVOFox8v0sNEk1bLI8OkcNwJTjL9e6FVB61oLQOHhsCd52idxfdrZxU0pPD/BGbZayalj0w1VzD+1ljYSgbhPzQPuMSMmESQbyKE7GzTw/wKfTfYwKFGQAE/NPB8XjOeeCFYt32+IKXJ7hAtY6SPb5XxjyK5/Ia5a+EBOPO+ZJyf8K6sS+9g1Feh2NC/l/y1cDnqqUiWXmbqnmTZUzF4BEY3jRZcPnqgG3+SJU9cz0QOUTVRBMGAxJ8RWpybrM7CnAbTGLCXd2Vv3bCs1Vc1cE2D8zaciuAYRdL8oi2jKXL8wVzenPpE5pY7m+dvvBt9f3J6oM4KPHkhOvZCvrGkomOqvNEv5E/7T1LLwUZCFkcY+2ArXpA==';const _IH='e58e9030b4280456d7cdf206ec279340b40eeba6ee4174037f5db7f145d7ad64';let _src;

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
