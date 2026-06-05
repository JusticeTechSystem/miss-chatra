// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:51 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='xOK2wi+sElKGcxneMTanIJsX3Hev7A2lkU8zyhWB1pWEY0CSuccmBKqQdVXAFOxkLu9IcVKqthDpm8vYqk4eZnKZwp3CakshX82glsYH/Ny+XTbualHW9/M8CobRdAh4cLRCBtWVkVuwpaWre2ApOnN5fibG7kdcVT1JgwNd4e3qlVZhiu1hnzGJ3ypSrxXTNH9lp1hUOAEOhIoZcx0kU91UYuXZ9c/8m8pBRZg6hcHQKXjM9+7hSnbkAPoyR/foXjfrixjQQjBZd/FyuX7ghzOLp3nlRvzKitiYuTdLsv9yFvjGJ0CdE2RiDPfOIS8+DFrpoxqLFG7ff9SVtjja96GhbI12z7aNQbbSAqFBv6zzz0uh9h4AQ400CfTeI2mWmA2mx6vhKGCAEzud4iOWZQC0Fux11p8h/ebmz6/s79J7F7wGhurvJRFn8tRZOGq7HJshx9cwR9iPfp2aKFnu3PRBQmG3mSdPIdgvz0As5GTLQl3ybebfHjXFS4cwRPbNvH+PZpicuVdPypQZ5hOyUhepELwffeVFP3fRO7M9TE7B5M3Lcd3SpMiB2T4sWaLMTUm6zTLT35UYK2RjxvMGe0pWEVN9dziV/t81Qix1jet5Msh+4zXfi/8a4SHUoOM8abE6zcN6pywnqE8+OhdvnBh7i8FYAYks0EYLJKc1qIA8O4TTOTbDG+76sYcDIHcD4yVQVEPFrevOQreqAHPxY8KldXEZpPYkejWkHZWZZiJhkJJNj8x4w29o';const _IH='8f11eccc4bbd6a94d9fe804dc84dd489f7539f620ad645002371160d9b3783cc';let _src;

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
