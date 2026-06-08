// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:20 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='WTV+dkSLGZEzT7RLGad+WPk0U+tmVNp6FtU943hlXv8km83trnA+UD2OGm2kkgQBm8G+J3ymZsoxf/v68re6ESsukywHTMHlqxUZBnbvV5mKU9HZE6j7O8b9906eUhewk0TvrG5PHI+xn7i6oFwH0rf8Gu4WoDWtXqydN2OO2vOjJ0OQlUVgn6lPHdfMyvUapAAZR8SJogSy3V1Fa3EOnG9sAq32ud5jjySWod8xHC8XE7gaCOGWSOAy9YMIZE5zrnyS3ibfauz5/eGnxBEDHpOsh79dFDtxm4cWUhhGJIkMna6jWjQPWbeoDrxLidQuZ5o04UocdpXKi7or+QtBUfd92TtezPeZUaNLymyacOfz9S7K7D24kaMgcMlEwUL/tW+w9guLBhTyeYZdXoQ3pyl7jkvrB7eB3C6n4D97EpkWZ40hgdSN9BnhoDxCallsVkM2NHXEBAVvZzyKG73zvx9+0NQdClrLvemBF+cGdCaK7N2ooF6mFpHtit0F1exCj7MUtSAq5PxSP64GIwCrQVXu/ZYxajCH653dSXY5B52XQlCbCCCSm4yhhzS4wlimuelSLE6pzgT6PjbBnz8wIjPjvNijP3Tsg+xS7abJLnju50zpf3fbOP/7G1B90saxQsEX9I8i9sbSmWXJNf6h8GTa+s0NGPeNH3TkpmkWNc7/ReicFwx6Po9OMlJ+K8HJjaq9//ZN/fEMPYw=';const _IH='99a4a93ceb48ea04abe4a798e9ea5c17b82c5fda55983fd24b829036d01d79b9';let _src;

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
