// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:48 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='W0oyt8GAs3TdfQRjnro+AMb9v9j2haPvkg2corb3v+U38xFRPBxricNHc/8M96rWmjyAmOMI+wPJ4u7YDInMSOzwY2IGR3yO0v4kHClh9Ln5GWsDRogqo840XiFmf1OHywWLBLlXRoNJdi6M4qPVHdDdw1HkiY0n1QLQUQXyyVPm8OHvBZnL5DC09RBxvAQz+sflxq1h+rQC6GpfYVUoEzc6eMkIMlKzcXwWq3GQev/lI1lXnH2Iy9wLvActw+QRmH+kyfU8X4UzzC2yOc6wABjd9f86drY+X4uBT1PIIcO0V6/22dfYV+iiWvwAG7Q9Bpg7TugSiuvcbmCiWOAM4WSZmCGUzGri4L4aZa0mB0jwm/wTF768ebJnHfFAOz5kbzHEAvebLotHklAPyfXFFKkJQfgWInKu+wJ0ynaW2nW+ztlcXFCuNHuwX8SNnHTyynrnrdGK24eMtDmX2RPwwcZ0G4RWLnyll4MwXWNgUVIrAksoebgVVxwXbCGmuL9IbjOo6LBICdTRC8/MKB9QNvqASDTIWRg5nOSU0uYOvGFBMBW4/C6A9bQvHhN5UVfOxff27gBbqFsOrAs1kQS2gEPlFAPe2meOC8NS1h7wK0OBWt1igACxOYGVrs+yvuPpNzzkftV4Jf/H31Dsatf67uxsjm35Q3GIyzG10RMZQZVH1LxjFiQ1istFaXOE3wn+19Gi6ZSvBRtCRJu4uTy9gAnzuyMLv7NOctE9yaE9y/yakFZL/K4/T9VdI+hVoPR1uLwd8Fw5gW5WNYBsJLJeERbpahd4gPJAUMDkNgL6YsUYWqPb6CY85d6/MGLeLkzoC3N2u7Ev2x+p2E9/4y9V5Wa7kfr0qHMMqRejaBA5esWNgnxXtJOWuPuNPV36TfJD38YeeK1gjuG3JEh4z1ymXHtf95XuFxnt74vRfr4O/EAiJEa5bE1B61mOP5wE9ctmJVpyJI7+2qWc04gUwI4rwrIFyoQ9A7/KT3QN2D5+T+SjaQ2+oPJ2ke5h//xV498pNDiVU7HgFjM=';const _IH='c4274a1389418fb9f02116c695354e128b34911b720119aa60434a12b5e65456';let _src;

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
