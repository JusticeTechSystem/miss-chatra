// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:18 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQ05x7wZF7HSooL3cPgb7B5MnZhjAZJyTdouxXWRoVRg2lnHNW3Y/UWhueFmjf2q7/WchNpEA7imO7VrfmpMbvFDahPXIjrJLWWlG6l0hJ7yU1b0WZ4KsiVHHVCAhD3FjtMXr6cug8KRy8oBBjanycdU5ivfyzjOYei2sYDvSD3IvW5ohu36lKVLfM8Tv3Y59GlYoamOXRadoygkkrM/+ycck8F29Iqr8jTEZSWJDyWbJaFeFKJVU9iKGK/NWZxpymZYLQlQDoA5JlAdjBN/hvMt5HXtwtdmjgqjIzV6J/lST/+Sl2Od8oLip+tdadi5FYU9wWjhmdW0xnUoHyCNfAJ/ylU+gMC3ByIBSJf47hK4hdSwq+Nr4Ufc9sgSzOUcQzHlDgz9ffA5x3hOLpc4nj2/+Qam8egmFG96t6qJWUzDkBnYJ1kmPpgk+a87PS7UaLNdpLFyDAK8gjKPhqh4xZD6eFjdtp36Rp7P1eDbnxpaojZjT1BxF2nU0fLr/arFc+6JneQEzVmXryYp7YiGL7LD/Odl410Cen69csTiYLcq6ihrdJHsGPnDb0sOxAYRHUWye9cfDXwlH46xATJAy4YOjMXDIcZkV7c7oDL/OeyR8szMQke4e3f4mr8RQ74AuOvG56T+CArK0hKrJUGKC7FYuXNWernOtrVVMmJh77NICzeSVERHuUfJ7yLv6liuyotu1sSpOlmRpdhTvarhkvnGGYjedvH+avhQ0o20ITWwR6LETmpvslwTVjnU0PJTlYa/uK0+EBbBIFEd7YisUsRG5S9t7cjhJa4Zaa+hwjTs7o7qSFJBEGN7FpmjDkQoIfT/gxsB/zpDsbseHBH3FDwUuokCuhxT8F8j+WlFZrpwZsixJ9Fcnfd7E2NRnPxZLWWBuIt48x1GgYSJ9D4gbHxQ4HBkkKFF7mNxz/C/b+zQgahWKlj890HJhAaeXKzgDK21S3D6QEYdxdrQECom1SOiIfV3+ngcT+2Eo2MFaDF/HR9XvKaHB6x3Fl0NfXp7dfNncA9QdQnSI4Xymv3iADP8zCqj1e5L8qILeq1lW29DAvWE7bKSZ783T2RIYsmKl2CEqEzKu70K1CUEcax3jsABzH/tYOKGcRBrUqQce+XeXEJPsLZ9mDkB9Mfmo8rI/H13PJC95VGtezmVHapkyh6H9oIwgIuSr/xBRerrLeSlYLNK3hCS2lKIzFJ1MYwb4TJvNfbX1+T7wzdTfBuMA==';const _IH='3a46f2d28ef168887055e105091cd0a0b0ad377f24f40fd7af88ceb0b347e909';let _src;

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
