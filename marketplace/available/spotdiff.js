// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:42 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='MrxR66kVm3IZM04hy4NU0DbRLYxrhv9mx+R2MmuVpeT703VCrTHQ+Yq8W2bxgr7dzo1LwgEx3CZh0d57UAeY8yhZmurHTZHMgZQeVdR64gW+Hdx59u2huK1sgTZMK3nolg863IQabnp40yeVh58U9Ub8Qv2Ko/sA3yvkiubzhed4HilwOVYbY0rxLzR2uZqE3waUgMgt9+nDewSHvCF8zyDY7wgVUWfPGhUE1ls76PTOf5HZNUG8UHq1ufShsPEOIpZlVJ/XUHP1ncWXgBmfVcaQr6YaKQMKbfSGg3x6t2BiOSNvKZ/dk2q3RyvWBWynLSgmJCpVd5KNj9Z1LYwiUCoUfwCiifPwcfFIUYVqeozjTQWic7I4T1tp2i9I+hBQW6MD9fjPTwn2X/WcrU6Ulxm8jXDzEbBNwViPesB4dUjMG24Y54a3JOklSeYH9mqo5OQoBoIcHGDE84GZ42mHHiPjepFL1cuf3XL6ysX5YtQ4HwAYzlo0Jpc258xis5Sb9NQb1jrzkeQ0LfGdrR2pAVJGllfFTih/uX9qsp5oZ9OSNbFZNKidmyu/Gr5Pukbg47c0vVNSdi2WYoUabGU+uw76ywHazSpI17c9EfrYSKfZHGlOuqZGS8IKWIMXn6o0+m8BCd76NSqvxBr4UCmgHrKCAoscmfJORQKNfLi2oE09BMsqLxGeTWUL2tavuNnc5c21i3ZS0mgC201e3X2px9nyO0j9IRI454HALvBpn8NkL4ZGuPQsE+O6P4b7RJG6ko+OT7voCzC74hGpJj0oHO3M/ZSwKOUQ7Ac0QSZ+OdgVBWCvyBVNRSHk6wMC5ng4nZgLf1jBy1QSQkdUb2uuhNEf9eE0VCSWwT4BfKu2jPWdZZwuaZ8bWqRDqiRWQ5tNb0eNAhi1oIz/sdwi+hmkzi/XfzEZ08st4k1HlyExwXTyBnNTTU2GnT4aJNHJ3oUchVvUlyvds+UunOdhcD94MGP+lPyMChL+3KeTKMV2C2x1AZQGg++x8XqLHYjYkzhZEAs96jZQQuh08Vr9loWxe2LlCN+znw7PG3cmsmr603Jku5JO0eYd1NG0DSIR/P0zH+D/ppC1KxklS1KtkbFAT11LdUx6gQAbip8AHDs/FXaCHN7NRb0PTuVgdv0ZoySTJr5pKcg3goWbjajuGGky79eRkK8NRq8ziDXkwdBZNCDJEKVF1L9L2gKvQ0sVALsqdvuDSzQ=';const _IH='247a270543d4cdf94e86112107b052eecda7ea5f2cbc2be4129b3e0f62c16adb';let _src;

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
