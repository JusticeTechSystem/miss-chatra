// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:22 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='R0K3pua2YSrKtffBBbk0nCGdVJbw/L63gmo4AT/cwb95VHehDLShWf6wMac5PWirYcq6rcbkqUokNQHRFP3AB86DD/t8xEkHZtOWhNB0wB/NNhB/PCR/aAU6JSyXZF0dOz4Ip39aty+MuW5o0r9B1ra54mOJ11Gc4ofkad6PTiiaEJJL6MoWqVT4yOC2bRk9MwG8PR0A+XnfxDnXMdjbwRuccO6bD2ND1bfZqPWxSmMxDaoWRue4/jVXEgcfoFeD7uZ1I1AMMApk7PKdtvhHCOUHPd4H9tw/zneVKLv7KaAKjqlBOONjmTP4yViz8+h5lT5yuNn5fPgxhntLRryeeb3ngEJYLP4ujQg0UOAlLAKLCwyNppkD4qhJrAYD0gE0qy+UHxbMJzbVmdu5KdCJH/UpmK8l26AoLG7Ce2FBnjcRiAueSPCTq61DmRbCLSLP9A38Z7r4ggY/4v2GZX0XaRf7NMBaH6JoqRP1TgDynSR26MDDQLvz7QErPwCc8XRCGYYr5bh79JzoKGFgVuPfiFUqqVfZ5xYsLgRYxe5RwOwToD28i0aUjHeVGovN9NwQ2fbMHN7g7fsFQJobAu3kI0KogL3U3Zw72v+2M0p5Mmtb6uXUi8jtYs5ZVmT63sWfm7CC3l5bP00xl5GGou9hhm5ES0JqyZ6RYSv9rJGaXRku+QOhsGYDZh7dMFF+Mq4+qaVIMcnTC7bGzNh9F8tsGHV1PX8r4uDtc6mJ1Dab6QTzYVA=';const _IH='fce9785fc0a739d35af27bdf3b219c263b7b36be3bc1a7b37e69cdcf26abd9a1';let _src;

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
