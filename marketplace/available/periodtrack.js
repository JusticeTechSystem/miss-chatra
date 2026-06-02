// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:35 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='erJFc01K9R8ewtH91cKQOme3meHurojl+Hyz7JeTwE+M/TwEM5wPemrflGC4a4kHIAOJpuntROdh6Z+xYv80FpiVjC/9bjD/z15trzwKqam/GKe8BEXtWmn2Yy60KfeDd62eLONcP22/JX6hkQ2vB/hNA+pNC/k4Pw6FSeBRP1MJ9KIlBpm+rImEWotltujt4ObDUwTyZ0o7z0x1NPNhwldIaBxZDt2sBCB5duBEaKxviiCHk7d8JwjDxSf1f4ygAjLWnIHyDgy62YX+9WVkwxvf0kWYbFAgXaIsEb0K6jNZEzpj9n97C1LXGaqhARsEgI89wRzG1oKXvmJS1vSv5xHq6P01WRRTUiPiWCWCwhDJHX5EFRpzHnpTLMyDQZZ1ozm4zeF4KI63gzi0e0+RqKHVSowo5dJp+PTZv7BFO/4h+EUMWN/+ufC1U8j2DNRPpJBF9YJYjhLXUZL0vpPJPvEkPY17vtJGKhSbGCcTXpgn1WrJzY2l0FsuXD83uh9DDLo59eKI7rOChzOMAq9mZkQlehdsDha1ZNJqQ9VCRt+/PMOZv3V+q6t/Go6xR2Fo9/8n2+SggEzXhsvcx/xnRipppeJYcZ/6cPvnM44Yl28JeEanKB5EQduQzbLHOD5lBlR6DeM+NIomtpXWiNEdMOf4J1lEtQ0BIM2gKzAF2udjZxexfrCmCCoQ3Wtn3W/xU3O9NqAtUJYKMts93gTrgNZ4UlIa4htbQPNEHFRwJS1Wg8wToDS96kNG2q65ObDDmIdEVS8FAxtQJESBqeNMq/SbWtdBQGqIfiYhoM0E19tPlwdlHSJfN2o+lCeKFovCSMXJdJ+Tofw5pDm4HqVG7NR+x8oklBzjP5tliBbXqlEp8ckLnzAABcIi+vuWxE7h7MeqR6G5KI1/C/LhY+x4hdNhS0ls6PBFpPBCEP2Ma29bl6Tau1zgrz9BHGn8VsefpQvQDSHeHED6Qiw+QnfStehgAvkFd0JnfUnKUklijQ703VI/bQNazdw6rZhhW/pj6M6Yq8UKFEm7+FHae6DUfiiPdC4/6CYwXXBI3mXN4biZlv/rdiQyiqADj8xj9NqJgP2BURLydK/Wvz9XP2GNoB9wi8LdqxiEUBp0M7wdEWhrnvJzG+vjt9RRkM5ZgfTOS71TPOLQcn23T7gwqMAU9sEH5IZagfVxX9QNSmPGEgDS4R17DEUxD+7KScTppfWpdmpOpec=';const _IH='395066caf7944501daf6995b840297ee83655177417ff5f86c770f03871b17db';let _src;

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
