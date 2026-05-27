// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:49:27 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='qbFF/Ale7/Gx72il1SedMFfljw74Jb6CHQVm1z1+scyr/Xm/Es9Mfi/A/8CMqIkCBbjGFrQ7LM36u6WINBzijdtCQGjrrxn6nPeU6TuNfINuzKpS6oVVhWOqAfS2NnxDwgYShd7bspXmjTQz7z3pmTahkGD6DCQWLHhAeusjz6N6OwcWuTevtonl4bXCe0xYQPW2xw3RoQ/OY178P25xVZeSOd5ukLTVVQRZ3O5QvxtB+FAlQo/9w8hdRkSTZAcijrdSnfk1a9KJIMezf/cVIjnDRG1jgk+Mq/WsRbJZ8d+eHsIKPzEchetMKRkvN8cLi6oeVwdXVf52T2GpkOvVin/q6CyC1Ah+682zmiSevvNvPLZyuvTXbT4kq+XpkVh0gcxiakTzeSz8dYCmf6FPDRLXlzwSlbdUVAN2SX1LVHTWZCv8WarE76ESMxEmLCxTei8DahquyHDEeGp+F8H+jR3lYF68xCGbFDVl8b2EgSu7G8mrcAivUp4/I++sv0n+Phif8dnPR9/f2Gbx0gs0gRw7ZdWBooequegq9LxtDr5aFBpgvm4hTrByiY2Jra717bnl67kyoZU+HcyLHve54XCvA93KD5JJQ6voUtLeBAhxMDCbcW5SgAKP8do3CtaWFCM9uoM93TvfWkIuv+TpN4qN5tsZls2ftiADEvQ3AJw8Ro9pTH+pAq47RrZUtTIuTjkJsTus+s1INxWi+OiyUUnK7qjeMg+DykKfyHdS2AcDbgw+OBqI6sqbR+QiQqwwTMocSelNlZ+fRFyCV/kqxJyVFq8798ba79Jsap9GaSo83ukp8SS8nZZzomabt844uuiwSK7ShdI7Y7X6iBl3dRDiJGsRPzd1RJqKtgj3+8o7+05tRp8m3QlweCEgcEG3oiPD09RIsXrZwzCRWe1268n/40hyvAwkhVmwX09EmjM4TcFG9aKJLFNEzA1nbsaB5d2A/8COV0p5OG89XzgBd/CAq0T3GO3Fe7FEt0TnMYnmZ8eX/7PwqxH4/qKo34oM5JVXM0ZAZAfn75Me75avKj2jGprjz8pn0PzYoOqCitGWdw==';const _IH='2272a212ebf0006c34bceefa9c8d415f5ecaa176e4dd99ed23a726c51252ca98';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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
