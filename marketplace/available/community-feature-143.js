// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:25:58 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='3q3o299ZukGcum0JhRWqRdFwJw1OivaBySxKFGrT6HdT+wle1RxBTS+atyKFtPkKqS+s80qHK/toBukHn7VkpOAgTX3ibzqeRVGwwOXCiiXb4FKytGJSnQpSDcoaZi1gFQnazlFSS4qi6ZqQe3zOSlICnvVyUME2hGyEhALmm+YVgonMlJ590e7ePthKPA8b50RBxPAMN/STrLY3iMkXACcoj9g8HwfpLYJxRlZoUbJO9RXCgdD7iug7JWJ1ztDO91SVDsC2RCq5dzUs0W8APhBUwCuGem1at6WM5h8hHG+cPZH8uQwSYelYbrNt6RJpkK1VcmBLmTBuOodx55p83d0aHxnZbyZWhrbOA51VTjqi8Oti4uVmWfdGBRvy/MxhFW7lQQ4A6gtI4U/0KJ+F9tSXs6oivcea5D9WtrS7DTmlQvwuelzaSihK4WczNbN9um908uqKtogI3clByNN+0aLhn5nnbo5llRrpXBrWHRHRoAWd9bp/VGrKsK2DCsx+L++iBAs2N9SToiaAm3poTJwcQude9nPhO2pTdT/WO5SQg2XubssmuNQ12Gtl/bqLW3kN4ycUKZkRbXNzljzVElKR6sZg+NkK2TgtDhP5jW6um0WIxQDX8J6tYbLtnXJWL8HiRcESRfN1P3IbX3mmyEIr7I0NnqFUfJvDhhkaORADXEQ1nysNnDi1U3b3UYyU5TBOEjXBK0Px9PzGcpu1euuyf8bdK0/WtOOVVnQ=';const _IH='0a7605229e8ee01cafdc4013d0f3e1dec9fd8043ade0fe8b908192bda9f514d0';let _src;

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
