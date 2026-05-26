// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:28:53 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='F7dcCc/Ekx4HgZb8/nIDaVcopnWC/hmCDRtTiGyHwGv4aPegTJbwOUta02bzLdh7MpKyr76Rkvr+VYYG0dg7K+CY8YiiY6Eah3iKwTnl1WYh9TAXtz57H/kUxn2CI9h0dcRSJVPOnonLsv3/I8yrmgVAg5PsXPXIP/2delNXznEhS0GKngYZ3A+8/ZxVm3YbzI/G06AojfLKnE9saHBiTOR3MPkg1TSu3GmLt1ryiVka4BR46MlQd4KiKTTxh5zKR3T+Qedn6WldsDTBRgSGD+N2Q7NGNhuWsVGtXUNkw8lOrzlcUIKWy/8AUsJwSkX/bjyUMRUJ7mEzqZ6UhjuS8NTPl0YOUFSx2W+jz8in3G/SX7svbQwX3QCUarxOV9s7d1QkgB/uh4qFW0mU1leEaq+cahxZ6oX8b/HI0Lpg+GXrKWqKLuSbXqMMXQ0TQ2PlxhVYPWrd5aYvrv4NM2Up6uUWUu0OHvTqLGL0bqfjdz4vF8/RrRIzhojyfiZonnFk1VBdYYY35xoyOZ8Fhmlt9ZMbpcTGhmhkNhkSZoeQ/v1b9Gc/5JZcuktwY34MULyzrn+U2mvOVCKtBDiEBlyx3hgY08SFcCO2Bo5SQQLBGZxIeMgNmc8ncc9xfhg8dxHr1Mr3zlHaTKsd+xYezWPz0c8RdzocCtAjPYewT1m1LFuh6vKJXvtephTTWIUxApTFAR7/a1S7LcSWgjREr0yE+1CsFbzNi1O2WwcxuPiTQwjIjWPDoyY152n08mix87Gkr80Z7TeRugEVhYaX23UW5WyDAcGGZ3zGhI9alQj/cVF5Uh8TPx45AtLKlycqafB/jB848mofOQoyHu2jrz7OtT1EbdUTfW9D7HxcVdrKGzTLBXLcTtKpF2ncOZ7nmI2pJV7kS45sg4/w+ZzmYXaEoOSTyeSrn9Vvku8ev8kh+ljxORmeh4e0YOnQjrChpaK6kSwA4sPj5Ecqu3I/fX0iMrIUC5m+K5PUgfu55NMGS6OOVEhUy7q1EYCN500gfcUBk709zvlJGQuVIjvrtIXnU/Sftcow6/kVnkkzVvGwtEpw5w+lK/xhKaP0elfKO0uKVGdEXBnyZiZUnjzkk0KCvEuSWaO6wQs1xGkuQY21XtigBjRELcBycLwFhKV8PPvOj/rgyY5mFolhLYQAf03OH/PZs3xeusht90L2YtVDsBX6ZdyTRn15SRdTDUj37fOyEC3/7jvHBR8EEUvhLRhSqYdTbWr2PNTr2qb0deolcUF/TF0huVh6sbaU3Rt+ro5sp5slUFRhR42gQun9qV7iM1tneupv/5rX5Hu0TeyC3Y55GMe8wuccp+vAeUfb4pFejXPm5AzWF5cIqxNxM4K0b1ciU3PPq/J03BYdPxgx8RYya7NLEFN5gQ==';const _IH='6db3a8aa205bf2e43b7c2256480a3470248b4b722d93ba1e251de33ae265b23b';let _src;

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
