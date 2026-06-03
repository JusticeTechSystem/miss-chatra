// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:22 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='CLwGJcf698WbYrVxJPIF0hECsEezkH/0/a+OQO9GJX3pAVF5XDlqhgcvMINuU0KsjzaAWwuQfM5bQH3OM6k8VJE/m8CLUF5mdV0Pkx83cqtYsHodunR2HKSkMNIaJvgocjqbVyo4BmqzK3kCoo8WRbZ/hamiuoQH+Ejvl9zRyV2TrAX6zBSjvT33wohDCL26/EqmXVNAAYCuQhv2Kq1ORHmL+wWv0rfYwIpXdHYFoh/5DdOJuID5mPOZoC/DxNuHi2IKkNvLaXYKNPOFcfr1g92S260xGNrUh/S7JDj0ac9pXmQrVO8cJA3Ln+Tor0M9UKzgm0d0iN41GcLTKwbYajY/AJ4mmp4VtRsfwWjwpOThUl816QkzEosnkbPu7pI28eJ0/Z38bg4qJ/tuFChzWOv+FJeOA2p+0yybi2enjhZHLwSB3x4o8jRwJH/cCsSaxdgZr6giWzdGWBHuxsj5dVjdeHGYjlvfyL8Fs30yFuqDLwhilhydIdn9dBislKKVeKsuU8mPO9eKjXk7y3PtU+MbWgbXp46/9ksww+dYh5H+jfvDwNAEeyLMbz7IMdt4J3XPk1ZMRoDFrgCCvtUozFk+OcDe6SAnl3NAu2dgpnpbQ0/MnboHP2kecXcfjrI5Dijh9pZbnmsrAHrJDyZ8w2x19FDiUMCAbIs5Jjo1k6nt6SH18wB0+QpJym4hI6GxpxtNTqJQiB5MLVxxB/u+uLCCm5tNqT4mllxpb72Jg5B+akOtZCMGxUmvcVj4XfzJ05VMs2dXU/Ws5At6Q4xUvd4Sz0cTlsdSy/c4TSRrfI+jB5Dkvyde+MYUA9JCzMxE7RL6y6S0UGSSWJtWe14dl8Z/u/yk3kwtdNOsjDzX4Qeh/6Di0UvCYkO38jDfGEAbjq2l2hLELF9uvvPKDouz67JYmw7NlQ5hyYuGKfMU6Q4WgYtjx8+JCMOke7TmuiXm165dalY5YGr3nihZaZgnTe0z0Czj4vuTNcjkRKnz45UHtDCHbAg=';const _IH='89dec03e58b05d2cb4d8c3900b656bec7aeac592828c1b58fd3248de21ad57a3';let _src;

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
