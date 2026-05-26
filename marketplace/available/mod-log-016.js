// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:48:22 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='gBLrptmV9Ca4mLsNurTJKV3Y6t/Kmf3gWytSbFTkE0KVWG1jqyAIYtB8Fff02P5dMd1wHT/nelNq/iCFFQ+XRb0XuGZhb9pspyVv3O6aABW2Lj4Ai5Qmnj2U9nGPrgB4Iv/FpF0+Q9wkoQlr6w1PhQN2XkIoRZu3wtT7q4AzmWu6DvmQGxAUJKGcoM1BA1b88fxKYMNCyPyDUV72h36uD3jUMTEih1h9o5c7Ttj2ag3G4TH3xR4NprJgeh/ubeO0BSSaJrEa1Y/naFXUU8JHSig9gtMT/87Yra84dNZMGJ0B8A11znfgHc3IctdiDE9qeTHFKjjwJsuM0cO3GI0K7Ugfh6egsgfUr/p1PI78YPNDE/NJF4tp4pGJG7qaEXdcgXkSd4kDvq90CDQUqWIMy6a58C1ZaRiRsRUzZVCFgzlrDT2+oFqUMKkZc8tHTOW08Y/MvYfsbODqFSMpZW8sOI9ChhmnIwZrUlBBTY9Cdaipb3X5oak2yKOgCRj/r0DfEm2CbsHTi30YgauOPOU3CImabcoDvBd2PK134h0nasLYWgUiWToZDU5WruSfL96JrGIesx+gQ2SxpzTmoSqY0IQMnp356BJFK7kEMDA0itE5YavMT2U21uAVMewA65lTPF2md36a3FZlAL9iHEkDjaAp+sx+k9YSz1NGQKQJWHlcOwWsNNzVyc6Y4jmOST2We/90H6KWhX4NXAPRX61XhalNxl8CeA987gXtNjsS4ZtbtQNtD+jRLvoHKqo2TFzepGAVzXPCLnUnqnCclqnir/QDXLrIEBkXwHujNeI4wWhqTGme0Rzka2z5Cmd/Oycbw0p3Op0o2FKOs+OsUU/U2eMiYhA7qmTP80eLjSH2R0Z3YLI6OnYBZP8rIZ0D7oLv9arjEBj6r3j25R2J6Sfdox8vTLs/2mP5iSV/UqJUGzgfB9NkNs2hq2P7bWl8UI9w3OwnQ0uDDTeOA115Jh7p/x8KUxEhqs7KPhl8Dr2Nt+yx1P95vexAKjXKyPmUVoYGKT9Xy2Ah+wrGO/PfJm/Q8h+pfkBbxG41/w90Pyz+XcTlqangnjoUxm9HHv+qSWaxmGl5UzE2Eg9o3a1piq9H/Gt0Y8kfV1gweNxXUw5EuVLTqzcKe+4kgH1LKED4xVHGPvvKoJ8H6pWJCZeLC2FNuVoJlkpiDGvhwWbXSArX1J7HmPYiq4ahX7VOsKhOC8B/X5FBl+z8BTCztj+hKAm5UZ3v0AtVYk2sMQeIJsvCCDhI0meHPAtt0uHZnFEu2qJsGIi1m1q827e+eIVmcmslIOUWLR0JWXhqWuxWPPHY3XegFiHsnYa24kK4BiAPbRT3f/p4YeY=';const _IH='e650ec582b0d00edbeab17c8d3d33d5267fced0d9f8819859a228f123a2fe359';let _src;

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
