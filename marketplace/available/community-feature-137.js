// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:19 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQy1Xkv7pRnCQzKYq2ZSHIC8t/VZr4juxwZqer8xZB2dPdvIRB18Uqh5lDHeizj/lqIA/XPVXLME6RtU36NJ5vZ2eOqt22vKYfzFo6UXcNc4/7Ra0PhI8pQADss6PVfCLH/Xv5dGQ6YAkK2K5bYtEcVbFo5Ay3dIzsFN5ysBQUpSdR8uKaC++Lg17IAaaBHWNefrzPFYlkdxu8Zo6y2nNzl5+n+UQtFLlPpg05dJbKFaivwZ7MlRctZWmf4CgvT7vxWND6o/Azno+vejiR6doPv384ST+91WB8Z3XDjACR+LClrSPrZ663uIDAHbqaWcFKgZTjLhBvBa3uosfh9qh5PI84Jlcd+LYUtsiaJSenkOswlk3KEdlbNA0QM+a2CwGNw88pnv1yqQx/mSCd3YgWkxmzqx5WCg5D4CKsBDMFa9Lu5jQut9d5YJzHo6qtH9dNbVtKEngyh89kgOi0QA0jc0JxEGuEgD+r6hPzoi0V9H/Bqi3FG23tWwi0qEI+qxE1/SNCpfzUM5ta9lGzQOMaGiL3viIlsvg+lfaYqpLHLXrzdDAnYYpz2KV47/dEnANgbODgGR4BEMwih7ZXGNSdkRRzRzRkxWm6hZH4yeHcUtph5nNBofJaCHLug/+ljQ9qWaOCtDTCSsSfmX5shCNi23oWyD6t7cA79EYZmjV75oKRsZPjBaeMHOnQVGMy/X9Vyi8lZ+aPyPtsrERZngdZyQME7wSiO/8BEXQIlk8fU82VL6J';const _IH='54798c04bf899a172c14b9b18136b7a6d113a548f3029e25806335ed9a12e375';let _src;

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
