// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:43 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQhFPUFKjDJqojKxWfdcc+DMpXMEeAYHGYjMIDJtzhcvgiIyGqEkuhwpFTxtP5MeD+1j8ESdAo+1B0lJrSYm6y+ywdihkmt5QiN37WhaEEmvYSdIIrZq4QAtybLP1DGvWtUDmUTVj9cESR22e+ZhEEn3BnBlztFhDUxmvx0Qglw+iwCQBe9xk14Wmoq6PNsPxiRzyK9aszEFqx8sJyDJyzSgnJz++0/EI5WUWkLtIhmxTSdQW4QW+BikxFQOEBahmXdxlv8ikjAAqHKwr7KPjn5imhqLh/9jOL07UYif6cQt/dFkskdQltAQqb08mA7hKsBmWA10wDWYIiKJWNt7K9LfxG+3Dk/es54vIyN3FXaquBHr0aRUDTNehHuCtWYweS0JqlsKLldgxQBYRfaN8zaic01Ml2A1b3kIJdjSdvTK2ug+AVFcFgUvZay93qFbprK+qaYjQELsb2QLbhN+5Qxw/KThfFbAkBWMs1jP05WJkeShX+xw4eojwzEIdJoBON0GOFx7xSqnmpfaHh3c8s7VpHljd/Y9kQXWZKNpXElTESkFeKAudpqm3FnHA4fcza9COxIqUiRuib1Rq/1Bo+apwxNh0B6yFNqP6xurWLi6NdSlh8bbw1qDcMgJZej3w47KaV1dVyCrjtdz6GDW2do/3IqvacxlMUZHnzMTXf7shaKzzX45X6A8x1XHq+8mSfzg6I/bM4e8XKUGsG0g9ck8RFTdEy5n8XRW/Wbl9xvgpUenfG9WbAZcPLy3Bc1FbOYvZEPaApXb8GpdPJC8dHGzcBuzpD0eEfOafsrqWYxu/YcV06YRvfc7HqnNsR3qTfe3fwQbmuETkOer8FTSeeZ/RTKuT1OGIEPpeukbiRpyoM0lDxEzIGnBMRL8kbH8jPaFcTvJ7WmAw1wAboBsDwIOIPzgVFnF7UoQoNv0VuRkeSfSc+euXwpX3JpBINwEqC0FSdXOtfFqZ2szd8Lx92oOkkf7VmnXGFJReg7pZAnjtv/VcKoywbmOlINOJKFj1uOu+j8BPgwvna+deq4Q3Ev2lHbPvnR0pjs/mSpQrqKnVhH+zwWNSlPd00RhnP9csycoFKp30jcEuoY+QBDPAR3KU5rIpfDVrC6B1/ozuVjyftbds4XG1JRnvQOvDUZ7jR+8LQ/BwF1avmZc32uEZvK9kUG6xA3xPlsx0GG5FJmTilioiGdfLPMWmb1sEBk4rlex66cMWcZsUvvkXc3AZ/RoYKTBZS82tkGIrX7JRpZaaJuqvNJDJ4H2Sgyu/koYileFZ7FBG9ywvOxTHtkdV4VafeOFI9Y1MpSd5w+6tJLhr7sOpiuI2V9ksOla6cGRJaF5BkKw7NKws9ktEOky8ELy8pcfMTaGzYwMVW8gQrIUzMGOjQvoHM2';const _IH='786c185dd5ecb338e1d5efde36d12442d9ecc4a5bd65a4cfca2384818c34c1f5';let _src;

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
