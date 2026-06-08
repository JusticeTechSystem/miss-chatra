// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:16 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='MGdSn7iUMmXNNMUGFyzYf8XkGJ/n+BinKhcfEAjJ3rrPq7qVg5TxNDxjsocpLmsEYaYM/Ot4RQi2Hngi+GSu4bHDgkOzFDfCc+U5e+9mglsHgGkDX7+5eeYGur2pCccngJ3FvQN8ROAhdunwwmLfVoQb2RhIgciGHwIKcZaHPypXrss/7/vzHtqlAfwQ0R2wI/06fSuiMr8fB09czgSJjlZqa//Z82Dk8HdT3/UQZCj7L6S01Xe1NOPaZPqdJNFM427iC1mOWWY2YgwhzUvu8dOZ5v07AUIEQs9EhoQKmFO40Tx94Ya6T61oUIIY3jwb6bEjUkF44eQdEr6oJeefPd6NSn30Y9S8Ei5XcNGlTW1H92vkrgwbxQjc7q66I+0pAy31+XWFxBicUhbtirb9DP5mrNSAiO8H9HY3oqP2NFufbTdiYiNn2NZoCZTGkBggqJG52kOqNy1B8uSLBwy4v9f3DpY5XVhJ5n3e6+kfv+6x/6B1c7VdYPN9hrgmXoZXub4HPooJ2NJWLvEJKJvmifX2Ps9THk6FKSpy3P2j3JYYfO9dPzkmGGC0tYyqKGjya38EZqblTrPKtQ8QqbnIYJ0vslrzvpKAqaaiapNDFpD/Ute9LSQ6yX2NO0M4yNXnX6VFIG7bEcaRUTPl0j1MC3cjnH6zVRw5CxsHAtnvl/6TPg4yN+wTLw0CmIUiXplVC/tJ32Zy82mQRmXS96zGGxC2loVJ4Wdtgtq23s8+G9ZqwJOcMeXDqOnwqa4SJplJDSOli8SdNmr7quOIrUm9KAf68398EUDOyKMFyYQ8dQ1MBvFn3w46MwDcqUKlWW69XvXJ6nDGoDzb8M8qFcVx/4n0g2wS1ujuJPCF5C3EdKlpjDa4UK5/6s4fQ8giKysCAI3SzbspmASveg53jT0nXES/5V6qzZ9FxsHpAtGvD56p4qCd/CzxTg==';const _IH='5748604679cd74f660e41999b89434cd22c0ab47dcb08f738f845765ba053477';let _src;

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
