// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:01:05 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='HmnfHX14hLJYwakcsFCe1MwQS3jEx3wHibC63DwgF0NrgbmzJXdmwBZxc2JoaWfoJKW1XspXdJEF0Sr3xu+Fcyh8i5f88/qYG94of6KdIvy8yh1XVy52uyxQo96cf049qKVzot1faSrfJogSrOXN7KNjOXL51MIe3shG/LMbldz/73QkD6+2/FOpDYbRLtEtGncDdrqfVCHkLasp+0Dtow5n/gSWJE1+70uFlliqia17AoeVhRtJF/S4h4B39ROfrEzdsyera8nOsMd5JiuLc5GVIkVFCp6RN1VSlDNub6vs7W6fgYOwA+q3bc0J+BYnH4sE9wwFPwRfLya/Jt1OPmLiBZwzgQXtdkaIXD2XOtiM/Z0gUmX0Z3Cn/WqInQm43Dx5kpJC/xPtGGWQs8b0wGYVp8iCq3/iyVNFMEv1+SveYIbqKfkuHp9BzTRgQJUnju3OuT/ToauP3POAO3tktXyGEeb5ABZliP8zfb+SB//Dlu0TAls8saHsc175YJ39kyqaFfpBlNGqnp3fYbP26G6kqJRlEX9y2cK7DeNpUEPksyjtt2iKRlUow0SHci4Y5X0HfJkEBP2Bhz/ptOEOFKuTHMW0V2QqvxpyomGPfn0oFLcLPZvOJuJAeIyAKQ9+eoxqsBFDkHviEZmmXVhgHXPmltYGhGT/FDLEY2PjCrYVqS6xJlg0t/1752Z/y6yS4HuApyCeGruF4NBq6DjWzfvTrbLF3y5kbZ/0kFUNhCFkvg==';const _IH='5bfffdd2f76cd1d9feddbaefc6693d1b90b4ce00d1223d59540ec4b4b64d9085';let _src;

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
