// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:43:51 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='dZuz9yo8fR58NCwKvZAakvML5j3DlMlggDciw7mwsHVKASDxCYmBR51oY1HpJl4fD85Iuu5mvf7erHjpQ8fVEeUFjjly7YyW3l7DovREp8jZEnSeOGAfq1z9VVXEInf+0FpvpP7rzPNrTTgm6YuBly4jWbDj9TKoKD1X45jfp2Uv9ftw79qfyYnyHgtAkslzz0aV+ecKu5cv8BC7cbFFT2E4DMSs1sdfTs7S+F4nBo+iOTarbk7y9qHK1EqTMU2yut7i+VhD03pD/zlqRrU+330Hb9SNfXkhnxpj0k01WN1aHQi9SvsQA4AgTsPg7T2cZkXflcn4B2VTtz/nkkvP64NRoi9qzRugUoE9+scIA/YfPW//1kWjkpgKCabTroibmQtULjIGSkF8odZdmsbsURYcT0KoQtqZ5+LyTy4Y1tGqsAX8oRm/PQY4wt7cUo/4vHrjUFNMIIwa/fmqbTRilcUkZ8ot/ta5OmO1xshQ2cOg3wGVpCRPb97L1Lg8pevEQdIuVQkvrHExzrLi010LARNZYI02JWoPu2vfO+HFmii55eMjEJUQSqRCObwZBqZKXt25kn8+oajt8cINTp+MVnVfMRUovs6s0nLwKATaeT0FrNGBiBKr3HLRGzRN6wRzn9xWZV6o1KLStu5DmThBYUzeMJ88sTSmV5xjxXO7dkHoXrzBNIfMlHFIOyxoyFf7L6yxJ4r9f5r672m/bUNq/+yfC0Gol7g192bplkiZXcM2b7pgFUjRouLbrrYZHwC8RYQd92S0r5od8v27FIkbmnK3B2P0RCGdj4J3gwFxnpkuD1wdI3mlHU+dtY+WLJtUo26Nl1gLnhH39iEjMYQogzZHy+sh3S3Y0Uw+NNJ+dYXs7fIkk4LLKLwyMkYoukLdBwulnwkfJWhx0OFXzJsyumf8lhbHc8CwL4Csj0z8wwaDL3Flwf3shhPUUQR2EEDE8q8XioRRWK8fIzjmoe+tPGstSl2worvXWcn1Yqg3bDrfwP2y5+LvBxVjOu+5EgKetq/L6Q==';const _IH='20683482eb02c39f525f88ebb80903db5b8190d1332200a847d0a6bc11975f0e';let _src;

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
