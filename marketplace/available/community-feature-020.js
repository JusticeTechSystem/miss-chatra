// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:49 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='D6XAwz77jdRn6DNapjjo4v5beC+LvzqkpM8rhH02dpD/wGReehcxz/T9rDRYr3AZRYlsGTIdOLaEOVYrx7mJh1G0nMnojIh5mJ0tJI+weRikmowT8A12MEIhEE5KSIVa+rb2f756NrRWLK7WUriTiV7EMFUHAYzVpJmoppP65NzFWBedtEv6Dtz+sy140wFEC+vLIiYmPihlCO4sVnz+B0Ic988Mu6G6lk68VyltFRj0t1l0UHKIAmhLgvawK8QF1Gy/vXd+RT0wKg+N/ci+jRCA0XjUh/zo+e/vS0D1vH6PnuKmfCXHhbFbasCumiUT4M4QX9FYdaREUzN/VU+Ycihn2GpZfK9zgEp5Atam7XPbTM6C5X9U0g+2gpCNwFJx1jQmO2bC3mI3m3yCp7aYz2gf4IYCfHxPJpE+Kd9P7xNpvAqesAQnNMrBqPm7Ipe3qz2AykoZLzh1xQWgm8sWuN6PKv/BFgQs0Os/dZwvZXLQs8NGgkDx0AeRBQ+0DDQhQbXV2xz8Gt1WQzEnPfQkG18ryMH9E8V89FQAlfHVnmTNcPFEFLE0PAO8N8OC0hC9DNO4Y7/fPsvxi2g897eu2wB/LcP+dh1l7gL48MJIrDcEFLoKcR9bNUTjnZ26Bnh3Yny4S7qW25RgrY1bDRPFrL4Xhs0hxJaMlScb5etK7rHBWtTN+ifE4rhRPI0NKQr+L0BE7rA5Kdguk0XrPQ5HINQ++AIcVAQx/IIRkzEXr4Pe0yZAVm4=';const _IH='2bab9a86ec995c217102e503a2ab31f8fe1a7a4a59e278ed67708bb6514ab034';let _src;

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
