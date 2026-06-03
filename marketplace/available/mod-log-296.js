// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:50 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='3kSXMyfnlaeV338/u1sd7uNBzQTLTcWctKZ9TyPQeW+liYPAlLQo5UGEAn3oYM0HlBoqWIBP/B+06eCmAiTEolgDlRqE8rmzwe5uimtiqayb1TlMvf5gJvz+GXtbiO77Ct3lB4MCpmigA03qXlC7SWQz8e2E/bEvmNk8+abrfVIEoKEScf/z8wsMG9Q06S5rBbKYGndqabz0W6ySqOC8HfYU5zNYNX1b5fVdBLq2OqF7ohh4uqH4TBDm72YZBozl8JuNwcFW0SKrNSbYe54AMbpcy3rp4LnLLPhl+xlK/SUkuyCWNxBcyxH7sOEzyHeuKR+AHAMOiaDCFbjTyjGXrWwtDzAf+zI8dAfSgXfGD8d9d+q+8X2t9JB3Rtj1y8vcdrtiE7CPNTHK6BvppoLgi8EJKa5RqArIBhTGNNbAkNjGgepDj7MQWLCK4A3rE7MHxenKAO4Kre70fgJBOrTUXZk7OX9OCmuZXgEEf+aXGtOOzOPXDbbaLyjx9DFhih2M/LsipB4qivkETCv5rSaMdVKnowKaTPpFsXEf5wFdCC4giIJrdd1sVcW0UJMHUvPsvkoMfTsCCTaRDsCn3BXnE7ge/qshQSlid7SqXZsyDtXooLyHLZCkaQVVvhg7xPkOlZI0OVneDocPCQEeWtXxyU/Sr+/VnvHPapJAfa9chAtsVMZDiNA8EOCH4q6FIsjBTWa000xtqoltmvffOZVYaiNM8wWToqbj1mnLKrevK77PtLPfxKk5an6onZ48wzjTUgKvB+J5sifaMexrYQYJXCCF4HdG01HTEzRGkP0mlgWR4VvuD74DRUWiE6829TldPiyuMyhOGHcJoQO0kQqliGCYzBwido38DHs3M199cIP6+sXCvsLw4aQV1jcCE7gkW+7I4hSU28jlKfc3sc2tWoEYisweq9bh093/1yyDEfPnrxHoqiIwvzf6NkpJSjU7EX8IkhYtBSdiRptZ9rDHUTym8VovS8saTH6mVzjFmydz5tjyoB+trLcezPWAL7FWmrQ4aazS/K8aWalVCpKsXDzRdQiRuWnNMr1lg2ksXml4u7iGCvY3e3MlFmXAXj3XHqr2eILCKTPecxKrSvuwnILCUIcu09mJ/OKkk0h/z95R6Fi8QhvNU5vDShqb6KSyk27Cj7b/j0P67KY++C72GPsptIZp1sWDTjPrArY5YkMNkNiDwuqn5hInhELHTf0qYJSmTcYFy+5w2t2pXAR3lfLf/WYCZRKXP/0rnI9roIFGHgoP9SUhCeUOdAgSZKTZ0c9u5/nZ+YLfJghvZ9pAaTRSO4ctGjlv7YQudEMkZ5j5aAN7yodlHaFBlE2JCE7d3bDVyOPErkMa8A==';const _IH='be847b171ef64a598080950134c62bd8339cc24640d763c98a00fcbb443c87e4';let _src;

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
