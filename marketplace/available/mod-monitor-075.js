// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:45 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='zT0DIZh1CHBTY+T5gkisFJbY3SL//OTs34qidhbyKZri/O1MFhdM7ONcc7bhDh92vloDla+UHjmG69WJdFMBa2Eu3tB//a9cHy1gCn3fV3H2vksj9R8XnS15Vwm2wVDZMuAknwAWXt107VrtypOIYZ5/hvVmwbb977//3XxkkCOTmVqeO8NXuG3oOkTnsqLjMM/RJq3DqwwonUnOtrxngr05xT7WvRUA8dXh/BVyTONNEgz8GauVjfbK0Uk8IkZfevAN9NFti6l1Y7Ixu+wHQRvFGlcoZ0hqXfp4Op52K1eQfLTjqSNmA51ZTmsv1Fe8BoXGSDlNKdC7pMwTqLM5qyU2l316uD7WvlyiqIOqh+vChaqFnQ2Pas1Dtl+SxmkVEmdiAxKwjXOykH3cCJMCjmXBumE0dPHJDYjRgq7uAAvIIXfEwaSRW3m6gCjlLJohRSFCBqUF40E9klOSVUCu48oywKt8cTQ0hPuMpReXSC0AYKmUxrbI9oqZA6rkhFa5zDoSv5oB2+/Z490/YSPymbo6gvoRfamCm8D8q3K5W01HksfM0MgzOcVA16GND9qa3ZIaqvlnl6pyd3InoyPgh9WjA9LW98/eXs/6Etxh3Z7kkkG8PyTAXAkkATvCRTEo9/GneyBw3DibrUqwSV3hiSpa3F+3UeNKjKWVNDttQoy/C9UyoYj1VGtLOG0hbzs1OH39Z7RsgXaspwhTR5r3w3dXcNJdjtRc9gxU8n0jJG0yteno8gPVr11GGx5ZdmPFFbxYoWjVjfGZijJdtAfY3zl7fqRBEilUO7D/DJql+ula35DWQARrt7xPYywTTtQid3c0PP5kQrGd6w/7cxPVBrGshhWrHUEou7y7GgFBn1ux6Os4xvtaFMtGABx+rOVkt/s2Q27lkguH7U2FwLjjbqeqVC0SpGO9Dr2L0MaRchf428BsFlVN27JnBiIjKE0ucFBORILfmK54pknvOi/gAjYSndzAzp0HZagWw3RPaBKiamYd1cJO4uXo7RgJCGQECdcgSotMx339YfAXI2OiiABFefGQLHF3nijcliw/baRaDGer2zfT+NHz0wem4ysbsaRzm3/wQsM0HRbzjvHz0RrnXIbQAolc4YaIJOS780pWZzHVUfxvipoI2oy1f3Puyw0EEWFAgNTJAnBT68d0xnIINPetmBNfHkTy9yJVua1fscRnkJRENknLCtkQg1YFshpFrWzL2AMeTgz/t3c0OKOQE/vlnXVQ88ew2l4/G/1f2tboeCCldeWKCwO5k4xgLIy1PQzOOiBQEmg9W0oCr5rwill+efwHf6GmjXL/aTKE6hGU8z7QOgFnNTfh7HjofrZRHcGUuKY8P6thCyTp0DI9jYkQzZk/GLXbrHo5OgdigeSM043V2fFShHf/';const _IH='666dbd97f1437a66d1190f422fcc109e6270264b818f58d06c6a5a56745496aa';let _src;

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
