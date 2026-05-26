// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:28:27 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='hj7FqZmn/Uz+euCYdKImNjar9CakDFxH0dMBzqqqukr7htwy7S2u5RfGRv1Nx6B9tLEzFumyUtKD2uCmvRpG+roK8bkEpLHds7LZdpJP1oqZnbRpFBfagWUVUGnRKxi1SFDyv2TKKkSzf4twlnKjZcvrqyRnHhsLqOB0kJcqaDqh3TMvOHCnQHd1QiPp9n4ga8MZPnUvrx5Lwu7m/HBOVW9zjwE4Eu3UgQ+1qcuYO0wZWP3+eYBzOkzv9OtYPNkLlm68fYM6gc001OK9L+wQxdOazbS+GO4XTA7oA2MvjE2zI99va+XrqMmrqOaSbOfIq/IhmrTEPkFSvletCkkeCgjajqqYQ05OWaTsmTlyTWT8munKAlOLUJ0os2fAd+uHeDuk8iaZuvn5gk3KprrpIBUl3qqusOiHvnolIvQcBXHe7OvPYz8CeR/wsinaesqmVq67BTVDgPjntMtHwjHIAKoNa9NnngsVcF91I8vKgVPJFLJXrMGlms2GTOr8dJ9GDVe4kTLkqKXOvXR7NWnhNNTTOweqCJGhzXaw+ugO3uHGGOdP5J69aD9YPkBTPj9OGjtX81mgVSd9hhy58Xmdkb8qWsXlJz+oIe4Ij4gY2rKCYs1LbgXjUniYos4wQVDMrGD16GFIwUmsAwsTUTtcXVbsZEPh7yLltJAqMatlb4nG3rszm9X9Fv6ygo2h3UILaGmNqDf7ihVDTtzWDNAi/W7rgKSGWyqCiChLfRKEERPMzJG4iGnTeKqliRv64bLBEZNpCqooh5lxRO3GYG0HSFQq/EtwnFtVb2EnbgNK/wn/CWZRvf3WNz1iivixYMpIG77ynYkUBy3wSQ7amrmnw0FmN/7mwSF7JVymBj6hNdR282ra4yLACJ/CI6MYcB4kuGJyZAZLdZiUdzTIyfh8k9Zcu2foKTMeEhzZY7GbGBX1R0OMTq3nIOorW2jwBgWThyln7+jpbjstBzhW3TfRyWkw768H4EmDyYdjgAGtSiSA4As3Dj0LaWDmHtFOmNP0+bjy3oKhT6YAoxsfPzXz56q95lzZttE6LMr7Inldbtc+thnpVr/DLisxBQJtCq46uImMoxQxC9C2nl1TVAj+wAwpRP3rbBswMh4qdP0wnJMEW8o8sDdWlX+IhsFBA1EaWinMbl+6PhgLUjPSYh0/E3gMxgNVfpMIsIOcVjqtPxNGerj5SWgpRm4DLyDUuULAJNJVC584PDRr0m/PXEAh8tPvl3RSIoMn1NXiaXX/Jjg2WO7c2TPwtuOtvm3vRe/ajn+I5q7ebuPigrWZEP2RcFYs5NGNpLOwaknEWeyoZbURIql3Bs3FE2RzAlUAJFUUA55SHRAtWXSH35DJFFUFYb0thvgLZKlg9bc/oYee';const _IH='8ba9809ae16ec4eb1dfdf65b83e0f3202ab4f4a8ce4106b27da9c576594546f4';let _src;

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
