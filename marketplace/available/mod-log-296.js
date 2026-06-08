// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:34 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='iG7VOxQ3D3F6lsjmfKNYOKdF4DW766YtwRF99wGyb9nQ7SUuqE9BY6NdwxyYXTs3uJ8ucqPq5/bFoNZjH7pCfHjyl7ZAmpdENyjNiUfsE7Kg/z6JnZdldARj6k5VIweVoIlP+agH/JobYfxDg5/asqmZzZUqoyQC7M1r/9yOWsglg418J+9GQOj4UnFleZVOvpZZVEAG5bsZldA9I03w1MnMq7jIVSkrAScvXxoQBkT/JN2D26M5sZy729n9e5ToX4cCmq0vklJkLsCS41s9iAfUXAgAfXdu9/mbP7qQ3R7fqIi93G2T+njzjc7W0v2LEy2WWXP3fWA9sHu9NM1tdF5R/59L8YRHHC6FtetC/EAajF10gn9V5Na5vdBvYX/1iC5Hvo4tHZnMMi2yMrWqMrY3EtfxIvXdQL5TjLYhJp0EaRnQ1zz4OJwTkPQWhWvNUkygl0t8zXuJl5BexcIiS5rgmCsBRiLQ6LB6hslFBgYwWohp24X1rKcg6p1bSq0egw3BvDDHZgsASNLL2U+PpgEfnkFuCMOPRAzfcV0K97sKrbavp7e2WnuSd8oMhcKrmQPguHvXXcl5J7SFi5osVZwUVrwJ9yjoEs1u+KGgDSwr+Ownt7d8t6+EKk0U2YwlbIRNERHV7Q4B9H6BKHH7617BOHZgTmrZjABlOnUyrwsYCNBIFzjuDY/SrLLNJ31MxNngDqmW0TYipvhvKmbgvTMnuIj99mcb5TyodCGitTp5uPoT7cDCvd/kBH2a+vICkq1TQCP5fKx1BldAjKbQiDcHvjSLimFMQcbISnabQ68EdaGnK5kRE9b7Sh5XqzEDVGri0HtEqYLBpWS1V0dcckQWzDEIz/ooc0mamqzfOrVSZJmufvq+J5lHb8RPurIt+XSnBeiKBtmbUIoFBxV4+sscIbaUCLaM1Y/xSZIEZjYQ104K/1iaN81rRRdhkcNm10fJA6tToI44e+CMm4xgLC+6SfiOE1kICbEOqQK1+RFZbusUAKq/DTFSBM49HCIgi9voa7NzcJXO8V5zsGQsmpThySo5SBvEqPesRZJJQh0qoYo4rdAki+b8jREu0Ccm8u7NeKD4b/YcrwmO2/hiVilRywybyNu0AdOF7CVdc7cBjHpH2CL/ncveWuNqnEd7yn8kRW5EePdNt0y3ncvpOFqcZHtXfTyMWKvevqfrbMIT+CnsbyyMH0CAhoH6errwU9eMgp8BPJrOFwSWvBnMEYl14oiESUTlq5i4EinDIZ9qd2pPNaFJV8Huf5jJnKtkBswTaDySjdY3GAjD75qgOq9Cas5AZzgh0kyw6n7nxmhL1QZbiG/nR6ffFv54EyTnmG4TUM+Rbxi5hA==';const _IH='257b4f8bf379c6afed81d4e78a69eda070dfb3f7387ea56bcd2f30e2fa697b6f';let _src;

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
