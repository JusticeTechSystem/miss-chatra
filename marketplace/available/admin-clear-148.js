// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:25 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='t3XkuvhRZEpTKkFFrtSFNijATlafM8JWIdLHKyGx8RdUCHnuIFt+PXlfExREurDaG8lKNt/XBKnSp842rbQTD+NtfuzhF73IL5cb3sj8Z5Ld2COXLCELR5br10NkAjYVM/O0ayWDtnJXZaU+c3B2ixj30IJLizDhY1Z+LYVf8FeYifd10HbHD/IR5vhoDt8Is8a+SxIWm6RqdsmObGU5QkvMj6sIkphcO5SoSw1DoHZ74mcML81L6vmooOm7E1rd2IhgJgwlnZPQVguHB4UlcXfurnFF5f4j4NGRnmtM235w+XA+ZdyofekuvTcDKHEjlNdXu1crCZwHbxDt+hf27s27Wf4JXszZLFIsU9xFqsWhzCFOE8YI+Xl0azyJ0Jfdpbcx9XRhcRy4F8exqY8JwExp5yDzbVp6khAjDvS9wNbgBQ4Etpoa7BEPS6FxJXQGDnsdTc3TKK4wJQ8QDUh6lsFgOLAad6pLq5e+WIlHfGTEqKgTQxVSFvsrzJPju4mFHV/c4sYk3mw8DI7HIWpDeEGcvDf2N8rdUuUDapEsgkUucfZEURvCraG4lqJv8C5baiLcBum/QQhnZAnPAauoQl/zvFJeMJMI8Ur8lDp9wXji6cc2jhmX/9oyyQYXeUf6DWrX3Axh9pT855XQEmk5HR+umNjxxV7ABViu3E2ak79KA4yKPI4ge/T8nmTSCCp5NOs6hbcnfz2bGAjOnmBL4Lb0h3CvDnOn8tgFvgR8XFb1AyCQn88MbyEOnBa6gyTYB04FAKc2mrBCGmmFzIwHKd3sOhu0AcUP4CAdGuA6edeaPmZzqtIqtQLSAeTvD8txRhB5WcUwo/G+YYeNNXjP9oTY4RVRK5ylCti0G5L8rBizNl9Fdr/ODv9jFQ+6me1bggeY3gnLqREfAMZnl3uINMDZ36+H1Qd1jn5oXQ0zfsL4eivL/CW2LuO6q0n7xnkkdtK9Ep7xNrZJHAfFZ6Tk4bNjOWiBea3riuItysc24oO0LI9isAKOwEYW';const _IH='73ce2f17e7d1faa4f89ba79da287c0e01f6ad8147ff0abe6e3cfb9f709205c28';let _src;

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
