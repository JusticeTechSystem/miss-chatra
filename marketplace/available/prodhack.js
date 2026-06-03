// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:17 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='7xndBJIdVZPqWQ9RW8PGbl1wbNZ7a0PYEA55YOm6qw9BAuYiflwJqRIyjrASH5dWaspYjYOjE1UfvUfOU+ZSW8WXDuz7xCAP/qhDf97AFoc1WgvxybjhTQ7FT+JTrPIlSKjFYEwsFkZU1TVW1x6oTDmHSfQbOPyTth/60DEKxtXU5a1N27T8SaEwdJ7T8bT5nyVzTuqQ1i1Smi5GnmuqnDpSGMAPkZVGoDp0Gqcg0WLPHntB8eVJBdSrzYwYoMMwEsXbfMNQiHPFy0Y0YoKH8PyTRkvTfA6t0xWAfG4LX7+TF28xjZi2DHlCbJdM49v/ZKPfkvvAs7bhwkKBGdl2/dhlDcsBxN/KYu4IwEwYsfsq4+bq+/16V2YIrQ+dyFlflhAql/5pmYPjukDcMbSxZ/fu7yGI7I6vZKH5imw76iPHCOrRSD6RJ1GlLf89ufUiCpb/+y1odlmebrWS/vObz6+gyxHKBYn7mmrfQiRNNntOfqLdqV0VrK6L3fhKQUow4wYbzXbz1WJVOB0ZQj/uBLpoX4eVvh+e8UnBEsKS5NFkmV7d/OpfzqcE81cHRiPseVY+EbYlCH5wxoDD6XmVn/Dv4mDDDDvYoF2AxUQnxk5UCW7lkdv0NNGodTBxPPkVLntmU6iK5iAeibXpeOnm3Fno7SKKWedeOjL2hk4qWDuQ6PS6ZZW/lB5VgsEBKEX939E3oJWcGTd2RRrs5s2AMmsgmjo0P2W6Yy6myLp4lDJG23fyYbPu9bzjmIn5JLLOdKtDlgVo2XVZTcbzGvKsLOo2mKuS8BFP09O6xxeo1UjZNYfesMw4+wxbWkXS7K04VdCCaxsOBYgHLHiWQ+q9kQi7cS201FlyGKdw2G1U4tzP3/Qnf4czkSzANllHREyml7pJxL9hVnkKyNAVnDSJSDVN7VhaZG1uMzdIPPECzMIt0CAHG9ORmjQ2fabRz9GyKe01myhIKSTUaWNK09s/weL5B9QG2QFU8W9SR4lt/26RDacO/a8ee1FlqaZq0JoNa7wpucUYHbyK5/Pib/0kmj0Bf0gSxH0WAGxyc0h/dZanPCyyThOb42BT4mUKuRchoEafYhBcCQzZD2WJLSDlgeIsIAQhR6j2Kd90Vx5G1yEEkfPeU7VaP1d6Cnt1QFKphp0rLUmXN02UbQvHoQz6Is6w0IQhohlo3b8h7Y/tcTUsaYeg/Y/lJUcZY54KoV41z4ENK2k=';const _IH='3aaf00f57d1bb265defda8527e9b750769e4c213e508792818b0b893bafd1dac';let _src;

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
