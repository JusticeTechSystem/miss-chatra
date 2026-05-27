// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 08:59:29 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='sg63czV1BLV9pQZFM8okuQvAEcpe3a7vORqNh8spuYyiwjkxpLx+2xFMU8U6sUuhQrf843gvVbfN/Jx6lz2+hG8hD8fuL07xrJZea7iIHrFmO46l4xstsev+1JwGvBdowspAUkqK6If0Ynlv7qb1J+V6BcuJWS7SLGKHb8SzTXA3AvWLUW3WEoLgELaZk1p5m8YPosCbfZxuIMzswXrNbi4MNzVBmTC2uHdjoIVBYeWack+7ebpSIdYT4eFKNjTocqhxovWJHiha5OaFsnrtIXJmKI1UjVri2xmOOz1f1vMxcJ21L47/b3qYwJk/SGVmAe69clQ6FajtfXuF/j9auCt3fA/0pflZ0xqnO668wkMLjeaMdKj3ENtp3ReMnC3pv0+eD10y+fqgVMLiYHHfemT4yYHKM5yV3Xpb210df7ks1jPQ5U8m4TkZ3IMpuzwJuJJ5CcvyPPj0L+cEH08WQPyQQVoD/RK1dn3jLuov+5JIkQBRc2KEseOvgx/6xmCnbPLi/EtGsg5ufhBx+BxlTfI5BK+nnf/ZGgZMyIraQHJSPuWULmlDVM9lyFsVM5WZMNYhWWfVVqtI/PIynrZuPghNVNFeDQZ5jvu1g8/8819k3zwhZN3qgtqgkKJcE9BACNQqdCwjYpBFnAMUaQf+O9hiiQFokrkYe6Vj+HJdsqaK57tziF7NX2BjySZDScJgd9ULtX1su1sZgmDtOTCE8oKVVCPS50S2fYNq1iDZm/ZKHyGx4+oETCEI7DfR5/r0wcqwxGFGKx7SEAPXte6lKmx0isWnAJohJlGL/zcBQD6pLsl6kPrTc+9+5cfH+F5mPe3rbEUxpQ6RGzlEXj84F0LIQ3fccRZG0KHG/YEqtgy3h9UXfaoz0VGhlappOwfpykjsx1SVvj5o20V8tk0wwti5eSavgGNL5F4slsEy4g4c103fQMo8CkHL4/dMkJnjxCcSo7aq53Qh9Y4SbxXyvB8uOvQ6ciVw+2MKlg3uYhnCR/dQRbNVVftyZzB3/jxnVw==';const _IH='fd81441b1c9cab5b8bed6803e8dfd77ba09ab1d1ff79f523b445f2c93a0d9617';let _src;

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
