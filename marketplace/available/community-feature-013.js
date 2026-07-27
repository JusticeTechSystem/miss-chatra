// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:34 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSmsVCQLYFfekCkCag3P5HuCY+x//iQV+nnj49piyjKTuOAdAXqS4ag5PWPfzY+NvXozk14QMb1HBeHwSsTwuCdrxUQiOqApSxv0dC+n9eQZ2WoIogA0DZVGs2nDBDxVQjPA+MN1996xYXXP1at9d7iISnb0oRNyfqa/D4PlZ38INVBKmyod6WJ/pkUlqtgoyeHhhQ4ZNX6Zx4xoWNFD62IelA1YwzKe9WvCTyf5j+r2sVo8xHHh2eYGEVOatSgWHDXBdCovrUUBOglrZJEwPzQUdxxbz9l4IH9u633lO+w5CWMlk9KrsBg8dJuS8aVBD6pIP0B/F1ykgexajSvueXQL78QuVS7PMQjBvnzxn4737ucRqsSLOV5U4MlFwHF7Ck+T9ipaRqviG71/dTrsf/hcc4PzFx4F6u/oDq2L4xlCSPQrRZoZxkD78344cfOgI/YzVHZp06Z+CJaPixAKFo1CscrfYdLwDHk7P3KR5rlpl7mQb+XnYQ/LmVer6LnU73WMeosUEPs5ZjEJoJO3tCKsb4cthV1GMZFfjVxqfM0UELPzHxtAqFpE55sO/TGa9kj+rkyBjRod5/++39e+jOYUVNaBb2BhjSBHyoFeWr51ZdLm2WYiZUz0KHBMdoU0FbHZepF7LJGHbIXqPdLFvukm8/DU76q7C9dii9nWorcZczK+e4E9Pb8d70a8T5+mhGM/QJ08GGabfqh/h79ku70iilokWbPHsKP';const _IH='1179ab9781cd3a9e537055bd43b690e11fb8660255482a6c96e4ca33fe6fb19b';let _src;

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
