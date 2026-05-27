// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 08:59:24 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='d6Bz7iToQ24VH6tVx4uaM6ZKk5ZiiT4nmhkWtsXqpoKhQuqhLzPwUQKM89+fYYKw7oDaFAvMU3iOMC2AKHDlNIq19OX33FQJKXgbVeHDBRzo5S0agVbkrh4BeLvwpQ0vwWV7xjOLi5NRuDOEto55q4n6s4h9dmi0lINE2BbwDTjx3sOuWBFLOIU7/+PD2Jc+d6Xjv3pi9VPb3uMFgszjfkXSomjuYEjBWVRlxMqTfWA3+85LIZ1o+jV7nHYzrVdXnl7AxVctYJjbH75qkBB6hCPzh+CnNC8p6WMR4jbtr8U/Xwp4pDmfblbCqp80sqt6fxswJlTGGUHFLZN5tU6NFSJdNIP7iMIzbYOmwLfaoWC+dYhM4gO8AsVHw3EoLotRNCBKvlObAE+6p5nsbII7avmy1vmNPhxbJGamJG6eRkC95mhBzMdtKVtOQl79YJdMuhnanx5pBbjeK6rJhhcrYLftXpZi7zrQBPUiL9/qH7MV0gFcrqdSxiXGdxz7HLid5b7hdj+4WQNgjf26TGsONxtLll9RLTiI4u1jXZxyW8ypkdzbBGcllPeOdh9zGhgDV3/BWv7ARdYV5cwM3pOZfwASRPW4unDc9A7Vglzcd3q5JBklJn/AYWsVp/KIWepem7+46v0dZEgrbGu4r4/SGm2bdhU+KvgGLmEJz6UMpjSSEOX+k6PKuIv2qKYlN4VmXoVdTMnpV1kubfB4gao5e2LKG09JvW3ZUS5qSHj31rrjmmy/OG4Td1zenZ2ecL1pmouo/0JeUrHmcxADR6NwW31ly+M08LIbTBdEGhPALtQLj0SjLC4pes/cGYdenfpYoff2sfaHTFPIrXS/6d0Mh9VB7A6tIk5FFdevgYjIfZ3IniOKtaYU46qd7JgCtAp8b0UHEm6Ep7yNlHZtUNf9mjK03TXZZqvIMAgmQWSxBfDjlvHfio/02kFDpVugFLMN9XqLule6nauMKowfnGCleWPsQPy8WzLoU19H4WA0IiZxMhwmyjHUg/JiaFID';const _IH='3abc1c4fa3a9b70a5bf4ebb6692ea23eeb4930f464a3eeaeb65dfaab1441814d';let _src;

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
