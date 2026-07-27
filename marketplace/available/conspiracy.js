// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:26 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRzkc3YxhxEHVCibsh8GxkoJEhUx9v23eN8++gXOqP4pQMcim4jvRipZuy5+eg3OzNN+RubixO/lLhtgz6l5JHg3iM/CQoJbhVXXc3xvyndtyYxLHI+YZuIG5fK4u28uNlN7oij/Nxj97UAVz0s/V3Tnn6S7GcqA62FR2fGUZkejiGO+aAsjhd7anFT5z6oExglJcDvnhDfWWwsCQ+tihsl4nlOxHPv0mr3ad1BIu5C7Ro+EnMVRHSaWgMGhiKFwS25R8hAdQKWKXubCoGBMjmQA7iElGvR7PQj9KEyMMxY7KLOfsSvMFkLrrMiPrmjWNyEz/aXeprqnWtj6tUU42dU790tuHhgj702hyLxaQ+L5K0GmNAP3ewBjp+3STAfCXKpNgHw3C4v7tp1vNvAN4Q9lNcLD3ciFdKx4u8329XzCwRb/+IkpFqfq8EEi81K1av5baKVOQ2y+6skLushs44xYrpxx6bzP3s90qPva6N5vrKml/33x+AtBa1aCBbOK9iX4pNgJ90ufoPldpEpbEhp10k9cSDwJNybc73Pfch0Iho+WzlcAvGWfCISXN9IVLiu2hJHvvXzCOXTEL/pwzq0pO5YePYnMdMRElA32pSi8+c/igADyEB+9fEWl3kUnjqWWm5bnXqj5YMThd7mEzsmcCYU9rHssqP2thFYtDUcPZesYOYWc8P8eKzEiEU9xmL3/YLyidRWuujN/VFdDCe51wKpXIm/dMW0coT21lRmL0gxrE49Fwq/DfoL3kxBngotbkloi283SxEYsBLZo3a8cmqdX4u3UlaRyQrBH9ZY3holCfL3/ekHQCwIvtu+DzgOD1tn6sH5us9gNi6YQkxUnBYu7c2/arjXv9V9vFl2XbcVARWThBRbFFYNo6QTJIInbWjvD4PwzwO+SQtwTOGfBPTjb9xMk1feNiliO8OLqiIVuEyUbzqwAS3kARvWEbUOY/tFIs3kwFdKOZ3ikAQxfkF7e7IWfvoX73AYiZj8vCKUXorBYiJMI7A1IkPKOosCfN/102IOlvlyPeBeqoLSzkcv3oGp3/FqZnpXYkQ9bAwu1Lw0sVFm/TwUIk0+rflaf3ghtwpIdyh8FMVVDxN0xRghFgZz5d1ac+WGbcEH6VuSsgxGw703dnuKEmjEMd8J+Lmn3DAWMwfSpQ3Dm8DS5BsHpY+AzRrYVS8D7dCQaWQggC524GiiK7hKLFetCczBN6tr';const _IH='419fa610f5c951f1fcb4607ed4030bbded7477150c273fd26af5ed33e6279a09';let _src;

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
