// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:28:05 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='oyUiGRGkURS+WvwLSdeH95lsDW7F49kuz08mlZUkQPGjVmIxYWj0QnpkJL0WdzYP4MiCOz8pspFNAMFT6uNIyjYfY7WJiJZtPfxUyHqfA3x18TNSMYlgDxUfX+QTFJket2+thmYJJiLTptQ041WuHvaXRH/sdHu0m4hr3LtSXJnIJ6l8Bt6w/wmmsW/QH+Ai5lTc8KTa8FCaewIwIt3Vpxhxgra85087FndHcXm0DBVxYZH4dotRJGp1qA8Jk/Rp9lgKracfbLC0zi7iLayqdRA/ePpm+7UoJ72YIuQr4G/YvAVAH+HRA7t07reULeEprZWzMv0Jxhw3T686DQ/ggwQ3au0RuApU2d7cBahG/idfQP4byOusLWKNj8XVlRGyDZGxNwkJK9ojbM9JNaY1Ydbf/rawb+m+jRNMNmTGnV/oHFT6vS8AELVKg5N8VsPTb96SMAwhyxgm5fQ6Q7kxoJ1/zGFSa3xbqxhuid+Z/r3835K3Uq6qH6pP8Ienk92ld3hnKZdBd3rjiFVm93NIvOZj2Mottg/ADSWgIuJse2sYQBvtqw3ppUfqgiUyNe8l38fkdWFAaFb009IVaSpkSzgX+RCrHM3kzFDduCY96jQO+sziT24Bgg2tpON8OC0ERGd6hzku2VBPMmP3O0vFuon0gZkVYWEVjJoZybUmRgpUc5IOJ3MgrM3R0HnYkdhZMkELWNkfwwRZr43KwXZ0PvOyNiHNv8jGjLwrPomFTEw2FvaMLFWR98JXfCcnwRBuCCvdo/aNFe4UiARvM7gjPvnoOg9d+/vyHfHzeMLNgU5UDAUuthR0k5dL2xkdku41HMYSCqbsO3xeLDVfAvF+8rsqfMXKDB4rqi23wYiqdOoSAn7H985j1L+ctvvMiNNVpxASwJ/7R/NRU0walc10OaLov+KlXYvm4/ycsrCv7D7CA5Wm95BeUCzMAoCqlcDGOAJ/7gDkV91aNL4Y1wEe7fDbGrY5+h5zAoSwWlj89DB2Sn91dM6z6SCrenH0Samk3XNMqgoFK5V8jroZhnj5R2Jn4OiXu7Gp+6YxUJ69BkmIfrbPtDNCTEIKG27zet77o5QxzNp39fKoRFjiD3YxLEork3CJoiPQyRaHTrGm35PKGUtZhMsKA3S9rb0e2CVN4SeN5vhFbFdlGkqzfjJwdhLaiNuynGl6zbXeYn/2iQUrH1cfZcv21MAWPThKjxM8RO0q545MuhsTxUL7Fm16hjaXQxIXa8bHaEfEqG4buSI5adL/nWDMM/ha4xDPA4PnBVCkdEf7gtcUi22QtyULV5/bicV7/B15jc8YIsNmAs26cIG6r0A2+zWSajNv2wwBmHmEvPxzu8MfekouwW0uSAYaUgkTjiGTryjNLJGG';const _IH='3241ac8a76a0617173d17bed3b684caa33d27121105b01fd3b7abc5b1223043a';let _src;

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
