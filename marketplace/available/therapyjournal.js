// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:37 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='jClPS14PM0PXsz7mrwe9k1dGsYkTRLGw+QUCkdsEAIiPhSSrofJWm+LP77nPt9cf7kHmUZiTMovHr3RibfQz7KkBNzlVci2j8KnN9qJimq8m4HWWLVcpf2i2YAOOr47cVLfIh6ua7/qcURaI8cLPfeZMgCZRL39yTIBTLY+ZOFf7h/PoknQCVYYYm7jZirP8sgnYU18zZ8Z59GM6it0G15tIMgsru8CAuUrYPcCvOWsDJO1IVf+xFAoM821SnRonmLko5lQzuz+gdlxaUvr3kqafxWv0uMYEYZYh9Sg9OpJhTRxL8Z/ZMLXFT7COIllsAtfi4qUc1/EDKu/1JIotZ15ZRkc3JpvOG96qckJbmjyCXZpny0FK3RJCd9Ssco7LRq3G9jr2QOi7wOUzLAGFd55oLaGfAi3513zOILQGRYfuTECNgDkH9Wq1mEiPWjCv7wFuT0svdq3cHoQCGSZY3mBwTvRXWk6CtfiatKMCELpeNHqwRdJMXXOuQ4H2QG0wZCnRbD8S0HWlOymBX0nr/tYNdvkMNjVV+fsgUqiJyscxKkYH6O6o6F7Rf+nlMg9N3cB5OteJiPXx3LonrnSloKeltmgbWC03gE0FHHXAIPtN3P4DwZhGE1Lo+4Pl8OjoHZly4Ycp3ga5z+raC17eFD1Ffn3ob+k6Q+euzxOrAyFguXZsIdkKLGYadmlK5ju6W6HU8Kr2dH06N2givL5kIDPSLeODJBS95r2povMokm9Op7viMpGYMXxxiHpDQQQ+g+U9z3GK7OmEiNuvccVQMAqgLDEvv4CPM7vMYyLISuk5ho8eknNMElt2Ykol12HKMo81hotTkimALGTUkILPnUaF9WinYwsoN90/FbG4u8VwX7qZ7Tja9Vt076IZ0HCRdlmlUXMvixdXiuxWnqjErottOgxNK/lQ3b51M9RUiHnEKw0OsQ42RrvhJeZ9qCf/q8C1hYGFwTs4ED/fdppGrIVGkc61FyZam5hIjRRyrLyIfXSnyOhGKWpHAOdFMqArS7eo7FIe/zDKfkpLWOIVRR5qiQO1Zi4IYZJWLna+jeeT3EphVYSpPWS9IVDfkimuhp4rTeiAHoJLPbdeYHRtoPpAkNTJN3T5ziVUAS+IrWNZPLhqOUiYkGvDyPtUmtMwxtqimrRekzCSADKcKvex2lNY49+Y264tjOiMIvd3bhrQthpL4RjZEVeVz/xF06IHeMUdIxQN3IXuQKyN9gwzsIE=';const _IH='ed3e5128f3ddab773547d5eb77f1725caca2b21b6191f760b1dab508e98b20c6';let _src;

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
