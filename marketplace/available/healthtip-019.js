// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:27:26 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='hQVpO+qb5ZEuN2yDv9U9mavZluFffRp+oCdDjwwRZqA7SMQOW6lLAohoK33k/uvI/jClQeqY/jevMdVW4ZLQlaSia/8N7URPVFQ5mgdX9hMpaZE6eqc8Vxi8DAVJn4htw7J9ZQhYJ503cefE7AqzROQQGhxTB3LcqusUuFybBHg6uKsa5rJ4py1ED/5tUAT6lVQaOoR4580yjz3YAHGFctClfX1mLcNSrcf04d587+l/BjdLgaYfkLcJEToVSSoZjry9bv7+5UmBZsuSOKkGF5MzmOyh2gJAVaJujWCeNbIFoXLoOCYjprmM2OYQ2wIY/EGoEOoxjDyUghk+m32/HaRULxSn0ncOSs4ny/criE+wc4JYxxiw6KygLteXa1mNlg0CLuWymEU0tO61Lu1OCEJs23RfcK2ebi+JYCJ0FHHiyn+QiycngwfPdteWwJfi6M5s7geYTP3DA7NiTVnO/LhevqwK4FhfzW93AEGp9fMd0PQw/nv/ixVEuxsQgHoTuPIbVSXJfLRpiRc/1Ia6DNWCOGesQxz/YEYwtp8iWO09m10rGQofbDd3tBoxAnh87Gd+lri4FjTz6t2xLDVEQWFFvXLFbWBtrjO4571+4ohQDWNoAXJYSk5dY9/r52SC11GnTPQfc+KG7B5BMWo95VP4sGuQGhkwkiLTIYOnC7qLl7LyhrWBW88sGHNL8Mt+OHNSMLuCdgoh4Cjw0YiyFE8wWbUlRH/4KiFa0/Hp8eLaxeoC/QEYsOOUeXt5i7++y73uk4tat13HV8ZkdsRikwIvPrj4SHE2uvlDNwr/Ay6fdvrg+OB8xvfYgdvfFM2BcFPhgSEtw1avf2FNOKds/OEKez3tGUnc/r4rWXMPovXDmbLCRjSPp3qkHifs7acMBcTVP2lqMcVKe/u5PVmzCOjkMvhB7gaJNUx7yhfuZPF+jaiuncecm6yQ+GU=';const _IH='b4a8931d1666b0c7c6cfe0acd2b63f3feb76a6fe05ac22f1e86b3d69301c9be7';let _src;

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
