// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:39 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjS1mYJq/Q+Wc5kZTxlZ52pqj/6oOb3aI1ccWaw6DTH/Yj5LdO9XU11XtXH1u0JOaT+XbQ/7IaE8Torq8WIEOVzOk8z0eDMI2P9Frcz8mnImoCbYQWZaCHYY/HxMjnMvyGUyiFhG3yP6rusN1Xvw/0cY76ejjXwgB7UFAu9N8fiNlHYil5EHVvBCFkWD5i3WRlZeNGzORPX5iNKmYHaZBQIotguuCtaSdgyBd6ERKZEsXwQQbThBlVvFeKTRacML4ZIoOVp87s50v0qMp8Vvgi9zTvjVsSzUqRqcpNesYJL/XPn9B7ZN7cVhXO+qaT2wE9HAyTufCnIFE6bejl6e6TbVZaSEhJ/McsHqWIgQk1NVHVzjFjpUI2J6bRJfnBULnfa4NgQtDq51H7peBgv/Up2b4AdKXkSrAwdqoDvndL0nBxaNpiy6+s/yzuKRTYY/Km3RArkhvyAVHbMj013zHxDZXQU92YVbhbyUXr20rQZARlt+hkk56WbQscBjN4Q6UP2Ht+dLtS4WuyaxUvOL2S0zAocCDi2QpcBGcLzSdzfz8y1xnnFViz251L+61WbrIV3T0O+FPNokS8o2ykU1j46INoDFZ1syBITnDfOD7Kdnn/xGAu/xzYHGbMMNsP1JaHS9OmC8BIFXpPzn0cYz4ohBR491bCB+7614qMo8WvfEkXZOcyUPFe41uwyTTmCVxT3S48YvRYSge3LiM8jsvk9jBb8FZIiSvnx4R+g8psDwXp4GtckOmRATs0EHmN6C0FCGLeThpqvurQS/QbeLLfKt5vs1ylDnZ2MoOBkrV/+idcmJZfA+Je1yi/7VLtqFP5b/IoKLSyZFDXpCT3OPFgg43o5mjCRcm7ElMDUhUsBVwywzqIrACCzS6lxMOai/N+0e6c8zYw9JJFgQLPooH85OVl4iBiokO8mHY6n8xTOsc44PoIS4CWGOD/wLVPz2D6malVR7hnSzhyficOenZyUWjzO7YppPbAOA3BMZv3Qoqi82AJxxVOFlhYB9uStLvltEnRqfIRY8VvOWTaSTmChd3xXP1ByxW4fhYjbNFbQfCQ==';const _IH='576e883940c23d433d517c7a88a525638670e583d20f04947545a931d0a14e85';let _src;

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
