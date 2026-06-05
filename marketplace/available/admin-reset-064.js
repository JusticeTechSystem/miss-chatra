// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:38 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='jBFM0pFOUERV4t6cRAPB68FsPztnA+H8ToRADMEwm7FW+g15wHEoJ4P9W3gtRj28L5aWtNPmwW613sB89skTfy0fAXFPA+K549oadPhXi1WhBGMmgq/G0OhJBiv84zlOdyt/iEJM/TG3x8a9A840kKOVYWflqBf1TDemRDXoCOhY+xo0axQ0TfmOl0eV7mccQLCqhpkr62PVPYhcX2y6tJNd78prDewb8CwSc2TIv+/tEapJ/bvGnX0eObz6MyhpQWbNaCjt6NaPztKo+bT9BOHuaG1Oc+ixi6hY1JRm5VDNxD10R9W34k73AsVp8re/N4BLm8p/9oDIxElAcDaA5Jzc/nM6zQ7MBzyH9dvdKnZJT4uLQvlh6fNBicMYHMsVT0RRaIdzF01GrgE39/gk0FoyeHEP0I93xLoi3j2XZt0zzlqNtUdZlRGdNWUGe95cUl30jUsFeaaIuN657wFUPCNmkRDBHJXFIxnnMpZAUHaEW1oT/HuXBnC25Q69laGjIvl1CMuRsH1RlzAacFPmOyF7+5f/moHx9PtWeOu0fCE0sHnMHyz6FHVqSIt2o4+3FyY+wCAmLCnLFc2bQAFcsWKXd1GqMIAf6SprGu6lbZmEN0IuCxmW0M9HR/uHLZrCa9QgSh6jTHKAr5gilWzckopqeys75ZblZ6wVBv49BC6FXOmAW/8rQBwa/yimiH46QixUotm+RPvAuRRAPu+Scf1ZJSNufDGgNELzJjnMiHosndiKhjbsFZMhu62IsxuzunHezy5zgzuuGfa/wDT1Ck2cd306DgLRjKG2DCDcI1/eLo5Hl5xNL5v4SIL4ccWnlja8eXH8fRGSCluaVAft2J+AAsbrO/iAMjglD+h40nD4uUvcwQWiO5eK+y4jrJHcLH8+q1tORfCjNvgETdbg7gQ/jiDEXw1mlHKu4+a+TdbNocEbPiF9EEuvjRS+v9ViZFrh5oXbwAS6BtNAVUO/Nd6Vf3thbzhPOn5iLs+5ikODuj166aI=';const _IH='f55d6128281994ce8260b4bed5022290ba695734b95aa47b0bdc2bf231070514';let _src;

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
