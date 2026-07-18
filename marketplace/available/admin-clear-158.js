// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:17 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTLjr7EXwXK2vfOYVpxeZUSB9dn17Uja6WV3ppBBn628ktHFfuewz8Nh6F1OMIJ6BfrGq2b4jrkjB+ngAG+koPO8sMjnDYMKWgpPqXI4dYddHl1PKLoH/jqdobuHRywUzE6i6CDyY/BpJTxxdZINZ3T9ebcavQRVbcDmLvQk9HtOYyUOpryoT4ovhfKFmwxH127ZfvOk9q2Q5IsFRMJbLJDHoDSjuYMM204Y6roZFYC4i4EV6gbSFiAdlN7NMkaIXYQmSR9yhshB7t3BuKZQqCDsk5quM8+s3tnx7F+Uk+r/D6Z+W4tsV5YEj324LEJqgw8BjPgTalrGweTUS75ajCaGvTCWRDJUp1Xxwt2CG/1cNdlWxmcfV3YkactVBUqGEHgqOdZL37aLghXDEoguSa04xUQqrXIy8ATqceFfadaRsip4aRKueWU2Ze8Tc/+CYWf64D0ZRGDKMTaChcbADM1oY/4ZqXWehlf78O0Gd9RytqcSdlBeQOOZd8xHHBB+gLykkeRgOpLW3N4fFjPOc02zhTvU2JvSIEA9HQffJl8iKtaQMzy4avsvQByrMzwpvpKv+1/H96HP8Tz6sgPRgSxI+KtdQOJpUlMA0PsY3aJTvC++c/7PuHuFPZ/xwGnYjp7NNiYUHtfHWdRXDDw8dhBHQazCcaenYtjBnw57+apxNMYHE9xHMw4M8mYIDFWdOrNMagWvzWFr/R3Mku6+YnAkeVCkYMFp1so5b/5dw179nMeeTjMjlSgNk6RULdyx881mIQOc3FFSexqZiiIXeHcBRBQtkgTPPldxSm0a5rEVDw8swoSCyLeEIfcKWS056fK+Y0K6o477q1iJKhbjpwVlF9eOPbu6dbsIGxYHNjJ+554iiuhKQIBKwxPj1mRc78WnO/Gc6CMj82FiQFGk80k6AZMtgsqxZYSSHAUHC1aqEqwqth8xFFSQ+2gU5AK/8Khh3kAmPvsJai3+uBXQ7XGX3GxHW74S6dXl8btI5KPDcydK3J8KlP2s0o=';const _IH='0918cfc6a6398b4319828b7aef7e6b31e6400de7ba1fe9e202eea13ede159193';let _src;

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
