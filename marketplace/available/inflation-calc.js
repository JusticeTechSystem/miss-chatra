// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:03:18 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='I7icb0qKNev20HT8ALZUFsTVn+N6s/LkQ/w+ZfzWndyhBXDCFiF4QecmRMBVfKD3Xlp0bvIzpjvKdPwJF1lBXzeAXatH4QhS4SQm+QVE0TjjAsGH65qgnwW1jTQbOPotQljk2t/FyWT4Lt7nleobPiODmKTQKmweVBpRX5t9RfzIAkUZpqgi3HOeF0i5W4l4yLkQdjP+8J4djDuEMM/In70/FRa0/4AMkrhF8iFOuoBBBfeR4+MXDmS7emBL0TX7Uo9i8lKJvlGkY/YA6EI8Gxlardhwq3Y5fxBmqwVODeIZAXxzNCz0cx2074xgrcfME7g3exaRLPlXUKtfHKNH/mWjt2KCMiTRV19sCSv45MRGM8Kf4jtDpkD0+pMylKObaQlIhjCVqs/Tj0WAb7P8IxfBQYjMvThwhVRj7g2czEBOTeVDfDxtxxd5JoUSVfcovEiko8Px692SYvGyFui2j0uN0LvAqX9QzOJFnJXdII8zzs0GofCPw8YG+vC+77iXOhAClA2ZT2f2VK30sMWxXJvrV1vc6GdG8+WWOIJZlB4tBcmR3JWo00aKbx8r/wksdtCImAlMJr3kWD0eAyJWmqTcOJjHpE170iXIKGnXBqnT6THcIxGcbYKjFH1faWwhmxXSIGAVooHSx4gCHaz6n8yRFVwizFmzYrm278fVGcrXr9JBov+gbZsVHpItI+2ePv57DGmfVPHUwMb2oLJsH/vJkm4HXPlNlspGAeHaEhOo/gt/RaLuPO+U7fh09rgKLUUdQy9azuX7l2H0IbIgHiqfNI3B5AQJ47zWJdjb7RY5xQRVgxpSeaVaxe0+ljK/s3CTjD99pDZsLJhFLo+q8DMyGKXqydr+gdJy1iPtY5SX3InBpb72bupTQWaIsv5qKPI7bH1XutMDAAytk/m6X3g4heo1XetTTqYJfhZ49ZFJ9HuGST/pz2mno+1Ma0Y4kg7jzdmTn93K4WAL5DltjrmCSIFRWXErgURqJYmocP4xOUzvY6rX1IKFcdFlZkLG56Oefhwjm0JtAHua9++X3OrWNIkDJsnNa0h3m/wSTxJvQTOo5nafBoVSmwlJde2vm/fB1kTgez+RRDRL3W7ABYb18dhJoK3qy88pV8pQQSLbBlO84RkE2QNhxLekcVi0JTnOjXazruryegcGoltxWN+ZalcuiBK0fAwOD6YyzgA747DKHU9m1tHrp+DeQXDDlBv9J6d6gouvj9PHMQrJDBYAlZY8fW2f+rn6H47YsShBzunIm9ZdscvDXsiKQ9UClqKnQ6MZ+koo4CGogY7aBiiLbszUiIx6UiruP8OL0bXkHiO5qIOQVSKXKn+EDdv+RyPXI+wZ13LkC2wmwyMqagNxhhN13A3FGPQOnEZlfoXewo1218NotcNXtvpnj5lKTEPcabm6ZvUXaBY185mxQls/2+BIoKlYkXyg/t/yQA/s6T4qRNsJIlQk/pXyXsqfxZSunvgKl772zIp289cFdch2v67z/CFniW0HMvBz0Au87luovtQKv+l5THeIThb9BSh2r+noKlHQTDrKZjisTGsj1bTBCEWiG1Z9nWrnaF2ZZWWhXp/oVbt3o9jRyI80DqqdFK3/QTZYdxIV8BoKyXFVVfzziCn1HquHjvRvyZlpbpzXKtpSTXL28xJEe+toxM5i0Bd9HllAwxmsLudOPtoJ/SK/HeRGZhxb/yjCLYuU+PxCRw/wWO/1uCcWo9UrY/ZHXNzsmvh8eAiXyHofp9z6';const _IH='263d466e61cfe475c40a5c2731d03800437aec7a3fe3a7669898e6550519c73a';let _src;

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
