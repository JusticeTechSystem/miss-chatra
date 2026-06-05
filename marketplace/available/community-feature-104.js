// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:41 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='BPc4vB3MVbQxX1SlU0P3ij+j/PUPJHDwK/GdT0CG6e36ORRkfaOfLO1LC+lWnICyivyPyLd6cErbwHIz4oLL3z4CJ2y6/fqlOH0PMo7e1N2kXHzQYBfA+AnYCTybvo+r8qSGHP7oJP53eZjI+vtqghcEL/m7pbnovnLurn075aTvyWteSC1vqRaXB0LW9dYXgS18JHH73FqfdJGPi6lZouGaB5SB9LWEx+NiTV1zB9BJP3MSNAFVy2nC2YVf1CXpVc2clZjFAAVCP3pd5ruxFAGMm3tiBQGHtPCqCIKcngdCs9flI1ssf102Y6V2ZbwBVJVtbyQXJO9gLTXARzU+K5N0hvDZCcGUnByhLbnOOEHVwsV0iU77f3tnsvEhR8vCb92lDE0ihHdc/PMTibD2uUy9BXalVIJ/hpvu0abDrSzWGccOoHr3NBK/5AqJKMIpS4oY9gKayHBXOMQZ+eoys4DX/sQv7naIoo+I/GOX+75TR5rrrioqtmiMoBih8QRrjQH85ZEAT5MD4pEL855s+mTetwtH4Q0IW0vyCTThzodo8lcA3VBoPchyj2T+LM8u7uCiigPGy4nw0PGvyzekdC8FQ3MyiyY2r7VIYqTgRAQWBNR2uiITit/kn1T+5GrhoZPQG8bTRBJPABwo2s/NpBB9oMmtXXAYkx8Tt9Ugf8QxpkjsWgv0MY9PQM5MPlkhjTLFLhV59c9A/fOUiDmqshPRilQZ/6CKd5gqT+UVX/55flsUhaw=';const _IH='61012b2b8e279f3ba502143573907601d6e939d9e4e9e09e1e8332849a2ad5c3';let _src;

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
