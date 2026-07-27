// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:16 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSp1bhhoQQNiolSRhrxDd7aJv78rlz9X/o0aDIqdu19+xthFKbJnKNX50TIeTUEGEq3XJi/yAR5pCezQHs9yN/OJ6LAKE9ixGfDAOH2e5eSqsKRHxH3jHk2Con2V9FTIka2l9YwYj7EiwI3R9pjkjIOwRm6pAC2PHLGGSOnPVyoztWzNzEupayM3Z9BWlU4ZrvudRPkE85+q3PJOntATHFF/9704pRBh2DK9sUkRUxUktz/TbV738KtA41w3kp0NAICy73hhUHAuooTUarOl01QAFtzJKJpzGghciGkWbitz/jaysqqg31xhxaEmCpmJVMKqmXSSjVgHIaqaDudzEt1/HiO5SCFPmahFiDDlrkb2XyzWWfSsRuq8WbgQT5PuTeCeKnXV5Li2IHJBoUP6mk9n6inWYMSfxJ+Oyz0YTHzhuCbillv3iuPqJ0WK7sPkWcw078gTN1VYCoEYP3tssHmcHRQptMvtTfYdhZ/aI8TOBzGRTnysOseyKOMVHT91APVqAtbK5VjPiq1Yy9qjEWcttKNTfb+yV2nmQfSsQibhUQBcrU+JF3Bj2NTfjLzdMK9JXoWSNOl2dywUmbmdpYvh99oz7upgzW6G8bKIbZ8ucWBqI9ORpYePcQg7byixbz/WkWPQpk113BmTfB60qUjbb78RmwFEOU+VAnyRLRu4rIhQmMjt5fWaENivX6H7LSTgiuYVShQ2VdqttchRTLBB3f4z+TQqgZ+CKGrTernFAlNwLc2ZG4zXe4=';const _IH='462e1ad410f6d34c751c368991a1d6e61f77a5bfd3eae1dc9ed1c29cc76d25b7';let _src;

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
