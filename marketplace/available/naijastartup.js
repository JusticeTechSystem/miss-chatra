// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:19 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='bMWiU6kBiQ+vMTc/2ekzXZOBwnJQqb3gWJE6qPsJ7ewQhhuguju32POYzE3wDhHSD9Zn4+sEbjWFNq1MH7faC/A4FyYIqJYoHPvV0lNM89ogI7G8Ond4+ewNGgEBCNV5lYWSP5nwH0uqT5FCJwAT+5dxyyu9/5YnvG3yIYB9j68Jq26s0MKY4dmbki1p7cBNLpm8iEV9son/BlZ8rhbc5+tD1hu4wog9Eu5zBshDFPziljKfdA54o39lyrDuX5ArC1LD3qrzNTVfYjh2dMs1JjKMfd6bv85gikRZIWTIjrujdlZf/fCHtATYqV2tqSYi/xyHaZSZZGYD6kgqKa8q3UJyDjgDz7NEnY4/dp6DxtBvWH+1Jrjyob90DkYDXzVyPB/PWnUSRug47KzYk+BYlZMehg/Cde4PVA579dA557DplA8n9TnF8UymqFnWQYw3g5F/q7SUUn/Zjf4Ne+lHIWHt6J+bdgQMJvpgDn1lG+fPwH74HLLF/+dYsqOkBj+PpoMEuMgXb0jg4LVKcuyBP3twFH7cHL51pEn0XPanCqCW2fMIDyUHe4BI5Yx5AMViAiCqxTKEwO/CJSR98kWfyfiB12EL1aXPFZILAsakIW7AtkjMveEIP14JRnxQ1Jd4VMqd64nvv+4xcEzy0gfZLGjx5jNelq9kvXigqb4GSVoDq6Zt3XDlYEkmbsAbGuCuu+fBaei6vubNNItppNM3UOLhdCuewgdYmituZN4dtwivHlf9Vefe1U29VirP2UM1P6wT5m8Xp65+Ew4R3VLadDceUT+vtFcLsPwxa82woXbeR2MfEyWLFTLl0XHR8pZa9p8ZgTGd2uScy4cAEJp04SFgIg4PILI56iUNfb6XU8s+CTFCjX2crMmR1H15wvyQ2omagWvtFe7JcDyhIyC6ykqxUS1Plc9JaOI0EgA4FJUXAM6wfgMrZYZbmoskkBSBCllupc2uGUWse3J5kGktBuNfDk1LdyH65evLp3TCuFK4i9Ww1qjVa5TnOjIJCXBRNtFtH2fkYuOErA93dvOI/ajVVrP1ErjtUeJYzvMonnw0seKMmphkhVb8aGUMok/g4M22Qm9LS4eniTKJsso4pPrKynH2p7NxXmLbybIGyZQPOvdzcNXVcuo+H0WR1/KPh/7GxRa15kM0P0oE6ggBTkoFThjUbzfQpIIhS5FybZkRR91dArpD1OFu427XOCkEHusUaGpG';const _IH='b8909ffe09e660e493be7ff3cfc6fa9697cc8e58eb74c220510d69624deca91a';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
