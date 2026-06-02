// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:39 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='VQNABTFinhFfccIkkM2znEiOFKYy6UPrpzsbSLqaJcvQKSghNdWq3QSrk2IklNVz6k8jaF9+decT2t7jFnd6hK6NeNrHdSmQkt0/HNKPsov1ws/23zXKkmb/RzcCuuhWZpvWqqJtMzmVXO3iTic88YNMeKU8nIiqPSvNflY/oDDqmW7D7i9z3AW5nR//0FE/LMx9iZLWkNBL5TnBTXXEYlk7bKB81zhIqFBJZtzwTlMmzuXvt942zuQBuob+9/l7PXSRLE6uNafRiGxjkKdP8c2dkt9ggKiBmUgJJDn7WuIaE0mHXSWWYDXAY9fDuSBch/HUyYBaGkgjmnfKV14cmQdyRDl75WnxCfd1lrD1VmP5DLEYSUkMS+qGZpYPxfX4Ctdjs4dvO8iW5LsW0//IY4SJqbIHchD46okUssNxH9zHHrB9Kc8t8+xkbRpu88oW29hPl7nDQkGZDsjRnJ6RLKFZi06Z1Rda6hoA12IBZkkrdMRm+8eio7+tcZG0vhuGgLMJVrPM8KgtZ7HS/BhIZJCbwg3hjMG1bb/GpazIk+gv89kWjGroFIs6eOjK6uuW6vQ4OhDZ+8g/6i47m2jN81Sfv+RLs8r7Rsdp75hiwvdzzNkD5e/iwFDCKW85tW9Ewm5WOnVP17gCidmWfi6/I9i+tiCpNTS3qsVm6W5omD7g0dUolIiWqo/NL8VpVMrNBXnKb1x+QixKwMmVO+BL6NrltgrAlEgYI4sNlvEPwV5Yxw==';const _IH='4ba371db983057958f9b05227bd47bd1e176038ebeca646e43beb0dbf24b04a2';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
