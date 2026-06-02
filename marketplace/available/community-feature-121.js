// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:36:03 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='e4CkuvjXocqJniLxOHVQrdxPo5n05g6Obdr0R7Y5ozTicHlsRlyzrWG+PdikorzWv38WtYHg15nLzyN5AdDQJa4rUe2kgB3fEBJoRLVeTlQQsc6M8vXJ7egvCIGux1iVpdEa93Us/hjGWuSbMb6pHPRDqIOsl+mcIW1ma7xxozgZ/fAIxHVo6MZfkwL3z6LtI4tG6GzzZZzPez7IQBVbL6WmrKp3p+cUkWBei4sR8DbrgFwnJ3AVeVz03zkqJZqiP4BsbTYDgvcIkEYPqqMUi2dAzApfpo6/+Rm7M3+zXmJuU33Nln3hJXoWSI479UooUkPnAz9x3IQjtDEuohI8Y96AkngVzdg2y+dIdh8rIg6HjjzRHEQEne0bL+4V83ugDOWBu3O6vjcgU/gPWa0sDfvTzs7B3HlpaBtqmNKx6wRtNF++gu/nOqsJffrGnn+TPzrhF3DfG8uGDDfixOrvBBXRWq7BD3L2DQ+6iw5j+Id2wep6szG8DbzyNhTtORM2v7weJfryezQNsQhbv3eOr9NLTwGnWpsfCgrptGDQ4NrmwxhUA610QU0UFsAbS4hvcM6XUrN7ldLK+ls1ZAVgCb68f7GMbSMGjhZahUP/mI5sCbRYVrBs+h00P2K7qOeqkFcy4eSZq8KfpRoSQpBoKPMoW2RGTj3oq8OG95YPqTUGdl+v7+YKuAvoqpsLtBTRpwVcMAeDMBKy1hGHrQ2I90tp/wZY7tFx';const _IH='8ea2d03b3a7e4a30bb950359f56ebbb6642e9403f828bc99b4f94cc5e4593955';let _src;

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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
