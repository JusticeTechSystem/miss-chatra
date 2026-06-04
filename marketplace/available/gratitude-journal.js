// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:49:43 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='2dAsgAL8d5NR3vVd4FVDnkBdF7raqkscqI2ABQnjdiCbXfYbVlM8jGr62cJ1Ab4dIGPxjAw317P0LlhaVW+8zsr1A9+EYKnwtpnCbOfV5INoYRcz5vWwm9+t6I7H0C8EtLGUwijIdNBDpq9NmNMtLP5xRYC6OOIDgkiapcDcMWM/w6bz8lZtOrEHJz4ARsHX8eF4UI4DgtaXwdUYT/aP+lxPRSd1VriXQXoEhC9Hl8+xCF0WNWPOuKXD9C/7fOj/k1n2x8Gwa9ttDelH/5oAQ7GNzsH5x/n/REI+bpur0IdTpVjRX5dizkRShiO8oFSv7gS5ZLbfh3Z8Ffcy50RZfB4aC3TGcVmw2d7iR0bfkeIei4+cr1Y+RHQLowpAMf07eZefcIAttBnKAcjm8nCVgj+U+bTaoLrcYTV8gw1lZEprGA0hwZYOiG17CrVGZmScDeKtCbpg5QzD5UmGnbsjO05FnWRenmoNHoa/lHmJburd5hln7Pii34iap3O8DbscgDVAWIS+GzY1ke//Sk75ust6XkNIpO5EKKudb/gmA4JVHDzz2F9wKDZwBA+o0ttMGNYtfovulQmeoVSLy9ycuVoJsccZZgoHtTLD3nAkgXbavCfnYaLYUKUSSnODW0rAPFqg4eBJkLTaV8NaXCf7VMN9hU95nl1vXbfj+k+QEh3CQCvBWssFyemvr0C/Bf10bFJl1T5v9H/DJDTB+vwzn+bvi2q1gcoZiG/a1PMkSUBtiSJpyXAfH9Kz8yZdhzqSjyGh9tdFom2UP/YwUHqJStOuN+ORF5Pa7hU3bEJwY6gxcwk8vgk5rI2rWrJ3fqsIF0aKnrLx0ro78ZulZv9XCZUO852+iuJBRx6A/+KulEgrP13J9tars2D/iQ1weZExLk7CxabCTDAvgYxIOQjSPsB+xY6xw0qmvKr4vjXhuQaBQYeizGyggRr9waTYMJKZxAEDmctrHqU4xdxt9lvbeaZTW5Bbb17Cajr2A0LSV4x4rlJPazCPUSFbP+ezsU6HbyK1Y4jTbRgcOxPXyfkJiPhb0A1F2tekMt78pY4gpbwFpi1pv1C2O/ZlhEV9RGPUKyj2KEj9sYKw25Qlwd46ncVjyyQUGo4UWFxGeE0hTElC9e9sye+JBTJhb6uvUoaJtO4d7Erxani2BMYAvxONhkq9612/yGg1H5cTfluLk/YyP1j9clP+IUToKb4//ilYaQtT5ceoQimHW9gcFKSvkc+3QxeiI1jM1ySyFtIxPxah8K7ebQRLkzC477FqTjHC5LKLfCmTmE/jJFuEzQiIYdzESaVdbw+s26VlvWVGFHjkWaeui2Y8PQ+reyVETlOpAtrw9aIjgQ9tcFMh66BvfpbtUZgVGtZRME/J0AHEMl7/4HunTIY4RJgXaJqC3a3NQ5tJAcKmLgjOd3UoW3yRtJuvdntuQH8n9PHJCMW2Hh7LUFGDAi7Y0Qtz4cexUKsuIhgl7C30KHMefvLxxmU8ka7hRcWQTEX/aZ+pkq/w2SAdDosGUODPgnxr/f/mYKh/2X9NdOmI9EM9f3m2wGcv9m45iXrvZj+l0YvAUrXRnsJIztv7THje4hminN0q69J2mwm13cOujjTcAWFTu7RBZZxAFlFZbuOQT5L34182a7fxDSlkB1A8j45h2dzQcK/0ScRhnyn72hDAkdxllXsZTzbGWIsI+3OZi00YOiFp/uO3eshvLwlKeFsJNY4GAPA5kovPqk6kdSKSFUqdneWX6KFKG1Zmv3biPO717A7YI5+xsoNaTsG/y1PqJtBtng2/XoAa6DMjYSHpJqk9caQclR/gKQ==';const _IH='c85f1827363c863b121fd12862362029d0ca5012a7d5e934b406c0ec3e2c4916';let _src;

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
