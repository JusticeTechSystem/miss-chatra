// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:13 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRTw85VZkITf2RY60L5tWgAcPkFrA2tJFhbcUWw9AmEM8W5+lIOm3hnLj+THxxpdatDaSki/K9AqEeXvswFmsIKRe2CnTeZu2XB7wOCu01Zzi1DLLxEvLRZErmhrrP2RGMjp6U+zJqIi6G0HTninuS0cQrWSBu/maVMTDPU8SWA3jMlgCLSLssj+jFNxWRj1UJOsvzxmFCXVv5JLsZS/kI/ZKF84dLcEQRnrL/+ZwPxaoU9ypQa76hReuuZwCgM/thd4c4w2g0cA9VAz5Ua9F2Vc+Sz85Ahhv/f/Dbsfbg9XpeAV9Pzrd5s7xrwiYF0ggF/6G1JsGcxc++JKa5VFDgvvAgYdD/0DMEQaDl2LBEcwyZVab4LgRsrx2W3qtINC60Fgf1a0Tv7ZQwhiLbLDoyTPWvqsvJej6afD8+Rhds0JPsQx5cbH9pYXgB9HdKRwaDyzWOU3WTkPIYujjSh+Z1zlE59CJ2Cezfb9AP4sc+4SBm23lRy061V2r9Xd0CHoXttul0Q27g2DKeSVMbB20I1bCNqvonf6dIPbU+zCtJnJvisHoNGVDtru/cjTG5XD317T6xuflMp1Q9Redec6UvLnLAcmZ6CpmWPxbx5yaNsDR8QpToNGffmwyAFfPEwpcXRZ8WEb/MshqNAj18zE/+QMpnP3nCzszRnERsTiITsIDaxfpFlH2UGnzCnT95bkQhEiLsK8XIx996TShEmDYMCU8rO99yzZV+ILv3G27LCSVS1MjDRMMBeJclB3TDhRFdj7aLzi3ECCyuREvC3S+1MdZONPCGOXyvUBW79qk3A7dwXXy5ec46AEj/cKJZCk3QyDwO0W3QMnFH0Xnsd1niFNY5mQDcW4vTQy69bbLFvgaWe0fe++EXp8miSrrKomf3PGZy5UGSnKTxEB3KSpGoAICe3FqUq219Fy+Yw1CGHKTl4dAWoP2Mr7zICSclSe/IjY9rUojynVsCfpIy7O8CO+Sy40sI4fQMV18SaWrjGDCvGLT/mAtdzCCsbsI/upeA8Otxb4MWp8dqrzaliGo77PAEcptvBkSI6xC+ZwrjWVXnrC3v1yClyAHWdAcAgMUmgbz3RhjZIkSG9Pl1CHCkzQeg5c7n8WKDi+AlIGOeIOigoabnW29QEJyLS4mZlnk0djho9FQ4OTpCV7/LvwSbgcJdvAjO/oZL+otNP+cAHYNkmJmF1nLBd8qo2KjuxdwSeMAFvwOLvdLJcXhgSuMfJ/SRo1UH15zLFGbDSf1RWo7b/SkkQkyeHcvZ0te4pXewv4oVkT55y+ios1CWUaJ9FiyvrD/zGKsSUD6jR7eERnlMSUFT//exRcn4lUwLebTgoYuRcjBaLShlLBC1QUECEdO7htsmwaoyDGrkW3R6iRfmHWpRloJWK';const _IH='fb8ecaed29e8627796fedc569525f3b7db86c2ad28c916882378e2606e3a4caf';let _src;

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
