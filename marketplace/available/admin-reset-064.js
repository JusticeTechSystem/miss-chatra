// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:46:39 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='HC33thXF9kKQ8VPM/4Znozupqv82rlbaVvCWQ+Eyjfmbz3Aba+QXLStWem5Dx0ITTTyWntbpKoOaObkwo0AjXQHIpbCBRPIMkveq0WF+PeW5ZpifbmZrcKM8x0R3ITJXo5mkPJT0j8xPO6qHkHFkgONLvXLauEB6mnUDLke3GMsonGxjJFOzlk5Kr0McPPNifJ635Nnj+VFHn6mV1T7xE73LOhWOSl27fH3M4n7hYXAI+ubM8vF9Bh8zr1d9vsGelmLgpzByZ99KuqiJ5hrnHViD+v5dLSXZfXAWX62uj5em8rE9VMihmYMn5GfRopPapHCKJllsFVMzKLqdrkFC3DqnOq4Slbxg6cnecfRU8WmFdZHUGH0iY9/OFd56OupsyUL+FlaamiDz0V6uBTA3Y4tdElnqPMxBi/8aUWDZw2otcAU1MCBh55NpTeiaYTEG8WMrtb2sVRUgurjEoMM3yFGntuNJAI7V7FHd/4QPb8VFcaITrJNWefYGNjf9O+F8twJtgzTkpGPyrkpKpchGqg989JR5gTfsbeZBw8b8QMPefOv7c8JtuHkLVT+uDJKSiGwSQOg2At8GMtriF7zvHtnZTnStxvqvDeyBido6dnLZOSoeZ2byixoCdGD//HHZgcv69V3CYaAJinPPzG8BsHx6zUP0rvsF08xfHqGK/GFu0EeziTmylXq0TPW4FU3H9XDLjWSNdoRUOciXuf+CEPgDniuR3UH2cqcMacakpIwrVi5GOPtnaCBA/5y+HMJnjS5Q+11YV5q/25T1Ws300gHvHEG1c2ZR1+VJqeUnp6bD26KeKDPdaJbFK1mdI7kD9APlkvwQNWWvi7TJEvUCZiQeAPMJoBabofj+m+dquVTcQxi/0THJIzcthXshis0weU9VTjVJaFz12diVkgiWCnrPayNZ31diSYRs3C3u7iDojjcRH9zg2iYmGhvCBsOYqOV9EWPL65lnNrhzeZkz594Hc26HOPjtovsNlijqpeCCJdsS3T8=';const _IH='fac828b4f679eb87ec0932c9adc19c8be3ef45fa6d4954d24c35c259fac3306d';let _src;

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
