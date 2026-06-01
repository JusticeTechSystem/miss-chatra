// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:32:57 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ2o+wqh8D0wDj6VQL/NdMDOOJnCSZNVIqDdL35vMGwhT5s6UyIyLeYlCxi6L+TrSJ+ib55xMu9iwUR/HXEHxzuX2OQiIy8fswPNDyg4NyEcqDLT4vBPHHXcv9Pwgnyt5dUqlVub7asiUy18ldErpW+OQumfMhGIwbQeFQlZgXjWWKRVMpvraqpQJEaQhS2Qt4DjDzDh7D2JmNtmGyweWGyf8XaHlMLVVg/3bp9cC65Vi2PTQim3RslRn/jRPjV3pyc/EX4fzsaL2LaaL2cKoyw7p9rvTqdLiuC8OGKGfLGbjWOXUO/5XZxvM3qKYPQ7vWq22ryqegcMklCev+PXD8moktlY2Z/zfblyoFoxASEfOFb6hyfXSo2uRdlfZI901w629/L1jW+s0GcxETqMggB55U686xowCDiKZ9uFlGFV3rdHojnxkP0vc5xR8QEuAp2DGiJzoZzYZI1jo8Lgd2C3TiUTsvtmjbgpI9i/Zc9wcVrSRnGTVKkPOLnKYPi/Ts2hjqFwcLXRcEgU10KFu6A42bY+xepjGeqSehwzi5+xPtrwTSUA8C1oIJ6JzwaH51tohBiN/yFKy0pgdxToo4yBOrPeONQiFF3g5Zj7R8qEqx6pGtSpZO/v2ka5l4XIJJCPMm0XS8SEXVWHjkZuHFpPgXgkU5AF+GSqCJzhkIeVnRwrSOqMjG9RXPDOj67bA06/8We4NtpAEmkFO5149q44WPowVsE68zyLw/Jf7bQu7qYlKp91Yz8l5WF/8egrFB6d9xGnt/nMsy/aawJTsOBMfzT709HHqWdUO3Wyjue1OJUTwUBU+mj12ATdWj+aLNHJDX97WIhbzg2Q1wJFjoHdk8GlCHT5kLlFtUz1y1+j1zj47uVXpw7+DzVxnFkS4PAVoDISkxBYWQ+sn+lI3HQCNs5iro6FsAi/8WXo2Ap+YBTNnxD/vFTE8Cz7SdJ/dfLTbZYgyaHrAOQuTohKfBMhKbIZ5PvQubX+pSryru0/s9JtEgppUZrqIbSIMFFLC8KSjcNg8Osjup20MHlq4mVJYY+hChMnOo0B6BokbaxqVTXZU5cB8qp8WRpjmRbP8yIYRw290QPBBvmhy28LqKmb47U5ynTQzZ36hXFPlFpwzp4oHagpPFTFRFuxOwkRzTbQUUjijDteQGP61h6qW/OPh9KM3f98jYYa3LTlugJeHjyaxJL1qlgT2Mlzq2UTa/a5h0KJdhz7bc+fou+ACThu4krcqj+OW3QwKyJqSvwPYR+3ktyyTU2+7aDt9RVP3MG49PDQKkppMIQ2BdXzTKDYRfidHK0Gg8B9RskNQukn4/LhEXLuzgaLNA3ZcIqEoDl6z3B4Vj9oyMKxKqtBf0qyCN2EF72YsFSrTlcQ6FFIHEM76XVSxjNOmqx8ayT8w9o3GNnwqiA/5qqSD2A==';const _IH='dee83459bf4721a618a0b583d31c92aaf37df9341291d4af89cb995c18efa4fa';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
