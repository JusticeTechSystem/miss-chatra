// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:05:37 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='HXLXLij4NBQNAubI1+iH55aq5+hL+EAWD5MCtqHsDu77B2elHbFnTbUGD6zN0ukYQa6OJEA2t3ZRyr0pkODTAXUUfpXFjf18A49EGRJwNWNX4Pcgjjy+NortOuIPbjYbFgoDGgAWnyh4yPuTk/QiHufIRctQROrKaEvdSe4HVTggtUuNxr3UgrQQzgHi5wsZlX8YvV9y5fDQbSENY/A7jYEMRmebDHWncQrV0Ih1rf8BI8H+V2AKvP7J9syICPHe06/YrEJB8OlSq3uHzzovkMJrCt6MFDXJgutTVKeJRF0CPkd6pufjQLBSxQXuOmEb3Y6j0ye4IiwB723vqn9C+q+K7DfQuTYOqaLGE3RMV+JkssHTnu4XEVHSnr+g5rhnw9Vn3WsdQpCWo18AuobrHWT+gjhU/t2GJIwWYGMD9NPPMTC9+Kq47qJ49dWhPfXQXhiGCTrOaGmWynhnnkBQCp+MacDb70T7HPAsF+Zf+jwaNST+VnzeQsz41mMvZv2GH8k6vT44LhqahvzcGl/lNoPubqYUjB2uuH4s83abJoOBZZHLYHqhdwrHtBNQXH265XiLVrmzv+UR8j9SKIDMxVExebyDtDUG0F1V2kHP4DAPzhNkpZlJUx1ELwEsUqrp64maZYyUoc8pCNWjZTe/BU3XpgpUMLQKhFZZNtrb/JFXzpfICIjTY4TmlBuFKgwjni/kXz3aTolMoNojuMMIe9D191kpM9i0Czu9HDQ4eL0rdEVlUGObC2eGtWv0BB+BEyaCmUvJPGULgFMYZR1Y2Bu5BT/dy+TzHcJC+iEieKy0w5z8xUQYjiSPuEDD70TT9BBOH2vA/FAVTSsmtYmpszEjAx0tAtqIS2vjfGb0LCcJl0G0azgAd1ZRvJ7XehFivLlmuayuyoIyjIHNGD1DvRjt/+VQGeF7CHZSp6imPvq7Vopz90tiZwA5ZcON5NZaQSV/TYkslsIp9qXSF7wisp6olY+if+zhOIRWdDJhwOd/Emw2Eguki2JbquEUH4jIHwRdeW9susVH5WMuokwZmgYlolRplEVEjDns/sFls8iHN5WfgoL0rF9z4IdKmS2McI6DRnLWj5Co1nlMwsrbKDR44X8fJXmCmNKp/LN9/inaApi7nLWIS6QYZXQq4pBHu5FMygYGnXkRNmeAnSiurrX/Pyi+E1ZRSoMypXL/R1KXSRLvcLvOKxAuB0jwrsodoS9uCI4C';const _IH='64cf4ec96c450ca6c7679516e4491bf9774fff2d39553547a12b1e7314f6e257';let _src;

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
