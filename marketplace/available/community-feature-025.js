// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:17 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTm78eQVHovKJ0P0ls0QBf7xVXLmyjVF2uEehl4YY8L3bw2b5LA8ZTaULwNj2ht2cmdXskngXlCq+eRP5zEyjMYemmvxL4Tz7430gahOopoNtyG1mCbEZnwSn19o0ht+U2T2RpvDB7GXH7DxAddEgTiPE9MNAtYwod23Fm0Xt7eI93gYsZaSlQWAUCFuqzA9oW5WQ69agHjr9A5IxsWj74KObyOC27k2j8ZEt6DXiFbgZ1N67BZClWRCNfAMmkURKQr/A510oZpszSu8AkZ1In/6KUpCZjFY7PFb+dSkaakhyUPAqmnGda76gwjREAQqfV7xKEDt/PWyre2guok1SYfpfUzkgB3LAVuj0c0vJ139FZLhc6mr4IcBmUSEeplBClPVqYR6c95kIUs+edTdh05Tj5tpWS4u72vpRR6ZZVxDhTQgbXm3MQHKtkqycTiV0ggOEOZ06CiBCJzFHj9yB9emVpAp7MZyVUUBQ3WV4UziRtmgQNHthQ+mIQOhLPBk8vvULreP4pIx/jUmU4biMnt3uCIMKcYdcB+fNXkR/NrkJ9sogL6HzQPkdQCHA21PrSyIMqrKGs7COYRbl70pDU35o1s4n24UcRD/jpZjbZn1UKXXqWg6n8e1h8abz5vxF7mxevy13Ck9NxU75us4kVob4Gd8eSd1Q5g4dNJqVBZBkquCRFi80wLdvc1U/Vso9ohkrUlpDDfLEMo+BQpi/QFCKsUmYGH3zazy0OR4nc3epERih9hEw==';const _IH='202222f994074cabd1cb19b0812525f5ccfafae94ce3a4785c49215afe625932';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
