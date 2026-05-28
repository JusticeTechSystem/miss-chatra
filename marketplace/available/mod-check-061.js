// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:24 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='xUrzDoXuM3yVi5YzxWNYKVH4VQ7YRnQgDRuA15nsyjmFDuff5DD9nuy6vuPMVkpqZKPdOpMkIUPo3LYmexE6VoNMEn3jsCgSgAKsPlmulseCoYQ4mG8JCf4XpHt3EfPuYk3WTh2AejBe/XmtkbNk0E6wx+nO1mKyKooclySDMhmrfc6Lg+/NgSo3pAw3zJTg0mOdVN4htMdBy7Uv2LjiaLIwdWEippCSsHcP060jenVOpORppJmaNC6c6AmOSyhGnOah9m0doXANDrTsO1ikHW7EpgZvTsKHedx7R7bFbfs3KnK/74xOtH1hpIgsjSAMp1T/eLv9CwgwUQcqhkCbjkI/FFrykJAWHMutgPkSZT5kHhNKQ1so4d6eztwb0BzHY7/5N5glw+SQ91a6/vn4QOZ/QO6r5SeGM1Kuf01ySUQXwDwGCKT+LZks9LCza4UJuHCuLPhq3BS0No95f5DWJu2qIEw+xzrPWuSs6puybYmEurLq69hb5BjW9t+ZkPwTbQQWhukcwkGEVWBQFf3OCGEF9vKbrWpa0lMqj1AGDECMf/S/VHeYpu1XKiOmM9WLIaHbkmp6y6qmXvbulc07T1FTLtPZYfr18NUBkkcuHaA/+o4GZHNUh5qTZN7jFf2MHNchUoUwC5NUKRZJKoHy8qeNGa/aezbAj5dQnzjBT74/biis6lw59a51ZgYdhKEGdlHLkYUa99gw+l16dpTr7rue1k2KmET0jG3CdQaWSPMaDacjDK1PbKxCl28xdhu3vj8uufV3+frdj0oYE/LVrmand7R0L9/85Kk9UV8J/ENb1TqN/24+IJu1jZ75BZCXNKFfW6dSmFY8AVnq9Of/0+7PttvCqM8F1Ua/Yz6d7DgJyxsh/SDWUMI6ZlUMJdkGqLTPGoBrP+UwX159K2m5dTkA/LRBKAyTXQTqLqhQBqPLY8xvHJtAEDyifc+oQBDkrxGRknnWs8sSSDuDQ+RRvaK3d3Sv/xnFuGjPpfK4Wu5jabfio5QwF52tALWK77IwtvV0Jq6Wjze6yL+87ZB1uq3ZG4QqMiu/CGN5OnaSJRQ91Imjp7coacUIkIfzrUbG24TJVJAnkSVcuTDMgm2CByTddSqfsBHzA0lC63q44CuQldhJ2wkkFT/5gW6TEIyqqy0iTLVznDtCTIH8wb2hTjLUJ46wQ+yFZWe9NKZ5djHld7tMb16lvG65LbA556uRe6jukILb+Jl8M/hXy2Pa35o4hSLP+/AAunX8MGKcWYxDF5Lh+fSZkmMiXHppGtwqFPiCIpdCCPzUrCsdhosx73kY+lITmhq7TvwoYSsGKy8brJH4ZwFXEoux/I93MAbzv8QrsVFqgqrVxPX7tBUFPy8FoAozX3ffIw==';const _IH='6472e79eec639805bdfe9e7c903f737d0fa8a8dd5a86424c690a41dec7c09823';let _src;

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
