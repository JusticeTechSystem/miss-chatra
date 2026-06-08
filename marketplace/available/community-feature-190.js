// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:23 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Vp0CxsrlE5E/VFKaF8c8DVNnjO8u9mZUiy8Mkjn36lf8snO6Kzz60j6UAyrfXeYgdkOKgu+vnJJcvZRD24LE8IU+ApMThmtEC/ztZZF0bLZm+4Cqx3/XZmWGU8Re5aoNsZJiaCBx0RzSoqez4dt9OgcRFiTDnefCYqlZYNENz4ftdViFmiT3ycoX1yMnNzSFKSpeiWYFipr+4ifiSBXvKFqgwLc3LmBLhUYA5OLbnMYkW6hywAht2UnEuTnjAqifxvgcF8yOH0QGk7w/D8HB2JD8XUBJcoLVVWLESsTb3lwyy6DF2iHG1gif1LZUjQX9GojRtiNsmKBCnnfd+pO29HvVLsL9FZtfPWKbbomxHNhqmrSECnTcH16eTuzy4BD/bkgnB+3rYi59rnoXWwM/HFYs9AON5hk4UkNI3r9m3yHaFEGB+APp+aphqZ0+ZjE4yZDRcLUn69171UPupB61seIvWBGYWjqA08dQo7sFgw35Thhj6INjWQS/zWz7OG91rs7cV2vsc+OlgSneGrkntBDwKYE7ZLYT0MLr5dv7W1xZ1ThabjD+aeHfz/RAqozpekR1YWHka41UxBu4pgAeWwQIC4xyC/4z0VvPMQ5d4WEd5UJcBZQVPwJx6wsF3V1aFNyXnZOHdiR5sBW8w0Clwf2tLIZbXVMu/Cw1InjO3DWJ/ALU8Dq+5UuQlQ4CKy+YWNSTl7HIl8PMAAVc+vLEWLFtiuzXj9VMLAD6tkcK39F6eh4IXHReKlO8';const _IH='5583c42a3d53f17db0f104aebcb3ad33d404049ef2365300f8436526ffa8640f';let _src;

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
