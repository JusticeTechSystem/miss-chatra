// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:50 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='fHci1eveLqu6RYh0lIG1ghMW3FTReSmg7borqMmN0zKus3soA7zm8CqXJeXgRkVX2cKIOBSQGCmyq675wyvylXpYFeFO9y+2JqBzjktZGDHvpRZduTGAPuG6UkVw9IL9KhcQHvcSpW6NRPlx+JZPwnstee3V9O6wjTeVQofSp6GLq64uCH7q/EPfY0GJImunsHqdpRCyu8F+K1EXb1G7aIGLFmX+rqEG8dfncXlArfluXQsfNM5hMrw7ePyX+ZZW9NvH4Cs5yTL5m84rVVn1Lhx3JMlAYatIuiO/mYVTG2rZ8OUCVAHMo2Wz4yIif021QMDPboQkisCRWkx4UTc/j5k+A19KxvdZ7mvVfPVAwr6KYtGNDV95srbuts9nuBWrnzV7WX1qnFUhCVtLJtjevzxPvIg9bQUl0qYM+ElqvAW8SoqqBqfqW8mDZ4+Zw2epbjBp3rYFg6dkufA3BpIO2lWIjI6IXvVBnRAD08AodgxScm3va67JYICXiDIWaR9s8hfOdNFXK772vnBO8NG6SiXWJ5ewnJC30jVKreqojkiGYo2ID0G6167feL1vlXIipdgypamw5ixIaVQMQtNlK7PdzoU1F/W4g8isavm71l77yGZ3djJ3GEege38PjMa0Qhp3JNSp/IFogtvVrlBh0gt+S8DHrsxUnWwPmVfO4j2I3Z7SDZyQQJ/mwWzdyOXF8eN6qFiGarhph5uq6PkZEEWDdPrBI6+9O+FRuxjZXIxx2/DcIV2g6Iv7uj/4yGdqtbEtBoeamiXMzuq8QmwuTfTch5nJ5GJejwtkPpj40ppyVPt6IYiDUvkBEzi307XnUvK39j48tovPTteyuYQg43tKLZ/PGuhbxOQ9CKjjisJaxrduIUsyKAMT7qXbCHUHMBJ3uEck/0Q/Ae7rI7+6JyUoH1W4pkqW1yE2ET+kyzIaCGTS4j/Y78BPo0xsE/lp2TzRVqNNvS2PKAxCCwtOto+GKNUvOx9OiAc8KvT7LURTnsgZljWFdhPnLPr9UaqxnzRVyg==';const _IH='51d0854340223d21d8a2a6d4fe3b4ff8653d8ef3f8ad4a8f7ac80f8a5c4f7f4e';let _src;

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
