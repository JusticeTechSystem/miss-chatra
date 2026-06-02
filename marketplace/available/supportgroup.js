// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:34 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='IeqVulu+wHNL6P5rc8QhluRDEWzoQyzlwZbcf/hScf9Beoh55/m0RyTLIjvVPHvjsNM5mMHvUybn39TS7RIySextnWoYS+X80TU/818zDZh33h8B02fhTCuOmFgPuexD1+QaIWd6Stxjv/dKrDqsmDszldShCYCxipNGkc1quNgXeUYjQ91ocPlTv1CJGNT/2PiO2ka0tAR7vDhiHpE32AsynZYnghBoV4xbFntbWc2v+oM8I6niSMClfDZzliEdG5236H+4Zj5T6Ysx0qB1UdwvwYzvuX0NhNxp7A2uJnf+qeM6pxAy5zfRd8+RJYg+wlk90zFlj9lpTcCDqhOuGC4lmDaxYnbbqoFXcVf34UfFCqZUaBMUtJciEq1ZAfTXsv/YpVNUlk0A/+0Vjvq69HVAkHwazXyvBeL2yv39meiN5GFHPLDIsXUD0SZeBmKK9ZzhCv9usDvBUgxh6v4/Dmlqk9ecuKx2OEGyV1jdc4h6pXap2x859z26IAz8E8UmqNOQx/E4FS9Fe+a9EAlagCMrGmLiF7bBWsuPU2XDHA7qiSQcjkbwKz2p5xPAQKlwjV3PDzsYusmjFzW+/BXQb+/+lbHEGIuxDk3TBLLBK9lseA0i8zJlTfWohAPQKUtvuA3qqlurkSfybJkR0jljXTlW2P9qPR/MfnAozReScQ3kwy5GeSJ7kZQcVcNFPf+4Cus2VwaUTknlx1WCvTcX6BHvpAFtuESXUza5lYzzWOD8N9idzTQ0WE01/kPvP/qD8ZpnO0QDJIu4BFoRNo1y0fGfdy8wKaR0aopiM5QBSV6p8PAzEZt/nYJuKs2E8yIq91FWg251ikNT80F3u0YLeOV66RPr6G+RiO7OZ98NFcdOZJ9f1J+x7o/Y/0kth6/8vBy0JoGKY1V6BbBTn3WnkeikiE0NkSwNhhpf1lpPkZes33LQmoSV44vf22fc1y782mThUNOyEki11jtbWGeVtdeHPJAhEi/onZoJSg7QHJKIAYKo7KJlMTdUkF4og/m7suHqfVJI5i3iBhigeoUFUFulk450t3n9D/+I1gm2XkBpyIvPjLXL1W6OhbsTFIIx9HMxLWPjoNFp75k0Jb1lLrS7gEnMjlCETJOkDiKheCD12JhjXn7YIy8KURszN4MXDkMvhG8Lpn1ZtCGd415dxM58cMKA8j6OD1q100DmJ6z+G7p1YgSQPfrs58QeQqPOHopRnvBMspi+WXwlfQ==';const _IH='325baa825a6490bf41951d197136473fccdd8e45ffd782670ec0cdf212ff0f16';let _src;

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
