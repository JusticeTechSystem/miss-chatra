// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:14 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQKwytiLJJEdwXHX2aO4VpM9w2I8kcqFaYfqg7t/qZWMUYXhevWPprfa/VKhAGGpFhqiPKl9hSxBK1O1E5+ZJ4CpezZBu2imqZdx5NtslHOg9yQe0bb2EjieHzaiYv8TEi1k6jABsgpgwGPIG+XvBVdHaBOSd9++2k0EeQ39AkekMOAzxsUK4xiC8Y4t1j/lWpme1GXIKVnP5lb8TMSfC61OwnaNDOFABfydS6G50JrUw/uxT7dkKF9rnmWMVPV4VYLByVYnR0deImQ4eVsR6H3nBZhfmBiBQlAcnq0AujXGJ/bqrOCl8O4ZKlNPIV7J+JLGx0jVWl/iHbkgvvTXlt0Jx2rHp3xRNJC51IHie8rdvdoDs8aSHSUx3Lv7aFePB10kMN8kGu9exggpAFLxJFJNpYdGITQyl1ubdxh8ESrUUBsDCzPfCB/aMOqBYY61872zYBngePxLhXKyoZsnWhwYAr6sIpoRi9YTQtZmkQ/fmno4jPoRkjbEyw6pYllgvLkDrRfrVooaSp/Qlx8oVS5nlPLLUnwwGWeVmejTc3E3EIY0332viwV4UEGyjHM8gdQk06tTRKjWOxnJ+5ITOlAD4Ku9kSvc5dUhLbBW6CX5+caTwG8UTb92OyqmMGOYvq/ooSEsb5nrsDPsQJqoO+4MBePdb/efVrEfv/KneKyP03ZMJ7Rd2jSeeHXkaThlooOFO4WUyTNijZiKQ==';const _IH='ed634a92a97f30791352bfeed67ceb08a46e8e5cb59c4c011eb67478a7b7664c';let _src;

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
