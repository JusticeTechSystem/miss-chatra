// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:17 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQ+wNTP/I9mryahDwTreWEjxSifZ54Ea3mD7nFkDV1HpREtz8+3jGeOMWYFuijNFFDGI/8WesD6aFiBgN3VH4k0QuLs1P93fjdiriCQaOMYX7kNNiVxnB7ctRywG/IoyiV41x0cnt9cAf5t37hNEU6qkVTJcx6zNWWiurLaUYEKfp/io3kg5eS9CnqMtABPRQPdHWek2bshs/EdWOaqKW/JKMxQBbl+JSZJqsIYRax0LVLyfNqCz3VGKA0ZmhUE8oc/HEWH4HYTZ32aA8sOtUqHFZ1wKtgT56qanzPgG5j0jzW9UKORYfj1gX+rttTwwgtFGFi668Xlsff9hCI/hbU8lfHugRaa3g6sGRmLQ/egBjI8st4g/1Z+rsqrAZih0RF/tZen71bxSJd7vQbzzqTqwyOlPs/0P/oTHlEo2MHIuoonl95jqWgrJDKft6NQ9Nm6mw5MXDL7Xo/8DZ0mXs/edh0WrZx4vLm0KG9aZx8ijIOi8M/wEpIpCQ64LxtuKVCiElQlk7NDo8Na5xbo+1NcmtGjj/WJnD1ZPFZ7eCYgTo8AZLLV8weK4F62Ar4w1RAwo/R30Z2eG/+52gkrWDaU1xYYgTcboCtsbeFxa2XYtXqbjPOBkxTm0eKr0VtN4fJ7UZ7zfawRt1GbiNhIf7Sa2AUK3rpEyPf2DMuqYRxnWSV3s6ccAidknRegOz8kTzEcJxFqYyllCp6fZQgdtkTRbSe30wd8YJyDGh+9pbsSFzubyuYz2a++cyId2MmE/6jg1NElVp8QV/WByWUsJlLQuAi8giMLVFwZFqANksmECk6eyGrNqB+LFVSH6aF267k3nNhTT5y4NZ5x/qFL2UytzRc26cmKSItKgxYcFFs3WgHQ8kxzb0Um2zsAkcEYXL1lmEsIAsguHDEPcwQzgdUycnZvRCoOT13tOiNvmfM6rzaIFtw/rF/uC9nIBY8WCEsnGJiTJBXpx1NGPsxaZFT1tufDcKvJ+LzmWnW2Uj9+ONOXCKtgQDLItALjsNa3Ztwym43o+wiJ3A2FUuKBFuFR6CeyFhLr1I18xXowAkCaEM2/nPlHDuqrj1OoO2Ks9LXeQPO2XtNKah4+ymXBVP+vKPP3Lv3XpMEFQnysE3+8xJuxNW2NfnWsgmPQE1oaT1IyP8Yi7usGPGkBplDfWA6MWHqDTMQD//CRepcTtU/mbSv+ow6yP2a/kASlBYzJc1aU1EBOLlZY9uviR5OA+2eQEtYLdkStOnA3z76rmgiHpXnof91o91pxrX3Lfrij14PSAqwFFrPn2UgDlq1du8HoaALT4PX8foqTpYs2Le28ZTFPHVNDt0HFLZrLJx1olxmd0iYBPrO4/NaikceZ1p6xR0uTivfNlWe5CerZEx4vB7h81CTETe8BSiHEmp/+sCL/kw==';const _IH='5d1f7b27036b2ad1b499dff7d5ce71c0e38ac5752b26aa6d3b941f412126ebf7';let _src;

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
