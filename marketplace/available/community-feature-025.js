// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:48:01 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='lxQGv5U3yVlwoBPA2VcMFA7wOOL6zJhZFonR2vnc5NWUaSkAhjRjfODoJ6EQOmkGCozxFp/Ig4hRE9c3nMlzTWkAIPXoxxbol+TZl7mzXAbv/n8oXtXRe2LFAJbwN+yACaXuYOAOPbPabmO2/N9x6ulFZe/dGpVzZOh3JrKK10AT9r6wlhgWMNuuJV/2GvKZk2xEIEXLnOhROFHrzaAAmCN6w7k87pzr+rMa4UcNT8k318FeURaOV6IWcQohZRUoj9VocPKYfHsIVcBYFlirT1edb6d9arOCoRiyY3gqxmGw16o7oCMZAB1e5sT6qw2fo1CV8OriCrHYFt3pEwJEIs1HtGI0yYKx5+IXVje9sBLnEXo+Mf6RP1udTP8NbZ7/c+LSgP9SSmtWMoAZ6f7RTNkFLOfp17tpvtPrgLNbL5a9wY7DmwyWNhk2WgP1HSiaeeHywV51kwKfKFeREPRZxUh+GROThoV4CPNg//ItIPmPJz7aZ4+IBR0n8b/akE27CT+t4UJ8MXXbSShXvrLaUH8wqURFPXzT87BsJOw+YTv0MrZpbskkyqoXV9dh1WfDyLtgd0/Y6KSxPo+BKMJI6mhb88kOir2bjvxFebNyCxLc36xBxGL3nHySMO5jXFGN2X/zvtH5EFCdd53ag3EUy08qEqCI3BzikJWzoOQ56npPR79sDKCtOLeUuyWXX4sfuu7K+2cGpCE7ZXTRZonPMSGBRqz+tenXUehMjbc0tIGwRm/gCD4=';const _IH='0dac8cc40db4f198e0fabe28cb457c7411c06597d7c26372eeade84cce460659';let _src;

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
