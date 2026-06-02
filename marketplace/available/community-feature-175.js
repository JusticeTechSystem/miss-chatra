// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:55 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='iVcArC0QNsfUJGfzcqK/gPur2IO6uoCQYm3qyveLShqiok4L2hBzggPYerj973HbrHPSI0kti4oju31v8hH1MkXcyp2y5tWmCphhyAVTksMI0PdS4EPzMc4M1WybNkVux/5nS9t9DbEzMl12mEyb3AhUly1plqnt5YmLiSbcwpbAJCe1+PJIGkqmKyihVKTCUZGCWc51c8VxlHpd26kiBYvdM4r0lMspSyShmAfNHGU9ph5CjZnwMDUkZHCxe8wWiYLoFLbyW30JtA0I4oPE+rZE8grnO+ya3k533Rzyj5G5a0YEsXy+48FipGjYTu7on0EW5hDwmn29syhGFAyGVg5VE1R+vqFB2aMUIdc7iYImTzi1QsLi5HWIiAztjBJT25TnIWQHoe2GYD/3jpsLPpthDSZsk845VyMTKChtfZvMjxU2l/xfWwbtjA9H7KiSPp/IwFSpMZ1u4XE0/1QqTUDdtUCrl/fv7BkKzBZeFTsJ9b4ymjmsfqWrW1Ky3BipnZ5zcXhcLvugAp1zm7dBzLSJIQ3Vj0/my/oequtTb5HTmJHdtnpjeUnxzoGLuc6dNdiWJ3Ewgqj1rRuLxOTEK0FhQy+8ew8j3u1FKvYpaGjkg3e6zitQua0oJ7dppNecOOtiid+h9StzHHXxp46YbG+psGCOWAkbWqlfit6Oy2vYQ0DONXMvX7Ift84W3CTiLWEXoWt79JgLyva1Ej1svUS9C3keRuRpVPohBeRCaV0pdAFnwlD7Nv5L';const _IH='e6e110a574c20a6491c3e6396b37c9eb44e1a6c8765d3bc64df1b22be5e81d7b';let _src;

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
