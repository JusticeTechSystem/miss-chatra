// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:34:17 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='8ozpy7oJA+gJFjEjtVD4bgElzxhqXYXE0elq5+NnMdmrDIYs3TDMogGfhot8Iii/9rLyiD79JwlIUpJ9roE5pzlzvb7KSl6/NUfQ4i1G3IqAPMJjX2SBWQVcGpZKIjkTb/k6KZYYz6oVG5cLryIWUDLF1QDh+zZFChGOla4hWE/A4AMNsO7QBHNdG0Ql2veD+vuFUp8ymwuWNhQnZIfxhzq4YVA1+uiFkbZ9wwlBLdCqs/R0YZxjESed0EH9w/YtwqmuGeltBBgs0wt+8gnZFEldD6eE+S9bggQJaO6orIDdvONaPBwOTljGieWcx+uarZkuMwafZLbT9V+riJB7X5AKWN4Kxvfxm+FKxBPkyi49Ztqlw5fdEJHeFWAv8SiE4CCxJXwSIoRX5ysHxRvxWPDsPaqsgQ+nwypERL03qXOcJYonQCMlVwJc7LTvCahOfF17V/JU4l9OmVBMUef6NpF7klW+df8goBV5KwGdou1wscJ53OyyJU7qEfmPajDh3JlttCuLzexEPX5QZtjqKedSdzK2s4uziZDIUVf/fm+yFsK/nSvkU/HpTaZBloJddFKetjW6kaXPu0bpL79kTroNgdjEluV+kOebcU5togVY60I1Mp6WhF4khc6begIEClI4LMeMSJaa4A8JwQ15ACMo7O2Aic0Gx3PKgF7699Dwp7RSUVDNwKpTQKTY/bLObhfPMCyn+MK0/01yCedNVl8OBZTzszNvsuMxj6V/nfAR5M5xoNXQ+D4Rmbc6un06srx8qr865tbqiERdTzaeBY9ktGV+XxnZf6sz6lFtyjxVhQzug7BqIBoFMOycatslqqnoc7oiMJonudU5vzpvWWsBKWoOmuzf8GDvICgA4CxtfN0TNYYkubPvHlCfiMKhN9W3/Ag3CxxYxUJdVbDuHLkcV3gNNKi+DsEx+VI4UQoIDdgsQpc7Bx13V0aDTYROClMMr0eZ+EpstizwKSE9AcIkKGi0DHLlarpmpiuI9NDYoysEXRjLIj0rYcTZ4OkuM9Nne9FFxKVrP+NBVEXTi+sR';const _IH='8638bdead31c4ea2c9bf46a89cd363fa33d5eca0bc975f6d7ffb61887fa6ddef';let _src;

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
