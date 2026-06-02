// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:38 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='+g/TCu0/tmXy5/ae6MengNNy8gFong9D6BwXTPjgg+aCuZK5My4/6pDy55WOoQmlG23UBY5PBVs8gZgV8fvfwBsZwNSfGan58HFonJr4PQ0I2vmBhnrPm08Rm98vTGYH50l3ADTRsfxX/6kSuun9XhQeZpNeWru1BgX0zFMtS1jzoAG9VcNsInJEdutwbFS+65s46/QJji6uPyp+4NUsfBopK1AHK5C74L8clX5QrT6wQyLA7HLwwOWszrAzp4xiKdNUYpA3EHraozrDty17f18cyBffm4CR19+nmAyI6zVYu0osVhfnWeX09bWU9hXPag8KksBDMC47Md1xf1zYur/++pYa5NarUdEgvCBtyO8A7KvrfGP9u1qyewfsSM4CrEqFshT7mpM0Ye2ffanpFNKHqZG9eU0p+l3Z92jo+mrdvjQn0Nr9cfySp8xwGM3mEaUei7/nT8PvzZgMbj8SmqsfVu45b31xDrfidSeSrcNKimhaaNWtsoAGi7fdvCMRsy8xX3yH3TgloUngnBRsplyTruxSrfvjOmabBVx/Hji7K/CJ3MYyvEZEwK39PI6frrHHEVSCc2O/nog1pOq0u1gcOvU32ibocJaAppk8yHtdVuUe+8O9IVSheXclAfjudj33YrXG/41dvWXD3M8tltpKbghnk/9vIZRo6PTOtNMZ0GAEtpswHmNBNOV/zQmrgeAUMsrfaUgeNuFEflWZfLieAJOaqUQfRD7dIZlO2A==';const _IH='2e38832d4300e84a4edada0993a5424cb7d9e4e652d7af0db9b49632596ebd71';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
