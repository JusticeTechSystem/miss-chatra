// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:05 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='rX0FNYC0A7XSjKgLTG1cqIJn9oYrkbIx6jR7VlGLkWe5TfZWxAStmnFOfyqkGsqRFNaP3yHy41Ld/gJVBEqjEFUg+vd6ghc5Yn381j6LsvGJOowj8WKr72yy902ThT1HaLLRIzQ5ZuwtW/AHlg8tpQPVftuyc5C1ksk5+UU6AMPZyct22YNSPahnsjnUBLE90h7k0Nxso+uZc2MKPHqOK1xPvzvuKbXCmJmpTlnIJmFvR/iAodSQ5J6j7833E5gV06S8Sd1I8MlYxuvnjNZAt2nspiTez7kbb7iwQ/Ta3ysCdRaMpHmH9m8zQZYL+b8+7HMuVpoTcdQggZyQSBE9Elmco2lyPxmWqzKFVOg8dZp6TIlg2qBIuPlKbsYNvsDSnPHN0sNQsmGy8nq2Z6h1ssQD5ZW7+4/rxvtjP5WkD/ma7kukbI3alapTpOdhO8jlhC66+GNCA5ryMJttxrzK1nqC5nPgd1bVX6X24fGuhAamaxDmrHajr6nwDUix9eN4OQZm0o8t0WGmdYLStQXGA9ImARRBpS1FeX736OPYesGlsfPedmMuwhPxngT/4QcRTULWqS4AQIuN4oxje7fAOgZRKhWinZFiENuR9Q6G8QO/R8j9GQF47zBeecUbie9vjGpEt2pKvjGWzeyQFMEAOTHSgqQcYV8GlQtnnUvsHpkb3yy6rnxLDi4LxIUnYQuR1HeymFZ7DuepfFioXzq/ltFGjAYGO4sM39UbXsBdHpjchb487HqBY3tI5Wfvgb+/J6K5gxP0DtBbPTIkk4nvo2Xf+itzEQNSo0bG3BxoxoFJFQfsXugKrd+77gh7e4QwQ4H7DTbu6fYLCGvL8dLqp1mQEWSthtPc41YRcaJZNWWz2NXek7MRsYAIL513UcJ7Jrdm25KRUVpAEkTgimIq0BbgrOQ39zWDobtKl9XKBESHlaGoV+TL4dOPghEPpatM1vSCieImKUMFW82eGJqG6pf4srqh/1xiFMXk9Hhr6/JLcxtmRlMLsTSInnPl';const _IH='fffe6026d5f311271026dc168d427ab85f35533af3b198cd3b4f6baadf5056a2';let _src;

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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
