// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:05 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Jz1CPM0eFLa7f/IgzZo9XZBwtpZ8yLedDfdjKkhKAOn8MCxak2mRbvJQuY/QiirX/rYnqJSAUMC5g3gx7O6JTWTr7Q252lERay/bPI87ONxl0O3Q7KqeE9HKZZQVdzPsxsxzcBxgiXqAiISVmrlLAMeXfXMLecnIrH54yhQtRXikJ3i7bZY3mJw0EtA6Ht2+HHzi5ApNfWEqROwm4Mr+N4Z+ZHEjPSAWCqHKrwDnZxRW0pkyLKvK3WrPChL1XbhXfHwI6lvb3uzG0lChybhJWGU/oBhM3V8IQaSLGuPd2fy+Ur/ItTJZ0KGDUj851xacMBM8K6hxxPTAOBW4DuVSM5hlnEZiX93U9FSOwsV4Xj3gWr2eLClUA8mfeWIjbRDPXI/k3EsQfAT3HkHvRoJCOrfuEQzhXOdZDCfDN/UOEOKINBJL2j7VgJEpBL0MkCylVnb+sq8kPn6EoRuztMenYASOwlW5e+xPzTubovBQ8f5AIJVM3uK0a/NbPn3PjVSg+t7smQqMU/ajU+Vevd+qftcRsDZXPaGCNtUZ9c7xKJhyRV/izMJUuwmBa5Bv4qpZvPQP4y4A742I416muTlujLlHxozfDO+SjMSiZjsuGpLjlUyhZ4W73bFSrobGr8Em484RfieJRhtYS06uXkAhsHpMMUaKfSiITV7gmurnAsEsdIGAkhTPTFpOE1g0XLlRmozi5lJ0eJpC+YYlNxoYNTuiXazfXJruyiZKOmiUEMl3R7jgviPNV9ylJ3R3oLGQwLgG7eLZZnmUjdzZxSVMKMvc4jQA6uYbKe1EGyZvAxLUW+4J2ztJMZk8aTyFROES+cyxA/K05dTMcI/LgEFxP3rOUh/2nkROC9B5o4ZJ5+hqEm/ZpuQUuJyEaH0e7N8zerCgooMZvaq9HQX3lf+ZMkrRDggcMMe4jF+F5KwZt8YZxSOXFS5+RRFAH7fa5tDKHc90kyX6LNihKMvuX8tOMTbEkFI1l4d9JxmZls7mLIUt6CT2KLgEs4KAghu9vDP1zdguYtId4LQj2BsAp0r6yIhEw9o6Xyw9TWKJTYB6DDIKRhYo0bFDWXyjB47GnlchG58XpphtMToZ/vOzH6fPeYsS9EeSAfu9MOJ10qRn3D3FAqPoqu4xdEMmd0Iw0aXm0V71NNjMhEBK7HA3Rs6yw4gs1R3Sfbbd9hkRlCl7hfLcHMCn1USc5azFJBcN97iBzeeg+6UTR2TMCS/fwC6kb0RBHJJU8rmqzg9k6cTneIPhKPC+J4ZT+pmYUf2B9fZ+E/X3Fd4ZjYLbGej3+rb0vmvj9ty0G60nMRRxrsRTQvEx52/X3xhveE4Icndli1xxs1IBL+us03N761eJkQQqgeKj9ZQ4UmTzFmtxth20M4jyCsl04vjOuQ==';const _IH='92921c5e64ca2e916ac62b6d0fd3f63c49df3cf40c47c6ba0970cb5efd15d7bd';let _src;

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
