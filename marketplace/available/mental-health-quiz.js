// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:57 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='tHPp6Q9HZ0EYnc5BzhqEyyADISEeFTh7HsWgSsChaiivucCUgs4RBvUT6wJOVMtkbNVVHyl2RcdV2eT2G9nUlHa+EA6e8A6AtK3gbl35SgzaU9D/8SJUnzxuc7T/R5lLuolosPITWWmibYWlj8LLKqlCcid9RrX00Aycij/bkxo1Z1sOvS2/tnONkijEiIIHptV+xZKkXJYHf9kIQ0RZ/1QbeJ8uUDCyQE2VzGaEcRY8/J029JZIbe6T3yyf5+VsZK68S80XA5vE2s4bMkwDJ5oQ7iafW4gocoN96GH/GV6A7j/Q+hop35RtTsHEZTzVG1FbpSoQ/GrtPryc42PFGJEuvU3LMe0RfN21qPYm578tRmzM1VWkuvUDTXcbMVFK0UWkOZqpC9ihZI8VNyWFfAi4SLLrrKTbV8vX1HbfvoY0UZUUI0/b1uY6szA4jhj79gMdIT+vDee/tehN9cf95/ovIcUyMDRM+OZmiG3MySJlFywIVmPIMkxeMwWgmoGNBIeFezzrhbbo7xP64E9wTVP5XCVQ5cyvqPNjecZY6HFcEd+4O6ggpc0zjUPlVTYaYg0F0xqC8eIQQFd/hfpwJyGhE5WwjDSbWIHcQIfGiw0MaSKQxMYX39PzF7MpLM4sxXWhbVLRLJO1SfsMSsIHPkqvwUNRWuBObFIvhkWYOyFR4wbaGVWVhOEIouJcIMF+AEV9uw+9AR/ZzAITfKCSMyoZAbp7w1LxOD1K0Wa6lZR4xUduxUNx0SNxl9uVOVpgMf/Z3bBwL6yW1QCzZQJABr4W4rRB/x4sE/sHX5rXEXg9NPJr8QTbft4NVBSA+yHk/mEuHEKHjVjn3j/68eBvBviGm7QYuJAuoXisZvKMll38/BGNddG5D+18x+X6j6lUNPvcPAAydqrACuJNd+EUOWG3tHnSfS/j6iPEbi2AE8s/ACyNh8H10xnyZxbOvelmE8/EeuxYPwfTP9FgRcPqvqMikdhCOutR61B5tl+JlaZGiXI3ZSyPxzwABThLAru8+qDeGkKYSTy3+KuEiY+DdjA+7+8mJxhnC1LtsWkAj9mYA1bD9rWUIcTA7JE5JvyWnl+dRrliGu5A+LNQyUZCKsij6Gd+wojt/kvHASR+bRfVXr7zzaSQACrlcNv4oSiFKqidwb1U8IFZgZghooWlNmXa8yOYAm0gKIRPTX342aKYvhmphAXW+TguXs49IDGUfNu2XT5ZdofISZnBMmjRMqVpWFpf1B5nDBJhyY1IBYkJjEp+acFFWnIcP4QhniWwYdq/gECQf1Bod7HWg9+N+dMBj4MHCkGxXd4/XmMTdewrNFnCbu6jsLJraDqRWlu6ROisJsbHIhn34DWUaDpPK/8OGnIqWnI=';const _IH='54e7afb41985cbbcfa320f940d67d69bb2dc8867ed38fe86c81f8412b9b10c1d';let _src;

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
