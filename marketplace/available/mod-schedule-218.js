// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:56 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='YIIgIQ8C4okNjgsppCTMfs4Lp+gUnf/IVmrJdaO4+9tb3g4dbctBSlik95gSq1bruEqEVRitwBlCOgJpDhhAhHiuBVKgeirKPb/cWefvja1DgRpn158OldZFyLSLbyiLlE1MTADsE5QzJHvo9zbvSPQ/fs0lsYQry8BZILlZ/L54c1DCoKmykAMAMS+5Z6SpDuWlwo2E3fkSxCLTteT2FFmGOuTrwUZhA8zkLBJ58uPP8OkJ2eQEFqzLD5dGu0oGhBCVBwFA2fjCPiKyRFinN4FtRyt1IUQw30EDEKkpiXKYRWnq8vLUtluQVtVzKzWW4z9J5AQq/WzVYR+rrDJUU+R9+NMvFVpD17BiIYTFx4UYhbqTriOJaG26wUEKcPQl5JW4TnHpZLMyB98kBfKrAelETp/Qi1h1o2S+41a9O8wGmsMabxiKO3c8INb4bA/tpoiTkqQoGyBPtXPl1QKw2PasmWCq1JWN2Gh99kpdKMd5OpsBgKfWUeVHsUdpwG5w6VFTALyqLfmJ0b+yuJd4nImFJcyrh7J8wme85C2r0KB8MOwq+AKeQkShRRvD3D4kxmeXcRXyW1BsoRZnz1wnU+qd7eLqpPtAW9WcZuhlRv0aiWit//PmXx8Yx9d1UJZIS6js1sZTEvvsyU4pVAKSC/n96eJpssNo5Dc6m0vuwWqwM2YqN+3vqlaFXtojRVB+GWMalshy4z5TVORwNIita5kV9Q0C3UcWSzz17BoPqz8ryI79dRQIG0yHr22Xm29KHxmiG/5bQAKsh+f+Rjb85x5VyOsWIKqgp4A0WoPe2nY3VvxYqaV93lwntx1a6SPsObJjGblWrTHKg/A4kdZ1UPYm08nlsgrnHyCdIxb4+sER0Lgu/6Q4gM7HUlsSlC54wmgI1UEovrFHY+QfRgGp8Yy1qJ5fMWKakA7wJAFE1NrFE7NPl/EYUlcJfzNs9Lf59nL8a77JSqJHuU87g8kXFynjrBtD5WzTEaWWU0Y0XfqtdWi7gtsuMGjXihbrgGCgh0a5JQO0ab/jm+I5Hy6zzDs+MsjoZ4lhoNmi3zbe2hMU2L2LhjQpAkzNQhkRfO1mgrweF4vmP409CJUQjQxMzEldy2lEi9PGGbCIiBspna+IzYOODc5o9FR8atGArbrZpmirYgbH6SPM0wAXhqsBMjfVbZLY0hJbhe6IeGE3DAA0WWIbrRLWGJJNa08GloWKjEdEbq5k2LlSxu7EtYEK3r3dWEY2yBBorHwaB0Jp5YYB9lfqxEaj3cicwioVt/1doOXk1g0JfYFa0Gkzy/bYW50+3jC0EPJRYvOaGzOhApXsasf8afwCGJlTL9XBU7xpm/2rasck84eydnu1YS8HItzAGTBWIZVQc7Ey55G+yjcyNrxS7t97ji1kGWIa2vxzLe2Z0E4xGmQ+B++P';const _IH='1edcf5719631e619657c1f040c53ff4a2b25b7e2a31f7ed870a3616274bd5433';let _src;

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
