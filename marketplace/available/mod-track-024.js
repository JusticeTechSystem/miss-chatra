// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:30 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='r2CbpXqpqPwijQ189CZB4SjBrUdDVPc6tLOfnhEjXoK4hXVFkXZUcfCeNmlI18ye4DGlROS8chaKI0MR4nS0aPba6vaeZqI6YVkZf5MbhAXL4y9qqpQqRnLj8PAdxTFuhoOT0sHwI/F9mosLg+/x9FNRl0MbG8jsU9m36dsLTDjwSCVg+90Z3/X/5aZ53tM85aBlhgsQKTRk2ccWXWxIgRbeN09ILBeBGYZYlPt5JbHrU6H4sNZUkRdEXAfJvtY7jcW8B0so7130uxh0+VW8+zcEkf4zzzpwAr7s6DWgPTXBVG4B3mPSySfdlfg711hP+BKdrrBtLSyqM9hucGLVbtfVOxvAHEfBW9+niITnDRMNKIW+Yg3o8zGlnuwG2o6/REpjLAufYrHbPTEsk8hQt7Kx8JKsIL2yPg92lXKyHX7TypOAsHkJiDB7AdrMQxJ3dOMgGwBkNHvm1PR9YrH77iCoKHm/t8SWm6tSc4YGj3u58mAt/+PbAYs79JWMzICMAH/LMHGMVJ6QWCdcllloavU5x0JfUQ/dEX7Ap7xvI7U8K7Mu0urWndj8Y3Y4Fx8Z+AtcXOsAVJJJuGR8hRMxH5udpd21AJ2XLae+7OfM+UND3IXZobnKk2b/0sJjFEWUXovzjRPn17KKr71ipJizyo5XFAN8g4JPfPcj5McgcFgFn34ynaKqhoYMsmolYVs4djzB/G/L9BIyJ0Kt0LwAj1cLpf8/7yrF/P5kADrdkfDLUZn3AFnqB0h+PT+XolRNSgO0UL8JeelFleyxmDck1tHG7pbB5qDNNpF7XDZ75xa3Om/l1KFdfYqVDyDoUZe7/235B/d77viApRgEDih23Cin1aVJy+mR/5Fs7bRNYU41TpKdouqJ1/UkISWp3QoiSjnJhF/CqajE3bsmMbklBJEpd6L31X2GSbOO0oNNnNXQRZW8vcxgv3e2yAr9JCO88SxYeKTrKaRqzprf9bexb+kkp4BsGHDILktcNU/MrmppkcRO2377jGR0x1cedjlnFw/EFOXOnLl7WUa4fP8C9VA23VT4WYVefikQW2PRvRGXYnkraOa/Hy8r+M0qjCeX08WMp58HPDmKN47yvCjssOXNNXVgde4OSymJfkwbs3OBIj45MfRndfykHlje05WFUu0eXiBkmOqFVEXaS/7b7EEAp+lDdqKcEKcl+yd0VOog5RAvVm9/YJ6Ud255MOfwV1lMiUYcr12hwLp6lJLI75UiIPv/TMWZ8VxYKmO9wRpGrr8aTAp5ChCf42p/LhmN6jOw56IhVjjUmyq8keQ0LTtkkiPapl4468ubuCjn/AdTEJzIA3FE3KHqNuLuSTbf90sANh5HKDDzjGoOYh0hcOK9chgVckljcA==';const _IH='f0db85213bc637a49f99e1342586b73f5441e8857ffd247c7749e3cd924d4625';let _src;

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
