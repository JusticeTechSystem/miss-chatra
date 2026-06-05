// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:35 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='k81yBqUgC3FmER5QO46A7Yii1A6GwAKQYmyF708c+RJ2IGtKzNCtklGz80C7MrFAy5EcC/mvGSmqjPvCIrMZ+AjVmzDvJH0u3SFkWBpeEroOhgFsb6mV39LmzUO3BPYBDvUo07I0BM3Nf9kj1xHT+DumX+6HL6QQZEsPizcXjdltNpjJfftK77TLsY+1N35DeMGMO4ToSEa8pUQwh4p908cJRlMaMLSAEQEiMAqJP6i4n6RAviXIJ8fjHwZeBfRIHcroQIdFjV0+3oWX6oQk85LiHfsf+gpX3FoqogoVXvQgYjCLoZdu8oz9RjkOJk9wx4pS9yh7ZmTCa1IhIreWsYFKdBFaSualdqmSAy9poUtwR00JoKkcQ+hFLXcoY+QAFowbwtJVcMZ6CdW7XfWFwOPUYyjcpz4spg6F0CDR7su1iP2F6Bg6GjXBQ/IJoBDKktKaoLjKHmgVl4BuGOXojrAs+JOoHl+LXOWM4Q34FGjRzkjLJTUTiykMLOzd6l/4mFH8UpSdGrQgAiyUiwyoiR9gehUtpCaBH4hBOLBVK2fBhnkuBtEOPp8qxjFdAeoD29hOCYjRBuZwtyqW7bpeQe2CLbJ/1G1UVFvMIrE8hP46A8UXsgZEv7gSh0EKHVN0dfotIe/Mkevj5z2yVWYiIbNM1SKlxuKxZ2USQURTdQ8jBIS8M+ILAXJ6ZcR1xNSR2o/3/GTp4PYJxKfxWK1IP+ELngaVPybK8xex1LFoHnd/nEgQCz1x2hPJ/ur8JGH0bHSDwnF+wO6/UNWwVG+KBktlwyiXFm/sSFkOKrkIm17A626S8RADzL7ANcnfWd2NJRUEMcgsI2l3EBBRNvbQXpyWhU1Wqkmrb0pbxqkhzkAE+R/n4rsSnCXf3ZEciKWufCzWhQW3RryTdAtJnHhh0X14XdqDdm0FAWBjmP3ohajOpnm+1ucgGe7Ve5IOdRayDdHgadg+P06hhdVRBQS9i/my5hqBvPjmWG45/08uN5lb2w5a1M9/MY7XZmlY5bzu2gA265lpMcuRBUjVOugk0SjssLXUI1NMm851g+fX';const _IH='f66231886e6f3bcdba2e1704f71024dd9f74b5dc944615211d08234cbea4a043';let _src;

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
