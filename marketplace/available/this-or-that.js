// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:42 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='y8IxvrzCSKNS1vpiA+Vk/iXJuNJWVk1SANalnoHkA1D3wePIj+xi/L2TTkC+1DMNq2U1C+oMaJS+eigeOJO2lLeDIsHM+8rD5fdlcMXLtBWF0L0W0qhUP3qpd1xBZ/NQVBMBWIzoOVjrlyipQFngCqHsmt5P2Xwv5jO0vKSOkR4I+PYSo7d4SyGBoJwMJ7N/LDH+OtqAjAbYBu6tyEgh/SxiH4YasTpqiOQUnWUtyColZWoaxfICT/XTSy7RpBTcRaFPJkHmSfL1IVmJtpxzJ+ya133XeC7Dy+SaEt7/2vWNd6NSSxutUH+6yM5zt6Ug+TdvH23z9BMTlNial9JRSWbOpepw7nAte3jauzyFaa/PtFsol9T4WeKyfR699ADZ81uX2ZsaBOaPlf28HCxxCLii43p4kRgStBhktpikDOsrvG1nHBS+y15DygcSTV3FVDC8QdoxYpdjNCi6WqSYeykkfPVfSuXg+hJ5C894fmV8Bi+tcC1CgSlDeMrMhLu18wYoDc2H8/PcBopixIXgGE9x9vI23mhInc5uMh8btl9dHn8aIVZRoa0VurqO8pSS8o3Sl4PU9NiwKASZW48=';const _IH='cfeec58f187092cc1849e1f6427222204f8c02fc61b3a13e61852d88db78c733';let _src;

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
