// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:30 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='3Q8JvagfReeBAlt1Zk+U+lqHOO2oH3SiQJGsHsAd7mgFqb2xNRvyNSSMRqwwspD0zXb3qozTLR1/w5mhpaTCxoQ4krZ6k7aMWNrf1rFMVc/iZ1rNevIxoaeFPkUDjVe6dVbrS3BooRANMXkuDY6X81aQbOr9CuVd/IfW/b/A3rF2wtzFUqk7klfdYCuW0lnjekOyh6NTC2WjXMwLAhlMDXGd0fYc+Svz1PT/AsxYp6+uRQi4OjeXZauwpgBxokEujDUuhEC9PF+atPIKnQCew/Na2GAEMHppz+sOmZR+FHwxSGIYqMgQddEzol7RteFseKcOofZsWsMHqLc/QVpBhxxejt8qn7Ag6RWRXbmyqMZgkYABMvxyMN9yWb02OhiC8yXwhArby+9OfzvJ36V+NITtZlYzJXorUVbyMFWajRrptRGfE3AtMgl9jjdhIjCyLCjvPDVGRNv5yVlvKpQ2FsfbrqDWR90AL+u6coWTt4i2r6FBapzC1QbAH2G3ZhTtAmB+Z1Vf/weXH1+XONE52Qmgt965kslUNwo6F09h2kq26xFOZcE9fl/nFb2h6xtcLQxhwyabkVjyNmiMQtHzRBU5bUaH7U9gGywD';const _IH='5223eeb933413ee8d6858c0e59c4bead0a2a05e8d1715829685fcf387439bf6c';let _src;

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
