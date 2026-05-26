// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:25:46 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='nImDJ+dkeufm2+tsVaOONN7P0WjyS6audT0tv9C/b/3as4/Pwaf4yyKRPajSmfwM+iUaOzV73uRQwpuUsPRvHhrx2+Nr5l1Y7Rduxn5ctFLLltynm0mddEBiKOW80tcRT/tYlpOvcf+P8zxzwbt1E1iiLe+DxB+2e5qPsUeqynYPm6JN9m/GpKeLm2rWv5kp9aq8vjhpZIsqT0BotrXXZeR9bDThdZ04Gx6XVcWlJbPJpXCK4sNfOzW1RQWI2ptv3tkREnb0pvYh7Vlfrlqj4uLnTqB7IU/ZqTR6NdcogZnH3VIMLabs+cyc0c1jql0fjbEK9PsUZ20O2g95/Q8pBZz/NeTSRwom/IoOJzCj079BZUtRjpEKt9AgYrpp6ctVxxEU8HAww6buNgVGohLLCux/38cwkSR6tEeAxi5cQheo/CDh59QusvZ6n9fLwHUmsAZPHWbOYMjJxHyeTVtDFtVHtvOobVtsmkxFlzdlF8OMX9Wl8h/ZmE5qseFycE1eO2fWVdyDiXEubCdWYbi4yFnfn30Al9AtleUqhwR5D1qHKpT3bBJgWoIVqGeRF3mfz9USOjgbwNal0xH3+Lgw/3kF8aE0XpU/dCSLR8KvMKHHS+ZhjFOUyw5b4oKneLxOB2peE1ZDx5OkQYxIdTkB6hRDrekcPI7UyIkEGAVsKu3LVLS2MAmi8rTnLHwIrQfAMDssJ53CWQc4J7t/1Nib2P9PVMdqTAqgtlxcE5A6xPzOLtogkKA=';const _IH='3bcb31a558487b883ad9e4fecf3377eee62d6637fd712d45b8f0370a9fdd9183';let _src;

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
