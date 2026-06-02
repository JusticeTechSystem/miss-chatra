// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:24 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='2q78H2jXD5hoT0IRNbWV69V5BozZH5HIzcYvNCOdunnHe7pXPnILobJrvaxta4RYqtvMwP7v03d9TLvq778HRu2cyttHY7qFSFQqfrkkb12aMqXhIstytvN6CDqJUm0HSljRBQTWQXP8py3cBPbKlgoCZOt+Xy1fEp7/PkcTq584vH8JR5CiqDSf/EUjusG55TCFvByJAccFW6Z/TxpBnAxs3Gtcfxc1G78Z4ktwDMWewzSIEQXBktDmGuv0AJvk6w81+2cxAKtq2CJ2jsisOaYaJwF5tFCia+k5WCpgJoGgqePinYg0gDMnyQmFQLqMgHIVrDKAw2wnpQVpH2Whz+O43llnNVq/oVkQAP9rR/b0Ifky0QtIEk3LFQTfe//oFaSrv/tWEIE5ON46fcza3eW7o44KmC8Aoz19fe1fPLy+v4r8Q1j8tNwa8QSfH8OPNo/t+f1+aYZBzUxlDoZmttIHhzHD2xFyVEUxIurppjwwKC+bo5S8OOmRu+PTjHq3SY+0qL2IHBw/aD7ICn78yevXX2eLQRmQeOGP+oocsFzDTDptRBWeAihY8p6IIt37u3dmF0RRR0UG+IB4WeqOY7v50CkTxtdGHfYloLaSQfAK0XSoi0ATyHBCVlwspHPJkRzE2xYPBjKCiWQE5O2jkwe5b4R4u8yAL2jADspocmwyXiu0laLk/rhR6EcRuXVikIuLUkUpFg/A/hG1uF2E9fY1uEPhCC8ii/1kA4k=';const _IH='2487985bf0e25bdf35369c3b7aec35d69a9fd0217ef5574e69bddfd2bc93adc9';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
