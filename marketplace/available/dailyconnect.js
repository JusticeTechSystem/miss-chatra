// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:36 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ+SXtoyK4OqruXM4qn0L8LUaVdbPelxoHcLsVV92XgAxii5NLaCvl9nPol9c/13ZBNbgM0S3HzuCtuXDcs4ZAMB3hAhE1hWxMZJvRbgtSw19k0YgYNfyZlErlgbK1aOZM0dIxOkTSWeY4jT6JS1hGEdO2onnivQiWDRl8RzMILz/Bkz584kjd8jpW+qIxWR2z22zYU+xkmqmAHyPpAKjnKVYmlaAKheiMxGS3/oPK5mQcexpd4wG+6+r1jIlQlB235keywfVgRm1Q9PSGT4tsNj2bVaxHLYB47/i267drAjkJI7BMXfjh8ZJUNxQUxC3LlyoQdFavOq4JwgSa1aMLybXVxUb8A/Xr4vh+h3wPlgu8pni8R5ZcTZPyaW+sa+iNzGqQuKsZZa4DJT6K/qQ7YPz+CUlmVPmgN9f1ioXQJvL59qwXQfeh2UNfWf8rJJD7QS0+Z1PGkQZwzpCZH6KVbHKS3LGoRpmqf83OSYuvWHljRA6MN7MdsuvCGYEGqPaUVuBEHjImrdGMyIl5UrIBDRvlqcLCoqIo0ZJryv01QwXYhjKY9hRO/NcjxOT5FsiPfYYfcXqOWr4T0cbH5EkWL9FLB6F6LyApds1WkuEFBFnZzRel5i2T494L21xFmluBj0UeLbzAmPE26iNVtdPRQwAaykGRPZ6VGLundvTgbAxFA57wbHkLhjWbYRC9DUsQCYmGpXOtTDsjflvctfKNd89DswETycvHXq027fWcIvuTusbYUf5eoJM24ICDVr8Qj22rqc7zOuz4CUkCMCRf6oNjc2FiP+fRsZ8CzvKeLL136+6g38M8JiaMrNKVema+YVzCleW7s+EWG7ounEJicslTes4aIBGFV/kZkeE4VWUNUhv0hblyYkS/h2QkoehNfVPW9Q0JdAFfdIH6xx0dyRZj0KL2Cb7Zn6edigdMsd9IeIHITiG85xg6zWI4ZUj27XJiYHuhS0IupJ6ORYU7ThX08tA60wxD4ysjf4Y0+1mDIEehgCED2xjaJ/POfKrA18VjPAiGEt4Ok7Cds+7GWUd3yjgO7yRWLwIazugOsZeLP55h76agcbcRxRSIWn/pQ994y/feTmdCupOFLbzLPf10uXbhrMDEHHZorz5uBw85adu6N7e0ZUInY5nmZtUhN/85yJG/suBYC2D7EfU9h85SouyF5+NJIZlUOe1+HeZLnimMeY5FJMNhRADKG3vZAXJ8Y3qXxUy';const _IH='ef83578429459a439adcd27b11a044bb560dd50b5ac7aa2d726e79c74dd5d14a';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
