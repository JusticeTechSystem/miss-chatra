// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:48:46 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='VtkPeVv8qoxDcLRS2zrkIW2dGc8rH7D0REFguF0omKlnLgtmJd1rzNRP+8lXF0k+iK0kP/qkXa217UluXj+JF+gScFnZ0YyrvSzvDel2PvAnp+UlfyAoOkXOm6NdW+ZLBDSisHu97voxpgvln2f4cOt1b3ghKeJnKbHO37U3qb9gmIhiRw+w8LCZel6CVnnZLDO8lmjg/Ekiv4u7hJ9dPuWRFxtsAYlZlb6fiiMhGkCNg3hGbrNnQ+qsQxgKWMXiMGtJfNfhCned8UFERROSsuZBVGeK/eNHDxPOT2uOfLYkF8G0PSfxN68RNIFWxjI8gTTcXMRBKr8KEMLaLU5qCFDDMw+f7rJnEMa5epTmCjXp+8QxH7daeUl5NIqVsWjM6gK37C6E24/mddYN9F1xIf+vhJ80YBcEw9W1GM3I3MXiIG4DyfL+0oAdB51+MjZHcvfhgWAqtLPBPAZg5lOPSdkmvBuruYPd7oIBt1/HNtQ8v8jVjcDrn4nPpoexNU7+lwHmw4VD92ywd0O0ZuF13832ZGCCqcj7xErcc0tJ1dQsPVureDUOhsZG4otbhF4oEjWPRLyZLvaasa5mgel/pPaKAcNa1c4RMGDWDHvef26vsmFWQnmupaVBW+8auiQ2IqhaECWiEMjo45RITJo7hy/mWzEpbtaraLHDNIeifCEXF5dqmuhvdIX+RKc8b0Gn0itDbJKkrJJZ6B6Fxwg1TZfLj0/JC3u8RdCqzyQz6YR9oj8Lfr4csdMR6en9/FrvAdIcdqMz3pKMiOMOllDG00sY/51Z25sMrDfK1z97XwKuWnJsE8TH672CVPxV7s9soFL86tMmkpzKTTT7kMMBApRZFamOK4c2tzf6riW4KYURzTCZZIfTyTH/dYDnKyXxNBPqWNjIEiBA73+wDXx+nDqAiK2nFgHt/slgXHECbLP7U+8cIZhGCeqCMQDwxaYfELJzg1h082I5Bk1BEmn4ZtbYxCTwsJ6TCbuyQm9kk1OPx1kguuCfEHr2+LTpBvv8+fpT5ASEoika2VfkGkjPmvfUTa2zT9PxD7Xphz/jSL9EGctqOuFwaCmdw65b1W7tOdd5iGI+j+VIRKNV1BOE3f0oMTEkrlWbqlrQwmLdjg4zLY2EQpsAuhPmxjTOoe3eeUh5xAFWOPEgY0c8UQkyYpMTCbPAXv00PJDceBweIJl+r3HkZ8xi1vGMQgUEr2zVock+tt3xEKUgWT8eLVRV03vrnbpDgA6AAT6cZROlUTJarRIESpfJnf8GeML/0TraOSldioQyuwHo+XpwxVMpiAP0umVKHwjPOzjFGGRZ+9ON7QJeXqWdQZLSwS5GQU3lSNi5nL0SJie/FEgnBEdKT3URfNEfWBn9FYvTkm4wWq0EBl1F4WtKWg2cQ+Jzdam9s4w=';const _IH='1c54dcbd820142f51c8cedc37ffbc606ed6fab1b858326d5ae84908c132979ed';let _src;

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
