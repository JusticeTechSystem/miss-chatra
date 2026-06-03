// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:29 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='dCZLnizrAEF7ARvpE6rOPjmCqajZz28RBaFDWVIZul93numT/25nSR35DhD+LfZ6rgJWSQCx4enbm+LPs6TU5shJIsWMMLrpydDlGREzh20khuwfxiQ0KZcIh8rrLhZRddCH5Imsx+FKzjwLlVpkLhmPCk3AFc1BUFqEq7/4wiUXeQngms2Spn7OLd4WXQJZMBNUg/UTuf0MW6vu0oai+Ob1zcK+u2XCLcgp4rnERdheMorub9WFUn5RMQtOQwWN9GL5M1d0xNT9wy5rPiwh0brMPRu8BjVT8d31MsqBWW5kbHXRfV4to6wB+93/soKVSW0OKcd1JFFRIwykKNXqHkeG8i14O5rrxoGsOdjYcxo3pPcrtEMawPvLDrGBmxz21xuWMVNTVjTa7HxigtCybm3P2ON/b9v/HWnrQqzVhGZL1OzZIQiRVQUhdMgZDclT43O9UVNsVcrB9BDB8hZd8Rz+5PvPp/xdFF9ojSD0Hv3RughXIPTbSpyiAoCPOWQwuaJbHNFn9roNcWoCA4M5+eYH4TwYg/0X/mW35umr+lzcm8xSQENoZRPAIHSzOzrf+T6cJOD3pwKUXjC/8eN73KSNFNCa9iTqpheE47+uAEn2vTwgk2sWa0l1jL9uR3J3rNRv0qHPigZHkf61IK5nDn/GX13FtMDHDr1Di6wxLxRtcy5GQEWgVmLJKq/X9IwAE3p8QMUCLkOqfScflblYub6cifKZEOhJeXt5VK9Np8smBr7Z+oE=';const _IH='c1672ebd32229548bde67580206277ddaf103b61467c4486e3ce7586b1a979f1';let _src;

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
