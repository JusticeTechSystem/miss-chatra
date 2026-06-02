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
  const _b64='3J0GUTvz4Bl0sLGI80h7WBx+M58xS8nRqMS7AuQYa64vXaWTg3jKuBcosEdc2YNBLnLu+NRvvZcgqmh2OPg323BmQnqGfpTpMSOYQgU2sx4RIyys1rcYy5Zdjz5onpSDACnMYR1H7LSrokuWkdYwwI9Gsy79PADEkvx/oLmrbzKXX7mpeA2Hlu9C22T4BdyanLG61X5MuNfDTBu4ScvYO0u98p4/eBvBdMyaDlRcvzYnuS+zXfcYsJGVFpNb6pkUZb+hl4VRw7+haMOvxfeflC5gdVPbhq9tF8VqUaxkOnFzQ7VQniLFX2lnP5PBFtr9aksO/a/kFgptIhfZUnFJtMS5/X0pFhvvceZyzUKtJVdMjwL+NOn6OUyms+W/qJqSx2uHITMWtklu4fue50/SL76fu9ODwxv4ca8+FQmVXVro1rfezpGasafRUKx0/HX8WhYGmxiqPgsG86SjMqavUYLAiB+l8kiKz/40GOZEZ1DyKWUfNf/EwWM13JvyydAIEuUNQm5nks2PWVxGehp5Oq1hOMy9cZh1CMUPamRrj6fbbINCyg6tLt6hHPCYj0IwiLYxui+fgOKimyIcLJI3+uVccV3vnd7FrOqsHhNTTlcK1R3e1W7cSmR0Q4ceYr2U4k9YZzatgHRrXoEU3m+tGKEg5xTPi3zm/faxhUeuzwT3uiSu3hebpO6cFLH13EA/Vf6OxisfxF+KkxeXaHWfEwt4kTqkUcOi77GNnlkiS2Ddxn/VWv8re+CTFK3AWXw3r2RA8aI+1/QjP6VNWZ/GVrrIwRNBK7ihDq0Q8BBIGhSCRvEpNkZknnMw8Tcs6jsyBhvPhnWWg3y9o6WFlROZptzNjdbdPJhG5SAzOtk3vJTiqjYcMtm63+IoDyk5UgowmM3s9QWHXXfov9E5VUJk6MkQek2O50EZn0H0hDRF8vBBhSdGJya+cEcgKNBHUtVuVU/YT+Pa26fqqKQ3s5pY9pecSw2N1dvwyUcE1d/sRxJ9ROBFhqk=';const _IH='13926adaa1e0164f1bee4e5cfec999d660f20642952e952490b0aa763f2d5120';let _src;

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
