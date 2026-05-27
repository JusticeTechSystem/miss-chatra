// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 08:59:34 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='8CcG9M8RF6vi29zUXxVjugMlNYen+GIU9a2Q+oloCde1Ii+6X78WtPNH81Lxc8oL+i8LY5mmTRGiddCv1TiuoMLFmNb8qsAmRnr1pmS+C/hmlu06RsQfECUkHw6V27lzZraQSdgw7hekW2QZInE/M2TugznlNY5bQdC+Z9cqoPIJE65nLWUik7FhZoI9raiz6U9XJxn/DlitevwaFGTUiKPVqYRw5a/8AD/VbfPgCwRlMUWGGn7m1kT3rHNlITyQ/jLd4oHOnCsVVyoDnBlqh5ctuqpy2hgDxT/1bkPT2RoYAlbRpzaNWUQR9F0H2HAj0Jj1V5laTRnXY9YN4TdWam6wxXO2jo+lYGHRRhcG5waOqrUA0UcUfLgT2YhYDTIuNZvFSEkvC+68IEuGtFkfziiXD0hZFUM2nRobdeVQko4yn92xW/qcp1jCUCobwk40aAAFzfU4IkMN/qLFJnNJQ9YA88a25jMxWy2A1dWNZvWkBfLRbKy5P9AAPIN11CBadymRQRrO+az9YA2d69S1UiXH1My73k643ns9BHLI7WfFqfoYMQFuY5IQZ9P47MwMYcnKkQCArqNbJ4yJyQqhZkEFoK5K4uIggj+O73aVijdjgL/iVdjeK132JOTy+3vdGMZcPLctvJZ2Yj2bfPDxDDult3yX0jvKA+1z5vrW8G+J2n2HAcWAdl4zt0m7B9j2J1DsqrR++QCbWDTlDE889Ddht99SF7RJtWRdxitU0cYPKAvkfEQlo+jjq8+Fh8RD/G+c8CTT7LzwDt/LIgpS87tWjS3XTsDLm9tc2WcUrr96NekAzbL8s9xJXmmIR/8NeJZRr95cRRK1Jfs4pmsrCTltb7U/dZ+9rfI7QoMrV+Y40Zjx45eKk0osBr1dRENA7oPEfd40rqv6nGz3fPiyHnYb7sZSJMmE1edHxSeoEYHRLP+dnsfKsEupg0w1fnVZn+hjYAcya1hLdiY1yCNoHZxA/zDZlhcdG8RJT7ns6/+oVXf0nKg=';const _IH='4d63964014254a731b7c7b4d725ff55f39d038f48641fd08de80676434d607b8';let _src;

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
