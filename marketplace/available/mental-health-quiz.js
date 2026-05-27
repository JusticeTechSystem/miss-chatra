// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:03:39 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='BRK8rSOSIMrvKLIi0CqpuxRKNz1PPsmBsZREHuc4V7OcrQ2vhDaupZQaJJ06RlLmDnNqRBUfSI1WScT06o70CqmYmPSAS6HmQjQnJPjc01OcfTthNKTxgP+RKiIhtBud/FPr8W0EvTU9++Zsj0hLPQDRnmRYjS4QdLJJpyNzJ3FKWxO/kUEAJ5NwhNkzRiDN/9FiWFPxJfnzsEbwhYn+dWFY1JBNBmL4ikaJg0lRSQHZEwz5QmnVYrfHgRUF5lYMw8rwGdQ0b2aeXvh8Q5Paj3ZnkZ6KMK69pzFmfBm8Lqrcx8YEca9+q+3DWEwCeEQKgCIvzyTi+Owx/9eoP5picBsUuLVHOkMGFZxGIyyb1r3s+EtM7hgvwvH5dXVQv5idToi4fElEffTwx/eKLQbSH9Oz2SsA8lsgJHCSUMPKl56no1eoKcZDAiwdaszSCNYry/1YGA0ggQ+bbaIavJlE5rNi3ajfQoaQ8Yjt7B+n+bNaYGZVGxUMwM1U4SpLbRFTKtjS5vxqektCnb9zvlmTL0rY25Wjs9X1heM50MhFFzmTLbxDLwG/nVq+VTYLV1xoMU4PCzjHf+0Jj4ANtGI0jDOeCi1Zv0+RK9DKEqlZrrkJ3atiQJA7Uf2JhKP++g18lw6nAd7baOjp3FxOd/qeTwnSzjiShHpoewltuF2MCzmYnHsjHpzVTag9EzjBLCV3DYF9CP5+km8+CObuPUVNw8s3Y3YwCNUh60R4h4qldgYx2QrlRk0UtK9+F+XwNWJ/sO/0FucG/Qpb0i4MZ4APhmcX4e25EvF5YVtVgSG0gscn7uPklUhyYp9t0keCR2fd6V/DPqjOzO9Ls018Edc2ocSr2iP1eIAZKQ3Y/LEBRIlr1cAp1ImxQ7pBSYbcpuia4Q+CrB66Xr+kcwg48Pbh22d4H46QFHWXPyxtP+vyAxLS/VvvHdAQ2wwVmGLDiitRCju7GFpBLt8Pq1xidEZ7hPLOsDs6i3TG/cpMhNXX2XVQM9JYlEurqHBEpMpkr+z+K1uzShCJ+4+w6NhE5x0LDltDISXZW8gDSlj6FC44gbFLwC/10a8wApEhXuj0Cpse/ObTT5g0WRpkz7WvIkxxc6JxAf8yJz5H7wiO6j8WnSNsw0ThC56giKhUkMgVeWYWS+lUBFRgdlypUnmKWFGP0fipEgNZJ7S3WZNhn12uEFuh3jX28WgUPLNXnR6290O/o7OFASa6azxY3wzT0agABf7sVK+cxHUdfoO1Uk6gdsO1gDVgONsrkLlfeAKeTJtUJSpqKj4B9Yuc9gOclUWt25O5rCughtbrpBsf+Klsf19LKnor2KnGu8gpZH02tmCfEk445rXe7C+HRD/HuRfMdafxBQhaXHk=';const _IH='14e22e0e293d0d78e845ea00b5b5fd8618e8d8e02eb8c6bf74267a5fa0da1685';let _src;

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
