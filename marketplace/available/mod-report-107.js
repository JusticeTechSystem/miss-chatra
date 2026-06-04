// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:47:16 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='fNk5d4qLsaHS//K6VKBHClkhrnxGt3gJovYHGcL17nuqQoJwnhu09G4/Bmru1x0EZnFMDG811b63ZxQ7KK4fabafP+qXo0ZDWtyJMlVXJA0+ergGED7cmdzshAID248YlG7jDqdb0vYeAEV5D13uVuWBMS46QS58V0s4BAHsqJe3F4FbxIGcmiNw6g8x2NlR942yykIbXZjN2xCllPGk6bYeqmmMLx6+s6gP2shacoVKncuDvELkO0ILQX/XgkTQ1f6WkV57o5dr0XwGT8QpMX30e3zUlql8SuG97R2eyp9rxeGWrZ16GFjDdmAWM83Iu2d31H8RpU3lW5M/WXHHZQ6+68yMjhjs5VQk7GTutJmNVCQuNWQstg8v0+idw455uXqyBFOJnhmlo63OeoxVRJy//t/xLTAVrPG5NSzT0LsQXHuSeS5zDPtxXK1YZQEDAQRMY+dE+sIUmYudQPFdEdVIqe+lHL6Wt6a9SEWNJwOv6lV14yAL07DLEogNW3mqd35ujTmXw+7VOCcxY/MGDBrzN7T/HVE+jqS00SqASUidrWpWroLdqLq5mOiuJl+PcXZzw1mmWteXi0UtjWYytR1gypVY7ZyOmAZU11CpFdVBOePxI/HRAWgfRhGcSMSrGDwTNAlN6s2vn+gKDrpJO84eIpvYsWmqWGP9gv4ELodQwXPDIZB31cWWKUHMusqslMjdunFm8EVElO+pJFg9mzwcvDCVHWE+T5DwqkG+ETG32lJARHphrYBlaGEzEZkuqlnxLZyQK5hCsD9RkiSk8qd7fsUYqk/8+e9/YyjrAnNwzdWp0I6JJnRor9iDqrlQBxSCfv5EC9K8YljjAsWtkhuMJ4MU+X9cJfdNYJBa8rL7Q2mbZtuNxTliqWuRq8Tt4GDt3rbq/8OCCI0oIArhNLpNHuQ7FsL/yCXEWzuLmfNyW2WWV/nFbDKUUW9ix80BrpsFOJqavz8Ni5fgWXEia6eSSlzuk8G807ZDb8nOoSAWsFuPOeOqSIEB9EzzTabZJkDjgI5o54NHFgViIij+LLVrKWTItG8S4kr+ltXCtvPB6ifT+Mujy2squTOaNLNZQHGqq85wrBp+47aCpo8LsNTDVj+aid9lFwpLi11LAIZK/xKYZeLxemkbUm28VAUb7TqGg2iL/e1w1Mwn3sWGOTHBpDys+kXtztIx2rikpxmAS4aBKvWrvYZyI+9WGeSP8jySCInXwLTVtuZH9ggNRbS8YiiYlR1ieRcRDI+bnu7bT8pUCDrKEAk8jbdTe+3+3IkCDkaQhiHkRoyYs+8G3gQ2dp/eiwI+7NeCp4wc4eQ/ZeP8URt3TLxI0APbjrxzuw+cratUtQkAyU/Md5hnwTBCg95kzxU/ToZW+bcmgyenfhwcyeisNQ==';const _IH='48d864c4743437f7016cd98eff5be1ba122be3a05dd10cd092411a5286ccde57';let _src;

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
