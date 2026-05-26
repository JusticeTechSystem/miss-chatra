// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:28:40 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='r1z7s/yzAbqytzpF3ZgKp1LKn2da3i+oCVGFt9XGD+JXOJytvNLD0Q7Nndtnd5jHZYi4FGVuN90/UChm2NgaXpy/wFirp9sNA7vA84DcnSS15SKtrHkuDR0J3EVcH5ef6P/z0vzqjZEoGiPxNJzWlaFSBVM47Xr9f3mzvsZCHnQPnARsFo6F3SSuSw4KQosNqYJtZVQSUjI5xelTnmyUFLfOUup7FML0QKwTdwsLBPDuQvLKL9lsyNR4DChZJt0IluJyb5+FP3mcXfNivukGWcQjl8fWMkxb9eVpP0LRoy7gtj5QruArbKlZztwG/wmgqpzzB3fDrVH3hFWTz25q4KoklJefkJGgrAdcAbW/NOWT1OEqn/CNlQ0sKDxdqDCAPT/ll1i+/bDRpD3Rne/GMKD/RMNRgWHlxdxzmTu4EmrZbg1fq4b6wkO3NYnFOnm9speWD5cYSXiZdt/g0sE182CHtHTNW9rSMeMddIo/KeSZ9HOBpgpc+P85YXXI42E9HfVLnBlppwcE6Wwj1Q0+R+C9tx9E70Te0h9AkbNbl9Atuk+iFEKrWtDnF+jxOyAXAtE8sLlqMXYYT6O5DE3pS60rtHh8u9KkX/H2AvcO0cpAStWn+kV9CmhlpREI7EAHon6DTeSehqKkdwt1LGWf0lby2O9wNwMwrGMmEzNemKbPUwqkeIZLK/Y98iOUJSJXOOs0m/HQhKBWk73ahD2iUjU792Qfm8FvkLMbG+LIBB1Mc9CwWmG5Kd5BOOvQCOBgrmgvzIfxjDriQuf7mn1gnPsGqeTur6SaEroTlJY8sL073T+ADr5DocwcQJLIMhB4rgFmw7xajkr0vTjMq4YtbRuXkMRWHsCvImRrRFoEfh5Ylf9gSg7BGoFUd3R8AWds8PqhtLOrMYFYpLh0V/hDvQ/RCVBVGgLp0W6/Qtj8Bd8Ifhq2m+rtcLXyuU5YxybT7Xb9+RC+nuRbXpk/5mH/Bys9MoP1nSBHLoBzUbyteyCoOK6g4Vjck8jXitw6umWkIyJ95Yph2LM82XOC9mAwLwEXpXl3mqrwGOj3Zb2qOqKArCk+BUYZJjSr1u9/DaoXvRZVTLqeMS721bHOVfRTNkBzt64We4WGwb9TuRzSMGv74Ja7SpomifluRjLK5OsllP+TrNP/eHgVNQipXWNy3dywVls+UeGYqD26Xyc1DzpeQ6Fu3B/Sk35oemRfBpqPERuq+/rgDKKUO88eGDXADE1fIsKfpDt3E0YfpmyFjNMn+FxTOG8FxIqHkqpLqDZjoEYz4bHZ0z6LJdm6G/vTGnMMah3iThRavlFBhkczMxe8YzDfiHdgoLPc8II8x/Uv+uOJ7D7Qd3dUxQ==';const _IH='5e17998515bdaa0cb9c3c20e4bfb358200120707d4108571a72e20a1c479ff4f';let _src;

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
