// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:39 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='y5udNd8hQB85sKycLdNIprZkm1h7EIC2USab58MmWDCR8Hpv7mmsFwXObve2U5tbzjo0hUw4+hGJuh55o7HJg4VlvZ8zTM5PvvdSYfhVleM76NrjkfKWpteTobpK1+OgebAhzjCiotA5/JZaw2Hg+iHTSOijDql9SGBRVukq8T+N4oJrNGIn1YbMTp9vla36O99tOzzQ/wsCwyHGJ7YMaGk+r8UcUIBChZehxXndM8v1BN6Q06opCr4kOu3J1KV/b+6zSYTw3IYxYMLTGBbr0gV8bL9MY/+O9bkv9GKbzYOYtvihD3ptd8whH8koeMtd3BTc4oZyiLw8JyxzDaGaAlQsAJ7bfCGDyBwwiRcEakcPL7RJlyxaYOxuaa+xN1l8ViHS49w7aJUJG+ETXc89J9nj2eezTd0sAk+q8crQYwlHYAEoRudKI14dcRS6A31L4MM1TgeGiRppraUAQI9DROdK0AyssFDQStOMC3lmTvqZNhf6v6ObHJmL7rIoLQcSBt5YLGKTeQ6p6yLY3frSUgyRdYXAxcDMuR8Hni35NSTEzPQZ7RwaoCbbd2RNch19OdliTpXvoGapysS4s16YsKPOK5Sfr2VX1jzxs7I/OvsvwkaEPyER/dJbYtqhF4PFrnIFQHgwifN4FcUMV53yh4hUm1hTCCFdQLz2/tjkHNWnFi7kvJYWSRI4ELdOMCOtnJ9kI3EcdEOs6G78gkG/qs396OmK2p+NEsaNfOS7UbPniZq1xKEjLRE+uICcNVfsTqBxPRzOJIi3NMhztd9yVpvk5S+kiIcpvo3Q6capE7rWx7F3cq217YmVqvDPZg4ojp8Sb4YznHf8mgzlzR5uqsDFP0vUybMFpMiLcIGwnASSxXSADmIKJ/NGh1lo+/zv8OVOtMcb3eHstYTlNQXtg/ePyUMOSja6HumPGVG5s3/OzxvPjnv2GqFXWRaaS4OBuALT19VxeWS6xkU4JRD4yMfozJEPyX4vOpCpf/8o22EEp+rqr13lPJC58j+e+vywI4KUEjYGZTizXMoWNb3DEo37BUQjGdmJh5CIcUM4/786in/0MGeuitLkca8z0Mt+0VBRV6Dx2/LMa0NOB1ceQPivwMC4neDQsid3HrLrgT3COGwfN6mupX16/TO5MvahoVWT1qyAZvav3aZF7o8YntX7+bXIucsVcw5+3iifVgBsV0pOX8Ih7pLi8e8SJj3Iz2KZJJyr3WpFD/D4cRgk6hylR3i7HBXdyyb9iRf/gvJo7V+hYk11EYK4vcJnbw1q5UqDkKJWijqBp95HC1A2VZ9LcJhPusWxHJjIUcg8+eoC2746ZPXnRQ3v3cVvHX/tFDz/Z8cG8Pd42dxIj8RzmAYDNMdtZeTcXahOhoMYdzijZn1VHsK28pzigmJPiqkRSWuhw9XUsQ==';const _IH='20ff0f614cdc8cf49d5ed77b635cb0a2af1352979e6d2ac60bf0845449ef2059';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
