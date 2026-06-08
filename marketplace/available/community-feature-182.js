// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:33 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ipHdVFZPj8wqvxTorwSpsIg96ffD88yRxhI1FNRYe3KXj0REh5Q/sL8tQQKRRLVCWP3seVImW/OgGx0Ukhtb0mK4Vnn7XSGseHUXh/FiGwd6jGQMWQXgWLG/MbEeCS74dIp/Xhul5DeCxYVamo0+mfUm0x2StjPnb5Uh4l0k100UOJ+X1cXhv0yrV45oflTFylY7lVHOyxeojpZq/CxSjr0HdNNvIf4awqpte/BPTZsHl2aDnk7GNx2DLshnokdR3KjeYgKEAD8p6Dk7/FL3MexIr6jp3SxqlEDwgJemyiRcEXRvrg2a4bLwB6df3FbZk2DOSlPc5BRrwAbT/p1vZThdBCG55+jC2jATOArjZG6vf1lweZQYcAbkepqHbBluNVUJ4kRasS6+Fu0JWcmSFKfqLiWMxKU8fu4NPfoj+iZNC194VLdXPyMyXpPdwfYQB0d9/57FP5IhtFmcNy8PllW2nuJNGNi8Vtzt2t3/Hgv0/77ZB7Xd21veVB0NgsjkiA51c3esnq3zpS+rYPy7K3utm7bHPwpgQOLImN6GI4gx95yJ+7Tu6x9KRa9VMW103x2jDHxq6ouVwUHvjVsNoFlFap2OvbG5f49PPiX/dZO7h1c8QHsNO7SyKCa+fyryVXA/lr4VEs3oX1obc6uxfEwd1DHjJ2Rsju//wZ+osBmC1LksMY5zpjpxfNbPuRyFNiW+CP3ajFsrq+BcYAmajEIiFNeNqgoi48TptPGpAuQUgc8=';const _IH='931c34dbd7c28471b04ea1c0d0d1f15ec6a3a506f1e0f66616b19c52cffe167a';let _src;

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
