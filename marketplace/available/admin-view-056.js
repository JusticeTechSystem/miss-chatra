// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:47:11 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='bV1pnD2unE50EqEPnq1mBUIvMAXdhaMMou3GgMulOeBnphemqbIq40fvao9HqewXYaUVifnJeKDg9cFCe1Q8+QzE8LWMJTxklEReJAcvCz7mNhOb0vNUqHMHpYrjt9tWznKsM2Xl1KQt1gHaWn07/SFylKqZQpKQuAkL39Wb3M7CqDlyO4RoVok7wQDMFsRvhg3RL0M3aH59zN60vfm5L58kGzrt2wBFJ0XThQ7mS51oW96NzKiJf/NXtvKs6OI2gMe/v8MEk+h5+9X+RYMe45JL4nuRCKDyGcSbrv+RPeeiKTPEEtkGM1N1F2jGtBJRgtbKVSG9dAqSFHal5v9XlGOigjkU7d4KY7rcF/6ShRgUCsl47M67zCaIyWjG9SE/v0HxUT3ge3GAZpFAjSK3PkUwu2iBkfHiUZLcmNFwomrirIHfO0uZr/PNg4/oiKXf8A0cV+UL6Hz93IhW54/oe038db7uX4DwnDxUGCckZDarh+GrIAU+v27wpujRg/QcGe4XzvRX47NQaJ4/f87Gt/s/B711UoaO1IHtFR3dpscmPEDbe3iPNYvc/alxtywZoSJTaVP/OMza+ngUllFOF4PsQ4CZBRDuSwONb1XWpHrH2jj+Cty9L7wnDT5JUQkJKjHNqopycn2EmEyGtoCgVHe/9uf4j2VTwvcbGaC3H+hamFiHHIfQJr4mBr2YhpYF0CPHqSL85tqtrhFyC1gE0jLBgew4psCxtCj7cP0L8sJxT1pnJIk7UemFvs/h8+AL3WlczRxCLj6bnMepAOwq4rHq4nuJp4scb57SlUTidtUJRyLAM8vCf16jluMr7nO0odkm/4J7jrQFzQxa0pGLtoN+u4zKGKN5R64hfU/QwAHDa6i+7/cSUo/Sbzt8e8s6YHn/W5cHfidaISyzWpGOde4+hvY1M7pzAoA8hWCQDGMyYgFdBdIo9rCn2A8evDni3IxpxVIJCMXe3Z/kUpTRPc2zFQjE1tMqZmfcRi8/Rg==';const _IH='881b36d65b7c474f4e56daeef00d84fa0f7e6f766be4186e067d1244de781ee1';let _src;

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
