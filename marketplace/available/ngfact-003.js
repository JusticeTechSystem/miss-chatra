// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:37 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQpiX+f4bHetemMLbhVm43pzr576x+THXU5FLQABLVSPUkg6Qld8xmV92T/vSrg1UO1YB4/hsrVkEr+sX+0yqLJ3TK6L3uCXTM3LJJ2Ei89jc48V+LfZcPRSWm8QUAohaj74KkAjjlTQ4X5I3+qrSlD2jyC8dWykdfi7LkQea+hKiebKMeoxuNtUsEl3zapxW4Gf7/coskvf/8tLTIe1x0B7PdPOTLF8tsXl0I1QWJOIDQY628234kXko3hdnViB0OeSI+k7rIg8bnj90H+7d4UMtbkkwshLRaPF4ki3kXdWX22h5CtNIWL6i00YhqoigNSF5sNbeVtKnPY+KGgK9Tu9YSTtq9ZZ0KrAoGzUi8hgV+NtNyuUkULa6rlRw1L7Qr7+IWy5DzbQN06l/ik4uILhOV3koMUv+FgRU30HBrgw3SzGmXwdXIABCgKWhPtRxMQDqRnkwex3mpQvHKCJGjrTRUiqopY9oJnHF42O/Xi/4rbIzHrLw7+z0sarAAbFc/L62MArn4ZuIkeDmzNu8pgvJTqaeHzJXY4JUX6fOGInuGmdmV8xXb+3WzTqGmH93WesMFKcD5xlMBRV48E4T8Wd4W3YyHZ3SKuXqPuNIATfwkA8O1C4JH9D401He9jP2xeCzr+fOKmrlL1XzYO3T2yN8JLhpmQ0HmyymU00nPkCTqNVFXfHxmNiSddrq69kRkGG82Lz0MlntN5NDvNC+RQypf1++Zkf0vzbReIXjGUAQ==';const _IH='e323e4a35a4c6535bb3fdef883ba72d31c42de669765fb33fedd62c09ada4d80';let _src;

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
