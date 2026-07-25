// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:21 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSIHTKwXpueqZ7KiTO92SOon+xH2OvX/5OPZ1SqwNAKKmzgot7rnPp1r42/RP47BjCHjnQ4/MpmSsctuP0ezRmD7gC5CaDfcgK6LkVBe+qsHVY1M+4Bk9PG4vwPGAjwfEreBb7CzfMoWvcbrTJ5UwXOOWkzBpYJnAvBn5gW+OqxIFmHhrcpgLI2HIPdhXW2avEqCvMFfkfsnfLfcK2Eu0+0MNLhyC1WvszabNYmILGfq4NexgSZeI9E21vtNjiZkxJ03TgfkT1Xrdd1dWr8eFv/ZbifxiYQ6F90PwOpakZeA6lMMjUVnk0NGddseGdcmkZoSMu1xpcXalXtqcmQNQtJa8aLS+NBbE0ErAsFYk3p2fXpUqWnlK3xYSmGuXVgbyjzjmZZsdJfkD3OgfbuQmx2FvUCYQgqB39MS2g8Rf7MfDSF3gsaDEs4rU+5HUn87Vv8XO8x4aK2GFDxlgCCo88uUq+HGs3of87D5qfmVwFWlC0CxPnxwxkjs9GrVsPKDAvS9nWUVIKuW0kImw88cV1Pli+6nzR03DXjitVMnvNELChsd4ojCPyWXgteW+NR/q0MGPI7SZXFHalMf2pUxG9fob5U9GoQ2Gv8CWwAUQ5EXnQqbxiVmMgjZEN+REAQQBZrckSDcUhNG1bQurGTKpkcQBDuZc9uxTXm07BuLRbd/bSJ2k05PNZXsiW2OUGyR3m1G58X4LmSYygcDyApLfNA7GqyABhVFU+I';const _IH='1d7d80f1d29d36f45e79ca800ce10d1493a04bdd21c624bf711949c2fec31aa9';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
