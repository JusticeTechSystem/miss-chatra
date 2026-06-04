// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:31 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='6hoa9/RAP4lTw7ZbqXzJilybQTr4YnS+2a7J4Ao5HBD4Mj04cicpFye32SKgkXwBuEHJbfDrkFe06KMQmrTrfcLpMpUPF2d7qBjjoPR/Fr4SqWuQaTOLCVWOURZi96zMwy+7/hzdJ7zdZ8ycxCZ3O6E2VwSE4Hsjdt7cu6CUa3yTOSA5df34jVNLnoQZohOyVjPqMtIgHvAV/wJwz5XB8BYkzrmf1+mPf3fz+dM86sTFq/zNSahQZVeU6WPfqX21kK31cYChvELvxYopNnk5HV3viAsKm5wC4b6v7LqG+Hr726moK4aCKCVKNW82iRvJ0yYfpKOpjChkYE7tpr0Jw48MXQU0J0a5aMpVLGy8U9ZyJgIE1nWvvaotrWpbZh4uhFBPz0ywvGE4vwa8bdCn/lANMYCu5FeUazraV5JM6zX7D9zZQu/qVqzXII5Z1/Grxq1cBdT4ayjaBlInU/MYECCJWNTJ0T1xJXUgK8uPSRKwDv4oDlRwe5CGsc4hNLi6sT86B8HGkpiVGUrhpCmviM20WM+dVNaDCurYbzbtMoK3edB994VBVlQxJmkJBmA1g6N/ltX7cbBrmQs/6elZGnZNMzkkK5MTL8ObKDiJh6SmQMb2aSiYsdQEP2JwWfxgbx9e+WSX7iwCiWCJEkUg6km2hboy+tZexpyUQ6cVS5XTNApgi+NiwAmq+2iWgvC853y2rIa74LEXC4FXkp0T9HImdhJDbuelMyYQoQr0izW69cksboXPW7BUM9H9nmZojUHlxPVWb/J0mYw213QVxaEon650SF8rbDInN/jhIAJjM1RXc+KxKa+wMkhtHOdroUxA7Xv4rUOcqE0FUdeqZDCDEmYyezzLFD+t6IxwzIULGsoOBu0krSbHYUvTpAi8hyfbSZrlbBWj3tazAlcKFUzzNQTh6mNesG/lQZmfqHZDhGTzDWCt+1ppBqzBpQn02nRV/thmZgkFKpkMRMEQSka0LgidinOchvXAVXVfTrrju68qlgSQ8LRNzMZF2uMQlQ==';const _IH='2c8261817f14dbe566e7014d0ad82a1ad8cf5e9313547ff98c869e9c1bd13421';let _src;

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
