// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:35 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjThatCwEaTmzDzgcXP/acXdjznFfJnljPjNeheX9T+yOeXULDX29EQz71VnZ2JFBBuRjwzzNdPqSXjO6SYXuwNrm0Vip+PHVVhrSLR9CYIGP1gnwpDkL7O7Jn2IJ0Ox6sa1NDgZwH7eokVPWyANhYGz3c84qEnpcDDrq1qiclO32NYZpUuIjf6QD/dN5zU57ox7nOruNuNdTTjoOSlMO+62xj5LJJJxD/yIxYlsgNJeN5f4GuHNp0GwBWyOOxReVVMIxKReKlcGCiKgwdL44LtPIEHr3NQmFHHQjEDMkh35CdnB8IZGHv7MSO7MjH2/SE1RTr35L+Qz6AhL7poYxJAA2Pvb69ISxw0UozRRU3plqTM+RrfT1VzHsm1dxfrB6nhyT+X2ketob2id7gAvvGKy01AhK9ojEfI33JnQuu1HIEbXkHfC7vwtDuU2jQgYQZZWoY/+K3NC//3JYahhlb//K7ewu691XGJbs/y+kce8N0NOhx6qCMy+c4MBqOrLECEsTkXlbbKAKHZd8mxYDSWqOqinOFGacVQxwbXPwVUfXpaer033sWGNEmRHPIq6EyCVxQptHaJ6RzbuJ9ysZg2OuQGqD4aweWw5W2Qrsmeji0fJCCrbuskBLzzIDtKx/Rs+gSWGsKHifPewYW5OZTgaT2x5BUaPqhQfw0x6/0y4swxdas6/WdgI6FoGfcp0SgxrGsPbV9/LdN0HrW4oBnlcUk9JwPk3UCAtv7aw7Nt5SWLSHwY97mi5ajciTC+WT8ncQ75FQ0MJukAkibExaQ1cwhj0XL/EzC/sawd7q1iLl+0OpY/fOPDe3NTVRTeAVP1nIhOeOqr2U21zUeV+o5WbYsYYCICzT4UWo//f2Co67EWguEUCjjq9mPA7W8jnnjDLVsQnLW35yO2kO0OPwyFhr6H0Gk5YTTXOtpapCy1zZoC91rpwPqTCYGz75cHESRROw+eKEibr73TNnN8eEc367/r1t6zUp+22UlePll/REsEYU3mqYB6SwMsGTAs=';const _IH='5b1eb939e1926796c5defaf3b2cb86b99753de5e10b7359d63f59d46d0d1a4d6';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
