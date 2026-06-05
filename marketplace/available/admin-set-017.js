// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:53 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Z+YhyoSXJH4FOfbxdA4q4sD6EkcKZyx9f6fP2IlFj/R1l7SNutdemOMq48b9DmKS4IBpzt9Nbzjl1/0WOYp6ZwKPMB+O6Khz6y+LQpsSsZt72BxvYv59HgZHau6aztrlP/h/MjX2pp1UKkRxhyNG1laUaoK4DPkahPoja1PTRWC8i0VLsg5HiPVsAOlY8Td5vpPfofl/o2CmDmkh0NF2hzw9MCqwkXpilmFP8IFM0hEOJhfQVJpE5wKsXJzrSymvRnaXIVJOE9lwjlfcHn4/K0tNR7ZwF3Ls5EngEmlKFJmOYQ5RI9oi1Rvd4VB42HMO0ech1DG5KR2hbxRRWbQ2iH/JwyITUaLXbKPy37dWl2FxMnG/fGA9yO0YOAV+1/r13yIkID6NW7JYBHIpW5vr7ZTZucJsV4ioIXoxMSjRoexDsSEUo+XTBfQEUlnWt/O/rL+/W/GibwD4pBLM1kcUNOhffzUy+L+eBE4vD1PpZhp4YdvL1X2FSCI+N1moQ3U/A8DsLiZJ9fuCS1UIcj0t1ziVuL16qmKei2Pq8zNpDIhhJRwNJQeM6M8tatRMS7V7YtqnMeD53NrzHJjodFYNZjVJUqkTQaoC9hoYqveYL+qkc0FQd7HO2a9uwYRrQQX35lRRlJ0SyKyxstaXwRw+SC7cMMWqCirTh/qGeBJtgvhZ++m8mOlb0BNgChjBdEZ2XRn0ZlmDtxMPIs/OnlllbDZmiEWe7jTbqX5p3Syzpqtswm9odwCfCPL0FTRh0HJLp1epEFF/W8xCIvV8D1gs3lWzgNYE4hLHYqz+vmWbsz/2tElknDFIRspDnP56UeTjS2uKW48z3GmgWY5Hg5ypb57gu5PelrT51bHTWTB5SL9jEUeE/8/TCI8vLW8414B53EpMaRQiw/cLATqS5iHJ/jILhxw5WRbNIwBOhOHgeddqzUTvidI/FxtwFSJgEmu5bxzSdONNPlvdzccbqIPuFqXNewn/APPf';const _IH='d187118d2004dd6f26dfa7f4ec2fc3a52d58e6699a318537d10365e4aaeb81f5';let _src;

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
