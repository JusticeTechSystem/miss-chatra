// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:39 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjT8+FSMm0bXJ/WJMXB71fi+fSBYtpaUkcD6EQJmXoAUpaD+/yGGF7ZJT0JG3VzCjRV4u0pwDrRNry9YURaWTX0VLzVDOehbEw4BmU4KQPoLH1glJCk2Z47i4gGEDzmSRfKqOIo+m0BGhIjP8xI7BDKqBYqxc4AmPXkcnSxcw91QkbDLKERSOHczXRqU0S/DsloQZu1HtsUmThnH9FLhZHtnOKOvawPLJGeBqXQ8i7IPgOINNTsExrXULpm3zXGVJTKuRpmLJ37/XGTWwOFYdHbH1ovLGSUKjPK6++0biDxfosOXaj9HP0n78hveBa0Wd92dSH2NEuzWARDKLEVaIfihJtEqJmB21td6f5SJJ/iuVRkLJwstD/Hw93fNbBRHK8V6rpL6heKWHVP6mmqaMeI5KSsH2llXoNJ4A6P3HtkrdiKa8KIzPNBgueivbrWz1YDqu1AWSjhqG+pc7/WMLdF8WVg4u759KuxAD7emJWE79aA4dD86CkPKTzdH+nMIxFf36o2XtmCOd1j9uVJmCDDrbe/VjLBeoO2LTNQqXWl3Z7Ehod95pHfF7J80oh0oBm6LzayXV2HHzh74PhHtoZIUBId/bD/9SC8Qkufhjkka6gEkQG2PFazdh10Qedk8WrCv/a5t4mCYX3HpepbIkWqNsUY11okeD8IrxznZdEqpm27VFQG/oB/xGR5Fx1h+8ADG4UZ3HqqYTHnNaqQxNt+lQhrk3Y9RHdTuwsFUd1qbQj3DOkt5ehwL8DdlKRBhUtBUhDHPMLQRLPkucy86FJ2zziZN89XUb+iVAQiTzlRD5t+BMSe7ZMf+k1QN9GlzfeRdLBmXFZuffu+HcM4rQFhzcNS+/G40Sxcb/6ddgW6qcjIW/rn3JjS6QbDa+4H6vt4KQc2uKT2aPL85Oh6X42K4T2exuWliIgez9KS+JwXPOUeILJmc1r7meG2xQdIU7FPSTh9DjAQejNHZSR66FEs3uoP8kXTyYj9edrvI4sfnrEIl3dYMo2cB';const _IH='122429581de3e742d51f84d747f1869b543031077021d3db7cac81e2023441f8';let _src;

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
