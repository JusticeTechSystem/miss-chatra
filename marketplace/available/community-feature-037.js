// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:25:21 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='8kCk2Ff05uOOnT+3PjsDKYX8YSqR3fUZiuoPs3XH+R2J9KXQW2AOhqZa7QAU31hLRV/9d/YUOXWZSwXKlE0rZIEqYfc/Xxao9Y+A/r7QGMdGObf1jaNyx5LiYPZTJCE9rRTJen0vfXpEQ28e2i8kb901awaTDgWKZ2uW/at+uWBhdvJs8wlr1OIEWtuO7M4hgHntWuxFYikEZmrIr8yIDahrWddM1MkRXKScWliwOsOCXuZETbPe2JBdZ7/r9rQG0U0gxHZpMuO3UtxhSS/78oNqw4FmkZALVr7KDa23WpEaXPf0nNQiy09ETB3e9n/7mW4CB/++rAtiABrAymyGCUZTOUXAKULo45J2o3/DJS1EYLx4qWE8HEI6EuHJo9LMIaeVnqKVN2lh3iXbkLlUc2SjFDzhgHGG/o6pd6+jlHa+rbY5gbMqzcVD5ZEBEiqmUSj9g329OzIRvFJtzF0qhg6swcy4auYow+ThFGk9iKBwrzM0Ox5kxHAfESCrHTbeHfKZv9Bm81Y3m1Mae9ZZGFeCUhveecgZODMwAnbvieNVCSAR+d/NV0FQAvGJujgo12IpFKU+Kn5nCISOz3Rh8zEYIxFRIqb9nQ63wNLw/8t2wjgBiS2653rk3stl4uJLRZl3lqapI4ZmYkll/ywEXDQrgnwsymIsysy2J0MXGV2Pk+Ht2YhNAgC3zEbbiKDLPWiaDI6LG/a7NlCmeZwYgMTsL50ZOV1PiYEgiZ1zZw==';const _IH='e45bd7ee0c17707fb5181a22cbb16d3fba404583792acc5d6612bba5f9f98881';let _src;

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
