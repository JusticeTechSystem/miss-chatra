// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:36:09 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='2yOC9/WsX0JvVjUUa68p6daW2uGZsbI2VGj9HuPmPhge4kO1r3ntDHq+Q5tLg6jp71YqDi0tlGZ8PUbI7TzeqbmMuVk+exBuQSPOZUW9BsW4IjZjErrsYLkQ7EnBA5Hi46FAs+0VPNWQke+3tFfBVTiGq2XFMe+zXkUZwOk/7hKwu16WSwWhV4MbqqbOkCTRHI4bHiO4n84IvMuq5R9cL3h2hRUXqz1EBUCpf0AusUudbiXjBcTfGE+6s/IleAc7jj2Ftr6C1TpYfVYfkLlV34x5uTWjzNZBGHZEneMJV0Yb7xD/h+Iyg8pZjc+9b2rFGGclFXBhOOmHnkEatop4yVWBHIeBvI41SRXPITx629VcBwCQ6xM3oEiQSVacQ5YJckFCPG3sG/IpEf6hyP0PJ5D0vTaK5xD8WUO+ngVeoyHe20hkyRZwC4SB8DThSn+o+VPoM50uYq9dpezkzk5NMKy2cc08d9QsSexsF9E315l3qO48yf3YctFMyFeavhAu51RgKK98phniSpPuFTaRx1zGaNNnJXHfwd9cTWxuc3r9EhqMiYzKPGRVFoHdTWwnFpiWSKRIbF7EuJ+fwEJJWArbqd4wILqMeaThe0h4hW7Kz/nUx9eOkyVN9xpyY3N2q7Qt58erjI0VlC0y+NqJptnjYyTKKQ2H/Vyc+KyPAqIIfFiVxNlJNuomdUc9rH+LSHx4NG5oXdy8XN0/J4SGDL7z0JErC9KtLg==';const _IH='266262ba62170947c8ef4e7444b90eb4a9ffb62c618f2a21afc4740211762cdf';let _src;

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
