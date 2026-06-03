// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:25 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='3oG+EoAju+WfBohoWxzGEFpzB8NNWHY28NdcdYcHrXb+Ygwo6qx/rtPDfsvSrkROyvGE/THl1R3e66TUtzDL7+ETrAblviuXCA/3rPzbuVae8NoiTsjf7fue5MM45snozdoom5L40JkSsfDdog2FKM9erVolIvOB2J1Vq03nUqfMgSf8rV/biEMPXjQK1mpG4/BBlhEhT9mR6U6OBoMNgyYCspa1tmHeA5Ad/4wecmbtIRsS0KJkVSSNPgmRZ9NTcHRTfHtl5s0kFvfcSiXX+0tj+CSKozU/Ku+Sfa+5i1d6HYgN2lVe9CEi8HqCpoN86Zbf9/ALPySMe0JbG9AEGQHoRf0M4E1Q2EHCCr5lPK1QLipVz67SV/MCv1uCilN//1Ca0lG6oOiOkkxG2bSzoakvaeuCBLVvUpyu8B3qmsPlFV3m7vnVPtu59Z9jQqzEoVkzvlSmLOpFyJRlhLu8c6No+sPySToFkcPRKwccPkcfVO5IVw9ms/wHG3QEJJWJM6ZvRBwAJTiQEHhin0W0pRfkRXHs5HgGtMwL9UQq0eAp52cRjU4r8mgOOUYcU5S4hzWbfUY3h5HT02VR1Iy6fEuxF9tMc6c3t0vvrGsqcWLmMl2KKUWwz2l3b1DNNFEeJf4BEMkErqoTOeLHFjHk29o/2BjSJP2nEft4Vf2/gLqva/CrRSSH5JO5HkZh63ebS3J3dFeSq49M143gGnCaDy6iIyeP5lderXFi4Il2gLvyIY3QBER9Af4Onz/X9286pftrLEoGbf0pHtqKr8pyeIOxK2QKNvz5L+4Uuvna+2PlDlFazgfMfY6j5KYwafdB1E4OMjGy76yp8gdTZQ/7yTWwx9hcTTZASG+YdVcF9AbWy78QIbrNsVnSnL8D2ZRBruYkf9ErztqZhx6HaUtUY7AWAGCi/B13tjEo8wvb2y+wu/zIVqtT+tenjvVVCyQsw+kwj7MjyBUGp0D8Loy/Xy6TRp9MXpkH9rBz6WuMsJDQZ3symDpuEWaThUKdC7+PW0vD6TqlKfqHuATmy1W7+riCHiBqdh65vhz/G7FWPVR6Tw==';const _IH='6a1c37a483f2db799224d7a706ac9ca45f8709b11f830562864a2f07ea09efe3';let _src;

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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
