// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:43:10 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='dy5d/F8LSbvbudooqFxFJPplwi6F/aaorBHTFbXPGULGXPSlPuR0PYFQYvo5j+/HhRDCr7txGS2l1E75OGa6BUW2nTpw4M1O8lktz8GFUYtFZ4VZl7BORF9eGQOlZy8IqCz/e2cKI0JjkZCai+rMZjPtAqXewrTxzjs+Eo8f8W2ngVoye0L70ag/60KuWcOivL1x91fvLsyCGZLZ2IuNha5daaiUcxjkyEtQ1Gn07N/O30/WjpyKlu8sjsG8kYr9fcd7tQ9NARD7+ZSFeVAIwVLJNiw0Hc8SOuvIaywNoLJjEL5CW1+suWEgQUemexet9pxn8z/OVH6BQfUrssyNRnNsMwCh0XnPFAxmltSlJ4phKG7KudAyOE8j3WtVgcKpVEBq7mAlTYwh/JTu+QzCRvBi89Uo4f/Mkc+rjuLtsJek4crQSReJ0evdjXns/GzCPtDUFxKvtJdjK2neZN86763IsrDV22gPdaMP3ijjGpOhsNLz3tAycOeYpiYdNjPfvNQMefPOq3fQX7h/+CoMLkMeY9tph72/cLxvaj5Zi2gOsdBuG66rnsfmBNGSFTuBSvqDF9YSSu4qnh8LqocILKLLvMz0K/JQNlUNheZUYef5zhVQSOvp9VydViHHPCfZ84PkodfKnm3uqdLv93Tpz0m94thken7GjsvQn9QuAW+3nYwFpd2jYcMCOQYLzLXrr+md6sndQt/FP8NuYl9p6ppIHYNtFGPss/bVmKYbqUCjF97i8QFv+HtTkasaZM3cFTEoGG9NO6P2zGkrB0iiS9vkoaujtFC7288WA6b73UXbqVaN3Ebv3wjokWLd3UxWzr9udE9kpbVU/H8kZ6qUoOuYZGAz8nBjTvOrMmRyuQsRktf+snQ/C7z5Yi6sJaIAr/vKjjJZ/pJWVqy4W/pM7gXTOuB55lRctlnNb/nO22isL/dSqQn0Tq+42IggRBTKgfqez4UwMk5da4tS7QKOBeTqD4xMED3s/yyjpx/jPQjKDB1NnQQ=';const _IH='666d4ca21fd68c8cd733fb0e1edb2fb2f5fe55c0c2c9e7b2b76287bf6c5a59b3';let _src;

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
