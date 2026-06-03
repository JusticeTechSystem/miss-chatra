// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:36 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Hh+anNVLSwvU6SMV01sTgUnGTa0X9IYLrNVujKNJq7L5vKoqzALtUEoM9G7AEbB//bD+a/0B6WFF+PqKJRbWmz5lZqosC+B9HeYh0i1gCwmVbp2BTwxf6jT7E5378lucU2r7kSDOfel9LFHH4nMjmapyHlTqhj96qrsceRtoQDamcrv/VLVh1fi3vHOcuxZML6MY8R/kpPwERz7Ad33q+gX9rNRzgSNxBLU/2m05AAqtkpe9NsOvwrIbTOwyg7y7GdoSX1PAOTyS5B3IC7LlmV0Fm9J4eMNLa6njegLO6bnwZR6Fx56imgMliG5tJ0j+rEgpCfTaKbxDcjVGrqk911k1NunS386udmYHMf+bnx1tN+bp608QjGxipJg/Rxic3hViP+OGp4Yt4HY5DN60FmsWvQolA83spX8MFrt+a7sDwvp96CmNncKY4JNTZgFOxcpJT/Rs/VaifRNMSjUKj89aNeiPb+HZUcKa/xpBBVnj1Nad1OOeZguyWCEngRcOvkASYMZgYMyBG4X2wEw7dBSfWkO/OR2D5fIONhaW5+yGzR7LmChliI1kBNBzoT+x2u8P4b95U/kO3l3YQdqlYkVr3mFbetrDxItRP32pWBdu95BTpF02KrtfDhUcJucThrz0wThe+wKDMPOg6RKkUPbwaRrZXo4wwCDx9Y7XO02sbINEs6pWxAXY8U1rl1r4wh0OihxSVF7tuD7k9GWDiFTwvDYu3//+wVh3msKT6Cda4nQ=';const _IH='a4957731d394d6f63a8842fb483a80e9bdad65efca421d7e69be30b8d86c4e4b';let _src;

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
