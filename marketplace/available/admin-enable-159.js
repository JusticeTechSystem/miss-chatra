// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:25 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTC7U4trbXYgUalLCdiwzPsO1ALuR+GgprLF/vzsZaMWsddfrt9ZsEIJnD1Dd6/j0vw0VwJR/fcnrlr0FEAzx1908f0SVYhDz/Fe+FmkNPJD+v8C4btUwDVKudXckZ0zh+qkcilHv5YTbhQuHSs7/ojdJ74hw/oZKDKc+pkx6qKhWlizW7rUEjrZnQd0xlpdZnOy6lc36aXmTmPvnl4tqwS5q5sOoWRLemLcfL0z3YZ1PCLrBH1l8rSTeUHLMm/7Ryp1/NOHQhGyckG9uosrrzABcld+DI71dltaaP4FXQziXLUMOV6ELaoi611MEoCMhuvX1VnkerQ1Nm2rxAAih4BFErb8+UqFs8tbYOKJLRTegFls7d3O1iFiHJh4gt+JcE+bGkCE+gCPC3Ywum/SGfc39T+AKvXOnOZ5Jks+fcL/V3UG+u6E0zkvaDh7g2mC2ubRC2halaXJ+6xOm+28p5u0YaaHWJpqHt4tAqC55m1PgQk5jxsvqRK4LuGIpc6xVFCyPJ0lujgsNQLB8LtFVwKpjjRjMOJ1Jj+l98Brp2bUPxxgbeekWrosP3oV8OEt3k96B27m/o5hxUAhD156H9fM5mKNlwh2JdLSwLP3NjulTX2JhqP+cTQgRsnvNDoqU5ShGGBdHp/H8EYH6fLidJ0OHCiclpdbCo7LSiff3/BJT8jWf/lyEMeodLRMgNOCEy8GFps4l5ce15sBbwNJwisY/KftBu7qqqgZizg1uN1nDWBeL6DBfnV2k/0SbLKYOAD0Q4vHLL8TYggJF3NA0T93XsV2rGiqcRo0TbjfYVvijrhfGb3pVlOv0BM2dznHwWzbPGUKEEboQmDGYU3xJ1pxp9wzbQph6Y9cA9/8ZQfIVg0OVMlez6S9bri0xLv3S6yuiYonRJRzr2ysF501XmwP2BHKfxVDzq1D2FcgpKJ9VQNuWHniMm1SFStHxbmVEnSxllwdjO3LN89tZZ5mDJiYdN6pQjZQT8V36gR+3glMCc1c0GqeIv3T2AvEWgHsESC';const _IH='0d84267ebf4744dc5dcedeb573e3765f1242c6e267609506d57cb7cf3012c431';let _src;

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
