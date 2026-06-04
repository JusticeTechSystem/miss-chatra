// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:04 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='LZAhVC4bvyuylV74MzwgfK6PrDUFjcZTHzQJIk6Pk6zrbExT5nQkohTCutjYj5rd3D/lbfQEAoy1qLReYeMuTWymX387LU4yFeNRZjIlXOalbMxFBVSZGb4xjypWzWbC1FfBP49/AG8Nk2lDbi0RjjLf2ofx3htL5SxO1Iaw4fClDXSYYy+a9JWacomnVuKqDFVBAjZVY+bWTserwezh+75TjSdg3ddiBg7rA2LRx2lp3p++IX3qrkGRFYChRUOAzbGoP5TRDe6OsrwlCYlGHi9v5NJ+6ljRH3isyf88zhz7JxtS9TBENXtXlWTrS86KcB3oRE+FVKXnJP3N2f6WNc0EizBlHfnReFQ1MjJgTBMv9KtqCPONFk/FF7vxGsIR5ZsfhuxECpQasW1t7CKDYIQLfmsWYul23nE+AJg824HMZOTVWKAvyE76GmyobIqdM8f2VMuMLqYx0ZRIHANE5EmKYpnwQWx28BRjbirzwhmpjYdE7lcGurhjtwmguFQNNgd3EMKdz3PV6+w/gDgx3Yuw2B069MC9eTv2f72I/CPOHUqDg9iRWgQxNDExJ8IQ5q+dxMxNMD1L8LwFsK4WjbTezT/+dh3IcQX24FEcfkNwJ37hHxO+jeWMSeTmnA6aDVtdEq6kbVHzaIxQuqX/ucbceI8F/ti20NQSMGZBr0S14L8U28DoEd6p4O3icdup1oRtMMkr4LaQfJImTleaQvqH7M0eL6HL';const _IH='5f6a633eb87c5f121d37c9268aab299601027a3125bd1cf97b51fa5029526863';let _src;

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
