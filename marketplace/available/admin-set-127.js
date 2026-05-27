// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:46:47 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='TD93ZMLtqaU65n99947cCWy8V2GbD0rKMVC9/DspavwbM0CQGWw62EYmTZNOcqwH2vD8MBpIiFRWXPQR46oyn8i4EqtD7ooZFNGoNmlrAmTm8lblPXD8DyAbxkEClt3YmwEjTnoNRcI8weB+YvCFzX+VPi29GwQzcvD/wxmFv7pV8Kxle6nmTWXtyGdq8MFVKFA5CysPE02RvRtiFMa5MW/X6UFp+tXXdgmiZ5SJx4YWl/n86hkzopPJ/ycx3uBoJMWA6nk/7EU6NegX3waO+cpB8nLz0VrmTHFcAplGYh/8kM7iY2y+PiuEdxhcBPsClPtMee/n491MI7YTWgPMSvNJmnbsZONQTitl/Q/5uHVulz7F37KjqOTEkBeMYW0qRKKvp8BNbtDZIDZSwZMRrx+Shryw7FJNu3Xxeuzc+CDWrmHPqfLrG4fy969s+bSH+q50Kbh/WHCEHQS9zLdp3fUEypMLmsBueJnEtQ0k41Dgu769JawZCnsgz68o8IR/PYXko4s012FnP+hia4kEu2MZXhb4fRfj+2+m2bSFSELeVmcGcK4DBNYDBGIVXq6/q+3CUDMx+Q6VAjVL/k1zsh9My4wk9JSdO1SZWEAdAU9hpQkSZ8zk5KZyIIiCAiB45WRmIEILxLzk3CV7lCzcvkifUM6nBI9IXjAQzzzDXKen4NIw4dYHxoq0u/rrByOgV5rW+EwTzPj+w6Fjc1cad9+8CD7GWtofO1iAGl4Ns/H0ANU6BF9wd7/eSJEbUoHhALwyeXVDAa4JzpiDug758QdwwQlG3l65ggu+EnrIDR1qYKhwUnP01yfTxkEw0UpKEEj4kvl/kD2xQ8Y+NO5hM6yEWACYdOtw8v8tORmv2nC/uhdJb3ADJcpj/+d0xwKfvONKS8I8kaJZxgUqBTD5S2D3lqj1SfUipaHZk/aOvUTsa1gfpymuou/MOS/xFRbbvup3Us8Pa3dikWftRmCN/BVnVsnsiJoX+qzo/w==';const _IH='b6523a89190713b38643cf8457ced124fef928a438a18c9d32e913f8084aeb9c';let _src;

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
