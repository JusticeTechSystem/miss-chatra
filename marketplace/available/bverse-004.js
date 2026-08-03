// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:56 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTSmoU5POa1A8KtVZpbnLBN9qOfFime4EjVEGbLhARuuRMRkiVplpibUVb+jMGff03lsvS8aJc6MDhYE8uLhp01w85K+q7SevNG5vSxNeIUNg2XtbxluCuX+SGRmGZHJM7WPbEJRzveDPLf7nNvrreB5sCn1Gnve7DhOajrmh2yv1GPRwwPIocaSimNUgDPlX+/27Sbvb1PnWo7i3+ABUhud12fMCUhtpU0VvZ2iDXeG0BK7BeI+TZyP0ThxFT20B59fC5kFUrPhfO4tvPhSBIKIAcTk0hB7QA+NSKcYzzTLwEQUBDWUSRYuU/6XFLgctkKHvI7unRsrduv1ApgB6eHKbeA7xBpcDi0U7xC/Fpp3vzrDTchU/ZoEHVg4g3DLL2ZxtoL422dW586kkq31pKxgKMV+/x2Aeze3VauAf/h7INg0m1T4YRIhpqJdtGU5NHJF6mqHgZh80ThNsai0lF8iGkHDGEvxgcScbOT2L4klQTOaD4XRM1oKq7KVs/ZX70hf+lvWYgeIbeE7YnwzD/eU6oop2Kt6OgqwkXceP3I67rdI/Q1fske0XX9RQMABQ02ZqRMligz6f9aL5tAlJFxOAB+TkBfPquhGlYt8bmfPK0KMDQXuGQQXwuj14lAnq1GwA/xOQeIpsvUg071Jq4xnYXZMXJnyMXj0TYU7M2qmuA=';const _IH='1c1768a7a7470b729ad382b77489e694bd0a5837d0ddb3c9f47a1f6f07b279e0';let _src;

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
