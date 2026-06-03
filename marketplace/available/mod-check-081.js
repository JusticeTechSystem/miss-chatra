// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:28 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='gKMTIGIINDQQCBNPgs4GuKtayvfyzZhy44Lu16lMfuEt9+hUEMDOhpaMxkL2SFXygVpZxDS4D6QzyJXG96smifwZD88brpG8r0ua/GG2tqkRbW1ds0UgtJgtOnhfXsP8afnAk9kVzNiHr2GN6JOMhi9OgqDmkIwC2sVxoqFUmecoAWmNahyCPDhQpLA4AO+cfKvV4hgRt2AxdPVy1UAVHOOvhVqX9ScQoQNX0hkWw8PmkWn1AUj1PK4pBtS57NwErlTevDiKYyB5MRAmajpFTHTdG53lIYnbv3pb4+yrXrbJGUCyX1joR3KbRfJFQZ0Llcwq4spvQPegSfFl+w+L96eZhNDc9UgRb6ZxjhkjUyeeNQ0XzciXX6jK9O1SZqCYDKIVimC7gJtd3uwDp2YxfTukjlrdwuhSJjLVZ0KCRIHIpWlKMtSXLUNzUHUwuj/jdSNcRTJpfwBLe9TiH9/+p/fzcu066S6OpVWpvUzr7zDUAU4muwOhFsZXU3ZwOvJoYsxq1UcRhOsnHQQVnwhi95rtDYN7chi+Jo8H2vGJWnza1g1R+JWDyySlUJRaPbY7GENsQcqN+wxqjwGLenthVfzgJr4nLphFMBm/DXl6v+EYIvy6wojtCSX8mAW9Fz//YxldxkvSN89/hbaN62nAqp3bqhVZ9pxI9g1gcSMQ+/2LxT/EE92qNfhSkKFPHZxnTgCjuqivx5JBTkEl1bWIy8/55QU6Z417lEfojKrZXNeSroLLCVG1JbvCdE9Nz+s4bYx1Ur5lG/VZ0n3ChsEokiS2aihjo5/3Kf1HrOuRO60JiyfDFA9PJyQq6ShWhNYPzRDUey8ctbCIkT5JgxKkxvkkJJ2A1J28x6E7svgE62Px1QZ3nn32pE/YpyKgOFuEl59rJ3au7lLSrOuRTghkA5VasIub4SQz7A/5CKzpSLTIC9AXREnpbQuOK5Z5nGxsX/vlTLqbDZiqmmr47cKDlOGOQzGVAyiHGiO9GWIz4UMaZatzcDJg+j63wSWEFwand6mCO/nyXWSt6yW5tPO+yhN0XM/UyXALLjH6agdOzzIWt3BDlfMeZHfarhEMfNPtXgzE/QxQHcJhMz7zjMzoE6sfRujeZa2V4e5Yf9XZPwjhphwSaVWyep93DinmPdy15iFdIiEMHlqC2lpVNNi6EWynnOg6dI3sHYeaT7utj68mYY0ZCZrMSRHlo94ca9XjAITIWvl1nLT/gt7X8vm6V57x6be9qMDWROdg5UY1Pgp9nTjOF3Viv5ZjRhAonCwWHfLcPGqcQYzvAnggb4WE6UGHZPGyAE8LEIsVZ/T5QJuLS9sfdOTBQBL2x9LGl+PbAnGRnoOQ0ShBZN34kds7Ql/yQlGkCs7YyQ==';const _IH='d882d57caf9e737543964d35d901fe773a9d079689bb890834e23119bbef114b';let _src;

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
