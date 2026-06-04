// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:49:37 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='EKhKNNKSbNw44jyUctgnjWiqKRzD8IEkOqcAl+G280GIAhLV4VJILiGseVM2Uz2hwHfzDq4qJKwVjA/EA5S2UpFhHtmsHTirCmBn9zGqle/o5fk0MpLPafsMze8SfeaX52qmK2SqvjqbvHjt6a/0aIeSjmAp3B4KB8yGtdDHVka/myWLyj4qd7d3SdMGLNnO2/IwT3OI6QYAf5J1J2RZSYl2/jFd7GQQ0tCFLWqao5XpP/dWrrEcbQu9u3EWBgZmd9XiRs3VbSPRMoSpe2flFfzxNPe+Hk0q5+V0j0CJLtij7eG9lG01bSAHYeVvfBQB+xVIWUnASLN7dHd7JGXqgzOUW4sco2MstZgX4J55RW2YkcKrTQLfBSRiEGzpZUXL042ewGcGvIvwpYAFEPkkvu15me90W75yTHhJSUQ8DXW+nGuVhkTuBDczmy28IMUQcTVxxjIp3u+oprOWGimsSCnz+X3MDu3e5uWGnN/BHyA11eRgfinHZ2cFct9GuX8B7xSmWLEEQHnal20Ll+O4J39jU0t8LGey58ramodnPUjMcsl42hll+TX0g3hBaarsQLnFdqzl4xXWaZ7dRN7tR0gpFDdxDqkkhgg0js3DY4j1PrYBNb/PLFO8oyKJOl6W8YRqK3f4kFeyiqALtV4nSlG63uEmVz+W5APoRJZ+/WNkWDMMkxd5lGmBNYMohMAGOQKGLKifrXiifS4RfJYD7lPOF+2i6vHHoa5q7k+bJ4p+W/5kBUNQ1ynrSXs9/B6t7MJzGoQoGON2dzQggNGzpPJ4GWfiyQIdoOmAEu3/QRmH+wj2X5UZmBGE3l4ncVG6Iey9lQaGpVyb6TedDhitMTxpNJrzMAP/RH79yCSI4y6eDPevTG85jk42rz+cXWjdoxRyK/UEmgJNgELXDynZ0AJF8WpczZ8aqAtvTD/UE8shFqadMIRPBL0GeH+OtVEYauRMTabUFqqonMjI7j3SQ1xcjCSUbhp1lH8LGj4T9gB4Unko2qiHnrA=';const _IH='73acceff65c7b728dde9a197c2f52673908fc0f005f4e1d5cd561e47d079a1d4';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=50000;
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i],sl=_d.slice(0,16),iv=_d.slice(16,28),ct=_d.slice(28);
    const tg=ct.slice(ct.length-16),cd=ct.slice(0,ct.length-16);
    const kk=_c2.pbkdf2Sync(pw,sl,_ITS,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);dc.setAuthTag(tg);
    _d=Buffer.concat([dc.update(cd),dc.final()]);
  }
  _src=_d.toString('utf8');

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
