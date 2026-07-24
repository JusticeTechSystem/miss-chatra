// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:48:05 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQSS96PS51DAlH6Os8pwPA2Z9Ndhhi/va3RT5mk8hDgMx1V08U3U9rDTdTJO8dHSUJ8MLoLnn4bqznNUUPNwIh9L1PUz6ICoOvKzF4Q4Q9XJjhJzTAiJiNpy815p4KJ3Qnd5i9MPMns5ldV/XSAwAvH/tmUnkpR74ScSDyIcB+TFvn9zNKaTg0DieJqsXVFcNsh4Tv88tn/cxo0xb/d/odkuY8u+CewKjDb9qd1dIeMFTrC4WluYmr90Y3IyRjJe4gDSrQfZSvC3kvj7kAHuDfE/fAqeyfi9LzwxAZBK39+meAgQEIGZVSRGdEJIGpnu8Q0cc7g8kvL1yK+hVBcU4hhzk3r0Fq8O1WCKAqeYWhMqTiXDB/Qc8mL39beRSLHa2bUkfm9oz8tStiK123uROmqMkwhydqcq3/jUEYq8jB4qxgYP0VV3vH7fzxO2xtPzNHjYoOQ76gEwa8TDdVqV3WfmyFiS6AVBut8qUAc5Nf1EJv1fkKLPGEGaoU8pAt6roVrwVU+Kd8GEVjw2jFEeee6lyvInKi+9L8BQr3MLoTScutTFB7mv29GyAApvKoIl6EQju9VVrLn32sCVKP3ZZmr3L7p2Pb7ciJpqfir+2bSTr2D6GRfBIkgIfQCb2+5a7noNmcrW3LEaxBekPRqOgvjm9fiMfgE5Nuwz1PGJ2nhjOV446MEh0I9GJQvRBdxuppvwcN+Z83L6zc5RPOsGkfuMnpeYGdIPXD1wpAJ7iPsInUr3XkiZpSyD4ophDTCNE5bqXJpOfu0fp/KwFjDz6g2wS0wgUbBzQWevhS/86Qwb11pZGXSO8i/4X2tjavlbyzsr40Tcwz15k5a7p98mkK8CiobqV9IL6dg2gq7g6rVdk1jz4LJlIYAZlFSJtDiuY/vcTC2J2MIwKJAUpLnuV76Xqoe2Rbs1qtBrBKhSFwYkNIGelxcOhAtvJT07mglXJ86tcFHzVvUf56pLLCa/iio7JSK4gSbkFMTiwmgERstI85Lrs21flnA5kXXrUbrsbsWvoFWU3OIiQ==';const _IH='2edce1554761b62c5d63624f440e37f8cc1676d080c0742835694f7863dbb6b8';let _src;

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
