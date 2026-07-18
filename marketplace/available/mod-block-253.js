// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:03 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQFqPsnaDrrsxaugukQEI+Rf0jvBPpZIae8S/XrqYXXYCKPMVRFVrqr39nOJlu49dgt+dq+XDJvn2S9E8F0/XoQpTqEFzavm5bwLBjaKaslNCL+BeLvvG32aLDHHQcL2mh06vXofNgL2RxcWB9COonXx3vHHZA+qp7HFtGSLsJ/YyUZopkC3aZG06YwpGQp8awLiMHnQrE4nTsBCCEjRWmch0HUu1oPgW8M48C8ejzqaHf9tu8U/uc8LCCzCnMxVtgmcvOBqD4B4TxJ7ySLT26lNpQ/30Gry1HNiIAOGFYeqVTp2bq9RynNmbHeW1GrukIWyMTDM37bbjksB4XhNrBpOvFlK6uIArpaHuGeRyhLnx0TZq4l/MbEZpd7/sxTA3xBgehw0seO722UPepqT8iSedQQeQwvISgxRgzj4dcDvdKaUAHcZzjBKmIUOLP7UHUd+MeBnWogE6wKMu0tcG6GjzEfQw/GeR15VyvQEhWMTElqwvc5ldklia5iZyNBiZWpu2WJBfz/UU/oJpYGUBJanZqXBfRWGHC6Tl4xY9/jcwDpjR/WDYZI3n5Z5bvgnqddVC2XqZ9HFgmi4yvl2zWB+THDSfFk7BpYSTUGCM/zGrNXx7gLWMCTELm0lZpRlizCeG3eWw2733jCQA5Pv/rad2hpLccwipVPJPLTOuwe4ql1eoFE8Oj12n1KYoENJ3ilfj0tVGKq2Riy8J7sADcr1CK/RS30ULpNcVeQOfxz39RFeAxEVx3/JVCaW3iDplCCECo7H7MQxrTy5/HZRvxC/gCPzulLDV1JFe/iVaZT8m2p3Aq/Om07/ikCOkg+lI1pcTZ/TRdyYKNLc1KSyMJE1ITOPqS9AY8OOVnj2oSM0jF8FwQgU9E3j7mIEQCZHcNCCm0fBx6xlbIMJisI+O6WzfkNpgmenE6msnrWOLU1yk+ptwnHVyMv8CvAK7uQIz9b1c/0xSzyBNthvJ0Q73LdQwljph0iBCfgx6G/3GWBi0aEeyL+e+wIKMBy1ws/Dtsy79tFrT718RLHaLC5TA+COeHWnrW9W2J3GlzC2H5uZKZ+LHsEsGDpzruF/Go/s0UQyM4InJde5z/qY7vMy72x5g4gqIfblCzcC9lTQ7wPbTnzD/O/HuIr+IjW7Aro6nlKZZh0Z9CLKpxqELV6nFuU0bYmPt0x8jws7Fbn49szHGAUUtGB17Q1dJ8ZlQoddecDzpYODPO21Z6BRI2b67nDL9AjiGNgNSEa6TZjLsBE1Hi+PppUPBNC4qKzenD5PyGHjE7B3R7Ulr0HwG+IU7LU0g6FAwGlD7tUHrnbPilRKPSxamMLMVd0ekuW+iCmunn9R3bW842/0xk5vRhcw5IJeCC4uBFwkEps8tNAMiM=';const _IH='8d338666c26901f507ce287a20e75dbf9255ddf97508ef6e38f46cef350a13fb';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
