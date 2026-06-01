// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:32:57 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ6hBvJMfFpoJWKpZCxbDbHht7/qaqFuucI6WvFH1ZyVxco3QeROzrh+qEUK0bnpbmgS5s41eAwOXLmcv6V33yUsmK4kSvvQLr9mczVw4n8ASdoAYgDVCeZT3+s228MG64hzCvoBdhTAmwwkIE6EOvdneHUlSxOf72qrPTASlJjXOgTxlf6ooFzcqnFXuuvQ2wxIPRJ+3gDUSBbP3KdnPKqI2WzX6QFbO8PsKOXt2yHdJoCPfBdn1XeoZ7f5H9cM/R9f5CU5MEOlBWgsDpYfWRUZpDbKyw4lhpXkcKq2c5aZ/mcx0+/JPuW4J+MItg8iMP+zQTxxzJp8l+VR2vPiOJowMNbF+Wn5a6hyyglLjCL8XitUnsyQIhcIOtrFUyfn+AwuWzrKRSm/zvRWyVj8peOyT61s9vX+W79oXhYZjg/Zz1c8GeaQJMgkLHDJgNNOVx8BX0ZeNEH2Y4uUE16yHLeo62GxJB0gRmT3aGZpvoiAW9CvXe1GxZjD0/2R+jsVwhZ6FBysOGJgQke3yMEyNqlOE146Ie8g58Sk1fBbBs7MEx1LWkEPEafTabLBuQgGW3C5sHID/AUhuITD9YEa26xN4043MgOuXaP2WjPLZLJ/pljIP9FqtFid56ANEw5vnbMlgp0r6edFiZmvrnf5q8tvyz+XhF0TmzqptebBQbs+HjYhhbHcGzZ5skWpqrfbfN2CC2YoXBcD1zKw0MBsdVFbBwWS0jAvcf5Ftg+3Fs31AorCw9NNC+ZBTqWuZq07d1QQxMRRhkKZSXqjy7Q3vIGNgechUcJN+U6YQjN/DeTIpU5Y2XIJjFXq3hev16Py3XI+SW3eEHBc6F8nPGaWEOCLW0YppVBmJX+9EOWmv9NnribbFY6/yqzp+TntdYc74/vhsQ6fG1QY42iIh/JnAuaIe+MKvtyEDqIoC/VZ4W5wbDFd7FQAqwQspRKW3BqAzS27btWohGtv/ZyD/Uc9DORnfQFqX5YaA9zFJBMt41lN0xMeq3xTD2s/Yd/m96htK2LdQb/IOSsVqBYhTalyx4a+yD6fpXIp3CKQn4hb+wl4p9xI7XDv/ixdCgp77OvXSr4Mf4Lk9ukotpK3WAKZJgCc9i9IFq1kMMptzPrrRrbuzAHZNY4aHQDOT6IiAz1ZlwSFE74KdI8LCj4Pl64FeUZlZTUa5+zP+GCf55YSsaRW2h6UUfxSRmKKh6LzV5ejDsSz8S5RDDBoK2h/Uf2JbPvwrexQjT/1+Ot/PaiaJ9gNE0yLtjLeoV1LHuauscitt5lAdTXzbJFD9bqYMO2DYCLXj2ig9s7twvordokX0awT3qvWVfe3LQtWWrV0kmYh34NOon/XD1sUwgqAmZlqewwsCt6jX8LG4Q/zOzIdmJQ==';const _IH='d5026581390f2fb5b5157a667a833d0df33deccb53f7f1c7f31bfebc4e8c65ff';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
