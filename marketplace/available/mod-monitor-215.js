// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:17 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='tWa9UUgqpMVXYin4w/o+UyXNsOs/3GJMa832saRjvC7vtges+/E5s+kDT1PRFQpIZln8AMMXFlquQA3zEnApRAHGJabnfaRo9I6SBTxtcEZdSs5S8uZP5pe5rKWJW7SkrNJSBXtK6JQ2I0ZVGio8mP84roWjTu9LC9sGOo4/23MI7ZVP26dotW4+1hEwGYfneL6BV+80MEEsDtg7qbC4GNb2nR4e+bTlnzMgyzNcbEDzunqKhUVnl0ChT5ZVD+x63o/iQ+lRBBa5gfiTN32lkWEN6tfoW7m13QYA2TdwXFMrb60NcBDae/GGVXNDqAfYP+81aOhzJ9IwHo/V3oEF2kqlHIv7HJeL89n2tlK2qqru+iJ8/dkp2y2Zsc5EHUrDTaBVOCSQQqRFbMfL/BCKhB7/wckHfwNL5ZUuNGiQcbQRiXBJn68uOIzoqgit9k+FKYJWUi1e0D2z7Xa1zi4M76JWtMg8NiNxgbMoSICpM4350Pn9DIHKoytoB+bvCtK5LL6l251pME5bbDr0+vnSaofwmXqz7lZDCLkw4Igj6FWYBvI7Q15QIy8mj0+UEM7xnqkUkZ5FfOP7NyWQZvTe/fHSNerhO5Rsdsd4K55U29ZKsGwd4qSKVRI9khLSSYpOV3wMPJtmyqMitnN7FQWAMudJ1PHHbZS2RsO0wVcFcq+Tscth7Y5pdB8l2ut/YvqDxtPDkWHabumhA3ycQAmRuz36KPMiSt/kLnCroqmDznZnDOPDOT3rOE2FiMq/cbb4nNANgisnkMC8d7xaqFvmXEHQcaIxxruw3vr4dGljxLkjKqxw4RkPxWcjq51mOP7L4ymwYx/jpTErHatKb4ANodDhw6Ky7U1itGDuwba6P28tgwLqHTR71+a55IXBTyTmgiRgl2leH2kJUAAy34rHXAlOCWXxvulWUeuLtzFZQNoulJ+eSxrbVjCUVA+9FETscMd4rnKgDBiYNgfxmpJOnOK2haLhZZhcxV26VdbSprCnkkyCeZWdpXNUrIPHsYZ+ahKBFMShkJqaBoUZdQDvFS0ZsbGIyNwckJMfIVq9136FtmZewtFwGiIOoArGCgcwYBJwyhjOp06TIR8OMkRFWM/i1F4K1oqJvGS/D+VMqSIph+9c7CCflnHbaBAQExfvRnKVRpo3anr7Yp32b+kUOPidE8ZX3M126xX0zTG2xKORqUBWdN5PjUocUORg0NOxlQi2ucAHW/lfROaSwZfUYbiegLHKmVc1zK+3+KFPjwGFiEpHg3H2PsZA5Iux7ck87OuDT/0MHw4i1hjSoHVKr4Go+Z+tP+T+bk9NNlpx8FMCLN0WZzgx3vUiBxbvvV6ciq7hfewj/FMP/rWwWPpwqNCiodereEkaGqhufCPx+hGgWlWqbUlTG70u77/nVDFXlp4=';const _IH='35b5cc668138240afd16575970bc0f200dd50ae50036b1bd31706dd26e505791';let _src;

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
