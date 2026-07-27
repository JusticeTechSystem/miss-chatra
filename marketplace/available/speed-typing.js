// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:27 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjR8Fqhb8xb86FZ8DI/J7TRzkZ/Ch+aGXiGAkDPgdYnMNmnSTVsw2pSoi9ukQ21Rg8jSQAYyar6qbR+GKowTw/Jaj1Ze66TzHCmHJq88Mh/6+NtoG+ukGU6DQb39Q7W1kIES0hHoiZdSJoIoE1CQ5kCfaxzdBm22bLiZTlarjxXNwjqXksaxe/Jr47LnxAsjMKICeuScGhRv543UBh+q6UMsL1scgXhl+ji2Kiv6XDla9YO83nX/D22PS0aBM4LZu3W9fjo/8TLQmXrmHfI2R4AweCb7blPR/tytdO1qDi2RzM4d6nK/GoIR/QekFmruWdNApXqgBz/K0hcgzDtIz0PjpEDd/Ej2N2YJYCEMiXr+itj1VB7rzE1mrU65fdTuU6VyrY7/MjIPkJfxmq9uqzmRBHTc11ruigaw2TU6s7H2SYQAZ0NrBKFDF3Bl6jc0RwAymLnCRzf6J9XSQ/vznx/tdBx9tAg0iQ==';const _IH='b5d795c22877ea77073116364dfd631aacd4b0b9a191e5b273131e5d3953433f';let _src;

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
