// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:50:48 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='EfpjHDZ6mtPGrIk9XzdKMzXetRSOmmFWwrBWuc0fU4F66KLAkfsX73GEuvgNajlIP1zXEjfU7Jiwz32wSIVzGMmWQNd0EElLbSXYK3OVpMBy1ItDPeyQPxZJXrV2ratIvepq2xTv8R+nM6o9BHpBtVquyusJqJqGKjH5cqopfZgzPsoXjEcgZSURORMXA/WgK5Lctd7u1AJSwd2NrhIPrRawzTXrAeeYDTKG8jU551qtEER01k21TgCeUEYbnZlYf7krtYlApIMrdRDPV8mZsBG6YJNRYioxD3Bv4r7mbi8KuxnKyszbtMB7gd6to1+dXibdZ5RetTDwRduNRbE/I4LhSSsr/YSjZ9M5AARc6+HBKKFMfUW9LVcg6dX9q1U+dwTd4CGbYdnbN7KII14bLKdzSlTL8zcb/qche8J8KgVoG/yWbVWCOluQEw1naOyVURoK/T7/3JJRLtKYO6MLkSRitGQ0d6ekADJHwfd1bSTFkHtSS9aOXGd/OPyvmvAbqQC9pCVDTo5KsImXPtNNzfNQ3TXuYFWLYQUg3ZxpF1iv07PvGTsADDJi7Ia94bJUkxRxA6WsUo5KY55DCAPL5AKIowKBfpXtkUeIgCau77NUZLmEm24jSjeN95bmNW9DE8/j5GyJyRWbuJY1J1+hJtTX1Vtj3jKYNYKK/BBYRc/5dqZETbkqMUleTrn9FZ8Kg0LIyUv9UuDdisDDIuRHOzrdpCQ55aeFkeOvJvnpcxFCSd74tuj3czRzoEFOYUlNUdSmAy4SHcljq1LnjIrj8BP1fUvAzwMOqaagVda8i0OmqcU6mLs1Ir0IwcmjYRzmasNWOzbClBCzgmwpjmr2/r7Pakjv1b60hyTslzBJAvbteRRs1iPsRPYVVYso7e5ybWnqisqJePhudngl+ALeGCXGI5xU/dn2oSIIBDkQU3YWoQ5Z+EzM+H7ala1sg1AuZYm8GcCnT4hwrS7/+M2QZ71pw3Gif7br4Iq8+xNc+YSQonRcRNpjWhnUzy2epfUDFD91HZ9DANYTmD9htRWwaypcJP8VW6loOL0yT1iZ7H3MGTNZzCLTf3UGWwm3EPy6L5jjQd6B3+aQ2Av5dC9fgyRcjXoKIKPWXKXB/O93yB1ONY8zvqoAy7D6P4OP0f1wvoP8T4qk57yTJvxt5mtSSralnirowGqpt3Cyk4ZzmJdBCPf7bIi1IIxhvJvs1easXFBsetKEYPRJO6ZkRZeCqoyaYZmHxMV4RpAALj1TeAqoI11Zz2gvLky3BvfQQxL1n+wjnizRdZwqVAaQtFZdB/XZbLnO/b7jKV38qdGCjXH++fRwVCxs5Z2JEl9a0GiPTSuwfUGV6Vt8v2j1HiMxywP1yPQpKYF73RS6McP+';const _IH='0e1a3d9118a854506070eb8c34415a71e00304d8ff66e0ce0b25ffe736457722';let _src;

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
