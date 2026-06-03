// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:27:55 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='whtEF1j3+iHluDg3MqsiZ1x0eWYt/BwrN7qrDgair/jOWPkkVptJ6/1c939Duz84F2jyHqnCznU6keMcvPdW0oaG0stI2I0uyTsTGw5ZbRl//daQmSKX+aB1hIPcjO4qV+erGljUOHP8dyCVPN+e8ZsCuATqEeo05B3lw66EjxR8dLLUpL9EIlZifLcLwHwiBG4tVoWReUYByBo4+A4Or0+pUT+AqmJ1xo9Qveug58k3a/qFQoNoFqY2N72vL/1MUAl2QapELa3eExKdcBYjy7Sl0qE6Atm7CxVBFwcq8iENz2bfgfJeb5fLMkmKv9I1nMsrvU6x52u9glHlfJcjnimB+nmqEy2+naDx4oCJncwuPgzg00Vk5h1jTjQG3u3vBvQH0/7fKXxyrxVAzUy0BP1m45VQFO2OWpQU/8+5E+/S/GiTubeRspRiWCP6B+MAUOBRaGhmU6cfPyh2pyGyXmx7xYTYiI4fVp6Iz5uqjgXewm2EF0YdbBOeSt6/sHk87VcgIf9db6HrqQ7pajn6b9W+axVYUlAiUYKBFPffMd57XPZsybvdMUR/HltUW9EjISDgKv5BDlIAuoVA+ilGNTyG4279SO5wFPU68lCQ+LFFGrmjqMVAxIm4huTsBk+T53DI7Up9FnArjnJYNqeP48qZ0dDS5YGnGwZlMGxOzJ0+DHehnlDLe0nwVZx60X3K34WswmjN1ARGMqmlorwBCYp/NhoL1klYRC8NIUM2Yz90kDk8VaYTPOlfJx3rZUXSuJKnMng7YZDOW7Vfn6JM4MKkpHVQRhI/Vb0Ciw5r1MDFO1H54ts4KYnWzOW2x4gUwz1BWsdAWVLIiIRoN0QP5IM3CLebBBU1dt76bLlDB0XpNQ1dAuaHZi3EnxZ4eKmfp1YU+0Y8VNszFVPcITeJIZaOGg0+1DfVyOeta5mI+1wAX0YvzFFVfco43vo3Z1hXQctWSHnyd9s8XBphT3UPSsXOBkJEsf0B/HQyshTsktTEC070RBLtclxAeBroALQrRr6eAQv+0xPFDSDQmBolONzG35heH/oNf60QySABGiGD6m6thAyuvYtJuhGKtgz7VKmuwtjWaYqmxpn1ld9nBjH3fvGXrbHZDdys4GwlWqXE68y++dNuSZxU6mL53zx4wyhWXFs/q1zkc7qTc2+O0soG62TcQjO5WRIA/5zeUFYCzFKxBrkHQCxnC7YvCrq/kVrUCLLTZ62qKG9GmPtoMo9Yr2Pa/duSnRhelrL8xLdn4Hs6jkhZVthPyavcV2SVSHQrnfSMGyzVIAGNTRq/XCWXU/wyqsDBL17IWaLg4gird/Cs82zfKBrmxxE5b0/PuCQbJcfo5XFEjR121D1dcmaWEWx9io12dA==';const _IH='820da92a50af001504c416103442ad728384124758baf1023e8e294ebb957f3f';let _src;

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
