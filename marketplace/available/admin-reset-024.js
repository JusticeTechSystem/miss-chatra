// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:34:19 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='wZBGxUg5fyPvr7e4b3TksOLE7j5pe7/cOK3FTQgtvWZeDH4C4aFWJgWnw5ibeH82p2VLxTqvQFuvWhMPVggcFk5l3l1L6kA99s9hHTe8lqfe5IR0F+4TAaR/TAgOpCYbfc+IymI9IYWnjPD9aB/CJ10yoq17gC85qHoMjas3zSnewGAN21EX1tWPBNYO/ZKoKRbAS3o+SLGcBNEBQwVj6uw1/cMm+s6YTfnEltZ/o6qnn1CIN8UyKwdYpSnGHdtwqPUepErnHsH06LUGXZWw9H2tOTfnM16tR4GixrVCXf6XpO42lklv5/ZELko8hbMjZ9WF0Rqlpu1xWodibmEkMZJ2My4whPSFeVVkE2w/dhva1ZAtOi4flGb6mqy/rHc7SWoRMPMgnhnZ6Z3PDD5p1kVNW4lJh212Kr2sN0wggQvIgswYTI6j+B3qb7V3SC6Bk4kucZki/8UE6PKEWbczRZMKtIST3wJ+3HdQjLjnqqzhxCz3Qi4zOjFqvt7UdWTQWj55bR2/iDvigkkcO1FxqE8LsxJDI1ijXxqZoMSJlFgi9687S3U1sgZIaB17MIBlPtP2eiZXPqzsTGbHdQEdCSU3A6a9mfBatiTfytixYMmDnX3+kwDXVtwCepwEJcVREdvXV2MoRpTqDMD3m//qu+WuECCEc1lrwoTiPcRuPkE6VgKbXmhzmgnQaUB5gn/WRyVHMRdJgDF3FLyzAewuSy9phTWR7kVrshw5t8vm3+H3b/SqKfQsRx+jN29UvX5JuAXEG3jfjoWhpoJx1Hq3WKVIBJXslvZyyAXOndrCqm7bT+rRg2mci51232evDKKoUMsmgQcA/JkpnUKspWa7yCBR20spuYpzpMWqrPIQZQ6xejcZ6otW4WvGaBQvRyVX9+mDX6sgiH1DI1ogZZTyeeL/bM88FxegfF235W6gxcdBnrqxi+1zrAdh/6pJaNC+xpvqd0ibG/WpvszunWaoSvkqwhMaWKcvuw1lG58KTk7aZrGgRIY=';const _IH='5cf40c348a95e7e971241f3954c84d4bfee8e60579567a5229c2fe5da72ea970';let _src;

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
