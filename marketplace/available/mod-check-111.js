// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:48:04 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='v1Wdm3hI7g9SbRZlFEu2SNgnyWZaqDzi4RXnajYE/DsCxlFuLS256mHrT5Fiq8+FoRvUgfP9Wf8RMPh2Srt3lQgjySaE8eWAn6JLgGZ2ua2K2oZTrODF9pxtva7FqvLltdUb3Nu6vZpeKquC8Px4P61JfuEh4SrLq5f1g+uUhzV+HbyeQ3Zckb26ASZZ5v0P/BRJSwIgHXtbIK9+rZ4oVpM1LxPjv+dhsrr2RM+dE/NgM9E5rieuOgmXf0eGSIRnzit01esH6exdz83sW6OnsdVqkMD1YxD+iZ/IsMB/PwwbWoLk9TjzMJV/SUYVwawaJRTD1nYMv0KA5pm+HUKTQWxpPhtca7YiUUSgCVOPt1zTp00PSVR1/VAOTEJuM49W/hGJkiyFjzKqsAJnuOVMNlzPkd3SXDJM+c4YbWTVu6+wCkhriAqxwjyG4EfOApSu43A+eFVwb1jgiGbsc5yqjIDHr79/wR/IbAapXSFdITBNuiNafMyy3pz1Tpx5CX6aQkgWW/h5J5Tnji+gF9pifhLFqfO8SxtF2F/9Ytn/UleopgdGCjoYwvwB8UPdPhaB1heEn8X8Pvtl3itNi5JJPiLYJRI5MVY4F+E6Kfi+Vd7KeDLzQGtlP9pcpnv5+i8xUWRagwaswe3JbPgH1pLy+15WL2MXjlR3OVX0QMhAxk6u8m8tvzT1bpRAft1USrdy0ATOTIs0mHT91yo04ZQcvSu5mnkGBfiWWKYJQ1yxeFeo3UIot2Pel6U33pck9nEp6Fn53zzwIS0ZdpJJP8p7p45GsmpUS+sMl0m+34UIcsNPg0B0eKtlCt6na4YrUjS3y1U24Fvgv8hpGo1ZQ7QxQce+rYKZajUA1iVCCxpFgAhO+TyLiwa+PGT2h1iLGNHqdOIDX3WVtVnI+wU7rKwUdt3yw2iDMAj61LIEbcEzYaRbQP3O6cql3g+N6yQxZL/mHAYqRracsCv18Fl6OCZHxqSBseLyiTEPqasWPX65b4YDfQYvF/mLd6CKMPFOcopykINu4Mx5uKQXSU6dU4269V8+FmOqwJt/Yx95iiIgDLuhYh5+c6W9waboPoEVsAfKBvHwNXteFub3N37Pt+iSCCOB23k/RWHl311MCBrSwglIvEfXossvf4aGxL4VwZP+NWvPemjqp76xpvTQ4aS6O9akmPPk9fXdRY10ogZQtDyXZwFuVoAY6fz21PHw/09CAG7tiTfDADlwsYvSLOYJT5ITaZuWajMJ+xGUKEzIxIvXOxF7SoRwhcaCHjponSn103ZHjLhLghn0XNFF0Mpr6V3qP8QbITPdmbjzXeounXBxVtGP1MiWIt1MT1Zxg9qh6HLRYOrUNy91HZ1alqYhHCbChaOLhGZZzH4Hsht0';const _IH='7d55cd4f22a493e0ca03d423b8947463d6fb4a122b74204cb79803da2e433892';let _src;

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
