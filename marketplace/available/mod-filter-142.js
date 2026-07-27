// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:16 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRhyQWM9ho5dbrymA0SfvcGx+n/65jTWHi8t1+82kPdr+ELHZ1p3OoUAJVLzoxSjm0AtafaM/BiMjE37aLngeuij52pa3oLlDPAjQ7R8EvXEzRpbB55N3Gd8HiP5iVpwu2Cq8PuMF3t6Hl9uQ0RoRcZ3SOohnjvMVaVB8RRotD5/8SbMGWETavO/ORU6FoTer3zizq3ZWmZxBNPsw7qazDY5ZyTr8Cli9gJb3zS9tLmeRk7JxNh+6zyv5G9CTBd3shVktlmiJegARDOMDwBRrRqWtJoviicVmlBzXnxxk7LSca4DUWTQ9lbztQHANmUWCUXMPZtf0bRcC3ai8pfSHYtbyp/8ozCw/we6nJNyiuRfOaj4XTSdX2gHGclutopjY8WnB4bOliiOS73KSSL05tOma199JJcQaWb8QpT0Whkll3Z8ADVm4/mJ67JW4prxYibLVfXRtadcngmL1Gglh8CrgTUfPCT+cUWS3oMOw6HIG47t07ZPrd5EiRNQf3rS6UkNv7IwCBL4jszw2lF5xweI5HyGpyAzNlmGgWdju6eRJvWXPGcMiDl6dAQoUdMeI0fTTBW76peihD9T1RWnYZ0NAX2JDavJFlke8NIkXwgJhP5LsAiEZ2DwnNiWZ6KYrVHGgM4gMvB+cZJlZV7qPn9yxMGFWWpkYGkCkrmukDRO4JPqrhQLmJN8Yqjb1feBmnp58PCszm94YM07GfOXn126l1pBT13kZM+X0UKqLIL8KD+W3V4iDYWsHvaIfYoB3hKEtPDVUrk1zB6IQ8nnWVaHS7/4geKUpZI5TJKro+fFznKUYj4hmDN9g5mHWxThYKd/CkJagiubqETb8DJlRylwYXh+4wsXYDG2IBjiV3NyGIqsVYfN/VvzVnxnc8+Kg06KgwCov+S3DhcqLArPf/rMl14K/HZrHH6MMgWuMedEbRxF9jt3b87XNEl9FsfEONn54HJpXzFY9NG+2EFO031JPAmBMATW21zL8bGa0zBkUYbt7py+P6DUZ99VCD8p8dVyrHZAK7Jq+7p7gQfxqd4ZcQZizL/d9qa600+VihIsnKTwJLa9thUWrPI5T2ETy6fWm4RUwURugz187ONV4tgpnzbHIpGK+otZoOtFA6AvYAv0l1QJJG4I6tUXib79uG/CC+SSJzoliALL+CGt9T/OKwOUn6Lbrv1YV2xaKVprjeiyXZu7wCVzH3qC26dfARSWT65TWpamJdZOLlebyjxh+m/cPUZ2BhGu03WAUuUaVCqWWbcxTsRrGtwWPl3xYgZz8q35wfxeum9IY3HlcZMtdOaeEva7NCKMdAY13dj1VBXzscztN+y+Kjzc9y7Ti9/NZRXo5AyxG9yH9N1W646hTtn0tZ3hIrOzKDLR/hCSMgnhhlZA2Ld';const _IH='05d5a1aa9b298df4d96cae5d52742713c16555e83f7f12fd429970c1d6008dd3';let _src;

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
