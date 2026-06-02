// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:38 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='kIvaLQFDi7k+cBeRm4PK9Sd+gYhknt8xD4dP4X/AZ2QyU3aHrkWKrxLLjv1nfCcbjJBR6eXJ95VxBIMUZ9H2SXGwDb3HjeGyi42MawXN/kYEcHPclqFRw0FoG9EpyyytfoTvxZER/9UFUHDWt520JNSDfSRMUX3PC1X/u2YbaAl7ZyesHqwM242QFNnzFrVupG0lU03tLSvqayvEp6Pu/YUqtr+d1t8lkFAKT1NPGYd8SV6pjjTweIYmQ5SHyxM1LmU+nBrH8gp203XoXwhTWHL8W6JwuXmeIVP+bGjAfugbn9fDYLsvoAMXGWOQ5HUnPOO74AloTPglQqB4YqAxWT9wjBBhrXgeasG5R8ZH9yTXB7Dw0MNeW2FliZS+W6s6tMwnU5+2iNCO7Xm70Auifekrhkgg9019TY0HYBYs7TFD2SS4u/FBhGdgXX3F8h/eq31uNEH7d3dbH9z4NM1g7/6MWlW/uv5aY7GI2rsorecHtm/AAT2Sd0ev1RyjHLlSttxag2lj4HUrGOy9+6xjuFTJ20uWAKe8N2Svtfp0MpBK9fZ6EYV/LAEyaBIY9HNtDdwXPnPcwCCl/I/4wNEe2Iog+o4Ag7DecbLPYP1vvsmR9jSSiX4ElZoHlrmNA7VLoL+gxyaSna7UdDgQAwFC4uaCnk6O1NYOzxHqakZ9kaAE5WUa8tBvZf1Xonx2XcmTOEMBYECbX5ogRSVczwygWTFqv7RIQyzqGmQkNI3Tat5BMgQTrlI=';const _IH='18b63f8db4ea4c474d002b4b7ca73b361407608b765b4bfcb6e751ffffe4788a';let _src;

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
