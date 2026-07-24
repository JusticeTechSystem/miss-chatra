// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:50 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQHkEP+g1Bs9MdMvMOq1eRVj6TvHvwb3Ge4+rAlXpWImBbFDnlEwun6YXLUyQtQedoOfIeMyx1wF1B8kGLCl1m6JKbPhX/ZqOG8RBsedIanWUGw1hXZi902kUpvdKs6M9Kn6/E8zZK5EWbQby0WfhpAhRvt1uA+kKw7V8rjuTB+Sl/bmhYs08Q3mgxq8V/WeyygWH1CRMoLEQpjRY0LdYECErD8oud6l2c4w7bMaTsAzcC6+WnImTJE4O1K9o4sPfiTwLw9CaC5pa69CP8KVFiizDBeYS7jFWwjeEe22yKGu+Hsr2Fa263IT/Pt5TFD9N4npqzJHFIw/1p03HFqiyL6JuC3SuZOEGVOyzZypMb4JWk6hvff+3jRN4zKC3pkqNbrbkeC4deafOSTv93m7oi22mZebjPlTar1XMFTWVYdRxg78WvMpyQkv173B0sgX5cZ8NwfxPBPfrVr5/5L5JXbibQrw6Vez9MB7EwTkbNONbBU3rHPhVkv436wu3Y8xbcYflTvw0xARnaU31mr365OPwDY27NHvqWP8aKJNpibR8CpjJ3vhuE8FXGTNeGJtOhUaVznsS/gbt+6';const _IH='725830faaa2a47103422e6fd17c563db732b522f7e7e3046aa54802bfea45ada';let _src;

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
