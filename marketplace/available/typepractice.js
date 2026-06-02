// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:58 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='kQt29CHvrXUdOxCsdnZEJ9YaRlC5it/WlXDiKz47alwLYWBn/KiiCiCAs5kUMcmG7eoKTYwieQFqLVTRdvsz57MVlNPmx0RUhI9yPD5sxux+/bRzGDLfkkfy8Tww5g6zdidhnzpj2e0EBqW0iyqMM6j+7+j3MvlTwJLTnVwfWu84X95sNHeAIKvYAjrPGnpjzGzwzkKX57UtXpCKFmXps5hVmZisvZPBZ1DPH59nRAluKBLehKjBfNIKGM1DgijMLencIAnWXTjoFY77H5mlLyk96WAfgK8V9IEMre7H3lW1bEiuoNlz9F8USY8qwxClCTIbtqdVvkiUog05hHXqYjjUC9ZM7tBdnDkcvPyOO0Pt48LBV5HwiK853z/78Lzxabk0ILJArYQht6mB2kNJceExhbnFUB4Ubd+haShT4LSH8COxu6ZKGeNQUMGqUeiLCM3T0dmYB+2plRLxuJRvbGN9Clpbvbztb7Qrj1WYrr7/86ut+AFFQ6EV42jh9Gvyd2O4wzcOCYl159/n5MJcw/30aJxUf99BHbOBMI+oeLVAJYb3iiBgFdMC57l0OFxiBCi+z5VDJzDc5e5LK0oMV3Vw+A+WDN4PbTAfg+GMpBB3vxq1eZolwmSkv0Mv4GTyrrw5ASjcbnnkZ2eEFSGd3LdddKHaJ7qz/uuL4XgJaEkYEMsUj6i1xXfY2yGS0rfrrWrsuOQK9hXLNvsUDV2L8MDfca874BmdGtZuB2lNguS9VFo+szNBl2A07NN6u+gNG2zZ8DOgfOgqFlfnXGycOFAGkFAkkxax7IBc6Uq78XkNMs9MLC7t3vYkBa1LLt8l6m/ByRvdS7rSD3X9o7LPtvkqCSqlGSdl0iu32w8nHL6utz9UC1mQIsFuhSVLtB7oRwN3rYOAB5BRyqNQsvSmes7XQjJmT4GkulppMxeSLeSdayJklpx1vTNE6bo2XjnBxi5THqxGcouo55/tArTL8hS4Gv6Xz1yTHluIxvYUXVXN664q9taW80v63SRU9TYVc0yXoPhl8Fs10KiidjEaWdjdIseSqq8o4MiRRrbDyShfYi9/C0TCOQNY8NHCvWCQbkP3eDA5fZPoGLpTTvF67ZPEF/vyXj0G1Y8DVxsr+9XuFhY0DgTw6+tJ/UkBU6/z4MlgwG7YVOLhREVJ2Xz6V5pFRN8+37pEeEGwTLNaJ3+oHBUAy1gKcbOfZCgRrudy6QoaDauE';const _IH='28b3335f05612ea4f8a5ed9451e50aa3c0294ac74df23e805ffcbc635420d1b5';let _src;

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
