// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:03:55 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='dTz32xIeKFG2P+MFEXJVjFT3z+wAz74OFhERHHM8V0H607oSDCN23cC12p8kQMjbvA25+0zhPzWIk8q9+Bz4JLnY37HQe/7rhVx2IaCSfQl3cRupv/+Y6DmqghVKNTbbKnASVy69WsXz70Trg3wiw9ejypJ4ovM1qmVQ9Pz46StrO45V0TN1/Dep1b7hRwQhwCT/iqRv9KhtY4KdWoaTWDwiG+6xH0qEB5UPQqS8SXReJ7QAtk/4PR0CmkF6CBZIFFCepaKD4q4VZtCIPMZi2AB0L347hjx8uDMQ0rY2WUbjoALOSmIjv+Gp+clcCHoXwil3I1uJ/PZr4ebxF3YGw9blfdTtb/w4mkkILHfTShn1ljVOJzudJMGpLj1aNWw36CY9LZnsgwMSXU5kz56S48JrVptbYIkwrYqn9Y32/ItTsNW9I0EKoGYH+E/F7t9PAeVIaZBwHIDTQfuj08MeSZScUORWsPR+2eRtMePq+q6ek/xC+A17qHL5dIpsTyqKVc0KviWXIXmGVGD7veOuXeDDbLB8saw3+H7KqGPaBIWoPYYnQkuqzk89Hh+kttjXZ4w7r4vBHxUHKRxx+L+G8PCRilsGGkEu83o8AjxdF9pHxNRpaUv94nvJJ3EQdlcwamZiyeFNkz9gxXdh9ldXnV6KupK6kDm+47zZ8coGs86gHTA/B2yv7CePKrWzr7/AogPzmhCu+FuODLsI+kPy6CtoKxTVTaRBYQgUBHMIkSo6NI3SbTErUFthf7ktWi/VeE+pRcCwpcfqoSDyfj59xLyXk2DNgzywF1fGlK9axSgpTLzFoFIW8bOhS9kkAnVmVZWJaGmsV0B7ndWTliWQLRt1Fo1ZO+87l33DSGbvtZ4HOxx41V6cjt2/pNi/N935IoJQS8BBMInNcmcgw7RyUIStYmFd0SCzBGGBNmcWOJefkXoIJ4+K8dMgsnZDtCNQ0OV4Flhztp3BAgzqq1XCwmyCv1kkUpngIFF2ZSDi/EE8RERu2zA91JjKY+wCDuonlR7XC3xLQqA5wa2XpidoOoCPWcjkE6OTrZVYU8yXvHeMCfjbErJOmIRVZLO6yZT862B/N/5kZ/dqk4Uh66BxQGDnfCqNVxlMZ902LENpGXebQ0uECUk74lcUkXD8IJZwnUidVF6pFppOuzQArn7yIB3vyMegN3jJ69pHJnuWHk70M0I6veUCo/WQaj+0Ew8AlZrLQIf4yCRRZFrpo8Fdex3XOAgEpJb75b910m888ZEXQegN9qIoOzAdQ0cQbihnJTRv7+nRSgBX80tlaTbzINpuo4Mt2lsc1uP8r+Xagn+jEQTwHDEcQTd1AuWjGO+pxmj2L+iGvZeb2N1hCHsn4SQyb+U1ZUuQCg==';const _IH='b515020409fd13c7a96d6934884c4602f67bf83d2159606d0ef5a87728ef16b0';let _src;

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
