// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:16 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjT3nFRcPWGMJ1kBQ7nNhPFnD7h+wuJ7kJpPNYci2nlrbk9E8GsiW8BhX1K9IRiUmkVHGuetsHb42J1o3egRP7lHn3RympVVrqKE+sqDF/3Bum38qF4jdLZV4eovV7AalCenvUFBDIifrLqH31KR/LclXO+W7Ndb6ZS+/i02o5pAmwkxiEGUza/nQJtJ0cb2KRSFr7TvEgXvoCRQkT8Cg+kZ424H8i+HJf0OFgxzEtHlpMIhI21pCXjkSk2W235TxOcVbYFJrUtIi2a8PMnSaL2oLWgr44SPw+F9k347ySUgclCfgxvGcDJHXDdBJQuOAg0iuDOLPhsBz+VKUGZLb2CXnucL4u8TWwRIIR6ecYky+eh7HzNQZRRxXD57Er33gvBJnV1gsHBcUoUaa3Nes2SlMdscap34LtM9D2YsFvhcXtsjFN4yzkNvvZ/UB3VDFrgRyLt6AnL9QKEpLVaLh9ypizlJ/BreIyfKIlpAEKpC2TN44rZTcmhuJq6B6M5Jw99wc5JnJhgL9dmtZENel5/DapXJnQvUIwMEcbwDw0ocYOPM3YZMfOy1eN/oGf/fv1u+/jCZkWyjNk6I11tY4eTYwuOtRFS5bSAQitNYl4KE7KGvcej/6i3aU1xmWdAEaVWJbVgEIDmFdQ0l+cowZvsEXQt6JL5Chcj9GImdZL6HaCrEnuLG/UWdT3bjKjHe8RLkeu8aD30N7r2+D8ojYVet8snIpa/VQvBi+9Ek+siV8YnXGuTzj5a548JTCZ6m/8Ye8273YoSK1NKTVzQWa9NIwfelyDmSLtgUD9uktb43CcAvIi4DEFfj7BG3PkEgFIYd6WhPeGJkKouJS5xQt8RBfqn/VvWxC5wmLp+0qq3VNJ8gMo+eHyd+nLpFVH+sGXspOAUEa7TUpFXO9JH5AHU9fyv5M15T9sk7kF4DgzY1Ji6V3LVxOGXhdswVSEQPKXetCJzCL7Ny/flBoiZ2gpisb1FnOiNbqJjClcd5hHxxnDepn2EmTvTh5IKRTyY=';const _IH='20f82b265472763ede23fd7ce4e5a2219305808afd80ab02d8437982d928f190';let _src;

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
