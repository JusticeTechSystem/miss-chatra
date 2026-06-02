// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:58 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='qnnNNByB54RGClzr7k2GTjcPgIIU8BB04FZmluWufgipKWlw0WwYTDKJ3yZzO4hMhJewtuXPZsyhjjEi4m65ilNlwYM+f0d9S3onsawqtxv4EciT1K26VTkoBmILYRGS3kEGLKJ/b9hyU4P+ikxo7Rup06AeS6YmXS1kN+gcu+nb2LWnW8F9g6pSjbnJ1qB2I/8Yf4HTf+BS9N/cc77bJwlgZPE0Re8Ao9POrmR3kRH3JuRq7pMK/asnbsppFvndXI7kPqBMdTCdVaIrNamjNYRNFHjIkFaeBa0Pu3/8yTwmaOgvcz+DLx1P9xLrGfiDdkdakqSOziPILPEvmcSzBEb1KYXjpWozH21BOEJFmITLNXjyPcAb+MmpCHJGjIs6w/Us71Da77dQOQDvX9EOs0KZvc+510jyEHbYIzeM/eWHMyAb1Gw42Xzkncj0sGdTbAPdXKWZedLH3Mx+HB/3bX3cOljXNuWUBOVHcA/2ox10CMWwVw+8ZlDiG21GAQqg0ZrPXlxJwinFP7YH+jiHu8LL7cbjZPaFymhtgJRqIGNRu+J14+ak30788qD3BaBpVG+B/uKqfZBwA4RrKyco6MD9lfxEIxWAn7hfAdd3zSpOeYLu/Nac0iYzXd15tl7mUdN4bNrIodwVvhFJj1xSWlF/cB2xESVcwvTB0tTuz0IYKuwfHKtlBfQSvybQT+xYWJMxlSakxyAiiNUyfYNwYFXuGzGQk5rsOyMZM3wBpowSCclKvUBJCsxt84ib8VTFuA6wfgSMYusCh3/laNNZb5VeqjyvZYPkIMoBGqWYtgmYZ/9/PZnFEmbYUL2xtuCJR/GhMC8lEAM8sOiaKOk+pcefHy6Ym6I3GCXThvcwsHXoOCWZ9tZjTVkG5nFEHoNR6wEfGCpOYJIVK0K2AO9c7JMajoP1JsVmEnh5Tj+cpTfCATUJYSdkMOGpbHL2+D8RkvG3KpW9aMmf/4iq3RK/thXf/Tq7IlNjt8WzKczWVEphtvEJ2o/2R7aqkkRI';const _IH='6f819960b62cc1d157b222118683ec36c69d006ba18b1cc2694fa95a3175bcef';let _src;

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
