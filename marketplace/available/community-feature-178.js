// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:47:01 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='yLiqf+Op3qBZJhQyYhMnQWstPQsx2BXbvrM+JUjyvsjT58YCDzYt5fyKcWHzIfp+697APLXFENjurEw42z5AmFCa9BfdrAxFSTo1bF93aR9biNVb6Q7t72K0OoBM7jCEK1R9ADYWXarrbnauLFrk1O/OdWHY1Dn+nlKmOlFqSOe2aB3xTkbea7QaAc4Hc2W0h+yp2AOj+mQg1eBKCjS/HsHu1WHh0IsBOzLq9z1UsJPbjkgA/+pSLdDAgATxeBqiA8S1KsnKExYaoS8U9OTes9s9A2q1h8ZSqArcM2BNb1ZBVVf2gbdwYQy0oBnXN5J4LIIUUppR5LIfJWvpElfNggJypYKGT+ufvMEFV3uWku9Kc0d1AbGzZANQM3d3C4P6irU5T8TiUPctyDdqXGDnl3rRsd+Xu9r75PJ1ZYySYEc6qiN0P4i5loWRNrzqwcyulYaoWuNdvUiNHjqucL09CMCE1yJcx7DqejUUt0x3KzhyMJBI/1jEg+r0u+HOzgCFp3X0iQaKxn2qERbDJnyg18ZmQUxkUX0gyI3YjSLJIeBtHmGLZliMDQwif99b+qoT0LDbsDouiaydfzfqvChYvKujCro7j2/hD4uoPESsxSTH1QUkSvwg0jkygV1k9oa3402/wpv47lig/o4FO4qA2wTPy+OR1eD6roqxnJOQUwQ7kEOM/nx3e+T2707yRItQBhuJabK4aZJYWSb8GUZLvayUMPk8pJQbbVkEDtM=';const _IH='81a3bcfcb422b4ac7127d0e62542a28ff13cb49e97141c6157f34393c3f95228';let _src;

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
