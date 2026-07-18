// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:46 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQgUeDne2r3vUm9qynBha2xCpaQvWoVEthuLiW61XyXCG4iXrAitT3QSR7sn71hCs1ASgiXZDEe+EWDX8a+8wrEivhEHKQ+NFPcKLHN+3M+9FmFYSIAo7JTuQhYneL4Uv5iRiKPk8FHRAGA0K+Wrm87OG6AGqa6syDZc0TAsjI8gg32MX8pWfiHCbNhN+Lz7YZ0r7FoT/KqZtVBb6/9DEu/ogxtIVg/6p5D+0d0bn0XZDmvS0w/BWNDEv7UHAtmQI7lz7DVEtDtH5bBSrw58WMkQubDnhRfPETrp+YEoCBdWv29sRguqTdZy+O9lEwLj+URZJB1kdVNXCzfsjYmGhIxC9qZUWuOK8kz1xjGblZf68Qu+Wnrh1X+NhAvJOOYlkEQjpLBIqua13yW9Gz5b9GtZ6DRQMfJ+m2jASUT9glGmHW6GaYbOYlZ4Hj+rwleBXMsbB8fEn56jyJ1tf38tu9Gu4tzj1D5+drDHcku/4HxBtCuSu8nchW88jqZfE5J1YwgurNMv/ipXWnQpjX9j7P7IrR63jS/+KlBWK3aUpXjxqxwisemlEWjfX4NvMhk0Ctub587oECtU+AXneyKiC/pPQh/rRv9YUlbKu46NqSzKO7kiFoe+2F4fXi1yRGm84jtpud9x3/8X3uO2jBXqylOfKLvOVstPLB3fKVE//MvvMZtLT2xhgaDUJDkSnBSR3c0nUd6DZCt3PwdHUROgmLEBhwwEDRb+p8qJB6QsSKzve6rRROlLAX+z5faDsISg6AiAjDZc9H3tQcYlTsjMpB8pPBNxddwubIcSMAugDXrEyKdsuf4SBdymg2U+JLygaspqq/Uxwyo/8oNKG8gQtvuGXDmaoLCguJHi9uJqscHvcmwddAXKs82yqiJIc5dOczkKkTq0QBuop0L4tnINBX8DFWOXLy5m1CZhNFlpkpFH+hlC1+g5oR3rcHCvkQ6bMCmuygI0BjZRREZMu1irGOcZEEsp8zrDJUtQxM4F7HAOHEXUtvcRt230/Q=';const _IH='b8398fce0efde2997739672f0dd0ce649920f8f162886ccf18b8ceba94c22464';let _src;

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
