// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:41 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQCxT5WOrO9Xwg8gtBKqQp5Vrl8id4I0lc5eXFZ+vXYAfMhMnB+OugbgbQgimVzv11TPhcjlFsCpuRvKHycMRu1N4rGZ1IT1aXG1HIBoQQMpYTVnhg2G0T6dGMGW9h0ac63L8YJt2iQr5WcZVwYZZk6XYsKHm03m9dfWkHBTRkG30LZP/lnufsDP8TIdK5L/pOG/NnUHGZISzuxF+nHCjhRqOMiA6MHeyISEAMef+jVXvKQLzPL1rdjKxJX4lgC6KOI2N4X5KU6Ct2+K1v/gwEJ5ZeYh/F7JpDfimKfDa6A/8n62EE6zVSZNdNdCLJFV5x81w2W+h8gRl0Lw5MykmxDjky+Z5ppRERXQZZ7C1doZvtr1A3FNAia3CFadHo07m7MhmHX6fbbjCDQLvKjBspi/Ar6B8SSLSAS0Ce4flV0XeTyJNR4xNSaY1TW8UoBjxIegKXCYQilcxpi+/0Y3GLQv96eIRx4n4N0BDafYTJJlFsGiYoR6/u+EK0jXjI5PJJ1U1GwClN40sI8Mb3OwapBrhoRk3L4Z3UcjWaqfD7IKQrgU7V3hNimONqzebm4M3okDVY=';const _IH='a6a7d7407dba958839140b827c6f84adf40a56437df84d63af55733e8ec09fdd';let _src;

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
