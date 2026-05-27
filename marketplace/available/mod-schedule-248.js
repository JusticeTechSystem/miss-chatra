// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:05:12 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ZM0XciS27eo5eV6g7a+WAGXpi1vFuSgtRnj+H7NL2ID/L1ia7lE9EGtKCDEfnpeWe5PnP8NTaBUSPwLrnffsF6DQQwt6vyk4dYxRp3L+0f+hlZwZFoTEtaUbgBhn7zwCHUhn1gI7CADY1O76YkdwuAsX6roA7NLZm+keFNv9H5P/yobSfiPUmiUqQVuGaIeqgC6/R0LKrBsA8AjCXkzTWttLmTQs9sJTS2oYdFIbU1QgIdpq59SftbW5UcNpjknWVeTvEIYpLxPkc3QucP9dcyjm1UpYGaj2ySSgktM/X9GNRaSOqOQ9GrXKrgLFsXjju1WKayh7THZwhfL5RizXMrY5GbWIIKJcqQHm+zEgxQvXJaIGtZWig1sSNz9OVQNhvAnnBoKc4PsS8tRQIKpvVMgwkoW3qkLifqrLFYW2byW2+4JD5iPtgjdgC/CaXbMnVX+POE2sek0iGTyHDSip9zp0Xb4RxxqSXh+4+d/sXPkWy89DI+ieK32hmI0IrmbCqgHgC03tzuC1kj1a5jx7EVBd8MhRZIrqtM2704DJQ7kas0+RWqXFJ0XLVtisvkMocfHINcbLHdxdrs6ViQXehaM5e4n36pBSosJMBqtmu0YJsj/0GaGUfwoMHlXNruMFxcj58/BnVS63oPX/9aZcaK1dK46iFzb6x+f33HRj2WXLnubTaUH+jsM3EJ8SLCDGjRW/9GqHj54g5wnLmebl2im43WwqM13bGMCbTNMIdSd3HesPmkipBzRPT0QtNKZAW+K1qEZ807tJSg2VEsk6IqgodOlBCr1A9e6gw0sQY/7QidTNrwl5c3cM7IpEO2Os/NhqBys4bZ8EuUVab3qqNpfKDC/h/Qp3mvFoG6W1AoRyAk+NmHCkyKmA22TEosA8ehWri9toUiXRi5WYfs9slMYM5D87MfrIC6jwD3eZL2+zBLEffYRcEBzJkx1JTURoMa/ke8P9Ts6SBGUCCwW582PuJP2TqrUwaw2U0ODY7MvgXBDeGbO8pNGW42I9UW6nPng+FhMKZbMaqrH6CxMxJ/hwLejFWxdwF5yfyh8lhURknC2rIq5wd4LahwkarRz5eZH8lWYu12x7L0/R83H9qfaxbD9HlHQmHZjB8llms/g6s3aW4A5QdK7nbxW1ejsba4eHFd7/J0cv/zJNmpFQwwsSdIHEziiZ/C+vt+uijr+sD5T547EOrQv9ruIqLtOtvGKul19SzzQ6Q9/zIaIhVYOaAnay/4Hs7eoo5DmjPcHzlv6CHNjzmAgep6LJMrRwoXuEbTG7jXUUefyEljK4WHs8AHrA5c5EDspC+HZlY2EelRbIEOjILUGrtFq3qMWNvKMZBGLgMf1zraHIVEqjNevflmkMpEW0NRpSCLImoBi2SPLIMjal4eE2IY44g6ed9RUGZFgrKsN56CgR';const _IH='67c212b022a40ebe60a15c68ebd92382e6256a0e221ae93ca1510f1020becf12';let _src;

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
