// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:46:13 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='LTO3iTJL0AiM8gY8/elcJUQuIqtj1mpeCUE+bVZ9iGQmtHL0V2zDq8VmOvXfrhZ0wQHKPwPwC9+II0DfW3zDfXDps/BMwf7LJOSajXZhqZLT69VHZhrGCVvqz+axBs8Pz2TZ+h462+8itIcoCXIIgMWoJmqEp/zCuJneeLQJmBl3F4yDxMWp3204O2soQ4ukCh9uXElg5Iz0+LEPJktXH4JzYOttMS3WpTdAK0e0RMW+hGD443JZutylo4g3mOuebkN4dOCT99ifv2JoylkCK1a6C/AI/JTEy5Ikb79rYpR1Lm/BGvvwMdOPnBkcx4ArRbShkR6leulF7SYlpU0G00ah0ByNr1WcpTq0XaWt1/Ua8DpnPKzR2Bgg9KkalcE1ELdLSA4zQAEFYQgas4gkTUzE0cK3Oa4GxAT4w0+j5zxRam+IIN3B//FRrw3MCRM3OIT2XqMKtFg5BuGO8ydU/gjUeYM1KZrldzyDI2yuphQw2CIAeawIgSUvOzTssotiNHzQFpMq77mA4DhXpTjK+IkBSU8HcG4jgXt0Gv6nBbZY4toBfKdhIiZH20LT7TR9Q2y87qFrzee9SbApDlZx9sfhfknO7daAzmCZMDkVv2xd8dkG+BeSgrgbu2sXk0+1WrRXgAdH/IxYIIj/d8DuFUBM+opHpq2nLw7Rr4hrjNYzc7oJxovTZtCJ1MSIK/akRU2O3UfP/+wakp+fAJcVCAEVVZpXG5CVnKUlR7qq1nIYTN3DTqj17NgbdrOm+lt3AVw7RYgD6Jjzisw1SHQOZYbs00eBKyeuxweEzILXxqc4yqfiCFs23P+Ee7iyyzXYW98eHq7hSAXRvpIsydHY/BVI/ytklk8oDfPvPFBu65ZzMrKyedjQOvycSB6pZGswJxIWYYJY1LxxVS89bq3/hg8oVf8TH8W3c6wBFumm32a5bRwNVWDqVkkTCKDslWGVwnvs+rY4spebw4iDeHnP7xV7HdDNHX6IwXXjr1AbIEyrSmLX4HA=';const _IH='6c5369c25233f6fb0e649f733c7008cc398df70e2952a13fe148ebd95b61f271';let _src;

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
