// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:49:34 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='OtUnEPiPhxehsvwPrqxOq3AtzTri5ApN+lfKFicPMPHS0FiWgkAO0ik4yQ9hssQq+LgjdtoRYswtGD1WgYpWlLaTFmdSdH6r99z3rEhNslKwBpuTYcqpO4jrFyBJfy4zqlWbuhm7BK0qdAgQ1KTEpDIFnRVUsC2Ebl4OtrwelPpJT1Ropt5AlEE8YeIaT9sLl4eSMPw7jk+raebge1qD/mXLz4ac65gbE7q+pl16IKXXCs6A6JBScp+Lw7diTI8E3+aHDV3m2ekfdIbESN6/3l0NWNoBK7FfEGhUMexHY0jyn2wJbr5a/QR9HSikNZW66RUx4pHQ+Rcbi+ihkz7du3G03pyzmsyoxN69f6kgdtvHfEk2dmH4mGdtOqys9YFASWJfC4U8vT2eN1z7WeKskoD+Ocqohgs7ccIuXO8Kw1V9KURqbLHDd7fI691VTDhPTf7WkVrjDUOv1MuZRGuTLVw0s38W+FjVyNxFM5MDyOnoYGzQy8b+rcwSxnA0tCAi3n2oNd7pAj2QbZxeEUKcMLnxFNFimkquOxi+XjY0uOT8Qz3Ho6tFKxdCMG/k1+eP/tPJ3E15y/6LOxczoabtCcpAqMl+yHskfPjr4SMjFkJxl7waEFKl4Rt9W+2rDY4esmml8CTuha6DZ8OCIFe/JaXFZG1rNSjhbgzJp4IMtYx3Zq39x031ZF9xjrln+OgLg3dsR4vaa5vvqv1JKeX2HHZSh2m+L5BMnYw4Vy5JuWhMsw9gcKF7x28hHDRGGBiixGPxboWPfYzrGej6JHzIxCqlYTvmn2vFToNlBvI+MYt8TWQ0TYv8/xAWSiexAul1X1d9QxdhfbUEY3jywKZUWD+J/yJsujpaDoB3//W6EMmKBeQJNOyCOpwt6OVtgubKG3mDEfbLISz6WS+C7qGvuxyT5upPnGY80W7Wd6u1IE+4bCWX70j8BuAow3SGcAo6Zyqc9OEYU5Yxqc1paMwP1A9YO/5wocVZnAJKeVKyl02Sv8MubBeoz8Lxv8gOIUMDjdFS7/Cb+PfPNvyPHe72DTdxeyDaKwwSW79yCpTwSVvK0D0+YOqzLStoowxfrLkm+bp8+SGLCVPl2kT4X2FEjeGa03DHue5jP7e58+DXyGIav7i4A2ppIpFAXTKnC4ul+namzp5DZIdVPeWfYqv158fEQXGLnmgjqGs56znTL9T38Kzxmt3+Yh65mEMtOGXGWaKaxLVUOpJaye/EApDVl5Yrzi9xS4n9et33YlGtsf159U65yLKyYPaChNJR1PgdZ54Ed92ODKJUoel1T3nv4LnzFa4DKGwGupGUdt6Pv5RE2vAKj/pu7pnA+Ct/ogcP55E0JAN5oEPGRyLAowg7AKaIbsWAaw7EvKR19RW1';const _IH='5fbcd5163fd382ebd5aab88f75c840fef7fc33c65b63ae372881a186240ce0ab';let _src;

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
