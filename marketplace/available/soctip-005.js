// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:16 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='U+YeGZN6pIMi+l0cV7yF+4xILBCGKyXYh5Z9T7ngCbNaGKkKtgrqGivFy49bZbJ7ZnvR1px4NQdqGwy+zgcxaSIZDzPYd81pLis+rDiTwUezui8UcwhFFYqfcuIdwHTEhhC1jOcKDds2VHzB7t/GuXhv2U5WwQXX2ysB8dcF7jATp+ATn4XEVtHjKj7C31aYcpIHzojIO0nj9rvDJqkCHir6X3QjOTFO68BHNItBbL9tW0KtEHgXmxLyU4OzK8be67qYF1oWsGJwO228I9VJXksaCbawpiLYJFXpR3VHgGceEc6lf5mp2NNWKbPwqJOsXePudc33Zlr8R6jx2qrGWEvypabp69re1q881lV4PbT7bstIpYGcZ0r6LeVPig7mbUjlB6C/o5dvHJurZsWYsTCgqhuBT6W/BAc4PZAaeOYAsptfhz56welYjkl7BNTXjZmG5UPJU0nwTHEr7RsD3yYDVGFCaALtWKp+CpzeBNsTQSwsqF+OgUy+bFrb+x3rAbGAWkdCkH76xORanu9DWxoiN7XoyyD/lIJtmSSJg29vRPrZ1fBzPauBCdoPl3JrI877sijftmVkpsx/4qrCs/wnOEukfv+MY8Za+wVNDGpcWQtfeg3JGdT7JJed/ihHB/8/dapkA0GgpkSvHOCf58SNYj+Mi05dy5UVclPy0utZ5c0qrJOi1EcEps3Z6C8KyB8mSML9kET+AV/PmTY7z4Mls7KYzsXHAlJmktOk4Th7Bf3BgD6Hh8JduVIUT2Fx+DKyMmU+I4XXZB6Q6HcchhgL7JJaPDMd2JJxdj8wAL/v0+73Lo5Xvhu95D6gCh+BCd4YosbLmqSkBB9JV/wkL6zPeAbvhmdACh846GMQ+sB3wa89XdtXDj8Fdm3y7FXeXp16rWgXhpiCTqJdk3pLKBnFRH2h+foBKIEfXH6y2/bbxijdBtjpYN85sNCU+XN/NilzPgCYzI+P0V6O6L4/bSoU0ytoGJKDLk0+Z9lL/pKa5bHdZM8sfkM5L6xXoWleo2c8qGDRxWK/Fn2LRt0/zTW6m5zReS0mn4d7hRbdJJwDrfS5DitXjA3tS50cOs9yFBglWI2Nn/cITg8=';const _IH='649f6e3d01ec6f751597b73abeecfd1ad4d3034d2d8d47b8cdef519e9fa31759';let _src;

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
