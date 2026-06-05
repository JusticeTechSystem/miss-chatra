// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:50:56 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='A0TnNjzTzC+zF4HLLVSAO1oBnbs3935xgtrq/yycbU8aaZYS0pgl+c/bgrt7SmS5JVy9YSi2U3elN7PP1GzSjTkMYUHqtsp/QrasHzwyw3ELs4fUY+JMe5QOxdDhxBIoLkO+/uaaXbVOGJQdIEnkUokpxloMeqq2eQrFusYI/nS0UD5Dc2D8QxMIyh8BvW2bYXZrrke0wRWfPb43QOw1XyBVHcXI3qL5N2KWYIUsArv8gHtxi0+IIXV0tY6umdC3USZqUZsQGWc//D+TPGO4SJCiEdZ0ACAuL/HsdWNvKzanMKBc/AZVYneG8ECJRsQ+QgFHkZ0eGLYtCj1PEAHQ5VmRYk1/D0IITPmYd/fDM9AUgL5MOP81EmwSvP119+9gQofjxBHCPFilBgG9lxkotWefb4zCSyBgY648V2Cyg/7h2OZjROazCjFeyFQ/ZvNx0C19gVGTdxVJuU2opjyATvcl1yWgmThOMaX6glGhuJMXgATYEorTmpZV/cK881cqh5V6TjBnIWPQAGOzVGejpf/2JUVCt9ZjSVUT17XTQh27YDJtdvx3FIje9cUUsdafIPCX/9E/HfTwR3cIfM/pfB3nEHM7WHgkPTR6EAxnLp2wrksDUzW5JOzVC4Mt/gwg6apMmAodY9fp8IOm/aDlRIhrbPg8FtKOXfjomy63GXTZV9S6gk7y/fO6QZ7pgVSMYJaCg3JCGCLGinmSqFYX5V0AqNEogqmLJL+MIYQ=';const _IH='3609df3a2dff90dc9d5af198c91bd66c3e6d50a782427e3b3c5788a2b43954a8';let _src;

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
