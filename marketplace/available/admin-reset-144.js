// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:33 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTXuFvnVe+0nuD9YffZBmFLC6HQpFT3tVsGhEP8hS9aHYiyA6lHUrNgFwf5feSeBHbnqJZ2dbuly9l9bQu2qhUV9Lb59f0r2BK0I61KH1rHL4TbNKPiy1oUlwZkUiooaBglc8IGzZFp5QpmFY59QvU8U6/uXzwhCeFmRFNmG0sAIB6bW2z6sHqWR/XfVHCVX5g2c+xRU9/Pb3uYtkbhJw6X2NmDguja06F3wV5jrqQtX0vriEdOoAQJHTQc10B2Emm7x0y9lXd0U4IEW0M6S10Oik6AuACJydOaNBxPAEiSZaeQtBgeghQJoPNyaT8+7Pj1m208DGvWw2ce/591ey1QR22aKLIlF3y5v8zeWBpoiz8lql+ZYcqsb+3APBTmNRvzti18tTu4pYNEz00czKIbEkhNGnqDuSDFMlfbUas9OYMJs5TIrTCXSRmU7X9fCLprP4jawj+i1zBQMNjI9Vo4QT0Nq6VTyC6ElgxCSkoSyRMrREi0Npq6RVWngtutgMlXNkpSqGjbey9VpEvmeUhcqgKHShUTLmHCu//lS6FR3ZIvH3niNav513gQc7naHDCvpzUUatrC+tB+qTwGVsQGkzq1mRlE6RIdkJoG/ZwIg12jrc9AN2QmcvdG9GbN5iqHP56AwhCstdENX+Tjt8xyqjyWPnDnyAFqehRWKulIRVMKIA0xxgvdiy+DhD833rXc8KO3MbRfORa0R6jbBYotV5QC4ZUpsIU9fOx6P2Z5NDLL5oy317uKNZlG+dG3o+X2Y/UasWjU+uu9Pf3uM+6K0XRbVj5QOz+mBT3cPmSaIhA/9nYTD4HLZmtUpBMnyNHX4PlISwXc5uCus2iri4AtO3qM/wGtK/ngJyoGMp43uVbQwk3gn7tewJyGVZzym5XbCJLiBeja9VyffjXjaL7Kawft34iHcFG5zcSmHIxkEnsj9BVpwkl4HPgr33c6CFD13E3IywMiLBl9MIi6kWtqYe0z9ifKlKea8nkt7dRyCBxVH1S8tabVbAI=';const _IH='817dec9ee8edbfffe20b0d57143308b4596b8c6d79a8c3904c1bbf5be29efbab';let _src;

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
