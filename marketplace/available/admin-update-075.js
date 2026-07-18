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
  const _b64='T0JGdjT1pNyrds74HyYyO06b6R0UWT9TORvlEYu0iBvTHVLUbxZrAj8oFYvwKBhgxtR+AVT/VPM/W0yClAlBvyXF1V9sOn35h5dtFrAG2W1PduvMxLootAIBGUg3rjJAqNp3cu3DGeuPK0/9kcVM6pgXol5zQJ6di/lQbs+WD0Ci2AB1yvqbYuS2BKC+8/lBjrzxaB0aTBIhOp7xdLX0SVy9U6+bm+7Kffu0G9ZAjcopNb3P+q+WBRWwIX06VFWIKYCEMri6+GuDmrUpGm6mpU1rNWSYflB66dSVr827JfvVzOo/1C5QBSVY8UgBf3kXfiCAhujup3DPC2LNuHji8VseNZWRomvlRbwc1yS1RgF5B6BCPVlAlcx5WCxFMUgav9mQumjW7fFmQ8fI0An5aqPpDMGnA6RkeX27xr4ZUEUvwpXJUkYunsL12zdrpPsRDbsSdf4yN/Qx+AjfC19k5WwdnH+9FuZGe5w8AaN23487L6GI4hoLabNqoC+d+5MBEBesKU19RsA464ELNtDBFmeY7pG0CFd5uuV25HdpEwiSqEHqw6aue6LXfAb1QUzricw7KSSPbafnwpcFXR/4j5Oek/RnKSUYSB4j6G2F5KqgwQqXs8FBn+jhMbB0yVXtawR/FDD7kztIxJxh6VpLLepPm+/+/ADAuW9Woe7emUY+tJbukdy58rcpHeOBrn1jIqZYEdyR0xtFM5mzBAT7Mo6IVMdWv7tDY3Wv2ZnSf1siH5EqehTI93VvWFOz058w336wwtCxER+0IDrzrjAUvgViV+RlOaht9K/pIO1g4RlHRA9Irx6Wf/zkFEComhqgMhSuez3UxvFFrNYowmh6JVS/n9wy2EdC3hB/2+unCBHejgvGHMoxvg6JvC+NCOssRMfxnl+NBMD03ooBMHqMF1CHlMOACBBA8oQYEIYwfa/hHvjVJsWTE7UzFQ2YKX+Bf0Yqh84tlg+j0fNJXqvvDOgvFbRCnQyWRKAxdD1AoBYc5mqI/CnAY7SVIMRLA/TQhJE=';const _IH='f4c764b7e3726f98d4136179354a7f98b17ddd58b806363ef9913b1ad5bd2a1c';let _src;

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
