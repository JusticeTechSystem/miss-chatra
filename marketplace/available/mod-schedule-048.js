// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:24 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='hIHaYzeAVqQJxrh0MkLmYApdea5bsyQTHth+Ta97/6lwPXvUuOsZr/sk35pjbffHdWkaK8Qrzsrkh2z4p4ICo7Qb4qjF2y7l4HDnV350BLk0ZPvzQbavUNdD62yXfko504U/tVbGSDRl8VY5dqqPHJnxnuZ8rkNnOMroK2Vy6HIreAseKLR7SRQY3I14PjR/N1ydRAzQGISW8bHfWzkAVhUT0Kuco7FG5+RJ9ClMF3ceUCrghk3zXrTIJu9zxQnsBW8RESUgZAvF7CF7DN9bB+DVT9zHMR0F+cnawTDlQwUNrZ1oaVp2vV8jcB+1BLlybxFly57TIgqzPAaefENX9gePwxBaak8M2JGPaEuYPqExM5poiWLj55ijN1id78KZvR37X1PuD5pPI2TY7Elt4Dl3uso3ZffICIF3y9ZDKKD44FGF6mtCCkXYwP4DnE9p0DliX4CLB7y5W3d8mJnaxNkXEtGPItqqmv9eSOEiBu15DM0eZ/Cq395yoTWWbcvIP6l2NhKW3nMIE60yery0hGXzR5I/qSxbyJVg3HWyZQjVf2l9VwtZJe4h05FVt9saKa7uPFiomBEUGrEYvHBo40ql3mxifPkyfj6mdO/PGqWSIsKyZ8YPZgeBP1SFSCVIvh6n5n2u+L2UNW9LL41Hs8BV9R6UInYMG94rHwqEVb1woqt53Fth4pB4F5q51/C5BTHoIH2W1g6iJx30uBUHJ6bItpNINwB3wiHhKvAaDXbnZBetMMqPfMeGQwkW98tpx4JPg+rRkoa9VxRe/q/6wZJQztVzp4iZy1hwIWHwocrK3lnW8+RQmB1svPTuyN4u9dy7GduPF2j1QBds7duVnEHdOsQrfguTlbJcZnC8NTjHuDnqBlj7SprsmmkweFNxGrY8KgxMg7mEt00cC3KMsjFY0iraKffp3BVsrxPnSALj1nBg3sxrn418MXnh3IdS+99Vfkeb9RE8Bucw3/oygX9ON0jIaJcNUhnHmiifHYU6Ya96s26VAXmpKTfpixMOtUOcxSu+eE6pld4UPSxJYXQJZQ65NEJaKkns05Xt+7suwZwGU31YVcIM3AvJnEJv3wX0MOgDwICKh92qu2l3cDIbD2MlO7EZN98Txnm9L8CRxHTkxboF8lpZGZFlddA2kq6OfGPJJwZtvb09YksnQ6mPRKtp6J+Kh2Zz77IvmGCcoW7qhO3dsv1lQULLsR6iBWdy/oBVdI4wiJkOMl9T/7wpuBlL0JNUz5lFMRbxYzc+n09mOok/idQtpHzTyOi+Su8pLD0MVcPpnjt6xklAaRze8NL/adpmn1eOBdypPx5D8nEUdVVMgwmtBZkqzqce1TjbCfDvjqa0HFg6IZoGAhjVya3luwbapMi2QaFBGkWWvPgLKx1u2l/zzzI1k/zLkGWJ5dmP2A==';const _IH='c21d91146dea6ce608e0ab1f9c02fa08fb5597cfaed49461dbd1164248571663';let _src;

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
