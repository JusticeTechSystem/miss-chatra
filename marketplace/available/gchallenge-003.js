// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:27:00 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ejUGQnRlVM2EWu1JVKZL1w1naCuBmGHShUEgcufDTanFsNvtAdWhQcviEFmsxsqxYx36ecCnsfUOBM5Otgj4052rRSe5MilRnYqPkV1Yq78VFwYH7tOHon8FOU8sD3w6DeOs4yAly4cFQ2pO/Nn04iqgT8kh1yIf4wVbdGWXB0h6NmfwrGqzLTtvN+uGnsSdwi7wQe3096htXeteqgOFGk5ThJArxfXp0Y2db8oQvqEwsO19Ut3L+2qhDUE1ISBmCJxLljLYMLRGDntLajUEw6GLTCuScmo50B3ypb4EnC6TR6P8lqBasP0SuN0jd1o5t2IeS3EMk1lJkfk8rhovswSVZ9rXijDRdA1a240s2vGJkKzLjSi3Kp/k5ZxbVIhMVTOWmuGdgG8nhEeJY8/E4A4xaxI54QGRJ+kX/YLUuuiCLyPGS0UZy6TQHpr1omreOfCW6AWi6vtu1jyhD6mqtPjQcrvYgQHTskcfv4wJFGHSw3/3cBMYwX0romwkb8LSUHobc1T7guO2nKK4tnQbiJJEOEeuWFJgbAiJNmHk+M/TK0EmpeeLBPpj+gbsED1ygdCq69opMaEE2/+kFuL6InDAHjxrjE3etVEa2hpyUtDVASs4/M/Q9WcTZEW6w94catB3';const _IH='3cae92eb2d6e5da91abf9dc3a7d266d40eedbb42725b2e33a4f1bcda4eb1398c';let _src;

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
