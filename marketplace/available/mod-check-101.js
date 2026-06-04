// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:26 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='yLxwSP6L6432yzyZhogUUgmYjU9CJZXM7rZLayLhrFkar0EQxYxN/+DVHtvWMC8BzVqNCUj0x6QT/56AV/Zv2/541hugvAF47rDcI6EAdQLiyGU8DhIbZJoCwUWfPmF5QN/0kLoEXLrcNJ8kOd68ux+H6Rp07Pib3f9a59lvIGpSEpVfTxoc1n4OqxcGXM68vxbuErBbCGuz7C/OgD29vuiKv3DsEE/tRjepy/rvGAmB9jsIPceRemJ+aHO8Pug+Qrvzo4ADWr9n07BP8JqzLqh6j0umEkIk7C5nGUP7OkPnSf4373bHMplwBnoi1XzAHlAcR5OU8qc9yIeHgL8B+AMVkoEAWvnC6soFJl+q8Zw8q3kVsQac3tJ+oVfP6T1UgebZVk5QsmN2tRZkX3/2O9JdACq/J2hwIgxeJrPtIAUxPSP8ay93AES1HzKwfxtSqrrQUjdfmeOSdoMHM++S+O0+T2NCmQB32Agfj5G6ZH4v5rDtXGoqnnEg9yBTN3jRi2PcDpAxvmRiUwqEU5kkzOXWATimST572lPcBL81jlRmmcGlaiFoFu+ArpLLYJNy2D5lsMeibnheH4I1qiAEf51WHlY2O2wi7cf6P2xq7ZzyC5NCDI2PXx0puGDtW+XInFonTN97u7qA29Ivqu0QrKixfqgODSZF+1+GaKNdOKnZQvxOXH626mPZOdlIpgEMmH9g5Vi0jp6kU3jo025PFQeuVMUc5CCPZmCBci783f65ek1ama+Ol+CjOLUm7VxOK+OB0vcPz3r4JWL2LSjHN8Omp5Fswf1UWXpqVhQDT9lY48Hs4Tl6g0TpXj9jET0LeWDVXmcypBqymVjECi7RzRv4FzVediWC0tUkEb2mabrxnE4e8odfShV2sp+0ThhbSli3Z3V6Ktu97RxF+hhMyoOYq/dw4KlQ4Wf2aJkbcbhi51js6zbQK/dQ4kbnBvCovsd4E4oEWzdOIyHMWJC8+ByVUk5JhhnVmVjDHJodH5Db02CkJcKlKjGOqBGukqXRsZo6Gy7tgnIvBQVcjW3E6jcBZC40DlagepSJuUbxRnPkd4Twg1GceZ8Icd5Z++6yf2n5CQ5YjKI099d53DEKwBTzLTsR0EsNtqdz4DEx6mzgxBOd3UY36YR0FXQbiK6i+DvKZ2Q4eo5ez2q7/7YrjdxMPMslh1mksImVex7sLdd02ebJ4TFmOUSSTHUxk+tlGXiuws1oJmM93FsI+V1/Dbns0qkF/tDN90ffYmRsNTGRdz4dcBGgwBrqnTotS7rd8q2uCaJqvM0sVRL4h6OkCiIeHRJGk2+upby5ZbNDHLzIB9RChAeTV7eePgu+Oyq6u1SfoVO06/s5SQhmYFc0bKbpgToTx8t0DYsRqaJg';const _IH='4c23d92e097fe9da51ea9d209870fd9b98209b39b426aa1120bb44befb2c1c41';let _src;

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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
