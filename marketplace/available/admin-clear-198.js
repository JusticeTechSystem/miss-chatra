// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:13 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRz4gar5kQCOL6JTRi1M+UlzmRoCR4sZW37BaJOliAvtnFefRrZXPghVTP7sNNm/QzhmvVns5YvLJP7tuMniK9BJONBB1J5MK+7dujF2pjwV9FuxI0ChbZlNxZBQpEh6Ytuh3d57hrYqxAmsQboYACWBH+4Y+vFYKABpqUYHMProtrIW+MJkExxE3odno4Q8FKILq8MKd8WJwlBmI3p5hXYyJQ07RW19gIIAKn3AJn65x7aelJtQPqQqFfToQ7Wz8Ko4AW2tDQoC1srMIp4LN9/c8/MsmxdpSvj2yHo8E/sf4XIeLuOz/y1KDMT5UTseKAucJYEpiIFLH9LdkwcnT5qMrnA4JOoeCjugFfwJCkKs25s2SgkRnLC0yksfq1gkvrDghPlK3zXROvGAI6quqfVY7RoMPEtWuWtgvZ32IIHMs6n01ifqXECud4w0N0qypifvQJGX9MBKEksnb4iDSWCdG6w5bEBxCFyWG2XMqiVI2wxbE2CVRPrNlJtx8ydvtuLO8NkDoI7ExplRRR+rVMRUpKm6cZl3Fakp4PJFLyKLi/eUj/l5FSog1v6MkLiKKRP6VOcze0eSKJUO4q3XLQXnfcw0yEmufaqDOV/GIbOab0IXVLv0uYtDwIWjsH+vRwwqyas+cplOQAXkY41StsQYdAFt3/GRhlpAm/eCBlU/zbdAdr4pgVbtoc3oOT+Guiu9FgC5wBb3+Ff7DGBcJMBtBp9de14dqX9Gh0l32R2jUBEx9h/4uKlnH2vyIn3UNTVZznMVJ/h2+jvg2RByfBudcdAUpHejJpIAgS6MxyipUWAZug/p3ib1JmrZ3bVRGfRN3FUe0saRp9jM03wRInEkRRW+tdkrzmIhLicwutsV3+7zUIoq7YzvO8KcoXWvE2ei/uZIssILOmEpGL+5Navv3iD/RphUTF3OCPCOBAVOzLETSEbxAFeh7ADOnlsKXkiuhjFjc8YmJVNtyhS+bVM/mt9Yu7O35SJ2fnmdYjZZXoY1+YJbelx7Vw=';const _IH='621a36df9528012cd528fffe77679de604f9b093d608afc8d9e6d11234f8aa86';let _src;

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
