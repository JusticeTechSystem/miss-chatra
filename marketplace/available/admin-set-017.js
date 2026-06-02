// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:23 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='trIi+GvdXhWdnPNeNhTJQTcgFmZ0nAGGYdpH1OVk84lqJ9Om+UuXRJvLHOLcJZk6RRObUwv4CqLhPABsG8N9x87YwnbwHOunyf3miOs8bnw3tI1NOKna4BnuBWKD8ck4haAfqYBKOu+UvM39aGpQeRQS18rbjs7MwRyiLtiTRAekIm16FzfeqyP6zM0/cAcdWGpigOcgRX0zJAWe8uYnXNKzpbJQNnBRj19uQVbPVcqRYc4wEZ6wslIp/xrvZ4dfrNX4JkkfQG5jb7IC7tfLSUTJvQGNKlggPhFQyf206pLTlxyg8mFLTvIFRYC9xrpNzObWRkPIMD9uaod52khBw5ZVfVLcS9qu+1usREvamxTm/wFfQs7igJGYZXNtSTEaZw2HT254+Gu7Ew1Y7wXmeELAYxTP5i4ZSom/chtw0l0ykSS2pPmwK15xdeORC7EE9LmjssHN55N+HNMWPK7xVvpvnAuhACL88zeEh2okNN85mgR+1kUeNmXb3Qoz/h/WnefdtXKqVV3T6iHlvKua0Ld/HSgjCWq3pkRVb4Z6dsTWpd3uJfqvsV0ZLgigAx6sDhr4DYGoL6Frhfi8q/khQQSi7VArkmfI/JB0fCkw1+3R/9j2EDloc/WuMl5lmJw/xOcjgLUEkf1KO4OzYaGW/+U/KIAT3bfXAoD9l2CJ54GUITVCPQBgyASpXT7xtVFLWjjTmRABgje3Vl5wsIrFeUkyfZ6n2ZmaXfYL07R/277+k9gnppv78DvNxNGqe+oDCHMi9gQOgbPjtcSxVrIMFS/78weY3+EsFpKYFly8ZnZ85d/yr8Ylg/aak8NJ3n2NqchWcrnrl7MbfWi9jskvHylP5X/CwZ0CjVKV4X0S4D+ltdHHhZP1ke6s4YIs2qF/ubigVPcwrxwCYI7ZUK4aw2L/o8KzoBtVSooR3nLJ1HNz2jni+/F6QZJvXOf0oPrSMea0xtIDlBVz3i9az6uN/t5DKJAYrLYk';const _IH='466b12eebc4607ed932a726048a77d6d1076e554051b90ad981498f3562c1a09';let _src;

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
