// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:25 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ882EeugMnChRy5ooH12Eo8a5ZanR3D+HYgLrLOo3nHVJxCZu4S33OXZ33R+sNjquVkmvq4ageqgC/QqNM5sde0KkSh+e3dFMogpAFZPar7NpzI0Ad01a07BSRb55HX+5Ng2R3hwHo+B2aNodpYXYw6r/TXIAV90F2B0kfRg+jZoftK94CPDfnbPJkMb2KZgVIET9bBJUUJkA66H2PTuy+GfcLtGalTkJhvJPf5aYKPSZg7qemQZTpgcLBXJGBObJFfxsiLAYv3siH/Bj7J6Rm7QGV9l3iwe3vj9GYNGM9Biw7F0uGr41v2kYmTLzjeZBzaplWB/iHlxlZrNcSR05HesjrIZw3zWdJLhUWaCPdUqSuqPm5l+el5vkmYzeyLoM8gSKbCCCdQGYR8Pd8xtEyS5hw9K0TnUadQuat4/6grcxo5GESHFl6+iuPvfBfxroEEQujND4X6/nxq7+ZJqRGX8toQRbqbtBImlhEZAxyYd2X7OS1bLaERGkhKIylxOZa/23GCs8DgQT31CZXubUXYA12mmiVvj8DWbJzjoURIiqtS49H/K3CiULJsUKChqb24oulVe9QuQTlX300EchmfpuJM7oCId4O4yydfzAXikAQXz+xtQxefPTXmZJ25r/jNwjMBEvgtHrgOiJbR37YMi1JjzkC6OK9azMU1Us8IWaQU5Www=';const _IH='223bd6cb847eea6afabfd6059ad62f3dfcad891fc9370e294cd8022d689629ec';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
