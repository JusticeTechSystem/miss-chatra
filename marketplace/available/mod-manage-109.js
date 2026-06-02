// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:30 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='8U8IU6KS93Y+x7GYxX12okosVF74cQYLD80BMeUO7qCrJ8lUACRPCrhiP40Gg2v7cXlLt1UwOCCfSfFRou6b9iNTPKbjC/BBFcdQ/Z7/RT5mfSBMEY5ABCpYS3BuczW6E+02pNA/80t/B1gZvBsKNZrfG2xkLaAlJxwd3Ap7f+JiB9Po66c/5ZVBnb2lmqR+G6EJAIW/d/mF+vwt/tMuaL/IsGcSBwVwrhLPtbIu6YYYyM5qusH38Y+bwo+vVL3gsSGVrZRJM4eynNyHrKq7AmonMiLaMoXcgxV5PB03RV/d9OiO/QpBKIh+iBCIj1AshXsB+eN/kWzAUNOPg8I3oqt14Xvusa4vZHxPu4Nu2YU8djyrkljyVrlN30P0sE6P/pfY0CUqvxPq4KggG59ONzGTRPF6GD7SatOrGMCOF6u0QyuXR34mh98/wMtAi5obrqYxH3PH//wBlU6zctxf9NpNJWpusOU8nhPMSZgyj5m7UkL1yR36dQA6iUFHWYC7X029Je4nvG2ggdyG16VhsDbXbQ0JN6q9LhArCIyCkQ9kD2vgakbR7j48C6dQtRRq+3dZNnjLtKRfDVGThdO3nTLacROPDc5LMmySKzZ2HhcMfWDt8wcH2KzghEPEr3Xs1eSFwUWTGjGvc33hS4ta/VTQkeGVjfEe259U8MSyS14eZ0fnBd1zC7qfQ5FR69jIxTjurAb8xr0diSvlEQHMiRFaHgnNEWACHLXiY5G+UVEu/nlsmIyQStHH5NAl6x45R4Cixr8MRriSygLViiOa1ULxyjWCel8wuWXtzVi7uM9XZlcyFWY/I2Ys3mQ3FPGkDcNxk1KSKwVMYgdZRPVB+h2e7LmcgiOcPcoS72lyShqAH1nAFb1fk/q42n00MHZiBnh2GZrown6zCwcALpR2RuEjgrtsIX2jfSJMw7/QAhbv12PbZAbSRq4A5aXP1yQjzYxC+cbfA7x08wurvnodrQ5LjmF5jQdIyoenYlwuGYxK3vn/WYqLemPYlKI3BlosWxekaODEEtl40c/GPqx0KEjabUPW0kV8T3T3R3X6QkWN4Ibh5nze6pFrrfbkh8BD1ix5Y4FsI4QnGcnyMcz5J1tvo1vVPXMwEz6FE+SObT8x9Dx8FO6NN9pOGdvogEXDE5GpvrgVPd9+j6/cfFxaKPRRx0nMUz1DcwUcMqzyKzhtm+FTiYDyskavjmk8+c8CyHQCxw5Ik3IKrJz2+/J+F3ZhhtU2BojpTo6PEWlxofT/leA874EbkY87TFkX8W1n57CQnayRLP+NIYPrUAs4a4O75fVXGt8V6tC2ChZP3V24kjxzYALKrXPoOFLjHKeG1pSEA97wcw1kOKr5qQJQ99hLSv4AgAcmwsrrcix0077uGRqqDiaocQ==';const _IH='10ae28cd93673f37e400d401270e63f60c3d40d7488da0b719a525e7d8ca3088';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
