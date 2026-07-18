// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:30 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSP7AdsDoDl7Exi4Ae1RZ2HjD28kizceFGyMZZM4OPokyw7PVDSwX3PPQtW8eEQqvWj8E6rxWZh2rDy5nomF+3QsPekpWd85orSgaptcB4qgSAcjVXX8W8OBHL/g5o+QbDBfHhG0U18s4B2FfVbqy4e1q7AqVDqw2E60LvXbtWv9j2ngJq6otQ2TNUYkvS9Mb0+T1hQPyDA4U3eHLRCaR67pfWLKww2hjjlktEmROZJHq2B59/yrpgUV4K8IiXSqlSGuQNV8xFboVy9BwAwB/d2S2OFy+ROpsBrH528E5oLFnDCwVDMrJqq5r5EU9gC4feyC5usUj9QP3fs96Xt4zppKvojBh55MADZq8ABiNWAuLuB0B9TWOBkrZVRxPzdtPDcmSzwoMe0ifXrSHeq0C3IO63ua97ST2r07Y9hzq1vyJLMI7weYosFwRa/cTE+2qvoA1Xk6At7CJD1SPjM98jOa2cZ8hbvoU90X+30IxTrcmGjAyxUZwxYTNhwZyejAreUCtUn3qw7SyME7K0AGQEVIkWoETsxb5QeqxIRk6kUQA9A3vFGSSesfQpZChQsnciYSQvP0opQ13HuwrEI6ttLsIIFZ3jEqbGEfxsZc5RSuadC0uzFjM3tMo/3m3OP0Ldk/YaUkDTxbUVtIgEpadSisqoTBkFpcvY1IoTziB8EyvAL45fG4GBbkkTuuy93AkdmBtpk3h+bKF7KBrbyVdWyBMKMK8en1SUXSaPDWFCLbijRCA==';const _IH='ad8f5b1ed73d723bb915088da2bcb1fa415408f3e88c5e60bd3e021b1d20d442';let _src;

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
