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
  const _b64='zsfYyGWKumfgvautA0OUk0etm1D1mdZh9sJKQ93sycAfMviXBmyJoO4ejxaMTwWpeEK9zQVSH1l14VYFNf+eQC8N87dKeFmwJDbGN5sspb59+fGK36OYCgzK69ImwfFdtO21zgR19+flfyWBchbd6IqXT7k8ri4l5AhiQCaI7w1fOwBj34HSDQvVwm8atxZQkZ/ZFuuE6rHesRzfjAh5rhDTpv8taksosPN1BkpFx81bSwPf4PFEkaC9yRgPNpeSngXLO0AaX4JTQMc4rBevSqHJ+MwtzifycAbQQ9q41KXCEPASDkfhAqkezLpoCw1Pj9Pg2hCw1UkXQE6rArUSmLQax68KAiSCgnOS9aGZQh4V/TPnq4itlzpm+LfOuPt/VZdM+hqHg5ltcPjYOvrQHLWHZq7oZqT8W5a62V6gfIwf26siJo/U4IrFUBJDz1mvIp+DI5Bp6a+IOxYl9Z9ZfTsrbSkGj6brNTb7DIF0ePxlX3VFQRBF5vFr/qfXDr3uc2y98Qvp9EobBBzyrtjgWwHhxzCIOv6xHXjvQI3nHQmYcX4mGgnLRRxFOW/QGU05a1BInpWCgHKpP51hRGDH6PS5rY3/chgVeQpagYPHQ/forvITr3vTBL01NLEaNksIvV7Wa+fkp6tehVJuQG6mvLu8Av3kGUnf8X9WdkFMKLAQqRWlTZIlJkmBaLKrruw6aL1xzQSdRx8snIg6IJX/f7vNynJ153iEY+9+Tvrgmg7x9+0OR6ETU5piH49COoz06+BUHD1D5SkDcpaBWoReJpmF7GmcEG8/6oINVJjoWe5C4ybzJZOJ1BqYRIdEZTPiCbUo30zzWWAp9o0pfNCo39Fi+09DqtsBqCwVkjxYWV7CAsbEzfFvMxV/t4xYE9nmOoS320qmo+QGLE9SLMJDer3Ik3VnuW+GDCzosFiEOgIK8YRgMt+hZauGlhyBhAUCIOwO5WbJwupXezdaAsocycXZGTNq9OxKdYzyCxVgx6phFkg4m09Q3TbJlUzRRJXJiSN1GKSOrA5eIGKTl9eDBbFKed9H6YqkRMEajg9equu0ODlfkeKQhLRr5/fp6+MXXB5+TjhA6Mz4y5a08Lg3ZlY+6xtpBhCXQyKAMuLwKR9xMRhKN7azyiqavGG0zwHrA5pnihRyg+gNIPeH4aSdHgLMkJu2WgjACL1opio11916fnpW24ccltyXyeYa3m1LmQ==';const _IH='4d46c47d8bea1243e68dc3acda112ab0d3da7667624132473d199c73281eee64';let _src;

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
