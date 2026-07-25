// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:12 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjT3mqM/3sT7al9sYozjYYghbjSyH29Wbc7Xbz5mzLGe3UzT3qv0PVN+5FcQedjYaCOtRP2JQ08zJULIS+vNxLRMAaWZZLGTU0UjRy0T/94kQ/Wctv/VNzSTwS0lFAZ7dDVl6g2zDyVslGKFd+hudqJ3M4a4CIFgNzHywao5tgVkbMyssNVjtPn2gNsHu71o+39pDwbDbwxR0EMzxRN+6J3MsY2AWQPd/77JJZ5wKZOjSS7eRjjjYfx88ReBPIra8lgvvGKC3yGJirM++pAnkVuDbjd3I1PIWBIg83rrNXOPkw/iCp79FtNS1yk/pf87T8gQhpxXvHidbQJc99ZqrV//cDyRbgcNC/PpuiTLEPuuz1op3uvrKlDDryCkx+cQDz1+0eDCbngC6l5VymmZiKiWNGrtsj5RmQuBlKwsbR6mDDBLLFPR07xEVllwLyViRFyfbQ7p+MUxAjypGeDmf4BiMEKI3G8jb+gy3LMHYJ26rodTKhPDrX8mS9lnrumqIAtsBxDdT7Rn9KzprtSkSrvU7CmVfgrT9SeCbXvaYhrtEUVGkCeIDfQPnA2RHdmvLn+pn409rIAEyPasfkn4EsshDtUJGSyIHX+qEI6CUnw2k1OrNCVC/KWC9tJDMBiL3q0yLiItAt9ylG9sQcY43otVVvCQz2MaC2bPT9kAzE9X7NHras5iFPkJVegKrP3TD62/zJTYRz9xqCJJmIMm+Rfvy8SjqkcUc7313+VAHA==';const _IH='ef03717f3550db3887b4a2bcd40fd7902e63489123fabb614fc4879365613659';let _src;

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
