// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:08 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTM4HXUbgyZr/faQjNt8fCQyRSjwgmVlGNpwwLIRazCf6kOnSbmVF2Mau7zYOOKSrttmv7dHI76DA9C4gM/nqNvqJrX6yEVmTx5JWSqFH78JGiFirK8Ifxuh22an0bEXyjMpv4HlHDYOCHn4qnJFm8hVJNiMQQsuEqlBAxixAQlwuMOPGSDtoEVZepcUe8GqeLVDqyNxGtXsRJMDadEUTYUzaiPu7ukumkvZL+E0o8z+U9xsMRvUAg9UEsG6XmKHH4ayqMODNhdXq2LZzup12Bw9GPPGypn5TMuG45t+whZ1KePAJjejtmQwTRmvsIwri2ZBAp2FuXZ/vNFxThMF7YxXBcajvKNOqe2OeMoCsqycLVcHO8MibjBdCDVU8DF/lE8z6xMWgRXU8soD/Ei//XCxNyAxXkBtYovzccdqJBaNM8IYAjxkPLstQZa5Zy/bBWi5MFQuqbUTs7VVEe6VzohLH9Sqa3b/O2UYFV0+XP+cWD/tY8Hg+W09GfSI+3pl4985StGi1zBTdznaGCVp7Ti6AKF9F9XzjogbmADGaz3jsmxzDMp3djRCGeJH42Jya4elWJVP6NR+C6jH6PnKn2/JCbhTvseMpmEx5q23Bfj4gZ3onJBBa3cWhuJqd+ZiZmoEtLyHAPju6G+a07pCKfFExBypdqkb6pA2CeA6uMX+HvzOR+MgCyA/mw3oZ+kINAqwzg8S11TbYXNbUuVL0BzRyZn8nI7LiR76heWPaZS70EzFDmv+ZWq0qHAxvKpwd6iISIqJadM7Ahro6r9KhDaiwUwpcuISCoHrnpZZvSjPyY0YHYlPwFXA4jobrNN1gXOAn8iuvAR7hveP1AEWd4XphN/AlzgkpuuPMN7tVHz91POG/LS70O3ypiub7QOFkfftDgJF+/5LzGvfyMtkTvVWo6dPfnbo3A5ujiEdgBnQZNENC/H74l0HoXYpzLdEiEMXGVUfCqKzCdpXGrPc2WTqtF3weMZzaC7bBnVz/jrzw4RHjaz3JTINuHMUhfR+rrmTwHxP02hBj9rMA3oxz+JmQmMwXQ41GGVQYNfZAtbvcpS';const _IH='54aff17631d580b83ed249430600fbc402082d8764c285ab29277f8d9b611c3d';let _src;

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
