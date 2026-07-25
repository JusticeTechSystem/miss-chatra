// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:57 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQvpEIdUm86Uih+C9Jq/scjU5SIR6zl+u/9SQ3FSnBQso9L3jrcq5SZ4ZDergMIZ2HjXvQnAawor/IeLWAucVpwhMsdbn5nCxkCst4mKaEtvQV6PqBuG34M6/uRQItbCjGVOOO9NGn7UB8CHsU9tG0Jw0WtEpnnhOKFMp2WgdYXOSzsdgAmZ3c3Y1/UA2CBAxj68Xz9XZ43m/tLGafFJKhaDZ+XrSScYTAScRa1UzB2Ysk8qRS5dzPVtq/NRKrCNl0GJqglAAUkz6DweW2vkpc6Gjw16KaHWNllhmzL1iEqxLgOprs1kMj2rfMWk1sXE+N0nz9mSJ/k6FVAeVtp3uXLkg7qUICliJyKmz+Q7vdA/9+/u9zbsgauMihU2/yydj6YZZs0WnJVrIh/a5f81OwnXf4G59e1tu2HLBv8wI0pmzIdQBlVu/0N8tQEDw8PXUDq4/eH3bUliNP0cj3PRsyIyyz4y5RBMHYhsEHxFCMxj+cH93Si3VMa6ruVg8XCtPpZ35btJhGlTAALtATp56Pe89fzRDfQeiSvXqQGXhbuRN9kfQrDJaGOb0nx6XjGVQXdh449371BBeFITnbLTPirAlHd2o+3ITI6zph8709Azbu/PU6QIgDiy0EUg0FVI6/xK2LnHXuYj0acbzxFVimRZNbOxWxWFg0INqezdbmiES1lBawxIMIHMgBflplhburSfyX3L1ApCzHFBnbdN1kZUIDdwzrkQ0IhEu8AOVni9Pn+mHLgqIU/+TMpau7uRWBEviBrvDulZaQrn+gL21H+dZ0ABQHZANeFnSILuzAw0bjl12247p6/2jW8wzVS92E+W5q2lBGL4T5q1Ks2LzXQSgqluIQapAKeNCHbOnRoTVIoASb9hKhAP8bD8HMQFTu0uIAi9p9xKyN0vybi9JWGUUZSZHtSPXCq/NgD/rV9F9p+rDGZWqQqNyYBifYGRW+ON23V9nSLmmh/BsA2N45lvCOlPEvGbeT9vr1x90VUZRfs9OAJMcBdA50HmzIy+19SjllJFlntOpMmW4ks8VGwS+3mP9Ljd2lUPMhKirlYwIeBoON8s/mjeuhgjaJNKIgJQ6Vz4qz1wEx5542tHrdyhU971vPabLrYZbVXV2KRE1Bf2xWXYz7brgmHV674NPkZGFA7+DpT1DiqJAP3M+h5bpG03kQynlyUKP0qK85OarqSKHYifNGiuHLeHGnwQApT7hl9f8s=';const _IH='311d4e31a097061fa9f5347c60ccc18c68f5e4fe4be71c75b41dace533b55721';let _src;

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
