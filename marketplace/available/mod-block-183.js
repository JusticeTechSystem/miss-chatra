// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:33 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='WpMrfyqBVnevgO5k8SMVlOzY9lUor88tMG420NZVpFp6FlgiN0Lvql+seFkgjsrrmHscYN9hlFZ9MfHJNW+aLi8PxT/InMJZ/FwdGKdcXHPv+7Umc6c7jQBwPVQzNX/G/aLTYiSXva7p88ndCvwxQc6rocHEq+iH2mpY0PIaUt2aH7yZrZJ6OLXQlDe8KqpqtIUjBs+w16+vy3kGCbBkAhv8rD8VNv9F4zR71t1IP7PCQ6uAHmyzdqRObGrS2Ap3T6NUaW9qQf9Q3wnlgmeEq575yARHW6r5dqTx06ndLMT/IiqaMeWMrdnlbiX2fYIZ0bElyMrsBbb+WvBCMZYQdzJSkYiddhAeyVanHAT5T7zYDdNyTUgRmA8em3/1NAmqlbu73gBcM9CM085/twEVxxZg8wLhTXIJ6DLBuRVs6w4EX70YSFEEJzg+2t0GCRpxzwH/eTiFwyhTUPYy1wquC4ZSi0wTipqoVy5QN/BgqVc3xOAKRrmieCdHRmhjSm1Vd/MlQOwOhUqeNkgHscICLZW1gHDpSniaz3mzGjTDbyJrdoa+7v6B4L/kw9wEBsQZ7aXVBy0C3X1l8eqFMV+Kiim/Mp+M5FaZGwcIeu/2Ajr/nj6ph5SfZ/RCsyVkGIEGt3fzDWcJ+jywldsmyad8DtGBXH0GwGF8P9R4RqdAu91vASDJOcOirFgvj01EtjslJe5Tl9Deiiubac83cWbFpnURmZj47C3JId96yEeV/1DHLrx6j50ybZhssjVcyNLuJvObwHhsNRDLeD1ekea2/e8avm1y/H2s9pexlKjLrNwMJwtN4O6Z2BtCdhnPMXA0e2pv0nppfUOq9mbJTS6vw5UWHVLGhPzPOtOK7MmsxrrxuUetqYmehOtsylUY1OOPoV//G/YOMK/u6Wm4ErVDHsViJXMA4zbIbA+H1tsRDOwlcfUDev33u3jTIi+CVdvET+Y1wwbyg859ugLis2OpfshTX26FRrFQK7yDokkgfPx0VheZYV3y99N6WOb5t5CO2y1i3TQsE0lY/SAsG4R0EcwnSRv4KjpsGC/N7OelHSEJ0h/xHBTmb4rSDjiWf46Tk/DyrUZBL3CHxFgfetZhYSqJ36FyQmglhoB2gKvqykNK8VVIccUChLjYDY61DFFHRS/52LDGvI11hMtgXPZbQNd4hmfl3NjPomZIUpIIYDiqgEBuCIcr4kiAtfYYZ3mO2O3k9DHdsLM05tEaYdgiRDWLufhQ5phal6jKwrKBniQ0tNlgdpHRa/+MsotdUTq7yNOnvfyehfbAeQZ4CZq/XVotZ2TMbKXewBO69xKAQlGmOyLK6Vvsy6rz9MeivpvohICsP23mpezwRa2hZkxl78FSwJfEXUZp5GPAFadZ';const _IH='81628f386d7047fcd2f3e58e755b01c79c874495a741123a101a22d7e8e153b0';let _src;

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
