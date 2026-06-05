// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:45 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='t3XYSjiobs/jg2jNnHWeJF2JHZYPESAL4113WKX17U0HH/mYVND8sujIfvEZ7uLMew8KqibrAl8BX563B6YEHZsm+vixVZHCJLRvEsZOX+YwyAwmqcKtZLuHVMgk16i2pywm7iSTcDhtfo3dR04dz2GzR7JmDichWopHvLbTWMBa2dYm2W0wXUFClp2JIcNXcXeNOKKKE77oS+5yyKeBRMmkR7cBQNZJBNe8Y8Vn0n9PMhn+4ACixWUO7gKP5J4oYNQ0UID8V2qBbCuZ8PPCcsXoxaGa4TUPhVyiAHOBhoBnPKBKDjdtqRJ8AmL0OZaHTTCzrM+wQETa7d4xDflyaXUpVt9FHpNpG6Igu2WQ7kwwM2MTiiknhVHtq1KCdKtwWebW90gpa31OL7wVk4ofCo85+cdNXU4p+ATljvxxwBVYYg/qJDgjHIw4q3lCHghAdVQjFwCu0jhJ53Luas3tdnr6AstpAL1Y8Bw/6bzwLxTZWyYNb1h01nCeQYg8uCj7K5iYrgr4Dgxq9ZZTgBPrmCWd7gDunmuqh9FERWghvO1PddNtCLg0hkcsdy4Dqo0mHqsIwC1ltZlLue8XD5PAVhOvNpV7aneoyvgADENdJIlIFkiajzRYLSBMkvHLY2UK/yVfncZEh4A9k0ZNyOF/oKvq1y7Nt57ShpNn+JOBeBCRuL+Jmzfuq/0XrwRcAQlUa5BExpjy4n3DmTtNDRp3casKqnG/eUBoh3r+xP6Hh4FMmvhFXEramT1uL1WvlDd6Eqjcrttb4/IkjZJdLNXWWOeIomaHpIAtWUufa31QVOC958mVxENh6vlHnPrn2daR+6zFiwo9IFP2erdMbsgl+QkD9vkKHYYEdqGfuGRIboAg0sbvlvORWa8NH4WM3vSZ0q2YeqTzlxc9KdZwvKEHh/1hHelGCglvV9JBY8sb+R+HJbjpn+F9OO24Iho87dKT1D55WWtX2Uqagl0xpP4W3E5VSzI+bLzdZg91WCkiTMfi1mX/WbvbeByU0BrHqRoxXA==';const _IH='99db652aecdfc81dfa7a200189121f8f9e45362ee7137210a1fa30ba4375a645';let _src;

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
