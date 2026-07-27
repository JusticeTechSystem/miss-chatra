// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:41 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTxyyFIR4UOG3QGfYU34vX6/lp85EuR3pMwuijVMkEFzBycwHTmOxTu6rxzne7bFzPVqUsBjq8Engp++kaMny2OaAV7/S4dgNBUBO2IrjnGUVk6hoqGhYC7To15C5P7OX0I8jYSe5XHXeLjA5Z6RhoO6Ko9ng2Zng+/05S0sHodT03BsidAZ/DZBHqzDdQmufJXMrLN51OrjyTU9exajXk4myTwHTuu9kuTcNEGiCIc+8OghVE51do8z+DzKJGP/IDNQmC35xLLm+KKXhdDx9/GEhzCH7wYlrcE8ubRZU3YfHRzDyGAdjxvsi2KJpheu/jAu+cpFyXd5XJBoSpyS2dqdUUgKV3AVRqC9nr5jOT0Yn2I5uOHl6WuiDvGwFqQkevkZ8dDqWshE/lKReEI8ZGNo8eaY/zDDxyIzjzRCVh0nkmo+7OlbjBp7zuvq+o/xisfQbaXRa13gya4NYmuLwvDdgfvBQ5YX4KVC6i8Se76Vzfjfq5Y5VTIJeiaYO5KSxuNVbLYcD4aX1CAY4855b41bXJebRvVR4Lgr3YLIZ307Vm1OJ2stZJoNYC9gBEg71hI77Z1KqwGZ/VSEWJXAhhi0fw7DoO4asN14AC/35zEiIzfFYoa4XF1jb5Vzn3/GAwvQWqcAXGf9OCPeuT1MpcA61noGhhqv5MrYuyBOCrpHjlJUG45f3p6JR/lkSNKBFY/Elvc9nNvBWmGPbgmfSvDdwiINpQPKLFQXcSbhHPsAnVZDS5wLrjRtb8ZyyJz1eu8uHjO+zYoz3FrGB4xSwQJHElxv44yTyZvwLDyH83G6WQ+R5D2PcA633uV+ZWsHhRisdG5DAfHdd2WIJJ/dJJ3+n31FvU5DWw3V3uUMQsRgpxJ5fyEaOA7+czkEroqiinRrXNBHUPx2DZmqjns4YD/FC8rExXtANHg23EycQluQ2w2M6Jvtw28f4m29KdCTzCxKC4Af3WPn7lpanFlwW34sR5zMt9NsNiy1D8lYBTOl74++WHmPalyJS3wNrTCg+ox';const _IH='b7dcd69503a5669e5745248ae3f68e6f81232c0d90e519bfeacdd7ff733694f9';let _src;

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
