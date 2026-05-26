// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:23:58 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='C31jtMf9zmmd/Z7II5Al3WXDOl/AgaP5Hy4DuyqW+05D1fTZwGH3AJ/e42ES1FhfdrGF5quTFGrgQZZ74/h1whY3Cm1NsCZ9v8Htrkw2sA+Kn1Z9KmUMpGVipv2fGsgpg5BbUllQ8Ur6spFxa1un87+as8BLveiTwlBiBn24LIH2jngbyJ/kc1MFSARaX33KrDuiq1m0IYv5h6nfXmIZBNwZo1bB+HyzlEwXp/Qde1i0oPz2yq8eiIG/e7OFRV74G4L0JrD3I5wKG/PRKLkcQraIcaR4EJzzSf+OEjvbBkNCyQK/Pi5P6DZggphMVrSQeRfWYUi8Alur5NjsbW0eKhOdIodiLStT17p75EzOUTbqX25TGybpTIZ3Pz/uJfND7d0XIBsxI8t+ShZqsj3N5iZfDDuR8i2qi2D1jvacrArtS3VRgKnK7KyLUTG2vlsEE76iDptEcvqEYt3m8lwzY8BF5wIiiLlKvZLWbmGkNu6I1OyeeQFeMM+JoTzoHDtIvjpGNd4Vkop3pPJ09z0D2KA32Xoa2mIqtZ7/btVH2Ob/QaHA86EYV9d3nuTYEk0oLbgxto1ErjmDSwWAR5cE3rN43UEgucgOXUJJR9RzqXbYZjaj0PkZ5tO7UIW6pdAJI3pFZBIlzlHqc4w3jRl/KVYPMCOQqXQNf01Sv0J8g4rRwdCqCSkRJJ0SaMThNbMsuKjifOhlVEr4UjzrBtozJcG0J6dSkkig452t/qETjJTnRAEuvm/UayuhODsp4Prbxuw8KL72nu8msS9GX6AlmfwegfTRu8KfCkS3HqSRtyWa57VECW+t2/Z1nXX82vFg1MGiWNFzzqB2q2je2ia0H8XZbWO3BUnC4X/HQmwGtFn+sHr1HvFseKB7JdGgABNoRPcfJ3UmzedHQTJa8reBMlzQvhNq0vv6lSSpZ8jO3LE2oKTmm7l9UcSTF27fjrAnZdVlzelXxXbYyGzS+5Uw4R4d1UALLjc5';const _IH='13de6d212bc69f8de900a52bc4a96322deb9056c1271afd144b7ff2092aca141';let _src;

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
