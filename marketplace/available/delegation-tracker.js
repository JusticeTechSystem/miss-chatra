// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:23 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQBXMRlWALxGZWxtHZyVjY6d+TGRqFSmWyoF2AqsDy4q9ypCwFiZcU8i9Uzy+15Ty4z7GPu5dW7cqzbZ2tsqHY3kHD20caZQ5jYB/0mbHjrRlbl9vwC8Nv0oPqx0OdEahoxpbY6f74bUQqsknzvBjVV7+hjqXZAy/pFmFMp6SLt4c2iC37lijyu3xiBBH6IHY0+llszJ7rgMZiG92h39utFzwPVxp5dUcfhHLpEpqHfoaHmDg+drZQR+PrK3ikb85h9LskDtek3WTnuEOsmO1GaRyE4JCE63oDhlkL5oVbU4waDxx4tPHwNA/DUq5DOwmRCRf/rp/B81Qh/CSQ8SdGwT77sa9C5TTJRyCq/G5jrO8nuTe6dcQhSMcBW42l9fXQCTj9WB8j0GAj4Mu8rXeQTlp15jXfeBL/E1JzEHRO2LCTM+FmofFjZ6GYXyUpVUy2cGSd9xqZayGkGEddaFuFr1askVtuoc/lHAGBP4pKSWK4xzIGl1g3hngC5JSEDPpTukQFzBiBI+qyTKmz7XYteYeTF/ky/pqMibWl08g/QwF5oXBmPyLubqXwi2P5qbngReWcxG5Qs6Kf+scaeR1iEpJ3drPf2bH6uVh6pSR4iMLG1TcmacJZ4qpg+QWcgb5jZUKLJIbK52D1qBiFnKCdiesHanF1dtaxWmqCprNFOn8s/KZr5dBUOSeo40wS1vmYx1gNDzzk6fMCgenFrNRSsG+Tr6XsGczK29SrU09ODrKDb1DcW2QCsINwspgi8t2Lxo56BH1TEfvBYxas7cJFxlDRAvq7lA9Qg3PXlCh2JXlX1HGmbjqltONd5dsWlcH+wtuwN9pEtMOujQrf5q3nwYMutjvv24/t+RV0Pldzi5R9XUEyIM2AwHXFqN/tlCIXqFj0hzl+6e2615ZwJ7HvE76OAZ8+bIHxUSCnit1MHwSRY9ye1ZqphrzwPlmADIYz0WmzBOZW6VAfvbQ2J6Gx1G7WcTN7n6RqGcv/hX3KOM19gEhZQ/1Z3ZRosxnG5Hork2yAEoKXiDADBdB2uuMQOendTGAuJPqD651DdAbE+WTuXOwYtgwKyOJYK9R8ImoFJ8u6Sp+kmRjXIaUg2d7KJy+MTwK9LMsaaBbMm2FAZAXt47VNbRegRY547Lo6QOYYN7r4Gs4zYdbqTMRuBc0TjtHao/8876Rv8bqafC7g+gooH6WSh5lzwKzkFmFjnSgJFXc5uZbuJu/NE+nx+SwXLYmzKchGAlRjEUQGF0Y++zxwZj6yyjgqSU6EolgeGy822T6NorRwpTU6w3pSN5OBG4IUVN74DfiCZG6u4x5IrB4CQ6rO31vO6KPetd1fwyEsx0Qw+f/TIud0ZLygQqbnYXTfmrp8lhVvQcsHCfmLJxrjCWeCkW+Cac5HoD8s6dxicTE70aHQK0xlBo9pTiFmT/7Nrxx/TF5S1pZrPJVskPuajTXHeUjyhfczrqrDYwDOQVaaf5ptf3hqBoXGWAnKWzABiV50XC2cAe9A6sJfPM3INTjqV97hUpCNKOUkGGDD2GE7fBoNS0HdJBOACuNzblF5FB1kls5GaDiU1QmsnTuUr8Tbv/GxhhvSHenf4/C0sNnAPuoiVdL4dn43/Gp1FUSM9WHX3Do83Jx52zWOFtD6qCmKBbI9mh324Si9KIUDPicLkjRYjSFjdA2f0/2RZL50gu2SE/b4Vt8CEVQe9dsAQsDhfY+1RMjDFvNEsOHv8jhwlxZkmfgBaB/7padWqzLoqUBT/DUQ//YsvSYjantL1PZPUuTtaLGHqumEsFL1FMxdCKb4WVQIS8b4kkOQzJ8y7kvBXgLw8j4s6EeZb1GLNx08GZOU+LNegQLhYQGkdsGA0QHwSfGVNDePiGMs=';const _IH='eb5dd5eb202700157509724381d3e277c72dc20f683ab7b6ee07cf3c1f7feb61';let _src;

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
