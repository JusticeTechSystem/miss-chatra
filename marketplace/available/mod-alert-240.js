// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:03:50 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='gTHuenPsw9UlQTf2MPTDfCe2lbbk85HOE+zNwzrjDCnIOqXUvoj0BnUGTZqoWZ/4o8R81VG9bDPWNCYxtZgFdUAVr2yh3ICAg4WEsPgDRumWfEPWL1iCvvUYgCIlgJNKeOJrLynLyy3CygUVKqDMoUyraCw4MSNXQbW7yW9FPIoUQCaYHTFpzHriYZrWIdFflX9xxwE48O1U42+pvYudqGZ6jO1qdqQ/ehbzsAco+FnAeIuT7px7YYU9GL/5+HAcPf5J+eY5gVTgjsg4QGhVSe216BLdJ6rhqAwstoW4bi+hlLL55PYo4xUfNHQBTO3EtLYjYP3P8TmJPuMyC4H14k4VLHVk3Q053Kq1BkVXk9pvaTxXb+bdWfEfd43IVxub86sGLpz7gURL9LQP+UjlXAEDmRMCSmvwfUF9DnbAW290BI1DxPCB0dnfspSx92SV/Az4YxglaZ9F9NTFvKAOwgIRo091cGoT8QzYEmwcVryWOb+M5yytA6qdd7sXNkYIKKXfjmtIFZamIDH/gzNzgMO/+dj0pQfpRrN+HMskmTdcPXcJlOw46oNOx/az+vio43qdg5I+25OMqSw1gqHHB9v9rfJwDtdCtWTP4N8cMEk7OTo2nmCgNlioPJYjPvaRqIwxwsH0jUEypsk19r/gxL8XTKil8Hg4KBhQzTws8yh68T+Aoo175NNtmfmeYF1DyYNNGirnU6eqtZKw2lhMBvUC6Js3OHnBpTw3JFaJjeSoXNCc0rDPO0AiEjbQfeDB0qdIySx6PxNwFHgTaOC3CvuIHoxuJB95h5iudMMgT11ueQ211qjF8XzxtfRoQxm9jCoh52JxDkceZfNV60gWBNQNQUSMM+FTErbr3wh4i2TWTyUYh+jr0fwYMy/XdnPtDEbWKH3YobTvFVmr7YZMEPglvy/sTh4Sh92Qc4Luc3f3OF52KaENugwhgQOXkClZQDvRJvjKozm3WF6BQB7Xl5XHvKFoEL9AgrYfvT5Fn3AU3yhrRPBTZ7Qj2AqRZSn0y1q4jN4ugnN67fha6+14EVFem1uYL6uGEgm6gZubpicsaSkT72FDlAD3qIyixkPgFhx7RwlkMp7INxoGtcPa9PHv9deFjKAHvO1c+xPAkbRa3ZOPRkbBk8/KIcg36iIkIaxNcP6DUouJYJlsrjpAKL4Xq+l3dPM1W2+poOfSitUPrAVLVFvZQoOcsKyUmKF1BxSDaAU2Uq7c90ZnhTCPeBMA0xQ+8Us0bPlnouuI+NNAyTPz1Om9tcf5b5+Hf72xFARHu9ePNgzuh91g9y1zlCwW0YAM2TBkub2XftfrWfV5BneIUDjDnq2mutvaOG1t34SbaCsHmcCTvv1bYtmzsLnfG18wOcF6Ui3Sr/qg';const _IH='1de76e7de1565f3868aa23a175421d2dd02338d85d9692bdcab805a6a765a8cd';let _src;

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
