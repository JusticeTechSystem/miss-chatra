// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:36:13 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='XPOF9UxcnKHCY+I2JCOrNO4r/hUwLqYzwA/IRbky7olQCn+K1maVla2XKAl5XhNqx9rlEn63ipZCt6T3MexhinYMyoeZ+1Xhe73BEWnS2tzbSRG0R9vdvR2kF0+A/5o4HPB/RlLa/8Bf7XqkCgSXf1/7Nnuny+QGuYLyflpaS2rF4D6CkUi+8YjfCUxbVwv5+0qBgbdtJ4+VthkOmnsPa4hY7DF9JBBPJsY+6QT8/nt5yxffu+3ba5uk5FKYHXODDqQeE7XQ8aT6OWyzQSWH+gWOmPX/9Et6af9mTilNlSb6ScKJhJkO3mMZDqhx4soX4QPcXTN7BA34Z39It9m3nyQQ96KepKDPfTyGwE5Hv/YlmUi/jFBKwmvKfz/J/IO0+lu0rf2KqjfPpbBQYoQIM1h98y2zj/IGNWSh7ygr1cG3uR/4AbRhhufRDXGpTG/VJA52cu3tqKR8LRAWSiOxhlqDUUcC7uwDQ5smbe4awjAJcRAb6wMSoEWdIjl3+pV2FccEPSSQEQlifuNK5kO4pbLg9dCYFBk3DYOUij7KC4RMNX7ytbwX8WpQal+Vl8f8nxKiNmE6zqAEqeQam9bwiKos2dqnJ0mfYazHVudB1tAbhsIVc5Ud1J6hZZlhlRcotSslcvfuDloxsds0WIgbvCBk3H8jcRLk6Vnn8CyNYjvD9sm5bwoN4QzU9azcFPaGCwbvqDAxS7euwF1RyU/9ZF5mjBVcJKYybVYUryKOx3z39dYj9dDofC4yjnmiGDE9E/0qapL9eDyWgtB8JO67hMJnXJ55fwJ4/FsXr7LOUMYREfrRJSrq6w3DRi7i/RP5AJOyG3MiWiTAxwsV62SsKKFBOsj2d858iZwIwB0wxqN2hNhG6V7eGFdGaPJ/3I54Zsgt63IOwT8M7WBelsoa+ohKbgt21CIi4PXI6fF4kOXA3LzSYG+mWzNVVwJlr/PFpPQ46igMa3VL12V+uQ0+mqf6Qp7Ytu25FDBQwUuFSUNzCedS/wlUpZAN9H/q+ArHQUB+Dgpqj/ZTIu3lcZemwQlp';const _IH='be3a838fc79381673cfd7a143a2ce1a724ec909106ffc69afbe66af36ffb744c';let _src;

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
