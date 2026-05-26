// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:29:04 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='7Ezjqs3igU0YOojVd/GhioY8jSdJN4lp6QYfrZJuUkTn84nm4ed6l8pq+bY90uSA8K9b9B5ZjjrNx6c1uFf4ovDWMh1FFJj8gXphSfAURvoSGFOaj/LOJaNL8SHUkWalTNVMCS9unvVSsCrO5l+iH+CafGqrFSGHTXsfCQUM4VkYl6/4S9ItiBthSCPrzVzyM5E0nIn6gy4O6Mm7R533Ft5eHWwv9QJiPnkCKrOEK3SfTysyDKATGpA8MXsQjPzWScvL3YtpgRUUQpUBlckTCjP4gfLSuyOnyjvSvQhzy1uOopMIjn1rENewpEFlXTOHlthDSM2hZQ2C/eRrbUJFkRv2vKrJjdbenIaJOXYx7uA20RGozTD+KlRs0V5EH5WjeRFNNK72EpYe0UYmsBonS7JkWrrl4G4re4tMVynOzsGBE6AgMJzVYdHNTB2FUjAyMonFtNlg9ZRQoYUdnPNkdSUpl/NN/esCEsvu9XpprBXPGsRk0QLPlaCQvhyoW4a0KpLFoDRRCD1pW5EPYNL3X33ATsxphAT35Fjm4/INtuVnIA5EAubhp8ga9pMN+WGktU/lZ7zSypYwFBy9PfwDRVooEnxqPQjuedgvYG2HN9BDaRvN+/3OEvwSTuwWAJrcRb6nn9bQHe2gl1d1S9nkybubJYf1+A8VXohkbfBRCU2u+7nag3R9ftdpTgBGkCUdPvTqsevcZ6cd5sRDnVtFWxB0BuPySFyMxAuaHRAbUoz5W85Au2E3jP+mDpBb95qmgfvaqN+9C5F29g26ppH8PFhPVumAPPc3QLmbX9gy/8vnKJnzo82gHns92Ascq3eTBBKSF7KLpMGhXyb/Rj6owuYO1Ia24GBsfGPz0coSG/fDwHrOY7OL6JCd00pgITzMA1+0cpkV81lrixC5/VGC2bSvlsds0zVTBAWpc598XWOZEVLjp2qj0czwCDGomnw8Ki38gGYzGQlxxkcoYebAvvOEYbXZkdrnXnU5aHLF9ET4LlaEu7I8l8/mxmyXaRxCWamtwwZ5Ov9AzBJu/fCPptwTg6bfBxr5Ng4drYSGNs1M+45El2Lo84TDbHpwdiDMGwWDg2M3Nk/H9A4eVVYdtNDjSZb7dScknFHmuiDpZOasTUe/gW4CnbmvCTruXejpBBHM/J84rICzspxJeoal5VyFJjOohZPP1uM3JNBceNMy9M8g6yu36Oiflb1WjEto0Fvnw1Y5cJJUoPDInmhevviTfPBC2IatEHvf4dcwYziSnVA8UI5kYx0sFsEkymMoK963Uc6Rd749YpQ3+mttWfM50cihXbMMOE5c2365jTGV/lS4MenxyrdjCrVkMiJl/J1IPhqzfnKLlw9i2sfDyTAe6GBCGbddnHDeuuxadBE1qJOLOV/j1zhmW2XSwU784Bk=';const _IH='a930ad92e95e33fa0c300cdfe61af7a600a192761358aeb9a75ecac3401c545c';let _src;

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
