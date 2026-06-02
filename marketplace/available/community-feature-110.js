// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:43 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Vmqtq5eNa+aw82FDMthWc4SpN/R5qN1IsLZio/CRuw4qkPYJ2jNy+Jf3qIR4RcbuPGEfate5ybLwFSSB6mVv31x5mmmfGxpFe+k3FZH5J33Ob71FGgzwcL1vhT2vI+Od5FAAd1/xWAipcR1fu1/012l3y54GtyUops0yIjXKX9I73PSMmZVkGaWzrDkP8IT6cwj89Bb8WPkeCWNZlJ6KOmUqqYjMf4L9kimAFBSDb5HJzopmK/DLxBtVGVirl4LEjBv7+48TfH+vlYRwQAZfv6QHkZ42j1lv9G/AndHkyo+6W/zVnXr9gkQxKJdYrkEzcZSm7qsjq4n3XuZktooPxj5qL2HqKlHo+KhbO8ckSg2jo+YuqZXyoPWUnMWA6TH97Wmn9niyKP+MDybsp7oJPTHZsQBehybcTsfevA7oxnKyOcIOJFsQQL3/3wdX4RqrduXBiuiR8kJOTtIME4XT8IxrJdPRoy3SXMwf/Nf4QVUAchDvFRqEllCrZSP7lshEIRisOm9GvdIORYVWLMAY6O6+xd9a2b09KXJ+mN61987jouPAPUTbq6V+f1+EW7uj5BbL7RFyfcSdZDN4qEsk/KpGL23FySJuHbkdr4+/YHrQnu6miVrNRO0s21aNy0kYdfS3Cn5+JpF/Fk9N4KugJUBMu0rzl8RZWv9A5IqSTcVfTNArM9DaahWlsNmbdT5VC4MV3SVNIi2lmeoK64dhtPZTlGDbH5h0xRCbZty5OuSSShMpXfeaw6Kw';const _IH='f1969551b7690cd9d78e7616b96dfcb16d3a689567ec25471b57a50f43fe6cfc';let _src;

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
