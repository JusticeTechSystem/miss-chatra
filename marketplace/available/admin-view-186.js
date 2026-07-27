// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:33 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjR7xqXWD498263Kl7arq/v0mv2MuU0eEPRdr9JD5qoTycFHeYwN/a1tTKrSIahzV5prWcX1D0G6WjG+UJlfeq7IuTjHsijvNJmQzIdODlTwtD6JUl9LolxT3LxYF0LYS/I8ISWeyCUQoMWPUyiPeloBSQ5nWq4gsDM3EcFe9FC5B6oCFGQrWpxFcyR9nMQGd1X2yHJNWxFlMyUUBVrJL4hamyq3KW4Y/RNTAjT8G5pJLjkiPHmmY8Y0nPVIFShXCW0hlSh0OqyqFOM02pbh6IBf5MWcLNzZah6u12bGWl5P9lqe+/eBxm02AMzuMF3O9F9cMsU9Mgq4YgvsBAfP3awA6ilpHNvFCRwTbl0YxhUE/jnLNqUdn0cyeLb5dKQeBEljSVoRuLup5RRCIgz5Fk5kT5m5WV75KkEZYmzg6+sdpcEE/8VcX9WmSVcNw/y7q3YiK3GZyRRArgmv2uaOULhLRdgINJzwpLNqtDnZlnL1Kjj0kfRoRmd9fdDSy/qp672+G02WIatga+LILO4zt4cwau5NPWFgXCVEEtWZA+C0Xn3P3h0op2hbBFCI9pZ7zwIpY9r1Q1LwgszfXLjj3gnqUJUITGiOb2TsrMA0NPrMMC5Pu0qSd8/jOMiFN7lPpyiLLMjR9ftCOJZAcwjmbp86XNy4F5extpr9HGSzhN3E6xPEiVcxDGs9+o7SyZTZHrAwiBtxjp73IhfqP5KFzs5VLN65IKbELFiFfM4N6udtA0+PJGjU5U65XPPR42nPQm9aJEz5h8/1mhuOIzhfDStSn/XS14FXqypC2eo1qcb3vI59MmW8dn1PPBdKgDif31QqDZWxay2DV03XLub48cRNHdwBrFLS54Jkyl/EvTA9yTqolEFz+JR6V/CN86xH+LYfj0abjTRnYBB6t28e3BirnOcaMXmJZ0RU74R6e0UjzSY1CQb5+7N2qn45WPLsVIqQU/Y/5QmCmNttTwWbaC05/qq3cqd/x7Q2qEGVvwCPCdkXWw==';const _IH='ea65cf72e30bca62a98040112183c2c4149144f9b9139d1717acaabb1145f0af';let _src;

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
