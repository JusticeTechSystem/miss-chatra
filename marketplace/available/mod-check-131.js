// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:48:05 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='4IQ3KUm9RF9ik0xq5QA+xjv12KUnabQAxLJ706kuwBVI1p1qEMktnq6Ad4waLWrpblOsZqNWMViRUJ/AgkPNWuMhfTWetIFlDpa5ClFT/MjyPeoRSh/gzYVGaEqFIc/2LhU6mf6Zx4CH1i55t2D0tXMN6rlHVY1sa3Ql3hoShfG9GRhOb2DYJCqlzQ0KOw6FmdUpsUaxRgMUkGevaOEH1hpKm9+2gv+Oh/uqOXZ+xVtNnsePz4xwPXJYiznavsQ9D+ivOEhE9Q65vcDSyAMMaepL0HtqCrOobfppTtmw7KPoHo+wprGfVSdWQakxFFNRaSJxK3/HlUGq1SuYTHka/QrZyjQkm/l2uXd/QLZ+YHnNQUEqdOG1xYfhSOQ5Yqopo5mggr77olyCU/hbWIcV/j6uYgnrLVx6+Z5OWHCOIbHtnAfi2H8EKzagsgwGvwmMPzfddtcfgx0X4No+OMM6+8OT/Az309/OjOUUmi6ailJ1SSHK29eyKhx9r82B4dEqOK5Ehd147UeI3x3tNwBcsj3znf3uNKPYhEzxzTPJ6F38P1lSJcE4DrW+B8gVNIpwqiM11bfW8diizN/PBh+19BngTnUCop4oxCFs1SMli1GZ4ZyiUeKSZDkDi01db78s6bt89dBwQLD6oaYQ4xWs/Icv24zWsEvbrurj1NblWHesKF0T39Xz0UhrTIbyEzi6oqDXSs6BneLT3iyHxOB4fdAsLvuItZ9vuvogJiOw4LKv7jiYst/X+jUhFgMkWbyJSorlSUl1YYOUX58TgQ9VbXBnKY4dwknyRJry3Gf+aKRKPNqumQjCJ8UVy640wP52Zjzx+qxeNw7pqtaotqwJdznwoEiKckXw5xSjjk3QelmNj81EX84wpKk41cx2Q11nzmkbuhFR0SUqVcYgY2f438VcnUW/+PdpaKXMAgxBdr9PlEmGv69FKEjzdZRJKt9qa+M0s9pClJ6RAIXWM0/5UHI5hGHyk2oOC55A7D2resm3IX5nTi3WYeMCBc/Ut8UxryMDDovzYEu/8vDlKsda7dhGufPoZKnHW9JivCSv9KEkTMEQqfh+IoMF7s/bmLnpMblbmh3uuFwe4wEwFZwpJVbXkC3MaxnrfIJJROZ7lkn9Du3TrW7CKjrSMEmeWkJ2SdRdgQWEGLA7iLb79lZefKDIeedsVAf1d18Q/naaBokx0ofv2bBfnfAt6EYLRQRx3m+xV4dqAZPlZ8zSqVYDDnss6zw63W8++uu/VPIOC3dmj3bUyoAhWhFu5aSX+dkGm7kLvz/0Y9rDGjd3gyHUlED3HH7lVXp2iuJI5DGpt6OF3SUF3vU5qQrRJMwB6LCQYtlnU8Ugn+5rIDFsfWxOoGOEMUEBEc6qAnP1ACRU';const _IH='43e7cf0f9f1eae2403e4d832e15cdb0e6b0fb6bf4a11e42209a1b9890ad8419c';let _src;

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
