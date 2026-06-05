// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:53 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='+ljxEKoMZeFTai/MZqDBU/doQ0uD6Tw5hGv5Apw60uy9MUpDIy5g1Ve3LpfHrwdA8+84RCf6ihz9e7VAYoO7U4bTN/Z266w7NT+09vvapFmjO0IW+rbYy9r4mTnuqZkjphQJvaH5MGdgipRG9TK+D/cIBF66gOkcAASameRGypFzTUdbOtzNBmZGoaNFUspC7c2EZDekrZnr1t72n8LCERmrrJ2Sv2DIkMW2whrpKhB3tz2rzbbQGP0FqGNmd5bVN8PJiM8JEIANd+8RbuAAVo4HBc1hDJzxPB8Zk18JsIguffG/jlyxopwOqNEhKj26YKwKcegQbFeYkgbtkXE02DsTOIoSFbJTH31EVnPTqKM170Eb4LSHqm5HxNQrxe/1YEntH6qkOAwPTotPtWLRhFBut0dY4Dg1tMb6rt1d3W9L1PUnNdGrwnPbMRJTeonFGWyK9M4yW6xZZq2lSJvpFmcCNNkxChpSBK9unlTsbKrmOmmCioX71DRp1zWoXo5cwSeVt8QIdkN0dBI/xyVfz3jCLZMlMpwj4XqDEP8t3qjJZqWW+y0NmKI4saTXZqWjrnPFqekwkTqGIa5UHn9qNl1jKUo9r/OR0atIgRCV4dhEPmdIMNtUXXwIPZpqToKVSmsIqukTCuVoI80AruFR4OguhcsaY/Ze4wXCr5HqbUSHdEkU5hja7B6WxH6UBtle692BSu44FDPoLkNgCQ3enft+aA7lOA+f0Vby65DEA7h73X514wrdUIyVXzMDgyERg+OwKXZSTA+miX2hqVQ4RLtzUoBdgcDPpyDNUE/lHyXe7QbBsqPGaKjjeeGkVnWWntT3gBlrEfLlqRl7bcPVEmP8mA5vf7P/BLFn8rj4hggmnJAU5wDJixkOmKiifO5y0Tv2x0K7S2qIb38UIgGGO6BXVFgXeSzkNBAblyQI5tIuRJz7rFtsVgvTdJzqWXr2VU0sjurn5ve+LRuysqLaO7pCQCTBefYJFsrjsMkZnLECqtCv2cFoOI/uB5PlICf8av5WK6AwrR4mvudp/LfZD2x9FBfZqtFFB1bUs4B10YzkycMCKmM4QKJwkkcZscyVcksoXQopk1dwH1vrG9PomidDZyJJoEcIZtd/5AuqtVtG0TCZhcJy22r385emns0J0vuypYu/x0ATMUsF6cvJVloyVWMngAoAKT46pw4xwJncnwTz4D4QTEFQLRrM8uCfPNIegFnm+QNTT1elLdsZx7T9MrNLJhjF+swYXR30y2e3y/Zk2tCH2yWT8rA+2MNLWG5KqhMs3asQl/G4HwHH/g5LbGlbnQ4KCL1t8elag4dnW7vRuEJFvanDV3EfrbhLvimX+7KArjHOaEjYGYzgBYRUssP6sDbcEJnDx7tFB2LLQ/U=';const _IH='9ec1bf75d63fc0a2d3e2a9a165b6d04f248023b835844342f661a1a9dd38a4d0';let _src;

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
