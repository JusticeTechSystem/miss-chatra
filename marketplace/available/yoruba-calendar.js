// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:14 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQRLtDyMl9UYPCjNgG0KYHqMq0LbYbBNUwRBmedY/Mzp9O//VLpmhV/p1C2wx9A7uzcqVXzx5qj117SeUPQ0xnTOPEhXarPflzIKGAFgg0Qy8vQK80aG/v7KexSOeuKKGPwCTI1CoiAI2TNRo6/VuPFmhsRPYNw6iMWXKFI7cjEfLUz44hkfX5bRrJs5t3KUST4W7TrPNfr9VE/i0RWHy3GCY9vf+3Lv8FHk4bTYYJiv7QZffp1hmN6X+pRvn+SZQ2PM4daLT+Z9ekuQtVz3erNS+VZCB5gINec1+qHzPasa7i9DMO777WJd9WdH3cJuuSEBG2CwkKePJNWUo6Hf2Ttw2t9z2oSZRr4iZZQxXpvT0ORz9VRvDqNXhZiEzXncss8BDpcXBdGPVJ6plLtdwjwCtLuTtY5p5F/WgNTWjGMjw8t8VUIr+lzFdZsyxIctRoYoiou4P/78cmXAD4RR95GeYRLyFRMrol8Htt0axBR/aHJME7FnvC/kP+1hIw8nQoNs9O6B8MSDKwOlk9za+bSpiIp2US/6WM0xVr3f0hu4Byv1QE7NSZQE5Kzb8OiDXW8OrHPUbmlGdA70UfxBNUYvxD267/H2Z7LwzNQDogGVdJ/gDfPYrUJOkfo5FkJ9Fasd0bO7iByx0e09nDeJsbJrxdUdj9GvQoFtKLt1wkGBkjpPCI8buPm9FnRq3T8KEktkF1/bW7rJVt8D2W9OxmFUfij8MAoNnbjcuh9LvtnCsrzqBQjpCRgJmX2WgicSs/DMMi2JO1rlZIwSqDc3/FyQmAIEuwwNQZfJTaiw2zPWJRv2CbUYdvZYgn5N5lSoCl20m+8dOPthlBqbA316OiSrVNZHarfEbqSsZZz6ZdMR8EZKoHEDwIkIQ39UtUHBZ0SWCMw9LpUeAMBGC27lex2lPbrmbr4Zd3z0o9aX9yM2cOKrJyWHy4K/nOsVDPF/zlcQmG4K/1Vmn9fApWbBJXCw723Tk6DB0nHEU/0LDkT7N3zt4kyt+mho48Y6iSXFuLiFmegHjUNS3fac6AAD9lhcLIwkNREsf/VJNL+7OBhoVMDPe4UTvM4nq1zKmkQwdxqSYOBdMtIRy1TxlF6z53S+jNy1TgWkBlUqDJ4CNepmC/8LBVafpyvKFiDxu9Fss1WcuuTO48wGxDOQT5DBmR5qNYOHFSDJYZAdGm3ziC/3Bg/SLCMicdcRY1iHvqLMjxEMdTksHRDpT+dC3usGr0GTbtRVhpJX76JCS2j4GQtALLhPS0fjF+QbWrjc170STN2JA1R0e+BfrDsSAh3jt0=';const _IH='eb6dd5f4f839beaa2e4f1ef6010e7018aaac4c743dcac3b44816eb91581f2c20';let _src;

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
