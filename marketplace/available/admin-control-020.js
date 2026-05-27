// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 08:59:18 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ejGnnEw7Zr2VSql7mdN4nQ8jrViO3HwTrm6KvVNUDYCWOhT0fgSzSBkHmcJKSVT3q1JFiGi8mwMdIKWUGTTnDh7ci9kK9lukH7kO6BibZrl9YOOVhSQfI7bFArMRPheNgFFHRS57XN+55AeW22y8Im3LxFSNb9+uJf221jkzWgkqT1Mf2slz9ZLfWnmm23ePdXpJqLhx8IEGW1xITasnRqf5Vd3/7OdovWSwCnNa0gto73sFeJsGSiq5tzeMbEPspIhqctH6UZOmDc9jcdnH1GJMA47uz6ifJvL2wq+wIyhTk7tJ32QdVbTU0Qj+6+HkvTrpgAhkKrleIhkZSSbKsarhJ+b/gZsZMS7gr3ppHP6Veg4Noa38PjZM364MmpN9vMctpYOGmhSUWmpByQwiTRKe1qzPAnCRKpsmYwVKKXGIU3F1ROZqPQfdnOqrVKRhJmQVmd8ZWuNa/tOVGwDjhINOSBf3YGpnLeL/K4r8duHZ+ENIQ/X70j28AOoEC1o294shEwh+s+nlQURkYUlh5+eQBKFBFX3TIBRPvbOg21YPJ0FqZfKC9XSjz43ueCV+MnOnArBrahhnYJlRNXYlnacS0cg3fg8bjhFY5Ib6kUh3ft6pZTQdUI/a8rPyFHXtiloyqQiPtrYli1lj+w9IPxvALF0H8+sE8sTbQPzwLK6b6PXmrLCJfK61O1lSppEPRy1KRoOFAmL0iJoh5UhLJ8WT7DsKZriinNrW4piVZnambr719iscUmGBtOAAOqlvgKkeU66msCf9wO0PB9mpR1wpkIisJr2oI25uWH/gFhYdvPuhVRGbL9OX79kYoTL3tG+Tqflf7rZJJt0TLjetxx8j229uSJiM++VdWA3T5IyeZaQ/i7/tMY2Nrg8w6qdmat+sPjfjpSInk94IEBudHib7TXFclYyH0TS1VuyHFLOfYlvHSE32zHd0ZYJ0cE9BRzwjiMCwcbloEIXmUHf+ysXPij5aLx7dKGCJukw8Jkovapbmzxu4cE0HVmPgLLbzfP/ZTg==';const _IH='c3d9c409e3f87b306c190f37e13050e0afdf0fcc47abb6d8ce7df2992ee7bd9e';let _src;

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
