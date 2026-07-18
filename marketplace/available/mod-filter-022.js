// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:15 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRtl+tjvlOBadvIxnPEr7E4IpYbt/WilMIyDIyLrY11ifWTCCqXdUlvOmQefXXKJtcw/LXNkaorCdqO+ICE0Rq9ydg8sdRZZrRFVcSysRp2z+SgzmccwP65PsJheNL9uoyxvD7wJEOec93aaxpnrAsumxW+bzCeEd3cT70kgl7ziRJ5VHXcz98z1UkCdvllU2W4MGkfe0zhZFNL4LwlUuaYHIF5AwuNjgA/6B+eIAnMA/l+YZjxypQOl2s9TNUNFiaVBGm9harFUxopUtxcHQrFQ26p5mbNIX3AB4Sp8CONRWgWNk2fiGFKJqY5RNOR55jvF/yCUwhcmGm+3EOKICMyksepr6qo1jqE5q3ln2ZITd9nAw4Q3hQs1k5ku5tovpjFYiQKe4lYa+m/Y9cJbLraPtafZRqrk4mFQBVbmse4dti4nWuroAkIAq4MW7RscP7xRn9UfAx0B0RW9qzKD8j0tDL4nWu3Bg5whQXUYb3UbPPWs6Et5QArUX4JJV8QKBK1gDPQTMrItb4BR1M13PmqC8j3xHdWOaB09/nLK+LEdb7/PpQlWPgWMwBKc7PYVChgn8VbPWZ54Z+8m7LpsSeYFP+jcjy8iG13aojVQc3xsp9ha3YjSeM9GgISY6i8iagBWtUTCk0C5VNh+TmhiyNC9VPAP1GlNSUT7avohVGfuMrUJn6//Rmzw0F50Xh2APlFxzcxh5LiJAlX/F7lTr/uxK9RnmZJOFZJDQp14igR72M+ZRDNGVlmGkeoYu0mhsjyceetu6htsmOjrkc88WyoTCrjkA0WJJKiOH6mbV5i75/RNx7uEeUeOD+RGpbA8MAPVqcZC1gaMX1kXZ2O3WYvQJ4sTosFpmeMtaeU1Gyp1JnpljRRKXzCewS/PP50NdQ+WsDtSc/lm3UE+61Ne9azZ/RGkJ98CKQ9Nz/moEYVzgbL/jYu6EGMLsjdZJXtQqPmrv4FjsVj+4VIv1BhjiZ0JqCc9Dm3bIL7x/+b1UEn1D2DnFWGRoU9RvYMMW75x8UD7yQM93W/vpS37ssQZxCOVbufVEWnSs4GP39hkTJf94b/Lw6wLIshS67QzRHSAyTR+US0B2ccKr17pulIO8ikXY2Yb9mbdmM4tbe+HUNUlFne/X5QAPLJYtuqCOa5Kw30oe8IBJHTKAJGD927kDudNkY3O4vpSfRBljyAmTZpdc5gF/WTS9PI8B2R88X0FbX3gzHQiIY1h1l9vFZlHp6ApXIzQcEovSW1tQUTcGc1QJAjofOsQv9Sokxxfc/tUGuRR37+utIe7FuhStcyHFRTbaFHw49e4sHj2pNKYkeKem2Q6zdU/07sIENN3HF/VNzcM5bkh1Y8N9WKQXj95L85tfRO1eQ1qTsRpK79zY/2qeXzzw==';const _IH='da460397c55c7d9b091c6d7b7b75c95e9908395c142e105b17e67766b838e8e4';let _src;

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
