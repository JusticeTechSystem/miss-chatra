// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:26 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQEnWTEIlPUGJKCbAvhMahJk7SBTkLuTwls8J/MlPFPqQM6OutA91RIA/1/lN11lREriCKNJffnzYuCiUNIwv3a+drtpGU4Xo2ebHjcFndKTRULZMNCxn6vsI3l+dtTfh4ovn0A8W7rjr2pF1wWnc7wRMVKSmhIMi1YEvEaDNPtOBjgL/YjTW/kyUlav4i+qf9RZ5soci16qp8JYzqY9eEEkKjGFHao3NrWBtm4/4s8wBFrIviMsiilZEnCS09Ifn7BJZ9/LF36poXOxok4ywLavgF+GkYiE+ja7uYFwrK7Zfbf3r/qbyM14m1EHigsB0+EjF5rJyoPNBYtaFz/u4NMdQZK+3vMHCzssgo+VfXApUJTcYrAAu2rlp29c8uYLRR59R8M2Yz4LOCWO+TcrDpVluVV47g0aOzkAE5A+uRirJir1xwrUhm6fzO0dDVDGQqV7xxj707H7nLro9p0IGPjZ/lG+yfLgbCl5PZ/WIBJGeZ7b0Za0UeC8KQhHYeQXCoi6Tauk5u76GKe9LV0oYxr0+8iSf3Mgp+GdOJBGL3blIJI2KtQmnunIXcdqt/NG/1gBIymEERnYUdrVg==';const _IH='b74eaf9a034ac972e1f2b36336dd82c84a0cf5f9c4ebb37ec377ba445e411043';let _src;

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
