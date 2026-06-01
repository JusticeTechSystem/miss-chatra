// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:16 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQxGhEII5pWMWyTGDM27chjgmF17Vzgs7zMvHE803NqvQi+14CRwTS0p7fE1Rn0myeVasx0o9mluzh9jN9Dehq+xPU4s/jE8Qi1k7uuF1fAXTmmBNAHpe25gVHAPAmFaCmFnzPFr8OfRGPOaBj8HTzCliHm47Lmbw7TR1m7R5SjDsuD9nMMwZUxhzRXDpNinJoKF3jQB2rDmZWzcjU9+2MIDXLlN1D0+NNo+6UU8ER6mq8Xp2wQMZoVTKYyoiA5AKVeX68mGqpUPBi893I5DCn9Kqx5HJ5Rk8ExXAWpFS5m8ctLiB5fA0jiJrfbE9N9oBq5Z6zqUmiO/QLudX+uU03YFrYzwDIU7ZbXzDWFseGHqNEjOHuBbvvQslSqpbeg4MpW2yXDmbnjHCbIJwFdm0fx76PqaUbNuGhJE2xEgiGDqszTkLKWMERmPOQU4nTzGGENSY+kmRP5F/LEutv8p8ItVgPfDlJcevyNgYoI/9LdjpYyuV5oOpC9Q0hj5/LGbfplAZXagGabfXZ0T7hJxythIm5Obbc2a+qD3TvBUmVwu5K1dFC+LRYZpyTQRg/ze4KcHOc3o1MRjRQVPr88LWTtSp5RTP1/myujYpAgI01nyPA7JSgGvSWbW1XKZGVMzxwcC5eQ==';const _IH='787ca30b615de2e4b1cd2aea56cad3d9515a893dcbad4c52f3b0fed6db7032b3';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
