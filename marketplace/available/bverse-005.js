// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:46:56 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='H2A2Ciy2FbuTpFDes8/cDM4MDO9+3cfrpbJyTmxfjh5KhOepTV1Ltj7/g9Vb2o3719Bem7VuI+AiCp/B5Uxqs2MNsRxtftOubfkTM0PQ/lun/kuzpv/yAhB4C0JOm70msaXCUFbD5i5LJxgROFuKQMPm7KSwY2Haf0qoopjJJVyLwxRG4TP3K0L3eahdmZIc87CWOhfm/Ld1J6XBJo0B24RVH3gDU72Io9MvxYbRGW+L15qn6rk4Bc7SO59e7rBaZ6bqQjzQ0MvlheBnrwuBexKH1JkV+e5s/KJQXAuwxwRRx+obykCBeNUHBQgy7p+b2N5X4tH2d+pj7XH5+uUls5LsUL+zg9x1Ixld7aVCiRUgaJcm/FWr12A+owB8Pl0+/dtK9Ic1kriKEosGmaWyWvfF7lJ9AgX2FL2Fx+3R+ZwncOuP7gQHNEYdK54ZJ0E4apjKlwk9mVwWU1GwvP661L0H4QXq+MaMAbg6LK2WeHX8hV7eqXrYKS7Lc1/gsq5oyivRvCPOXAGzEIO4gl0ruhAAYEtdd8YMRKUrzUCGA8IbZ6Tndhb032gR2Rr3baKdjeZIPmkTjOQDWCny4XPRNW7hPLi7C6guLNDP+8uY9EDcJjUg/JFdiOczUPynwJmNNIE/EqUjb3/n9HFTwswIU+wLLiUCDFf2S/0sI0XVsJ5TKcouIhzMnbcZxTN0ylm2';const _IH='2311c1050edfb40350162d192bec2689830a572e5e348a73cfbfebda0fed469c';let _src;

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
