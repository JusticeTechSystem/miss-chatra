// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:14 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSqagXgVlUiIo7bgxTqGZyCCdkCGkbGCGwXb/QEHpnf58zHIXRs6dYNDh5mvbECtY4W//gekXt/CXRw6VHGqnVX1HveL8ebUwvW7fdSUiNPM+LLrWYzKhrZ9WzmVy7INuEHuSUUUtgA0YPnDw/eXOn5SSI56AB7TPa8oH2R9Q8zCXcd8Z0xlMcR32ZZ1wvtf2Yd94Y6uAhkeqcZo2bzsXBtoPQe9etIIiI4phIIFTInf1lmT+uWV1r6KJjC97b64GbBghvbeA7Xosb3fkPTbSDxSuvZZvT/GuU9Lz+VktECNktq3eNsCzpNmMqN35iflwi8EtQsHInx6Ud2TXSZeA2SBA6peJ1wx+6eS//EJxgJAVh8wVR11l+PzEkB9P9AhWYWO8d2WRp7vo6MyM+uhfpo0iFv1xvVK0TwQVghAQNEMRpx2+BxCocyYNWtqFUpaveGKtgU6vHlRGogVISsoCjcpt6sXWF6ky3HuOx1BnAe2ah30W8LlRotRtdqwCq5O5oHjpPhh2wpf4vUxS+3tXJ5ZA/Z3EzPaiMEeoFqaKhCdFia95usF+2cTGXvn7SD4OaiZotjKK0SoaNb0UTzlNAROKFm5Wrsc7VxVOBQ7JugYjfFw+vYPh7eNe3botkRUwh8ASLd5wtb40YOfhFSwcJHpNfEH+WsLgl7fKcrsr2DxviC2dVlobIKv0YJh5cOP8Nzq+ylE8ybxTb+Tz17outuF6gH7db0rq+9wau0tadQHiO8Twx3uPqbD7VjHHElXJhXJYAvz6lKT+2NPNnN43TQustg0Uok0FLXn+nJuYUtMwMMByz+BzmFmnLClmtGl9rI/XuznXkCUcQhcYW9Mhmo5w7ye2jodUPS9cBsw69Le+VO4qcDq4oy8Px4TIsGqbhl5ZwGglGtCDscWWw4HrDZS75Cym2KZ1kGiI9Ouyts7P4d1FT4V+2NDQQxKBU3utT9jrtwRoFHKLEho7V4u3BfmVp0ZMu20OYWej6MlicbDpdOtLrOrcHEkkyoa/OXUDxGghaDkVNZo+Sg7GSG23nSUZb91j7VBDa1l5W5Da/IhvAsN45D9TZS9pKX3SCHZO126J7sqwZV02z9L51vIFt8Gc5+Q19weBxsm5g0+StQsI7VIgg3eCS/pbAbQTUPcdT7So2PsysttiGYfDh+pBa4YHLlHz0/RFVeQaRRVGFVukq2P+Rzbebxrd+nHIxYnRSx32uFPvm5eueeNwfJz6q89CeoKlEx8DvZgLKrHH3b65MgLnIXG//DIeXJOJjxpTEYogaUDHRg9NOoY/8dXXd4vVkeY+w1ayGDHLDBw0I7TPts0HKQijAokb+CyM6YAzhkvuljxEcbwzDpu9Y4asm020LQNAqx9CrPM5X2tdU=';const _IH='c5fdb3d0158051134d308f8fbcab67a8b5036a43aad247d49d1a0aee9852f422';let _src;

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
