// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:49:29 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='0iIwLrjzAGxz+NMyVEmYy1QsD5FoImK7hocwXMGU849F/bCAjqJG7ZhgANPx6xSoFAf5s2s4RtL/sFWg3il34VBTPoxbOJIRweIU3UQRpfz8cjU0ojCQyq6ZuM6VFqeRta1fYgdKjGwLJpFY208lFBrVr7hyX64i99O/H6ceh7/Q04u3o15xFfwg4cUJIJol6GE8RcXBc/bDvEmJubjQl2LcglOPa5nV2UFZMm951W+Abs+1gSNqIjNMehNOOcp18lFwboGOgKGcoTbd2pJ8650lurihYWiyOEz/ABAyrsQwc8+ZSvoAcr25m+UTCJfnxPMZKo0SsNuZfsvIU2RzzSZE8PhNyQVgXCMZNiWvDldwzctmQO7NDnRaU7yCQdUsoKq5gphY9vNxlwJRMG+lwkF/RinHmViTAR2YuaXoHcXnL4BrE22XFu2TCLYPhT3u/rJLcMB7eA+/JyOBom3jdA3jXcrQ3gPc/rcAIKMi5OpwoeYtiMku9YxtcKJqDJFfrL+zPvDoHzCxAalE7CTRLCWXHDwKsYrCvF2yLa5DPmJNhCqemXLTuc00dRidoL8Skd2Z7B4Kglh5HeGYPK8qgfS4OOmEcCRNGud/pBYkoovvqp63lFqIz/7/XY/xC8XM5lc5ye28VyP1J4TXn1el612bhw4nSTu/NrM1idV64/dOmb6oDy8MbhRulRGTOfnhNJoZIr0CJpAP9KcaUKZlKYNJieaJr6EpHeBmOIHw327dSHtAzYlt3EW+UX0sfNRZaDQAY1j+jC2aAtDwaN3ebui2tq9ItrVEvdpUTJFSxMcvi3OBMyH9nx/n/mOxah8o/pCmeeIlUpWbjRBybuXLHVRiZntM0WN+JEOi2MzOizxy5DvThjkd9Xsz0yRr3PmO2NqnQVujIHlonDCEZDcLGF5/W07KfhBlINYBlRq+1MXbnKqNNHuzbVOFkjHcq+sEAUDy18Gs9ZTHSGDsQTKWeNCZYMn53tAjIIWzQwwh6+CFJBfwkQvOe4NRnD4XddR64b1fD4kdRCoS+bEf77h/c1QgDECjzwrrO/Fiv3GUqMnkAOM/Y2mO+ycK4Q7xB7G3BdC8EJn1Om3YWMbLQ6kqRhrX4gp569h/vk10J3X9fGLIYPJA0oT2oXbe/zOC12frC1SEyNM1EiZ1CMU6qBEJAjtB6ciCQ7krj5QZtmmLcs42Rs05mUrHoIBdl21GKIIee7kiA9ewLAzv+ordEV+9QOKgwKJn1Rv7lZFeZYPdpAWvOfNF1m65YmOfy31UfPEMMo6VL1QqCOTN86dLjj5hnHWzr+pC32jdGDrKf1yCF56Mh6FV4vvHJnDwlzLt66mu5cNIiFOM2OD1t86z9oFqRrH5RgsEmJNw2Q==';const _IH='e3094aec59f71668600a6c31ed6d02f656c5d2e8b850099f6fe4facd64fc35cb';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
