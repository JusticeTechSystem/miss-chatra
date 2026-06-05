// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:50:56 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='O0acxBbJl68QV2PXJN1tvX9KR2VKv5pJTE8oe0uONzH2OT4T16fBFzIHbn7VLjSRNjb0l8QDmEayXqEJPn7N7QIJkNHEZoMPggtbgPYtamB2FfWLhbV77V3ZiO/VXQ6/nvDB6NCOkpFLLRh+qf2mthJxuN/BzcrMe6QDTyC0KdWmzXJCuSZLbCTq2FX9g/sSxrDhX4Phd3NY4da2/LpF48uP1rtg/ku4Fijz+oMJb0xPdZUEefV1yopbgWrreJZRz9cQpAEcMnq2SSPMKxWaPVrgyUIRvjRZ2hqCCoEqGJo2Jp3hkiHlw9zDHuytCy6+OtY8Q3J8hqA5NYrojNMNQKGymLqMwADDhKcx5mhUjWG7cUaT66NAiHOMn7d2XrPceolTRWji7Pwv0PCkyiUuroFujltaywwuCXIRAcTFuRHR6NoigaqEa8hHx+ssrEh+6LTGhzfN2iOCgpizD9OlKh/UbXLyV7gtHit7pHLcokEl4bvegLlYWrnaPnfjOA+XEoxnCP00b4MVtl/oHFiQ9CwxhsX9asbjZ6pLjgYdkg2hLUGlDoJUxiBQzLF4NCUVEtTJzXJYpJU6Ezk3QkNb4L8w/VMikHlGxVSii1YjMjuuWUuGbH4Sjesf9iOo91NtSZvvbXaubW97bMbYMbL+Xjn0LRLBPwr6BWVt+cOdGed4G9wKdLENftKhEujYbna9EgSTFBzr6gOHtLRvOMGRyvYHMGKBQj7+qjZx1bQKEJIhIdZoucOJXGPBuNbmBpVXzbUdpoxtvA9oOP80CNcChAs80tEl/NCjY+Y5xQvfscEPoO92XvpT3AdCafep4XwNGmx/ZONlql2dqKu7RACnKw6oE3WyXp8vB0YmdDu48/Z5vLjZ8Dp3zpjd/6cPag5QoReGJVExX+MN+lX2lTvBLs3FLVipjUyIdewSbH0uQplPEZxhfy/Pdw66qIz+yptVZJAAiF4UNArMafflrlgJ59QWsSo+3gWAsNfXiqoW6yHG/ZZloDudaAr0oANKuoV5dSrgclu8az9OiPkCG5mZUDIiWFc2ZZ4iF9TPb8QT/2vBhw0VjCe7298O8p6lRBeA/NZBnVxJbxHSMsSN+MelQxEkHzEB0zEljYQQinIihSAvkxoCpS+uDV5ch+S7EyOtcwBS1NlWshRw2iNASxwpryh+kMy2bS8oFXarmSlpcHmLnWn66VQsFthP7pseZWDUwMx+PKwvw5+hvru7A/FqT5HvVPJg4LWRYKWNIJ9458MgdexXvWJ98Wvd/gG44k4mc1Hw8KD6t1Jj6W5P/yDpVAZOrfQbQjcwlgAQ3rSbXeUQDAoMfpCrK9xh9JO+70ARHBA+kZ++htDKw1I2doPbE/tvUokxQzpfpQ==';const _IH='e4138eb03398ab738b3f843049cf631c28a1d5da45a83dbe350d0cee17723aef';let _src;

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
