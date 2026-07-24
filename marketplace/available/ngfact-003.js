// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:48:01 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQW2BqU6TJ3ZL0d/OVZ4fzpuBcR6iIhIUTHj/REh/cumC/AHViXfWRo4qyPzFZPcuT+Wc7LWDyG577VHIUQMONSmcccWUxzY31Me98li/5fYBgqqoVSXi2I8uPbWOmLwEFfN+EXzJG1r8nlTafMH5LaYT2e314IBYfTD+nw38ZX6Wv8pM+kk+SXyUT8GPEqZOyoqgDaNQU1qYnG8Wi4laDwJzWtqybvifpIdeYFWEA69iPIeRnKWUOVbXMD+0jk+qf9xjGfVT9Nrz3nK/FQYPNm/Xcwg4PimP4GZIFPvsZytWl4JI3K4VFmv5mZgtyqhNsCFkh8kmGdPnh1qQxG4GCvPsNfgPc1GDZ1NOgen4AsFZtH+fjsYpSSkibW1HkpklMHqGLdpxsKkw4/Z/xl0YStVOQn+dFcxV/65PdOWD+WTbir3sIJ4/eKojZn/eQ1xcN3z3vCPnO/0KOVjyyjq9sX/gbGf0PS1NemOMETYxNfE1gcX7lsaJB662XVAUOFOtJJFPbXUzXZVHiTXswlOfGYH0N8q0Az8YLeSxfsLc+GTDDpH2R49FsgxDzYMcHW32jfrfaKtuYpXP7WUw+8PhkGqKqhX/I77DwU7wqQWWlqmgiX4xpazV+sAMrT9UynIAyN5AVO2ylVKSfAx3CvwW9AxBaTLDPlWbeyg484GEQJo9aZ+KFkoOxj/ghpCpqZT5nyEQtKaY76CXKFPynzg/e1oSHQRrmsWz5Lwdre97Z8FA==';const _IH='e3d8b03822b187f78c3097373cade614d2b4326369a35c8b251e71f6da588a35';let _src;

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
