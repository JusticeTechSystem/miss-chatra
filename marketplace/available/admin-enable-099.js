// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:15 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRx+lUf9wkKFJ0Pau4YH6D1qPflSGsGBILlL+c9uE/Nbnpip1kRjiVNjMy2Wf0PO7fA5Ecr1Un1Gwl8VFvfH/BE1VIif/TQwaGOBPTb6BhKSLca6L5VC11JKNoERIYOcWUQFSBh7IOB6VnEue/APgD5dxReOdgSfY+hFq0vJFdUOZJetGUJ+6J0d3AO7umMELaUfBK6W52cxoikLS+fpmcGr6GlqQ7nbcVggbNPGbPX8HTA+d446XeTuylmFiLEp7le3oUVje6laSR+2dGrt7pcO8fJDnt0cS+mxfShmmwzKWs8QTowQ6PMQs/HjIysTrRmu6lBcYzBQjJYa9GBCBnRftPUd8eWY+ZJ6OrE177tTzKh9+rN3sMmF5CxG0agBdZ5FehkWmXhzWv5AO7OsFJrhhuvKORfqa2X/BAMyUoKKzIkpxNbtCaHpl7iGYzhnSpvhVPHcs0MMG2BP9Z6RrVxLH5kxDVqW73dOWmHxlUcAg7xyvkP467c/WQEX5NjQlC7zx33B8T1Gd9kaHpjt09IS51dUIhv1B7j5oQJTMpOOxwzZKHd2tYEZ2KlwEQDda8TAvUozYZovN08h9qk8ggzNF54dwmm6GPzY7IUCpUFsqxNVm/NK/0tMBCDY7M6bN7KQlbmpA9+Eer6r0capnpSivt8ztBtOso+orjdblHJeosrBZoo+E2N4Dtkx/z8aOXEFYv/p6VinqW+ZBJQbKvJGSHsPPJhxYl0tLGAvX5x2ExD2l5i3LTtsj8sjQKwFzgs77TIVRNgYJGrpJWsN7izhBv5K0/wZBYkUifu6tPxCPreUjRjzzL5r7DneqAcNUdXdCpuAgpZfcDQ4OB8Y6gkoRqGdwPq//jmQkwZun8f+Qww5SY2UjSBvP1n1Ov0m3/EbLgV6DTGuhC//XjU9XVB5otezHlRAlEiDbAnCjzGANU+E3YoDcWWlSbmFMKugr3SVy2XEvcrG/P9fgL19HwLuUge8+G85PR2s34T2y651VQFZlnVH6ke65manN8=';const _IH='766f910b9f62488c483c6344d56ea0501af303874e81f8601905a461ff891567';let _src;

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
