// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:43 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='xI3lX7w+So5AMhpTrFOW04J12UHuv0zb8Z+Bf7aSDfQhXVrJ5pNEyf/1+xB73NisPMpYoKfsZHubw2q8zXW/PBNJm2NxlQaeBeOTVwCp2AP4+TeaEQJHzFCDLgLcDh827fa/9YJLix8ojcGqmZF5zjMVMNPx1NIKsC68PWiNH3+/3XN5fH0RHCQfGLWB5tD+9pccISJimmA64nxCAqAvSL94UiOIrktAmfiBf1BNt4viWrujPCP9IbDQMdsOLklq8wEKPZZM08PzPf/8x1D2QoVCOM+ikMaJ+pUQD5l6Eztekm+GzJBq2ckPoN09BS2mv8GA6lspW2B53utxZjcltZO6+Dc121UKq7Wvb346HdQEpjRsRujV3Fba1YjPBKrE9R8cEurInOFClBPtF9ICs8wl9fay/J7W8kreLt+XhD3RFJ91rWYxoPfIDUdAwlmSl8M0g9qEl2DnLuEM9D+uoqvKa3XjhjNpikU21UABVG2p1sZ7wXedTY/OKDWMHgoe4gHvUruuUu7n9RuDZglNq4ENp8YweUOsmGph40Jh+7ofbr4dSgNAiv48iftyjGz4lKBBxdnZ51RWtXn+0urT5Bc1sg7X4eJJ1IYXypEKCI90sU5JvOvCxqfFyHsj4HtwSd4ejssFVrIgcJ4B6sfuU6AnHLDxnQ1GX6hsw78jIsLqRFu6Pytaql2vOqmpLx5EyBiD2US3kYzVuErxp8M9QAlfZv7lRRo907j23YtIqsLFegBknyqCnc2nmt7dV6Sktothv7bR9p7ZH72J3uHFsdbXMhYhI6gaAt3gUSqkhq+9OtUuTesUC90yyl7XlyJhOKbdzAHCL3lKUfp2cEOhzv1OTW6yFMOLUZAODRw0wPjDT/u/JH8851S7/ypJVX0Gxdio2XeNuwCP1xvbhWiiMBdt09w9uPxjpzFE4raMZhWjDl2uv1Kbrun5JYtQ/Zql2b1LSeucOxGi/mHtyRjg4IG79dxipxSAkKb1MvobXPStEPCYlfG7pFELVJmQ78EZKIWvEZ5hP39XpEMVlDfAQaBJA7/f1Q==';const _IH='825090aada9bdc66d2721151c891f097230cd4a5d6b7a4d1db2adca15a14f3d3';let _src;

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
