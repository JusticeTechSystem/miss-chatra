// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:51 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='RoPHQN8PRAzHIKLayhhVAJbGR/2KLWU+1K8y0wA9VPibUxp+so1jRYJ+RskilenMupMSnQOFGTkxTagAKl8IX/PTaUVPi/FkC6LGX2a+numN5jeTYl4d9i6L39oxquI1yaeSzZfkFgZbkHjjhVlCUVYcorikxTvP1nssvciw50ex9SJlPjZFK3PpHMJng/IuCsBcWHVi7Q++47mUrbp5drjJ0/x2Msumg5A1auS7sXrWkWK6YVr3AOStZYPQ0LSwBahf4nHEf8b+04gNR/GpM0/rq2JwRlMtBJlUHMDsEFmp2UMegTN+ibDwnxUotySGdD6JTck1fwGq0uVaC6WSB0NX2hzborh/5zNB5RbE5ZR9MZpyZOyq6Rxao6dkKfDM1vJeyWRDqU8w7jYFt21mPbvSXD7uvICtci7/XFY2KopYI0OgC039BAgrievvBVBRxa1nOARIZv9yE6G2SB/LJ0NEnrwwWjpy+6WVXDNoXxtKO3puE4j1eHRWlgRGzizulpxpOw9QlXptxnllya0KivEQ2yebnDltHphp5QebueGVlqckW2MRCGODuhdsqIqxqsP2JI/eS8in2x6g89tlFXjXOSw+A3eoPRuU1fM1uVpCWDwCtgc30yQYzTrsIgjxm0ckzG3IQ+n1yGyGtnbA1RAIv3be0RYO/1xNsYeqPsfhqyGCBiMAg4qMn9HV9BwCubhHxQsKxiAgpbl2FVictcchshljro7V8b9PGJJmhYv1Skj9EKtOXMSTHIaoJt7n/O4dm8wiANVVx3JJavLsK7Ql+mLEWL3r2JRk6LmoYAmFczKAgBUW3hg64rbQ2Y7lU7C2TDHrzbrCOE2RPkg9bDfeD/hDMSG4qP4DQTcK3bRc4q39F3otZIz5IGMhlEtCEIGNSP3p04ispGO/UzK+71sRl89jac8YHygHTwq74+Sv6Y+l6ByIK+NYteO+pc9LZ52AekadDz9cantkaNCakAz6YAac6NnwrTFYjJAwPbA+1HRM1GPD2S0VvdkIGVluhoGq8fQwkICEK712MqFyy90Jv7HHLdMTmOM8IqPzedaNdk8LiftTI5EExWSeBWajD/zgM6lg/KvC5n5NefKsPqNyhNX3CQSK0UXn6JZ5DUP91tDjY39rmLHqWhLdZcVU9dKNCc14x2hw5+/+VtcvfD7bdP4vqogaY5215efKmU/7eEzG13wIbs50O/IXjTMOcQWW3NdwmqNVHebvbpNqcCXnbEycX1myM9HjIwZw13hE+opxn5MqJdF2Y5WbnUM7UOvBZsLsNsI/K/YyCacwvFju4VIgKB6ebNr/LAQoWzTNtqPN3Axq7qJnaOGLPbXGH1NeCj/CQXkU5KgLT9F8jc7PzOupcli0MNLWQXTdg6KVyxqY2RJjnP0k82RZfHvqNf8h27DMUw==';const _IH='96f9cecd16e01362683e453acdb70373c5d8e6156c86191509b034ab8d1146e5';let _src;

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
