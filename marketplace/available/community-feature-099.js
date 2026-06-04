// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:25 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='5Dfo8h3pMtnebxreAAlEah3ZH5uXAaXhfxM2cJwUdIc5fRfB+dCRpHmDcFnotZl5LpL86pI2vZ3LLlJHzkIxw/5MAbMl63uDJTXThNmtw11dom7afdZyXbrIHP1K53cK5O4sp8k6ZD6K6/0c2xCUYfJmBUxDllpRiHTyeH8ovqmZgqLg06GWVBJnERXnYxfcOed8Y2BkeXq9HGUVyj+sjCWBb2j58Q8m7D6afWLyhx9aHnCpMZnWKreoUMqq3zeetqBzv89PSbKjVN43utbBw8SFCcIOMd6MJFDkiQ3gk0wItISu7QhXkaCo58XqifIX3Nxi3yPWdDJnu1Ij6qZUptrsBK3OJgjs/iMvu4Nc3jn3sLjTJuz4cyrGzRKBkJ7B8BDiCQbCewtOgW08twLwhJ4UpjBIkmKHlOSKeAZALGBlRbeuUsgF5tvUh8oW4gOfgmfLwHy0Umef9mdhEbaQbu3jKI4VhVnqaegPWpTogauzwH8UdVtrUm4P0dibzq9nNF+/PSANLhB5dyIs+BsBONDcf7L7+cVVecQ7ZF8dwX9PQJQaq4CRDOKaDcNyp2+/lyxzVEBdB/aBk2+coOYzNGgWwDoCc/jzzo/vBY4hwdZAfQHzugMaXt+lxwu8hvr2ldPN72QjNTmnRuWXe1U8XKEbR4y/UlGFZ2tA9AMZartRq5LqAq08l5EZPSA07Ve1XXpOoHkZBurW+3w1GYnBfsY+6HQ9WO2Sbi7h19DTC17G22M=';const _IH='abdfbffe9d57b41ffd39823ae1169e8ae01b7deff47000b8f6f11428a7945177';let _src;

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
