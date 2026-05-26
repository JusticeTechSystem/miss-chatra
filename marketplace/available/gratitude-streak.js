// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:27:06 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='TCUc364M76ZkdCXxiMomeBbPLZUe8nFqOT+dzbknpPm+Hval7dAod7tbW5sx3I8m2EvYSu4k3K2dN/u+g03yl0w+8768S7MSgQONVXLblhgdrisfxEFHLWaCo5WpJWP2uOBBztxzPDH3a1lTse44fnZAf0BTzLFF6hiAnR+8isQ2pMqK3rq/QnpplY8TqHH8VU0ayLd3+oqQDUqb6t4Y4Yhkig+la1Upqh99IwzRC0XUqcN7/E9eXSc9nohWVGWotvr4K7bDaL+t8m62CaPMmUA3LvRmw5fZNFt6WkOI1YUhO+Vj2AAxPDNfhbdbLCSpnTYyCXDOQMr9EO5pGnnwTaEcDA6E/laf5zooborhMqDp53+TWMCeDSsSRY7b9jwwTVpU1ila+NKb3JFdsBaCzUDB+PypHF8BVB45oQC35cFrkEEZhuqIeTQ+D21FICe1gd5cnYNMfGY1biJL/qfYrysRcw8UXSAVoaLF2aWjS8BqPDjCtZx4';const _IH='a625001ffe55f879745805d3673545878cf130d1157e2a937119aedf91f324d4';let _src;

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
