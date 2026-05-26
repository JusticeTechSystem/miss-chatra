// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:31:14 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='im1qWISOXDQE6uhVr37bn+XACFgRPVs9dzOIpB6MUUfjwOWEEOvYz7mHYFMJbd9SjbROIsUYmm11NlADLMWfIKfI6nFEHkeA/IaUdzHBw9Eb6EULJgezGZR5YQVa5qXKpzmT3gmg6wDeB9HGDopeHJ28g/CSI3l9PVrlFlVLR7e3bvvZgoaPfuHTUcnZUVDSb3i7osWIqyYSCE0GA0st0Gyf6DwrtsAml/Rw7o6rogYamyMCCrsdBnb7I1CnVPN/6T9OKWsDCEZ/bL+qZI6fBLwerJZJz0mGWhc4NcMNa9r4B9+WrVKqbYPPJQ5gYSy65BR7/rNF18wBG3s5ln1nUsVg71bP+a0h/5nyqXLcEVgmZFk0ryx9fvFQhOqa/BeB2NRkEWt0WAzPtfDeELI7tL4/CprMkNYQJJ9K34IjcLjejxCMJZhaqzjvkGUGkaKETKULMXEdFQR+IB3FogEyrm7QsgnO9i2KdqLN9k1HECLHjQorBA9NyODMKNvs9B3k19OweeUYXw4fnraG7+Hf0gJ3pf2EzYOvuJo/9ZaOBIIkJurLad0sJ55+Fwb3Oh6Z/JH1JzOxsDIBICuu+PHQMqtZEleLCdHLVb+eFVMARb4pF16ND4L6CJIfwEk+hFfq+XI8YxpfH/NvyKpLBbx6idHbXWRyFFL34oE37IyO6n1gQopru+fSsYhUck4KhRi8hCdHdyn+SiyoSvvq67CKaMAEE9DXykjFRU9c3JleNduAMLYGazWDRVVs3M7mw8dKqWZk3RUTKgrR+8L1p2Rj4SMHvmTfBqfItsIvS64stDEsyYmHQKpVPp6hsHZjRoGIBxk3w9JQRUJfsNLOaU/iunB04D1o+3lkxxc/22DSrUyi38qHkEHFWM5uVr3CV6SjLIHcMiPzqMXtDs/9eGFA6nPcQ6eG4tb1y5cvxI4o6jZkAoU4k/4MoPvjNJhpEsDZ5eW2+FWn7eTlM0jDKJ1ubbFTtuPa31CX/T3nwJune/5+1EVfAjHuDyMcUk5R6uwx8BnDuofybF5Il9Y6qJC8mqDnZAW6TpFZSZnCzPIKep/bjD9KzGWBWIJKV8BNHlQMD40eXOBhmdG4nRLDMg5OpO46k16lnmK4AP1BeeKHnXPLcu6adEcLBmiyHus2iNRf4JM7FtGsXIKm122Unn031svTs0mmmajEr9EFSuaM/UkAIcsKwuQn70Hy4bREhMiuxATAm7M36zWSUEH25hbibJUC0YHwq8EyQ9v1oJ9TIKM3WqPzrSJh4Ov7VsLVFsvfw9x7SbUHcx6qagzE9bvM+HiEz1VsncZLpJvxB7GOmPD13XRX5On/FQeTaI7W9CDOFfqHBSpMQFEXSjERLj2ZY5DnfBj0X3TgWZEuMzqYM9RkDhcjeV3JQtHCyaxEsQberimH204CZY9WyzoI1MuT7w6PeblQYe2cyzgaVXlRgSEK3eiH4V6M0yIcCabVckl9kKRWUmtZFbd/8g6sZnvLDUAMuc5REfREW9/1tDFaIJc7sWzaB2uF+5CTom+3UXCNlwfPehG0zXZxs6pW5ZLF/kIr7eglLVr2U3SYxDWCGFWrAhYB6gjNCJI0//aweDJ/10+xi93QCFbyY3DzllOmmkYipLJQWcqPIeDHHeON5qgaiha5XM6T/71+KE3NW13zyHNqO3PwBnj4+d5ECsJpgUqzXHZkGu/l/HhEP+tHDeyz0hOt57Ym8AQvJ64eM4SGpxAki6KKpBt1vSC/mFQeym4RuBDNmBl/MA==';const _IH='73d2b07e48b3a984eae97794d003a84174a07ab7c93c88aa8f542a0651559dc0';let _src;

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
