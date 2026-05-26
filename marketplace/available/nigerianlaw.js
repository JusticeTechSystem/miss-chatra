// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:49:46 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='9u+DGJnwUi+uuQm1bVfo078KioYGRgJy39ZwPMp+tWz4q1/cVIW9z7kgXo1kxRWKv6ye6k050qy9VBNU1pTX1Du3/N61Fs3N3BQ0Sa3BB/O7/Q6tGPNQB0UU8epDSBXUTZUVbf/vAh1dvAIXnbHEhduwqc2RGbAI59cj2O1lBCJGk4JjILxMC+wlbNqKaf/qBhF7xFNllPnUHc+CfvZA15s9t8/Hx1jT4mHb4KN8cC1aksXBeOR7E2YzBhfOQCL4inf8MsbnR3aKaHbgRnYpkJXBRxuP7+/TP1SaT8z2O6/K4X7MBQb4+5GxBNRxDfDFbBrxtPe3gFvsXKol1k3Lal84I2CgkD2+uJNyqw0031aI20Gi4peRin3Dy6pn4TseymPjRevqAV0FhHMXMDSpCFPbF1VVamHeCcj76yMW/GwcjHY1u31UGLE0UdOqRmuwtkUMyiHRGdF7BkG823OdLvVUc+NnWJlURtB1TbB4yM/8YPqfZSbUJ1SFaRUqOmqlHKqOY0aCWhMrn1CTkH5GpgmgN3wJatwyRTJHPn5phF8hVtvrPMIai113IYNNlhzZdeYAJGdpMsUtlucRDVSX/oYn0BF4q98kxGMTZsyfKluL/cQvmzOthit9z7IMOtsWinfxcFcJjJeOBpf893c8fxO8sec4J7N4x+5FIos8Gdphty9er41Av1O71wnPeW95ZIzlwt+PABrfq1WzbzkY6a2cbRmbyT2tjmScAweg7cBBJ6P9q7Kjc+INJt6GKvi6336GFTIj4RWkYw9qlTMK7IuDe8dtsuSgwnc2HSrVBtTXY8hvNIf0NPWVSu7lNA/NJr05+7JFRJi6EbH69dhhp3B1Fb2tWTsGaUMyDu9kHN8aSZhZCy+snh6bjKiMsknvCdcSL/R4/WNGWz8zDmvG9SyUfxWxBtrnTEg5iMnTweu0grlgYs/rfS+/GpeuB2MCwPR/N/KaNEi+YIvOtSwzwhVlgLNYdQvAoXRU4k2JM4kiL2D7Of0HlDD26wm5a7o1P8pvd865ebiCdOHdVZVgLOy9M4zuDXF3QN32qq4q+nL2NUk/CTMEgFd/rphMG511VFen+iiksg1LoiCg33IusKeWxlYkg7rZXd4nv5AiYzN4L5GDprs9EdmcLHsE0q80XgYMvDogD4nC542VkQ/sobMCAO79Kyv8fbH3w3W4qayk+w90qKMejxoqZUeBZAkkJpvCgH25QgnIxQ==';const _IH='52862490b9ba7f15c72d6761285fee1780adbead931d862b2d43e4d6a5b57822';let _src;

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
