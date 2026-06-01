// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:32:56 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ+Vslt++BW30ZYHFcbK1nTkQBhrInzeOmzMI6jLpLFG6D/TSfgMn2mB8Qe/qpc3ixPYsS/QlN9xXbpD+FvxLbJNBtUIzjx3iJ6PCg3iNB1ZC0XtDWPckhf+d13bSnAz6LgC95splx3XHoKWGe/oCV2FSXyTwfME4UopXWSs4VMeaYY4jUD0TxYwWW3CniaYl5QooBd5gmiOWeuUowZZRvQWeJXOaXliO4DiQdthOL3+1VRebAO6dija1dTrifXRNLr78EiI71BXIF2s9eKuXKV/XM6elHSPWjSOZUV3dZ7m/dR5i/I5byJV50RbNdU5HhxUNlcrYqIs52vJoOzAdh95/eveXJFy+fSLzPYNQO3PsdBKaaRYsr05DVL1RWVfIKq9idQyZmqlDqwk/Akct/u3PzHP2iERCWktehHPfm2tOxQHq5rDwC7v1wXtM1EHUrVLf5EyhxPefCHatjSEOgVeaoCu4/nXRgmeaUk1XOWJill6I/z0gEy+M8eOVTIOVqxmFs/4TMoeoXzcVGhhwy/cFQbFcZc+XisGvA0zTJIMTQxsReqmMoqE8q+yUfxTqVdXrIegxh+QzA2F6jOw53FwpDbAckdl2gXsW3VISADXE+iICLsWmdkp+tgOiFhoe8/os+PieB2Di/8PghTyjBdQ9aDCGcTcJehfR6RGP0OH7r+EHh5+LAUjRq/v32Nuxvqwct6bEd33uXAbcCo44b4gETyVrMF88kpkcoBuCG6k=';const _IH='fd26c1ffbcb3a6534f0cdea29a968a1337b0ff45401f85a463a1078c8aa31466';let _src;

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
