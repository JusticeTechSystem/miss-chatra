// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:41 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQVKeUCvCQsqrU9HQfsCSlvp1I4chS+7U43D7BZ6UHlHdj194UYTg7aLRNyW4+mjWXcHcW3+O0bz3s4HhsXfUSij1BTG/YiOAKPab/fgD2cZxiODZlWKPQ13EeJ6vga7/Pv7T5YWHqloy3wkaO8Hrv6G+9iaYdkbN5pgCW7IEcghpaH5euJDpod+PVur0wkWp1TQmYNpDZq9X5kUzOPNuqMc/TKIEVhqLcYi+ovQSu2ZAy5T15Td2MsPdgdxTUts8F1xp8E5Vi5PHl2M6lN0n7GXJk0vHyu7HNf4V2LnzmrJqMJOKPF7v1tx1g8U3AX9hqBTZCje3doov3zrVAXZwz5HnGaXoHpU7bzTHaz+uG69a9AUESgBTGpF8dxjtbc/53nehwrsl/5JPok3ArYlZ1mCKeWbshvUj2IaZtLg10d0R40E9TnoekvZwYjfBRsg/1sFxP6Jn3aIP3wt9x5x/2DBSdPvDW94/zRyh4YnB21H38eMH9IWgeapRIbP0QpgI6ZR61lf6+gOBzadardC/YQacq/i3RVCh8Q7hwxPq5TaHLitp7L0ptRsysPaE1v2hGyYzroWova59m2TSF2LPjgAfDMJnCeYb3iNJQ/SQbsYmQOLr389JC5NTDhYUXRxEvoggegmg9qqi6q9w==';const _IH='c4910758f5818303952317ecce321539a3ddefa9cdf67562e58078134d920f94';let _src;

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
