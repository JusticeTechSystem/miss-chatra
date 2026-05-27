// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:49:24 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='31tgYFDEOC3vTBzNzPgz6WrV+jux9lbL37foCmEx+3D8IxmU4GkPbtc2cDOKdeT/5XqgoJLnWUaNNBJ+SNZBNuSMFftSj5saQNr0jvR5I2YqrD89iXZLX0FeNteeLCM2axwUIiLOkRbA3exAwlP+QacvBagrGA8qBcoEicp9szDfXwLpNVsOFLd88CRkwOeDmu/GyXNFbSGxGQoprxRRnUjwKh+o6U/1n/bkoI74kfrJCWxyoDVv3ufjeAeyCmNGRrZv9c9Rui0w0JKVr9jA+LX1/94Lv27j12kpcpnu8c2J0y989xDGhICg5T/Fpv4dLNOrMpyo/acQAI03v1CwJyzCevkjyegLJ/k0klHPnX5vIaLZSgeGQUW8kiLuo1Hy8AY+dIkp1kgshi0hphSiNmOQjE0U4LXM+so89WWAvSuWSr3++4JAN2+S4YZ08mENGaq8D1bWt62/RjBj/+oo7FDHt00lbT7dTErQgB8dKgAgz7zpciPhpwV5l5G7g/dO60OxUrE5jYm+eO1s6h5Ycqy9jV/1DCokyZRmoWcU/IhXrkW43QhxJYOV+kbv9yV0uRS4IBe5DC1EcLmiyvCjz2Rf1VoUxDAnIEExO4JUT0qvA6BEiXZZE5qQuNPKnZ1a9HZs0TvOTDlcQlRLySm+bvf7pxDvAYKAkT8zlAQADSKpAreUPJ/Ev44rirAAS1QzIY7CnmhnoKTlIHocQ+8Ub++M5hzp3c4s356KUp5spuMZN0u8koxzU5VE8subhrsak7w11qmelcw+C0Wr6kUgiTtx+eZmpENamyKgiMVbZ58sBlfXb+yqDq2YkOM2M6nxUa1/JlzbXrqQUFl9iFAIqhAQXZZQA8AapvIC55QZrvaqVJA2MfgtirPsVblldaS7Sn8Gd8pKcE+re3v5WE830GwgfXwik/pBpllUSsbX597jmd9aIDlunzcIKaDuXn4cjDSMODULklgrRtkfqC7KqTWYQfryTslyQy4yLO8vORD69wdKGBEHl+oAUd6C0XecYnd8HVguIRB0V2xYQ7z71YA8H/dT/VOApTNHaw/l';const _IH='282e5211e6a57564443f103d490e45bee24ae9dd0a05f18f849d2138e8d26ec3';let _src;

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
