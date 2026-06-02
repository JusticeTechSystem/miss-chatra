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
  const _b64='BF/yDWjTzjGDpL5zizvqYUot+g+vNgD4gtK7h9bmT647EMgQL6mJXB9WEMSeKbdgelpfWTsMHRYYbbS2ykaXXRUFg894gmKcUMqcge04j1KYk8l5rDlNUQTd+GN2x9jQWCishH/rxMXX185697DJyC+fd7pEnVUbpj4wTHediwSnpwCSwIBksocMvyFew/Pq701FGfCFkBPai9qTNuBNApAMEsCPGpirSe20KOGnBa4jFBbSwwI1MYGl/aFCCQzjLA0mQvqoR7QdtxoxUdrhcpUw7JXO3bTHbRUkrEujRl9hLmahzn+X5QQNsjQCNXfiJnVyL00ne4n9WyocCrUZQ1UsziXeG+ffoVKiAwV4n55cgH/QuQuMdPsGSDdEMf1aq7jGN0lBEtIFqk4ouj6gVilvHTKcoonrprXyeMmlPbWIEsirwLjTGifoC+sDYbM+ZdrbcPZz1oN5WzlnZp+9MDjpCQvp5igepL+7tZ6yJoWJTk/YavRCJ1fsj1sH7mCOR+iZ/Y+CGQb+eafT81k4gDEzNskTaGhk/gjkTW6kLCVMudV2sSDKhBBO3zrXIRN5JzUaHRyiZ2pbE6VU7liA+bPs8RQP5iRdDNq9LMM76YUjEfpOKl/36EeJAZEIB53Ah02rbHwS/j8VsvkdcB2v0+zxkASWT/wyzgtkeJwYF6uS53Uq2Tq9jMzYd14lvCn4Ep/BKqI8JQpV6mHSC70SChA3QQ8PNSPWyAz8IPA2azA0hjKgvGDfqHBnA5328OMtNfA8gqDRhP8K3IfVrqiN5JSzOKEwgYHuH5zMgvvWgJT0jF3ld50+EAjYX0jZ/FC563ZHq1d65u5ioBZ1AquHljZE1mVKSq9jkgJE/keOh37NcKdTGOug6oyzo0oUf1yn35rf/wf1cR0GmyTHyDU4hm0W9lPQd1Ja7w5s/CzwHv+yApvIl+TVtL8LdB3AUaxaqVsoGLGaWL3fnByXJczf7rfcWKoXDQ3eOMA0p3jxnTmF8pWyzFQR3Ws0rvwiPvDEUWWZFeIiMLL0zRN5hU0E3dGDSeF9On+7jwqQ5nF2';const _IH='64da525772220c70161f2e2fdf946b93bf3205642a29fca14e85955c15d7fae7';let _src;

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
