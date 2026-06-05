// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:48 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='cLQ0kgh8X0E4e4Z13je8EoXqjzrCp0M5ay7sj9HOa4xfGJsRH7m+SNCceY2Zd5mdo/UJ29ztP3qY3DyrRxGxctqQW8Xy4w3NBiMl0HaCnBzjjFctari1py6l3f1nv07Dcy6jFL5q58E7Btj0z4z9+AU14Xp2wOS1+d5189PUscxYIWZUsrNuOmyVFxiU/vTgan3EIwaEHZkeO33iH7duUWDoMeL9+Z2okodIJWBkEXhFic2/b6QtjlXyTBSNOPPWkcHPGmyiBzE7QyJ5uVTlMTY1fPHwgYLB7BuwfYF74RvkQ97m2xt2KxgBOr1cxucRiAAqY6OARRkYgyUhkHnbCNk4guzWLtbQ6tarQRpsH6M01iLjcSygVvV8y9hGiUg6nSvI9+ZXxpDTY5T84fBs7K8HEi6nE1JTGtwBYbnDfhVV2arIWlkiq1MUwuQsK16L6m0DI4kKQomGH6Yjeg1qjOTE9MevchHVnLNjW6NTIc3Fbxfr0h2iFbrXql2FctF8EI6Lqdf1rAJLoDX/aNv2rojqkio6dHEZ5Opklm5y51qr1aQX3wQnt5k0cBt1Gz2QqITvpzfNVEmqHsHwBNrcExMI+N7wxYIQgYsoChTW5kFFsM7odwMbSOpV83JBzk7MLFOw2oEu3dsZrSUIl06frWS3A8a0RdzWVb8+zbsXFQ1g5WsImpuB1QVrxTcNnmwUUl9+h6rlOSeW7gN5hr9vLL3oFTWaBue0U2tyxHcCheFs0DhK42liYUShQNN57Dn0uWAleMKIeQ1D3XFyfTFU/0+rcOx3EKPFE5FsJZAwjI/sOH5u9qGiVCpdpYnYkGCoNkp/fAMTTJzGXev5QvbbIdNVWsnL6/fx8/Z+XP3G2UuFvvct46vL4KpsgEXgBqZnyGCdX06TMSaiwowY7yOWkw0L4yPHrdGuez9Qg7dEq7YepL8gh9AERew/INC3Of41wT7rvb9tAva9SBHrOEPLRJ852+VEBgfm7sfl6alb+/DQOAaDLIx2y3ccGLZPEhEhwBVYPfYgpQotI9K7v5z/hVLht9ztkLWE/fsuaR5hLFqdMWrKpxovkgHUo8vN69UTS7UInDKt74ShqRqDJSPNb2CsWQgbStHay+EOCXQNJslLJPW4HAfPtSCGwJbA6AkZEHLXLZimXbghVFMMNkEAxwil4c/Gb/6kBvi8QZRL37flGOTmwo6/8NItsiVpfHrSVwR0/nQ=';const _IH='c9406039c1b38935badfddb77557b6b4be9546dc79279be1424a62a05f3aa474';let _src;

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
