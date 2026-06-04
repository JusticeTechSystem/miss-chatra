// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:49:23 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='+xjPjMpHkEMJy2HplmBpC8LzPU1AHhjeNPMjl/Ij1HKpHItHlAb1FPRWqQz0/YbedoGf012sqn3I8YW7RGKlkgiEsY7vcFto21GvvW1kf7PncF+Cj+k1RvvlhnLWwv955UfaSWEwitJzG6aJQdn39JrJRssLMtR5tFihbk1r9RbhuDUTJXRdn+V6HqDDghfZDgo9JBXk6o+VbeB7xZNu/5aZTLtpbnic46Qe4DaVcDiJ0bFjrcPizOeMWIC1IlxWPEiLPVNxmKiiEOUT87VqEFdno1mZ8QiGQZA5VmREHYMEDULhiJoZmcJgVeJE6DegjYQypdMcYwFHoMmmz10kS9lW3EO9UPd8eRU799WTyTqQfEZoStEAPYIEVl2tsLu6du3UkP6u8AZ21kDrb5Gg6THCPZCBwS0+E/1owBwjlfpku+qtCyHFpwacvZI25eNP+WHqDqxFX6NxDTQj2lwzuCGj9ntDdWWt3/myXWOUu9bS+CgZWQTvo3l74E8WQ74aYYLTtZ2mCYon592RfenaE12TlFEb9Lr/eNgOhkxeEVJyU47Ve5axaRf5FdsTnIbX8lp/EmUKlzmn0LVv5FrX1paCRQ9Oki+UVM7CH7lVgNM3DH2pd5wgcS8NCeli/Bw0flOz7I/txsWwiCUVi21EiMc5eidhVE6j0ZQaxuhWDcu8oN9ZBz+jhqRjsw/ksAoOl7JeXCtDiLq0fWe8/q7OFt1dKOnGm9b6+ICqVduYWEUcwHUvP0RUpdv77XCm1XbOR0aWbViUNh1rrZ4c+U9+YveT169+A9Qk54RptmuOajDGH8tZVEYPQXIbY3R9qL44AmzZy+qMdDW3ulaS2QfUbyBbUU9xkswfmauCDh1Azuc0D4NSg0xdPnZDtKUQ68kjo0kQS4PWgFo+jPARhJZzKVfTM3MDTTlJolNZ0x0+ZcI+bRo1wC6o/XrGy3d1xI/q0rWleHC9Xipn3lP7ta/6RSD1XQh/qQM4Umde87wgj4wE0iMV+dzupB56lbooAjR5njMZlnQXkWXlP2zCN2HZTHAxL0Clm7CCn3RolPBvJ6GRxG1ut1eHYaC4TAKT3ddBPWeqVSFMRhTb4Y97KN/EQXeowLReelyfTLKwXHO2T9i18d0KWKvqKJZRZ7OdrxMYQ/7jhJs63bEVQQkDW1IMwajBgof7Y0N0OamwBWKAYOYixkIvpOZXRRou3CjGamFm5WFsKjKxXfbrCVmMw7AAgEflwQaEA5/zLC/a4EIrCusmpfJ9eHSRl65fqv/MQRT19o8o5UEz6EOfThwOUDjWVLvuDOv/NEbfhQfTuxw2OMa5QcuUS8/+feBsds3yVWzkDdI9yXOdrvZP5Y4vzswPkJqsesEB9BoE+vKwhSDsi7N0fdasBxfpmqMABHvAGc5a/Mabs2p6UZhiVl4OmRgIVF1ZL4GMRlZM7O+fTbNa0FSZB4fZ7GdbmComCTvWgSNfinYMIptFp1wQXVNpief/g7sncCshUfEyCLS1peA5svlollXTGvdGULaEf9oZtoOiT1Du/Pfqm3sA1dQ3J6qZYL9wO2W8FrA7lasOccDWXe+qUONntEXn6/pTsG4CxPxN1kG4+1sM6DE6NwJZTLvL3/nVhBIptTs+ewRyHRHOKedvdY7V58qoBy3nerWoWrQdTPZw661d9v/kSp8gkz9Ifg9xIvYShi+h19U/TEvir519FQ==';const _IH='da5097100ee4231cc365000dbb5b16caf0bf06bcc94cf821a47e37371b5f9dc1';let _src;

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
