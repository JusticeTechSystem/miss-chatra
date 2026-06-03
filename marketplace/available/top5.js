// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:09 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='wL+Z5oBqXcvXYNNvHVTuU9CootgKDFK9T5V1ggBVZPlSb8hQQusSIDwS7wAMejWTy8W8A0rnSy/zC1lZqrkqNIGUO8A8PXf72EuK4OsT9LqRQu+5XGbyiK5ppMRIfvdRCy6Q78VofF+9BYOHlqYwiElEgL3QKvtk2uczPJtIOscjXueKiwDdmcydbEUqKrH7gIupn7DClwIJ2br7+oRCvRIpFLllKNoyI2FSblWnUPE/wu5rTmOZ58HKJgODzc8kOFdYZ7V22/nm/pBKDxuR+uq92GTzModdA0v2KQblKBl//5tb82YqoXoF31Szr2yI5AtFMNomsXnCyslMMebryUFgf2T+zdfqw6CnfDvtiut2VPGnH/I7vQTnDf0HBUI6/50sOp6Ke38zHAO87QmN3w+Li2llluURnWwuMfZf4kQCD/LtybWdaIfc0ElmmiyPga58nrzKJxbnOuQGYbvHbbawtpmzyfEGwmOQX6o+CccFTvexPXgj9tmaxnSZG/i7KFYkIJfFP3iq94wFmyEKSCoFzMwG51lW/35XQBx9CrF3rDxNQoz2vw9YxwAVcVs5qPK8xjdI0+rgC68sKkE81Oc8Gfarwvlm1/qaWbctO7ZE8XD2GpPJautmo909Gmu+PznwAH3NIjix9eVJ50qRKqmspKiotHF9y5rvjedZmMAgKvB5Gqb1WsizRhkLb1fmgZOHKazh4LTWnioJfRn4IInHNuLWHRt2FtNKLAPoJmUMxmcm59uQ0JGkinQAifybI90r0hJbrkJYLSbPeN/iLdeyyZCtgpWW5SvTx15JjISHQCPUCbFQhiCbxjMIoq3UGfK2OxwtbwQ5jY1jhDqBK/SOEJI7VtqgiiQDmFgr90ite7gkH0JuSjKjB1d6yVJ9/xY+rRHU/Q4HaO6zeu9FFZJ8o0HkpIQYxqJ5D9DW39g/P1hW+ZqfQ+u84oxB2SwWYNDwjf73G/Ws0gmboVcGHwPt3To2Q0UtgbRvN8JZwwWYDwUz+dtg3phd1lLqDaW/QMU9nbYluaCbCBt1EyrgnwmByJ7pQVWrDfFg2t35cYTWdMsyzB8fB3W7/p+aKbSiAhr5HE7uMq3M73n06VmTwOsRTcM6FbJ9EEVhOSjwlNe8qcyOslyQVbJjDhdQ+BTDTlsIYMXV9vRlH9+5h94hz7L+HVGb2FgBWVPAG307MaYlqrQ3Ag==';const _IH='8efd109c21ba6dc8f3e0c8fc38801dcd43cdb62fab2a6c86e61dee2cc5e66847';let _src;

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
