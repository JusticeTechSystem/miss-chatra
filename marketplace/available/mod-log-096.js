// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:32:50 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ//fBAIWcZRQ5tcBl8FlT6VmdC2e7r+dxShKcN9JBlmggHFmE7NRM8OcUyZOgW9xZXFwHzUvG/SJeB3+UrWkDj5fClX6aieEB8Z3lJmYezrQUuS1pzs+LbMvRerJyxRyBbMXyKxZohGKJB0T9UEmF9i974fZRohdINdt7w+h54QnjGoTqZ3A9gKVF98hHKYhw3jEcP5dhX0lwutCQViHHx4Q/heP/yIm7uTAVxgC+saLPfNEbCggjK5yUv0IVv1FtxQ1qTPtIh+QSDzSe2/5MoPs5ffunNXbNgiVrZn3+Px53OWYc45VqB7wpVzZHpEtW0RNEvj1ASDbkDnxByHyizFN6ipLDxnzBqku4Wb9lf9WY6LfH6nI1IpcvjwuYAvQ2tGvn8Wr56F1V8+yDZRewWbSeFhIAVpedDM8P69LfRYQ3WUpNNY3LjejpCWkhh/I8Mm+xiSwRw9t7VTF7VBaN3RELcWugHirQbDZ+wz0f5h8Gqw5s7YHG9+cY6Qs7xEqd0EL6hVj+vLZmfc8NBcBFDGteoaVgUlwO+7Pv+ioU5SONJGbvADLeiN2MIzisXExEPIPh4t7VwYSmWR5aD1Z6sxCoZ3mnloKtFLR6RI+n1iJanuwY5qdxRt1wwwMwyaATZjUCWa7XafszA2qDmtUNopadgKI0vKngPAEcHyy12WOWobjh1DpNRVDYQRhWko+0+yfcXZfOTZ7R7zfpNTqKQalU1SZcZgt1RsnyqrmwUQX8Zhqk1t/dl9jQeEUTmQxkCdUQjGRIIn8G3Q+A4NKHwUOUgPVTGzK99LkECLEqX4lFtSUbgXVwgXO3lciIqFudUaZyuYLf96pCB2bJ2l8RUzENDKM1HaE6sPuht11yMY+XIhcjojBHEIRm/fVKDe/SBpDZGybj44CMos51i3nVVLKJkFMFh8hq92xf6JxDqOcHd3M8Jj/2hQUy6fmY+/kcAaUKzeWQbAhhEohTK6TEWwGGY01GcspRD4/LW1VlG/XgA01vp5ae609ZvG4aVIbY+smfVco1X0i54kSfwaI2mb0WXK3vxwJYfL+iXrAjR1Bt+YnQOEhIZOEg7Ng+4uFOnAjCZAJuqP4ZxUxyxi0fFqAyvsj6xSzFCFuvuA4e54a8rYT5284JBP9YR277CZLVWdTR2aTXLDqJkJzzxJsmVJygWXtue5STaFoajW/oeI5NSH0yIZolL+HLo25jVKYjjluf+HmnamHc6D9crSVToDRacBUTMaz4vqf2CWpCSqxEvjjJxPpyiEH6PMVr/8HQCENIbnOyfjvgW1m/5eN+B8sw1vsVh5Av4cMq9jQ6Y3CuZ/zzZDobadK3ARJy1l5YfF4UYxF';const _IH='6052c1916b17938e03d630634ba88a9f4f044faa4283b019edc7fc276fc070f2';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
