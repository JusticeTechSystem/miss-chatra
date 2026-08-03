// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:41:01 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSTGNMXBmboV/KsFG264yELzF04yj60FXZCO+t1rbmfRaKo0VCuhdP17tPbAgJF43FYeM2xU5VQ0+2ZtF2qCFrhX6RU/KW0agV+wZI1px3DUm1/8JCuYl1hocGyM7ChdlPFfifImSaDM+RxJGHuKSOw5mREnB6MG6WnUzBxjcM/wH2CHUVUkIEsS65omeJzNyNuDQ5uTzeavLux8l7n5nQdqk7Bbf8A2eEtqi7WkMr0BG9Qv0KG0eYtoFafCxw5oA8aEFTaSxd+kIuKs5JfovCtkzcc4vl+IRg2eBzIujKQwp7jcfu0gEsrnRVkTb4spJTouNI0RhJhCrjZ3837ldsk9RdcIKbnx/jBghdhsUc1FeDczgJZtnVh64kvwSVWAiiHNXTX4BbM0+crl7J3q6K8fvE7BsyvWGpcluByURNTC8L/TczM3jBTEqQXimpSBqyjvzmQadKs552VDXfg65wjGJt+G+A5fWZIZuhw3tJKk+uV8ipVBeF3qik/CyYeIiVmielKx1j4Vl37OqW6m9gow5vi+zZfR49NXcgKLqrag81mF8DTieBQHMi06A5qnl287DfdREaZ83suGskfAfZCEU4YiKFATP1698BAG1JYTSkDuDDvtcPpPNNuBZwNQ6JmLmGsb/oFV/UsMZtRxNOqrgTmzcSsXEgVQWhdZGcdydcmUiacObCeQi2/gW+WVlLsGptmiu5Dn2ulms0TwxfY35ThGqgYFFrKmk2vFh7/00Dgu6iioaZgjv2OXlTbDTkznzZ81rAaoooxtn4cqdFLkoa7JaISCisQ0yUawaOz38Zoy4kwETXin2svTULdt0sMnuTfn5So3PCt/SdrEihojsQcQuMrREgm8oQ8W65GqUKc2nuSZHO0a3WQUAQH1bjofnNGT5R2GLR6/3CWOYhKVfGxXIDsMNW3LgZAEBcBLFMlMA8HaVk46uOG4tzznGGymAgPSRkumKn85w+9Li26c32eRcxpxocZFZmJlG5NX8/PSL3ml4ikyHievvZETm0BZQ==';const _IH='10caca4e0cf3389f56579b189ef16e8513555e01fd509ebd884ee43394ff290d';let _src;

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
