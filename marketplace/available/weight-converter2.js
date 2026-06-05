// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:28 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='W//0f1sXUJXctqiQaNDLM2JXxK0z4RvzyWaIZQOV3MZNeSiTUWdxHgH1Q+wqxgKrqfTDs8Qo/t1MKCfGzChAmpyBaTEJo2nrqqiXH/8dtQNd7T6oFu5fhvrcpvNHp2Kdk4iwmkcV03JTFBAII+kpcmi7/OrKMf/o2Py7xQRPBTgQpJQztRYi9E/Fmy3hP1W36hRx/g1YjcuWCmNSnpeHjxpHHrk5+Ku+AMeHej7vToynw7+9NE0OK23hcx355yAuZiKEs17FEWwywKQSvic+N8PhT+pz8yj/iQihXhjXVtozFVlMPkOUOHVPXKGTve1nO282sFhns/5s/04r5qGnQKPP6uCll41pM0+RKHjW29T/0yY81gfGPg/LRmV++BQLvTl2borQKR9+j8uvqTbALkKg2cUHlUKDTze+iWWs/H9TWt+evkEz/54HTAxotZ2jf3ZB6KuxvKWsdD56kaxptSys9V2eGt5eKQCs865MaD3bztWkkK4B4p57tk40X8P6mXZ69Ynyl5zEUvS9l8wkF7cowjoEexlv4AQE14uHpRGgkGvK6tkHA1CC/M7kSSTkAgfZVCqiRm0KnkAyeMvCgJ8X4lo+jL66YvAr9I6Xh3OTZ0vi560jZCly2GUjFv6X7/DEFuE40+flu1a3hFYWb9a6FioG8JrXaVPjUd+XEZIbF0xgbML+HvKQdwisMwrTkcM7GnGDR5m75amgp/sxK7eBtRyDkY6eAaEbwVc5aFJeDAjOZeEImdGtW/soGMUuBWOQIftL5Lz08E0vHHBFJV8B71o9qN+ifZF6PJf+vr/svnPZcHfmCqoJvZek7NWZ43QzFlHmygNC7MFAJh4FYP3DfiyY/PEKt8d6uyxsvgP2W+AnCea3gFfpQsmUvGmwJ9ObPQ182pJKRBOq3fjV4l6XNEECRf9OSqUyQ93vjzqRizrCIqQEgpu/I4t7a0nNayAxdyx+1XOZcix+l1tr9jDCK2yNHFsKfRw/KM+cIFZYoMBKJ/fxSM31hMr1sKccb2zIrpD8EJluzeA/KK4dxt8ozjqlzDUJKshqPa8GYGWQuO8xMLe3UUy34WWTCBBlwAqYWj3zZD1vzjm6hf/XXVvQn7ltyk7ucDzJWRUv3wTl0as1+QG8ga3VE2aJM+7XpsHHus3WyM6tOK/s50UKXzm83vqH9qeyoUUgi1heOCOChQk8Yj2amuexZS1WrRw0QkYqogkzUYFvwUheuro+JqJw/3FMhEuSeY8eW8+jnU4G8AFMKudQCuusyd1Rk1YuFWCuCp8Rfja8YJN2eCfiwIdPadhR3njQMn5jqtGTwOf2hA6dhYBp466nDwdlH/o6w7KdAIcvTR7eHLcipdOvLcg99CEVsGHiCTrcsv8FG3rJNIQEOZoqKFxOUlyLZoBHicIH14hiNeKNi7a3iMgBV4sybQb/U/9i+25Clo6JfCKOisvgXpG6YaBkGuxbsQ9h04/iO6gkShGbIBNp8DmWS1im6q6k/NpE9oEGuU4WPBJg8M/5heMszS1Z0ictdbu+P/7lEU74/R8QLHQWizv+GYPwVIDJPoj2/zxv0U4otPsr0TK0fgNjMhqiqOnRRAJpFXBMLXZyyk8s0miRgThEuSxkFMV47MewJsCRfKOjVz8pUGmZQp9UL6XSR7jvDXRyCdsgAZyPmFVWlP8cI0+XQ6qshuDy5xNu916TGuaztQyDcJlr5JGhu8O4G1xUkBBGaBXvMfqcyz57qcVlw9OUGQjzcfTjFIAVJw==';const _IH='c49972efd64022eeb318e2ec4a6c3761e2dd863adae18b5814dfa5d9f3bcd8d8';let _src;

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
