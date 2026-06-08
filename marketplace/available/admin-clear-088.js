// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:21 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='7b3ZGg/wEEORiO3u0xDZzMXFs03YZqrfYzrvSrEMi81sUZvY+xOAzimrDwYCfQmC5aCuM2VsOgKZIjkFbjF13/AlDzHhMbXbRnsuc8HBspYw3zTnEiIQ4OE4Lbh3nZCP1W+VQh3U3bKtsrqE0gMEzDC0WlbFr+9++cQgLScCtznbZ2Bk9IJlL1rKU/EybyURZ1S4T51ambng2R9PE/WHRb0kgUKIVZuWJizhgEGpizSNZwysyx1C186jk6+fDyZwJhVqGYpa44zSJAA7tmM6vZboJ2+EJZtEDg3CaB6JkharHuIc/fsPy/AuwAp6jqNd9dc3r+FPVikDDwHhHgbPGs3u1FBlmMQAwsouT7XSYappCsWQR7WoxRzcQlcpnCOvzh81/qr0mTfvg+AV4dkvN9/2Z0c1Ts1XobBWG9zxYtZpzKASDnhb2/cGah0z91AwviMdHawrcU+f83M/gxCeMTMaGWcMRLXjbIjapE22lRHz1i7qpbNa+v8WmOKTIiJN6XZvHtckPTAloeEH9ITGapCzd26nFuFfwWEj0PkjwER17ZPMG0sS9znPEAJYzs10XDmh0GmUKgaVawqXLmWLUW6gw1xlFJl7iZl5O8nXDQSU8pnLKkNNxpZNwVqqkK2r9pBgG6lLrhXb6c6zDlrSsY39UFj/FDakehVl2v/5y0AbI1IGWczOhvuzddObdGQrodccFcMiTWftmDrl7tHWJ2ut4YBXTM20MQ1PGxiBtgkFiImBQI2ZwQLR/JjSxtv1YmkCPuNfiNW1Nmr596zHpgi9oo59GS+oZuIOpm7BRZ17vWHQMZXm5Y8SaV/wGEtkKE2v+R2CDtKNqjwVisNQE5YvWFfLCTtIQAGLDXx1harArtocxXR/yxeq428dK2wna7Sj1Jc0mvBcsLOPNuY/YeIvtb9jLpweo1mK/TqVAtpLLAGBeycQaLoviFnRGYBiRlVq04PNz+R7vtuGVEkajAVM67PXuaG6ooYiA7wdLo5noLOz26M=';const _IH='2c2e23d5f9c691ababe29fd018e8e1d83b78013f93884719006802b89df5ae5a';let _src;

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
