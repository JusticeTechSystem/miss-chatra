// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:52:44 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='554RcUsDoUz9eyRjuh7wpkiF9A7j2yBv930wCldzMnO3GoSG0twRKhEG26QRJ4fxCGwY+PpzoNH84NKqJWW8skNZ/RSNxehQWooIbRNy1E2i7o4jvr/LWg1UgMVMZ4fQk92rOarDnxdObZGyd9+RLqaxVvIL6pNWSV0jDd3nDER9CVU/kTtc4zOltYzmyoxQzt2qSX1ufmTywYfdsfT0GxNu+TJQWHqTDiXdRHPONmc8xIKJBFTu3K9J9ALlL19IPVEnppS3VSy5isZ+ecVh24hhcd64JhzKYX68SqbPGokOZCSAEP1REzpZ/tZu5djuv01aD5h+0uWD51dx8o/VC2JQmly/zkhwCs1dlaMR1pRB9UhxTIFukbjGoQxPGSTE0EDNlbhDKjYz9i+SJTsOV7hXOUuL+ql0uAhatTDQgcl4dtb8758BLM/OkE5iVY7RMFvZ68e6j6mw5dKGSTwHsjfCHGbYjot5VkgWkKctjX40N5N2rIQzpEbFvOtSKPiR0EMht/39/SxbBBNzHM8HwXbQpVpRUS5F/oh+ZSJoyIcBLvveJFtloM3qIThJ4FNtA5quU+sfwRX+BChHkbRVy/fHcQuSnCZBrOFZcTAis+zFM+QrxJDD0+rc4qMOzvojPh7kbEKV9201pvY8PwSBeIuqYou5ZU32SsM846PnqB6DSJhb3U1sIjqq7f4wNG76hMtsCBFWwQqH6AfCU+pR/hQeVpxA+YCUe7JYM27eRL6wICJexQIV1zUGCr054reacR6mOUTPsGub7WhhlPz76oPJt3CISle3wipZ/crxJaBEaG+EQ93/5gES6/J8fflHNKtVeg9p/LMTihAcICSBjdiFn4xpaFDcfklWiO/a6zBMSXxqVTOVrIOxSOa9iRp0DLjc+nBcfP7oOojLG81ZuqPlvowZmTQjW10m02/U7nQcEj8SZ6/+xygJhGfhZJjA4dcA2sZ3GGXe6Og5RV5xw0VekIg6avEEVLjRfyDRTkCGLOK/zVYctxkX8nApDBc3nhWgfy+IqGGrLu429H3omtdS6zmzMaz14rtM4cjp+RCYVDrHBSeuqWQ+zNczm94U0hgdSbZsc7tBWHENaRKKp5pwWiFBsmOHwHmjgTUQsSQ7RF0ucuglsKmTnA==';const _IH='0e7858b6df9b38c999bc5c4105eca640e5d053607d9ba535df292b79f28f9932';let _src;

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
