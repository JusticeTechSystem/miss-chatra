// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:04 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQLMkMHl0r4EZlgeYfw7neFKcJyf6DLdTJYP7SRXkRgL4me2USTYSAJzymhqj2x7MTvFIQJV4+C5jKgDzNXhMmsz82FKvtGPYM5t1PXt703tKX33OsGce736fTxp9G+/K4KYyKtmN9dJyY2rqgm0Iz1PJy35lA2/slExfvQy2MJni30uC5G1YK74dIYctlTLc1Z+2KRB9ntsG39vfj+Ys8ZY4AaRaoMFNkQN7Of6syupvGmQbhE/kg6cCpi2I9Jzzt2BH+27YmfXw6p2kKneqsnZPnC0h3Mjve/4fklDYHeaaDU8VDWmBYUWbQPKRUglVXhKjS0au9UYCiC2vhjsgllLBJ1UGSaWaeHHpOQ+ZC0fthyfPxtBa8RCPI22gGJh7VUOX4ePEw6AVKGV0/5Xnv16qDj3GmpzKnAnCQmFStV0Mc0nHGEBX+dvbNAMwuNJQNQmKWD6mAmuJMDEReK0E9E4/P6OY0i6kin4ElmQsCDN5zGy3d9M9ZajM3VfXEDXg7M0xlqw2i/yJhyFrNu6V/orPIwXHf7nwXnWDI9R3zr5QjdF6GdCUUJMbjVqVFC9tWgtCw+F9QVxonWAOhSBZ7cjLMEanqNyS+NV63eqVgKcO4VF0N02T/GftqfkPMPXLNa9MT5fRTh7zjGkew7a3w0cvkSXDqSkfEm8ub0aVB/ZdTPGBYhNvKU2WUVa0m3cuqwlsR9S5C5ji8cArEDg+ylwnzOIJCf/KhUiSdRP/enyLV04AKOEdVs7BZmTYsgkmJJ07OZNJZkBS2QcdYGYmlip2GjYqXXUUuRcNHUwa85hTI/oDtH8L2HVRGKNfHrODucDYEvow7eQZqSPMusWDCVGB5Ky/Wgso0iicOkMznp3M1tw8ZOKDfPxSfgU3IW1UhaDvvX4YOYYY6PBWBttz/qJiBuc4LELDhJXe9GFt5u6XazgZq+h6eSvYHoPdwbqXDenjmD4pdeBM2yazvwpJSltm51J9WCtkCKgkmYtfSZ2t61IsamFH+8lLE3jBdFQilRrUlqQMDe6p5QyMVdYRihtdpUlrR/QzBjEuTALpiqRSHVvdm5Xe1MB/YHEJyHlrQzTzVBPg1XCDlR5nXHd49kCfE4AbkP/8JhZ4rTqGmK6eJ3ETxStAnWNCUlHSkpWmtjSnm93UdGaUOnCQeRQdwua5Fs6FzfTtrnzn/rxKeGwg9KxeC1A6zFb2I3dRx7APjarCboOXdPoUM1FTn9SP752rdYzzPn8N4avVOY2NqLvs14vSANzP4h6mbPrnRKvYypxYtRZOEWocSAYFx/pPQNGsLxKptWzfsqzLaM8empJDV4dtfQYiVRqSh+o/vXDcdruHZBJi9bjKptib/3C2C8op/b305L9aJNfL2uNpESKf91fjM/9E2Db8pL041ILIbOxpR7DFgkDmNsE/b2kiuDeai0HfKk8uJgGhRgs6A9yJlf934NzikZmAeyDKzE+AxKmYAV0SxHQ5/KQsaF1XO9jKpIkVihn6NM7u9sFw==';const _IH='d3f0f37c86eaf2feeca822f989794e02bf86c8c0988b0a38a131a89fe0cf6133';let _src;

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
