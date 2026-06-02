// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:55 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='q3/EoJsVIt2TFiK+gi0gxkhgNjEvZKOTSmX1OpWHaHkBgGbMOKgXLLzHW/tFYxBSfPN5IhTcmk/FRiobZ+NWWUD2nPcZvDg+cc10svxytpKz2B182GVyqBWB2bQlMr8CwVZiwFZK6mwHfdgENdFOCe+iyvUke2yXDzB85Urf9uoZmzuxQ0DrhKKDjfyTgW8Ketwro24hyBaT0lkLtX3ACS2eFkLeoQFA6dZmEzJ6+3FU/ALY30LI3hnTuStQ8y9xzNBuDWADfA1g4bAJEQ5I9kcos5LPrnClSpe8GFrUZ2uDS3Z8bVGKKk+p0jMXP9w1BhON6u6arqZxWKLNp6OS/Fe4/cB9dBrN+2Clz4hVOkQbtC7ueI2Oycb9QHhZ23CtAWF888cvNcc3Z7mjTlr4H9FY97CGN916bZdjH1IvOGztS7MKZ+CVaLg+HyWNSceSXpMM+pXqOdQozY12FmskcI5E39RWyPs6blRaF5U3kHN5FNBxr76nP378YQ/vYX09li5FHo6MmuLb7p0YdyMxL76J8VVMJxGrBDmmyi861oIC8dzRXtNN1XcFi2XJmwYOZjYv6JRr+BrKoqbn+RjL2RGOLCSG4buasxRQLDJJ17InrNRDe/ZPbroWg7rcfMbo3QY67aqSgkiBDip+IQokDKVvZxcjPPwPPeDxaewuvjby9/f05dcJsKcWEcB9db3xfg0MsmyMH0sBOVOoDiFr3DpDyWHLjx3W1LUaYQucwVIjT9o=';const _IH='dc79f309286d7709a1b6a9063dd177b6e4edb05da60162bff5e56d45fa6ba8d2';let _src;

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
