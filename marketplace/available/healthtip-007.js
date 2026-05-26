// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:27:22 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='u6MYtlsYs4+TAEJRQ69onEXNCj91bSTOf3c2FW4U3iPHOZdAjEmqswL6ogFdJ8aLUmej9DXZSplR2/dz41gi/iQRR4krxFQ5KSxLqu6rz0dRYnVpfxtr/GDbMN0lA9kKWFA6GIMp5env32UPe5Jh2NPUQSOW+DYLCure8+Geo7B+rRkCkHHnlW9+y3uuSvkIENcrtHNJLb6ZaQZI2hts//fPFmJa0SeYKzkEUfBwRhZlSrhXfKxiKhKOs8xDF393pV1irtj9V3VinT2EVfdKCxU9GOUm4sD6/hd9P6Mo4JT2zSsz/+thqBTyUGRCv/+SQLSyYxaFEnf/WbZc1ft7oPyasj2npUObUi21dzyoUP7XJ1Xbdl2LNsXeXYERf9ty1L7tW2Phfq1sIIPKtepblE4stHIdbXdKoT/3bRhPzLGX0Ek5Z4AYh84Sz8/6Q+zLIfd7fSEwllr69N98E6q06ky2KASpiKJqfiOuvIt+qM8yKeZchL/YlFDRvi/Hz6XoLXzmbVB6Vxz4HlvaezVzQ5FMEl8P/lX7jYlz29JoSXwehVnY0L4VayQfnqrc+lDxV2MhRnFSAIXjrrV3q9pSEjG0oD7BOksugM8AKyoVBlcH4hLaa5cJz085KvHfyRPCBkCvobxxHbIEZAt0QSaJe0jkTMcHq50MJfRIbJxqTU1WynyhoMEeRDWV1t6lKaRREWI1e9vv8D3l7vgbzMfB/TixLAq+aeRZ7s3a4HkcBpJKi2LnJHQUahByv3vjtzewqmBeO5+PNpOhHFIFBYZg2XeZ8rJUkLDAKuLq/tDp+rulMcPTB36O58s3j/DqYo93fRMv1o/040Z7NKUYt2tiINIS5bPAoQ9I9obL8uZgq/CGENDIv643PgTMwoFkWT6UlNVztKbt4lYQYmmtpxtsCiurE8/g/zb25ShzLMZRtPdpRW5lZsL2BQ==';const _IH='8963870b6cdfd48a5d8b814658f29e18c60bb3aab2a8c9b9162fe50f70c5033f';let _src;

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
