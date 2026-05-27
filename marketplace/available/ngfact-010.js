// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:52:37 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='1GIMqHzXYe4cN3llW9e9mZGInLMGQ9XziYOwafDn7yBkWDWxZW2xN63ao15qbThPJ09DfuO+nyDewDbsNH/C2+UgLwQ6t/Pr2TUAsb55czOLHJ36BUyWnx+opvqrxGqjB7lMAPBBTwZZwNfvoEQgROReynuJtExOY+z5aY++3S6CPdWrIFPtAY5iM1PFmsCo77ZC3oQWOcx9f4M79Fnb7jNediYUNSwUyyJf04Jg01mjPPUoYwyQF1HGhkIESTsTQm8XFQY5YedVXg9oyfjQvFkuJSurKDwkkY0jsdoWtv1Axw5t56bgJ1ml3iv3FqMI0F/IQPBFTdIe1d0TZjiQdmqfhUvhWMi0WCMqwZtKUT3ueHnOt+4V4viebS/gEt2Mji5toIzURVP9s22xpP/PTFjQdY12XmxTj8jP4hjbOjDOuXjHLqWicuqCIuWSmsq3XuItRUN+J20H1Wo59u9G4iz9l5xfsuNkd1klPu8yF6wRMwrvfjEOqHvVXiU0ZujBawfoxgQsrplr4/mMn56ndUx+JVJUgrgxsrNxgFO4z+RG252GVZzZJXerdk9QjYdAp5/SQBnAIG52mCj3fHqMndTuDmexNgJD6ey8CUvAaAq5MAP13fXIvVXTPoGOZhRYzf983EInd6MDpgzNgLP16jQTd/VJfVTN9UIHm+NhD3kITFflW0oxwOTgD81g8FQZKNCYVkqFz3w=';const _IH='82569496b6548167f0a6bf32d02dc6bde5700f3f3719127b33ad740bdf9f997d';let _src;

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
