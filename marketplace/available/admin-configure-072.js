// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:39 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='kgB0Lahl596z+ATnY3qJRieSx8be57LJBwJcdZdZAwHR1mf7pg5eLv5tWVDAjQy9oIG2GBZk0tcDz6JckQXSnDFn7FGY9t21k4Qqm/N7yhRoZI9Fwc6bNuqgP3uY6QaJsJTmeXYe2VokyA0DdV3I7UQZmOnAAstGbvBNDUmzf+lgnFCowdIBvJi3m/wI8wMa95jagzxYxmgNiYADjxei65PfW19Vyac198Jb5AniOZ4wmkbNzvJ7E/c2NkolexhGhnZkmpa5BC6EQGy0BXzidOsSlvviVqV5CpJUb6BefFkxO3EZX3OYwsjcBqAx8/AeI7S39/9elr/Fp3nQYQiJKs2+s0wuOZokYcLPyjz74oghcbI4whc8X+NlPD+rAoV0Uk+EtBpRz/Dn+fIzeCm+AJbrRBWwjEJ/CVlH2Q+LNX3sfILwM70NX2BBZpvfI2yScwiDQ921q5rmwSkqw7FREr04EeOUprWtEpbjKNn2FfD7QY6TLT91T8WXVe69SO1Od0odcSiVX+synoRaoVx4MEr6Roq4fKZGQBdoN8TgSyArfM6yMi3J/Bx+HFe6cgRvVwpqNGgvbqJOwV9M7Q70r1U6T8c1ZbJHOumGViLx33Z2KP1YBPmFBcujwDlIcVfVX2VwkLeuRfhif/vtPYolO4uDFiU36H0s2At5/ZrOx80s/OS0xtxpl6P0X6ooBL/KrgFAEIOHcS+3MSZM7oPxmQ8hxmzvILYZOW1ZMGG8zvQ5heEt0cspmcA2Atawpd6OAcpv1GLSwr7UypgwBJOHgow6gei4RcVDoLsSXCdwh0/g3QDbs1p1W9dy5T7BPpzLytZckCzlgvnG39LNCEBA94KrYQshaxmk7k9DDmY0a8MLHWv+BdkvcwnkC31ghcHD76cVXT3DgkMtLaFA8YLeHCXxQN4nFkXTwe0/fr+zHbcFhR6+/FEMtoVd/hn65Z9j1V4QMNVXvRPqWgue7Dtn+/JJ9NTlidywtVZhUzGfaRaFfiDEn2wx3Bv/LKVBhxRBY1fKVSmRoWec1TlmZd9nrIOs';const _IH='3a9051b750b58814f3a6f1446ed74185a9e3fb93de19733e449ec52be4701184';let _src;

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
