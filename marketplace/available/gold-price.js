// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:30 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQzjxBIr7Zb40Q4AjblHdHBVjaoy8YVsIe94bfI7VTOVQSLgNif0TX1yad0u1g/TR4/yNL9JBUWTVlvorBA2dMNJrZIvsTws8GkVjvZVT1MyGe0UCXi7AdCALxUf2das8OTZWEpgxYuCdpBw/hCcXvu5QVFDw8o/XtvSbWthEuFDIfrL4PCql9icCDEXCB2KPlnqjQ8+ezGsvq6NT1IPNotFRWdOPNVYsdPpTTF+/n0kghVbRLBmsmZDYouFuxoyc/N5D9FCkI4CNp49W8tqG7wnUwTFlAcT5FF3iodPlrjj5+eSqqZyo4D6dTPzDRYY5uD8gElmz4eVmInZnC+4C+OUsp51z+S7yoIfiskhgKtvcvHrklqfQGfCya0YM8VkhmGqiTBcCoRM9yftlrWZr/Bn8DPDvYIpgOXqC4PJ4/S7teNKggnWRhaBQet14wdPtsTFgGqwo3q5cEq5BDZ81nrpRkFoB70jWP3mKdINY7jD42QgeCGp/L9hHWE22dNXcEFQ0jD8JML8LHbhKf45Mgig7TG9EujBFgU53OF0/g0tSMjN/kTUxT0HB79KWYQEuOb78';const _IH='8f631d204fb42e32064bb38de72bf1e6a41057ecbf7c330d8d37b0b6514ba466';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
