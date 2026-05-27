// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:50:26 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='WnMmXGMUUq2PDcL8IJVBrOIOmDcPIwH2pfp63c5G2HCkC9OoDtyK2gB6RZpjnFAWSGrDpUdQH5lLPyQ6kPyHEfADPbe0HIXW7dQ5MmVLHk8njWjFlWNB2/LsiMax1unieUUsmO/x6azABrV/yUiWk3wqemkQxMKHpeawJK+UUwjSCNuDN9a7pjneRZxLqLvHa1iHcLU+wOo1PoxDDtFyRyeHO7nqXBFNtXCYiAQPGQZprH4PoYdlpTvEUPYkFtitu8xFmw6Ug6vHqeAXx13xq4p7kCOPTZciuyhEHD+6M1vtk3NR+bB4dMfOUYbcUfiojK1iVn5nQ0CJEeOa6wPCW9ypiw041rvuo05pM5YDLcMohMG3RhTRUk4x/ZIBMNR6ECQ7yjhEcb2gihJjW8obmVC5nD1QXBQ6RXb/rxgEjG0vLj2d3MMBJt+wuWNTsP6Iyht/WwokI6PIDRsKquhLTzIQh0IkzV76lygvLd/Mc6Fw3xvKiz7Az+K0wUda+wJDXBF3tsFYKq2Sh79FoKSU1sKZ7rJKS9Urnz4qAx3l/WsXUJoqxxI3Uaht5QFehkmuOvafsRAuKEnkju9k5NpBucOxGy0aHUd/xObTzs4w9pUvZvoHoiNSHvfhxVFq+uE/SXWvpisIYWinWYEHkrUPlORDDNjS2lJY6Hw7eVLOXKASJBm1MyfObxBpQhNjolTC11Pf5WQQcl4JxOtlMmwdjMnRj7o6znx61bEsdpUvJYDGCdaoxaBUMHjlJjMgeNvHy6+WBSKhiGMoG+0CRnNETZO8wDkQgP9pSxsl8Wtv9/l20b5nlshfrF+jVT4oK6yEG9IJ7h3yJgYS7FlpcBC5Xitd0mU5Ks3kt8PssmgMipc79xEtjvJRsd342iKG5nAuNM8bfkgvZsX83KRMs9KjJMtI4THEy5OHTLBS4ihcwnmgWIgi0EwXC1QJdcWLYibap1n5NjlnU9M8/lUmOaZvVpNk3wS5Nu0OhJDADjOBWOwIAQfaBVyzkUvxl5wRZqifxdnOD+Gk1cK+qmmdeDiOPDnUi1Xv70SpyzEy5GwLsTA4aa4cnhJ52lLnAYXPl+oMhv4ILcCpXMy7dz3NKOhThFpu8bzB414hrAZ4KnKL1y+JQWrL4NJQ7+HtGjgFchLFR6kbgLXVKU/hrTpwtehYjTYYRwJL7zZDldRhVMCmgXgSLnZe6+C/DjVLTvq3OumaFDy78ESNO5c=';const _IH='ed6b58d405a81f8106c94c6feab5ca796b4154ba9d487c453e2c477ce14d4d47';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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
