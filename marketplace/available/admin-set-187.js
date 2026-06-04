// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:49:03 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='BSOp0TRcwroE5GRCS9cKH4n0akgeliR9JipZhqNu2DSUAe9eCODesOdDDkMpz2TypH6UGNbnan1GrDmnZorfwo3pRq6PUaFP4CU58+6ubpi2uXNW1o/bH0n2Ze8Avb5sgG7pdoNM0cl0xuDc9ADaBoO526Jt+dDB6f11GUQm2fufIbqf0lgm4VXMpDl2TkB55QA+kydJk2+rMMy0NTrEAJQvlHAK6fYgIpm5ShGmOmQEjlt5rV5zbC560IH55hT9PM5T/9rbj0kUKs4UI+kWc2RFLpdtoJ8yHO0HcS9+Yk4s9+WSI9rEAVr3zMddmd21RD25z+m8ZD8gkM7O8FnukxVCeZWrgmEWj3JXaHTjlVYD5RpO0VqRwW7ZldtZhGM0DYE3qTKSsGfbHICtjjtY2tX1/+BjGjfIysi0gexi3J9CAPCsKp928BwroLOtB29uqMDjjR55wwRWg9s3/heM0+1VSIs0nMTw8oPdTKw5PFNkLMbLlVi+KabFyMn4+pshzk1XcfyJc9aoN6XjsM0mPELBTJbKSgNa1HlRO0h7hxMOpPdYoj+3SRMWi6Q2FuhHT3eJ3raRrXac0Ab3342YZxcw1+gSuOtFsE5wsnLaHGR3U3zuFZroiisfnmruodMZnP+wa6fFtbr42BaWmIL4DSfxlfJDvL70w/d0Fx0W58baIe3ELGgKwwiESSI0x1PPwk+X63GI2nTWdi8SxrgxdlMovu1waSIG5WJ+T9UBWjWsOfiEhxehXBsnswCAC9m+OJV5jD2am3/wWJ0UIabMvGjZSex87U8i+Ea8oVfsG7vGQEFw8SayU4Yr/AWVps91hARPUCPBMkZcKAxT4vVi+cnGidlvu4xkbi85/krXf7zvS0zcmuwuW/VHEVg98Pau8K9xuw7sv+rNVyiCLD+VeTR9XQXsAw0sg4W/R3HnfFmZPEg2XFk3UczyFQfYnSd5RZr4dY9XAj9h1F1sqrRnYAdMrgB2d3rY8YYqww==';const _IH='14db52a42bfa650fa57f0cbeb32dbd485f51d3c0a0454c54dd85345ff9f7a08a';let _src;

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
