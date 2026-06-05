// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:44 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='tdUjWhmrCQJ+qKJC2d5pgkniscUXm/9W+1zHz8DKsxEGTQSFmjFEHg62FWiGru8AQ2FaWTMsvbSIUH2s8NGrBNsL3L7wa7NHC2Uhet4K8ApW/LEnew6PMkM30y27KXCgzKV87Kvo2ulwTLW2rC0tFS499BLuvClkvcM4UUOzfK6Ax4HaPYn8cwnl+xtTMHqqhv837qT5r7ryxYnW4wyfJGRmp7BMCHi13CDbVwz3xWHtCfsPoI1hEj6FE5kK9xHyVN1Aisbc3MxUL66UrdBWY1CdCIbMWPIsgK/Jer2v8iF6iTsU1r+oKZ/Y1RWbbFd80lvIsDJbnx5QN0t1L1vV8/y3udoMHxamlHPDR+jPIaaiXriC8quMqBFcfsXJuTPJn7a6fRZqTG0LvtmT5YD91bre1Fvl4simucPohK4cRrvWdYuHv8gDTd7hkq6lKBnusgOOv7tGPndDATZ7RZ1nwbRV+yfBuiKbBFFIb/p91DgpK5QvSjNb8cF89AYtpzbXE/zB9FbwRVnjXKz0TXIWxs603eA/51P6ZIs0EOyxMVW5+hs8A44lNsgjoNm0fyTuXTz/XnE5yjK57+Ky8pyvoDZ1k/gklgf1d6ubICpvU8sM/hwCTLtpZ5etmpm59h1PO7OoYwtgdn1YdfnfQa7Wfy2ZQtT1Jup+knUJYukNgIrvZyfVepwQEcxX8LdZFKAnm3ygw3bNbP1AbFnySFruLhAu0KRuKMtGnXFJ+0b3GF2tELopDvutQoNW719w/ihybuzKKzIPdqqP82kp0MfSuO3+8inOtQNDE5osg+DpoAVmb0AFR8zEPznxd9IpShSWWpG8n++J4vvm90XMFDHYCmqNNh3IaSWFmQn+09vSilESvTyFO9Gld9JhPGe04rHkdZLTSltrv+Q3Q+s7D4GFYVNn+FfikyoUvcMvmksmkN4NafOVE7jDyj9gCL5z7lLudDDDt6DV2FZ4UWCAqKk0xEnFXrVIdfe0kjIad5yn/5IPs+HZI0+CDwQ6eL7wV5zz8V3+FpGi0eBd4sq/lRS69UcFRovJotrSmV9iDNgBRwTKNUXY80ab1fm6Wo/q/289WPZYhH/68Xxe/X6osKa2bSgrf5bRynsN2liO+t1iC6x3yi1cbfffPro8Vc/WdvEhrGFNYDs3vK4z7KZlY9Nx/KDwD4CANMk9R3ELhEGh3UIT8bGabPCpzk8=';const _IH='2e1e9aea6368348d77c2c061ee65abf4ed6796bee65065cd77e6b2aa584ace36';let _src;

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
