// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:40 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSx6/1d6/pAz2g3ML9yRsaVgEMMspqXs2CKK5WASH2mJEg/RwUWcd7EHLvM4H2EGk3yPaC+m32KWIlKSZZ3eP8fk4kkncnl2LjK4IZQYL/uNgiL5k98ckdh6ay/EGvyjPvwKu3oOWSNZud8OKBbvadrAmLoYC0xLvsiSSmyE3GXJ3uWHAp8ZMj2j+uCxm3YqbmOppPFGCmi3ix7DGxAkHOm0OfqiEwFXGcB8U5UDX7RVOCEMKYhfIuMnPQBf/VMI8xhdlWevj6XmBsOFOSsho0S9bxMtB2hp3VDHKvNUTqke8j9YCDmEDvQOt0yNrP22mPg+l0nXr2GbgyFCCNlhhqTq9pKPvcvuLOHvpOebSYAaGFa7WFXhSLPK/Yj+qcD8yMM9FhmE+XzSxXxMeQPPBTG7FbB8LUYCce3CIdbkWrVV+TZLoJ9NWQCQPnAe/CDqsoVv0ajyyjAgM12n5ZcSDFIOJ21syfisRXFoehRFE1oZipVGKPpIE9pw2ktpmj0op8hwG1eO0jGgZ2nNMwoQgGMQmeRmyjXz4Hs0Uqn5DdHu0QkOpco9Xm622Fy7HUx6mBiN3m7dNX7FRXK1HikgEVdTr0kFg8Bda3LQbT/z3uz9WNcrEIDUPw7IR5ZzEsKNdTvGyJA9L+tRvn3pq4S+AmVq0wfMIqdpvmmExLNxuxyXjgDiOgrOfuL9viTd9i1NtfC55kdq+Mvkb7M3HyYS1hgIagp6bVqgsoD2vhPuhHH5TBr4SPb3Q==';const _IH='3cfa8f5522875582572d31e4b5a9db3ef72cf9148d94c0b260fc5700678d0c82';let _src;

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
