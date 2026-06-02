// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:00 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='pKoeQ8lD6kCY8YyG0LYqTJB0Hpg820d29rIoxULeTF/5hoPW0xaQLRCQkxuBZZQjJVEFJxdvzSJ8LSdBYkzg7xZttwj8/Y5hx76rh/RORWxyzXiiTtLqHE60pqdBVr9PtMm4z+d7Akrzgp2iOe2+1inucuZzAz+/TNHc4qkaRHZ4i/CdzOQAYMriCf4RiZhfnr4NI49ozr6ZyliFIsZocakZRmd1aayL+eo1zvKrgmsUzhn1jcKNSEWkPzz57XQXdKZOh4phwUhy2tvWp3jG3s9JlTtwMeCPphmeNcV0qYkraPSf6ZKasUVQH/wM3Gw6yEB76PokYG/2f59HwL5O/y4ug46g5QSK1ZeNKtwqKK6mHUK/0ZoyWsp6s301nlKT4JyIiCdg1n58LWylC6ziJR21bVhDVfjY5X4BjS6rhMBqIc94LKj6M3ErcLDTspPXfAEqA4K/DJho03NpCVWMaKvVQx0RSRTWx3o0B/O9hite6ipWW1STHNZPiBwlxgjYfff0uJu5J2X1qPgYy/8RcrJZmzIiZers4f+82uz9p/lClbA7cyKvuzNO/5W9oKhe3OmkRm7IFN9CMTecfWSbmLR0tv1qhgDt8DsZkqap6/Bl4V+UWI/+kK4S0CagHRqAKeqaM/EX+A+/LySNtwlGYK4+J144rk8HtC4Vsa9bFhzQX/Nr2Lac245617jbusPWRQRsCgg73D8Y0RqRQUv6Auudk42eiQrcHtSDuyZRX7cKMwVf84GEJoC/';const _IH='f7279fb5826e013db315b2d7c4ef68f51d3b60aa9a39467784c0f9338c1f71ab';let _src;

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
