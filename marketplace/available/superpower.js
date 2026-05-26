// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:30:54 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='+r2/1X5NBieUxZZjyVvtMuHro3xPE5Dti5QobMVILPmfHidhAZQR1rclXE+ya6gtbMt4U+X4V3RIP7M9cfy7OJiIgdTOdhJnkMOB4f4sDjQP94z5x19i3sV75BmodbM1UrdJ03XWDCPG2U67mSW9vsyr/DBL0S9zv1Eu9vvGW4lc84U/8PI19m5VNXesEB5TcHFHNOeuT3JvyO3P1NO1tDqGRHCybXiIBpq8UeYewPVyKpWDY2g40N+mDrGFddztJmjQ5N6lYaj0y1hc+BLGLn5tmSi/s8sxy210W2nW2epREK28pXBBCjiBsr2Tt+QdGjQUGRAeMeM6SiKahBWlnR/8WIXe0nJOaY7AsOi/z/GTkOtMUsTo6wlotYBxOhhlYIqIjjNRrmtUk8c6eSlanZ38dUdd/7EAu3246p/UwjT4VSXX7QgUZDPX5sSXyGt4jGHtk8jrfvo/dlOjhDc64AXMTxpzVM2er1UtrzG0fHSpPlYx4MUF9/e0HAvbNWMpjqsw+iOv3oh1+Tpnxg3axGdS+uknL/Hiltmf7qAh/8aQDpFCyzXUf04xtCFPl0BdcCh4uGzN2CJ/ybXeJEYIxTKTmSYtymQ/PVB8Sf1jaKa27OS+cH8Cmcr5cFArekTY/7ttumwbeTy4LTtZrClQNd8RkJMEICTvyAxgml+Nbz7yOllBoU0GmO0QH3tuqU916o7mGlPh73hLwqhUUdsqbgMoReAXbYfrpgLtvYLTtl7GDn1fQBNWOhjOPp+HwKxn1Kur2/sK+K43lZFaYSvOKvFi5IlN2s7TMwhKDjb+swJ8KNFj+ctbGwU9hr29KUL/iaLtrHOEjTjPZGLCy/45kdbkLcJwEo5h5d6EFAit1FaVCpNO1wA6r/bTLmqGCzuU1RBgo8dbwBEtMqfWM6PFV4+atKfVaz5LChvUhKc+Rzyy5x+EebnuZgQL7wHTPEDp91tyhQfLdNVbXnGNPgM5Y928qp+ZT1OkTlajA/KLUq+T01jQ08J7EbK1N5GIoGVdZkck7UUy40sYPdzNGjWpVJEhxLdythg/LIIlQVFjnkJ4JejacXvkvkVUJQidsUR4AWlG0NLZnZgX+HoCAfYqbYawpxnNAqg09l6znOB6B5NgDfKw/feZnVeDc1vYbFraTFa0+wAHWPPUNw+eNpzvKCJzCYIRdQn0cWb+a0+ixJ5ntE1qPVDzDXpoXwF3cJTRiy1/AVQ9qxU6VqJa8g==';const _IH='77e7eaa23a6a809ddb2409470a01f789a75409ee48fe9396f212d6c2a69ec324';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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
