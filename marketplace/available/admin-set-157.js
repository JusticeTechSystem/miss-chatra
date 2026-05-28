// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:03 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='9mPuUe2W6H++aTE/zOyK9Ie1ljgN4vBhtCOy1qQdy0M6fkrwZsoMQZLREUTu4+gBMjfu1sDeeJQFLMhJwIDxlfw/z/zVbxJUaqzbktYZ493ZnWkFMCRhlHWql+vKczQgXc/qxa5R/E1KoXgx9yw3lrdfR9b4CSFKNVeJVVtSssfqDDME13ZBBJr7Gi9spwVl7LhsVgIMTc6DnEMWDyBqi+hrZ4fLpxKm1UYCFjadkJVFiJus98W5kTXMkPVP+CX+Dua8Q/sO3h1HsNnZ5n38ACyz8L5lMoCJ1n4c/IPPUHJsjSr5r7k40YkabbN/AaZ0Pty9hx5xkG1Hp0cKlg3NzfFo3gwrbRywKP2kN9VUEl8TQRhS10lC0IMe5nWHra44haLr3UxvsrHb/aXuc55wFjagmA32dYv1GhVnVPY8pDq/EmDW43LW/2q++ZimZjQeEXAZGqoPBLRrjMfANDlM4H5+TuuXY9fos1fuxBuZfxmIDGlf5CcLxVzWgZF5M2gt1ugA6k7ucxjxAwTqv+fJwwaR9+ucK3cfL54CBg5suhBlTF8U9aGH8ziVRWlqmGyZGrE6unasNXoHnuR0PiizZgotLNl22vWHPpUompegeJ3lnM6XrRXLBxR93P/k0ejtwroEVdwzTtzuejEQWOnNNfIdjkjTn/sPLOdRb8JWwSYbNQAR98oIqTY4fXJYtgHQYnDZB3tBJvHqS+dz7tD/Ly2iTyaB5/j7cjC5gl8PbPdJKl1q9ecDXY1RlAbpvgkRAOAUbodv0bHd209XjoB/OwDd0yy9817p1h/dO+Np5t80pBwQohkEjWxDppxMyiRsnCkxdPFh0MF3RwR8G3rsev85RRotlPcAA9V003m7xkNILxU6Bp9e83U50P7w2dxU0Xnz0leRULi7p5m7IxwRM7AH6CQoyR67ThfHwmvrgpTQVP4NGvXDK1tBbySVAWY053/WEkUU+2PNKOB7VZhm05Z2m5NeQLAu68dYYw==';const _IH='08587bacc83a81bd9c8920ee9ef52d925f3aeeb6f440b5df99531205fce00761';let _src;

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
