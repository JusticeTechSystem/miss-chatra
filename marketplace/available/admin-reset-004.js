// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:06 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTTyIL8OvPkrWeM3Q0OJg6ttbKHvt9pl7FfS0SljOhJXbBWC11JV8k309duWgqI0dSQxbNe/OCJcc6kvN/2Q5syfb/sE1jy/Ja/jXLr1OK3Zo7hKc6uTMXPFdX/lRfB4nsKXMbHN48gDlncfAY+SACy70iwnf3UtbsbPdQ9liGoYKAp/fHlBNZETu7KiHSjpvhEVYt/I1wcRGiT0y2IIx4/7MIclMYurYbVkgHUR9VAioI7x3HlSzqIe/rQqWdsCYGuZGIh0rwUjrFBZM1gmoOpg/hQdIBjaDqyUBd4p+wz59xtw6Oqu+IUruDZpJsgfzhodtO1UfpoSDjckjNwXK1pIHqxzPCpnkEPH5+fnoaz4TQnoX+orgF0bRwYbDVstFxGIawumZ7J1oFLji8DUZNzlUcLTq7KoOLzZogGBbot7Qx9U4A94h1wgxoCq6UXhMSxmH3RVd6/LKkK30Noh3uCqUnuVEUpI9P/81PxhFPycdew8oHanLr/TOtnfMz+3UQRZ9e0IQTKED6hkWkx+ALoWq+AGaNm7Y/o3vUcejHoKFtYjN6zaFijMkI5Zhxnkksr0DMSR7oXeo8s0xoN8uy8qRYAjjpj5ja0mYUPHvi9yKbDnHGLo02xs/gSihhfbkAWjfSB/Y7uX1B9RQLtwgmSa0vp6AoTi2QAFFTFSE1LDHky4JnQG9WN8O76v8QoenHpReiigNNwgXfvl43xCrxVtwR1BMfv0R4EDbT+9703H5ndh4qL1URxoRbfw1FzbKtcpK9OG8wK1nFDMynVnODYVvm1xb6o4sa240HSexNQAT8K6efTzHopdgOf1PwZcDwx5XhRmwwzz97eb3VYsq8g0Od3xVvq3apb+9QREqf9EU2BLFuw15nyW/kIp0NPRuCIwk7Ztjsk+c2qndhnDgVGfLUERe0HtEuXFtuS4jYyyqUZBNMa5EIHjykZyY17CvrZm5xBGOXolCqgaRuyBj5d4T3a6bjGcW4T5XDif6iEWRLt';const _IH='4a9f96c8c3da8aada23f391ec9136cbcffeb2977986480e979eaf76f7ef55d09';let _src;

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
