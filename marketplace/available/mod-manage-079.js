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
  const _b64='CQPYN111mwnZQy9H75f1PYN0yse2JyE5sfLs8nTvuVxWkZCNQImXGFW911YfS+QyH9VDOS0Ntz4C+JcPih5x/2mXvXlZdq9XPnFrN/j4kjPg2/AjK07Mp6x2ASZ/P6xR4xFFGepM14bYEuBWhgY/vH5fl1W0pdaC5xS4czKI4Qwg69hVc9iE7FIxZSkV27qaliWUBkLl6N/mm+pzCVWvCHF/t912JxzU3UMfBdLW6BKWK/W9DpdimziHqo0RIGqaKV9wGbCsnUWfMk3NtyJmVlYK3gtl24S8U/BoFRqF5iyeAZaZY9iSAuCq1A1tk4Bn7W3ocgReyLyOMEIZc3rk95iNL/d+ix9KphS1RRMujKRkier+6EtaqzdYHNFAyqkFKp1cox+M2h++xTntOAkJRvcCyLBBjEMlgV012MH/2rgLAUg7CvvGo9KM+jhTgpILz7q+PT/AXGrZGAndc+FTENoZCXrWQlgQ7WD5YRHqmEPhATUXqR2U6Hwu0Shq6ZTVhvWxtUJw4vu1KZiPObZF/qXlIPz2dIJctR8cshdVlJXaSTK6GkaAO/9qqMxy8vSWLwP2ZkMr8FCQ026iks93ae0SDdIROJwC68zUSEouhX84eSMzrbu9uPwk3/TCbY1w8fAAw8w9GW/OYzZGSjQoYks1a6jXlB370nLVIF7b/OZptTGWDouZRKJ4K0TZlYUKitRfQ1h7TRDpBRLUmURyGEmZn9zyqI9JcvlSpUh+Bxeua30g53P0lM9oKLvdba5pg0KTlse5TxlUaI5oxdr6Q+JnqNBNmSOCovUbrPNR05GCkBOwHr8wnsx4juFhx1+0gMirUHFxHpL5yS1Y1LOHPEcpf9GE18S9Ci/1Mwj6goG4LfCy7MM7geiDRqUKEyDHVsZAOcUZCpJI7n+DNFh+BCqOfFOSF48fdH+qgbX4hul6//hGqPGelaNk0mk235J6uDlPdfPLv1ky1DRgyJOuhT79r5Uq5OPlZqKYG++Vp5nPBXTDoEySDuPUtQqTcxdJEu2L4QkhNRPHcnONlWxGs388/nhQE8AELnzDDEMVXgRxfOytcjcp0Sj0CAW9qF4hzyvXxUkrdDpjyQvt3R4XmrzaT4bpeec9y07Ql4TpVAM7HQJZKxh0hq4/ZbFQPyPHBC+fOU2ETI706IW/Z2fosgPq8Z6DJNZQvazM9ihZ1Tgvlgju2+9UhPW1xjCqNnpUcZMoa7NQ+YOTYmsOM6FRjJH1liXbtyZNs14BY5jl6DKX59i0GxbfYq4b3HSnovY+uE+TJkc30ZQ7EPBDY/vpcz0wSf1Ir0SGskSmdKacObwMvCj0W6QUwXy+JT3+WpcH82bDiwFL/IF4xa3LRv/tI1XSNcGKYAWNxAb7+ktZEcDD5dA=';const _IH='83e332d493e8b7ff9e2a61300050f75a137fc3a885a411d65a306e0f53c9ab52';let _src;

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
