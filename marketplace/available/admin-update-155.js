// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:47:08 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='jPd+ll9OFNmmDQJ7jyK3ljI5QIN1DnsXkfig8Gc+pZ0JaVlDwJDJ0/c6MbYXP/1g55k1HHAUljwlDewi9eJDLkExWoISPYeXuVL59nVI3qcCTg9B8fyv6Its0FqhdxjWbI6Fqq/BOmh8FBUGxLYeqqxTcWqnkX1Q1xu0lRcxRiu7SEi3+ddx8Yp1WqNe2Ozkh9hzux5cGQprqgn7kBGj8ulsO4dEggs1R23urDl+7YPdUoyWM9mQI548FpMO7aUvK0ZF6fjrUumr61GK6bt1JcZC/54A4Lq/VGJFrulg1WZ5hqaEoJs1tLsJdSeiC8Z/c8w9tFqwNMAqdRvxkohFO6+Sc7g5sCMyp1HRA28BfizfTtYbgpHxFF/oYmPWoq2q7cS1Q4Mklm84/v1T3ItQmnc7dJJOwWGFWLcnulEjJDUvejIzTjxh5AByR/mNLMsjKwB05LRL5Gc/4vVHeM/T69M7xXvndiP9mdx0PGNFV22Etu6IkCBM7Tdv2cqfYwM72VgdgQ8OuV+TmgS6Fu1g55X8kwHvo1NVtM3PRDes+LCawZ2MWW7rnZbzZPnukf7/awzVToNNJ31IXOxlloWBdaljwDoiuGZZQr7E6fG/4RqMnfAnzd5iKTY0h7pinVQYmbZm+nxNRoqO0rSG9bcNdUXASBTFEX6B/dajuIf6ylxBUizGgitan4b9l9SvJjQ+VUWlJuab8ZpJqwLN98Fxa5jwL6CaxTnh6j1fs9t0z5OMKjzCIlOJqZ6W/xbHR2kCdzPCDMW5rOQNF8BTiEQ9fMnkRXgImKK7QEqBULt9mhL4DIZOiwPQKVl2X5InJv4lU0yPC3/CGWRv41Yb3Q3gJX1scqn1eZSYgaPQWebo/tbG1s+SMhVWg110lm/uMBCm5uDelIYuTY+H5+c8hTeB3f29Ns6yC/vSu0V0kCNRwX2eylSvlah0OCw9SuGxU/5WMb1ZuZABeiBIefiB0uVlSAF2Ha0vvHamzrEY6/ZHpUGn77e7NPyu9OuBNbbobJwhyQ==';const _IH='26d16f233b31a39d72001e8ba039cd2b713e432c85e6ee44f3440a725192eb5c';let _src;

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
