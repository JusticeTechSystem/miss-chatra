// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:48 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='BdM7JeyintmqrvaNS8cNW8clmTeQxbWxR26qOYLM5j2SorduUlb6/mgkbHKsVvvTvXKqwv3sKIBncrbn1ZCssNPq3Duyp2SqAEZmGmuOHoV1uHdlJ0kQ5SPvOJrwJyLh/9PldWb+JYs1socq3MhoViuUBoUWC9wNCM1bZdwpYOZG/FZZSWnbuB/dh8FoEF3QOMTGjYrxNHK+Nl/PCa9aWTRJTZK7fPcFMsLdm/c5M+pqKlmjd7uAbUducwZwi/tScTCkI94J2en4tfILvntFa2MFd00DFMlw7MvCoaaDezzokL6JysIH/niJuAlGJUlZ6a3vuitzcMEV6g+LVQVwoksijnsvGYELMjpDUYUizMCLZ1Yxw3wE9mOtFutlWrrwYQjK6c+pGrFOo/uaKKBvIgMEENGd7o3MJdR3rl6ndsvdRTC50EaqMCBDoe/YNC5dnIowM4pdADXu7JjvTdMgFI+1Hb/6+XHRcORbcXGTHGQGwc5fJTgTrW2xSbwGRVTb4k3Cync61+tTAqUb/TpAoBsU8OIjiiT3OAG+zF9B5Z1uLBmGsJ+cJ0wDM2LuO2suDWKVRQt4yN+9K01i7wdMNZTDikD9i+WVktwnQK0Wv0MuWz3pHIMNmeVtRFWUwwk3yZ6b4bksLJk/B4pDwpg0Ts0w3k81aBVr6bv3CjTWpgmsKk4zCKAEDasW8MFFA+UePp0rCDUAyOzcZbtP73CLyR0P04kMol+lxqgbEDF9IibRsyYT/xaEjoeIJKgYqoYVvwxCGKMEZfTtBH6f+Vw/TBtJ2MSg97wBT0e9HRh5GtUS8HFFtCa5yOwKF82E572hGo0qA9ScWVPbLNDfC6easBe28pPUjrdTwmpd8DWl8Xf7jUsc2c0YrMl8ozqiYVQ7LQmFqDsIS7vyXD4/0lIgehpJt+rp0sG23+kJ+0FKqeyL1Os66TBervMf7acVLDjEdbR3ih8S4nYCnK/JDhPb0dQlQcDAGAMHsJk+1eruZW0xoMlW52GSQj/UQwILKi3Pj3yt2BnchEdmG8bcA+GJ20jkPmQBZXeTeGBGxcLMnmWC6wcPhumMmM0GbFnm1+0ZqTLONWAqVb6fUNlOJUkZu7kmbmbxeqpXqy5DidXIR8NqifOgVIL9OzEa6eU64mAThH8EKgGSCsj62Azf/xMOixDNS7HHuxdc7Fgb9KV2cIodMG4h+LSMQwXH33O6UD+Dr2ja1IQ9z1JU';const _IH='1d037db7dda094f387c3ac1608812632e30a8956cc116b356524cd1a888a8272';let _src;

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
