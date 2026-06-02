// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:36:11 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='kxag/u6NbxM9/VDAft/X9gzZI7BFoL4+NBHvxLx/EZpEAw3iSSiv2uTYX2XZyUaVbaARsVs2v/4vBQe0rhtHT6D9pr4P81HUJLGQEoZPQ92n3n7TsbO5OzcAR61XfKUXEJrpOf1rQOyIDOJs530C+jjmaBXCFdoUMU8gt/1HtkGMCp/Viyns1TGMLnTa5h/4ij1+4JFRjNb/F4o0nJKh3l5l/oNspu35OmlFvufQRrvLE54nYAPAzHToHEWIFO2xxSfFWNJoh82s876znBXPTwHixcB0daRb9HDfQgLN/bJ+nsT+/5uX/vBvf3O3PyQU0497jGI8lwbDqx6TjdfSgEJEb+B2zL56LVFqWqoomKt9qQXYizWduQ6DTLn5dhefdCrlvG0f4gi83Gz3SWQ5mY/Td+9WSOlHutqht997SZ9mQK+dl5M8sAljg0pP1k8E09aOZI3NPe/MhaVAq3+L/OymL66B9pd+90szWAERTI8/Ek7PP9aIMjAKUgRHQ2xlIpTgDGXCDWN0ERfuiGyG89rpQeBnOusALo5JJvovf+tEIUfctd+plGsA0Fh5qx2dbiSrSPg9q+OGk4eUzhClD5VrXoip2oL7ZeEWCh0/O1dkx7IdHpxPgylexxFXw8zOykSIBONoS7Y+fQ4ndZgr9X75DvV+kdkvPv9Hw7CR37AsO9MlD7NG5hC8O/UT2M/64F7W8ZVz0wUO0bYHtooob2+GK/y34ZY1wL6NwF5O6IdhtRWJP54hf2rX/HLQEj8V6Nf1J7jv3UjZ+p0hUzn03a3hXP8kUHGxG2lb3svbXDkD5eolAuG5CY0h5sBiNElN6xobc3K00ncsNnXFLToIy4h2NtNjCWgywKVCK+9waMgWkzAbRPqVT71f4TAYLJrghNB40toL/iyIL0Tol2n4s675fqhU3kyKrbSRqx6cW5opDZrDJ1H5QyNnwp0DfcG85w2Yu7li+KY3L7zI5TtNBPJuXRd8D9cPvlCSQw==';const _IH='b30673401f4e8280f4da3e3f00bdf1a7208ee98267233b341889b8c9d38a8c5d';let _src;

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
