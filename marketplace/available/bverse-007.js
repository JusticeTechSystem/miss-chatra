// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:33 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='iNNnWYs5Or3pZzqbwTKP16LTtLx/7ea0VdH9l9G0cGxGNXmQVxBaSExLOYoF3Ayp3gqNForR0DsCM6OeaFuWrJGpkvXovCSI18gp87GNSZb7wzj1LzYW/yIOzociFqc4ARIVBLWk+YUFG2bixbYZoZqdEth/1iqO09yMSbMJNPqZj+hZ7fZ0PVDqI8ZN/hVXl6H5bFL47P/EECqMZaIQuKB7mbg+chcqEmTLcwPC6awUzH8+kkx7JxJARxvhOwDI0m/l6bVNut1Eul62HYY66jsqHbDIwisfzYDPQrzR0KOk3NdRd2pl4D4xWFpK+F1p3aa/4K90MxEv2Nt1jrKnTsT0ESchTT4DWoptJwq6hr1WU2QlWoVO1RhmdQWl2vr2VH3yaLxi3w9kcIWkbEzmj6ZeVLEdkj1EJtGu6LlMk+ApFq8WJ+FX1Wzso/WVGTl7Y2cVlXeq/52x4KvvosHdMSEqrkgoYWr/+WH3K/+AcUmmLygDOAcAI8HD0TJNwpMCWm+X/IFCImkiqzyrrgJfVx1zjIBq+wpXrzEPM4K8h0wicGSzKXJtAP5KtNdQM+cAa5dd3YBNf8mdwhZ3Bi1PfRdCMWf6xA+ZL3zI+eRwXyWzPkMgJMA/OA9MJQ4+lfTZzwplkkqLwSAnoloP41L9ULlV/safvs9R';const _IH='8fb1056be9e403c44f8829e80bed8f27912ddbae01f42182cf0f254402cf58a3';let _src;

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
