// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:47 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='TR7AJtSI0qOFdwXeL6K1DirmEIHnLg5VyxPhbDsRIPutBf9xM44aL6wB35y7V+a04ckxVuLyOA0zo/DsvVuBV6psbvB9Bqh6w/Vqh7jO65F58Uf0JbzskBTiLC90c4aMa4AX3pA1uz7pqYiJoV2HXTnAdXcz7clOwhPm+MvOjg0jWYuM0Ng7gFyhGiN3WZU2xkVii4VS3ClQNTjaI9dJEYqSQy42UivOp3jVhqYIwjlBdgMXlrXwU9gt5W/CyIbN2NZRXFe7lmM0VQEk4IzC56eYj2GyOY1+ptcBT61ds6ODQccNZ+IPN30XObP7dKYG1CedJSPsVjf3Oqlnok0cfaRVePPmqTgdAGyzboXE1Q+QwI69A9eeY85UWdjZXR68G/+UqZ+J0bO6VlusFHEGrzb+kKf9XgIRSt3CSOLyjagZMXbZ6IKDGfvccO3rzDzV6+IWBJruwvAsQqmDuZjCaMBEypUlT0IQueC1iFrcsXGahqgPkIqyKmi/ph4dABrUtgi1bypVco9WBYBm/TGF/OtYWfiTU55b4etamMhsF1iAjSq0KIQTablmnlBfayFYhB2wTbrbzTWpuwDGuMke30te1AEcAm0whNpSvq4fxjhRCPrkkd2MkVq4ADO+cEewPe5NZ/xFVJuT/yaBLp2An1sfRPvndIRO0yDJRZKVoU9WJ4kw0M3FO2hWypxUq3j5d3SeIQtQaLXnfBkJunsG2GMOWDN71t5eN89mXj1iS0cSFZH+xaI5COAlX093emDv+xAUegUOwS65cnrZ5KGusFKk+xnA5gao0wLEml3QHBQEvtuODOVmig8HtDmcagCKZVCY2fK6x4Az9cZ4LTg0ovtYoHuWaQ1TS9Gi3mqnJHgtJzNkQ8+ZhEUqFiljKTSWjBTtN2pUNYU99Tlz/NoDViK6Z8YBQLk+NxFmq6JcfkJjvFyo8x26mW/ejhdUabqIRhNnwIBFTf5Mx7+orns6oeZJGIqfnS5eKIAnWQKO1GQUBDLzN2LKHtr1LePXLXDBXxELaZzeeVR2bdsME59oVnGDDyTQyDmjg0aKrHN/7y1p3g==';const _IH='03d9204e8fcb2886527ce4b6060ed8f9da20b87ff34d513a5c546a023a28cfd0';let _src;

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
