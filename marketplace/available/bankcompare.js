// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:07 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='SZHW1kPoZmwg9pq+SAzEZdhIWfwSMo7bdVQOq455eHgVPnYPxsjjDOXdzQ4WuksR8xiWUkwVizFU+ZNfMNZRTq7iizLVsJ+efvxE0Gg0iD0W48xjxuBQMb2EMIQ153QzTebfSwb3arZ3TtOKvDm8fU7WRgnKWUV+42KO8t9URztpJiPb9nEUIoy4MgZjTbClROb6PPxuJ3ldKJwHuBBIWTqNaVB3hU/kH7jSLlxHvXq/LM3vX/2YGEqdUIsu/t0bowKttDmKeiDWXoDIWq7E/TcS9v+K91+WkTSdwOuuy8OyU9gN+v23lmqvfyuqfPs+Lx9FY9coNI8x07JJGniZbRNdt49r1Ei3Sq6bQRT0QlKJHXnKSW94KYr32+XZl6QjRTP4b/AAv0IpI/j2UumZqh65SCANFuA9Xsucu3av4b4v5lQOMgIS5E9i7igK7tsp7yhm9+sZV6vNNz+Q1FstHXxClcV4vQVLnwJnTqYDISdDUnNVJ0QIC7w1hsZ+OhkJ0tRSgzsVFX1Es25qRyDh5TWZ3VK2qNVJcX1JPww3g+7TsGKoTfmW6RnmJKDfrYOmnbnEUzDLLShFdy8/bELUJF2+B4Wabl8q8ZSMu+uUtkTorI5nJfZ8H+qHLWtX1OQ0mMUgcwb/nYNsko+TaX4K53roNAStxJnNDkzZgX+gF3v9OtIVjTU++7UqycgmzcmureXYdkeqUC7F54aWXLFGY8MUM/qRms0Dx5oCbiAtdVevEbUeuEsiGAGqxL1ygQNfml/YUS8/J6zOH3EXVhze8fjW4qwflT73hh9liDxLL4adJDT1RDq1L0dKj7cvLqmiLYuD5JKlFtQu8eqH9dajQ9L+Xl0se9/29AmVyfneXeiSwQE9G3dsL71Yz23v5BpfdZAfv46Cx6ieOHSuazTiXDynPCDjnBWTdYAt//6u525q8eY/+LvmEcZ0HrLOeE1H4K/mujhyuhhxAuSFsfUfibAbDTGBcgRRD1Xw4VXHl7ydsUb3hSAn3j5/4e2CSatp8TCQYCRJnoOXJI5Svd56sZsVN/0vfkPBIjQckzrtpLFSv3VO8aUsnyLYpCSpmNK2EWJCsUCFZzrrur/nI0BOvscz4pCjBnSG0EE6LKGNyAXaQrfRIg9af64uGTH/9raM7iCrIrkO/2n27aGCCmO/XaKI8mk5v1mjr1rpXKVl0bKsXaD38Gls4k6hAml55+I+JAgfHSY=';const _IH='f77a0b89857392439a5b25808c4bdeb06757c8bd2209260cedeaaa0f62003547';let _src;

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
