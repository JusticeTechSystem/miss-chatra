// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:46:20 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='i+hlqVyTy8Ab/uykEliNn6JpeS4/rccc+3q7kPbXd0fvdeXqwVdUgrGcmwD2FeuT4JN0HGCukWsAmdAMke8Q6JEeIIVo0QPn1MneHkGJORz9IaiE9yaW3EZvubH3tHeBQeQqByZNUo3k6YG4bSnpzomqUeHRNRRTdEqP7sMymscDvRVZnHZmYZtJDfr5tZIwzHiUCPWWPZA1V3BuKVMz7eIgSB+B+4NrSVKAyVIe/7KmpU8ZMQbuHamWIjlFFzpKhS9jPsKLo3eUKbTH4w78JRLcxeXMg9lN1BpzxTf4JVxZ4wszwtWOOVTNdAR8sh7oJQClscjcEa79LaKS8ihNH64Zj1NihhAo+FiouTG4U0QeCBBS7oVVLQ4GsBJTFCYfNVNqLiU5+SVuEVUk9kizadb1sglF73q/hDSidCqujeAWe71xZPJ/l8Bx7eUnbZ0OdSK1joNqVHT8k5FLuYHWJCTzSeDG+cAmOIssFvd/b12FJljKT8RDGzdbULXHK2HNSldkHvx9twMWu/pyU2iPc3YthZNx0V3LXRqE8+tRBOMnRp6tMDa31f3XSVDZj79oUV7FdRkEB37fDxK2c5rsjKOyymXMJHOOZAL6VHXdTt8Q76XYEmq8zv7e9m0LScbVk9RN0WCTB+a22qzsDVeMR/J6BLJyF9U4a3KOGZUC4S6DSbxDBu1f9xmDbkDqT9oWRpbyeRK9BYf82OJpqbdSJZoLxK9WMjcu8ClKblZw7y+kvBMaxK1lwLfy+WOeINVwsMdPXrL/8vWFVraevCHPEvCAOxayAIqzji/QmVdjH9EDX8LLNI8f0pKyz+fRLPfaZSB0TQZgiyrce512ZHtOSHG/hEMbKkKP7/FeGudlYhYOtFsFg+iRYMEdusCLEroAb41Jq7PjEXJudEgmXb5bup8mHjsBSE0OJpvz3NdQdFURF4KhG+AqFnI5olt9VZz9CPpU2FjmfbOh5WCDOPWQ/2eL/xvh51C7nXxWosBGx+/fXXo2kxjGiSmiwtJyz5z9U5AGoYZfP7ipyzKVImbee4OK';const _IH='621c9b0f253d7298825315fc8073682ae610879f36c9cc495c242434aaf7704f';let _src;

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
