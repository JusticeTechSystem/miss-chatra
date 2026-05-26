// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:43:51 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='cj+0WwUaWsVCnX6qZHe4U46C3VmIHZOQx2ToX+wsClpBPbozDjj891VPGcKzY+LZLxQdywVQuPN/sC6/WoV+20UEJccK12JFsfoKc+aFnmIvdSdu5aUw2Zawak/UmCxOVHJ9uxwGGaaz19kjfpK7GAhbXm7ZnusYkQY4sQzhgBXrmc9b3nGgdi/eIjx+w0Wgr0hlfmXcU0lM2wEoaGspLVWk4Ko9pLwA/sgGUSYpMNhiu02C4i2mRAPV+ePKtaR1NVmGzwgeussffD5norN+SUCYpG2RCJYIvIkBXlW2eV62D9XIEHjWeYWiXtIOrgwDpdvdhKgzXnpV3ET/6+v7Z3a0kHEcHjS2ZZVvTWZniJr82x0gs8vs65nUrvBJt6ream5+VzgtOInwXk5x53hawz22J0YCkXMSEj54SnUhk/V0OAHLMFRdtrfBr8AJuW1Zak0QQ1pxhtRQF9wfCJNSpMvqGuFEJYjYu9TUkMO+gTvhUPjgQCDqk5pPJkYAMUbEno1qnT2USozZGb1DDLAhYHxS2dyZSpwW5NXjUbqFAccI8DoOaf3oldbpojCFL0SZTLGGpwUBTb0O06vWTFYUnusjlmQwOzbmiz68EUZ9gaB0eCR7Sn00ZHXUSmKzZM/08HV6fT/yR9+3EvFjkdNAmla9oXY95o0LUIAa5kYrKkCMXrB2BPopMPGWN2rmLND3KMuMTit5sOAe/NIHKkpAt2ZlCSuK9bWV8Piu/KhCoTOdDcghHrbWqAcFoiPB3jGQKjvTtd2bUmVYh4hkw63kO2T/z92QfwYebjFsihKaxF0OyliexfEmdauMBJ5S6rK7qwmCDQadss0LMT8VBtGHeCk8mZJAsN3G3kjZrwmhSvos44E8/D6b5DMBwXqTo5AvDA5YkC/ToL4P9iRbaDy+QOHjN2KAA4ow3ARWKPrn1iZ3y72dvPp7lT3Fm2pBj+VoZboEhHbdsYaFbQQvGj4dCQ0/PypqR61S2DR9xpOqS7z0vrpoV0f1HEBXB9QanQgJe7j4XA==';const _IH='dcd68e4efd32c47244d1370887fa57cd1514f87d6c0100e04b623f657b724767';let _src;

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
