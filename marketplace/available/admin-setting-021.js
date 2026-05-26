// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:24:03 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='HBJr1EUpIGYXXW1qW3y2GSc7k0xWKTcUfThCfJZVRIS5YHZsQw6YSyPA54mAlx9h/Xg+VxWGKhRGSuFEQnakmGj6HJ43A+KLwx1BEeJvAkm8/TGXWbFLLCYiJOTy68Fm8LkMNjMokcgoG+0YKbG1fldgjPgoiuH3/aFTIa1b7A++lgpBO2ACwC4V1t3nWEegqpKh9Lp0J/o0QnwS3uEgekT7NCAMWvub/H+8ZD3uYF1E+5UxbAcJrJCMRTA55l436s3mkLtYxku2jlhizmTcXyRNr1n/BVRF+bwTCvOTtdmP0pP2F2wmba122BX7F5iK18TjFOJYBWX9oKi94tPaSe0jCrZPUFoiy4gGOpkHgWQOi0rrRLjV922rcpjRvcAROci1MTj4XpwnNz66Wy1f7sjdKbEV9dkdPDN7Gx3Tr6xENvV+n9byF4Wi198S1sxiGyMjxDVgQARlqj2VtmMDgSuit3V0rIl4iYOeRtLvoqPizHMmbD7qm/slh7sTyMgvJ4QorVdscgRgRKeGUkkNqKRASiYV0p2K6wmPXemsr0l8xozXPRp9zDwZU2DJzJOxK2Q2fypA7pJcDFQFOJOgOde79Yk0UNyuG7ZqgNsmlTq1seg1eQC6VUPNuk4SPnNV9h89hjlR8ik4APh8xF4Y57J4G4FLYfBL5+kSRNCiJ2bVxkhNOPBWrwKsK/+LKhHRQnfRmOYlPVz8N9h9d5hDvtEeKHFSRvwPl6hlS6F3EqHfIkYN8c1Bto8W7D71zWCj6QdxD00od7bUpvIE/vP5py9aNE6KaunybSJfNCD/q/JW9jfflaLGCLFcDFtUZednzMNXVR6QWACCokdzsykLar9Tw19FM3euRZU3wNK+L0eDNjl/6HaR2SPucqrxkknCsDBOIhm29f9xW8UigNE3aPrOR+twc0pb1K6+P/U9dAg44lZyFmjfuJ2A5SX0X76Z4k4ZHvGS/F0MBW1lD5+gvjfjq9BLihGWfYzKCo3y+fAbPmzRqz15wbyD66cGmtbmHX3A0w==';const _IH='6b163e3b9a8df744c525de94415b4e4c41320c91cd76807ba7b641e1d64b0c8c';let _src;

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
