// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:35 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='DnjrF+VpqdOd2wZUYI1P39mxqPspoz3pT3DSgdO1wTZSLUv25C67Ufk3b5wHVCTgOGresHj/Wf6LWQcL7YIiEjEMt9KuF7cmtT/OGDGnQMCsZQ/s/szvIMH+4HqpVP9NZQesU8dzw4Th4G+puiij91rg8f3mMOQuI/Gdcc3NWxMTMJzP2svwBoikHns9QGfpv3NpD6UxXCBA7xnStGJYgFlQavGURaqHR5mLYlWESdN6pqRAKXPufA8beR+GwQ2vOINSK2OxilYl9rVCDYJA4NeHsO2735wvaOZBfcsSSAaH0ey9khBoiwZDwn6asWvImf8blthcqqVVGbM9KX6WviDVEdvwmd0O9MtfeYc+7W8GwiK8ZzkzYK9GsbrFyW0QYG9GvuC1jbWtp8wkSEgSECSKXcVFIz10fH9WDaroIhlXdctwEcHan0lkLOt3i139gmMtL6bs4+QsBXnkEe2cyl33xjWjZne45W+28NyYdyr9r6H+6JyoYU8EMALWN4c/Nx4yvE+jPePVwpUq1RG5HP+H5Mk3k1aXD/Zl7N2oIm6oM6T6qTg1Quwodw46isOQ72Vp';const _IH='f360cde830038f41d9bdab781401bcab9fa899fd7f10716367118c89b9c1c8ff';let _src;

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
