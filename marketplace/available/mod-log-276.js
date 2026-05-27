// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:04:33 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='G0heBGkJA+Y+tTYAig7Hb95FApeaYfk5zKU2etqao7i/wkTCgha69qlrYvxUTlhFl1gTUin2PgLbM2QhejLHKUfPUAOa7oCHVtbVHIRYdiFDEOVe1N9hfxb0ZudenjtIog8WB4k3rdSdBmY4cBCYyfRmdRRSdEesI9yvx7JRvIT5do8JSbr+XJOcyOvb7RCTt+CNjbBsq7OJcaEnLTO+geIX6yjRRgkDe3mez7tw7e4+e7tgkEtXzHXr77T10Hr+1K4cSgR+ylDwHoL9mr9C3sqHRYuwE9OujIUrHV+xPWEb7VpPUv0f7RuiL+ovIijye9XallQD1jS01zyOZ5RgirJ7tLqpRC0BYjTrXxstv9XfAUlxKIOlxwuO3eCdhX1ZvVDc4HmZZDEHttvJbwC7m6LVFcIF+y1nwDspr9C8Sl/nYL8e5tgmnJ2R2IQjnoRINBzIZOTRS0XAesxKYPFIrALYw2Rxx3Nwet++hXu72H+onsLmCokSsmp044AESalXq1tCDE3dtCVyqsQLosaGrymcWrzWQwnpPKYQCQjCDLJOztU8IrBB2ANB1BAXsecvyWLhtNNOC+vh/D61EnZjS0iUodkPGRrnxIVlgJAutiJXHIvba9wUX3fF67iVBc0lZWnsclZfytWbvNPRKAa/cHvAeq/fL4g389h9Om77ibgHZ12v9yewPVY44Tp1wtqB8FLxw2yzDe7Wd08g6uT5eWJHTBYZ842oiBny6gckAHJ++XgfX+4ug+UC1shIh4RQYa7h/fzcPwopZqcmcM5fZfzOmD8673LsJq14ASUz5BHf2Rxkh8e0/MIU9XqIHtABcAxyJAYJp1tb/RYnuGyvvB8Ls41h5QS1tw9TlGrxPkAf3i5BhHYVHflPBUN8z12+48s42O03WmklVZ/UCewoGZ415+z94e4l54cjXuhNA9l5pn3xWwtwkWsJvEEhCpxKLkmpWPZecll9bwYDN0HZq9xiF7UFKjdQ6xAbcd5RmOAP7ujfIkTHUolMC374sfBE+RO0jNLQUCleXS3WAb2mXNcuR6Jv7OxtDP08mtdWoSMNywAvMtUx4w5n9SEK08ucgfcF8aPc6+CiEXWukKjpWgm9XDgUfGuhrcOTFz9FtLmdhgXlu9rJ2Kn5gY7sz4GKvxlFTa/7LIL+Udwt2rPQU2yoHNuyl1dGKtvyG+r8+GiAKGyWuWaYJdnk6T7e9Db15CFxDuoWerIByJamdCeklpgsB+3aw4JmKLvZ9FokwzUqfJ6QZh+LSmhjERXnZItkCWih71rk9bsuzJDiO1dMu8/Q0HOwSyp9jS1IarHEWpEWwh57g8ebP95ejPHIjojJhFm8RdetdqNHTg==';const _IH='64433dd6e0c19ccfce0cb6a31c105113bbe16e6d37ce1e834f8b6573c0463d4f';let _src;

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
