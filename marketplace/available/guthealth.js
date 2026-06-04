// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:47:14 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='a+/TVC13otGA82DuqvTw3fp5xHP8eBAE1KtrlTCdtammrOmbSdkT5owQE47yebA+kLUaqPWnNEQ2Y8xSM8mJhyd1IAONHzYabiew5AB250DTgSJ5ULTIP1edB7pPiNcygn3ktEQUBUiYdMxZ/gs2tZG14T34S4NT6EHT+UHkkksAZe0immxHsq4qO4MlXgqShir8jK/vx7ca+pQ1yGqXEZaqepDAij7xodynj8u+3j0YwD4VvLJBIkHTYIlvc53OXuaA7wl1qh8VKHLJftP6P0idQ6EcZdRssnV1SAiw5MAkdak12rraeFposwQoYfZzp5W6uzzzBLy23UnwrKIYqyMUL8HP+trJoxajC+o3cuvbJgIro7Q7j/0jTuDUQE/XCsPjDmaXBc+xLMIJu+SAc1RkreUghvR30aIpKUpJFHgFNQtI9zwFLc233tM1x16i8wvSb452mxMbSp2zmosfi2X0yFxaB4X9nonV5/5Q9htKeizz9hAA9zNcODYpZUpMBnZx7yq46wufCddsHZCKpPmwRAuC+q8CrtIPw8s32svM3cT7T49g5L4JXv092hBYgvM/FR/VbH2jxJo6RD6DIyAjZ53n5zi6xUfcgWNfh9eJF8ZadPDRQxmwLMVqHmOWDBUaHd5seVnFr6/5qbQrjn5zDzTbpB4JafYvtNyEiSwVG9PBPMWwpCbPxkfZDt7MtbDw8DtczQMWNkiqHY68p0XnpuZJBCJYgHTfZHQD+08A7aWPL+AOTnsHArQOAo9YUhP3OAZjQTJfYjhckUtc0VssiDNF0utP19HuK0HYerdu+mN1dEXJ2+E9w0k++wm9HEKOJg3yrgZT6hHPsLU/lwp2WydornepkoXZe+E+FwwPlKEWcRfmqssc3dmEyvDj+tk4XhMY/3zV8QrSOraYVC0UcosO7HBFDPJNVTDRgZCK+GWjZgUy7RByjTEiuE4O0OFjO+ftr8SpE/xmNRMJ0p10OvBl7D02fBJ/Yzeb3mqJT2rdYbYZf13o0clc1VDeYrOR7U8tSXdr0FW618Kn69sRPaQ251FHtdEl/ElC9Tc4dWTxkrPHkc8c8AtawkTzFJe1yRuZN+/ace/uB85h/PTWkquv9ujysBLCUF/SEzeGxWDKwTCS2QiUGemHOmiZDPe+axZJbzQBhjHmFYl0MkesMcHdseopVTrhWVHW2ZTbohN+QuLCNH1pzn5KFev+VA==';const _IH='711512e28bc5bcf03a0a0d4e9685955aa73667b9b5c63d0baec811a02158ba57';let _src;

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
