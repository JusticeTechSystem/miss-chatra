// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:28 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='yUvCMD9ABcP+6NOUN3NJyi5OsOHvTxiMc2Gmt/ju8t0poh+SsmhU1YnKAf1woTiZyBmgiBaSdop9OiRVesB+OFblSt5GzMT9RwI6qG1aiwGiWrQmrPWT1+I05azvcosghGtkOa9JEoqDCge/YXV2U4tObPtjjbsbjhl9DqQzNbAQScOgU5nvnjD0Swd98hJyxJNEJChkb4i1R0dvoH+5M4EwFViV2Gzy/YzLep6S0k5lZmB5Bjq7f/idsOxmJ7juoDdO+Xkka6cohuPpvS0DN0kjknE3XVuFK/5Q4lhYO4XzW+pg5PmjEYbQ6uvGwkNKmgbD62JntpTlwgnV2kPknLIihZ9nT56Qsx+/0qq4spJlQPUNTT5hjZ6f1yRhugjcrD4CxAsqcYwqIg6Dl0NaeYbgOD2ehWSHiVdnyQpVFCgAjaXkTuMIzzfUCK9Ru1q2eSFSsy+tl/EQOfHmwfCQ97bV9chICDgwNTrcTRtaGnJDFUx3Lj720bPA50T7FbUuBA8RBRvtP5lzFiqRi2nAqjNpgHQDXBwXuGUf5oVAzcWE7MUc3Jj+qX723Jb0qEv0hHdS2/ftQsmv3h6b0kTTvrC2JfuHi73QarpmXw6fFUHzUuBOBkwaGjueir4xez9l+4mAXCsCa1x06IxqaBSG230BhmFRif/NPKiGafXvyRQgoIBfc64gHCdpITHU9pPr8PQS47ufiUPg7TIbXbD3SP8HMS7fxZkoWmF6poYwr7mmAcUdPYl2gJQxOai8hLdamdIL0D4ilKLKMr1lwQYfZ4jneNt4KNiCCUG/OgmXhmU06bVmxnAcTBKYffCzTQO5Hm2BQ55kq3HtLQhs1Q2fcHGTxOmcOMRr8R2/oXODiVFRp+oSY6B0uVb+MXLhfPqSjwnqtjga8yjwOxm/RYE/e/RfWX3AyPFrcI0vHzOzAYFaQUtD2WE1/FefU3ZJ8o6dtDiLwqdF+atgSu4mC1auI5haf0z9nV8/SHvIUMb4lvD+n5egK3sw5GUR';const _IH='4de683aa60ef50857e8b285436268ef9b94f4ddd1a93fd12538f4a99d5bf4a85';let _src;

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
