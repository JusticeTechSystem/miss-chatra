// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:21 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='nSWXAovAy3WMinGuC57q2xIh8ATuE7aJxFv1I3ut+oLMfgek/mrZwb5PomyRUig9oY05r0o7HclON7cc50wwobVUvEFFhlHZ3BggqC7u4z9rmrDraQpMbHVcZJiLUwMYE6j0aIbsjt65W9nOlrwZ5dMk3Ww/06BCfvacYEEuF8bO8d2b7D4IlKaiUr59ordYUGzf7ILZJTp4MBfL2K6/AKhKkO6yP9v7qZNYtKGrLiq/yA+gUW3O+7q9qGaSbxkZUC8cCpXYDqTLP9zg6zDoHX+kQpAleSqUTmlH3VqdAZTa/jgTbEhesrkQkWW4EHVhb7K4kJ3Rhz0FXFU9crn7axitqr+fYKPVUNAuhk2YKJYfQ+I1r6CuflANucT7BQ8BpMCDZZNuSSvCyHDp1FTdaG3XMLdhdyJTuNYDdI13GefeDQj/yDt4JG5lLOQthyzbVewoO0pw4K+HEhDUUxwlO9rv3fzpzENLKWtwU4yXrHc+qCzokJJP1OzMULI79LellIRbMhMlviHJOKnZBt1dzW2anTMcLB/JtmBc2ZZhYsjQqPw/3XZTQb0976X+L+T7vI5V/zISEvvL1+5rVNmdDWh7M+jGwsMaQ9QjzWOIMcKsDMnYL7Qx4EWXRE3Y+PEY6vSJUBkvrhdovdPeKn7x2hWw3jwIITVSJXOapYGdeHdjkbk62SKoS3ZypvFR/ERuBpSvygRwxc+5NROkTSGn2Ln+bZTj';const _IH='33ec138af9a5522fb3e05768e97c9daac9237a3c01ca29b32aa95b08742fb45e';let _src;

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
