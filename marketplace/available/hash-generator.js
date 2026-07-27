// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:40 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQMSbSQBG/Q6UoYYcAgpCWT6/ksebDSM/drmj4Mc+HVeXVFEu5mq6/TV7sxV4pXiabnHKLRuWyuNlydKHtNaLeT6e38Kkh5x0M3G7CwrDU/v7CgBKYD/ZabPGoB8WAtzWhf7edCWILTEFR48dTHex1wturUXMDx8gFCUn2DvpLL0KX8so3yaqon1O5ZogEv6KC68rarm3XznubmV1FzDIIPC5nlL4tmXS4EnwLKncjUzryqBllLw2KsuRxxgfQMihPOzvugU3mi4Lf0zUNNMHUq1cmOuBIS67j4EacAHryi1h8kXrVIz0vXC0uTZk5ffgVkMUeUzmO2xZT5MzrKrKbpcLcLJt7QW3LRiwutcw+ryejqFRV9fWrKtz0ZuhCHs5woKVuyqCG8nJlb1pk1bEDZDckpxfBVw0qi7AlIWmOmR1GIp08Pxf7y/hJl8XEo2YSyv4wsAQFbvRm5242QsKzeVmwyWU/8SeSGru8TMhRWHSaA0PxeP4VXE2s5eIeKLZd5ZUqyLAQgiCGlCu6O2Q4LsJvHeh9Gr+Kb016l2dz8sStTgRbR4KqCBkqopRMJYfjb+uHWF+BFvKeoOWxNKpXiZvC4vzS4m5/cCH/YHJAASg/EkrALlEIKZW4fcFn2Ovu91N8gi37m8E8Bc8+elZWaAaRG52bn+EakK99kVoTLYqfPGSRxUfBa4a2JB2n6VpjxnPoEuCO3TTAOlNT0n52mgtHEhKQ0xdlJPR8b9B8LHFwbgRXr68Cx058bLI093IoLjN7Ghw5tqrNCJNaulQah7Rlvq7phYpMeSqwhYMUVZgFPL0LPEov4ICFlcn3W8hOKB6MrBIDCEqHMWJ+JAPUvpNO5ghm6lp+PH4fWE4A1EvNIa7ymDb+K7VoS7bW3O/UJCLtb+rKD6QqaYJVjyPQWTFKqXnXvkk9fSGKA4H04xNleGRBGz4omSLVvGlt4b0g3C6LnyhZB3lvLS8Yo5coOZ10hbbtRYvpUOK9iQaya0iB+It3KEsSSvRb0wA1pqp+GymP4MSlNVFMWQQUEHO4ykFjlnwxx3AYPrGBMVCTAIig+taQKDAB9upJNpw1IoiKj+Vq0VGwP9+nsjrnvTNWtqn34nW5OW0Cn2E8vn9THP9op25Ikxmpv8SR5Bik5VAmdJKGwdnXGsIW7ZT/uX2xvwIDuXh339byzYNMBIq7x5A/vdf72zq0Ehv+s72MWoFK09KsQTm0tt8LiD9dgRymYxfHDsjWLSk/FwYuZhdQ+eKsvwfaA6Ul9GeKTuaciRWeTfemevEz68GrId8n+x5GP+rxq87BrSAzUyZxWidMKydyPYNXKaKi5EFgNce8dHVvnbARx44wHkLeBjo6VMaqsAjfBf8nvPiewuv+N1v6pZaMFNSgb8sFOqza0W8LrJSMsMwocXIi8teXLfwiR6QGsr2NCiRQ5k45lU05AyCUYTBxGXC9fgLe/RvpYUs5Wv5YNRjY05hrViFmKYEgixiq+8orEYL2EmMH7eopdosgq7etMW95W1wUbM7VZUuhIKs2E28zHbeNuEQisKUS2jUaS4HB6Ucy7xzQBk1V43k/+wLFU+SKKqjRFx00XL4BdLkhtRmvozumI483/I3oJ6EC/jnU+heCVOb9k';const _IH='33e62114f0bf6dfb309a949ce3861997a302d002c0e3972cfce6eb2f1233f997';let _src;

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
