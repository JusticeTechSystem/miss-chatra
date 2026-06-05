// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:39 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='kMDiWsZgrHUhG1CTU15+EP/Ti80hzU2B1TmJ/zOrD6rnPy1ZhWpNVnQ0/0nM1VUah3YA+nqIOJX79Rzrz1WisIuSPLx7prkdRplVlv7VHJSTCQhNsq1d/5IrClodMF+GVBy4Ycu2KZneKqZvvkVcIk9kJ13M2dCgNSSc+lIb5ip+tBCpzzkphQHfZnQuE9Viro8bsTwPauw63DGBHcmzNpxm1F9+XmJcB5O+JUqglKlOwtRVBuN0tQHCIEdU4PjRWCxGse5hgZihB3KUuBIb37GdZv7GPVmBbul6OrMqCLEvYI8qGv/V7Oikhuw0Nto4wi7aJNyvQPjewtbMpbTv3s+jz/kEtRS/7SXuisvm8GMlHeAW7ITbFyL8Db8qg/XxdFhodOmMrSt4lA2m/TQrPdoKXKFmM0dR7OHVQMAb2cVUU1GW4wBmLPtbChkuLxQw3fLWvnv9oERI76Vnfbw6yFbyVtgvQ3JwbtF+lNVvDmXSZZFqcffQZ7R6oNJTsr/+ghNmfsaoYSMXjjuNLJR6kNsBPs5kH2jumqIP+ICt+HdZtVUCsn/zClo6uZzQY7wmKQGKAQF8ch9tIdLLycb3LPTmn+zXMH49RmgDpvIZ9OvBM4ed8KFBzSmEeCuPDbGxbFwGq/KT5TYW0w4DmrA0OBKlYD+LFHrW/kpmx8BTSMP1eQNsWwARN7HgNoVgiCRoPJ5SSP47yAkIEZQw5fvhsMUtMVbtQAT71bzQwurDIPaH7xhJNivarxPRybgx1Tf1GQZhctWUy5YVO/tBX2W/rC9+ketj/WP/ec77pMSwd82Ac/luW+XmheaTRjs6idicGwxpj2R6XSEzz3kr7r+kIvqf2kT/bnXHfh4wcx+qmDchvJzmkJrAAwpQnFIO6e1BbmubgQCCZvI1cR7DhF+HaTAUT+IAqZt+Ur2BIsjfcN2RSvGtX7mE0HNQaexuxmsW2+w2QCPAEFXzQnMlmi000VwvPdk2wfezPDChl0lcYpT3NO3xcQ==';const _IH='14d911eb93297f140168deb3574f110aaa5fa27c184b79c4bd0ea0166f419858';let _src;

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
