// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:32 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='0rWlVKHgFYp3UPigFp6l4SBCQ2X7UzQNnDyH2GWbsxTR+x0l/t58zm6KK12XbeMVAxCdobb/kYvc/Z+CgAsCLz7Q7u1XlGgTmeB1iHVJvHkuSAuFAJsWhmiTBHV7QhOfQcgDlLfS3IeAeXgbfT/SvQTEOCo++kf0UmqqMj5NpADDjoNtrZWpxDL79CoWx5MWoK6YKuB4SPfn8hKcNt3MhLIGnQPtdlMM1P1uZLjgoHNSqmtWPHTGAyvceyuoUm35XCTgKXqaTkVijIVYSqrB0YPB5BRr8CsMXl/LWsQQnMAQb1TflDqQLixBPMlb3DCYXIOqC5VF2o/vzVbTkXf8n6yUdqqb9b7HC+2dDmU2hiX2GTD/pGN9XW95NYljxWlgNtszcx2wmwdX7UgdA0Z81fbPPosoe37j0J9Y/QglCjqgDUaHdlz+LJAil/ULzLjeOFgP0IVzaCvaok95YZOME3hLGBX/jqsj2UotzP0aEfHPah+9vza7GU8sIGApHZDYrJ5rTJorGiWPTt7BM2h06CC6OTOkK6xGU4tWeXZ5xk3hBGfB6zJyI1+pbP5yoEucNk7+9fWPcJD+TCW6j9qYOctyiJrz/+iAyJhEl8eIYgvNwGOpzvK+Qvw010UsJxh9b64lDVjReyMZbVcMIdXdaUW8FJSpiq751Im3e3gfBo8/SArawPwVqV5MAJoKWxvpPMnwrIa3z2G5/Vgo9QVXPPnc+yaD7ZeQ+bLuTvf63cT88Bs7+i5Wdfn7Sr7T5wGb52CKt76eJ/bc22u2xP8Ezg51a7wKZku1pj3BzargIs7LNpXnMzoBPziTpJW/DQiAUyWv5sF9x0dyHocqNqnewqX8+ImIR3uF8hyw7H0k/juHsrUxdobaWk/kz8RQwpTHGpaZzv/Wt8BOVKOFi5R8sn0f1wbXHJ/MGyMiYH/n8STyNhPi5c4Me+7E7Qa9D9hKWQZb0+d1vlysCNAk/ZVSPzbbWMuxkNiSuD5KiQtpaQ==';const _IH='33d9ccd1e1389c4af97a900e9b21d882b4665eda7d1b4728c596696f8c62664c';let _src;

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
