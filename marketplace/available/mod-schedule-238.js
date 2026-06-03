// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:51 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='lLpYXv0atL/rl/l7xzRZ9+2jkk1bpyM1hQu0OWAEhjON7rZwG7SXuBumhRIH4WhF8eCTG9csxQ9len6kZOgrFsPhLmYdTN3zKojMbrBE5PW0oUGiAD6ag+5gxcLG672mFUhbBRtH6hTHcCM6x3Z9mvY//JqPJPLEfFl9TutVczMQlaolAm6JrC01ug8/nBQr3gg6N+pcLsLnhKqhmCVim/mqose3KuSIgQZZNm3htYGmT2AxgqdFhiU/Ore1wYf97yBSpZNmdoRg6EGrlAJyfqNIRhDe7PXSECeKq8BpMUrmkcUvIPv8u7c5YKb8HCMD6DMAP7nrYOSlJCxWRw4zOXRJNFsjwUYXwAvvZae0XmEl0XxjggSfnShbhO04WRyPxEuRtsRtSJzn3OMJQSRoC7YTiaDOEZrovJ8oQ9vDCxcJzOtCzmF6nwah4j28v5xwBStPE7fAkNvH+2LZXy1QNYkDTh95Z13ZGR06MiLsBuiuTKalgFu63QRuxvpES2B6Vj4IzpNDAop5fQ6QPuMxnx4t6NffVTMFF1Qzu2F8XZGbfp3hf9+ULnWxO0i1U0Ni5SQYNy7JjfiZLY/xOO0S/F1YPoThX/2rbqzOLSAHvOIp+iS9GKReUSpb/xh9CZ6dP0V3KZDmKWUL8MytCMX8qn3vZCoo+GH/5zRQnamuzmgmB/Rc22RPoOz2MIYa9MZGrZQwEuXaYRd0hVTUJ3x7fWAJ+lqpn33HZyjcR1vIUsN/3a86cStXyuv007ZzNiLvKPbulVK71Ysb3dPUvRu9oz8NLMT4wN6EhZjOxIIYynvtmKbD81gyANlrzse88Lf97Yz3ss7WVZzH65A6B94LuzgnvfQ9e3zYEaA3QlVwWA6ke45c9Ag56bRmcpBXnkqK4qoGzS7B56nbURFEg6EUyHZqTKPpHWs7o6ZiU8JrcqmFi0HqJ2O4HhI8glIJHRujv6d5mivhIZE441n6WpRTgSQdaIlHU3/m2eacYxCEqWVl5ZDwzQ6emHioKJAs+CaWyqCjLhbHyw6KsRwOojuig5Of3lH6jAqSV8nwzjzQBZ6sF3TYVaEilFLR7FOlSOn6TnxUBoqsfG+lDnQswT66x34ffV+vnePPt+ccsZq8fBOtw7EagZq2CVSQXpaFNt4Ucn+i8MgD+zcnmtlvU5ByQRmjXo519OooNu7ZGbw5q3bcBdmsRXPtdkvZUb9CDS1k+4z0P8eQoiqEqR+LgrLkAdDAxIdU8T4b3/H24hd8hu+HzQK4m5ziqL0pqslKeaO9aNk5hB+IjkVBHyBwHmRqNHKsRle+htZkvvFLi2fTiz0brPwgphdM6zpd2nicihR8/FJjR0X09GAgeRR2y2qokYay1HQooiZ0jDuABGoPAyeDDA1YTsiQ4vcpcRjoQVwHXnW6r7nprvjz2SHl';const _IH='1e10d3e7f654382281dd7a495eb882801b709a102461205bbcf987be0be40932';let _src;

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
