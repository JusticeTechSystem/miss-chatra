// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:17 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='5E4QZdY/1OkvZij79VdpKqK2D85TB/c0+Y40fw4V77R2/KpW9QuSayj78QU8JSHlnXGkvF1+n3Wps94O9t+prmuxMbGrRjwsSG67GUqcMaAKVZd8KYi8ZQdJ5bNvhc26cZ/JCFNGVbzWKcY+UKxOoqJLak21aaV6HOhiHvfZx43HmvSLqUy6LiVlUkayIUNKui3mGVO4/FQ6pUcJ+ctNF3EwLbY/TknbT+KRTymzXDBzSEYX2s9gqbVAOKqme/8/dKpwJUOpzcRNviUiYSCTziYI6uMTUjxiCZLqUj5TGWONwZICh1PlKxhEQIfh7b9fP+G9QCibYT7rcG/k49R0+OVBOJ2vE+NztgdV7nqNUHpIZ1Zsg0Bl+p8ocarJvQPyLo8ziRmfm6MoUJWxu/8z/YDPQrCkS9431vXzyLUTCSWZfEz2tmdmKBumNUDyZ1ak9rWuzaOpFXZJ/Ngdjn8u13P9xP6eriO12pMQomvkXHxe/150mZmWQFv+bQ5VKy9RaZMCcHarMQXoU4NCtWiK2tCSK7CJaCZ6gGWkPz2c1K3IFDIo8FCTqiTrJNB/IQzgW62QME8ev20sXfqHS25bkgA1+9i5Y4b2g25lFarhG6BrgIgyR58S/323eUvqn8Y1TDcw2jXDQCjKGIJYo7/764MZPI2FFh5601lsXLd7oQaLtxzkF1dJpADW37ET2zyeeD4nruRscpVDS0ozkJsptTOue+8M9V5mo51uTdDbetEXUL+tDx+1rY2Kt54dH9OVe0qH3njL+2NVLhX0/xMAaUuSoD8TJ9j/Pr3v6Wcli4UOwqJ3OW5HjbWe1nNST574U1GJWcEgKoO8oht2QDCE9GV8b5WsYT/slrhv0Ur8PsGjMRTMuG+pZp6a0kap2Itqncdz+iGmjrjgvBPZEcFl6nqgIj2jM4Zd1rJoIhGgwIJ6/TGSs6ChY/28EKrT8U56wvIZktiz7eYV4Za4fgrTOgujJgt2yFfKZetGnznhzswn+4zfL92ZFUWw';const _IH='26abf2e6b0d7ebd6efcd127aa7e078f307804371eb98482d09669ecc72834507';let _src;

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
