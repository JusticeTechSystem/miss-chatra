// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:37 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='sqUHytcPamsd1RsTUh8dhncn2//x7L78+RC9Wba7PNgM/q0oYdcB1HiNnRq7Km3Xons5rr18GMI8+viHGeqwqef1/7792ykKtQDXIh/bwyEoBr1r3DUMGklpgUaHsOSFNFgENX55jAH7JR/cq4tAlgIa71rNBhKp+5idmONE94z2uLNjABEMiAySjND/Wwq/EsM8egm6lSKKNo7i2zd+B1afUvs0/uEMtyLtdoAIqD7wBZWniwF9kfpE2B/yEfQ9ekdFF6+B7/fRhtutGZjVKxbtLUcOtMyK2duy0LiALIMqbubedJdbbIdNkw5aIM5DcUzPDXPLkp8/38xKZyUWlsx1l2VfvAyhyD+lYglELZkfCgiEfUS3ePqK/0H3vj+EEGHL7LPY5d4EyLar/SacoY6wZAfuA1O129xAjUJUY3JY4TI3zjw1PHETlm4bd/rpOnJL5Usi8cLk/EAdMy/SUfo4V0sfnLN+kUaLlcza+djg7utkTsuc3vgMEC6Fvmqvj03mhkOlarSJq2faJio7NWXv7pRUEU1mniEetI2qZI/GWAojXtmpizB505Bh/PwBYvn/SZUyEZtE2SPnGv+Szp5S7bJJhkUVKev/qSxX3DnBYds/gpD/1NBR9ISDUI+U7nOCrgMbWLSkYf6rgbhlT2ucQ0w68lHcMxbSAJwesxBnsHumPU4K31oSWNpL5wsKdi5+PCwf3vqjgTvhBf4MHZwvEWptx5wjzw6NVpmyAPMdJB9PpAdoE8/EvgmxOTstBIWxq2z5RIEfQ7xn2pgR/4U0RGMtD+DdbmP2nZmnHHYJlNUa7hbB33zGPiwssdpb4ivAlIwc5wtimKz5tnWmjzt1zvvYrwJMDYQ+W0NUZAxqEFtLD+t+L3GnGUKXr6FdNKiTvZaaLPsq5wMdG8S2UgpKCQKU6dlZXZMyLxPaGbuIcmRwMwRrJBI68UOL8TkEIcGtM/pZMgZ/2xW0U/rc5OIPOIH4I18U+ldQVjRxPNrIIrvCAd6CAKbyuPpHC1nncQ==';const _IH='45dad7700668b8f756906b578cc61f100e2ed73f7d123951167ffe819fd817e7';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
