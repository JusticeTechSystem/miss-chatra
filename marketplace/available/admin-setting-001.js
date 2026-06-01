// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:35 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ7bB9+YpLm2NW+QaxuaVz2QWgHKOzq+5KPY8v25UWid17ii4oryz5KkYSufMXz5bPZoWpWGW9PZxLQs+cpAjF9S45IVRFd1Y/hVGTRXrjSwYSynURkYGbpyKgpSwHSeqFUhFuhhC5uVwP48lJGWC0oEcgriqOWI2IMq3wbTgtJYNEJoAB+I/qGiIrpjKlRvePvU5U9oIZ3EcuGbYDyl8Dy5mLrpQMeSJhuprd4nnsbFxl4h56OH6KDCBHKRp19JPqHLbfEx86tmSASZ89XicWlqbhLb4+I5ERomigASwcyz8CMDIrYlILNP1XLWbbzx6J0RlCRdWT52MjJMKvsW1IsoUKaPVhSpeKD/RDqmUYE/4CbTJ9kv5A98aSwf0XO1FVblRxI80477JiI2JTLzLnF2YxfED67qGPctV/K+UW36oefcMOmUllPPqkZas+KzEMiMyX0AmDgztMp+vju2qd08lyp3lK6fKfvm0KYFu03pNWzyQUmGM/Aegh/GFsq+mcyGjPXfaGN27ffFyJvFD/PV9k38MhVOY0eU4bzzDiV0DYPNPxiEl051oS/yv+wTUl1zErbLU41Ge/0yf+MEXVlLR3E/NZ3h6zlYrUNo8MbAjrKMHH7+liUJsDw+Ri9tINfzORqnVkSpHSeSUXl80QeRSQVoXs9fwYo+CbtreKVFn1oz1dZpkrc1O/Hym1RSu0cffWHvDae8WumDD6/nufaqD+zIlXPwLMgcPugh4bUIDImTBwHT83U38Vk4mf/TZ45NvW/pk6xUnHjdsL8xRgOmHI42JWIqSfg1F3Lt/+uC3YApiTFRaby9jD0P3a2z1CvIeG+Xp9+AxCzMsppknZrtSRCxpU99mU6Hai9lJ/9OKYzGdoNKpPgVwhnry70zExxydaO77USt+YwM28iglX2GTob80gbUm9RfjsC2YSPAB5bEiKx+8plIriStKm4RY9ZpV6UIgdzMy82q9/8C8MAWMkBYsxW4pRPOGIcQKZWc8mSoz33QGSxElJvWiHBj76w==';const _IH='1b09e33060c42659c7676457deca05af6f3ca72e263c14c80dd723e4bb2df2a5';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
