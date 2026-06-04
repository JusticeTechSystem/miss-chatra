// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:47:10 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='QJdkmz/5385qCcBCnabwJPf4ggnRp3d0VVMRa0vOaiPzCxh2LOR5ma90QL92EXliPnTMmbLCpDFLxCd9odD8wCVWs7rusyQ/Qsi33G0GZj9wlthLVkVw6BDqa35aSt07qeSXYpfdkq3wfJjbiWpJ4SWHEIBYo7KfaDRJe//Qs+HLh/eXZIuKqGps0mxRdPb+Khd9vgSOCNct9o3nLmwLObb6J5xuVGN9jsh/73p9PGkTLP8pcZk4TxgpUAdSLqxaX3d9zeCefAia6SSt0X+qYryO6quaX2b0w986ZazqJxwhCKch4kAeZ62DW9avD3ohKmfxjBkxy4eKgdkUk5WDme1N/pCVJDXNwGNpl9O0S4eKHBLg7pRoGVZa6u0SDVgnUBf9kvkeUWVuVYO7KPDvCpq/8YOZR8hehuMSYoA8t2jLxOIaoICwazdqbuh4fwuwlDWDPKMQFJ8OYgELP5qQlepy3nOIClNCouyH3q7axxvjXg7oZiktSTNd78tVuol6gB00p9bajR2useO+oBcabnizIIsKoxBgUhNl+E5NO4JEBOWRGmFBYYGKkcgQW9PHPJCrACWFirSmn086DAmQHeYr6sTd9eMBK/XKESz2U6pNdZxQCQbhh7lbhlWAol6r9NPdCB+N53eE8l81/FVU72Bx0CMpTmGFMlXd+2QmmKIsqa9v+KwL0lymdmyibV85mnfJBBsVtJPiywPr22Ie5E4BVLgjbGgOYh3uInZ38RLYXNO0ACy47SEeE7xTiCH3Yply0EBeoC5EVI6B7RWFaeYkbVRSfduUjXDqJIuqswugYo2Kp2ON99eZ6DloT3RLtUVLX0oo+TiNFHRYN8KHYXp6Sg6xuuXD8W4tpg6edJy+qpAgu/8fvZpdtBWG/4V5EJKKv9MOiKBBPxcXva3z2EjFzX4N3E7FK97uCR7SCpFUtaKsIkhXiFOsMlVJSA/bOrOMmsvlIvKsTucVdqGjX0W6a4khXAb72klTP1+bBl13A8yl8nlJpFPGUhuPNytJ8NBn2dyIFhxzzqsUsNAsgXF9BYc8iC+thpgdzlWQpUCwfAL1uTFAXVJXhUBd6+t5X6J7lVxsKhI18Dm9ZnktDUBiCi/R+8YandVArYzUS7ra7tSHq3I0pjMDgGAXhz7rcNfSFersasM8HNnU4oo4E5cgMPY4rPI0MtA5f+RzSkCcaC/sGprhRCueZyWUV0R+JJRR3SQdjCRze5tSFDIB0zXTX3+OhQB2lJuhVtQr4SF88oOMOP9vXp9nT9FHEtYe2UX23rTASJNK5WoL0qQis5jY9rIZwfPC2SlidkdWp8J8zhC6ZAlm8c2EVdDxdPG/QA5coIzvJMxdZto4hxZR7qvJiukRzafMz80BT0dQRrtYf38=';const _IH='f6d83a193cf740fa7d5d001def036b110d5520f6a2fcb7d2b9fb07c96ad761cc';let _src;

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
