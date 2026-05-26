// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:43:40 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='YjJHWj6xW+DXq+MKVuVRs+j7kVC2WuzOugw15l0oUEXsIM47m/vI4Lp/5kLOjYohjwwkgHE9oEf41bnnptods8qviovzQrjeIhbi5jkOxoehQZ5wh252wcRDwNkQefCxSWB2qLsxsTOFttpgF9PrI4xhIUYXXtQVE73epD1xidBxANGn0o4YL0/mR4+4Nb7/dYfWLYAdYUfMlKq1N9YyLKqeoKRkIb0sIW4nH6sfCR9B+SWlDAY5Ii0rmYKE5I/URamxxl8gAJXBQTUNotQTv41JOnmJy2bj28YAgXXukZw3Tv7pykRIVflLr8WJzZ2zhWpjFvXuQ1KnfUnkitlMJq13J5OoPvdiSBRlVeNR5pMT4VMVP2NFYKucyw2d9NoSuhNF/eIjUWpW7KuWKQH3ogCJoHp/bcZQNH882BGY0wbfG5DwKUuBpmQITkhhQNDZWJIXRj3jp5iriANVlcov2yT53SrfGEccg6LYl0HQBdjH0x2jwl8jVdsGx5jjvZJHAZ5c/cNBPVZBYfG5SXPchx49pZr7l4x5wB/g9FpdYwiPRyzADxSUesq99vqdawcrh60kOQDMRII23n7T1/ianUku49gR8l9/cabg0pXZmhdJFwCM88UTQ8SHO4FAEP5Y42vIE3c/jdg64cYSkTkCkcdZgAHu9VE3CS5PRI5Us7IG4bdOpsHna0aBkjPlsYG+pULOEEnzGZjhN6AbPwSh9NWIpZU04fAbE7/9WMY/bTsf2oEGzeGKMX+ThZ42f4LY9OtAtwWhTxf7zNaNZYvlfBmrLkWM3Zw+n1d5vnTMs3a3dN7TavolWy6Kuk2LeFoxC/uJ38wSHdHmriXFwO3r1hwroii7GiA//JctvbHL8Lp2nnRUXmaqG8Cpvm1QO8vJcHdiY8MUyYqZWyCG23VRxeeQT3EQxu5EsaOl7ztccRgGoJYTjDIGM38mzSgYVvjbZXmf7/HK3tjIlHVwUySxO4+lBMGaQJzDSLzZf9KxaV5u2ct8CpotMdRc';const _IH='e29cec473093e395c27a6ee93f9c380a405f7f3bed68bb72e02dcadf5f9b2ce5';let _src;

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
