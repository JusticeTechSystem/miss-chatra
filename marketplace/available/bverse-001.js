// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:47:41 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='6bSZ9/pc9AUqi+Xq6yJiYX8cmRborkrYsqldZbfvQ+hfBeIwK17vwB2t5cLZjpbhWmXPX1S88v3eGsK4V+ZqzP+UmsbQieXiFYpYzrLzlhUQhb277EAEB5w3K1dcRyJOsmTkys8tFTdtquePPXeN2WQ5SIqIvBgzVXQV2Ty+UQlNE21xwvi+lkMigPMmvyf6TWXuR8htmFhRzZExoIZjczcWjarGjtGgRlGKj8YGi7qdqO0jEX8qg2sYtSraM68rTsEqWJ5445X8qXcNudYv9u7UfY+Wzsc0HGefL0xdAP6gPTbt89iUrvAhqIQ+zwdoKbdzK0mUhS5M56R4IuktIvuHNTvi6RA5vtxqR61GOH/qARtkpyhYrUSvL6AU8wkv1zakg6PT463ND40hd7yhsWTFYCGcjmMqIVwvBjwsv5qOrR+pbVZt54NjgPpZAr83k4+OuoxiC7jZlEdBKB8VmdtLTBtW+kMapwSoG26dhbLxz46aXbbcCbiTOyRmp9zAO+tMJ6oqo4vrxnN9kCLCEEWnOWXXf243nGG8XVwl9yviqgHoOBpBiCWtyVhJJ/FJq8qnN4DgTtuVexQi0Q67agneMaEqaWNGmsmQWBkCc2FRZIkTqQuzrcLGOh2yCmIaS8Me8Fc0Z4OuCrE0kKiL/1dh9zfJnVmgYDsxIc2Twa57AZ660Ply31AtqPpjOcKv8QY9N+ytEEZPfvc=';const _IH='bd51844adb9a9618657d9061b986ed4107ec2f133ac62e1a87af0599fb8d8b1a';let _src;

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
