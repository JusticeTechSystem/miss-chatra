// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:02 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='zavtIxUIiorPyux1G6kfgv6Wv4tkZMsv/w9Sv/X2RVmmk97gDoYHebBt/9Lqr5r6iqnxvJ4lMVK45mpZAU55haNroVy1KGTtxs+Ze/x5CIlMq9nj42XAXAjXxSX/z/9eH2dNemh+7xQTdmneDasRPbBIBuNA4lALpzcd9i6xpBksYFLGdBqhSN3Y565RzTFuOtDBnrxbU3k6XuTe8aPl8YYzCuIp/wAjwD19MBfq+/2Py36/0QV+h5uHMxUTT32bkgPQdkxkVt+2MQy7pU+VrWLek0Tp9cvmhJ/hN7tPAmf9tl/GJad6YBOmYA93CXZRiWXLF+QKetbYTfHfQOrfMF+kGyAyw9M6ObrP8aOpl9qmZyTkWSaLtejY7NxCo53dGV71f9oPwNeM75Ci2ocmE+Q4F/59aevRGiXYyQ+dIRWWBXN0t2cI/HOEMoLWnE3O9AHG06K/TUJI8fO+jAYGrm/7SF/OIn6ylOY5gF2UXJKPJ5UhD8txM54g5StdRqpVZ493HwAC7sEA3QYs+6Utre6wam2+2yU/E+2EMT+47m8I7f1Do3E1VhQWlHmgToB+ogcboxAEcbCdOd/FMzr6Sark0kFz/lKWcx3EgpIRS9HRyAdT3dgZsLEFPMsp6EikoCBtwKASseyBkDSAfd4CJm0BCSEPbOjAWjwFXD8DMaZY8a2Lyy/LXSE3y2+zhj4c9CQehc+6Kz0yz7UGZsOxVjKQYSI5f/Wv76uyD5Wdr6vlH60J9WtKzgPt4g2uj+bXXYNtuksZF+uYJYgdMyXWa59mL19G7D0M4mr77LW5qUsMTYwkokz8zdge61YewC1B0rDamIIg+qhdMpmJ2ZJZHYslK5GsEQAvEpgv/NSGgg1TCHKdmuk1bNhj+tiSF83I/PuU60mIRYLQ0DYXy0ZVs/HnziQ4cnooPFEz2irTlW+Rcra4Np1YYiMTg2GflzZR3zv/TZkVq8eiQ4fFAw2t/87sxYAS3xMSbMtNeYaB3FoxI+KYjmo=';const _IH='d5d213014a7a8f9e788fc730d093efea891667c71774eac881f9cf582ec7bc12';let _src;

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
