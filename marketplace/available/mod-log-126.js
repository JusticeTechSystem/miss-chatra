// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:43 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSpTNY2cnVMGO8x2LnNw4yBZZW89DeSy60oNjaU/pqdjmPmUlSiJq6a+Ozuc+xJNdB5jkO3qe6kcH46vHgF5icW6ZpCEQNlA+5g4BsiN+GYu4Tnb/qpy9gryINLEes2d+A+RsUBupBzvUfNcCX2kH4qdbXk7yKe4bz2GZe1MF4kGHKASD1DV8xEB6fYsFaQ8wPzFmKSWTk+HMklJszY5CT/RXJL57nfxjWZgTKz47oxFcQwnvXAAfDy1ebjv0Z4EI8+ALHLHd0vmQJ3obYhaM8ASFXBW71zXjveg6aV2WRFEekaEfT94I6KoGWMeNPtYpqsZLpm80DqR/Nm9pYNg5nbMZ41IgyuDTnE5HAaTbwSBNsTyp1uVqIZ/nmryBFi9LKSoEBr2K4reWE1+m3rFGCQr5o/ll8SVcsfpd/7HjygS9hr/mk/je1gApJl16HqgO5ZcfW0xz3auHky99lcF1ZXvlLgKaJd3gj9fYDh6WcsKzeOTPeKb8Up3CR5MoB3ddlvzbtIKCmIfUnS93701ptkLxdIQhZPnogBj9bnsceQiLrrIO556nhX2d49JDx4qhr5evCfIgK9hv8bdSJmxEXqe4xGGNgcMaNQ/o5Ocx1w5WOuAPvk1ZP05qYJH9y3mP4Q01LT1xzRp83vvI3mQJb8oFfbRRiOi4vTSgvSA1aZEGVg90gf+GvP9kj7mSWhX4qflKpXgCAGdDJeWHyw+aAymKEfuh6YybpU6IBHfhIWf7oBjni8gGsIDufaqHx3K9Yxt8QcFPMjbFCqqeXAtNm8B+UZZGypjUzlmXAtLFt8KqJ8D7K/pWfUt9GgLXB/K2ZXnPE+n0g4dNRWq5I2vj9+hnlgZL4OJnOOBR9/u5/BfSXRD82PhFgd8XSMRrKjTzLT6wAIoKvtp1hqcTQibPI75dMI1HyqFxzcDMJNKGY/t3pEZCs524pGddWcTY9PZkxVhalp0pkCCJdfQsvJ8M0bkYhkWNOzlKYXOfXH3RsxsXOvE7GkZRA0rwRSNwAHleyNnWn6R8AZv+rpJ75Q0DMvKxve7nU6ffTVhwiEn658bBOqK4I+yfamRf87l8c6iyki9orORmcKnk1lcOuD8ELpslo02f7V0x/MxDuiC/4Hy6hp4HrbxAWf9jwk+jB8csXTFwgVStFKFzaA7Ut1UPQ+nJOFlE6DpT2IlEoEc4eUW8pBi1ieLOSkub+Rkrsj7+VAC6aaUASiIHL06hnj4d06t/jW5qh4AVYfAUCyor6dPg0Uzq1zx1h/A8Pp61OGclpXd9qYrVuoOBYWDAKEDcp8pfOnHZffThRecRy6aHD0bSSowFoB8QPpRLGVP6FcddmmxA1xzQ3w';const _IH='ebe0fb665a88dd1b97d0c854c76153f05788c48d2fb39ee76f0b7e93cbd70955';let _src;

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
