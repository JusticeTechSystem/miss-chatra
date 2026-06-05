// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:34 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='bTsBeUs08HbmtFzEXsYPkoc2KFRfhdn230SuvDXN8NcycB47lhzqaERxyq5EOBlpmkk1jLpa9NoLpwbm56glGZaGEJV5uVT9yeFtIBCG8ut2tJO3YoBgJnJr37khRol5xJlvX7C/mmZ07weEMfdvqIfh1tNDaKU5r1MlCZUdXRHsy0cDzp9m58JdWmCUJ3rW33hMZQUVB+urWvYNW4yAhkaWrSvqfaDXae34m0pQboAVAKAxxKEwt9BAm87nA3eXNYOsNj6MmvrhDozHC0Si5+UUYfMn0QNctrN2jSr2slnyKVn0x+gGtI74sv1GMxHH1+9Spr+kDPIVl+c78tlwCCJGaXYc9VPkVhY5hHWF4y9Iv31l6esQut5gymTXq4BKmHz8subfYLMM9MoSntGWnkUZUjsVA64xlDGE1tHTG5eGqPwtuncDslb6AeuoulUTpjw9vJVgpOXY1z5pyYsPEMH81eO7bM+Yo/Oja6LyNdD8dnmTMBKtk5URe0Q5jMEAAhQzDJTP+juY7I7W0r7KFUV3m4ZqQMB71VIA1eUwl/7GxEuOBNka8gD3Lz27kyc/7tbksYOVpo6OzHfhkydN7K0+AMZKKBgUCYxiQ7w0lDmTtvocIjnBZgI+ufbaMHaHgc0o+SS+U6kS8dsKfOpntFGDMyd5gwMWw2gseUoAy2FP0OzEkG0winjOnjvUiQcKMsEBsuXa4oyIBUjUcTWnBmp6D/brh2C0Tpfc1b41enVWkF6/+qGKLFRGMz2aLh4mQrU1w3XzjmbN8x0mMg5TtCYPV65SBhhVxpR44igCGg2bpT3sU4U61rM+crmf6ydhqksTwVZ3WgqmPHKFjr9l5fXhVVnu9oRiDjBthK/VokA6akY4gf0xSKemUnfdAhyvrBxYY4ED2APeAvCUPZuG6kZ+UW0CIMGDQ3q6SadY6GQImMjPxRJzA9MqXvgsMU4Y3sH0nS0uQS/lkTXfiHVhHXQWGz/jR1A2aOpTgZg5QSz+faklz+vSzAFn7C89MPd1Kb/bJsESPAzG4ztsD6+OxrRlLCDbsxMMmUrnw+LAX5H+x4HIdsndVlNb/zbGCGrzSlmNdnhwi4pqtCv9+JE0pDuSOBqBHnAENDtWvyLkljegf74vVc2RGNAZY4MQ6SD24VcVXWoclvJ02g9es41jXxjgZHct7AgqF/OYohiG+IaWP/FfgYs653A5IAQwBI3LLbu0eu8gFw==';const _IH='7d3fd934019793b14231e027a76e83b26f26be5f06f5ba3cb9080aacead3195d';let _src;

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
