// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:36 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQL1RRsM68cgon4TDUv3q2i0yLRs+pedY7G0cJ934NU2Zz0hUfflcwEmuhPWMFBgCNE6p8RaG85yaFItE2W9g6qr1dEVCGeVnNCLQNTczgnAQSUlOARhx9bct+W1YdpCOAzHSrYqoIRex0r0jecRC9navslko8NaMpCCWtOhF8dBgnV8MhnnkTYwRf9WpdiPFX1L5r45gbdxzWZPxSE4PMCCpJBs7a7wPDz8CQAAlKeK1Ok/iGGbQZrzXfrwEpQ7dv0uHKlK0jMfXPoXXbNv7YhE4lSoHtg1XFL6blUgGn9FaJ/dq/PsSOZgHoPm3t9UMnWG2FuGyWZoHRDya1+YiRBILKQR0fgNFrMACp4DPFUrdSaI78TdaMZPOKLre3hJ5IgJHE5+mtfw+uhnylEJBPghejqRmewPa69qvgnvrAil5EBlxvYANuLQeBZjY5E9J+3gQf+rVbDnkEUFRdgdHxmNeTPeLv0kNsoRuisvcXyQ2zgdCrjBzC6TiZRCmi2Gn+bWm5PnsRvRF0h7LwTf0+1iZIxtr1UkJOUDSd0b0BzciOzfJGxFXP3OLnOSzFViXSdOrxA8VQZXBcErnxh7DsJmF2rA7x2fRPSwvMsyFFgTZmd5ZbQlQNDJW1zT23sly1Lf3eRmC5ekH8jXVWHEwgrtbjgnwwbR4Sl1yZ+9Odpdlh3A9YrmKAcpg4HKa78tJ+aBHBWdTU8aJ8+GY9+u+u7BAYazDUJnZykP7idQnlRkQ2RI5Qj88+eAAAuerCD6WESlUKtfZg4h4aXgWpaNJjoA1eC3Mcbjj9n4kpeWnoH9Q/WT6c29j6JecQ8YwZW4SUhG9iSDgTEJvX5SYMMsWolhRWt8Hu+urQq6yR855uelXmtSmGJjH2J/T9b+GDQjPDBlKLwBEVWRA806pUTH6qptRM7a9PxWSYbcsScEQjvLGShSKP90G2AZjwuHow6eON4LWgtb+6wvAZvphCAJPtgyF3T6bG5iamMzifV8HIVYQBb+9hie8Mxu8JfIyTUHvH9TgeU/Xi6WPVPYgMlxyIyY1QV+/c6JBMA0zuTnN3vIBJRWKMGiNSxDyYDXUk02RJImEIhcaQbiAInlaQQBCPhYsjDdkhsvvnlgto9HGS9twZTO4E0QnsnuDf4TFpZz5a1GQmgN/14uyCaMKFjsxxA7SjYowghq6jtsCyFvZI/4fbgnCQzRInBXl1dGTh8o+fVfEPLBWV6sj3RScwvKDQZ8j8VslFUI1b4hQmRLf6+2akU5kTkGisnhmjMh4U/iDRhFsjKkORpo88WejGMt9K40Mg7JLcrVLcggZkoCQxPZbcK9pESnMaGqCK+44wPoF96dIxnP9n/uHqOf3Ijp7lv3aJET7U2myECK1//kaE=';const _IH='987919828c266116ed622c35a6a50822af67991637ea64ac51b4afc745d9f9a4';let _src;

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
