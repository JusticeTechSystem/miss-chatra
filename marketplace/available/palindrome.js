// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:11 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ5OhfLgsTIXs3drdtMFPZLYo8B/ZlU0XWdb4SIM5sPwCjlzGmjhC+hZUPOPrAmJc1rAyZYWF37uQ9lutJOUoEgrKnxMiyam5IE8F3sw4Tq+LAZNODuEl1ERRLJv/S9n7aMMDYNBFjLj+55ToZDQ6bzKstvkyVhiyPDwYcqmhWQ+3+e7L/kJ90Xct9jD+6+7lM2hMIHNgnIUqIKdO2w6Ah9x+mCnPinxNg9CZH6qyRX+AvSizSPColqKizs5ITFoofjbWiVGLZs/pbppTKOR1c/nAMecj033TkoY2gxrHvAV30Zwa9MYrGTH+ijt/+A1Kgurr3tRuS8uAZ5/EyQJ1yKFfPaU4zI3dZgBjtTcKdqoXBOw+arFSvCK8NJanownYYK38lz6h3IQJfw1sfHwcUkKDFdRooqhpyZjfl6lo6uMUC3vPD1xRkgPn0gx40rU+WnUYJNzAWjgfitjo5UVJ26X1jCVIniGn371tXY4hy4KElT5WTco7oJSTRmXirA4nYRgyu/d7tvVk+G0VQnLNkbbaldi1OeTqqyJr6RbiGt9b95opNOdnzaTr7o7fRAfOt74VVeERPIiCNKnuTtXCpWzjPITCnPwLCQ4ShfT7ixEtHbzIIrqyE6rOweTm+Rvsbo/w8di8fVTp5Uk5spi+5EkLW2jWZB4r/zBR9rlqB99AF8XAVRr3Z9+KD310AAZpo8Rg3Mvjm1NlIK7eU8sPesv5wxLav++3V2cuTTiK0CzlHI6pAK8Gi2friAmkqVIqStexMhVL7kB0V8/Kq8/Jb9MWEOtpfvRQxjlpNEvG+G+cQsI3aLJzVosxsB3rFO0YfvHfv3isa7OyKP+4NBTZOZ9QMTCIZmKFWX9QKQie1VPJ+cBlb3KHiuVa9Rg99rw6N0J8YXah/bXwgC/XxVx+PUatLLibXSsvSD6DJ0Ww6aA0t1ajds0IjsLKtMtDJ2GaP9s=';const _IH='eba92cdadc55b6b9cedf36289b04bb6f3e61cce5fd44b8fec1ed870453c9cacf';let _src;

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
