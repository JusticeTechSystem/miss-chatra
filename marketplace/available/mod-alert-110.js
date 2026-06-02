// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:36 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='g+vDPwzeJfKR5NhbPnzqtezumOkhr9FFm+IdZToNIO7xXYlyREQzNaqDgcxUtmHbNK+mWvX9Wk5yhrYiE8hZmVPo+t0q8JD4ISIfccWhGdAnsAAlzpV/U8CjPE3NnsEf6QGubhmeGiErJDo/8GXrQQa9FkfW8L0WJz6P2mORc7UsPHRzpY1iy2GcTMOY2yjSQ/2EJTPU9PsWe5sihoqEST9Bgzl1i8onLWOx+P9MHdNj8qAlJ6bCtBSb5/CqVSgzgz7irJLSmdVD9U5fWhrZFQE2bLlFSvO0JKY7fQm2L5+evPUyIfEQz5EA/Kq1q/gio0BLG3K3vnAXnP1GfC796NPPWhAbEhFN1YioEgcxybg0phLv6VIux3ct90aPIfMJdbGa41/NKkILBXmBW3RaWqG8VCcb5I4IL/wieWCMBxzslrr+o2f6KkXjVzUY8uX+vWeEfQ4SvMJf4DLnXO+4lPttRW7xIsDgyqqGjLSnDvhX8o2vU6vOZJbOfdQojLtsnpLN3RcxbK6WJj7SloMBYMn4g28DGvhJnZVgrG3H1tmmsNmQnwx8c4as194/Z5+Yd7vYz2P/WctECUeyDxvfPFXy9L4DJrYPsjFrF29JOxP69z4EpUOJ2rrIuGR3W2swEK99A/VYS0Ti1yel8M+xQghc7H8R/btC76jNXtIeC7IITXZNaN7sfzSVMpFyoalYrXKgky/r9XwdSW7DdvRE9VY7Ih0xoez655rEFIumApHuQGLlKOR8XbwjLYqQ6KT0rnvW+wdSxTIl1ORxkVHQzehFN5w/ZDeMAceEPLYJbcs/1RjcuhXTHJXKHOL/UyouD0ay7OthIuNPOLTv2akA84VIonTv8t7H2MgASji0NeaEVUKqKGr+hcjR+awcGfoIZwnehPWaisbpsIz6u4FX+FgEYjf+m0/ySSya6dP3AkkS25w2N2WiY7eqYdLCA/4IJaCS2XYvwdP8j3JFHZbDZ5AyBmjg2QgBIzpZ7safWsFFf7+xO/sCYN5ARFMBc5r0c3bW/J5mu4nvUic/jnsseOd8xY88EGsIL7rWh3Ws/JcLDUsUjVIvNo0zBySOcdyyDI/OlYMHuZ+Py9ssLb82Z+IecW6stPg6it2l2D9ejt4Ld9hs0KqYsKs1EhoTtOo+puXNzJVeZ1dorR57nOlkudbZlflCTbXS8b3OAoToeJA++R7qKoYTerN8m5cloZ5zBct/Sp/fftt2E+SmDk8Gq6ythg/EZdTFOA0R7AhUiSRLkDn/MHutPkHCvnKCcyenDsTm1k9yOibAc+gqfx2JJTFlzYGLbc3rI4dHHy8NKiXB+olMe6OvKa4H/F3Sd2hUwP9h31gGWV7FW9NZiFxHHUi/ubKp86+t5IMea8NZ';const _IH='dfe8307eea380cec7bece7b70b346025ee64ab2656b07366b2f2ea50b3a4baea';let _src;

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
