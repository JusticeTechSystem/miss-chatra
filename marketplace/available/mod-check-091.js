// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:49 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='JJlgyY8cuA3S4DH6joCN9YwXZKriQilb1mqJXVWeftuSuqWCMRTAddiPmT6eCoUI9id+pdID/33W+EQJICCXPMehtZ9nUWrNGZnlpoSN1VxXzMcrJw2OSzLUBMOfSDS0rkkwbn4sGH57FBmNW1Y/vI/kZwasPZKWX8mUtFYMV0C1NyYA/E76i6zpSWAKTb7xq5P6dK18K5Un7fvlNZJ1mNHErOhb5agbo4PCZK4zc9APYx0i3jn+HAas63c6v4HX4CGNJtMXLY9f1y9KHAnp3ySsU+CJnCvvvT9z68gVIi5XtklsWg9sEiK0rOLFn9WCuVPhYQCVAAng0IWCMCLsEaORjYKuRWM/pN58ntErL89vwf8ilCj5yjWeMWNAMXq96HDzdz5wfy9zHjzSc2JylG/kWFnkcFMmwL3gA2giszzyJLWznMaZsFEveJqw0tMOuLwvsf09qMvKT9w5WJp4ywpwNnIPB/s5Kbid6Aq7BDJB3AjOP7gJO0xK/gYzEaefeq/go6+NbjF6TxENJ8CaPYial0ONTOJsnEe4WFwsOFG6sZ0WgR1SVUzBhsY0R3zGGqSFrnaobHHKG9bYtYpkxA/h1X9J35vmQgMum2xzGDBaf8iCgMJ8vWmhJOXT3oO8ZKoJ9PSSdWv0lbo8XKT6wF9Dn79WCwcOSKe6kYEL1wySx7sW6uYS2/HI50qcuFNZ93CM2N00SLUFHG1cz79otgIYTl1v9AhmkZ4OoZdwLtk+WVekj+RTfTz3Gk2rlmn61qvS7YGHc/D5TAuiMuKPPZ4Mp6iOfuwxHKY56ke26Fi/LO7JG9qTVjfOKLcGIEjCBZK5dsoTyf0bYM6ocvEOyM+mf8etM0WYOuIMnxDYmwXpKHct3PWRuj7qRKCAynL48piQRl1bIcqEbtQGo7Cv8tlTiuH2eTuev4VLfYybDRILDGxL+a0NcG+lfPgJHBNXA25lzTpQkpI6bYBpwCfY2SAYGUifiZYdI9+YgGFF5HqRRaKcL0H9ZmCKxbcO7RPVx+ldb6ZgI0LzZt0pshGuTucH85YE8DQvOQs3r75zJDxVqg2fWf9BdS+jz32FHKpfQFteO3EhzLXm/Wuv2QbhsEeWE5f49qzlK4WwxdcsSUUaJdnIAwgIZs+BxEMVTRs0hoEnLmDKXFTDz9Dfvmi8X2HeJL86NsCLHLJQh/q4u8Hqbx4gTc3rbQn6WKl/iyPEiaCtD54Y+nUn5Kt4uVJwvFzW4w4OXqE6Nt4xYd55dQllAcieJaJ6XLje5JCHsjdbIcX+8SfEW9VXEkwqVCEqOVk1NHfs6oR+lY7XK1LDsehIf6L7r3z6RyT0vmUOCfwFkuVs96bV0OQnqBuRN/+JC1DQ8zx7CXTtrw==';const _IH='6b4ff5255a3c27c5c0c6009ac60d347594bdedb8a87f403c034154b60d655721';let _src;

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
