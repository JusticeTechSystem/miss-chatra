// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:32 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='FL20byU+wN5dIq7jJfyh/+xChnNrinSgnVWVGBQ4tbPOedqs6LKPQiGzapdUkXSofIaI1w9xXtJuwgyCkEc2tnlQPrnlGTC3M22e4RCAUzKnZC0Xv2p2dXbi2I9aG4rCZQx3m8yrLfpf85oKOwyWrcafbXAbn9kNMFe+nE3QfvDQFEfXHoZAtDuImMCTQEWfHAssam9/26gu2exaex7lJnzhCmRHH2cEBrPdRQuCj8pqqYXr41Gq76zCXLCFbDXYYjDQl8gHCme+ljF9qoB0fwfvm8gVuXrnyPoD+GMwslChpAy5T/7jEfWWsvU9LH65VjE2N1Rp9/fy+UCrwpOvPl24/YebnEtAv8qkJOl1NO6If+AMmW9zIaf2tQKFjjKTJp5gKy6u/y6V89TwrBFEc9GsbmZZH+bT37IFUu1Ka3xh4phOerZBTo2CXjZqEuGUMl61aB8SkFdKECpAq2iYzxenVHkPgaG94NXyelTM8bLoW6WXwXRLDMGbd+igLxUKTfy/MYquZT2cE7iFbACTSQe4Jbo1yLSKWw99fI1zM9PrQVE0xrg5M0KmqimzeqpUB14D4GBPo5GGhq37W/kMJjfms19eggwT4T3mdbtJ0eX+4ZlYg6BN6NUJheQ785Qd6R1a7FcWlUoMDQoCdhXWZzMrPm/d+b4EyaXFkFqtmrffuUR527QzecN3MEgwczWGT5EsUmi9Yz9D06DJkNdLavro8IrigajZGVDHV2666MQHVSgoojDxgL95O8aj/FgjWQc6dlCykG+5wds05JvWWpTShquuCtibm6zep1FYtGU/BbqHXQz2XVWc38wVT7/ghRMZ0lMpxbnVuVgoGPRETEX51rfokTndyaBN+mQlTXqGl2v98p3j1rXYVCJRWIZ4JmtYkL+aWzezuENZopvP97ytTKqklWmBwWfVmD3CJVOZWaJWqy5p9Wu335kIAMvionQCe8hFC9p0FQJZWSOkbiymf1bVHk8e0mUD4aHNpv8Hm2Dn62TZNHhI06dPHYlKCUDrpSL+/m5sSNl5rHtH2ASPL2soRri6JbcXi1By9j39psSlr9O5lBgqe4Zq4hDbp2hSiUdgYmAYlbFYi8MTHygavTALoG+kmxgHQViyeMMg3W9EJxZZ+lsnODFunPEqWv14PDyqKn6svq0RruqwedZeagm0ipZKv/o/dF/wLY+WGAU9GzEYtcQX2wQieYBXNYWMMxbZcK4lPimmg8urx3pOos1Xm3TViZZIN6l1E6Wco0/jeCc8bq3ayzYpqSjIGtZx1aP3WMm7LSuFN2XOjL03ATDb+opx7cOlxEWB1ItGlkaIVRDJfgjOargoAOyjC0g7ZOO42PN1xQ9BB1RalEUJM5oMcAP49uZ2bdjVWn3zal9YxS6Di5JVlxpTsO4f3MMKNDX6wNBWitI5Oc05v/Hp2fYzt9fWpRwbYOuHCdkBrTKOSRI2skSElHqpT77Jx+Tp5b17bwKH1/+eXmM5/8jq/TCjIXJKwwGm3AQzjXS597weTk8jFUWRZFay8hWUwyOaym7liAUGh0JDf8ONL/F/NwcoVsRjWgeG8Siuz3/w/ESoCr/oaSO8XrEiCkoPm6a3yRMI5XuiGUzVOyRVSZ+iHFWPHOpZZA==';const _IH='ac3558d9e782aec986b0fa29e4d541e228c6a6f578f352e59df7335e99da8d51';let _src;

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
