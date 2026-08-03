// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:41:00 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQrC/MQ1lGgf9x926+Nb+ZtJGCATYWMd8TY3yiWf8zr+p4DrmxA3ngdaq2w25DtjQO/Kc7QdQSNIEr6h4pasj1ceLG5a3X5hvhu/68mOXMU3HhQBVhuMaBK0agoTINvF9kgGP3310zV24G7eubVBymT7gDMa7MRaN/qR9uRnKdlkxU/uUlvaN86cDrKlPmQb7WPf2SpM2+LMZzfapZ77ogUL/R2Pxrev3JPFPMszkFBuHtcm7tI0dtLKNvGJ3tNKGxJM0zxl1fvbeBTXztCJ8BqQNu3NQ89bQLSR0APCGMIEDEwQqYL1/a0+8PJ7tH8YKjCfKXRO7VfFadcd4GvY4oq1Q2zEcoUyms3qzcSIjoOUbumSLkOUpwIJDd04717Ss22EL9FEizlIY/qusI3+Rq0B1O3eZL/wMRu38Zusjaq1EoDbgXi6wx8LhhiJA3myV32pBZBbqLd9iX0mnEj6QeEXAD5siHe/LvdWjEG66dMOMLIbBjF5gs4zsbKEVhqALLCaPm4R1/PnGCGs3JdWlQlrmt6Yw19VWWXe7JTreSQw6KFAPl1Ocklf1rLkIybtZB3gUYtBY1XJWQZ6pMU0QYC5II2ErzPmBZj/VaVt2Gkd5uL1glQW4/7gPy5+npBqs42qko85BS8PWlfzR/cjVr3s84nWf3FOOTMlCuHRGB9U4OyseEIk4DedtKWHFfEvGNiOOZTYfznS3UZQSK8q9+E/kQIRM2zUrasKGXIH8+HxZEmU/oEYcwyxB3x7ZwgkC1y2niwOlMt5DLv7sJ+EkaeNckzRFw6wvEUEqlug2HtzxspDEtR906FPBD6INFVJCScn56yR6XmcjApWt5fWTZpFxvsULE+pj+R5XcPJ54D3ZAL2ETHH7tw28vmOZRb1djtlEvBl7ZNH/GJ5R9KXbX2jJpP25SKh2mACemuoTRmEgcIjC0sThp7PH/aaI0O4h30ZurZ6lYRlnLjZ8xRWHUg8HLH1XucOTcFcsZu1ZP1s2YpayuaeDBGVsjLJ0DZm81qC+AgB2sDXbia8KCnJ/Q/chp2HCBhD75PbGSkUKYDuFY/EM6rJ755CRtnESokQeKQwN2AD+FZFCjyP6TaNsg1/yGq4GIoZWop+ylHt6U6cJgFqj4qEAeyEJhHQds2mhbvnAJKi8Snmta02GgbMqHJk15+7HNeuzcgw4L3RQMBtwmJceZo2qrNm2iBCy4piyeM6WAc1Fq9R6BQ/ElZ8NfsmtMzOeyCf1+U8wnrhvSIXKVvjyiZpYQR/6qpoiBwbRDnyS3qUM2FejBCnMMj8UzdVrTQFafTkdt6e7CCttLKKd5FAmQOZX2IjsRX/oIfdp6Y1LjxKCcFZr19XT9XmogNtWSyif1V/fNk4DPkQeCgrxqHPzUDwHIts/01N/7xrBahSXvaYdscBqCJ8ri9ZqD+cqZz4kRtV6/iftA3AUpoHA==';const _IH='dd606a89e40b573d55f81c0a9b3ba4c4ee95c5d7091df8ffc358d483a4469676';let _src;

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
