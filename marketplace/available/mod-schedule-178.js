// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:51:59 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='DWvJ1UoW7t5Bjxpz0oGe36nrLEIiD6EPDsmR6P9MH0yewYUmfFnzY14a0kQaK3oBx09N/8vWLkJ9Ct2YrjtqcnyPtihHBLtaWGsOZydmM7CBpn6JIhStEdONWw2/VMf1OynGHM2Tdljj/j+ORBy88ay01P3Cw4leRMxb8jkt0NyIFsfRyYbOJg93FwyiUnOQdUOrXtJc5t6h0IpofOq7U8OqWeK9Zs/IfQnIPHCgQlM+zUtA8fXYxAsOLp1fL5+xWXSMyDTJt0LmRtUgvmZbjkstYX+2plQlESaZKxISOWnLvYhQj23KRQI5+UnIUH2fojL4aeC94D/QFgBouKJ12JqpTumrtRYt/tLVPLpPNUDxOH3IV6kEIJwesmMwQICokCCMpv61R+wf2hRX0IMwLl5s43xXztLJBcpRQ+FFKx1Ly9Jai5s4SR6mfn5p+27MV01QxdRbt8lbjR9A7gLe8R4UbEcMXI4BXBWF4GtsluPdrtB1vHoplytzq6LDyFB5lHNUi9q8wGbsqTi0+gIyy2cVD7ePhqXamFn3tjRPhC7o+Ie2qzFaMKbfuKAvJkb44xTt9/Kod+7Yeke2yauJ53+UtcF9kjhk8VkqT30Kz8EzrMs+yn3X96Q+9ak7Gpk1BBfpq0uvEPxnXHUEOfi5WtPELJACNVB+/CENyAR2kZ8HQeV9Z+l6xh5K1mo6sPYdApgZlQyBY5anwcs/mS8xM3ncbPFPc3Icj62cHjc80Fvp8Bj2NNToI8O9E7w+We+02gGadk4+/tPo2JMW97la/zFRiDVfpkaNchxdatG+4CJK8ZBqHKAYTK3jYqK542uwz5mXuk+arSRCGurywKSzhl/sQtjumY68fPJZzOEr4lsRgHYkaWJdsVWqNpGgTj9AC/jHrg/q0E/KVaUcu1LfE7HCA2O0bwEJvy3GQOt+i8xAJBF9Ppn0p18/nCsKyf+kfWOWDz3/KhUMMs5gLjIN0eMYwvAd6MDXRsxjJab3qn0MMr44IqQ8wm7qjUXazgnTYbkkuBuuTOTcCWQ/Es3Xw8EDxTRZ6Wc/hXEQ2FiNw3RR2IetPasfMCSNlRk/fhcQCfuAinqEWiMmpb+jcU54ImPdhZEe1IaD2IxYo3gYREdakitVlhtJucfaxWH6e4l8LTHJFFew+0qE5KVLbTweiMPBwAn4Rhwn6ifru0EvocsSJ8a9T2JENrriForoiYeBF6gfHHUxAdsW0TwYlpHARqIvNmNfBYL46Gjjicyg4Z+SDn2rspOKQz+bDonDRHRDtP/TQalu2e2gib77WCEQc+H0pjq4y+NoKP5eMtwb5jVtcaAeasLP9IFhpiZVl2KT9j0DORIFABNebdU2dS7p9npKMi+Bi0190RMcb1kka0ZmhjhCGN2EW498ULxYdqKRM7ZmRHnBtk8isU0O';const _IH='ba0587b8ed6e8108b6e2cd043b02563a97906aabef9988e05aca4a0aca5214f3';let _src;

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
