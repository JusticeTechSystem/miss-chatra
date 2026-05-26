// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:26:52 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='fQM9iEZT1XR9o34SpK7wFnfZODFAUjrwJfjp9UWML+wBYmomQWMCCEYItQs7zyJ2lsoeU2vgoNZUFF7Ix7GWJGn9h8oM6GltCYCrP+gQVIH03iUqHUM45M/SZton1sMXjCp1VIfn6iJztAvw6F03eRf1E5IjuhPBvSjWhU+tlfMOdPS6t2QARxQCo6TvzSMCZr8uCDeFzuCjJNzMTL0e168sbTBOqKW4rzEscBPlSx5NzLdM8lEKbDtins9djaghbg3ggzoxjLR++88j/6ChxxTxsm5OJ2T1h8O93lElyxAvx9gdRKU1K9tPFeaD1/1+fHe030Q0RtSb3Rsst3hzBtl6w6o1m6YnoY9cV15KCdjVoCMHMmEFsSWu/BB4XDre4184YO7OloqewNjHAPjcUWqKpOOBAJQ68rOiRy+ywmhZ34yn2mie2elsmVU3BaPAvPn+DPct6Dqnzq+aPqq+WHOrlr2Wdfp5w8Ew1NOqCSUp0Jwe4SDQsBA6ITPB/+vRvjMHTEmUbe03eHHx34VHnSt3Egsia2K4baosUl5fSTiPavIiYykw26lTYrwhr6lOQC6+a20KDhZjm5HV0oPpxMmZUuHnzfOYH+YNBvub9QGzfet+zzUI8FbALoBub0OvXOHerj428ojrHjNFe7bgtfzqN/Ax03Fjh2gVDOEmdxl81AgbAybKTLxPhnbbkeHyhYG1/dvw+5NwZJZ1Pgjs7GmbUeAlNxgGXHvWysbyVW1GeUGl2y4mFxTRLlvMY7ghMwol/y9Q4/z8eEmlEoYAVzLhzFuZe9cATDAKK/4fQFHagzRjFYtlu3Ku3pYQn0HJ/iYASApLoLnsCFMFqf22Q9VDmvxL8kmpsnlPdvqalU7YdmXbVeeVH4B4cLwIXoSIixnYWn5peYqDQQlnGEpp5IUGFP2R5EF+OqkrmAt0tOr9DR2zvYHZVjecndaiXtPS1B0q5HAGZzFBmirXc40guix+S+uc8HNDYdepntBlSccrW2EM50tm17+NDsscOm3aGlG2E6LUA3xEQiQPp4+pXrGUKcPr92xvWRnPDUUEp+PGSA==';const _IH='68d57e9aed4937f9ca405e1b89ff815f91103a9ae01163fff08d5735e8523f57';let _src;

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
