// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:21 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='OUDYwy2XV4htiwc1r3p4xXlpf57J3pOsewy+AvGW9Pb9Z7d0x3rxU431GgdrgVTtz1kUyGOdbOJMRgSrsZJ59Pq53DfH54xrmiioPMGAdllgadibUhq5wOoDe+VLDthnm9z1DdduOXpQvQ4eCNHcjuEgq7vC7kXgXl2OjA8KDMxiUvTnRonubEk7ToNxkwql4vZazt/aLFtTfi+r2itfdZWfIMBH8ZxK7x4r5K7llBUIsbTvWdAJ1Vbi3XGkEgzI4BabSOR93q6JXpqut5pTQWmm2+xxeBdskS+9LtSWr/Q5bn32LR1RlxL+d4mORhjTuqQehDFgMoy+VFR3xB0vKofOkdeiq/iXjcS5T2EeIO5R7QypZWS7/dPfo7KqOpgNUUfGb6sNTOA399W1oQi58Ftryd2+noU90kNyulpyCkkp3NNNo8oIAYuv7mHGs6Se2xzzLtXBpp3mTglhimywtND4xR7+86A+ren5ciosxqno3f2WUqSBnGeZTLrgvIjwnZ4hYS+77gYmDO7v+69G0v0+2Gq7ioMB9h34gTE1lnhH3e1f9nper14wt+F4FAhA44jRp5VdFohicG01fZS9F65d+3NeFhr5Iv3ST9pmUAKdJR3Us5P37S4ba0CkgzrQnsDczLw8Lj0FgEGh9F4iVinEtYfUcd0M9+sLXlWF9PLm3FGwsV0g88IGNG/tSlXbcpP7lajwqruMmqYBeRLW9nBwaNpPJHJibEe17jeM4dCKmuNsuLVqPkps8F7pTm767iLAhU6P3uoMba5bpEjONPRmfpP0VaQPRPKuf9TRkbN3FIIU/Ffb5CHxr6ucnvUKi9GoxjFG3FvW0gLzPhSBeDI/PXA1TVmMrmlbYbdju9ip5Q1M2pbWz5rOeTOQdwj41wSZFin3+TAjzC3ZrDV/i+uyoiOk0bCtllsL/eummhxCI5llpnleky6M2D0C2cAwTVXBTZ9PcWvk3YEhwy7V8QguksuWS7YbQ3VtlFEaETRZ50cGAIqpD9Y2a43FuAMJClsSE6hDAvj4zKuTtN6plCBBxnYCvTzbQO7gLxcRZsiBqugyuclOjZSs1p4WWVEwkgZ8BNu3PhqesORI4UyPUrLBlaOwyqwJyRuIAgZ9k7daUCvh/2RZOKEW602P65YFn5XgkyzDDJoyNmG9q/YKojFTHJs/Xq6Qy2jJVZCsapVytmexoSEiXd1bgd+ItzIQTkXCUVxytUvHYhElqGIvFSs=';const _IH='8a38ff8f6e1d2a360256a1b17b6624d2d9d7f0b534b644eaedcfc2048d04909a';let _src;

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
