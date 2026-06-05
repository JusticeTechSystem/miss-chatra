// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:49 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='LvU2p5D/ysa68SApqwbu72Gv5Qf0r5yACRqt6KX+h4U41V5FFknV9FrouG7e40mOs+7PlgcUfjMyAE9AmGlerfBjLxOPuMWcPeYrSAw6/H2oqNsyyJmyNzTE9RXAX/t19ZcNSRDYS7mrM7DDCYYhOfSFWY2/Zo6g2yi2r4TqiOAw5kBEq9eBu4gEGUD8Xt67ZrJQnzoMVx/H37ItmirTqZ6rhUEzSdRfU1HdLbtMs81/34I4i4+pKmog9cAbXqEpIyFkS6wWDXVcVOUEof7FPWXdp2OyQReEUc7EViYce6DZdgLcO8A1eRoTjT5IJ/vdB6zEuKFsSCjVWUxZD/WzeQ0XmEA3iEGOn7hZ/Hn54DQBYCRLBR5yMofY/KCQhCQqUYbH6zEeQHM+xJkAdXRzZa3t9jGuNxhsi/pNRbAYKF5z86Ej0T9CNuo9uVMl7ScI8M4fL40HwmIOABFGRGwkGDGLUbtICTaPxJH1r2Ug+eox9IVwkTeNYcN9oLfsaJsP1A89TLyKsR2V0mHtk5XSL+bm6mMNtBBP7OviCwA12YXr2dNuymenC1oG33bj/+rHw5NtZE4q+a78Gxxi6tQ0aPFjQqzMposeOa/5t/eLZYP72pEdz5/8KZTwsuda88hAFasrGVpqHVuHLeaoW2iE+y3flMDXjTSQigZt6dfl2tfHl6KC17J5+jxtpTy347NcXeqqYdFcih77Z4CcPfNsEE8dhHj30jl23n4Ohm14pyeU5Q==';const _IH='d3c503367dc916b8a22fe8269d5e8e7610a24d08ead8a1f519afcfee3fa89521';let _src;

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
