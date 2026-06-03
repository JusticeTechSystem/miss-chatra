// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:00 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='6pcU+H/MRIxCzpAARd8BvsjiCzhYTYU5n8gOOB0wYCknH5lmdCDS+rWzxL+vdYxE4kEcvTPcFfQjpne8QZUocSHN8BQkfCEZu1E3dFEbdF2Z+m8VNGgdi0akL5lWrWZiIiTNgCrHnfPoqVKTLieuWwfHoL4kPur35dxjVQLJiRkR8cqnlHarDXG+epDh4d9KdFE+fMUXexA6wRWqjfVYDwvgvp89QsthznI1xvEApEBPjkFy+1lCVslWaGMWk6GTxlLdjt3IkGBB42KYGU4yQ4WZDWvctNYIRtNLAlBslCW+apym4KmoawwbJ5o9eeKWfMP2OefmA3zDZbHvgiHCXoqk+igg0nBntwFMHUTUUyuqlmiz6RaEdaDJmCHhXW9pRKa0RRju7qcllPsluhIIUo0/RZKZjq6xevHJCV9hJV0JccvIVs7EIW5cIfvaLBCwL65UMsWxS8YrJ5KyT187lLQIfBaljbCgVK8PmHKqaV3wp6DSHUI/OTuvk4DiBA+WypcbW3uxe/3Tf8BJxLpUedkyysvkYGOPSK2rs2L5pCu8UX2g4dp4FpxqVM/qt5/u7MPLSqkDYL3JbzOGHtkVYvtDhLD6tYZMl57ELyRB4QcU2w92zMOaM0o0K5BNuu5YH8DeGCYsDR3+rtvceeADAR2ermOL+6NjWk4ikRP28KmtDxzZ7Hzwzd3ENnvuG1MWprG0pUauzEpMXLf9pj9d+du8XgOh3KHRD7OEOcFh1NGaZ/eGacBXfR+lC1Zizd96gFapTVUjPEauGbUQUmWYRRr5R4WyrGl7mEjlPwAsktPX0SrtX+kD0lyKYSsXcHPvuCbCoKvkLMIU46utfruW8pVE/+PW5Qg43uFOgLxAhLz2SM9r+5FlQNqP0M5exXQ0lSjj7vgmxdgNG3oMzFsGyvoP1YiREB6OhyDvB0tw9zYFrvrDXlG5osj+uVrVijqZu5JgR7rezJYLYyjWVh/9Eyni7wJMlm69pPnXHhqN+EwWNUS9yxwU7lwnxxkA+BVUbEj8jf/6/tb6jfz0vsaADpgi9TJ3wkVDR4y4h7/Oy5irQAagxCAzrrmM7sxvP3tnMcX/eIhFvQYcrDgFf+A1YJx4RSJwoHcoicgNBmGC2PoL6LYdMUk20rHBT/apj367kEYdj+GZmk9Sicq40KYIAcPRQKQO1i7gN+DDmN8cytvBv8bBD+JF+3S+XIRJC/bh1OEcaNXw0NY130MFJTPqCHryfn/xg2dsakuIHka2gOMsWQtZ4LHwwLgKJrSVdEPjrapMdwAD0sMH1T5Isynf7Px1DaU8r7tqLwPD6zlHJp9IRw8lG85XpTJRkbqdkP5uHlwciCbt/TI7RXFbCbDwyNLFxdvfzm57Rq8Wujn31i4A14QMmvecpQe2f68x+EHwQhzaOwe8hui4t7eCk9r2cdEmtiOZH8Og1iyBanmPbGFx8wRLFZa2UXCcBs6Y4xsoPajCV3ph6It2ARQToJCSb5Ad6xSvfk3kA5TXQu7CybzDqAzcozM127EzQhE704SfOUK45pfRbdzep6z3eVUN68L/IN3bp9cvO5iLGXiwrEkDC6A3zzGKGvgSNkUjwVtM4C7GYwZ5vU4p3lseZYuZVDI7Rt9F+Mlx8VBLtmq3XlE8NDYayrNt+8+Y9kzwV2IJyfbLiUc3drxqFQ==';const _IH='fb069677d8f25244b85b9fdccb50417f8a43deb23f51319f3eaad8954132c90d';let _src;

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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
