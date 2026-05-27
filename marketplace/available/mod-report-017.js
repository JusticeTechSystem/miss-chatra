// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:04:53 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='it3+35+81XIhJ1253RJr32D21nMyfGOVDqvXzSdXy2KdI68wEQcOCyaGk9EmIibaX+sCAsViecVpSjEpD4R1BW/lbVo+YRyA4Du6gQJZkqQLYLVOihiwUgJBs8W/U93uv7DIJADQIYafZp7OlUpQ9yBYVyl831DpGE9vHQrNOk9xYDip6FPmggOpzaaXIQM3/d+XkFQv8dXA34kwOjC99CUmCGYzUjI2Za4LXoHsJBS9+ADkcAZz9/9AFZ7lVk4/6yMTS5IHXA58VAqMEkWyGKLm4LPCdCt4Kb5WblU8lZCcVDklK/s+SbkhqXnadBqxzJ6HSN57Y5G0LvQfxdkvZ6EkkUmXViWpS2MeIV85vvd6AqF2uSZTyvstzFqOpyWxVb8yhR3EwDaMGAK0mmlbFJS8TacOtsb5NAYIMvxIldHQAhMWFrv0erBaGuypB2CeSFSBe874qit5OM8H8+U1jo8S/v7pAtqIbW9dqaNLgfOnSVtm52pzbRSMHRE8viLv0OA/chS8Ri/QIWAGqDjWBWeehHtNK4MRxk4Y/UUMmOThNTuYYFhlNvjRhENvRX9IwwV7myiNN3Lm4KZglDsBxWD4ktqSpbnj7124AxJNcCA1/A1r+VlILwHSidgifI7TSjyRa7VljvsvfIOhYAxmTK9Uo1t2hyKcD1iDkUoenQEg31Tg0PQ2XiWLMuzBiTMZ2imB+Cl6ZdDgqqzFc5Gg07vWV7XCmAjMjhY85nonMSVNcIqxbA7ibE0QY/Lmc6WlaFPjKJB7y6fA+IKqJlVKCBXweH4mzJB3BGRroqcomLnCMiebrznkCKkVQIIZOU/4EuFrQSzQvCwRsvd1bxV/vGAxh+iK3gCvVjras4840jK4XSX4lqLVJ0lKNtUs7BnoWXBrtt9C+Cx68bXZPcn/eaaWXRzxMURSp6EKu9PN2y5RdahYSZq24jALRkdAc6IHkwkSC95Za7+tB1+MoucTcLTO5LuqBE0PIQ/zaB24KbFDp7PsiC7HdzuBg0Ame3BNkpDe7rT5ChF5r3sjD8Hqm7WZ/KODD8VLj9wnAZM8bWGaqHhH0spXIK9BhmPpO8B4bsK5WVaW3lkeSRSz32OKfumcvC33RCW3wuObL3aSqJwYb/jn+ibDz5MRZ838L8+gd6F67Xtjr9TdXmp/aCMphZJkO4JKuEAANn8kfbhWOox2AKYo8NruARcIAZaA/qkUlE2XJxXwvZo192aR5w7ZSta7rzuN0djkZJEPRkSGmG43Hb1xHrZq+zJh8DEwrDNS8jMozgjSsNWQ5+dWdFnzyfGVoUoKTIeX1EyjFeUzGKGsAL7BHyW4mjtzco0bDbHsTTVMR0U4GaMS7S/Yjqgz7fqESeq7q6ojCDeh19eWGgx9Fvc=';const _IH='b027237b8538854dffbf3a0c621e16b146e367de270d37ad604cdaeb6275d571';let _src;

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
