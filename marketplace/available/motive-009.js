// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:50 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='N8WGWkW9ootJ+F5lLjp0nZMk3h8l0QikqXdI8rvLggT1BmqzZN9kad2O2qVxbE4Ml+R1wjKKSV3mtCoLJkFMw3gImzyE2xuqwpD3GHdD32fOxbiEH70XBrnfvhikzc2K+SkwgG//BynLmUg3e3+U1BouIlwUfhyDrRhJ1LP9eLyKMDVuwUDsl0aDYu/iAcw0B43Z2bS7TqXxhUZ5qxJ6tHFUrUaWGUXc0BZmbp/PMs7DZyZgdfMaNki4/waOUqZBydCpkis97xk5NyvrBfWmjwYOo+EH+K45sPbdkaMwUVzDkGicR6ihxr2rgrp95AXWc8elS2bWxiu3vXRcuY8t/XyD6T32v+NV4fMX4mppF7LpbpcQFSTT7rantrZK9fl5z4uvcu4ftI3hSVpF0UyGSfjK2kigJoT91fdyNLLzEgsXh42WmPm74vtFDbZCok4QAEVTwhNio1oVX74lluuF7KjTe0Kcy/zK+DRoCASsGGfJYRe7fxq48L9S9UeunMp44GMx4OIAqQsySeGKPrbo4OFNYahrLjjwGNgzDf68wmtS6DbkIAWUGW3scJ0xtiqcf0wImMx04aWVeU6OLA/PCkmMzs21qAiWTsvUVQAvPFWLLma//g3qmKY+odK8CU009Dh5A5S3VxcysWDsDYpUdPMaK8V6yE+WB9z2rufItaKtWG7Q3WCWvgBGPWJZwM1Qa+pWnUBYZ74aRJVOtU6EcARR8k5p/4IRoK4Fb5gPfRCaNMhqHn3g5hSKjzDncPn9KiqVOyUZz0N5KWG86p6yvrkGsHMuK6ZOtYB2VkSwN4g6WDnAg6y0SQkRwwZK9LEWgBpsP/O2MnwFnZvuB6mWTpBNPa8jGS8u6v2lsuRn4NbbtX0r3etod3KTaRcAhEu+DwIe/RH6gxdcS9sMenxDnCLahSHW8sWRlEyf/xvTthUE65p9P7BHJIaCYcqim0LNorGdDPDB2v7RhIkpknfXibbFe6r514P38BaYa8zx81blgO5cO4Zuy+dHYWBvBFC2Y5/zWpY1IhwC83aO8v0=';const _IH='2a9717441a995a7c15e5379ba7f7b23fcbbaf5f6c7a02b8f5e9c2e9152aa77c4';let _src;

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
