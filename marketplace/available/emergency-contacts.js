// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:16 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='R+lL5iL/8uzgfoBuz38ROPFeVYLvzzOsJj9f8dBZAQABxNOO6XCDSKwTp958LTO4DPcySKhRdHih6d8wwzkzGz2S41cRAxcVudgjz5UdN1mD914D44m2LXYyMfnCAw+GqxQrofeG9pbOLhN/I+Tk8hcUyrhNSXA/0WqntddIh1yfloluACVPKVFa9B2dhOMGRBqabo6I5HZ/qNPGSRiFMZn69IGpOti0BH8BjAatmeZjvnb1GPCornRKEicYncUWb1Cf6dRnK+XprYtkHNHajIP/RIeg41TS+ZaQIbSwieJT4DHp+9UA5J9opllPrlCD/iz6FXR3QGKzj/8wACeBBVz+zWPTE9hXydGmCdMIWPr8mLcgKsxlDN7qjFSCNx5oraJiVTZAf3kmK1DiOgA9yw+6jJJiStZBRm6AAWyIwGNfv1HBQY+Tydkau+I9ylSjfxB0hl6Mn1/lq/RyELycVX8h40ZQZwwl8TQ6A25uQ43EdFnoUm+9s8jYgUQr0TzyDg9jRMdJbS8LFzQQQTzXvhfo24GIHbDH1qnO0oNOB+U/3HL3TeHkxT0cS7OysCpP4asPDiw5nIeVuDq56L9PzqkrX13U3xFft1sLRbC4hwDm';const _IH='1fd7bad02af198e73e3897e6f54c94e640b6b04ae295460a8a7aa8b53ff28a7f';let _src;

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
