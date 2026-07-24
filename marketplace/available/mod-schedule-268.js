// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:57 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTZ06HQJXgJa3R/wsltvm1Y7zian8ok9CjftV0PxJ/nFcNi0ry1kKFtCP7/xB4f6hr6XifqKzEwfSoAcHLO+I3NvNBV3SWf2I2xkItXinxwL6lkTpzZrhpylFhw1XBK8bLYbMI/ewfKB86PhFRM29iV5k2uhfil33hb0GPXOqJivRL7zLmGuyFLt5ldtBNcdBtlknpsuyLOudaPV8Z6BKyUGUVaIiaA9lVpgrKgYBu3YlXeVytTcyZRM6BEDl0YfDrvRICDFmfUKqhvgfBfQMLCqlairr+Q07Rnxkf80c0XUYdwW55vBkL6QqJOcxp71/ssCQuUygdLnNcqdx7yVc6NKVWKb3CWPh/7T3+EUCBxvDys1GSf/qn56vYtES8vYnzKvHe6oBvg0mVWAjcPmcTz+UsUFMqF3Z64f8QDt40V2FpHKQ7dIEAq9wcy+35pP6/o5biCD+QxYaMg6M2wEvV15l/Aa15Ss6LY0aecq6Mhl3ERtD+1srSdjB7bXDGBblnh2ex4sS2Al2mWQh+TNBCs7G1xWgDmGeDn77KPe9yw8RxaaTm1d+GsZ5XiDVfcy0eGYlz8rRRw8l8+rsMKlGidREYdYmMGOidOMNg05JeqYkvz2CR6ED0py78nRnSoiSQVKsbPBKjteCgdrdNT10Qki5uAbS83Fc34NBeiugY7YKTWujPB4jqjS3+88ZPrVqDkQc0WZy0tKz+C2i8qSpTHqYTrRjlDmZxvzC7Vm2YkMjYYF7zxtUEuYV0EBph6xDq654R5TSmaExGVVo89vTZ62uXvUzcF5TM8sqyOEtbpPc6oV7fHwK6sy5g5CJ8fSwwc7YinhignJGODPG9cXRqYMGFFnne3br1kZVSFtamnzLZH/H8zODirqvvGv64RIWUp4vT4vBkt6lNDY6qgF7Iz672PV3JNJhDvhdrWsAksfLwGWwdYAkYloVIU761yNhcYO2FYmTtbaUYquJcR1cchUZQ7XM5rsU2+EWXx+uQXSa6RH5y568WK6kTTBZed10KMue25CFqI+PGa58TnPobT7oZrJMhlzWciBpKraNWlxj+CuO/y2f0WV2//HWQD0o8Fi0E/+kffk8ZbI5Yfr6hxpIzWsmXVbHCp0v0A82PPLp8yNF+9Ag53/9+ExnVL9caXNnM1oAyLpBpxD9bXq2EgKRRWWEijHXbZjM18AImaV5/mOtm2u06Nrs9RQ2pCmuSWKD5UaGvoZCmmsL9quUfQ/dU7uLbsDrKxQwTarRUZnuqrCMEl/G+AMPFzqhRy/OZIMJzAmqV0DLVrsjIPrJuMXOgNazoQJnhK/csm9skSCvYGdlotnrmR8VcO5Xq1XEfxyUUhSHUBJ4aKZ9xJkdnXmj/9kImDu8P1T5O4A2XkW9S3+Be5dKzPTNvqO/DjFULP42lULBXo5xqab8Q=';const _IH='ef870afe54ba44e8076e1ce28bee1cb094968d4c79339556299dc57267545858';let _src;

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
