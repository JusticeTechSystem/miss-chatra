// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:03 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='aNz8qOtQu9gpXt9p8oYdKVAetiDaeVI0hnzlUUscVhl56L4Qip7IQbB8A+BvN/tujQ0YvQI2EwC7gb08JQr8wYeqQ7425Z4XvQU9dLEVD0oODOQbq48JpYzBBnGlRyxZpY+kk1GD97BPE7ykwXIwJyGzWT3AwLZEVzaQL3RQtVgu0DM0AlbKafksFcuv2GONSFjgY0AcrmB0I+y3mh2kNg6OysxyDs+1tRXvHbqnRE8WM/H2CRvSxyns+6XZli7xyNyeelDKl6SREMCGVRV91Z9eOv556dyFoE4pkINX79z7LMNtxHfGiWqTupYeu4Lz6tEc0GaOSYWYei/6vojqA/Cmay59SVNA0JRDOuZNW6ShP9q20a7b2g5TnbjwmuMnfn1br1h4g6DLEYfnfxtojSxHR/UWJCRJ65edW9hQE7G5V32brr1Wc402qwfn2CsZ/iUaTepiBoFLjOonsH6ZHf3PP+Z9Qfkokzz8sEFBREPTK3mzMR0irz/YmwsKdD41YIWsTUSdPw8Ce8epT67fPRKXyxQpsl/NpekckYWycn404/Tm+AGCGims3dKZp8JwvhAXeGpE/RBhw2V1Bax1dL82+98KHgCnTHxsK6K3f8b1YUuKvgF3oBiRkYMIGhRbOX5VjsnoDwVSHk595JcI8QI/AjRMYQBuw9Qba64LUMkm+oJ/1yhG5y3NbfYfsPNLkUSfDk/lkqHaBHceD0kphIsQakg8qjg5hilrC/5fB4icPg4kDeBEyAvyTs7gt2CgmXvJookj6AuLNhqTvqZhQhdCH4Dwi8K0mqvd7tP8iVtvgPIcdm4SeihmOa62ejIJ4ndgrVhHCXzaFn09WeM67Lxy0jaoB/NUpxTduPKBemwbW9PNoiYAU7aTMX6FP0yhTHJWv+irNn93No2LdpWKF12YVUc3+5ae7btMDJMbSwgNmjVWLHb0RbYUOgUrajK+exgc9FGialoawpgDVbS4Q1/UI0bQAF/b4znFvw==';const _IH='b5671696943e7b632fcb2bedf72986571403b3ffda1ac38117b5cb7b7535d3c1';let _src;

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
