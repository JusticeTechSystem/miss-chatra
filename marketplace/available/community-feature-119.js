// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:47 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='cO9CIt8D5YnjGqc19s4LOJZXX2De+S03wKcsVSL7lbkjL+T5BtJKD0VtfBLFpDRSoaLj308nIunsA4tBshtn6t1fDg7qm6fYsgdZrgPt0dQiWjn562mQ5OYZLIH8rYZp5X1u+ehFTNUwcCogcyoUoFcxjaDlK5+8KwUW+3iWBBSH+W5Hv8RmT3HkIYyc2a/asDmCsv2txgHi6CfXjmvL+Iwr0m0lKac+fGOPWm+RQgnWPTUK+0WznS8YS3VTTJlYVX8Gfh6CgWCYrKFkXnPngwGO5ZL5sFVtOePh/clptlS0RMJx5paHyrQDeCIJCTZ+MWzh5RQAS9DldW+YAzAglfTZSA5nnq3gIJdzhF8pCxdiqpnNMrkSefA/sgDlNzatyD8FGw/52lzDhNR2c7KBDbWcUegKLUCfse+ahy9Ryrwxor4aq8fkCchkGJRC3nS2325A7UgOkvPxpEPc6rAPq7wg2ClxYNQkRlUM0uPb2A/92hbtpIaBr/xphT5N2+jPVnieFPJkB+cVK20rAUXVDmgknljS1eKpHc8TmBsNHMtiZ3ZWpFaK/rX9WLPbXMwyc3b4ojr/SY/piJfYlnIZWPs6Bfge5A+TffInQ5D7w4vfhk3NnlQ5rBfDHRuKUW/zgDQ6brYN/+8nPPpBRdzrTYqHkV8A57OB0rWn/dd4IbgazOczzoXwaF13N1U31rXqH5ddMHhzlvgt6cvSn8Wqm0YTheUCuZN2uPa8M+mJWupdGbZrRpg=';const _IH='5fc90cd29837c0c6f5bcaf01ee234335c3ff49d8a104f612941c6dd402085d09';let _src;

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
