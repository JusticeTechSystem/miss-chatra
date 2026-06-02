// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:36:12 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='gPcNOWnwCrNC4ccFsjPCFuHFTghiCYCYL+z5hCxuG+66bb47Oz+BKxJiQGFYXvLxEvqS+QPILuxS5ooom+d7YBRfJdx2dPCsPcwt1V0lV3TTvX6YBY41KU+DFZiC3cH0j2ZwC3xkE4SoBWfrpuAMNOLKkoCqNgdIyT+xcwB8v4aLT68SHKFuucQXZnMjPdwZa9HaoLyjsXy7dbuZ7fjRcu6yibzI7dRTt3/iSFHuki+nmt1WQbvsv1J3wF1hh8Rdn1utazrwKRhcQTkRyYVImd2XaUdlK5/AsjnXeOZ8+lDI+W854kt+A92QZ4elRxzBLdw0/KXmJMNOlojkKe14D44HIkJXPahgqTZ1I14DT2G9mEb9fZf3KUGYDhOWFlau5JMM+Zo2zPGPGV2x1ztY9ihvKgXurUhb4rT3LuOQhkLnunOlBTih+gEvc8wYzuSrqD4nGKL22QPLVTFKRfbtn7f9T46hcc87NLOQqEu8MIz7w4REQ0KbktOLlRFz8cFF75RqYayQuf8L2EhnsTY67p4vFWzN6P84wnIkO/dGK/ePp6dmTlJh1ADYo3tYgTV3+0N3uarC9YdlSbZZ+GC4X2Mc3HJPHsNmc6fB1r6eYGBAb1HEp5gFKQK1kn/3ts8zGiH6NwX3nAcn5EeJoUgoi+H8H0fMT4jK7Td/UWnBwq91rN876/PEHA3eRRkfe+C3yfi8NyRefo/qtsKUw/jFStNQUv8BoiOwg3alBFQ=';const _IH='83c544a8ace9da563e4fd91ca0528b90abf4b2a330df41445574df4fd7f0fee7';let _src;

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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
