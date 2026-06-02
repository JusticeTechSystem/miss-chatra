// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:22 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='U5MHa2bnNoncOKd/Vs7EKATn2FpEyIOtF3Kcfu2OLRHs2+OHjkngCB8fFutjOc0RqM4BQcNdu6H/YrGZ45rgZvsFmDA4OE20XHuRSvVtwoZpyPgen2ueH4hiXzNHvO6Gz2DBkFqmOr5W3WzYrVDY3tg+9XFR/gAYJOhBBHrvXd1oCC5UwD/Hw4ouec8fD4QncjwD1ANeiUQaNM7EiYDRp7N2zx/2pmy5JUeMTzcoJUzgUBNq8YsuSPPQFSV6aVwCqf5iX4XA8hqhoxHHnvzxveBPJ0SGXl9fRjbrerA+pFvZjlR+JrTs7O5DMXaBVxtbH/wwjogLJFCPOSm1i89808AYtYhqyK0xgZCPpC4trMJXNwqh7bqdgBaxPRNcfq8+aqS5ufl7RBkrZvGlACJ5MZLMStxwYwT+nfLPhX1IItd7FHaln6sLgIvlemXMBZzNo6wJLk9xX2GuPXdOJiO12AYdfYp1caMjN/Wi2yzht9MD95NvZp2ioEhcPA/uh+KRpIQwiWXmry9Y/JIUUDbW8WX8CskZLcrwyCV+SPc2X43ks6VUOmKc+zcc9AY5Um/dJDmnO444EecgiLfO63ekJaSAtflFB8zujBJpYrfeCiP7oq50TdvONJsCG4mmSbnjtAWq+mCP3n+gqkvwUF3QnxgEYtafclRfD2f6IFoeLSE3MbzfYclCR0Bb9QLrXJ4Nsh6u';const _IH='d544ea5717f25f3b90452b6c42e29f9999563dc361e26996ceb1a439133f75ed';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
