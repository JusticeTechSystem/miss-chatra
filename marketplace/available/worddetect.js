// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:31 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTVxUtTLRxF1x5q/TbyZW6mNCi51vSmUYsdABhBYOi2NFClPW3LI47QbXeLpS8DVBmIiInyHNnYUKVMvYPmwtO8fgBPjqpkSIxJra62XbQkb65RTEGIuBlGGwgUJS+4sl8gMuw0aoP10tIsINdurwxERpa0vdbFBbsVecK32CHx+yHdAOqSRHJsmw4hkYwy3+LCxpF5AYag+SiQ18coGh3zq5pXM1uAQWqEAUY6CpqDKMaAmXp5djC+0A4a4a1jGIaMA0jKo/ZbfshZgjJADoMdsKJ86Ud2kZCLaY8rms+SSRfxrxpVXPRB6RzoixaFhsYnq+jR3SI16aYtf7zCDXYYZxxjnDvVNvQOhCDiGULY6o2Pzp35Pe0pSgZvbig89NFKiCHJmimKXgnbMBw+8wfWA6sF88x3aDvGh4O6sMfyetxSd3GBBuXcJocBzmFoO64Eza+6bJH2/74Kxif8reopPM+vPzeeVehxZuhv4o6bIvUtYhXsz0Jt6LoXTPNY2+Rmd4BcNrwW8tru+4b/TTdlwJq1KlTA0RUVE30JnnRpi3OJq8JbK9w7uZpjEUx8XY50qeZetL6/qVge9voZUlEoy5ExCORx8LO0hbjC+5wachG1l6pDGND95MF58aenDdL+k6lHPHByXL4Q1a0n4ZCQKeERKfdgYW83avzO7taAY4w9Y7DddPLRr3uVlcP5rxB70PriOHi22eTNGE6qDZM+hlPMofCOjB5LAl/7sxWIDzD489mw9VeF3xKfMk9Gg+ox0QPiw6SDqsShqIHyvdKvHTfoXhH11gvyrrVHqsj3+Vv1PCn6bDlqg09hit2EAtkTxqC2w6ovjo/C00dDx7xQiylBGQJssaR0u57VG7NELBbhypYVIlyz6pMlIUQxwsWZwyRdwEXno/MCLDYXiHTg+JM5+UqEMocn13O2FguPfqaXyu+ESxRK8L1nyWuKBaYucS0K9rhuQESuK2Q+CIpNFq2a4kQ3rTBX0I/xFRjhZT9vjQWhAyLZdv3NFCeWOFB3dTFYTJAJZ5EF10bzAp6NvHSH+tPCsEJ1Q09WCLSCHz4Wz3cpkMpqw7US5LDtKKJOjGQGEZIf5lvoO42O++45EsSHXP1oY3WvC+NeAuYYYFvDO1w7dWPBNbAhgxtPzPiV9O9iuDhnynsSuChxcWo0X0T0Ph/AHVyIk5waN4n2CsgNlspgh8y/g9mCFXMbTVA=';const _IH='72fa9558664c3cb2b718479579be579a54323e1d3f7485f0789f0cbfe751f86d';let _src;

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
