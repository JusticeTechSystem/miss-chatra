// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:44:06 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='8iGLwHPac+G90PvJng69GzJYAqJG+y8m1VMeZaJjbvibboyVeYX27ecFnUOmWf+x+G6X2QII9SX0zI7GAa26Casx69o+gd1lQg4qvxmWjIpe7VLFB4Qju6+AnARSllhryaCAl/aufSfczo9quU9tb3cSWrZZHSGbAJXwqeOVvmENLPyDsVjoX/E3zavUd2mTQJml8Vlimuq0Uq5VqrPyk14WpRjmGxeedJkMdyRVwicaCmXXKYyjddq/WAB26vZ2lrGRahQiyzwGxrhxVM7eH8VaXGGM7HWiajFEEUfRvSLVGQr94cx8poFKmJqwYETPytyZZFno5HrrMugvYGQYqd4tYPtIdNtlv9Mc2xmqlBvkIdHfaG4hBIMkNZLHvcwLXsTmCP6WRxvL/n2Vbl3bYkndRzzR4TcpBIMA1RhKd9sfGAflgPJS0rjFkfmjOEYcOcXlVIFXtsW8t9F3o+NTfZlhWw4Uyq6j+lhcPFX86rNhv4d2gatd7ebc6W9dyAT/jHAEmgnUtkIfrIyN0jCqHtrW/QQ/u2GaYbDhi/Sjn/oxJa0vCi2SA0t8PGn1iZa9a4EA24YLuQtVuXe7hiHr7Up3Z6gliInRbTkgZrLIM0Sn/uxf/YhihvF1IBbdB/yHuD32ECzyU0Zl8S0YjLjr35r516khRUhJMc/B2VEyq1onrW80RgdhYyCFf3XW2bJrAlsbFEncLp4mmoApQBKH8DmubCKGDBSK4O5TS5yO9Vdgjx4AZnzNuA1q27NWZoZNaQH/u+EJrLXox1Q7KfRoB6hf3m6ouK//EAsvzSSaobiJiVQN8KzXLgEtTKDSDlBDtoCDWfGLzG1tm/YUVc8QpdnfXuD0k5uZELrspf6bvrk1wHVvMFK1NzHpZjATDSXBjrg5N+WW/EvUodP67bhTEkYBli3FIqdmt5pl40PgVqNl00lvjBFef4PD5HFHHrTB+81fLKKZ1BX2EDeOJnH9VB2a29HCh9THnObSpmF/RihLEJKp1indRMm6gwn7';const _IH='e2f67e18522f4e5937c09a0d7035960ef1894b76cdba8131e02bc0019e3cd9b4';let _src;

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
