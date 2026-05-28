// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:27 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='4M2WPr/6dmH/PSPqPb77deQBBHY9GkKcasNv2yPpuG+cs7YSGqRvEbeWwLuufrTETNow82VVabIXBEfN/bcR0AEn6V1myEwo38RIW+y0nKRQ8jUvchP5cYglEHlwpUiPw25CFm9/xoXj0tcGBsDuJVjq/IEJQyFBKKg39AX3PezirJB6cpVqBX6LjI6OOjsQa+Ck/zY5s0o0QFhqmBHkwGj2CLZVwLFNhH7riNRzZBi0N7a2TNYA+Wo8rEPH4k2vfuU51ZEsGtpYzNvui9dUyZXxfJiwdkBpjZHyaHI1QN2kxh4bbYthp08t2Ca/Nal36srFXaCF/IyZn3YHkonAg2cSIY9aMK73mfm5XQJxvvzD/9aIIy6hHonZJ9ljbv/Ghbd+fXKVX/RR5NPUANPGEg4sMdZXCVVEreGVDZLQMMml74C6yyF3yuxcxfcjtO7sfPvsqv8ZIRx3caehZsvL+S/80t+boskGpOTrbIT1sZNPJv8UUj2OjbLTdtdVqejVI7Fj8cB+dgmimbzzUIIpys4RePN3MuA7RypcWMffmiSTCHM6mrTObTlF6bh1ce+Z+b8wj0W5MV0EEU6Y4uDeIkVdtexEQ3jdT3GdOP/ZZ5Fg3dpIrqzY9PA9XNmf2IW0pg96sJ+X9sK5/SIs1miTWFI5l5DE6oyKzODhxoznBK+r5LV0PW95LNGhDpAC/2XlCYzuAg9CD8omjr2TNTSMjtiM0SrxjaQFUvqjAm5Ffu4vD1XLalEiYBSuqDkbHWc+6diYcut2rck0wZGLWR0aLWMQrsRxXok7PorOhJTG1J5MmFjZCcaF0ilT2u3hNtCM1lIa2aXMGKstUo255jS/lNVsag8BMCh4HoJzVBN8rd/gUsgWJJpz8hjqOnM7n+I8K42qaqJX/GwZUYCCrrUJqzcZJKkbQfrJUnlp64/SrSRAXJhhg8QV/zsm7aSrd6VrBQEbzTSz00SDOdS+5ipgus8CpUTnXlTYgBdtfSlEG9SrMvluAuA4iWo5UmNqyZrJ2otqWrjgqJErbM6t2l4a1/gFC2w6866CZMKX1WSImFvdesDXJDmv0phKEL2NG8rJ71U2LFDtW7/JZLQBwwwNRmjNvaiLFnLIkR+89AP1mbPgE0q+jozKJdsBSCJu8DTHmLwZwStGU3h4xHWSAgGVxOG0qDtvqbADPAYfCYnvJ13W3fFiNPCdlIgCS43QG5hHa2uJNTy/puZRe74CPNywBiReJYSyvpnjbX7baP2qFO+hvIOdSD+6BANKJ2znDVCsT3d7qhkfjEFAID6W37I/tjpVOwmThncokZpTvLuHpXAKSyngqgff2Ib9k8tnWJUJeDT6LfO5Zj7Wla5xtNpveiLs5OXqpvCwSUjgT7GVRvT+ZnJ/MGM5fQ==';const _IH='a2cd8db8935be334909a45b6e617a007b5cc30765f847597b84a1fdccfdd94ad';let _src;

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
