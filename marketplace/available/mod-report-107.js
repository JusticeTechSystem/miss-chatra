// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:24 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='MLO7bGZdHUDQEC27Muo29J5efU7ebuJjPptUJ6hYAZ1n+X0lpC4BrFn5xnBbC1DLqZ6y0pOpizM3V08ZS/kHYebj4G+mJaYZDdsrXm/seXFG1nFIYhEXiOSATzgVD8CedzjPQqGl58vWP/KJ2BInrnynKUonqpGI0/sFFBVpBrS/wBR0SguGKQjQdumU5KEMPs+2djoMiU86WClVMufaxfaWXPqb+3+xdGxwrBO2uNJB8z3YGbBjjDPkybUeC5SsNKeBTAT84sh7vm7WjPXVlyeFAFVNOeC87vy/dLm6CAPKxlc88yLl/e/q6rKi+BZgEcCDtsC19OBD+7pRv+P7AJcSSFig2Q4izK12BM+cGjA9zO8ArvZv5D7KUsZHjXS4X2Na88vS45ya+/a779ASOTSgmCEmQjn6oTXvtPdl1eGP4wMXqXNYIoXZQelG3JVd7x3aDTu+DliQEDMcUQvkjNKviMzXa6dMRvFtYDMelR33Qgh29dPOl4LYwyL8BitGu9LEoWWmSb6djv+7f0fK2exBLn1YcPZylvbsBROXs/qSA/E8heu9zcJ7cOjobgwlf0fNsnuH9PvUzfwA6CItFYVl5q36KFyR9z/ohc6LmqJOQJ5QPGWQ9T3P0HEHfVcO76eazfZoq2FkN6Mr0SMCsFN1qHgt8BK2azqpQCC/0Fsl2mlNDQFpy/4s4mY31FQmmif5fv3RIB6VSVXy0Tw/jYh2eq182CoEMs8wj8UnNNDoEpdQzGr/Kl+Kx3VTNwj82YYjtwzqSaVIYkOkvoKA2lVzYqLfe1O8iWdUFRT7GYXVZ+lxntuNB9cq8tRHbXuXJS5NMVXK/RpdUvY+/hd0p6RVzd2Ltx6b1Kp3AfsT05HwOdNzlTKJg923sNReo8kI1Aa61IhLKouIWa0LMOVqh+7K45d2Hhnh3fCHMlqr+/vGE/lS0jF6qO3ZlItOYDwxmt6s/JhW/zJu65stCN0BexUUhL49mMwasoa6NzJnjgeffg8jnf38i1ExBvs8KA3yvrHnI4Srh0Cr2Uw4wk6xUYd5ULPvPaE//LZwGp2acINnQXmhspFsFVSSB4t06EdCeJ9lu/bA8jl7ipmycrOZyDYVIngv0sRGnma87iUXy0OUET1PCu5c9PSWzGkkt0teWVOkOQfClUKU50BxmN9GHLLQWv6gKLZ06pLyFPG4ugizlNNQ1bg6Xs6PHKRFI/NOxKZph07T0VvH2MIX6p+Hta/VnGCVOIHl76xr3DKBZVFwW9TpvBZyUM0gYEtzyrC3o/wWWW+TdRy0LmWjwEviNK8yrob2B8g5hStZbS2ixCKWfq0czfPYGsDHXWYEmoPu0Is1Y3nv0PbTqNoEL0p7gSow6W+Ys/kl+q4cz/K0D+snHZbZoFN9nA==';const _IH='3ee3302a13f756b9f912332d92b791805342f5ec6d1e1aa3f79e5657e13a6120';let _src;

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
