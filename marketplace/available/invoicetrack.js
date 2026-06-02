// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:55 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='LOu/OR9UXGua2HeZ+bWv1o8zCLrQkoUlzGbjlAqIKldI2Pzwo5gUh8FGpR1V0mct4pe5AjoVo1uEwvv5dccNQwpLC3Hh1yXhLy89bY3SZ0+U3o2BVx9StePPrWXcnvRBpOn6v2xhlesBRTr5LLDmqMmfXdZuESVlVj6pL6mH3zxm5GdmqNzC4pl6ThDB/pXNshQWEQ7qJ3Nbs2lrXskR6xNJGq8vyGq39zeIbAm3U9K9hntUpGswgiyRQbK+YKPwjKbQMDiiy95cp+aS2Z8IHHFX71YswCXdV4dBDblBGYVI3IrrLHddFysPcNdhQffg74PITbBwpZVC3fuiPCPzecHiWcp95k+//Kd8GMqhvIZFiWuzULhweeG7BTVE+c1LXJAW1WYDYKv5+hqwNUiBG3c9HCPJ5nGBrdms4pgQ+on+INkA3v2B7usbuTjT0VC4SdQlETIH0bctcZiG2BdfR5hXixsQ1o4Rtg1Qse7p71BJAFvLhiXURpM/1tgFU0Itsh35QgI1mF3cEX2vL7Uft/nXRBqmwEhwFaEbD9/GtcI0pdNlaVevPRn7Yg9GkxdA9EluJQeNfvfaDvg0j/qoaLxZbYHhp159UIXU46SKb27sIlTB+bjsCc6lVQTlDNqebwzLDXcUnRAd9Q2MhmQbzUQ7NaQX/g0ZDmdfbRsSmwyAp9ggcLAEe3fP0V3P6EiujtpzBhSCj5VhWWqXZbvkUakLpzQ+KZj1NbvEeltS+WletbXloI/pHfPnTRkCkZ1zpH6L+m/jvEk8LQ3r1G+lyF7TbsRi+ND+9mGgR8Y9cpdLEhXROlI60TrTxwAdF7czRXl4wjAOV2bua8fc5a0FVgrrO3n/BP6jkSwEnJLWZsBsjNgAL3KcGbhBzd/zsYQT36g5fz5evf3JFp/+qn0y5cCFhGqD01pvKdURtKyj36T7XDqH+CWH3d4+v7ZFD5HwyhVQKqeRmtPSTlCV9z7ValR+jfsb30c+WIJZgows8lXqeB+v7HTVae22799AiukvbIOUB5aGnnLCNCB+2O2RK2s5MQk5JVEgJ6E9Hdt3lGwu1OkcecoHfZwIbXKh4rx8GQNK6sWDFKRQWFmGCUzrsb7bq+tZyTEOYHBdaAexzkpdWK5ZAQv8rEAKG1sbeL2xZga7MkR7rMZD0M2rRsVDsjiT9Eh19eRJ01/8D9rx/eHMwiYtH8K/1OD8BlJ/iavtcRjm/ixh7CYAh8ltcw==';const _IH='36d610022f7a2f0b4982963f566f5d5d2f03bc428bf86bf8a533974fbd96c4bf';let _src;

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
