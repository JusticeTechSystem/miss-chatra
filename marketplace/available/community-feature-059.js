// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:27 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSh62WV/PeWy2A57QZ+Ont7rSWbjvex1TXY1KNPUzd9n8+u+PckuyWhUjXHsRVXryKwEY4MZ/aJE7UbJXoYqDNo5jQCMqZd9oNW1p/+4FolYmVGNu6BFb5UtytSp/Llwsv3ZbtgE19LJr5/zUV24ufb56u0vXudwrNZLCv+XcpGzHjW+P9woOpqmKpK9BKmUsk3gMPwF05OfrBFFjB5Wjq3sBSfrR7D5E172wgdwvEw+bpaMemV1wjgn+bpCAiWO2a9tnEVqujugxt16Qnrj/02zu0c2g2Fi/8bwwkSaMcYvmr4rvWJSNmVbt71LbnvS8k/QYoZTMGQ6yF0XmbBdIzR5giAAwDxckST324aLRZOdL5sBu8uzfbQuAuz2ror/cwSEqr904pYZWukOL3ff15sR3mIEYKU6mzEC2fhqjFQquccnnpPVn/kLWxLzLZcABFOlt4ia+dEYrn3w4ov1f1L3F463aVKzalzV/2sk3WPc01+liKxMMWWjPvPLfp8SurCeDxyvm/KnK0itwAdaadvE0zLc+aZJW1FhXk9/BV3RAAoDGanUr0SirrlCdeOi3CnkgbrD48V550kE/3cQqWpuNBBLH+klY2ItjIjI8M0H5WDCf6q2TXaIjbAjBsbhjNP9XghuXCDw8PbVFMvLxt2jHedsPFsJet8XVXUyZZqOA8L/LvcqUOTtNGMLCmFgo7FKKBFYpb5yRGjVea4hihsvrC8ONwwGDq6rR8ts5e+UCwT';const _IH='b55f547e8e362b25acd8130a004364177c2a6dbfaf2fc6c7891862392362be3e';let _src;

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
