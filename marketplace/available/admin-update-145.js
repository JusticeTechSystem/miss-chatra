// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:44 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRCSeG+0xqWHcpMrp1k2zUlqgvsbxJWtk5nXZokHC0AS3mJh6KmypzlNI/AvudEtbd0szGyvH4rrcFFeh5Wruv/i+7GkiSXKY9AukMZ821lwfMiBfCPAbV21u6ZN9pfcdZ8Hr3o/xlRrr/uRLXcFbCB0dLN6GEbgu8Mfsx93AlwZII5Vyo7QQny7PTlKPUEkFlOJsMV2jImjLeXXeasaq+cZ2uvrO3q56b1dtl2WGN3eh2yJoc3pSgh6LH4UR0H+Kf6QzWN5L1GrC8shtgIk9ckTgPDnhsCRq91j6fXridQVL282d3Q2MD/FAO1euue5Zqk6v6WIBAPKgJs+aM/xZgISf3T400QWIP1WpvnG8scO+Wgx/LJY0Oo0Us6H0UDjjX5KmKUi1TB/q2L4XFcET31U6mkfKUIPzbEhPlhUowhiRu3T382iLzrSJqM4wREDGUUueFhyEdBNmZKmWx3zi2BAjM08aiv1m+1BBF1OHh/eAWMtG2jtsrFscB+TiEL4n+FZ8P7YYdCqnsE6FzBa8qMSHR+FF8XbVeliVPARObr+DIrQZWAaLAHYZc6v9JMVlhezQflZ3gL97szI5mO4scJZCN/s9xV5WsldLCXMy4CnAGpWMvydObA2oFLeaYCQe0HoSXvnM6zPY8+kYLNNhR3pVSpXyH/AoqSI0CDdDPOkS9Jzsu1xSc5didE7xVpA7dI2V1hVZPRfq0+NEidBteM7EJVSfFDvZe1zoSgiMwUnwzifCUPMeU+DwKTb+itSIuk4g+GDUqwlx8dz2QlQHROgo3awTqeEf1reTWAdxavvLzVlZRq8un9LSuX/0cEoBVaVsFrA3q7F8sap8rNwq7Cc9ST2QQWGUwPTMZG4dinegrHhXdK2Rcdx0i3ObhILyibZqzRxVWsJbupEHrfbpNpijlvLlHW9dFyRr6zKecfl+7Nyv6h+yFwENP8lHWmLvOsWKILl68SYuUegYwQL0gilnNJp1RiRLFz3Fek3jKuiCufiMnZ2DtmHQ8xf9gBmgV9';const _IH='bdbde6981ba6c4b63fe0a415add5c1bc38b7ab9d459049bb4a14e693c76b7871';let _src;

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
