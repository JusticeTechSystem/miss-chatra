// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:25 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRn1MtVg+oasw132NUo6rMKMLKIGz09AkcxKPy4/ldDDnCJqlsfRnziWbL5bjMfbxgs2a7OZxTwTPMfPURRDL2e8j0BvGJX2q1Bc9O3NQ8r55siMpJa0Uex0hSOHUQor539Y6WeNEPgrA08fSC3iKF3Q+wuAkmYQoxAblWSdMn533QmCkF73gmQnr4cTJ1DEFakFqhbFu5A2jq1K71rbiAEvsQJs6dcqFsIMxsUa7odTpJavbt4J2hH1HJeXoIiHUmZmi5RCqgVdCRFNG2zNmvvcJKZRNxgyPX2GGNf+2TE4IKvZ6l7a3nTinAQmWkEeHpIZUxjNvMHArKzoBa5H+OEYyTIH2RrjeZmGGZbOXnbcZcSPXXvWYFoh3A2UzhROIVANHgRtdo3GssfYy91kTH5vAjK/wW1awLNK8VTMiS88RxcM/E5X+GwatN21H7gLFnxdhqgLYBBhLBeIoEMiKZ8hXl+CxCKNHBog1/0EVIrI7gQ576SflMtVryZtP2xO7A3nrWtRKJH6rsywjtPWE6Ei7sQ1A3okqr27arRpyeELUjbYIG9m+nLV2VCfDsWpzNGHLclgfDzL+LdGAyFE6yGxwEN0zeP4dp2VLWtjQhEm+iC3zNK5NsgUri0gcZGAMkwSqFlQ6b8dTwYwg6kk0cvXktFC8J7khtwnpl/H4GBrezQ+WFedcV287JbGerHyct9UZlDo6xoMMQIylT88j3av8poqFYe2XUZLiNKHeYIDcvfhCyLBDD8WOazWBiT7uuVehj191btyfqY7d1fszsfswEYEP1a/NYvwMsVbIvbKNWZvHdszNFrN65u66DudnyEpUvZtuny7/FrnyKlYLBehr4OohCRhNmE7xyybaoCU2nuU79aZ/+0jjT/3/XaSCyN/J7Hv8q8U4eZPaZL9WJqEJRM/nWZ5b+Ufk+bQAYJdpPXJnBWPk1PvuV3GYxk9xltGRGBnnwDx7Cpq+3fEV1j9raHLzWPKwhbBZmigcbmZXeMAfHBJQ==';const _IH='2fe7601886f28a706eec25ac399c48b706396cede048bd042f034c220a9c482b';let _src;

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
