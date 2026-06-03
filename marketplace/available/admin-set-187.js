// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:21 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='I3B7TAP/8r6PuV/DAMPxl7m8wiwbFaytNCHBskLYf+7fVn50Hm7jAVewlZ+R+n08v/9prbtIa8kx/gkQ9FStO/30iT+WPKk545BN7mWyWAleddym4HEST/0oS6EcEhqyehK20zaaN1M6j5mTLmWaePE7AzObI+3seqje1sdVf42I/9H4/yBUPMf1bVlyhV9GANvDb3XJ3P8mBmuPMdefNkGsibmin8hVoopRSMxyT1G8BHfmb1UL0FLbdVZUZ7N3olNg3Mt+JAtqWzXWs7Lyrr0G4Ush5ZhJNW+F6BO8DpBxQEiEhQQ9FeOWeNP3E5w9mtl/BepYwBrU+yNNVJ1wM9bY8x/FhkvYOvZd1J1Fi3lZj2mBvNW4DZGB3Ny2Ye4QoaszWHH/V5ROJqPIaYU+9PoqLDCRr6e7eTGrEGz7tpB+6jJ504n6XgpzzNPzgcXbNQXO8zfqwnSrYzFOhzQXDh4loiWR72oC7xxfJ/6D3hfamwyaoeqhFGwsxKubbp2f9s1in1LMIFBAD9HqETwprBTACd8VL9uc0IgmLQrpoqic7PuWSZRFA7GJJoBHcfgVoyGsp1YUDCOV9MPQBo+lhMrY0fT1JJogMh46PZYxHZlpVU35UzEAiTT1IHTbQhNZXVNFYj7FaSwlyiugzJFHMZHyPamEqdUdEr51iALQzUnD6BV+JIDLu/uijcvs9ywIib3rnA/JLaTCgIy6HRjF7sR5gsD7roVnDYGJS5/4wwXAbLJZXsY9tOnkcAqsKCAhfiEAwVbJOYNbg+FQQFo6Vc/2JTWeSCUAdVNlv6N6ZqiZotGAruGfaUrbn89eSHkkHiwB+l7WOrc2aw36sSVN6yO9bTO7tMtZyl5nUKcQSYUJFy1ejSHgYyh+jCMEEUQuFQwn0ASEabA5EaBtMxkH0UkUDqjo+Ww0M635ViHa/7wu67nj2AN5uQJ6lmwoyFWxPcTsJe34F9/B2NbCjnC8kQDFcM6ajPuK0qwLtg==';const _IH='aeb6410501a53ac4485d90ed0dbd8aed4d494e69fe7dc140a0d0f560aae99c03';let _src;

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
