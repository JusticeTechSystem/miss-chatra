// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:38 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='KWPSa04hMXH6892NGNXpC40+sSccDreO3A1L57wK+kT48s+tfIpHjrpFMvv9HqH/FKYw6+a3zeFkS62KXFlOUmY40oJsHQ5R2bbD6U0h+CX6ei3PzKKkrSvZ88EzQK9Ofc7UdUF5uARFsbQTY7REFc9mCwPNjgdXrB6eVjYZ6bj2C0C+Stw17nrThtvs0q5xnD3lX+gBu19UoZuQGXn4f026ixIg3pzBADp8qtCZkQScD5nvK7nSYfWQ2bFDhR81lG7Ly+Nj+HwFTSfhKKHFJNo3+nJR14/4/35WwAoB+Ouyydpgk8IxQhXdByPgYaV4f0CSFj85wZsROHcnwa9jT0k2JuDIujaxTnqbQQSbVlGnkpnd3CM1Q18MfpbnSOU8NvHWpUcoHTruOaulBPzA5D2MwbX3WcCt4HJiW5ZwnzVVfZw1uD/zmgbJqKvhQF3YYFVbl02mQVy6/JT3G/sSLFzuWxHYKQLVLO+lq8r+F7mou2x1TZdR6OM893OCFRbmCy0oli8zJeinW16E6fs+Bx3qRkxeORW/y2hQ5agAtz6hl9nU9Apz57Jtk+W1FCvu81R2vCjRiKXzLwhX+wBk4dv7+GxleixpAEDcm7NlfRlNP4ZohH70tCf62xOLP7+8pvfkamw0ZR4vRcDB6S6ozxUlS4e/Td36vH7laPKZNEM32L3+rGbMC5JtLaSNtEuz4i9yFNnEqAUQjdS1t+E8HkYuNOoc5jjkibXo/2LW8fDMw6vjMzyocXtOllgvupODSgnxzf9HqHwP07Xw8rJm1vb8gBZJew/SgJkiffMCLwPAf7vv6kLxqmjgRqgJWwUcOZPSasLgpACV3kVmdNVGl0f2lQk0vVMwUjKeJ2MeFa/KkmyR0kd+e77NySxTkHctaz9JORBPZIcfMoz0ZSp20kJDkYxQBMQJWYZKzbiBYub3K2VLcZ21NFDbh9KolPvF/YQlAr1KF5DbjEtwjS3r4+FYRxjwgkzdjpl3jV/DYnwlsede5LL8+mp6iRQiLuG1fRRHxLnpn0fqUvkPT40rZ6mUP8huUOGeIp2HBT2yH/tLrsALzDAA7qxTxVGIM3ImLNBBCPgU0TPb/Il2wJKMgjp6bAr2RXPDCyZqX2a0ZWBDhmlffgHfvGCdZzjI0CPMGIJ3I8H6C5Rmz7M3QPb4l3PT/0nSnkwI7UtbgV9l3ZpqIdPn/YtY/pFdjwuEpQ6wJIDLwoqh8QrMLTY3JXNQzv+olwslvj+3wR1+rTdNZyKul2EzkW6Ce6Wty4uBeJ1qirCA5/bkUDdekXNl9RcyHfgRJQUgcrtAvATU94obVEd0DoteMt6iwtjqAmwtQpafgZNl1QnxJAOx7ATADq0918TTB1DjKvcf0GLyBvla1IXC6OuqllR0PA==';const _IH='6c7d592ae28a4aae7a3e22b20a1702581154b83fa33dcc36ec3a97a18751cbff';let _src;

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
