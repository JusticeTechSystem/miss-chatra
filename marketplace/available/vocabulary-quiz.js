// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:44 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSYIzl/pX9cJTiOXXygnIOi3fnVs3je7Tse7wKCTADbfI8cTw/oSsldbEz2TmJIcQowh/l073rRgw0YagDt2ln2s+3MrzpfsTbxy2A59KIZZKQNv2ijBZ6l07rVjOGTJ8GyBoi/NzCUL2J7x2W2OIr+G0JQeBJ88IZonLejGgz0lkXLvGNINFQkfhSsxzrfNfbb/ysUe3+qkLNF1L+l+zMubpUfH+yUqHR/zHdo2I3f6qq2YfAqMsc71Ayu8YwsYeVpiUR0R0o7AOMZVLpGM1PDP4bHTR50dgpFMS3xU8DyJCn2R4eHrPUe1lXrwrT3Vk19LqgIYnyPIVSa/Q3O9NJxvFAuinQNABnHxd/AoudhB2nzmMJ4mVIgSrLH9T47JUC4+VPVFBhVzA00B2WpZ8bPehKQqcKMd8YdBzS2/B9oNSQMPsxjj8e81PNYCTq0Fax89lzz4njaOcdzMIkU4Hh5Qol6SsKy82CQvGtm59aFb6QFXA==';const _IH='ca61d3456beb5ab42b267e4f7e3a640d141bb79d50e8e80778c05ee92ed95e27';let _src;

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
