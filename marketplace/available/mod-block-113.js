// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:32 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='F3pClweZn8NjKVlZEGLYwnaGFC/Wi4zH5FRKCH8HrZKZUoFEpGxe4b9VGVtPcqiL0k6txKbuari3ryb7vnhmVkLTH0HNtNysd2JmNgHqhbmF/qK3UVJe7FkgZXoEbmq6n3Un0ZefdhzKyJ/WRGeyS6JFNNpgDSnnzFzBM8um71iCXGFtBHWpvL3LtvZjjUm14TiqqpQuBsV9WxuELzdJySpST5Jph8m6kX/sShRBNkQ5snQifK1quSa0iXsNFPDf0yKwub/vzdbVIqZn+ZU/iTj79RM0eWjY+gjq5PF8YYMHnLHPw7JeI4U+BPD2/FV+/Z03zw4a8U7dHsHrfb1HvM5LwQY70RPVzfeTS7YkVC3jKkqSfO3HqjnH2DKoHyCBu0K4p97UU18of+G6uc2reknCzHhfeW+2j3/tDH28SH7Nw9I7OcUyRmshDeSGIUJZRzVCRZHfVC1dPEkK2viUjZibyOGFccMe7gxPOxFSSdUwSACaVI0RnBJ/npeCdWxYU+amiT9yvXqfuYF1CMxd9Q5AgNZ1/keOqfjqnlUVrVhWb/SkPlSHx2GBTge8ZK/1WiQakpHF/5ZdoYFQZevwECm5dKT5qu4kX7UvL0Y5dbBmXTp4rOmBOCnvqossmho8XVwF76XXtyiOPE06imUpT+4XqpD4W6lDMJSEcmQWN25caZJFu5+NvXv+DYfVj6xkihvVZ2RbsGvbSjAEJVawioJxNLY20uFY+oqoZn6lnvZ94CzljGtvn+yksCeh1JTHB+VXxEQzSeEYQk19aYAM11yMeMOUFjCFUakV40R7xHf6y82YAk52aRPmgu0aSmhcl+UIZ/0BjjCjDKqP44bHce5JGzZs04I5BSAbf6YCRXccBMryOs0uQKfnhe1Kbl1gmEYei5fwV10absHXwxMzAb5rDjpmr6+UrgkPWQUQbZm64Gl2gAmhg619S4tINoCJXqX3dORzbOTYhZ+F9QB4wfvVEPxho0RaeO3YeHS9kRnQ9Yl+azPVEh/wiI8/fugB4bwPamPoYelnyGPN/XDNrvLI6AzdoPcsYwuLg4qgtMD2RuaUNgyEoRToa9772JZhg2BloksjVjWG/p3xIrrqVJ6/U6nbtsaMPRpkGcNZejiYQ91VS48iOEuqU9F+vWyc3UFYhLZzNp47DEfjmcxJ8xLZrJetQIXIEBigDlbBeO7phk8VD6vJe1FSktDgpYTLz2UtU6jBpnIukzcAOjI0lX9IntPe3ZJ4wqhA/O4b0gE82rIEA6M/rOCICHN1gul3Z/P1JhfaC7XbVonchIBfdePdqQXRWyD66v7iLU+fhBsp6MqzhS2rASgC9BKPVap/OPKqkEelklgsKECNaJ8Q12npXlYMlKUvrFcbJpKY';const _IH='b8976dbb053977ddd3edab4ba6663942421e2993446d2d6439ed0b38001aca43';let _src;

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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
