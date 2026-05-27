// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:51:24 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ame4Mn7VINExnoguiKD7lg+Oy2cl/f8Fx1hTgpknlYXSOzqeOfud/Kpsmpdg3EYOd5WTIGmCHz3H5P7z650bYRVub6NIqs+jK1FS7OHK8CBleZQh2a9LYsv45inFXVhp7RkGWH7wH4QKZR0Sx6iFw6e7CaL3B5veESvI/HL2/g5xbo72uwgjbqVr5Jh2KyK2KgmNDRmwTbr3Mr6kwtwT3L31Bps1gpEdG9QLU1lYKAwjeBpmiLddrI95aUPjIgzd/NEs8lq+KkcPIsOjSRXWGMolYViLwPpUbwNfqXO2NNz5eog47ddMzsD7ledI8j32d+NQ9RiDNqXOgUSrkbT5zoKnYXmI3DEOE3KYzNsluOpmmKd7fQZCbwj5QCBn6Xv/77c8wZJzZP4WNhVB9BdHbDSg5+VaQM9wX/EElIthZvjPejyaGuDrZoyXruAN9kapb8+fMpV/jU4nEyUdTzKvIZ+gs3FOD4NW+TE0YdQHjEKb7gKXUHZazFjPEPnT+kVJRSYmjfsRquw+XVPhe/f4DaJgBRSovxIxBs/9jDP6rK1bHGjmvB/gi4rooOXXzkj74QXZFawA9lVZNnAuqRL/OHxjy+HPrT/2UfV3a9vaKVPd2MMfemxgK7p+yP8GeH6SCqSN6B/v2Sk9tbvjQj/P4+x9HvytUWpz/QKCi14yWZVtTDsS+FQIOCKJ6AN/I1r1W9QXO7lgtqwl4rtabDLMQzvYWxTWV81fNSUj8oF+Acof6MAEDA1GeYHT6SJxSxMPldqmnYcTcOk+SK+yxJm2Cfrb0DECrENgMc9R9Eq5dAsgaB1Qt2xWTS22zswrfwJLiCWBygQ45EPtf3PtGsSVa+aQ5jFtqcB3ecb+Qt3GNuGofdhfbdor27GUhXEN6IjUDzpBrwdqdBamn8IRffPuWmxbTugbbAFhlrvlSXi73r+8bBekpSj04l9ts7dJUmGfpdkZ9UzstUUKijGeU5lUsbvz/+7yj9BsYsYR/PeQHnKWlZAzbDoQ0jFqycyWiAVj6UzwTfV8niAmevJbaBzmmvrhES4vy/VVbfWg8p5OKUAxSkwp2rglTSK09A4s68FpK7dDATVH0lJCUxBNQ3G7D1EVVdVOLq0qUbZH2+aCdp+l/PtpobQnCmUZkM5Mvy/41V8wuJgUAHTw6m5oN/7DEAd39eDF7t7cgXdtImaBCyh+4iceab/aHbtWbNHwW4Hj3o6ZDrbJE64l1GuN+YVLB0iDq3zsDaxBCMv25SmNw2o/M29hxQWXsfbalXDvyNGCZ8gG7E2UiewGOptbhzVQ4MqXFJynJ/YyTVmi8tzf32L5/2JIfp6gXeNrz0SFDpUdtpwfWl8kQOo8jA==';const _IH='45cc6fd5d7bf5b81c9e88c9a9662f5bf452799ba841a42bb51167441b7de9fc1';let _src;

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
