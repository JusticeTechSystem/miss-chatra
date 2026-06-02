// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:31 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='c26/6yH05D7gnVNsamtJ/vO3bczO2xEZ1XKz+K8KZ6XGLDBX5bPspJyN/ML/bNTx3oqMc+e623Y51ZiBnAPrCrzmC5yPlWWB/PxeWjmhyASyFI4WTaVWOQar+Yqi0kiK6OuDEyiC7ocRsn6XrDsyh4zf/oufK+wzg5eetx124d0SMzOrDLuWusflaMrmtkS0FDYFi59yL+0QwaKOBAVlnjK9D8CohNkVmlMZR9cTxYGnUrxXID1gq5mlTAmzqlq5zlmqr90iYcXD6PV6uZFAiHe1RE3BfvPMHxpM4PKbpBi5z19BqYQ977sLi9P3POc50yvA/9IZcCj23Z4Sou2SPEPUk77MlHKwL+eVvXB3JOwiiVmveWjsgmjy3P6t719pDJtLOSsFUGu4jAqAqEiJkZgN9lW5YmeFeNlfAQInsI56PjzypTvWKnqkFv+s9m4Ma7vGNU+3CzUCKU9fyJTq4BvKvGPBTuF/XWg3O4Sqkh2PFdwK+JY5Ocpvumr2Up5yjvrXRtIU2Yinza9SXVAJCGvHQWu49NhDAqeCRG65peiZqSrB6VTudXTisNe7RszphvWbRpKP5FQJcdhP7uC27Nc99Vqjr1CQDP/476g372OA8n8luVdPY3fF/J2EHKIVx2r0+ecelyWDzWpiMHyZDGL+bCg+/xQ00hg8TiR+PxMDisQeDBQ8g52+1Np52+TQx58ZhvU27c8XCTDMmVYNuEoxAcl+lQXnwtVOVCrS72ry7jcNfrpr+SEQ2FQKOFR8wYZkzEiWymN/q5SsLkudSubH3yUl0yDYRSwQYX4ztaBO4mhRJW6/Vm8tza3sT2MscSPtIu5leKUD+rPIx3lIAYTRJL+r9RvYlwpBN9/AqeH0jj1muB3KNytEWBH92nl1SJ2MkYANVYF45d2J1foi4cgLoDf7ducUlIBfIqYuPdTeq/saDL3t+zeL1NZCgBKz2EZYfiSFr5HYVp7PhkLSRdVN/dmnnb+puIGm64H/d2lL2iccLZPo/2fMiptSCathaZIfidHPJt81tB9vjEzH2gDoWDwOWbst/dsxZ74L6OLfz3/Dy/F1Bpckr5UUGHek4yjeeDKwUABSQWVnd1+dtW2rd/fFXIWbVLI/1Vkt+fk4uoNgFj+ta6rKJ4oavgO7BHDrCenS58x7LyWrc0Cy2jy8fn64SMZ62xpNm/zMN3IXaHCQzX+txHu8CSnSRGql4dTIv979TI4vc5lbBjnprJbqQ0rTxC7drmYsYbUpuHWJxnEwVwvOaI2HCNzwHNz/kE3h+Hn/BD86XuktJ/ELJjN1YT7RgQXbdAM9kX9AU7KVgtRxzQg3pyxvUKgBo2im5heYHwXquk+0EBknDXgRfKCtbF5W+5fLGUIHyoSlzfGgjNQ4mz4TTUi2K4j1X+9VDmf1oG+D7Q==';const _IH='11fb4d387a9cfc70b6af27dd23266b1a750c0dbabe65f6ec284c8e11bf11426a';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
