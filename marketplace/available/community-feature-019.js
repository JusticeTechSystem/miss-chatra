// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:09 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='dedFHObTSx0Ghx4y4UIGQPpNf1r+9V+x68+WF9o8lwYgd9VAM3AgNO05VActm3wVa7MvhsBpzpK920UTbD2V2wqFn3du/++AC7EOF0+p1TmNd/cEcdUKNa0au/wSsH7wh/7zT1wNLItc9Dq+cH23+qN5yF8Yz2TN1BzqAF5oG3c8BWKnm9EX24DOOySoLamQrHm3CDI0aU/GIFND42anjHZ7/FSTdHUsfDixH+jbz+fNBev+elMz/UR9xIIyPJG1XJO/UM+EDK8M8dq2+8dUEFoGFS5Uu3R49XCnZ7z6/DcyC4PcJ0QQzHfy+uFiN7V8MrXXsKC+VtLEBCx2RiXIqMZZLqOREQTbiJRFCeldGvvXbVRuwpdnBTX2thLnKR5wJ/90LP0pSzienYpQ/R35F+jd4HFKqwnEKEnvIai0NupwMsTLc3bhxP9lleOjEMES7XRIdAiZQUWrWDsAWU/iKr8X5JweWUpr/NtE6DngnXJIWkelwH/iGdOqWTeZ7UbFetn5bplwM9dGRzW7RxKZzULgglE0diXCYQlyrpfBNUudYM/DPyyAeajNCGmz8BoitOmMpHQFOxgbhAMWedzqna3Up/5CCXL3Aw28qJyO5WcWee85PSYLk3V2kkyxCYCJrlsZUqIQbMxcmQebv1R7aDm8XhjYMUyOgK8HCOUYn97usQ+qQ1sTWbl4ivmHWwT+N1LfSIRmDDeZZiCdC/rPweyaNvNCduJsXNOS9p1Y7HgOpg==';const _IH='8fb3d6c38641e096cb68848abed19b01d830bb1cf1fae8c721268027a9026232';let _src;

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
