// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:11 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ay2DzJCxlix246WKLqyuCEdVm+9D+V75p/4g72fweFSvOmqpSAjuy2DZv89dPY2jdH9SO/eXXI0ygszJ18Z1BQFXlne16RYyW3iW9Z6+q8PFaenXdR9t3Ts/uBgSvpSCk2m45VnKq85yZlkzUhhZroCObhag9DFQwZb3GiDT2T2TdZjdcu7kPYEWr97xf43de5qafUEHnfOsL2HsksbsdjWq3U4RzJs2dfRHn/85AJ00Rlz7w5APF/mTx7nYQfQ/srThyCjlCM1aOPW72nrN+PvjKUHR60SKPZqZ3DK37nsOK/E8RotjoW8iRM4dwC7t2kPonV8KIOvn1sWiHfTYYlGpyxZEoTetXyc6wXlV9at5qRj//dT3YmGULBQieHcbuaTT58e2Q0QYxN0HWDPX3DdhhzWuva7oeStaUhSQSztZEKRJlSuTkqQybQYiEHQWslJ0bavKpMP/PXR4bXydtDQ1P0zJzYfgLZjLJaDOE1M/e4itJtjCDnJm2hClO1l2IlzFlp8YWOa3zRrQkzNBOF1juu1GNDx9/nJdjiFa5M9mwcWr/qjd0wTIEtJaObPhr8eNp4IA8QRSe+sGhT2HPO87jAzm03DUUcslvq/2qc0gjbYLuTHdd0Vx5Vjk/QCqTzDWHo18VrzJGIFt6tuV3q62b7HYfjKGChcXj50fS7QsQwJ2Bki3F672f2Ge8GnZ3pwqfh0//is1dhpOY8u2WtBdj+Qip/GIhX+9BmmJFw==';const _IH='31e933963b1fde3917cdefa4571214ec1b6c4a1a8fea36996871b968103519ca';let _src;

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
