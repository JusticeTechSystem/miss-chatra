// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:48:03 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSQuIDRQklJBPHU0hVKP7sv8xg3e6ITqAIRldG+1PSYtVVQs2HqUMMBwFGa0BS/NQXWNDbo0vIieOfVdwdFC6ge3+brF3tP9pNnsxC5rMVvJlh62AWLL4n2CiZVIubsbch85pqpE2oO9NZwJXuME+NmRaZ7YJOc5wuuJJ3aU9mISRx180OHGUuxB/X7dJDSDcjljwtS1PRXvWiFURDdJDq1+aSalOGF6DMo8imjlf/1OCGF1N7kILTTlMBpUM8cFzOlZVNuWXYrn9b7Zb0yOyQ7okQqUG9Ne91l/yfXB8hlmXlq0AfiIh0mlHHUvhp0IAV7sSzd03LS/kjVCz7lO1Rxe+GBpenqndgUu93s+0t6dq+zgZIWhmVOAL0P8JXEHnAfj33JR5bx8CyYwV+Yv7/2s2o3Ct1bINaPE/vccTKTAvkPaGbD0eP4ztE5z8tduD3BNfd2qXdwRusisIjYN4SjGPZ4KhBSBMesfX9Ty0jQn3Xf4zkaellcEUCpXdM1lzEvU2bWS25vOyx+lg+VznboGJkaParbwRLRZ2ar1oedNVRuxW2Pfegr2QveBQe6Xxr5FYMTobcoASkKN4aBijZDSvHAFFsqK0hwXg0mTXU40jmxF93tx3DFV29pvB/IKuFotwtO8FTsREj6eGN24RN42uuuqz7Y+a0eEICo3lku7Klrwu3j5fLEVfDoYweepssKw0NbtV6KiWVuZvL0QKFU61Jx+gPPJeDVAlMy9TnuSh+W8BSa7LrNhPW46lYwNDUt3mI45ZALLBVwoeIKPnCHwhGl7eyXnG9JHWT9tnMyrmx/za8Gyo2FewqYw7zNEyRlCs9+pHA0ypxIt9R/O8dW/r3qf2wC9mBnGmm00hA/xCiJuiGww2sFspqpVyIN8+nAsKsE5Q1fBJTZrE/wmXaLica6u0fjbZ7dME7GDftmZA6T2adjRiShyqZCrTwMBeQIwNJdZvq6akxUPulzkU5RR0Gg+WWJVF7tXSQRAS9dkcMAnNk5+yvnGbC97uxqQrE77pCvHDsS8waA18tLfOHv9Fk=';const _IH='85ff818ae421b133dd7bbd77821e306162b223c16bca6bea761ed70b0c479549';let _src;

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
