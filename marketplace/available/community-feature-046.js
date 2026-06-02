// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:57 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='33+BwCkz9IEJlUoX8y1Zfz6VwH+8tT3s1qKLL/Tcw0qKnxiVtIxqPacbOH5XV0fNlujMTIMtE15JJhEp4YTcwftW3pEt69EDuk12VJaIVtWIBLCQnY7NA0+9/ULYI78lj1cviHcCQesgppHRZViiBs7Mq2SWDaCyGYLwSzp4Ta9ZAYjsnjToCP+c8yb5A+3sTcgd1GYKytBMes/oepy1Co1hDEWziQvcXSPdh8sPw0B5Dg5jI+jVPJQfxTGTPN+Zio48a4es/vCaB2I+8ibokzRorv/itavK4JGjl6bimL5K4fNfuCsJ9OO7dpdnjVePSQdpJOnjFsgv97uugndoC72zfpvddUJVNXhc3DOjAdM0FgH2CStMyC8S19EfwhXt7YCfGkUFb9lFRp+NB6DNCwEl+t960fcqzF7xXg7QA6KEFqpAqWc6gCDrsCVoW4LQfTh9U8xEXymN8WOLY2WCmNMBMf7vwzrIp2QOLy5dRHizpn4hPoJGEryUPsyzAPvqJL//AFyApmOW0iIJhpFX0ulmVSiL89VhNr7r2VObIpeoQsQQ/ZUAHs8k/1EW8DAtWXw+yiXG7i9XcYSKT/75EV6YjjDeS9pPw+L5NlTUDiytadoh/2pjfEzVxtibejM308RLEatby7F1g72dC0N5aCcNCJpZ6p2DExxohlHkz5H5ZtVuw1j1wJXoNFXc1XM+ONoOJI4Dz4Da8EU+1W0IIohBobM=';const _IH='70eb5226527a71a17340405765524048779181f079f1ed828a2ada7664ef06de';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=50000;
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
