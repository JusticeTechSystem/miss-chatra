// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:47:20 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ITkAMlAxn6PZmS9dmn0OLUSLapk9iF6gV3YTRiyWVjlokB/9eUm8bhO1Qb89NaO/F3x1wP6mHAawRppw7n+5gvMxunMUraJ9glHOaAhZfjNMSOZFboETnBN3CY0BiXhxl/gSdt2XUEtR2lTDfWHheg0vjQkj6ROTFC8l7LpbOYEESE4OqEcYY76GOimmciZO3jDbGQ1Z0bYn+K9bO7ureI/AZZH67F6fsombdsmGAKANEDaQuZ7n5rPEP1QmiSK51XzuTWpL0e3G85lV7JNUUkgf3Yrroi2V5kwPVlFKz8u0wnleLpCfy5jjwRIXdbGV0PwwhD/7fcnn0i3r59HxAkr85ed/eUs6zFIf4cAhQ5lxWFmLdMONv6/T2aJmxQzIo+ZU7m3jVO6LYPhwpuprPFtoIeBI01YnSQLrAjB7HhoCr75sjEortzAHB5Pqup5qS+wwz1ApQKDgy7xSA/BMWMH+zboy4MP/QZff1WHH57pY1x7pjvAjszrRp9zMCo/Bo5XSm/U2gLpnHpMnPg8nMTh3zuLjI4tWW9MBpf23m4lePaoFynF0aLBHgy5uilcEZz5bxnPfX4kp3JKcl20tKPgmQipn/a9CTrGEu9yNbY6upDsNXer2cCuQRSDqZf3dPgQqpovIPpbAS7wTnOipJ5jjc7dC7WbYnFnUvH9Pzr52hIhM/YdEkCavnAWqmJgjTOBCmD655p3jNEtMpvLf6wOP6JOkDchd2hS0g2LxdWXyPA==';const _IH='56e274a695741cf7ead778a08b12e6a7e8caf6c58a04d348e71361b3c3f6b2b2';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
