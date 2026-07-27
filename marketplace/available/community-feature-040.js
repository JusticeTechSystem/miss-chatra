// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:46 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSFK0fMH/nsOs2UxCLqiq//SSRfGRBtR4Er1WnKrAkP3HyrMhDDzUuIp9NBUsc4ik91mqDKOYLx3AWaPpWwXISUlY9GHNvlMWq0R6aWf4nQlQTC7jykIsOvgCTKu4XQFl1Y4nWGeSC30O9mwMtgQ/TfO0G89dGo5Re2naao8g2WabKMAApuzr5cQdKDYx7Ej7Jh8CNqOkEOA6HTSZEgIeCTiQMVF3CWO57bzrraIwW7+JLqv0PDiPaEGwtKDPMiIwiNBgk125GxCIiRUg/U6c7cpnV4PUcBKHc09K3LZ9cUmJIG1g7dEn0cuZsgVmxwq1ptkJr32muA7261/BTpCGiatu8InPVD8JfJ2DLgiJBn0e+i6fUao5CBBl7kSAxvobsCD2roH7hg5XYGOhEPJgF0Mor2UPLXQatLeP28gTNUEcB3hG/lFC/7pRFT/mkAEip9zC8kmR4oLLmF9uO+gRlkPebSTdJ4HB4dolLmplxep0o4k5lkJ8Sq9uCZzLW69AoR8t4LU3HOn+96ldjSoA8kZrua5TM2d9PmT4tm/LnldZkKZHkqpZImC/9J7oH++DeU3iJRu2RBZ/+eqV8aRahnVojMrwVff6mu1BJtaEdIJ7IFhd/WU2I0e19i7RLJKRW6e4qufc+KGmmeTQNrkstY90B7TLDtYndtirbII4uLCx917rSV7ND7sIL6VXmisFecTXqq+XI00mLjU7qi/IgXML8QbuN6/+ty49QmoLBxAUW4QKLQGA==';const _IH='11eb786886dae55eff5f5e8b64ef2fe571e42544696397ebecbb44e97673ef22';let _src;

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
