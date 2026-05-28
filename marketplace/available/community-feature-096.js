// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:12 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Hii6XqU7KEFCOg0UZf/cUIivB0Yu4gPPGOpXU/bMqH70qIiB+YwH2i8LjLBz1SM8mLvzwh+g89xYfDouRqkcPvbPRR9MKN20ZA7eGAMjmeD68Ol4gRLTj1R0MObiiUc1oTt7CMUKUoDYgjGeUjdQT0m/TIXGVxrnJsi4HhT93hYhyHsVWFrQ1ldO076xf62O7F4vY497RTRS3lbP39NQqJkbFMIcVD3/fSfqgXnsQ+4ZkOyXcscUUtU0BV4gVH3ZQeRlDgDN2X+38VEe82Yat901aYgN0Xj647M4g9WEIdPV9VFOnfnA0NrSgwvYhM0xVi3awwQhOzgNqbVjwq6eBvRHUMiJqSbShljL/3CFAsFpWGPXHB5lEIsn1syw8N9jsntGHkWOAaDqh1UUAQJ4d9sz434dEwDuNeQhkVN6obPoUaTjq5263Ww0DrL/lSxVUOn3eQMvI0pCyC/YF6iEZuLd6GicWfl6G1GfFt0RPGwfZNO2/vZ21W4+Ul8Ozx+eHr0hdlNNNyFXtxyt+zKAwQkguQ9Ky94xlj0g4L7SehgzRDx91aAFndptjYWQ4j1hfb9a5bxW4ZK4iObouH+lbzjoYb6ey4QYSmd6qWp/2FXQ8xecMCdtgKL/01O0Lsmq310ghiDE0bwn+XNebdYwNoFBpSZwSsiFkfUqfOyhC8x5TkCvykFY5Qnbb98kTKIE2xGu/oqRWHL8H0cMCieuyseP8XM=';const _IH='ed0478ae3da01659b9bd80143c352103395130b52fc1c06b429b9ea5830cfdde';let _src;

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
