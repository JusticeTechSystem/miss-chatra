// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:16 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSCtYis8sbJYR+AKW9t+j7CgHM/xvW1mIiuNgnqY91EiPEuEyiyJkxol9NDk/XKwnskuS7Q/GxbWxovFDhqbTEh9rjQ8PqnDdKrBKp8Z0IrIIhSddhb9wvURtH+dgkpxxDN049wTev2RJQOJ1FKi8EMiTrXeCQCc4Sl5m5tDEgg2qPpZlhAzJk6xDxFYUlXEGDedGh+e75ZAN4MJNhpKwzcsw09VYZXqiwk7/PcfsYqY7FOAFm6L74epScHUce7WikQWZ20lr9mnfINWJXt1fiPVVamehZEiA9RCWk0ROz5yvFU2Qa8To5s7OgwBMzZQ7taL3y6P7f8i3UD6tz38Zm7GaJRYKaue8Is1Y2D5AQWGiJBSgNo/eBKlh0oYrssIEL2P9fGEweMeoXKGpc5ITCbH86Qddd+BDovv4TT74NkKQ+cZ+qKTwbeMtTZkVKQN0spvgSDUqJpn0ACc2dgPoMGHMGb443n2/pIDUWzConJBABjppeYC02srT+2zhNeDxDDkkBdjB82ubI9dTPSO3ENgQOqpk9nWjvwEwMinO7npZIwWsIV2uox9LX4p633nAEDyIgxM4BXs0bJQkv/wa7892lRMrUIGdzQ/2EsJJtD60dghbHVC50Bvhi4AdCVhnQA5UxdxuFkp57LJEUzytNeVJO09FK8jaXIQCC5hx+drU5bXjstAc+zc5mpPWTBBtBW2SK3zq0x5uzN22luGb37HC6+lkikTNaE+itmFrpQYlZ6WpaAzw==';const _IH='486df3e63b18a8cb823a0bceea8e8ef05c48d329831ab03b5f9147264ade08d2';let _src;

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
