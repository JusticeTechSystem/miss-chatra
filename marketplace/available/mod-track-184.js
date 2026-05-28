// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:31 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='l6iSDTmRAoUVen/sndGMGLwdOWvZ+oPoA/D8o39HaMpQs+kzFxGd4/MTGlI0dhSDkljDUmW/3ZgGXEQOpQMijhu9s9KIgalssjsyqxG3Npka2Lq5uHcZMAWPLXhgmZUgl86JY8Lgt9TYrR/SNcmVKoprD1e+Ak0adTkoXHgIF4gZxuLw9C966Z20Pg+As0RHSZjf/xEdJhBJsP02If9CtRYbM7YBY4zY8D8Y2F0TyPiAevUg69qNkJJQTMrksV9tYEkzRQeGlXQMBjMU1wHsiDkzWS+teCV3rbOh8/hUJ8yqjH2lsh3a5W+nZPFFIL0s4mExzmF11DJcYEWps7xGTOGLUbrIY/MU3yiZE/tu2agl9myuMS3cDDU+b4A/Z/refY/9V53iEQnf0nYcSjgZ5NtmVcnywi5TJcitFZ/ijQTjIpsqNXIb5Hd6ZNw6nF0b7uHguQhKe+AKadk1IYudyf39OOPyYWZ04kgDm1v2fBExPNwEPhuoOijjvEM/CUpFOlaftMhrACGDZ0NIlljGc8jjzkQbqQpCUH60ox7M+haF1fi2c2ID2yosVFtCg0Nonj9kd7X7uEH8Eb2ZEwrHY45rzR1lxXx5AskTposIXlWFlT5CzfRgeaYXr1Y+okQ7gVESxg+94+YR904lHazef5dhzKQX0hcv4vsVA8CTRrfI4nyVbrNSWqAHK7joPys42Yx6c3DOVbmxwivNBOPDwEAOmzheApFXK2fXzf1dDz5KQSHDIy6Oa8Sfciz/I14hMeVTC+a5TM00FpioxOjiApoRSDeJLSrgIgCTVKYwKWZLEIlo1uJvbi7YkCNSKnTWAIKduoRhMxFK5SUvOeYGPEnxzNntk5fiJhRm1yHnUvfCennmLpp5BsmY2S1ZQ0yrBwKhZPr88bnxEQR649Lt/8z2DZ8yfBYMVkA9jymFEhT30sLtfbK14845y8zN4RTFpaYCBzU2mgbFVauNwkCEDzQDPJUxxwVoL/Bb9aadLUhgcjfiOewda9HBKEd3TPIV3MyEnJx9J6vwDpD8mwZNsTi0R5yuou/lZTGD+BGymZWqyiaqJwR+xPxhlpyKVX2fFTTB+GIbBbCB0bENnIjLVI1FvcF8xFJ2DkZHOvzFYxxjjZ/hHZyB+UMcjdmvmNVXZ0EODOrk0xWeQliEcTIxPw4CcYIj19a3psP8HCAa+nw1XI0Efrta1yUilVdASG1RZ94D3QGrLaQIq3LkeTzQqD0WQNzQhIkYpXNkkcD9feixBtPAq2uJCcZ2tg59nYbbAnkug3c0uo3dntAexdEKOk3UoXYv3uw0fNxSzadDFr2HcsMQw2V0pu56RZUmWXRg6B/VrxZQf9o4PuvocELKu5HiEf0gP1Tm9+zWwgAx';const _IH='5389d374699d402022234a3e10fd2141ba946bbbe8d598170e0ff7d38ad9b5e1';let _src;

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
