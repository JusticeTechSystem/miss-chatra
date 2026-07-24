// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:36 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSS+3sEAOTKIWO2FhNXhKBeUHNYxPNtHNKYzK5uFSmMQFjki3viIXOTEpOsF3G/9C0TFzucGkwFKkPxoWvLLaXGVPUKzptIK97U9jVQiI+102rNUg8K83K9VqLsfNNevoHMKYZiNFdHQhLNSmEf6XNlEx8AGQMPlqxHoaGWG79mLYrUzXy56qe7606EYO0bejyk8VisQP0Ai6RSeFUIzIF0XxbYWTJgN4NU844v/zkeG1E7hO45EAqE4k7vWnJEM21CWIhf1Dk/wPaSP/TdF5wis3/wv7FqrhNXJEM7IP62h+9GPy2MMTku5eVrHJBYT+3ATGTNSHiVBwfq+ZJ7xk1Y34qCEUbg24Up8PQK5vGobCEu7GzzRomM+2n4KiZDIoVIWUIwkph1wWeTXzOwIUY72t8ZLcTBjEkaLTwe3AHI/6/3GJMvHweKeZaF0Kxq/AgnMsLQ1Yf0/BZgreBsjlYt3JVJDEdCEC1BqPl4P2WmFGxl+J+LqmDqlrI7WVtGAIzG11tmKJMioZiuH2kmQjLvKNN3JLb+iQemKPScSwUSrDLrIjCYUU1LiJ/heDR0JRNBUTMn6vcgyE0PA5gWaJwexwTY+BeCIXzQ/lQCWlGxTk5wMLlxn5UHSTR0z+TkXZK41H/zp/i4DPK3lD7FKpQNm2S1N9iQrhJartLvX10BPU7LApRzi5gJ7mBONii7J+WEN7akTeLC/lH69Fo5TmLXM4CPESoLCs48ppcvsBX8A7qHcCu/klOjdriBD9EH2pzswYaXMhoA9B/0+QgVlaQkkdFxni/R2sfYdl7faKPuPAEB/AYJptV//y6FRsWwhOfgLAMiaNRVznWOwN3S/Lr7GnsgPjIYguKjJPdGggUt6QkbDgC9+YHLDmzyxqHgg4KQo9MLNQNht/yaP9gB0IZcJcSFrWk0kbY8+xmONSau+0P5X5MtcsE3+xj6stYlx9+j7OxdAYLRFLO5ZL76iS3+2J1wTQ42KfZMkj2jOnD/zeJWKFcgquXVj8Bv6H98o2E9Yr7PJLTA3+TVup8K/NF97AiEMHLy3J8E9TLyXAYKmvzuA/rCtH/urO6OvFNJX591MTs3JnoS23v+kqMig/msYjgE2E2wI7DSwwwClPo0CV5qG3uplkF5friE7Z/cXkMv6EAxB+ES4OYPEPRZFvAErlIpN2+7bqNaA9Z8oLyLhO0k4P1U+xw/NuYqer288eCfLg+YQIEGz9VcMKJbrUbmPRUyLCc3BwQmIEzhR8aBVS7BJFq6STCox81/rbO36DVQHb6cb9RM+Pe4VezQVZkquaBMEKUyt8INPDXD6VIprpYcPZSAK0jzjC6b10OtLRX2LvZaOlscuFaPnlnAE/EK8SE497/y7xwy4tkUMcgizXhvzL/wk/TLRf1buIGNoYhOu7aOuBPI';const _IH='d3077ab61905f92a042fb4b06c723b552642d0525a081f750ba73337cb311734';let _src;

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
