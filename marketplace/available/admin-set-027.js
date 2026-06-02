// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:36:15 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='A0grBN4LMvq45vTOvOiEy7OqikY/GJe4gvf0yOhLT5MZF0ygfewx3hMD0PPPSdrti5h2zj655MJcQfRaALyH3hqOWHt6aC++1vZXItqEfuPmoAdZZW1I7czJSlmp/5kVxkt9OOFW2cWkeyp9nh+1vnWnwejW7aWZemMcf1my62XWnsORgVEdE6GNdtDVOIeOarkLZ1GYjVRm03OODq/loo0PWPMW6TZcL4CuSGTTWU5HUO1dkIjg/nC7o0cDdPHC6krwl8TujKvhi6Karr2VgIeC2O4Gr+8IKFjQnWl8XAuFZGRJNTOZjYg5r7WwznY3SdJNeSCMr7n7m8NAE51Ld9r5JpAK9ASb16whmc6gm6TZnTY4B6PN1cf/fMLj1opy00pmi656aP14dc/X5dkU2r9Prlc+UaXzWtEnz+Hmc+qmeQaQEyVr1BuYFX/l8KTdbGs5ORoW8KPYMeGJfr5GRew7gaRysckhI8UIpkjzmiEbpTN17iOqrt53tKRqcRMl3hzIhMc9T3UY9qJ1s3J/nFL43Mk5yTAvzUjPyf99rFe9cow+InRlDE2DpdQn16l4NLCgSybYuK3jWXxFnbAgRQlbpw0MuZiR0zCdFQkzqLdip2BYVv8rv4ZJKzqOWOm0YhVH2VH06cR9126WYysHZOUmtm9DFH8gQlqVByTj+nAJT04G8m0XI6kZcD4hZgtz4JqQpE/eDjPuKPf3kyzfQFG2jGspGAL5bTnaI2gyY1LjYqetGxfpw7tSfjJEvG/JzLF1xTnX4vXBrCd1Zo+IWSCJ/W4O3fEjromas5iqp0P7i3jjwqmEhJQzr9sMRbKOeMvwKUZD9SgEEJHeKW8l38e9P9K3b5a9D+QOEyOBVwQcN9LjmoJrtHM5Cj+70jq48k+/64raxpZuce9dgBzkSJrIemYVprqgdoOGEKllXOyDyEvIIwWJ4MT6/onySQleffhhoXqgVXo+eozUJ7w5gJw4AUgcMpp+';const _IH='ef278e5e5881f57dca2c2c8bdb5de5aada587494860e79140a7c415e71c5a448';let _src;

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
