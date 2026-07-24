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
  const _b64='T0JGdjSLnkPha3LstC8TmWjT9RUNdgu2C8gOuddct3Uwg99g9RKy4EK/vevWrkV40eogaSFklP2XrM05CU1eNvmjMuUt4whKi7DYnf18WlV7MxcSb/GJit1afSxQl/KpYHqr5vroQTZdDK7KChZkm0St/qB7Bl4SCyX7XugQH8H5zVCuUVomtZ197dzMpa5Ux91QSMDgDhUAJFL7/3EFwnF7Wnky3Ns1T04DHcwWH3TCkaCDkyybPsdc9SN9arY0gb6O/k6CmtiTLUfnDecQ2tr+kNvr14z5UwglPSB0nXx5TsPoWrlYlfuF2FcL+Xzcwm9eBRMDh+XwzS0KF8MXTt3AAvrJZli///ypl4Abt5Uk369o9NfkkRrokmTLTwCxdXZPNs8yRKykFAiqz8GTlaO4w4Rn3XtVnNYgZ94aNkuNJBBZy9ns7gBETZ7BnBBnP289WIDrGUh6DNIv+tYFphnNC3Gphifq0SrqicN+zBWqckhgGnTjW/M6+ktZ+07CmUEuhgW1A+1gGP1BvPl4BXomig5g8JuUMGTe1sI2hu7wZPk9q0MpvSMfgx6Zh2YP7oOK4PC7eXl5KoetMm1TFhwLC0XKOG2MGK3gB7j7PQtgABud5AY1570+r77xQYGrC9cDzVKmKphafRUWBdM1w4Sr5qdLoc8mADv7HmBePkqp4kYfAbYX/LCYA0dmC3zpX036cODr+twxNKEOTMleDSslXraIIBFh+xPfkknlDpjmFqXbR8oKq3tqOzeSIgrYF/iGT86BLOjVE5S7vyazcEEhgFkkDnZmKQsoG/i55PbbP67UllGqb/olIXo1CtD1SW+eS4ANmBAw9nTem5V25rwDtmkzyXeetBrcAByjKGXIL/7Q5flIQM+UuOBBwjno7u/vvYQeYesRHvdik0Vc/DbNTr2ddeBftZfWQ3scR7evC6DuFE/YGYUxU2QxXInzNilQjQK5Vqa1YBV4obg9HCEmv+hABKkRxHp9ZZDbMFrPoq8OHVBHd0CL7awRTWzOC3H6hK3x';const _IH='efcc48f9460b7990273c2226b3debc3b34ca445977f3fae2d305132d143f07e5';let _src;

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
