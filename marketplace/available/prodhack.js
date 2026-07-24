// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:36 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTv1XSZuhNW9G/jnKszvwYesKQ6E1Mrj++mRI9rPbQVI0nhbmudFoeio2FgdyThDK9V/1Gb4ejqvePRTH2rAYEUWE/BMmvBtZOImvSVY4LJD8C/cu9U/ywoR4aDISq5Q6v4VGZDRdWfa5mtgTSA9FoBp1FFmsE6Juveh4JMWkdQvm+TBJpir7dSI5KF2e2378obZxfJvv5rm0H7p28y3fIjpsommftTSnSyEMFWXFKTPRxsZ2YTdbODKLF/YjrnC9U4Eovzqa3rS0tfKiaI9W9DGldVF++THip+M/XR1upHedXrcxhiXL7tZYu+iXd+HY/wzMYyJfG/8XeeEsROhW8qPXR1ull/xLuzomG3WwzX74tQYMlR9ITmqgcmInv3pQ8ENGW+f4PoWJkCnx6ZV/ZpcHtyq6AEofBnt8PpjCqtLA7yuc2la9r+nqszu4saPI1wyb9jQAFnStkc/h6Ap6wQQzmlDGcF31Xig76oFzxNKarlE/Qc+QykZEpCS9VR6tKiFSAQ8MvwdCtJe1OGEfiI0/FCL7VZ+yRDkbSqnR5SdcIZEFXiiTVDPlDIMRgWa2C67QzO53VDqpFZgIrjuoEMBliBS1OF7GHNzzmDc8XhOIAhgSf672qoK/2NHLXKOI2YkCd7qYfGypHz1vUSo7DafW6b+7bxSqn14IqF0H6EwZ11JXQqq0outGGSOYsUupq069Df/w1FEf0kuOm5M2U9zCdTXIG1YGtbzL4NAj3UP1E6dh7MTxzinavv0Jp79Chie5CMCJjFsyAww5Y2bEji8vdQYxd0aYpI3HU3ycUI+b1YI22kFDB0FQb+g4uw9S/0aCSQYk8x20fvmK97dPzcD8iS4qRU4SapzlT+itWLtgJWPuV51DGiHjn8VcQTg2JH1e3vvsjZ/jXefOvc/FH4giT1f21gKDQGy7W9EVqyYYFfZKEZlcpKFO4id+7/eK2pYq/VyPocxdfwCvwLqAlbCE59In+wPbG+zqQS9qLsWIfhBpLwcNakBd4jnsmKDyAt290prJ/X4Ki6ZncKW98wghqL/Mfn5edRiKrVqN9jEl37jlas/XNJlf377Jgjby6lMK0yoOmeThChl+KApXdv5umYx7Xh+p+EvT99ymJ5EpWaITqLCeLeq+ddK4XThdiEPJz3sMVF0+8I6NpKHnBUlFGE5VNW5anrtNgBEsvobUyTZCveJQ01TA05S/VFZ19T/mB+Tg==';const _IH='3c46f15e540eae4fd196ea3821e1c6cb822a4947c6a9092dd6de202fb9f80d2a';let _src;

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
