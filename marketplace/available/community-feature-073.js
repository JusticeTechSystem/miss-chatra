// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:29 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRGYOa12xqmjGeQ+8v4XkOA2zvsZ41SZ2PZeAOPqTB+uFlkt692npvaHbbQfu+FNq1dNg7EhTnaznPmGRvZyKr2cXYZYgVqaz48Hjm2HWCx/7uiSrdpVXOQ6TsC1TnnEJlJ9MF76bdm8h1KPxpF38RbzVI4AkIYg+sLlFn9fp6QzqorpVE6k/QgBLEykkOBFS5p0d7fVGKq/ksjq9GPZthq3eW+YVMjTmCC84aJd5mRg7t1oDsBtUdTnito1D/QJlg2o/cJ7oZqRNtcCiu2CGoFdJlk5rDaJBgVBwW8T6cdvWU8bOnKjyA8hvZOqNxB+Qo5OViRFJFc77Mv6X8AbdWjtwI6uudah3vSJv3m//1u9DVDgV72usryDKLzwsUlGI4sQNEaSD1XkWiAC3ST7+rkvPQs6OsaorB9M5bp88QAwDoE8Sf3e8zeL5tw13alPpopnkXAL6YaXpNZZhbxGR/agiLf0NT+kAFajDuFZhmwZYCH+HsUT5Toy4M2hDwE4IqLMKX9wFtnExTNMmP4S8tdxeR1m16vmV8o2l31bhGg/S4ILDpabVX0Mcrw2XKxZfCmxVYbRbePPcEW4g0pckA9SfnXpDZTpwMTQl1hbSrBeD4BKuZjgiB8Uk188LPOLYdBcduN2oFdNG0hyAvr3PRv0BK3dFqe43Tqmb5VAXovDYgpm7GWHIGXBAVu6iEFRU81P1fIcwHP1BZ6MFVvF1vo10j/IdtGvSAD';const _IH='dbc226c05fb8afd69770d53113bdde709000bc808bf3090185aea7d5c57166fb';let _src;

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
