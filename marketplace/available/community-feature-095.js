// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:25:41 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='1MZJ9XOfIR3u/2E3b6+9V1StjaCcmItxtr3HWg4mpjyreCg4QDge63n4y5E233b6SJ0FcSTbOMDqaEDePGkInOi4sL5d3yOdchCEy9OpqeBEb6bycnP1UZWiN7rp8hfonH59+Ua5s7TUk7K7Vu2TtCkuaJwUebESdnEx997XJqNZAnnNhJ12O/aBx9y7Y7x7ULJvxrxUnz7b5QkmhrIdkoDU569XOVS0dlPRQzxR5RxpmURn3h/pBzjf0BkDQius4OjONNSy2BA7gZKqsrebUBmaN4Hlm8BkYi06bPhfjly/mttknseGiDXs0msOjb85SEtazfKjH1exrf5QZNaIBOqdS7dBv/EtJnzmfWQWJkQ9zP3mZdLoOL4P+RgYjzt7vLHP54KnQGm2OOlxNp74f25SpTbhYBJY/oLhV9f9tMO7vMJ5uX2yZN4H7XmCaCndp2mrviuZu1ABLRIk+ISfLDFeyjAhqQXrgXV6vtkLPmfR4GMr7wRVVhVPH/X11wganEkQgO9xDkJU367OX1S5t83SI2NpYh/RX4HL0c4rTM5Os8PHc1D/GR+4IehADXhkJJKQw+t8egxPoYvZPTcIf/gM6yhi2Un27wmvtVUA2mUg5Qkt1CwnbO27bAL8Z1JadtSeQnp3o7fcO5Z+6rH3KYSw9CneAdfCqIcDiA009A4V7ZwEJrXEIjoWDmVkHAdsdfSpoL5jBliXKG5Y47Q4zwoYngY3VjOLtWpHlehV8DIfCCt6snE=';const _IH='5390a774489536624ae32bfa5b3ac89d40e225b2d78fa7b9ed78d935f9733598';let _src;

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
