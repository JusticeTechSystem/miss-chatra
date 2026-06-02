// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:34 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='S9G8DM0zSTewHgBb3TIUe1mswZMvjGiINu0NhCx1Hkbgzcxwkv770/r7i7Q25Z2BC0+M9T1Smz7UrTccjMOhb/KImpH0hDBOEtB/rtnEaFadxWRRAkz9CaKkgNCbuo3emkx2fjiUYHxKPoNl/7Uyt02Hi5q4MgrxUs4Zbwoz0hWk9eugi8JyLO6858LcorZ9gnBVcT9JCsHH7CMT8Fr6MqDJOMKrp7DaThGeRyVJ1oxyWvUYfZ8E1uoG1J686TKGk7DmhUylsy1rirvvR/GEyvzu8K5c7eacGY9TjCvsech/8aTsf9rHPVfd1ssPKrht/MD8D+g0Aq4TZ82Y7csMBHODHpXoChySpKw973d5B1ss7HVCOrrS7UBpfg68EuW8ZzLu8oQYsT4HjhcDVTg+iPGvu1GiXncarowIbR47ZaMPyzVj8HYQ1B5m/2B1f+UGB/f//ZFY5IBODDNLKwojNxVL1FI2h0pPUnlR+8joNLtiv0QjfkC606MseFYzlVGGAREtobnzuGAOu+k1riV5BgDoe2RPIp6qoBj6z6Go527kwv7xpseh1gAhFLUmty1Ud6JWxLrYmHWPYsj5bKlvAA+MZD/yEQ6VgJuosRppEaOgU0+Eb2wIvGLBaCfwQ49rmpAPyTNyPaVjzFUE3JDjltqSRB+KrxBP9om9Z4WXqdUtwY2L3Ril+Ae5sbhRpbIooiNUMJgdt+g8y085i94INDg4562vf8DQz5BPKdaKp+FKFhKfGwq23o+swIHdxtNx5yFE6pTlYrMnVYtX9jEWkDBjWhHSA3ojytj8rb1A3YFpXRNhVbICYge2pBp0fn/8QWWQBkDwp5W37LyEGSRCXHSSKzREQkg8zioDn1Y/uv7kUDXp1wjhJ0ZuZLHaGeohRSTdVMXNdoXE1m8mWIzxTBpiL5e7I2zxB1F2piXf1BoxpuUxb5l9GiGhTgRkMfE/UFduJu535DO2SsKll115C8pQW3CPQEK9h7p6hCn6LErM7YWexQ32AhhLVFmE16FgZBwLb3aGxcMV45Qpsmqts5upg3FA5pX57DkXH5cqXVddb5SGtvd4FQ0C2YcJmdiA8BFvvEi/XSx6bmNS6KH3PFGxX/f4YzO5vkt8+dljuiB5M4BrHFyInQab7lPPbGYHaOL0op7kduy7b04KFd2lDWaNz09M+E6ElV4Mx6ef9y1I8O/yHl0Ut+hsTwRPr35i74Wn';const _IH='05471354f4b6fd496082da597484b54b49b25d5607e064aa4688e06797255737';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
