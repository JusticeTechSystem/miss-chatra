// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 08:59:35 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='PegHK5uNqQAhDry7mtCSvEWSqY/BzC717iW0BXmzUNMFT00601c6cvy64t1D5LwnDi1KiEeUmuFTQOo7MLLixBysifCjg1WBj23oCFgu7TpQLeHFDi1x5/FCk+56SgD5a0soFKKo3rXo2eNu8Bc3+MqSl08ENbNLZbv46+BSr02rKbEedZy0uIN2UNIkOGYU9sYV5tGL/mpDgbgHp+Dpp8ZZ7R+9er+xjFLU9ERm4UQgNsQFBqIEFcJsSYRfhY/QO1C/Zs1ifHYPM/Hc6RkFwhExb0rWQoUq3Hf0hH1VJj0v9fusGLPV9Ds8ONCeNOozlY/iz3PMohmmf9MxoSGqHgtObovvpLT1NL8Wx23ArtdoABxQI3p53xwH0AEt4G3vJY8YsLSeJIImG6Tio548rfI1klAijrIgX12dZUsMe97QfrHw2xTLnGXG6SuvMkhUCQcHrWotvgyLRf1D2+C9o6DSJ9u9apllYuFEDoOpQyco7L0h7AKdgPVp2O9ewh0AyRKat1j/ndDM/bnZhkOGKrwagO48DbbZsRX9SJunnpFiFRlhd6eb+mReQhMP4sy1e+ezd3b19EDyj4Pc36uM7WLxHdlaQD7rbgjWIP+fqoC3HU/rKyFPgHsThF/cjLRXxNmCKzphWBGEPGZTJAEHN704jaIlKyt6GpSQvohKIj3a1npovMhuRuy0jCAUQy+MrdsRXrr4jqsAEn8BbDhybxKM227+WuzhmI0v6BnRdwdvOcT7h3Z6VICmwY+1aouRkBQZfUwK4ScG+xyswqQDyVJVqMv3MssNpUjFASSePJIb7IesFSdXXYrNvka29+epc8bTkG//SbZZR5wZ+xERVrW8KCy5V6+cIjrDarfU5t9BawjR3b9JPrJxYmcOfn7Os2wUdfarsngp0hDb1zcW3nCPHnzgW5r8povjkAiaCk2kXeNf5DTijbF1DjCEojjd3Or3AyMxpuliE2+bfiPiNdjUJVA6LUM0tRWVSOPEX/G4gXYJ06ezvP6s';const _IH='7d5e46fdf120ac83cefad544472699fc6f72da97c00a895409bfaea9067915a6';let _src;

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
