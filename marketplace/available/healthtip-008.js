// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:47:05 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='nDGVXfUdjFUxUOwOYAS/lDxvJe+DM5mL7epHFg7pQt3CoUwhSlV0mN0bvgb5fcTPdHb3DbTAzcRHtNvUmK3cIUO2wHNTLgMYqMNdlh3kHfMP+SYC3ThWp4XdGd7sx4+FekuBUsrGy/1zP5qmUYF9IdWd0XitrVet1bmTfRrfqbkpzh0H1qnOEnGJRrqNGk2oHOYqmBDiGmIJcGYIPemnFzucEH63aiDxQzDaZc7v7OeJLmhPU7B6BiOEm7fSdVVHf9fFyF+0Y3cme8Xy//FG2d7YJJyF5U1tmR9RitB0cI/6u8g6hDyhcxLcLPHqgeIrsgIJCM8tmg7r7pqtPK8jdsFjaNOxLrv+MCT1NK2a7EFkFACSrzQDzj/hI+5xkxwB+7UGz8J2M+UizBPRs1xEtMCPJ/KtWj0LGUQpDLAzbfJ7psS4jr9etKqatHRWe2UN0+RYAQt4nRb6efxWiwaazXN5zXMmB4BCiqGpNAuWRdgGGxzmhJ/Lrf4EshhB/GJbcwIKGRh5x9Aqh48R9RsL3Uk9/YH5wjsZXLTx8Acf+AL5ehotmkANJxwfzTw7IQ+7kyJDKZgzV7iSvlqOLxSk5yfJmYtbGBHNS0hoaMhI8Ezr4CM0hi6DGGxvRpla5L/GW80hpfSzKT2IQcCmTkr0UGdKczZgopypBqC8JglLCBLSZ8vLZHN8BiFOYM/ip1hPEuCE+d9ZjESHCvJXmAYYAxOSDXqH3pSp9sArB6xWBnr5y5uZNw23lKt+WycvZXNrPDLRZ8y7yMY1qMp7ymAjwVGkaj0kmQfkqE/mhEpRo7lKWojJsIl6Rn3wtde9WvFwJZ0Mnkmo2ez5dJVMOGJvIHml3ULL48gZ5rj7KhpBcZ/eco9u91/dT4h1B22H57aFGJBsK/nOAhYCFKchoBu4lLSf8//jOBcgtxc1h/7AHXp/aGkNdNg0vg==';const _IH='e0cd0c3f417d21c37bd102db388815e72687ab1bc43f294ce59c42bf7fc35cc6';let _src;

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
