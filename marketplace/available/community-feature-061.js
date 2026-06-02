// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:11 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='3AACez8syjIL4TeP+brV3sT4Sxh0IT7GBqNgRhM7yYD367CZZMC6q84dPysGJ/SC5yc7vOeeNkC+YFkbu35h8ZvGg/xAeuSUnEjpEBClzvR3wd5quF68pEXAOljgE6T9VISpsOnDArB8kseLYY/aCVDeMCSn8HKd625aybyYG04GD7uE+p5kKQKH6ZRxSSq93IN2fSWmDwey8fYVA1CzuQ38hsl4WFoOk6sa2u+7WZXlMkx4TKjOJhv54DU8NxMH2sY4lf1tv4g0Z6L1V3qy5rKmrYI4fbmxaLGviJJTDi68A+Teuo1eHzfZ04P78MsRGaHl1dXZ6afiajSVqEpFi4BaxficgKfNl0SZACDzFJtbaEAxrtfX+8q5QJo6/3N7zQ94rl2qbmi+kV4w4dgbxhFb3gIPh7X8T6iusmIa1LhvF+AqV3khFPJvEyArGjYrQNZqn2E44O+NsLnbqttVZ/acwBifuC9Ofiq9BdeFhsS6XFmpGhg+VQooT8Ib97Nz/K+dvBwHz/QU+Lyj7dqbKt8gJOlmmMyYW4p6B6ZNy7gxKWYGOnYElSQS8QA2NSfktqsqweZtPszJAqqYVHE1MPlufae4yuq9jOSd/WqfuzOBa0AOvrJ0HCO/sa4qcr8JWd2T1ZRUNDO3EPtbKX+7BdNel59S/hDW+nlGkQ1EyIowyYN5hRIDr546qmv6uJzW26sChzxKnPve282JhCN7m/VRYrg=';const _IH='348914b76cfb6edcae81030ba96bfa19283fbffdaf7038910c19901a403e291a';let _src;

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
