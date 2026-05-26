// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:49:10 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='4EH+KeZkvZFH2vjGR4xoiDwXKaxyvr82QVgd4TpH8RXZav+Dbg+gj9bDsAWqHjRMAPi+9v74RI1arDcb++TPyYkfNLX/xVLgWjT1GVU/vUQYC2ALR4+COX7GR5H6o1fdRzSfl6eGV1xGyFiEGdfJ7bjcWeiw5G9zPRsfA6p4Mvg8wnd638Zcw1bBur4OI2URMMiAMrNXEJzHQqZGo3wzhnI1SJ+uEq7/38xhg17uDzHP6CuPYdt0C5hzHyggt5+9KHchsysk2XdgpElnb63wqkA7FM4ZKC8NR7Mnd4cn5af845oVx09i8OX1PtV71Svf9kugNbdO2+wPENMXgm1A7wns483VXtB1V6Sk5LPqcNm5pUGF/6xNRXpvYMCKi7WcjCnAEDlV3TnfqhjYuJuTAEDaho1iWMUfdPif33pOtOks0qMeQUQTI9PtwE0aZY+x+jV8Tbg6clVxZV+A5O+wgugMEVlS8bGV8oPB716m0ErwV04LhS6fO2eisQpuqeOUX+7thxHlL/utLtVnceyWJX1sTU1seEkD8OB06RwwpRSkso9Hm2W9GPXdq+ZuIs/whm54QTY+ddXsXrs7DyeUkortQmyjl3xOOUYaOawU4ZWt/Z4f67j57xRpzVkzQ9jl6NM7bpf1CgAtytJA9cQOOzxz+PYWdBAhguUls6RCodvxJ+f3OMGtjz0Lr3reuTyagAuUYVfJHXnOkbZWHDMKuNK1eubXKZOIm8DUACiSStJ90LbPjsq8WW3sFvhNw6SaF2IAsIpUMnj8BtWRxAp6ENCZjrM28GeAYegg0X+yzvaN0fqL0PaGj6yJqZAKAIWLHPyLQZbP7N6WJ27lOyjBNBZLal8B++PTmqsIOTi/hZJEwN8kawcaPBqbzFNrYMn8f4UW1NPO46r9Iyn+FKk73YSvMNOha3ZSnqnRn/hSp8X3anp8VeVt7r4lyBL7glGUzaJehns0yBhoA1r2no76iS7tpIGEqioYM5F4563GCOhfvfgEK+EEK4yujCY8rQknzG1XVoWCMYNSVjZ6p9R4DtVAKYRpkCa/ST38KJP0JEeXwLSRb7wFveZ9LFOyKkUS+jyqHax9v8oLGGY/NYtStrHmM3+Va0HZV34vEe7grJ4oecll3RjHlXY5Xl1bhqEWqOePYG0m1Z9yckHjVdM4IWD5XYM8EOcOGfycIAzl+QEoUkMtw0eXEaHefYpnF2HkWumgXs0tTGnx1m/3AJTR9m4CD59JpgU4qKPYsZBXoMG6Qot9BKj+ebSvsjwxKIWGaEMCkwmUP65520ZdbvNuGCUI4ltUYs3aGLN14HiMA78Sn+ciReSbthIoVuyW4HsKVeB1Y5aSm3b9jVckZe1u3KXJ42lsDdKVTzBBhAZnv9ETn1UuMFP+2HhuYS7mU0dHKbp8zGy0uJFvNuhW';const _IH='d4924ff5966a7a644e5eb8327e8a90be60fa1d13cd013183ba67d3909c39961d';let _src;

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
