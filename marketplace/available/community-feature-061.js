// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:45:17 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='lJK14ft0Pm1wZVHWs87MKfcXMbVALZp+p6NMQITTGrkJt4hG4NYovjdqvuoJPzG6n/Gl4LJOxOm4LRaGy/Z7lynOmmf6+CID3nfmRMzi7u2VDTkf/WcXXX5hC369W6ksAdMatnDgJw9hUpycgNlkQ94BfNRrOl/9W3EOU2S04+o0R2rcCIO0tXoqPtfgdgMwQLGFqX/Z6dZiB4qzbaYmSYZKerExRcY5fb7yZXV3XmfWA0LzI2qNhngh9MRg7VzpK2mV8iKwObrj916FUPdGgXrmFHcR+0VH2lh7vcxYXYJMGI9SO4Ue9WmstaWP+UVrT+hRaPpD5u7jTr6zGh4sP8mKLRpzy90neNuecxne3LsI/AtmiD3VSv7xyXk8FvSk5Nom080RvdaNazAlkJssh7XMR4jsilu8ziT0FV6gNKDI5g7nasKe+FFyEMcNTeHqq5ajHaqqZZJgcauWxQtv8dlIEuSJypIWlBwgptP22oFwio3bzheBntEYU5ZQxUJONqTc3crU4VMFo/XpfS4cVTsKMKeSEfAe5BK6O+aSVD/tQ9zgf8x4/lg83c0pKqkNpz4CYxLivmQdN1HS/ouBOcHXc0uTHRyIaFinAjnv26f86vqhybAppRtHnOmeQKEjfa4V5tgIpDG1sItBPdSbuZWLdOED259UjzlP1gBVe+qDz8sUHdgrDl+6dXla3GHy899h4pDn0CLNexiKLtnk0Gqpt3w=';const _IH='fd1a9f01a339ac001ead0308e8299dc4dcb85329d56297947ba2ffd92e234821';let _src;

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
