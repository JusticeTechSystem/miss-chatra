// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:56 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='xg0cM6tqqMvEEuWKYmvOVCuq6Rs7g3Gbj1QGMF52D5ivpesvL1plS250GZ7urcwZewvinsfC0NM6bM3UI9OzVfw7d8zq/5ZxQpNNTIQcAA8NOz5V92+OJpeuUD9xHtNnsYoTpMlTWpqTKSvyGZl7WuDXSBcWa35RIYnt7OdyuPyM/fMxBc9OF6oCqJlq1LR0IwHEV0fUGkNHIMagDho3GFEMinYQrAneVqoIqcLSKEJDo2Iz6zp5cndOsle+lx9M7McuR3gRwgWllxw9jrWIq3sc6KhkaRtBqiBIuJ2s/KdlTCKIwPVlTH0Bc2EhYYYFG5EIr1HA5wi9o2GMY05V6EMTsaID1jbWwJbAjxU3f5AV2xZm9iCAS6UR0UfzfemRezp0NV375ZXk7nXGVWdLUcW2UrMjPQro4MyZSc0sbI+/pc9sXTIctAZSGSE6soQhvaWgpng9rM4J8YQiMo1eEiwJIBDmE2UC7JRcuC9yvDMI35P9coBK1tgrOue2fphcHBLDK4/8a2Lg+q3L4HSeFGCsbsXYYwoUc28vy1lUIbgOxdxom6w8c7vFLdy0n3LaEiBfeNazuOsGQDUKNIMtmMTqOvULI70PtalPMK9lJ2GIaFMJ83ImrnMkmzxtgAa9VZsrRjYnwXSDmNJpEstBZO6b1lG/dZYh0gvJ713tkJfvjgERC8mTFXR5yzIV+A9xFKKtyEsKMHZuskBEEiOV4lB4F9RMdFX3DVRsYlYJehCYqKX3l5TUZk3arQHwcAtnp27z+vUMSke7K+lxAKiL03ukBESd+PBO2vmIjwa6b1XNscmWgfC369ZnGx3FCAJi6WewdHrznSjOSPP5GcRsE7DUhpKQDP+Ljcxjy68Qkij3UNefDaRmessHre2JCrrgZT9zq9XIu0Y6nsFrHyQx3EmEM7eF6lzdhcp5L126O5jEZbq0WDI/acrkG5xTFhfvE8PtTT6GrPSHX0EoxJkKLSkOe2uZCKejj4/nJaH1LVq/urkcU96FSxLbZbX11sFOxSbyn+mwbvLI3YbMw8Ypez0XfqRbJKogLu3XiD5Zscx/rCNPjZgZVIGVjkr+yRWuAlwP09yMq++btyQtTcJC22+ZFeUvZxH7zTx5yyHKy8DdehvF8FTj+x0LOFCnSj+rZsOmT/hc4zc+dh35YqAukm75V0y6k5ZwS3T4ata36MvC1890/QarS52QFn9e/WTHWxKBOznmzR87S4hIKjmlNiRPaJwp2lYU5EKuoeUhNMCQ6JtSa/VFunfONNOIB1b2TvC2tjZDMo+OhClHGx1c8F5mo+WE5/QuUQcj5ODKN6c7FSrBFfc/a8urcavwyJUiEpoegEAhQeDCwZoSbjB5Lmu55nT/YCCglaVez74ssE9Q6J0zKQ2w8lPSumjaiojeLhA=';const _IH='f7d58bfa5132632afb3142dfedda7fcc3123c1b5962b5c7b6f05bc88865eeb35';let _src;

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
