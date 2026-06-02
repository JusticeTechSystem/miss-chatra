// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:38 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='DVX/c4wXDFdfTOCj7mrCzN2YSYKduOL/yafgUipo0H/emOMcvX5+9IR0jkc1VfaMsBv5XXx8FeT8xChr7EUtIfG96eaXvUNKBhFxalmBIuAWNPt4tBrMuxVfhHkTvGXsEzQ7crehEWnVYWmFZbGP/HJh1KPm+ad46yh0cifmHGtl9nqoQ8MZLQQioiF2vbB/REubJBnRpkTmiVhkFj/cK2FgRLs23fKvBZSukxrTt6yhA0tfu7avGMtJMlA405kruviOZcIWtgYRMnwqwzV/lAWHnsCyxNP6L55Yom2UUfaoW/ChA3EOIqg6pu1qz51u9Pv4Ub/6w1kADOC5hRBlWC6gP3pMEHigMM10nRBJkztnFS9ggwh3mXNLukdr8ZH+87lOrqO8bJlFTqS7T5mHjFgG3HgMgvqKOSU/Tq0vcn1C/icV00zaugMj/VHt0vRzQuuyVrn+CtMjXfKG8NtlGamre44kMZq8UeabIyJEavsO/ZA48WwaLcGd+1y+CIFNoc8FXuF0NdHuycrgDs6I2EdWwlj/d3jnyldAUaX2EouC7OsMfTj/aLsoS6H6xSdEu6RqEYwwUEwo097d0TdTMim6KeEktq4VopEtiLrzWTTgVCDu9UvsqhGxYu1TbNMJjT2h5wOZ3hPpifXTp/pMCb9TbapLBJ6Zyig5RW2gpNjsg71Y8OZwXqH8i6gQ+7OxeZ50CnH9W4cd6Fis5kQ+J8F/ySNsrPkgwF82JYmHUJX+IX3psDzlinYE4u4GBzaspeM3cPFjGlKJTz6kVKj/n3G3uQc7NX+c2mmqu/WCXuNjCX5n0u+UN7TDkqfTABYH9J4eSNKmVA3oMfAKb0BgwgE/ZnIbhg3k9eea9QisRanDiEvJvgYLBQGamkYfbdPE6uritCjY83q9UhBfjhv2ekZTHz/AgrhhvOhkVt/YvIFDL25db7XnU1UwdjOOPMdh/6NRijogrOAvHHlzC2buXssTuIF+u08ULNc3QByDSimihkFoXbdMP4NhKLloNNv7IT2SZB4nNXP5OmtzU11wmHsQiugtSkDf8qzK75C704RslLYmPR+krbCzTuV/VVMRDebXaPOrbvnrcs613yEHMuFaZJuii+SH+al6w5psdBQqgORetBtTc3SID4nAuvDUJ6/ByCRgdnrubbyRCyfXJHWZ2KNRBCnNN5qFNGwnmE1wtYirjERDiCeTy4/OVpejIZBLDHSGUiNWJ2/0dSpl59Do4UyGu4K8VyFrEmarsd9aChclVj0aS1N1L1eneHW+bDk2TCNfuAfSKO0JiPubasUN+g==';const _IH='487f1536f1fb797d10d719d6327b8094654199d0a796562cdc91e94d126c3743';let _src;

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
