// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:32:52 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ2tZjPsyHNp72cHLowqtSZWpMlSSeXp7zc9NiEIaJx9PejBlNCmFfNN6PQME8sXWrv8TzpVPF488R1ym/K3+314Tgn5r6fyZmJhJ5s341/AznFHYsSfcAxrhwXHDc2c55wH/19A/6sdLlmHqW0W9Tkw1jJCYBWQamrKMFb/Pqnkqx67VP3MJTUyG4TntjrXa6GxX7lziBMMP2cjipxNDP6Ebz7qQ14AaLxb6Yz5vNPo4ukO8xWl9Zt2psS4Sb2BkkL43MJ5EMPJOifiwJJ1vc8Su0qLhunKZAAr1DVIYtJta4ZBN/kjcbZGSu1XNB2SA0X1cebfMuimt+LgTMJwgGvkozb0hWkpGesDp0oEfotfLLVljSGHetesmuRh5mYPR+sx0XijUauy0bTS5/7J+P6t1lTTKylfQJk7buqMYfMeNUN7MdwInGvLUhgOaF74GEyiBgGct+T4kSXjyNlJTLnZP3csvLPaVcws/GRWf0S0xAJWndMyl0eYhYu7yyUcmjJkNTYRNNGnsKl9dujK0F2BX6mX8cx/pha+JYLv5+dmLiy3OBJjlZ6pYf+qGVgZglhkqZkPHEBTanE558D3PS3SCzKXoPvaF067xUv/GYU+EO9ZStzKeEHzEfGnq3/GNYItRksLSUsMOwcD6mPa20DZz6J9M+hzMWYgFOsmHhiciRqOpJe6I+6Uhp/AdHteV4keg6kL2fSoqMd9fgcJq/+bE+lHB';const _IH='deb2b4743dce2f96bf9d0cb6876a2e204e0f7da7a4f902d1f2c4879f8755b10a';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
