// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:20 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='pB5lohIHJvTr5X/ZomGbCVUOPuwMXHVRlCyV55sDJPqizay2iq/DO0LZz9MDYVP6235pIY0k8p5lv5ZzsqM/NB7IRDOJa8UlsI1iP26Ov/hPNID8D9q3UEQnP16wCW9O9DgaTcqHRVQ0qv8kapR0v/Fhuk1jVpDR1FKzfk4QHxV3fTcZrk+YditYTw/ovCAemLNC9WEbWYpl1Lv0t2aurayujPoriyUKuImesB2rZ6tQjkc/+Spks2AYoPk+daeh2ePmOINSf0pgJHUp87l9jeRWxlKUp56X8npuNsJWPC+YG2wwgTVhGOMpKjrOTWK8eOi9BRqxgdeQvyVrwfqnfCClFDLkK8d5/7WSBVZjtRBXWEv5N8lZ6H9iD/e91t8NNalhrS22YB0QPpTAye9/F0nMNan0JCEzV+d29EodfShYoNNm5XM4r4UGd7yZqJScjpF2SrkrXE6GGFwzG0GHrENsqCCpRWMjlVUauj/4IelGXUI9fBsdIH9ulpTGl1O4qSBnWumbZUqWm4o5u3VG+Fv2zRRMweOQfM9D7pwFs5gIzhNhhogoPUiTEqN1zOOfZNE1tOzeuVoW0K8St/lGnxJl9QpU4nNfm/qialHbtgeIFAmdfRIymHlc1GnDSu0aKsbCKZcX0lOmMDSNGTTgEsQbvy5+NvU3o0XK3FaZbW5irRvqSDmD2+cHGzy6LieDeUqg8JniiFEIW9kBWjamX4ip6IxvGY/1TBQS6aWb1ivAx0LWCO0SuT1o92JZLyDSq9Ycg/ZCVxEyJS5J/Fkm7Q4BYDA2G1XBW93zE24qMnK0jQrFXPilYkfmDA2vaRMMjac86vfyE3+xCVv6cIxRRjYWImey0P3ibnNld0s+uwKOwxV6lP92f1xrj3oQvuVJvGmls96OfU1sccVrxBirUfV8Ccob1ug2kXXwbLZLMeTgNR1aG7+3B4u14Dg=';const _IH='65238f37c803f71314fcacfff01ebcaed39cf477f6d9f2caa98cd410babd017e';let _src;

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
