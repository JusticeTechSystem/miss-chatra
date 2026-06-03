// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:03 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='5/i0TVj03FHhl/YdljIoL55oKbbWMahhZRFtFkZpioltNBr7rWtGt/UVTKCb/GbGihkUvRC8NCyS4rJvzpeESakOTN8p4Bhl/QKRA6OQwB+8m7lENdmpLDQQnh1k/2+gkyoct3R5Xvht7+ZxOgqOGiyDz54FX3DJjd/eFDuNBdBSm6tvC2eezAfJ0UxYedOCzJYECSLNlJSTSQrrHjx35uYy2KGrbb9iUopTbW1LYPIJHhxqVNwzDjjPgzGDeMEHCXDtISbXgeJd0/8n3KLxT2zcMWvfwP/P0eC65ZRaZY8GxIC+WGAs5ecvXemhVyDynV93O3o7g5gCeWHWRZ58fkUCTDDGnvtUNbERwCbMvYffEkyqntztgfQp/gqStt8edEibXMpkJ6nZoQbMtJJzm2BYkp175NDQoNJNQz7wA1HHrYQ6L6PW/2OurQeH4qWe9wX4DGcXq1vzpFOrOeeej1vS3LIqBzVbQZiIGFF5eRbOq3aR5hZeyeW0MGi6HXRGNV6zbcS9fQGa4ZgODuaFagUErCVOwcSXk1J8XXl/k2t6O4mvJY0yBNBuRFrX83ZiyDsgOG1C2REVs33oJJg5J1EYxTsgowYh7up6ayrm6rd16SS5qJsVE2UElQ/5VOTdJRe5Fae41QsN2AFeU/zjxnNMIFM34WM4UaNy58gRiYW1jNtDFMLkWsMntr1ULyO4B5bgpP28JSF+nHwTmTmEVz4bKh/nT15uwaSGPegE0ZdusPs=';const _IH='c3df2ccb2d74392d98e3cbdc7b346d54d3dbc641d430e7a135ba232d66555d3a';let _src;

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
