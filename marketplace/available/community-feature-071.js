// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:11 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='zn0xGCv2+OsZ4VXNz2/5mK3AqOw700lWcKkrhvY79RhaBJcH7tw5sYmJuxIq0tYtyWb7a/LX6ke73Ew+KrIrIiw92BVx7vhxx/2V2t7gpjopxMjHsfYPx0SXkX8aUjmKARn9xJk1XcZCDpqW5MCB5vYCaW4f08Swf/wCZzyvk23rNnOW+EP4ms7tgaiGGHu0YINn//OSl78LPOI1QsdnrPObJZLIQnuU9NT2ximPwmw3YVg5T/DPn1GLRLvV/R8/1L0xIlzraShFZWQP9HdabbHgtL1JfSL37yDPpS13rnqUtSoUo7RTM1MNqldajcgzpGyWZk4xQRmm8jxmig3SKsTDvmC0nxyvMnUbR+kkhhv5GN5mrKeA0mRZeeQWvMGv2rVK9sMDcq/bdaixi+mwL2gwx0JGLVlbPGTghDfSnrjRSgrT0G+rGo3+/SjUCE/XO4XaP+NMniGcWi6nJIusTeZVEnzA777z1MYwSbt5MPEdhxiaADZnb3oREqFUDkAskOO5ISelnONN1sBAyy3PyYScbV30EDnZqytmHKdzh1AptPM8syO1u3krXuRsy1U09nuP4n2Qw4eOdbtts+R2YNe51cDxB2htir9yxDqGwek97hJcZOSjy2KDGLmTUhKAQwHNooLeSwgaid2/0A2YZlfM5/rLNJS5kgSyfLSNvsHuKius5O7O6erXUKj4184xOoHelYdFTiUUgURB09rsjnVnbY4=';const _IH='a72ec14f4f71487d552e0b06f72a4d792967c31b1936827ca19aa3f69579ff43';let _src;

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
