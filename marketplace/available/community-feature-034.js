// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:43 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSXgX7mmGLgl7HKuEzBfNmVNOQ9RHkFhs6rUxpowE+Ug+X8jqAclhtqfHCfTScPKC1JtDfKYtw4Eq/Q9nfjG770Ic2QVlvCe0fxImc2VNr7QzmXoZ3hFDMBKGn4ml0Ka42u0xUtRvWMtOqZ4QrGg5ZCl2qZkQJolZdx3eeSDgiGcCmIW9xbR1JRucRqm+SYnv9ySsen0RERMZP4P24lk3mmgZBeYjBODB55nP7C9515+IKzyoBH9oN6EX5x1JAY8iK7N8GmwXcPNP5DJtzuyGlmLm782wBhC3Um2hJcRzIrE847aHrM8SmK3lljkNNj6UlGDsIx/z6K4Bcox3jbUMzLfn1kzVe1Qa2XhO7fRtyFN+ZpC3/GJWPFs5Uu0QAc2u/pmup+OoRqpd/J/YR3Rylq8Ge4K3kqxPysZ31jZP/MHCsAGjKPrFX0L7xD4M63SrfszVdEyeiYNGQLFgm/f4vrQiYdF/UCjfH1gzJOqsVYXAzC1WIQGm0NeQEDcOCmgxEG6PGwMdyLCLqogMl3De6Lf8b/kuSbInwYCY2dCc3YnybYiFRd1UAkqnVHFHtvmD8UybbWyS6Bct8KvTs3neRyftos43qSdce9awMO1lJZAP1Shur/SEVJ57RS+mpiqv7vYxV2KgpotUGkI7UkbBWqQtdnwQsgD2ESUehURGMHPPnlU4fOKd1VVVdpcztqZ/VcO9bCTtx1TbuOS6DVrx3rf0crlJGWU9XBCq/xfGfVaN4z';const _IH='c792fe91687cf4abb7b98c6bef3778ae75593741e07922ae5a44363521915b89';let _src;

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
