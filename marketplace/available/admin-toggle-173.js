// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:48:07 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQATTLBUf4QBWC8FSL3Glrfomm1NCehUIMorVGgjuV9nqN294U0UZ4g3z6nlriPZNy0RJRvYxahVSUdGHsbjbSV58UtRFEjqSknSTFDZRsdOMA7xAUOun7W7ROKKXnyoIX0XodT5gry7zTwqcLqyj/F/qD3opZlNreRITQNNynTevQNrAfT3bQEq0aeOF7X3B1u67Y6yUPcShEK9XMXManhESq6ZDYLWBUq9aQ2J+w3APLU7Np/vpYQ2p/Yc2LeQtWL2FknvX1R+fJ4C+tJ/tsgcxD0V1HX5SDEfLpf+Id098X5J1HVmLZqLiB/y6U5AQAzOpgeAMl/0tGxtKlu6tBea2gzySXelu/674xqaXrAu6iWHHYTL5wy1NIOtmRhCrjwQ4mJeKCzqV/P+nkl3FNL5sU9g58M6UbSCSclM6B7xRWOcsMMZ2UclYBL5fOcpVhTReZuXDISqZtskkAvBxNRiYYXLp6epPf+IzwmLAWA/obfSc+C0wpj6lYPhlL9X88McfwmCHpW6X0eLwFT2ZQj7dbbpquyRJD0MdC7+LS9GGj2vN8vFL3L6ciyr6Ky+M7/Zoi7HHQfXXjvCAbMTnRUwSlRvfff/hyeYZa96bU/eFS9EWGzV6ETLXHBY0xegz+p+yIhafGd1CyqxZ2Mwm277hvIkvVDSyu7XreoWTuMhiDUD8atYS6M/nCHXAJt6imGzwXJ2NA2ZJLoKc3kQgVeoRSNSXKQhd8ZcyLfC5PRytXLZijol8mbpt68+o0j3BoHdJRezt2VUe65MgR7NKQLxn45B73H4vLap1Pt2XzFRTE9Wj0qTuKevtZ1+2q1nVPezvOtJqlHhXsK4f2lYAjdSZ45piPLrny7MywOi61wW9NLPYuHc/CUHFMPvjD8ND0ERSwCMvf54mm4FxqNm46WtQj9/PS/BuDQH94Pmret1vDPa+L88FnfjYZu05Qdmqnz5uF3yyP/3sl+UZfYzZqLXip+tt95Om9jaiGKZvk5OHgxj7+iiH2SOXVnlFsLkofB';const _IH='a1b493a65885025cbf97ef15e85dd8190565e5f3221d253b6f3eea5119a06504';let _src;

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
