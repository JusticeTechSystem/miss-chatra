// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:28 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='brBqM408ClxBtOO3QB1m6nVYdLayQ1jlAMElHy2L2Y1kGS3xQHKsPaVvlYZVufZX1Shiu2/yc+p7lMPPkTH+4H5kIjq/P+AyYSuA1Hwj4MCJXyk9npbrYiS4nQxzJIjq2A/g3XxpIFPaWW/KauV1eUgaHe7oXWjmPxvtHXtNbzrnmAU63/AFvCR8QGTXfiPXjpqgOVAIDKdQ47vnDO/HirgABWZB7eIpf0KTpz7eRx34klZ0L9PWLcbzPqXiDZw2Ivkn+QckjK/XARMqOD3uu0oytX8u+XLdkFc+Ubte5laNyzog4WC6hkdeFf+QgTyRJYYZ7tdwwZGkYq4POnGMVfGHbNxuBnZt7IW2fmyjdsivdSs9yEtrwhWM8t9cqatkXhb7xZb/vZd7KSU1Yhbxz8QsULiX+NgnP8aX6cFpRHRaQ/rbKr9+guB1VI8VR6K5LrNFgh6iUAUVfhu6AzPipC4neQJSMf7uUt98btw/7bvAuMv5CzVj0Kr4cRMVoWxza+ivasvSzX7Tn9web0LwDEQAf2RfAcLDb0uxmeq1r0oRXy2hvmkMIqBAWx11B5RJe8YoKL6JuNBwqKBUmO35RRa8nCTUI4NEoix8+Vt/7suBV/5EdBLrVUQJSldNiSDkXHrMHe4PfvoTamTbHXJAfYVhd/Xo0tIHRvjxckBjG8MbVZXD0i+mbkHn653JUGrmi6gfHfHa2dfcKXrYXs+kqiiBNeuqT0Dzcz/96RYT1FWrHTvfKpG/C8l6axzcKRDiWOtg2Slc/wrOJkTnVgtC7YUAA5ebA6Wgy4QmSvYQo05yVK4QjnfuAZq6UNQnkO3WwB/K3G1uBAuYgaYLRT1s2MrHD55SRflEiHUypxwW9tESN0REEofcF4jdSmlDIOHfzQuCr1CVM1PJlBqKiwqcZcFsv8XdkdkUng+dok9r4mq/FlV3iUhE/NKsiBPaO7bvrB0ncBytavuMPodPdKom+gwEll1+GcTCQ2Z9jRxCRZ6STv8F5JyIPOTxBXO7FGp1anoza97daCyc4i1y1O5i8IcD63IytVbS0/Srxi1oTnNJuUo5rrNJOAS6K4NMKlyMU2Is9IrNxyf38U+Ux2yPoYbZ8BBjrSC7iyCPkCqRIZCz5Fh6FALaRdavGdflejFnASCAqEFdGVc4FTT2Jf7mt5f6xYHHBVKdra1P7+DGp9+xSKlF2zPswPWRY8UuWzfDOkgsJfg169sulOo4vgwbweiANGM+ja4hfF/V7rFqiUYcefqdBiGDKxEvSepZLpFZQMgU3mOZEMguKg9sgIK/ryAOFYWaViNcG3bpkvYtinNK5NqsZEun6Rh761GuGikCwa54I0OhSAKr7y/rZ4EnC+b5v6eUhp+AbFJXik+D8hH3Wugsx8mVBbbP2Av27OO64/yJUDxHtV+4lne2xfOUcFHXZV5EfUr/FAOL4mJUgG4GLbHaTbPeH7Ljig==';const _IH='81ea8b0ca33ae97fc28ab71dda0bfc068fb84d3a5064d3740769415185295cb8';let _src;

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
