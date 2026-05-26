// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:46:20 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Ht9p7yEUFFc2LB6LEjbWr4PIVx8kc1s8CTNW+UlA8nHdgqwMxJiPagYMoEVIVQPKaTmZ+m1MK/d/yWciffxfDKT4ayQhTT3fGJa5vfvqcucZYxCFc7gA21tZHM/debzMfBxzIsqIj6PyWdYtdOmthgY2mYw/EFYiF6wM84YGHyDXbfwtUQT8bC8yob7frTlYAT78kHp1BvXUQhZ09s1lOZ2C4JLh6QKlP/eC4C1PygHFtyuKEzHqt0kHvVr8Rs/WC6ex4rldEjxVNdo7vMsrubhbDbVT+BTp3pSsXsYbx0VgT2M5ebV8BZdeUxToMpqE6A2lWMMsgC57oYj50vZffnPKk6/JukUnVs/rwlmOxWapPtVfAzmLeEJDyl7+Yfbhb0hAD7hrs6Y0UOgl2B5yv4+Kj9h6B+TFIrCT0CuEGIWyg02J7pPlwImoPnxTwRkhtn+eY3V2FASNJk4DvEy9OOsaX5W7Cf8nRfz6/+MjELhwv4LG7qSX6+roywayLUZ/6fybTJqnmnG/AaHb5c0VhR+9lznJ6bGf6XV+IZkXut8Td6Nkav8PszqOB498uYeTfJymc2o/JAHHZyZoZyPZ7Vx2mkwFmGwAe2AotB2beuOkqeAOcuTu+xagBItoJijuZ3+2aWjDf2/NC5DJ5gDoX0Xqq8cOz0PBxRFigN+0lN1FUMP0gLnWIzrbOZO5cZZ5XZG96sGHzECotHoXpFgamY7rmVJzJxIO69yTvjtWW5zw2jjuUHmtB6g88pUNZJft5Pz3wX4SCJPh4soohgngZ4Etkq8Y0aLbaF6NT8pNTOo+QgX4uFkWsh/EX965dzNNDmrwo59BDPCIrZ4AXuFdbk+srMTzi0V1Wsr/SMFsQch9a1dL3qvqRibr9Nz8HBD709SarkMqfiij+rTFtimI9iQihxqbBEIU0zYDX53SKMapaHP/xkdnAOPU3Lgkk5Im+hAQ442inKi/GmucsH9Mi5oXnpO2Jv/WCpILjgmuWcsLQ9pjabav8V96vWhvl05MKvplIOv+Ijih/PRLMTAuaPaKeI7/1qQaYUMVFVABAganNjDzS1Wjq4A+J6Mk1Lh+xVfHPaw6LbglATk4Y/cpTfKSqlyH8I80CkWrqPGFgvatrRJlVSBeDo0pOUu3YaTpD7NMhztrs9+j9qKkqzuS/V90kIbIKbTKYZy5dmsTmFi53GWVm/E+RgjtFkkb1B7t6a6T/94dzC8=';const _IH='8d737ffbce381d1dc3fe109f533292a0ef70afe1055fe0285c43b77e6b425528';let _src;

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
