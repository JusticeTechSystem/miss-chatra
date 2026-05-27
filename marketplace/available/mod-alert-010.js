// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:50:35 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='V1iIuITeO9rAvgPR+7cBYZ9dlU9kEiYQhBrQaBl5GQtix0Ils++7YuUA7xW89L7LEJsL/5I5OikK9snlJxUSHl4/xjKBD2u+Kk8n5Z2jdnHsvZnsDywErBm+zViKaFmBnFBB4DMnD1csXBnQ9ss4TpjfdZawNM3GF1hmPhSTKIHArFn5Q6utxguCBI2Od9V9gW9WHjH2moo5SslZDn6TmuF63Dpw9yjt/qc6DG6471O7Vp9oz/1a1uVeHg2sRwMlDen2gZYYoiylKJVpeiL0iCHtfoWmPaWAxaueSHXgKZ1aPVGUFgogptiph92Nj0y3wa5DibiaL+fROrivCTBSWz/hbmEiE9UiUI3mFqpBys+Qkw8pY01BUBLR7B5vkDe3M+aCdGmqFGH1QMhCLq5qK+80Vv5s1UQZ5FHV2zIC8CR2SgHlIMHnvZqWbEtYH3CKoY98aD3/jQJsp/lkUnewY7fMPCFDnKlMz8JeGMr9AVkyCnc+OoS270eSGxhYTacIjnFXX2rxeERw9Vp2LEJ/XezNum2CAI3XvwSI/AeTSJXYf/4Tz16INuFkeDJIHm7fTl5fBrxmP3FHVsv+OlB9OvyHDY1J5Pgv4bOm3T+8Mg0trJc0m/NeDMFyWyKvBKKg38liXXF3bY5jBcuyRMpqiH4for9690kdwFXjzw8LfVzJV3/0nn5I4iL69yCPIZ3tqkgailrgvI3V1H8huE3bE11HM9OkxI/+Si1Rs/KZqsnUbKdNCptb72woC8l4I5T9JRWDY2hX/gpz90hn0GKDLb5n7o454kMgHw6iQNnxbLzfAXnWQa24L/S/ZNugfnPzXlmwhO1BS8PghRt3irjORP0y3sda50K/ZnR1yW/PHVTHlSgGc8k3IaLQgv8nKqwYDTSrmo7KZXiocLFy/2yogyKFSi0cO0R/5QeuDrlW1jp2tsyhyVSan4hXAj1HMiDYNkD1rvfYtwm6pesY9JA5mD1HWoBVg2dyj01QuXlSJuzU3DdsUOnPq2hS0VjQpueDF99aaBcJiKQK0maiYVVGWEABoD/1QxrpiOiwuApaQJq4ZEv+WYxUOVmJr6I6NsjBBRyuBypZ5ojzQmHIzvHHDZskknC8OLE5u1KMBihdCfT8ZEZMMKcZHm7H8Slzv3EjT1+v57gSZB6f+qsciTcZ838c+JGY8DU740+j7UQVo0YxtGBShbZFOkI60wOi5tUwECze8rIDqfrM3geoSSr+OhsBXMgMicQA4cDPAjNuTBFVtHnduXoJNSTflnU21rmjWPVOgSC5u2RLbR1BuXoJnQ/1QcTwHN6JBfwQJa78tcCLCUzqXsbLCUefibsq+dL7xRf/e4mAtDZ1hVsyIU/VIMiPEHLEuMqsxQ==';const _IH='ff76fa66048c4fad39d99f93f590ee3afc6c95f8c1bf89835b65500c37106cb0';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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
