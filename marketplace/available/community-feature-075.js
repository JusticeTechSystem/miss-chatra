// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:53 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='o2aWD3RgASzadbZGBnLqCC2kx+FOsRiplfnRsFQcb2Jx5HEou7S4m5ol+ZL/L1tPbilZokFEFA+6jODKSAGGo4SlhG8hgjv1GbviDsLzE32XHdX7wE3UI5KfmflEJqp7B1VVKcc8pq0l5Xm66DhlNerYRj153jmHooqhKk0D7V73Vvu3RaSDahfms/0TwX3SULhD6IjB6gr4H8lMSiHW7AigbSvN8tKFh3y6jeA1RqcXDibCHryxGLpWLcm0FXHC6J5jmy5l0rVFRxxs1fMAZL1xWyuBCZzER5ZvAtk2kB87u56CyjBqFc092LCzdYMyVtUp+4sdM8nceuQZpTRznsLCch3pF2tYB49bXRQ9exyiUzHPryfbm6kRwGaKAwsN3VhqzJk2QRWdRH4IDfV7oc5IveWzsvfG67Hy3ntvu1zf2NBQBMfYyGZsNSbX5bNpjy9IwJPg7KdxB1Zmh2qOVzU8W5OvTAQC8QQFgusL2qIvHM5jsEUvPsnhrVwDKw6kyPPaF0lQpaQmf+5zP7So7/qBPgjg2EMKYW755OyHLyCmToTweCbqgi2900elVU4wsAWpBgHtgCbH0WNsrug44T1HD30w4Nmg2OMC5iOeoFAkoB880Kx+0M57uIzOS8Dg2HzeaX1ij3BhDtiJZa8OhRVuGvvpEIpghTRLUO6Hm9UM3w8c/TfeAVaoeqfajK9LV3THHSzh6BYX91ymXv0YrzZh3bHLBVisrmv/6K9H3AdU1Lpw4XQ=';const _IH='f8a456fdb98a63a40db33c5f2c5b597d29939553750498a39b22354310851143';let _src;

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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
