// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:32 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSwGFaYP1JEcZuqztZI1rjmtKBt05gCHqg/pxVa5zuch18K8P/EQKKDsPn3lsXJwpeF0jx6lesKcwMdmU0DpZnkyZ2/tELd8xZy4+t2mrNXrhC8sAOFjCaS/5s+qO6tWrfbSMGdX8dvxE7fnlVQ+MsPKejJSFKn9oNjApE84fYPgNfimDVWeSYUes7rr422EWvbmotM2IQqgq2+QXW6cUa3FqyBRB/92aDIvN3BiVImJT9PVV76mVYtxjJAuxRwN20qfBTlffEzYugil5uIeS+92hOQeVO01W3AyfdR1Nd6XA4NuFd3kOq38W/J8d85kB7ObS4VzDpkVEw3EypGQOFb+5cE45KZ+cYSofbRuEd+x1himXcYVMzJYD8E/LZ4weiozXF23vEJUmULgN/wroYia86/8tJwgV8RCvQy180c+WXVto7mc4cQdJsWfdk2lBrAs7jePiK6lvOTiTyplsjGr6FPUbMJi7xSrCUojorbV9mna5aPhQP7pAlj9zJYCSXumPHNJotrloFxOXeUztLQQrx7V6J2ul0L1lKgyev+se1jC09m7esJcSeU44SrqphbfgFbLOgaeh+uPjXLVJCZL2f7/eYERMBgjFsObgDHfiI7Pl4AnGKxdRSabHgera8JuMto3UUYvyNAbvqUtsJWrzic4ZSdQ2nQWheo01UCfFvpbKhBZxvPnYEMXWGdboNVAs4OADDAm0WXJccNFGXBsKnZiLedNTLTXpQVzN2duul1ATIAgNtahyUsBaFmBbkhREpYov6ADtkqHFWh2kQWc6hutnhIP5KJLeyM3LgSdw1he5jTcce51URBHFWinxTm6npN/7t6RcGBrUF3wrpchp0E5axFqzzNMWFqYR0ofsQ4uKbCS3u8voHnxxseDDuqn/XM/ipCKgbfVK5Nd1L4MZOnis6ccEomEMhHTo79jMeIvJaMDzYjl+5yY2JBRKzO0hldkuwkkzUZBQ7fe2FGTGxQuB6WQQ1zRJAvfhEz3iP8MakVl0dMJvoujzixz6+K';const _IH='286a894867558418fcf20fe338939bac9823d6654a840bc9cbdda6c0e3dc68d1';let _src;

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
