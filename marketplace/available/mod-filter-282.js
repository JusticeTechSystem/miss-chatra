// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:10 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='v2iBVtpbrTczo6DN0B+u8RqNPwRVR0ItfQtir/FEmOyAzgGYL+RVjDAZNQQT1QnIWYtxZP5+h5ItHo4yqe8WjaHpwI0rceeAVIHntkj5l3j5BM/U5GeGU3hA/xX/7hG44Hmb/C4cAaPdFFSmjV7Y/+mk59DuofhC2nsgFM/n+s4sh7FicyDARdcpKlM6iIFG9YqD52DDT9HLKpfyX+YNPolX2+Kg7cGxXRxp7rLiWl0nE09f89STmoxZoG06CjzcQB89y8nESXQ0J0R8Rx/u40K68V1ek8ggj2IzSmMA4Gss8+wuBpsxWKhkUlcIloXcnXLurTCV6DhJCu/eBOhTh9v06br/Y67fWd4IgKLbxaHCw2qNv7VA+LO+voPtU5NebqUTwbdV9MJl4uO8+ghX2Pe7dWUmzNf5GeoD50LTn8kzhNpSYEqzcu5izBRVy+xNBkvLrhVMXTPzG9y3+HmKrGCMlDY0Sd5rJ3VMQstjS34ErVygfcZj5vwRRdUEzb3hFRs/W8WVnnzq22yfUZe5V1V0GOfKpjT0xGp1/1E3ZkT8ApCrDTwfY+AXgK97PHRVMKaJzzOYSg9Gvz4ml4kXCgHTIDV2hxr5cB3HCjDdSmXHW2ZA7dF6gFLePB+td3DoKVggBM3ipohrCDGczPZPlGsQmo7ZPcvzbsACUrJcX7hQUoIE5LgyGgXz/rF86PXYAZdSw2ot9Q9RAr5y8V9VT3EeFnBIi8VKrjSWHSEJo1zsrymZWrM/C//t4YToIPdtft6/n9TSq1rOznk6btK3EcFIJS+lUgte7Lq0iWbHarHGoXt5MkjPjmXNowI0djq7+H3qX77zOsyNUQxuxrZQAnNphYWyWA0DJmu1T1HhexkidC2125/BjuL+7/63IuurdUGUtADkvH3S6YD9Kot1z0LYfzTXq7IRmpk27cJSO9FArWgIMJBTR/nmqAulN7kfdbqRXURoIi3IE1x0mQWcahIZU+5/Qt9khq48Z9rJ6lnVWzeIAA2mTKB2SQ7u08ayDu0s6EbO7JDf8xxy+tfLrT52bL+CIb/BcnvmtxjaMtPmYCqjf3RnTMeMd62M6EgNtIkoccS7s1RC/lABgS/Q/AXr1lirmoi+OpUWZ3OVFLUnPyDfAbdJPY3crCNWvsCVHFSGBNh5wXufpmTlUt9rovD+svL3UExqewEMT0wsxaib6JSUGCYoiB5/Tn7VJqtGvauXVVc1Y4AuJJYrGZeRO0MSwf19jB2qcCvbnOAGUe+VQ69gjh6vajuuDaUd4lBFbzMi+5sCh5cWXKiR0x9Dhm3P1PeEQ0JMtxmoEDWT4coQ6ShwKg2hUmtiU7TW5RID9kaappjM2zMdRzTzl4jHOl5xDXD4F1ECkI/AZYPCf5XDNr92HyFLvQ==';const _IH='49a6c92329fb7e128981574cb82b620c3c464a405adecf629f8a2676c36edab9';let _src;

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
