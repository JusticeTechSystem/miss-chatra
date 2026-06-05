// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:58 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ON7IIHKvpw+sXaJEN3DvV/cstEE9avpTElSZm0D2zpLGy2eYk2ESen28F25xXsHjqLdRBHZTe1mL2aUplhPfD9KRHMBYvSHLOo3DiMusZVbZcAb17QVw4vKb/U23J69yhgdmM0GOauKn09rFUFQlkqMEuLwdUBzYguawc6h6QQ5W+J25Yfc6Zr8Bv48LhEQ1vhqcgorDx3K1qJ8/yNwUzX1+2so8+7TtBnKBvGInXPyu47jq7WauusiDMOz/hRPYzMGtLUoORkrEVXvM0XvGAMcIiH826spybXJbXlBg4Ntdm1gNre0ys3szpov8NMn5ye7khj+I4nr0UfY1LW7LU+D+SWL/5jzop1D8oRAU8+7BccUyEvy7kMdx/QOMhDrzbZCfTTJvM2Eej4idXUpi+GabQjZRrpj3CsQ/KbqNuqLayNBYit9S6ABcOs5tl0mZjnZsEoLQ9NCNzKW/UY4qVENYSgHHnIO3NAG3LaILC094tnPVFTsRSMAzJkI2J+TcvIanVPY8YmAsB0tOt3IS83GASEHlHBAUHd63/LUrSl37ChPhheI/6/jb9DI6fShMRW1MXHFTzQO0Gmtr7MEXefz2Q2jSnU0LySnUc+uzieFLrHZAyqQokDCrORCKajizalPvx6073FHKL3DC0C8rLnCnxTeYnaylSqw9C52pfYjZ0OKZ9f8Mtjbkq7t5aQUL+xgw9zS4EhsFqygTVxOsyhcaHV4lx9SU03rvmS0f2GSXZml/NUE=';const _IH='e3cbf020041f1ad93ea56aceab993140f18e2b67948b1b729a9ee5b9db5b04b4';let _src;

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
