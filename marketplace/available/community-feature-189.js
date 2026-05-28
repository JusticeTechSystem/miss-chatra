// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:14 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='CbKcEr/Z3tqK1E5iUPyQBbWHDqPb7S5SXE1SHfu+cDiEYMY8m33wHNuxLXtCU1YrzJPM4wAnZPJ31QZwKxnjcKiVqP9tLD/3CaT9aj2LUrh+ehSIYsYOJ5Qu1oApA7+mtxSnZAD2GmsRxuX2piNd5qRkT0lVi7eLWLVNew72g+cvdGX7MnjryZ4pylVWGl0X8bUL2NZLjzSrKx7Q++Y84Hi+D+drUmxtu5O1FYD3M+5Ztuvq9x/8T5ZiZ1UnisFmjKaRdI3dyrJWFCLCUnpSK/DkIilbDSLU6sJM61JMVNJHaEitXjhRx3wDlqcyaRXMoeCi3gWLqlaXyvdJ5zbXjd4VV0BczJAgNO3MRqXRm4hv8DRmku94f4whYqn2b6AGoOatqE1WYghgLFQSIMnvR1a4bjtwqhn1LZv2EeXe9U3s66tIu5lBGeyhGh+BvO/I2ycZwYdeQdCrktAML4FullweZiPG24Vnh42PFN4vl9fjSzrSDkOVfxKPW5AF0c+T6noe/qTucgoZQc+uiZnu7ixHNpDfHOTpHnq4mUaKTrx/dwfwrcqVCUY+yAkmYrpKJE0LSxN7xaamYUWLfZEYlMhpFUDd3xFuJMuttlStVI5pSoR7y67m+aD+ymiOFQVr/wBWFlwogCcZeIEwiUoTf7Ma3lCuvw6EDPyE87661L70Nb0iFCAAADCaxeDYIReu79xGwIeXlu7kOIFQdtZxaI6iV/e6ngjS0LT+2rzP7N9tiQAKH6s=';const _IH='6dd4ba880b4c8d1989be198647761a53d8b2339c52c3e6ffe2929daa3d7d3122';let _src;

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
