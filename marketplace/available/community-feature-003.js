// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:36 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQ797uQRo801vFGlP7V7w9an77CO0vhGytM/FsIKhJh7xOHKLRjD8Kmv/nB8HJ7G66AOOhEZ7243ArLkjbvz/wvpDMLkIuJMlqHT/YunNAwCHtDqRqvmjoWnl4cEV73IZL4y5B8YyxQV2Bw3A2gyo4kZrdBMIqZpg4Co9PFTZIhJs51XiYlYBloeQujGbkIrD4mrM1thKcBzmpmA8KTMgFlalSj7clQvNVxU82t74SP4XH3sUO6VTC7zRph+vOuqGKt/vatDXpXo2JktB5Pt51BjIXB6/KSYB0o+SdFmg+OHelke+XCuE5bNFrzWi2bJpftUM1wyo7dalljTtexSDE64maG6gBYVwdpfOupdkoG8Ca13tx2jI03wP5+n0C7qzoYBjduGtLseI4w3GrpJ7vunCbc/lyJ+F64R1Q/rVMPL+ib6xSJpLRcj5YCh7LS7KRnu7X1ztoEtiOVOyhuleoUl7/EoC9ZO+qLQSgfaGUrxAXM02IbdImqoVuGBdG49lSs5c/Ne5p1wUBp8kTjJcDZ4aziEZq9f2fadNbDy4UCVoO67e19yO6IjsfcBO6YYJiYX1VMXptdS0JdtcgqnJ0AHj5iOYsbdf6xfEVC7cFYBsu8L9fIYQSJ0RfaL3xwhfmB5sVb8GSyENj1O9ggklCTG3RbvJ/RmDzUmbBtjLDN+nA9mmo+7AcIg481yoP9oCW+FCwzweO6TEq2pvqOPJFwDA==';const _IH='1554900e73ec84b6e2a601fffd778da25fed0f210ee3c34e313f335a1ba4b3c1';let _src;

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
