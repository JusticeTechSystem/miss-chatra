// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:47:28 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Cc8f3Gu83j8K9iQ2jPDG2PSnPXMsFV9IiHzxOJo4tvRdZOwBTDCGCjBhn0uscEf52TagiCq22WdgqhMydBkkBZ5j/SCTBuGH4hIKowbVpzUSt0M317RiwLDMiBOwsGLnGEAWlVy5YBxLW7dxyd2FH8eB6E4zJG5WpNK1/Nw5hCIRSUC/uYfE8CC3CHxmxbiTJBANjcqrzIF+9iM85sZReqTGL7jVD37FqBsYz64FH23s2AgjEw/S8w2Zzvc6SO+3JSGJ5wCBbR4Dpejgvm6jH8SsXCSr7KmLtlA4m0kL0W01MQOtUUyJSWvy9lClDx1CE/3lVKBl5Ge7feu9RmUYttFiLEm5nIxqzzMiIdDtpvRQ0VtOwnpmyJ/pOVNfw2S072LSTorxSOwFuprAp6UxE9+C2SNZcrNr7sRoifu8KCm+ceJyifyrJT3ghB79wJ4aQODQkZE/EAPe3pAJcSObJLX4m+utbBYvA2JGRytzz9jmCLvlkSBmo/g48mAXYmJeBoF+woFCebfkGMQutT9GwW8qRmOi9ckkzZPGI5S4Ci1Bxt2yA3IkZF6AlTQuK6mcY4QPk0fLJsEVzk/FxalYCQBTSH7lc5k+aqab1HkqBppD1u8p7odmb2DPvy6GIqJ0JMAr8wF5F7h+PanBtd+Z/NMP934dX5FuHwvmwM+mvoSVze0kBG5I+EJgUHVCs9lGauQcNRrkF9DxoqNW6jnLRn3NnuyjpvHJjubr/D/9iH5o/whgUFNtSvS8J4GLYcaBbY3Id8B44qTJ8W6u7kwTpvDDX3fhD8uSr4MP1Ms/Ttu6lgW6mx73qzktQABNSD9PVBDRi+z0wBvxMOsAMdJ9KTYkt14xIXv/ZaRc8kFwkuBvU/BSIpLra/hRoMJWIyLzOnTh9e0YB2nKb/EDRWwjlL5h3cDYwSbifNdVK/CoaAtViGI76eB0BotURnUw8BYTjkvPNgXzmaZChicp8gAJZ2AnUI09E5FQasJM+1OJNL/BTS2Sa3X3jQ+uDPFCqPeIIwWC504X2hPx908ok23HWJ7FoPxYluF8kiDKtRXtbnKe7RaRA/KjeYc50FUvITHGmKn0vTpQxXVd1didWouC2J9HIb/RhbiEU7NQEtwjwNsGxq7QxAk4dBsN1SM4SMStZ0px+RZeS9OpqbePVHYx3hEe7qzVusGWhSMAc+kpNZJSczh9wA6RgVE8qz7KxKbR4xMyNn1JsiLmBhX7lOhsdhdc5pttYMVRvdwBZ3Ky/+GXi9vxRagvLfX+Mno9Go6Hgw==';const _IH='bf71ee97f516115b1cde7dda02d520da33acc539a349e88392d8740a8dae03b0';let _src;

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
