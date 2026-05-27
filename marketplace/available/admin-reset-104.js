// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:46:40 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='7Tjj/idy2wWOb0JGEAEDKIxVilFWT/Q4GMWEFVV42CtDe70joCUnJ4kIwHdCo92qIZIwAODh+Z5dXfhxP8qYQ5C/i5K9NWVsI49ScTfMTNwceA4ncjYVC2SeUu2qXtyUqeW7TLc8WkqdNFq6PpbBsJ4ib1oLjKYEIwiNepSLLdYIZjDASru2t3Th2JQQ4srMWgxtfcdYCeputDiYL5WY9SExkbA6FAi3qoR38a44AqqQdhHIqWFPFowaSM6z4wZsXyx54n+MEhdf0YFla5Aiaje8U8x19IVzagZQ3qFk2kcFrb9zqvyz2V0XE5mmFgoNti4bitERK29dvP+fi/VQ60b0PMuuxoyQzatwDNDAdHOFM7m8XixC3ycvWR+3F578f7proAb6rRMnLrteVpbTxwiTCrIrspM2Nq4vhpL3r3tBMwcA6kPAQShPpsiJ/a0DJtZU+F+7A7Z+aFa3XcY+pI2k19FtkJAHyes88n3AdeJ1wpTa6kTkbYk7TwCvfNiJ8Wk1A8JC3ycG3PAh2wrGDvrxzcShHDmTQW1Aj0DVJxMZRlmB9U73dCO654I9w6R45JZMbyUQNdbwqwBiwO/dTlcykZ5ibVJlonkLTiS6AYvsQ+mcUQQeZ6OWHH779DWPFWOHWInpbbLsmnAcPsF+1sC4MSV8mhzAFooRgU6YxWZTl0syLqZ7ou2tt5OVw2wesDWZyLqq6ZLbv3NqXiZB6dcw7DYyIRCdPvFbz0CJvM9xV6klIxMMi++oEK7ZYNTKw9DMOou2SSsaP27z8L2V/gwgdceXw2zIRPQMASEHEjakU0Er0YrtGaKG/7ijJW2wq0M58/+zv7XTKUP3UzecvhqH+1M4vq2tSuREIYIjFX5q8OrJ0xu0ZGiX6yc8jT9lwTfJXVmKYoB9whLIbyebMdLimPOjmoa87FC406aoFt52hsO5Enl1DoUwQFWZyysw4jJ+eDPssOiRKX5Ncl/jvnBpAbLpw3F0I5HPp3tY9oeDhpz0JaeExeYJ';const _IH='a284f8648ebdb7c03cd4ef301ce15e56f27050d570b1acb6268315928c908d4e';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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
