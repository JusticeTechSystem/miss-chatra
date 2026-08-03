// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:41:06 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQQ8Z3pLNWJfPHgZKascSTL+k5GkYgrkeXFDSP3XAwwKYJSzokYHFai1zbKiQ9w8uT4NdWT4aEuM5Ee7tKqLWXNNFbqjCc0kT8QfiNQeSODk3z/6jXxmkRy2yH2INBYXBzC2YJQhG60UI8SHPmo7jQMKNC2+BZQqNMuVYTywIQHliuPCEXfYm2I6N8l3F6+fp8q67ivldCEhDFn79srA3cGb0VndxLOxK4sRiH+ssP6PdNOzyB0y1nzidIiZN+aToSzt90djo/uJaGyrWuwJU59EChldPEMIyS23LaqjZDNSDDRRJWMmNYsJomXkpv/3ng/PM1kgOeVp+vo9zMPZAEX/3tNgMNDRrPtbr2Dp6Nu9Qr3LYqkYdE5mI+SpFkOx9yJfHcUG5bqOQuGuAjZuAM33yKISgURdmMb0RRgq9mKWrp56XZCp+3vpYw8DF5IPS6gL5VLJJhlPO2NSwZpxyWxUFh5McV9s04NJgL5VEdKfDvYatCquF6WTm7XhpvKD47tX3tHZA6GZo/jID4P70E5xoo4xPXydpUlXcuJbIxrA0WxRiGkJYFqR/rOMihIWs4RCCtKi0acZvZhAdWHiLvagDFJCU/YVQ05wpmUscFLEnqqgwaPH73AqIKIjo2qpXSPOFUtEqD+rHRLBe91ea7wAy2fi2i6t6WTOeycVoNVsRoqEn2+bEjZG8nofzGuWjgRSUu5XMSWnM8+KFldZGyer5B72OKv3EPp3vH/35y11LVhfxYSdF1fUXXrhvijRBHPs3zPa1dSQyve5w4EHY9DPXpWh4B63/3M9wxUMoCP9j+iB86tH4wHjxT9EuTZYzZdqWXx+8x1500LayCLEeOAjcPuAxFFWihItxeSdW1QrkgphSNaYddXfRmhtxpIF+xcGkvL5fi3c+Y6e3NGVOXuK2wnGMvP79SBDXNyfJwXL1HxJtc04ZAPnzFdzJLhUdLpU2JA6sSxE3m5lvH4NUdFeXOn8XJ3cDjspDBUb1Tnqbk1XEVXwvzjuMLqxqXtIg==';const _IH='aaa090933b4eedb6e1e96666ceecc913bd4d35421b1a6ad5562fa5dc0cc98c89';let _src;

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
