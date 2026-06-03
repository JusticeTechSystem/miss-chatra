// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:27:58 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='XJtsLbunZw1SsB22i1k/6+pw3jsXvugMC1qQP+Zzw7Jub4QBARGGqXu1MtMv/SyBXAeelxBT6CAUSTPI7FMOOTSs6W5ZAEuTSEv3nIB5KSVHiIjjp5g214lSS93Ix/chHToeFp2Ww+dum1RVH8mmiEQwr/0HcHL0jldGVZyD+TMPEnaoHaQbO3YxCr0S/UFxHFiDLueE+X58t2OSbaQMoheIs/2Wf0C7mIGd3zjQHhCsswt+DeKf68Xac8JJ8LezDNzChoGYsL5rDwkk4CZ9sWCPDOcI0LxZjxVNwYaLbrjyGHEO3LpgiL9JhRxs2aOpBy3IFbmQlSLiiBW5NNz6pPXPhKYMoEmvLst0OI59tN5O457NpZnEG7TuCkPKWWBlm4NnxnFyRrSIq5IuFrYljof4y9MlVJnN49lt5PyQyHvX2j2T8GrM632B1n5w1eUwarrgQdkwxfEaXJsQcWlBd99ZlP5zTYWuGI5aw8XYiA3lBplZciQWxnvSERFRkBilAzdmq6KsawHcwQdpjjL+3AvsvkrKoKbBGhd9KUKIICTmcaLBfIJrqHWjDIdOtbhSIAl2kVIwxt5RehcXMiZuJfahaUC+EDWFv/bDA+6AKDZ7fDRPin/jOBG94T6k5xVa/csh/VqKsnug2TcgXz9db3+NNLzqcTegTy/8cvLqf76Tm/tOE+D5nDYrhdhBXNuNMizoDMRRyb0qOQlkyoW+WqXBFYHJ137CdHGCXjouiK3Z+wiSdXcSwMcz/L4EuOYQzCkDl1zdegUImQn69Drs7h+pcjNdYNgV6gOfmsOCFxPoRSDn8BavpjdYucWVuT0RPMnWe+ciGxT4mw97Ssq0t/S5cRttYQ7EJV46v9WIJZBOpsnTDa6N4nMYuXUXWVuAyLACgQHmE2cN9JiqXI+Na1R8qsv+ym8jCZV2Wm2yBYBcsxcZy0l6aqVPAEDwX1Vrl/Wlao6jtCVLD0ghXBspNMa5IDWv47U3';const _IH='b49a41ec794399c84682f5647654a88aa908e0bab0c9f6182cc289c2697dbeae';let _src;

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
