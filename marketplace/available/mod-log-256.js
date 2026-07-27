// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:04 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSsnh8RZzYo00JwGRlBBLG1MalqXQv7tNXz7Ml8Pf/FyTxJ0k1LC1zdnZmFehzgugN8dsw4EALOlt0eQ/2Jr75UmLxz58qzCnK/tmcxfjPEIIy/z3ail9uT6jO84EAdDPliSUYx25RkmRTu+R1yNf9BBT0QCdJs3/i1gi+/8+tHzUuQKeMS5yChKeq2+vYIJtVqGLsVIIPynVJvWsDWP6pMZhcRmPislpdrvwv28iKG4wjuJoqaOInTXyqSZx3fmZswpii+VwQw5JqgeJNfNQP9OtasySOpna7UzV/tsYCDIoo+yexgdUvvaxSCAf6inEXLgk5CFZ0qc7Lw5p8yej7zpdHIM0/iG9xVDkpjv0kiZ3fqcXYya4kh2IbtYYhwI/9QO4emMZf9Jrbsl8dW2nsbpENQQB+Iedh1y+IkinKyACgd+e19bn3nucYQLBCOamKD9a1L7w+M7NlOLnixfgkJGZcmq0DYxW3dKEAnCdw0OxXkMW4PaZH0+vMVrkV776paxzvbiJ4MtHRY6OeJ9qAWrsH6LvoJihg0VmMgFg9fa07ivZ+oIPLec7TnkcwRZx3BWY0V9LSAA311HT1MaPkxjC9JYlul7VPVC3Cmvt8UxzIazif2eD9UVnoj/+jZ7/8y/Akk0wtItqT1IIXteXcn2eXHBtMCWU7/PCW3BWF7PDWsSH8M1L+fZXL2ru0EoVJjFh+ulyxwlY+LpN1lUDvVjeMtq48aW65rJTRQwP77qOrTuMITUpd33SPBBzqDdp2KHS37+0Jd+zpXub7KU3dbEkp9Pq+uWagescVaZWcYdZzyvUpIsnZxELmVQZsOKImUC9lq7O7aAUtWnV645guq2yvQkHdaNzUqQ+PNVs6P2c8e77QEodbtxb/WjIVRirjheU0XeN8DZcl10GnBOnuadsBo//snsNG/alRHIjqnzCqyAzp9wXrkpdWoUY/uDgOEpFMmvC7dat2svs+y/7r1NIGh7EFp984lEFM35MqtVYvinbl4xHwPnMk1LEUq/u96QnFAE+F3MKMCSZrndsJwWYTlTklMwNV7RzbmNA53LVJCgFnrsSyU4jiq62KVQeQFZIGunOIJ1b6CATgKZcoWJIn+2yp23FZhqMVTDZ07vTNjWylh8HOXSle+Oh53lme0Ige448X3+UNY4u1S490ASIbYPpbgGm8C1iBqvoLKIoHqDQlx0wIc9D9V3xU4kHXZyLQ4Nsy8/i/hO9/QrqvT9R0Bh1oH08Ms5x7VNjOR1BE2r1/7hHWiBkn2hiMvOSQRb9IRSWu2npntvGSwBEGHUYD+OObl83Pr/viaBne5Da8Z4Y+f1nrwDZsjnNajYqC+gFMufLhLOH7C';const _IH='072075892dd0c09d6c4f8dbed8e80aa0bc3e1c2d0cd32de5fefa99291e755ff5';let _src;

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
