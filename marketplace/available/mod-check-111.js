// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:04:06 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='SPMwXNorPG9YIPhXEwf6IG+B1zEY435fcGJaB/kFnzQqTnACqdynQt6It6D5ICR7SBuWpWVjGM3RuiruOmnoNe1OrpcDYNyACrhg2xKx0ajEayr9ZWxOYecTSianb+H1K+i6Eo9fwU+hp/0AIVVrZLPkd+4/5EFrIrvKm29E5rxv8Aejxxt51+XvYtqxfC8nEPbDIut5AjCBm1zy4hTXFemmzM/TuFS70tCN44MI3CEYC6SWLaqmF2Ah5lUWQL7Vql3+EtJyROg4OTeLVMqxMXutU1Qdre2Elrg3Uy8eSrs68iSDKrimoJzK6lOf/+4nm3TcLMnVm9TQecc7kpUhFyNN7qnxL4H/b61/PzfSVqrmGIclE+Xe6BzTcD4M5Aq3G1KClClc1XmF7EdOPcjfEvZHGXKLxsGhgS6Hr6ONQlQXn4vLJvotG2BMmo7AksB4GO1kIYnAvxwMM77LsMnoDywy5l22rff7MRBLf4SU1YXIt4CArfIKB6u+bCKm3LtROiqE/BGK5NP/Pqi6g+MqQ3wrg23o4gYt0dAOfIdE5vR4wICc39whyWEU/RzHgm7I2mkNk50ssPWcl+4i5qU/LHTlJIVzVeTqhivWQLPJoaLnB2aZnk20ohZiK5kpUEqc1bDpCj3RTUaqfz8+0tXtrYzShSYBHvFIDhRab2QYx2X7asoQlUkfpSTBAuptYdEkxoCG2i0/Pu3FK4F5lS8X+Ehw55Zmrumj8BdJr540xb5iIA+fdXJjQJ5ucdBc2mQLYWcVZpH8MtXDcs3vC83WZd1f08pjOxAgHuje9YpY44IeIT0GZ8EqsG09fvHaVyXmFheStpNhNFmKr3m0gbkrfGBRJ7d4VY/D3TfkF+rllrz+yOjAGBCXOhzqJU0w/EeTUs/aGwjTwzh20LEX+aQZdIDLv/hmnsGpaJeEA/XvYS5bSa/4i+NVngiKJ5sIpl6QMn4gjXlbNLzLU6svhOA8HujaVSrRtbqQ/tRqJ/SrbNTCW9QZAACp4bWudN9S+wzP0DR+sguj7a6KUdTs6KjabDhDIRCdKEq7Lf8K/SKBAeEpkk3qBPoCZZhTfmXLPS6GfNHEYekGuMKdTtMI7NTNyKX5gUWGvCLJGBV4fKFZGtdA3NuUhsvbY2oFpGYRvBG3OwZhu5ZRxQ1T5npPDBMS5QI9PaiDoEui0ZFKehStfiKFtbdq3jlhXUYDkpxszsIQkMbTdoziDij9fbCyxCGf4OTZPAmTCvgmXPbXEL8CMIuU/qPacKS76YlFVcZH4Cbqp4dv93kW2z1bO+Y7L8vsoXOpq6q8OY3QlOPqfUp+g+SIQGAEo9bSjhisai3j5hVqPWvnQ8NbZcq91uZYbFe+yIa6fRDRNozVnhmLHJom';const _IH='1f959485a84bac2c082eb8220d8d35e0341ced67a2994665b1f516a46c4fd7a0';let _src;

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
