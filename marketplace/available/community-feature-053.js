// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:32:51 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ0Q+CT3sj9GTIJirNu3HRFOopZJGMShZqfqTelrnNcQ6MOlvA+PR1c1556KTQCJ9AxlNAibeY6mZx+o8pdlBkcW7wrcIsKFnDo8hxuNglJ5GbkQnBwJR+vyi6uqzMjPappV3DpWqMy5+pIA6gy0j8zQUCXTbym1YGYeWftvWSGbrAvVJs9o2nBmEEt+g/zIymGUKSXREXhAXgLbMhcz2d4ACsmB94oXUozXK566oSjwVmYargRCqkn3+qmRgsNLo1f2Q9bdfjqut1cGUlmKrrbR8iUCKwS8kG/rZY7XAiZt01Ua00cGDvAJ5e5PPHn5KzTuFJwRbWJUGps8MSxhA5WaWkfocpVELhIcBEIGgPc1rPT/C0HH2abnukrwSKEYeUFUuz9D9DMaEZmKni3p/7SXsVGjGOk5AWv6myjVXpBLkMGmm4dA4YQ0LFmDtwQVV0C2RxHuVYPVeRyFK3J3wPrZjn+gzVqs5osgoZCXbGg69vVaXsHgak/16du30wIOJmkpCzUv4II/8dfUCqQ/uRde7sUulfAIe3aonDYGg8FevvW5d2+AFqN1kn34AsHyUgXqf070jO5xlQMGWWSkcDR67xicM5DqsCFxI/n+LngaeyN2WTtI5mg+xlXLNe71h0bXCwFRXf6Aq5ZhhYy17EeatzOqKwK/PFp0DK11lfNmViUq3FUdxJZU/EfCKRsBpKEvwIymSOvtPdgeStNyD+9y+XfEN4Aa3q9k=';const _IH='04690955e6e599b816bc93028379eb518d4526b36ecf918aafad29e56f2ce4ba';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
