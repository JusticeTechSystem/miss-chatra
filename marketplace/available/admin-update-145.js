// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:48:11 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTsU5EvwaOBcQ3yGchSyQq6ugCI7HXsYnKEQO99W/g9hS/H7+v6nM/dL6bYj1P2x+dJ5Ld7xaRhpUNlcSaxoVA3j73jBRhZDWxZJg6P7FnM4qafqqMJYz0EI/2eVwwj9Okxq/m34sqGxgPGWzkt0tAJYZIgCn+/nR51OOiSnk/RyVGZO3ooOJFG/38s/HXGciFogi+p6JoQqzCkmNmTYqK/lLDjKCvfw/toK5b1OgdLzqwie+CDkcuP6BJhyxZudkUOsaQPQUjPZqBVga7qrLCYXb1ppLvp6253xAsObu9rqskiM3UlWY3NTKG40CGJW/90tslaTA8D1qqH63A4NMEbxOyndjyU+ru2g5Kfuj0hXTuGRClCYVTSBqlfUUT+aKf3qXm0Jy3F5myb+Fk9eCD/Xy3qFDvvFdp5JlYmrug8CCktxqF2FDRi//hq1WYZWrtnk97TTFhqiSdH2kS/37X8xW2/cYBgb7Z5P2NlJEmaDanuP20IlW8Jyr286oByUKu2+P0rLMD2NJWcre6fw38BcbScJ5KGghFIvVzCzCq9u/v7q7NSyfSWjD8Pn66pd/mJ9uyAaJTNkLdDoIZxVQfdsV6latXqRxI/8+UTNHc8h0Ol/Yl2uUnrJMrNmojdY49+VyPzB+IHY0gtQGz6OK8pcflvgL8hchyFDREM8rKCEOTQWvm14hqIqqs2583C4lg0D2tA9NZZDxxpmHGIXJwq04X1qdX5bnVWVGcpxaLX5t/o+tBPMi36Cv7RdF+F2xGNeUfeTe1rfm+Er+dspxfYdhGL3OxdcLrTsn5quimoF58aOS0lqpuG5yxmAfht9czVF83ITCDUMP3uTe5jwqCqmAbDGBa7gzjNhYLLTPQd10NFXpe/vRdrqmZya9vX9vtfiYs2Db28m4jbV44VTCeXyrtI0lGKQ/s8fPQvfLuDTc1jZthelBRdy6tLYrPMUz+DbqBRPpcNYGDFrpy1hVfdBTztFO11gXQc5xDggEa1xuiPAcbAVKJYB+itCCCr3UVr';const _IH='eb8e736b1e6c2d6f8f67b4a65321b78fcf72e4cef9b61f75ca9854013d1a47f7';let _src;

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
