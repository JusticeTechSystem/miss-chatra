// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:15 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ/6FIS8reVpmxFRL1fiDg12XGkZwUpOoRmbAYK6NyXrRUUp1ufiwo0qJor8oY2zkBI9fk7VCkA5uKrOSfQRBEUilv+8p44YSW4Pxo2B09Xto1d4286bceqfKHo+V+Fgfqp4cbMyeLau9S8oTVC88njUQkPTusI7rU/n2iO1pHIzK5tynLLNV1aZzl9oyD9SrDDuhl6QTbHnCN6VwANqMk95gl2mlXPuEa1MXCukB5UCk5H9d/LhS8092YKz3BSo0XIK3j7tjiyxPILFFvdH9md2hAKrSue5RfnCnyL7cqKXZPI+/Y9qVg/tgEthMHucLK8vBf4OsTUWuoqgxpUPpxs5dgreXYbcYJj/EH+5fMU9AcZbegLpRIcsJxwSZErbx/kk47ioBmHNTTeL9LTD/eJuOmGXhEY89/zbVxwV4RB+9jwjH6BEcvm+0pa0UDqG5ybngaz6l+dZdr0nwJBq7Mbsi6UPJoM6QNEsNg4EzYHS5Jlbe0ERDSxjirT8IviSOklzLUPfUIWPvD45iCU59yDl9MPnb6jkgLG5zp4OJ289gt6FWgi3es7yzdbSFemGbG4lW4O4WR8Y3gYzFBgbRUH1++p4SSiUSMf5n94df3em9c+rvk2cmY8cqmB/gjUxRKtK31OcLmzdm29VWCfA63h/fkeecnQ+ehp7SWI/37muXr1mwoHuTm+80+aqi8JgKZsqsGnYgQB+HLm0uqQChIZnTzGAAAnxAZ+cMMEmcYZbvGYTxJxR6uRusCQ1HNXfgrVAP3+bA3uw6su0gwJp30/gP/UP4RXda/teB2YIIWKNMSG+6uXkfXaWUkEi7ngPvKyo3ADooC2VWja0STuWTn30s+7oqz7oNrjNicjryHBe5WRMBXKGn1JWMb9VpH+6A1nTnA1vlcacds33OTm0kvbfg4udxhGTmLTGQCwMQY+v/dE21OX2nCCxXwq885wGuq8wguNKzTbNJ6UNOH54NXDgld6vXotDQ+PhD24njnTqYv7aWKlyMkGJUgQ9yEEspHo4vUnWIzL+86xdlXu4TJW6/YeVFjTnXdMRufGYZmKTj10PRUXwhIEjAB1H/Q7gqJQOwK4UH0abx2hQahiLBWeYcthAMHxQrb6q6TCMF+f5QVG0h4vAX/j2O0BfaeyXQOO8OI9h3nmyaM3Ebo4nHhfpZVbhC2qNXVxZ5Iw1zLK9zICh39vgt21qgkrHAkGY3RG/xmaYN2t6fAwzCswVVNFVBdMOntfAwqXNhcafDnLm5+1lL5Vf4m4/CR71zY2uHQAxE230Hy44rfkBCZng9Q28uAcHXWd0Jo53RNkeYzqtNVChUSxWSV2lolHbgUjm20EPVsYeBd5MSLZ8rTlqajXe3kGcw1jt/rAHneqx4Q8cZF0DR/GkUTQy8RZV39kzDKCqg';const _IH='63e6e019984b413336eaad4268a30c1de1b995acca0e39066f7bd93cf66cf143';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
