// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:04:39 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='HK7UCNTq5S4d3KJFQCyA7VzsMtwLfA+71uYe0TML1ymBXTrX0m2v7Rf7WUFC/kDwpodSyx6DjP1olhajCJP+K3LItE87NA6GedkvdKVLVqO4aw7btx+UYTVIk/RFnquhb1pHZ2MBUCdQIpax0LMS8iImyxSpe40OHylOYMG8mILUEAVACFiUUvFD9SnW0hvWsNSv2aW+4ReX+RwEvlF7jqwoAvZP/gY/WP9jB1ZVa5xrN6mgeFgpop4ZUACYqyF8iKJF7xmRoWGrRg3pUgNj19JkEqOIyDx76jThrHuuu86CrYW/4HMMHMp8cSfRwgaJCzd/N7FQNZlMPSoou/lD5RvrerdxKhKdjdXAzdEFuDFKpHXsx4GAETZOnGMx8v7do8lzceu99fC4yChgqUQ4pgR7nyIYTzObbZbTiOIkGU4wKZLy/BoPfJ5m2mR4DJlUePDHGcoXgmjCc3PKKmqzLySSNUynzsSxZ1Sg0UMx/Jg6LRJnamEMzDnDMIoxeRIniwfAxhgv08/8b2IJ+5Wlnu77u4cAw6r+7/ZFBwwO3unTdQnK6x01tsxinQLqNhWIoSGV1vCoP6lQFUuJrrdJaX1pYpni9W6t/G5cGWtJl6FCpa+KS7Ztlv4pFcbcNnw/572jLjgq+KBAYpA3uk+LuOstglHyfFM9vW2rNL3oSGmGH3xqn7zLu3BVfYJygjoFIpF3XKURnOWHsG5OvRknpaPwCGhU+WA+eZju9OGUo2+QQP/tH2TLzpbAFtc3e/j4i9dVWaKXBZWObjvGhIqN6ODOQEnk27wcOT4Jt0i4p0DHa4JvY9xdB9+cNkKEJ2qL4DWU0n2znefISBOiyG1HTdJ1OtxzIPlD9KyJOKY/naOaKiYIkJNckd7oMi5qP3fcvIIr2SCXnRvWrt+YnuQa+VmVeW/ZbhKnockHsWstNSLdxkXRHf17YWrS4IfWxwWKXjDAjwZSrMNBDOyp2Z11MNKTUTx2trKp/jXMFbdOFa1Uo5bVcLP0KVnNUftQqnLmXBtYcz1t7lHtkWIFUR3oUhxavzBL98VcBG7BH5cUYl6wqXFLKX6bggdIItWDmZGWhLCd9Vnd3lCvI/9CpdjrMevRUf8V7gnqrh4d8PTeCy6+Jtl7eazHUc98C/vZWBY81JIJ5MnrhiLlKuyqHjib2aL/KZyAFr+e1w39I8YmV2ODxT2pmIluBO1AA1OYDQijppqIbt1qQ0XkYp+X7OqbflzTUJ9/1ljBCqd5Tmwa3kZzeAw/RtB0N8Y6HWWE1CpYwRyahyjAMBo/U5/JThoRB/O0BqWvsNJZUXlbjOBvG5VlO3BSDzpgZm242zGUk7NaxZRYR/mS93BtFdYK0XtFSWyQo1ROKbJYdgyhZTdru2RDHZEMa93qYQ==';const _IH='45f8376b08a9f42078e443da06962a0d4bab1643966937e554e0467b78e4ef65';let _src;

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
