// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:40 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQr8veKFKDlcBOtcwxI+bBAyuAIm/0uEFFf+JAh6OYz+7CGWEYBSagjfB28Z4Je0OeuWdP/jY+j8IDDE4p42On+KNRpjrauIKuRIePkCgHjMAZnV/FpJCzriUYbzx1CQfIeaQqk7yXg8gUofjGJmob3slKt7mdeGz2H2PUcr+NtxJDR0yeQUKU3g7xu24sBqB7HehRw4r7LKUwUR463Wkbuq5Eppbd49F9TBfAHO8ShcGf+YOZCRRJ+d5I322gysrThT47lS4oO8m9ADJZZE3YYKI6nLRt/JnoYxtj4vFjG7DAF8kPVQdQbezhcPKYSZqjqPr2h09QrbmY21CNYe5UfD7giXhLU4GfcaXcHZqIdrdCz1rfWAZzyMOsVhVHiO58F8nvGGdEAzAMT5jyNcYxLS8vb2tl0ghuyHZl/0FHNP2rOjjqiNWe6GG4zftmbIsTMBMzJrzzIHux95abX3sSsOvQzZjbM6cZD+mBWPuJsJdTB4l4W9Yv4HtL40cDDJ3UewPTImJ8g4J4LLqVOizfKyAdK7mZFFtIk5NeN/NcYtqvOUjnL9YlXN2wQZDQr5TIfNUmoRSVaM5M+9lbDEKIolPVgsxMrEkYPLZzX2Yimbfswp1pt3BXIulMnWIRqQDslX/GRsqe9IDeoV1P/jPbha8F2W6IFumWemG1lzdwgcC9mJ1j8EwGTDfRbLYIcQkOR6NeS4/ZsL6x9S91yZoZoDceQM5tqQt5oGo9r9xjbMsvD03LdLIBcEZRND504eeHKOUJZpBRA+HF9//xN9oiVA9A/dyO1/laMxXW8qp/I/GL9IwrPIRqeLoi+AlINOPOBvbuLlatDdW/ICR6lhjpsWCFY1StvgN3GZoJQCCL+r+BvLOE1VKUub3M90HWfBghTrBdBj9c+JLKKtyZeFoaRAsEphvN92uBxLuS8qzqvjB5wV6PDe2zc/1jVJdZylni9sJSWFctlQt+bzhPFnLqb/HHHWCthGu+TlfiyxvAqBs1NY55J9loGjnKMASc4ldwHuQ2pXeEV4Z+lOKEvzBGIG+6c26q2vB2/jAg/ks641axJ89ZFDHmRLkC7X+aOMYUobNCRpFxHMRpX1hFn/I7mKYBbfeoqyiLKPC7EEDj1/U6y/8xSiKKPJ/Q3T/IDBJiBRWIkBAgtfGEAagovPV9mg0oWekz+3uZG56x+4Iozr5p8/eDtmNMlNYEsSv8K/+nA6HwEsTSaWXyTAjFrW3qJR8QQogK2/M5klRblLjwedAE1mZ3T9355fj75idS1V/vjWEuhDxJJdWFYKsWXUQPDJ8yy/soZ0Pm6ZxNgLcEUfEJcNjZh4RyoU58QWkFa5ml+LkFqdtDLuY5f/SM2t2dES3l0daC+CwXlyx6onS+hsToPAPBH97I3pmg+aqq/5MCAwZGcefJvWdzdiow=';const _IH='659110530c2f2099da4c472c4b465ee20116e798f75533f3f59c54b8ff87c970';let _src;

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
