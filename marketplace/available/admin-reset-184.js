// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:46:43 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='MAWhN0QpsCNO5iENThKhWL0IOHBzlBU9Mz488EUAFTWhdsE1btOv5odz9W9LpAhyYovgMccxcexk6S9q472sxPlruyk3nFk4fI7Utr5ONxfQp+ClQduEjsGxNVg3RwSgaKOmhiWaHgDdy0tZgG4D8SoNU5KIh8wZkrK3hn6S2ppEGDwKJ/uwJWhN8WiQbnBE2xnnlqiSI3mdzcMR5JlhZSn7iwcEQvHphRZ0qlnPzkiM8MDQo3nRe5PfY/3uoxIm18L3pTnRsn8aAQ3yKm4Ntwj4YHP99x4aR9sOqWiGooJNUIR5fTdQAH54jhA0RGVVP53gpRAvP48wePAt9QFrkqkNKqBheWGrP55ya1179cy9qqchxiLn6jXs9n86421waLWJ1fZUQ3GMJSqN4H/XZ3BCa2qeaAbT/XWu2am12sSB7bWpUKwSJsOr23zL6tq2KtZr/nbwjvkMF7mVz2aga4zVpgQJhSLNh7gPrnFioQ0itwOtP2KQXsrl/mv5wY0A3iiH9rKfZ/UxUR8p4+Y1ZTZRNBZy6xDbT/BgrAZJFKUBzRwTmEHCsCVhiks4BfGZhtT8/x60o4gSu6H+vO/s9KFnQsm5eoa+Uc6H+REP7qAYOPl7wpzBBzVGsQArubaQfJIzxSWJw/cAenpcQZbwHWKjgnoYZVdG6XfSA2qI+Liy4367npT4p5LCXW8ZZPhvuxtvjH/7i06IcDb1hrymZ8HS9r8syThWw2zNKX5zZ/phB3Ty5QDIMixTkw3Qb7GmatoF9sM1eDHsJkjW+F9fCYR4eIjsfaIU6hB3S8oPnYqM/oZR6k5uZVMEAifEOHbath3mSUMYLBwP58Nqt/YE5ShCtzTOJd0p6fKNmmj4L2rxfDAOeuCZ3AQTWJuv7kSBiMaMb4lis92lVIPm6HgJxRq6/qmn/ITeNshAAU3J0YC/Ah+mv6ZlkS+5gCd+BfTvKKFdqYRYyBKDpB1ctrSDcEN8MyqQifvduHQ/p+5hfsPVQ7IBndVzbJdf';const _IH='aad33539036431bfb633c2ed8592431794f638231fe9d99e6877d983353c7721';let _src;

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
