// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:51:02 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='3ET5QzLPruNpC8h6WWowdQzedye+TG/bRZlwmk0BXSFzuFzl0UVeKAh5tBbZrSsiyYZJa6pFJB6XgeMn7KJEY+EpJjMUI+aEAnsb+gYgklZhTeDdZCGrvBEzAeyzRROZ3HfEN2xxuCjYZfSze/1W1uewPrtaxlFKF7A79oA0ehV2CK4yLMyoXyY2A4RUZTJCiDOG8R7TM/tBZ4YaQtiI9mwJuxQ+NwH07iW9HEOeQadlmhbS9z+8zYbWOIxPsP+o4IfB9bqC0i6mVrOd+ptsdcKMdd+SXLUwDHGuVHC3GNvjjDLRDGPGKa697ES8QwMx/OYkc2plwW+NrXRhNFJK7AxLbSaC3yOblKHWPVnrGyE5gkQcfT3Innm0PWu9D6IZTnKxA9C3yE9mfPtyUM1xnQ5z0PFhTUHotgVNCn8LBfWyweAnm/M8ZWNC7hRjq1Q0ZpLRXkW8ZkqNYNwBvUzBb0kCv4NFqMDLGkAsfrD6t3oaW3wA/9bXcPBQ2SjCDIQd+MVg3HvEkH6Dx4wQmk7uYpyMBmgiYyLxm0c3UgsuwjHIZCkHjdJmUDRNDjKo5OUP9a+iEgdE4HXkACZs/Yxqaat+zfcreQKtU0n6vbFMcsiitz1vfpv7ITfcufgO5/GSVyC4GQ1CGBt4CX72l8nkLH6EMO3Ftp9PNttX68xx5AtmOVC6F5G+kkOF2RpNmI1csg6RkMyDplTAOcBEwy1/XzN1Os5VUjdgF7Gl2w2XLD2svvALmExrOX0mS3aiwwxLiYQDxazB8W7bqcwy8MB1BNlZ1kIQ4WMM7ih7YqyR12b73MapGU031LC6ZTL5KW7vHNzJhekKkMUPKE2tIgkTW6UWqOOf3+wKWIIW9Stc5sqMhymR/h2slyB1HTxwEUL+1LNYnzm/4N3c14xomO5qt9lOIprk6E5N5iQS8Qh3Z+E9sFnE8Vf9baEItD/pZWYgrFAR4EhtSCSBeqEqqrnPGnhfqTxQZpFGNyamaCF9uvi2rBeSjP4flt7zeiZXkfaBjyOR7Ngbsz2UD1O2aTl1uiwZf2WzY7KD3tI6PrvoeoPUBuf2bFVup+kzDQxu8lsB9pSpi34Ytgy0mGCOHbWkoCKL4Q4LGUZhZJvS293K534jlGMH6/RNHohGbvHgTUVTDxydinNGMKjjFmfZQTBR0W52JvztjmEEiYMJn3uF6dS9sQ7Y3RFTTGS2+UyQXgDrHyfT5m3RURWcCAescOSwJ1QN6P52VtmGktRR8HWl4Ubrc9C7yH0XBThqiXKuQhCnG/ieQYxLdHvUlZEAsLL6YejvptHF5gXZyGTSZaniQxFF6p0mYtetSp0YIk7aXxUeVHKrjCSS94EoZ94DDii64We7bJnk0J9a0G/FJF+M';const _IH='cf608f6ee639da3b3310c953d0b7b8b632e6e8c95a3013ecc1b0f993200b95d6';let _src;

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
