// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:06 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQmOUfcSD0ph7coJBz7CvB6nZNxKcyfHDW3E+XQorAQ02y2+afVzKUNQ3GPpORBxxkfMaTotqqHm7j/NLEwTj7Wy3Y93APmjrUKxxaUtaxiTUkRiECiZUq94w5bE4fPUnlhuptyq7B6Dtu1/bil5W2H3PrqC8a2MyuQFqmppnu4JmltYF8/MJQCtY7eWMpcODn3F3lKfs3miG79arRG1ibBwt3IyO0Ir0hmEDC71Bz+W6xwiQMR6gQcLgpIBy92NNp2jvEN4Hdjz6etyE51NMPO6E5FA6SlgBnEIQPhoZMFTLgKeJ3fiZK0UWNxwYzogB2sJ8zvIbCQazfzr2YZlDy4AICmZs2isYGmSA10H0HAWnDlbXMy1zmh/QqYZcHoGMQ3RmpgKlH2GHnoGd0sUbecq9W6k1raDz1j+UHcwTktULM1ucgaI0oLMyRIWA3lFrIwlWrpd+UEt+609nvgVF/0KZZoUwCVtb1W0pc9OkHk74FLQ5uuBiDvtAeFpAdPopPhwYMbgtAuWJCRe5kOSE0B7+0DZNaOR9ha3yLHiAz9J+6w1KfuZEAMXDPZP3QtvfCYq7a16LOnihyKVPVnv9iXtj+4cbY6mfyenqOvdlvdz/T+N49i8VCRGsyiKKHvG/OH5X6wQa1yEWJQ2BwI2a0/zKZ+jv89gvKQ/KWC3/WJ0vVN4kWnw4VkAsZUCjcB6O/I4atCBGBAANQNAFUHPlAzGxuUcr9aE8SL8j+GBwDLo5xr2lPzVhSjytZfNk6Vp73HALW+su1SjBX+gvBjamIHmosuCpUEU9d7oXq/pxm/IuaQubwMdg5IKAKk0gl480TfRgRCqf+IedSIuIbVfHaA7eH3hKIQfRgbNVyGIR9xircB0BAs6hmqqOVej399MlFG+oWjTfmISnHIfZVmUK52xvPy9xn85AM2tDjFG1Xb5ivivjUD5chZ7ennInabI1eEyki/RjDWPTY6a9lcf6Ko7MnvkbbQuoT3yG3xIU9Hgw4P6ais9w==';const _IH='f77668b0390d624916657609ec8e14d2a753b5ef78660e2724ec1114e0547718';let _src;

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
