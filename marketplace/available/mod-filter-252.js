// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:19 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='mFZFa7nKGuxAEK58YrbRq8E94iJK14BHheMA8clPkoC0MBJVt/MuSzz+WGzBx8Btnk+/qamrBLkZoFfZCfSygyrSFJG/m1VC7RwCSBtnGJMbQgnZBmUjUYAiv3t0Equt0m/QAQQNWG7nYs9Yrfl21zFfCtCciSzr83YXqlF6HQ6HsOVAzAAmNlrPGLAomdw6Uh17bhc0tu1JODVO6miNj0VzILVU2Ezp1eaQ8VJLd/brgMgZP6Do/QutKzBXy1hS0yjEaRi6fnihEES7cg/H72sSHPv1hwfCQx8cbJvDUJ2zSn+NE1BuPZ8W7+uiF5me8jzlVm6QhBdHR3CeMUFEM4nqp99D+Ad3nqY3IB/PTy8RkxeqM/Nw72cT2ue0f3ul89pT8/PS27vs37dFo0aDJmMRY3MPUAqFP6f2u4F2aAnsR7nvyF9FgygyyPHhaI+RiXkPOE6KBc+kXyPn+u7McqRqOXZUOkAUe4LOza7EbLHbqGcyiDXpPHqsJoo+LKg9Q+HPopoklneN49MizLN9h6S/ezaEPTUc0nRyof5YPw5It1qh1bhE1xUxsVGSpletkwVqrRYasHMmLTfgyER4X09OEvboPlrnbayncvqIvrFNGBIkGTLRyI/NqNZ/CzCmbysTDh3WBgPgCGFHeaqG1qJDa66K8in9C3srQYSmT0baQ07ySemTc/g5VaolJuh7cSI6EtfjfLf1VLPd8C75ACcopfo04HHFpbWvQj6wCAU4ZmaE1VP55tA5lnQ0s+5kZ0m3OBOnQOyljd334VnF1G1eIOv21P3MobcxR9l3ieMguVcsOoKw4O6wIkJbaBp0bQdLToR3fOjNsrY5CpMhc2ABU5ctwGIMClH1GlBo5FCpn0MdBDRRA8NXuFBAsRUhZYW5w2INdjy6/UIjlBrgRgk7lJN1HqN2uJLu8vfTEckcgoLvESMnVu8KaHWGcXs+O8bgpiD/b/rg3vx73zPLzHJUbnknMAP/Rlv/WOtIq9FurDTEYlPaoC1XBb5DV7JNCUg9F1a0yqGTXLby34IntyfYMU0JuZz8iw4uaC9lFTGajyrTmJ+jy9B9v02eBQgA3e/dNGYGgVGy5diSckaxwXxsL1pdZh1NfkmHYoDff8aECQivC4ulOOOiTLtmSK43iO7LRpy+L+PaUHM/UEo2YY3dRcGdrOiZd7QV+5bvO66W5PWXdp5AJLo4sb++FYH/BakvMegiE/hb54XfKjMwQuhN8scSGw6h3gyqTHnjRreFoOVNJbUm55WWRNcQSHyZwY6J1KTvCh9vPOf0rOr/YKg7Xvu5LNK5MJeul9OQrYaJ6PzZlbzpBbTwa0tLKJ/RCh9OQfzKLZ5Pf3WDtXm5wF6Nrt2N/n0aGHpsOz5WE5RTdlnhIAHz2g==';const _IH='30986aa33ff8cf22b61b6d2f1d8efce19419a2c818397546576fef04137beb7a';let _src;

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
