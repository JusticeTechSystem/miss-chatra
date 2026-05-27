// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:03:51 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='B+ECOysasJJi934H4kEvYGKUR3yqBSjShGNYerWyPlgNp3g1N3qFODCpsWpdA4ecTe/CkO/AYuDIe7U0pUOXkvW6eQx1KPGlg3T5w8v4uETovjUy6Mzx4SfmnN76Ot0SKVTehomN/HaKaWvd2SsMh9QNewcllpIhAnOI+zM6wL+6SiDkoeVpPMZL5Pdx6PoLr8+qvsKcCzUQnJgwtXA970aVgvegUVXCPKKo3Jt+rMoYnQe1+3xb743iWpll0aSYBFoQ2YDicLnKtLuhfpcft1gLn8GaO58QUUeBbcWrpckrv+cuRT+VDaypZqGlppeFpz7KuiTgK0zmz/YmMkM3Muww754hX3+3NDuf9R4+OPsz7s8Y9NLSuvG9E0fZWqIu59jWtgPl5ovePz7vHs1J7xeUaAh8FB2O2LXWt6wgx3+iXVvKuO+oaGhDrPb611lpNID517Bw8bUw1iYUKSwgEwd+TdaLYA3pb3/qvmAis3jLW4JVmOwgUmZtOUqQjrWo3wH6m549+YLGUl90Bavae+huse968X0QlPQy3+fKr1KLhmMCr1UVv0QlFfhS4s8YzU7k5rSoLY2XXjj63QCXTE7JDqSNr2T/ic9K1M+XGlT/R0EXDNvYm4Mw50X1iuXJmfPqCmpH6TCOO16GmG3wcGJAMzybZGOyk8X3h2aKeDpiwO9vXiOcbfH1MAKzsw5ddel5MftqFquJh3CW/7vBgNkSD8PkUaHST0IqDBed21rb19g+EhLIWL8cwpL3dhAgAlAGGfhpuxyUk1iSFT8djKDz4p4IFKUCSNXtUNDobt7aNKd9UN1RbTrC2SVmeXxDHN3Am35pg5QlvXPL+eifKkXmF2af1dJYJnGpYXxlqWlY0pM8v/kYuIQApLPBk1RkM5/2X1JaPZE739SABmw0H9e+wuDoWAdxb9Qp2hNjXZNtXWH+35NKgAqBIRfJh1qkE3wuJAiW4klmoOhW6sJyvjotjvP7gmUxFdFimHlwmN3m2fDyQt+h+xMGfB9Ybem81sXROBgLsfEy3WC62yDmFJSBCCG+C3osW01kX0writ1ChGpTCBLzoVgSAe3zy7r5hfWo3CguyfriqPcQ979DLQgaNSv7QQsHGmSylVuClMRoN6ISPQnZpOs8U36wBHkAP+Y7OhSgnxWqTg77c7ereJs73+Uf+3ghBeqwpRtzGfcuozMKwnX7qUWu2NNRvvCfCQDVCStbrI1LQ6Jz5nhP/goFyMawyFqOwSwJW3h47hFniqiYahv+V2gZSW9zlTdHStgw9K9vcsXy6qdtrWOud4q4JkNHLH6B+eCly7Iwv6vbxtzEmMqUoodecYfMAJfhXjZoyVJ9A2jYc+Udd/0DyoLX80G8wYuuig6xNJGX';const _IH='c174fef923cefb91d3c65e8658f513bd67f0815ba52ca23988368e749b144946';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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
