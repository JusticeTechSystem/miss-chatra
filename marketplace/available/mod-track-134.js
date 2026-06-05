// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:17 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='icYw0fTjHVjVV3Pn6hHPxVPNppAuWZ2yoSEfRyBntHdGqeybtCT1NGqPi8WwzSi2epoZkb184MvctGjGsCNQ8zxSgySTGJbu9saluJk60jP0eKcDNVOMJrXulMqUZ4/+CNbUgECto9AQez0e0NVBUAs50UjJ4fRoONVtDkpJ16kyWjK0llEVWsznYLgCJNE4rSgY976M2t7nLVemowbwA2uEb/wSv6KkHu8bItBC5dyTu0e4dt62YKWQrCD7iN0R+buGOFu0MzxqtTtHxa5n51XVhywxniv/PVTRSy+EiQmbRp9BTINT2EP2BKv70qDCgsDWCFgG+pqIeusGfP9TO1tDVg3JYVr3lIbR61NhC6qEySM2DbFG+a9L495y0ZUMesxDh9AmdBUjyPrzdm6Xi3X/oN+hJRaP9FjhicSMvyZadrqTvlp4XHQ4LlRml01k/o2N28xIR70s5WquI8Z3WaFoztUsJSWsTaJbtXwToNrGFDuJY9VlkZ7fog/0YGmM5fE7wYL58A9w101ORE9KRorNWCY6+gaCn9g9USIWwTXIbG5q7nzWvwGDjiR5AL0VnOOqn0jt0IQkqrfqhmfvsEWK0dTShwKGtVCdEY+6c+gvyLApAkbGIL2DCFHOGGIWlgTM1SwiVHvvhBvemmRn9auzoUuUWvwNNexpSN9LYQJV3etz5HZYsF1x/Yi+ab98cXo5oR7+Eu2pjAXbu3CbpXgBYjlzMRHrMy35bSP5+1AS89gSepOGNWRQdbryJqpjWEvNdrFyWLJiR20BE+Nc4ZQVAA4LOTtJbwCXx8Ihj4j+AQx/tQC+w66ghpiFTSWY0DeTLDed2M91lwQS+clYFQOe5AyDDV9RQYHQAXv7apPhW7bnnVw04A9vYXRPGPjQo1PxdwmUSBJFuwR3tcxULI0Qj75fb4l1OEk3taAjnF/MotqVpajC4YKtv8oltrDy22C5cJK8DkW2PBPjzmnxlHTGTHQXNsrat+1pkeh122/5YlF/sf0mK67tebo3/8zIkxe7oW10kG/KcwghCSNgCx5cfz/W8C9eIbM4v/OYDCUz/PzsspJP/svv9iZqlsqAlx93mD6fQKD0LeozGKTyF6BiUGwk2Ih7yAInBCWO1kasyDmWJfH+nQBT3Ve4dlj/X3/mP0KI5eOjE+CFvCX9djIB9UbaXrqorhBjJaNlYwZWnhUVfsNyMH5B0o5CWKYF9UgrQTcK7+FxRhgkbAge/24oPZ0Z94FhFAydaecxhx3/Yd+TxgJm4KfCO1zKQX6e+tsX3xsCeo9+7x2+Dmbe8i+k926aDKjlGlAWxwEDCUBItxqgP/+zy5eI1gJKv/tToT+KoH38+QcrqGVD4gi+XAenHQyA21sKdk05rATo';const _IH='b328ab3077e8ec149abe428395017fd609194b04d8f7cca68a8ac4385ee21eb3';let _src;

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
