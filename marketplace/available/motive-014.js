// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:27 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='A/kqc0/bZzPIWsIIVNK4pjdv6UZf/QjH9eeyQTgJQSFWlfi48fPe1ELICazjLDDk9fT+6ixv4QIq69zovfCwczBdddJ06qcreKy4NQqy4j0cC7Jq/OOc+h/9fTt0JUFCaodTcXW//4vdc5c5JMbfrZTHu3mMtJKWHxeOsLci5sdHK7dsVBSiSTf1Rn/bGj75tgpfOjAfAsTcjtsx0rkDhLdtFm6UK1qMTbo6slar4ZT3eG4d4A6VSUmfS77mH7kWDaq749OoSoTcVkUgpMaWg0/zfpeuwhuX4SBBUhN8gep8aNh0kKc0sfb23CEpKVVGUiE4Z429Ad8RS7DYQJMcqlbyi6JkE34oIigtUOTEMYL436Fx7GUXoptCbhETyhCo4e7UnpOCq/kGziRwloqzCqj8AxQElI3VuDV+sA92xZJus4GvR17rtOY2lDl+C4w/1nFpENlWQu3mgzcd1PRFIuhrygVO7JKdf4wtsJ9RNofugkA4oe9bRWo/qoianyVBPvUsTajQPGnXkCgrgoDSkuUjtxMwTypC2WRhcbE4aSL2Wf2X3yYx9rbEFfkhoA59uOg9qmjEpJFzfTNEZjp6wHrbjeuH8CoI6+K8VIztWm0HCki/S/KsrKW29V+ls54/3IionpVCxNa3JVl5YVqrII20KFo9VrStVaJgdNdWV/+q4+QUbh5kYx+FG7gWBdt6yqQKbvX9cqQ1ZGGmBkwKsKMJXWjabvW3EhI7tA9dtcPawFjEuVDDfQc0zLBPdBFKu7LYV3B+//8Hw1U7MBUxL7EIVMjHR34ic3+KtJdx4MhwdP61hQOKqPgVP9wPXbEiqzibYSiCjsPVJWJENlt3SEp60clmipZmQ3exQYzK69gSJKtwk0PvmIMjo86brAw6sivWRlyP/D4ioNm3OLLS7dnJ5GIVTBEFzrg9dWsX741TEKtzooN4RKpK4zEoG6heFpZFQm2hvdAMFPdxXHBq17nWnbft4EGCQowJfP+taqG+fHSFDm6Jn+TE8Jc77e4PIGFSYwgyyCNWLsOmVrlTiHWd';const _IH='a533235477f0b9ed955959f0e2ab3929a7357cfa5dc3acc21250e0202e1638fe';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
