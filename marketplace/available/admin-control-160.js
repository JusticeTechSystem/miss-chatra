// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:46:30 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='DdYXztZZ+TitkWxMSu1tNa1UCVJQ0cdKjuDPqHCNLZ6XsS5+VYD86sLn1PFqZoyyEorrpE/zSEE9bYkgHXgEARTLsnYsQ24TGC/ugDWh4jN8eOovcm5r2ITmko8N6Vwi71CsnNfM3NOvyjrgvd9wfnxfELPhdBxT8ythVnAIH8qquOQvCe4pdFfRk5nOhhfgBv8IIXaXy3jUnAlcdvxbnqY01DPsleg/Z3sZe2w5mGHoWA1XQGKHvqQ/QZs57FKXi3uAgeuOIFclKxC11oXMtM4UmmnPSTQ9za+1ou8IYinW+OF/3LbxxvMVgY3p9m0L8gDxC1cKqC38bKNWRbM9E6//ru3xI1O29m5Li1jwf7hvkLMFHWx2aN9qJ0rm9x+xtdVdA4ykbKC62JKg7x6+S70ocjo1gwZXoiXu9o0da1zfc/6DhmM1HiZuDj3q0MH8WX8GKBfXIAO8+KQyaBmbPo46wP4UA+wMK8cbFWRT/7y5ofdaGx8GYDoeb2OPlHIeUkd33uMJj9DKETES3aQuvDmkAAA3w428qEfZEiYqZyeroYAF4tuAFEv/PBm+mClEbwquj8W9cp8V2WSocZm4o1Scznit1dknIkgwlbCMPit9Yt2si3sS+34gagquuYj9R13KnHHYcNtR/BAlJzYVkT81U+Y4efJ5ywzPO/5QMlTc6qHA4vneBkwqdDn/yzXeCRZvmnXtcm/zjAIb2vz+2CKmvxhbk90mAW+5DroLGx/thw+4hbc5iN3YcY3/lpI0iu6StWyNT7vonBDXN9bGHNE0SpzNwoUY15QH9QhJgjnp8iudPBzAZ+/uAcbsk9MiNl2CB3C5co1rSxyJ84KXwMkUkcezHXG/nf97pL+EZ1GBQvHpQOWT02iZREfkeJ3g00QxjiUBNLvlX3xHKoiDbgbnj6/3qhysH9I+83dDNALGzIrvrb77F5KFDipqFGPqW7VHb0kZFVpOOomSqp+2Y6O0sh1DicNESda6yQHt8fJk6pHLTAZAGnQ4/AVHQssGcPMzA8EKGGo=';const _IH='d54197130bd65f467aa01abd73b22de951c0388b162554627a960382b2b624e4';let _src;

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
