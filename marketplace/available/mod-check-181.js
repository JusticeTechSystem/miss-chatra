// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:48:08 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ZXJoLD3VftnsnZvEArAxt9O0I0eALJ/uTmo/IEv/u9soPUZUP4Qr3/HRhx80qzZm11v8ZuT2vnNWgBkWRQz23onz+2YDOMKUvU0PFm12eNBg9AXy5uiuw98k0kdmoQTlT+mRPuFDa66Or0KOBYZMkpfftI7TU9WlYbOjGXPHNY2aOX5KHHVR0BO2g6i5OYJbamMqIkD6huUT40HY+mkCSl0fuj+SypU9lClacoyVx66c9G8EePNOQFouDQN8sWS1Hc1sw8AyGyY+AxgJBuQOgI+ClCBeSDXD4HwwyupD7LK3faLAqWu/JE9ZttHm+a3WUiL8rs0+xizUcAYp+jrDvvjbcO8pp55rfnr7qpH+DdggLl8L1OmHx3qXtpqJxy+k15iB2/758C3Aoyrk3TPohHmCZP0XVBNF4zaDOv/BOufgIonBwFhjXA1ci5P9a5SetaPHcsSmeQCU8e+bP1Pu9NsVAUo3IEKVuGsAC4OfyQXxxiR6y3ni0p2Lxjt+i6cmItYfehYQMHkcUx/85oZbRO05vXtdh/lHUf17Bw8whZtJmXpQfvGEqsoXpXlOp8TFGAEkzTRh4dTwK7QJX/FRIFtSzxNP/0c0l7GmoD4x/SuqBQArOTTn+BV+KXlqWHY2p5VmN/SmV+RwmbP7gInPu2x4t9xkm+R7qbmOO1TEuWLvH0+myZAhpaSBlaaim1ZVlC8UVMvcim5/wRdKnnVykQUZGqKWWXdkyBtzBNGJAhUR7a8HrvCr4Cgp+IrbeaqyvlcKH3PUqN7V0TewPmcNzWjWTULf3W7kw9zSG4zDvxMTYe82R9xI/yqpjLqFdJNDsDI38P+zz+Tw78sX0srsBHf/lo05ThV5F+Cne2KjRlCYCt616bb42H62Bm4ABmlNG7MfT3VrBcu1eq3B39YhUro19SinYYcHUzVJAOq89vVfs3tWD1F3qln4lt90Sf+wb21RCmnR7yawTzRYyR/46AVwYwdvsacgA66yasfcGg4QiSokbHKHDaUYxzfEUOaOVLYJGSOu85HnMEm2oSrh9PTrhCVLpHU7WtqnYRvmtHNc+yC2NIodin8Ot78Fol+r43KYrI38XgQc9YCtTvybZrAc2A2ndA8yjsZwLacsuAbMmrlCiTFSacddhVXXSqW0+o4fwgp3DPyTkZqLSxRpwC+bq7UjHHJ3U0vQOggnCWx2Y6ioZrj7fMC3GhjAt3bqi8R8WEf+Q/rwCpKzxZ2hZlSVQbTdE5buVnvR6hrVZsx6Geti/O4iCCLbrICAobyyzFAO6+98TdMuR7X3DKdrDbKSKnqoQWEA8llZkoQNZsWXAkUxRFY6U5f39aFzNmvsi5Q5ktJmDg3aWGkryR8h8gbRI73eEapSnftSGqCB';const _IH='045340216f0e543bb16c8e954f1ea6634ccdae0cf31eda92ac13560d7c493b39';let _src;

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
