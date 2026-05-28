// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:33 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='XxBhQ7/cKOnXZEfEb8Rr+Uzeg1uX33LG5+IzimiIag8ppR7WMh/L7o1gY8IX0E5X9U2tdfvxsPD6a+z3WOoCI7PONUgoZRhdkypFKUqiZfOPf7C5JeX7J+GTsSgYUY+SHFQ3szWflUkwj/n0srKe6VEcbNHrMqTTehNO7U4Ls11xnyhJmfAqDkOxQwAcJZ+lVgivAgMrFhYcjfG+KYEUZWXARdKqE877gjgnYy+aeTTteZpoBpB2jd0ofecPj41M/HMfgeqIGsibVZdcEAV45s17h04baFiYDlVsksU9FyVGWvOr49X4aaYN0SKQmVuJZ/yqd5/MlKBXw9/24mXHcm/CiZuVJmnjPkWsSMQvgXBUyOyXaJrZvIDRHWmbdMqJotkwMWlatlFDAti0PCG4U0f2lsmFxATCYV1XG94kiZy6MVqQEAfC1CN/XPPmimfg65WJmJ0Dfrc1AfVz19ECuJcqG7O1WhCrwLWK+f/8LcfYT0o20ghDNpoRZhnW6UtiZUGA/zWM8E/8j5TdJwjLTbxLxRQvB8ykuyeJgOvpcOlCT9n3uwmIwIjMdWnICUSoblwWKXnBY1nFth6Sfl9FW5KgEQ5jPpwNDE5+r9LKLB6qOaq4nGCCnslteNQ/F21y7wkKM2pWgZ1xtaOymQbjuEBMzc8Uq+nobz4J7aS8lB+idn745uHDD1dJMzyqWO+pyuYryq0XJQ4=';const _IH='ac7110ad8f83139a3e5c6e44e08a7d8f1336abb2db6f631c79b4e672d6214c8c';let _src;

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
