// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:18 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='rq15K/ggN9o3emBV9ur/54JVyreqkmnVx8PJW7NSILvT1Ym1B7a6Uz7qqUSTb7VrwkudJUbHKBgiURvMLbySWi2vCMW/A0RDvr4g8e26lMgrWRKTUCIHxwMzAMfjUOxF0ToC/5o4ljb2JxxpU3Q++9F6tNYej5qxQ+NylPcW6Rm2VYQt4ae5LTBEcsZSprRqVccDkGQa6hj1XE2GC4bqC5VxM2Spno7edv7PDMd0nCd/3hQLtLZMmF1lDj+pBu2uVhv3rzgO6gfbtpUa2WDMvg3APrcioVF2TNuVC93jlw3W5TEMSkY8tO9x2Rbxrb2fMV+garjgQIwDV1isLGWg7aaJAS8ZAC8cmgG4QRoY18I6850EdcyjAFZIXcozX1++Ew1DBv1+Zs0EqTxUKINJ7QL1UBuQlcx7Fq4iX8aKQPqljxxvLzKCvV6AbeOIxB1ZjHg6Z4B1YBOXgQSkJ1+/B1enPGEZi0Bbam4sHf8ZkI2aJ0SIaosyxcJ7PlYu7iV7z0FHnqFsR0nbmcwoNpwYC5ZTCWj39zWrnZ0diN2hHIt1t+a4Mkj1Dm1/JlHl1YPXuhYlaW1VDPM9cBurXmLyUo22x9tV+Zge54ncIcPIHX31Uy4MxnTZ7FibcZnx11zuFk6/mBJ+vTuKCihCB9kGzLlStrZDlmy76ZExhlTMbZdDobSlesu1f0gYz3XO4Zm9gKf+VSqOMzfZF2IpGAZcGCjqmibGqhBvWS6WlhIHDhQzz0lc20bF9w9jHqH6VJesMeaIjZNoA+bDYCkUDQbr1E/3n7df7IFvDtMeu6zrb9sE5NaCCC+QHQG59Q3KXkQx1uoBDyNaPSht3nt8nunrE498rh88eqhl3h8buGdpDDQkUQwks1XbdGBGC1UihL35qPIEugeTltnadORuHPKbrYZ2txUojfCaYLk6eBBN0zP0OHYavmNCheo4/2opJU0+VX/a0psnD7kNnPwNi2chB2xrPCW7DhxfRC3GiHYiNGgfyhT9u7hmBZ+8SqOAadSr8MXnYuLefO0t/tM6M/IE7b1qRrTFKQ+q+Jgpu/Y1sZ8M9g4cIVjMK/IhfSGXu1mWS3D74bX1gOCHwxwAGp7efQKV2qFkNzRUsx6Z2E8hdvydwrOZs2i/NGk2YRYvgknRBiTqllOtmXv6KaFSW2Fqfxqcz4xckxbN++cPiNuu6L0yVRYqHm6ikvv6H30eoRymRNF84ms=';const _IH='d5d00b9b74ec603bac5402288795806818e336da5c558d04fa9b894851116aac';let _src;

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
