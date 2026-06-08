// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:28 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='lnRD3DA3PqOe4l/Z/dSbbWXg3JU/7qoX/Nd4HdmZtcOZ5jpIOpP/2hkg1KmVukUqNwSuqR/8L72khMOM14Ta3dN84SGKhKV2Jc2/jpZmxojnMw2ha2B4US1P1y7VCnZkgpdAjKlMwxUzAFtFXp6voyD3pb+993QKFwTzQviw33Y6R98nP8ss8FWd0m7x71E2iahiqccBRfuYKRdXZHFM3ei8GDSn6TTSiIVXnUDFnvmbxIuocyx+89eTdQKdXwNTnLuicFKA3q6fPWR/9CBaSbmR5m6UlYFZO/cYQcWficZdF05ZZVLg//3U5BgDDzANIUZCy4FJf6ERUovbjIGoxK3zREpJfYRco2FKfs+ONQITlirJjRjeHlBUN8WriDh4RdFDNXZ/b9eKhN+n3iYbWeHPvfyN7fjJQbMs1fO9H1cza7rdzvYnB5upXtT4c3mVRk/iej9UlM81y7JQr4LJJxMGXzYkdY/if5A6+l7nHx9lI+BKFZ3qup4DhgwsH3Tesr/CQXlzGLY/7NtI4XRVXulnxym9IZiu1hK4JsdFdKHCHjZ+HRLgo2r40AtUZ1m0ng4f7yFJMPRZXjejZU1AeEELdIknoS5DaHtyVK1t9nRech2LS7eANXUe6Jw9EjLEtdpaVJGDX3bvCKQp4fCi/vQ7E+HwTCueAVwvaIG0q3PT8eijyrPAvbHUlma2N9Mdsvke6uf8G2BKV/W1w+oiu3eHVnxswp02Vj1B';const _IH='c50a85f5b09d2b0909de22cf1ec8eee091ae7292385726da3aef21c749071a1a';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
