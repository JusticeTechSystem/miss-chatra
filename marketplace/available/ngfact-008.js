// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:44 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='IGTjG8TVy3bcN6FvJesiwcPyz0Xj7MUM0Sxph97QTtJR5cJp+CTZFbOTbKzDgOxvto7x/mStXkZYN3BwAAUF0+ILGcKbeVYGfTwuaMmIVYjBpDdamuf5uoNKBgioRpT3nCH3EQEm/Hixj0ZcJjwwPqePgfJmZt7mmMceSp4Z5TjOpU460VbSZGBLT9LgXa6KwwOFphyPGVO2Amc5/1Fz72nAxGaVs70QH4mWEinQ/j7UWFtUl7hp6dSNkI899o/zYfz/iOGqOqI12IFiy2++McxNl1EOPXBNfruXLQi1t9WuIUp8Xv37T2K44G0x/A51fEU+aE5yxbFmeYrC+LWtJuBuJGDzkKIVzhNrLDr7jtf/os3rh2TDWmZmsMggcKkUZZoQ1lYWcdYY8NjqF6iINqQiEF8l63GrOT2+ngzrbT8RjeQbSAcAwKzFekF76wuhreyV5jrzzMjos1PLCi1cF5zdCEiQfomewBNKLhR8MgbtBrliqGsNoU2hcNtENfubaQs9suwFyyguY+qLWSxcEtdCDVN4R1qeZDl30v2F0EMh6h9wmSLgS2T6p+kkGGx0XNBWxAu2swZXEKXX4jpCK64l/p7uXE4GZFqi4ZSOT2hm5hwJPsOVWSpF5Op4wUjR2D2Y4HfUVsGtPalxDaXu2IyuOzvwR1NbQDCIc1N+MoG4HAk+AeAs8knjBWxsw8d0EAl3AzfBPIHRrZ4=';const _IH='4a850b1984637de5d55a4ff5e4fe3770f26b7dd86f73faf527b9ff5ec1fca12e';let _src;

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
