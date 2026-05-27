// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:02:00 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='CcsInP9DqnSamEnSPJCmSaLXw1xI7PS4u76EG35UMFW8b3MWOsmDGw1AsSJmQYiQkSQ6GCr/7asd2KxgoHfNZ3HW0YUYr65TWgSuF4dbfGeh+a0wTjgDWTKnIHyHKBTDF4KBeFDQoni6qLuZqQSimzKSjsy2tJ1uQyLIk6bu7xfrE5MONj1xSvfV17lpXuLjq13zp3DsO4ga//YpRxhKZypvT+d14aNkPdBVezTgZtHWzOQ0Y16Dew1M2l3nT+4aAKgwIKtQVtwEorlbfkAGuBqOt4L1OIQVv58QTs0arNGB49Z0SoLcYJrPZUI+wb6k2wNIaTW4toRRstvv/ZnEfO1rrrpHYt1BFgph6VOkqY4Q4Ba5NS/Kbrn9+NPkksm0bAJR5jqQH9nEeEP/hVZkkGhTdmR4bNXPlwGHkFnnnua3wt0NemwwIPK8EFzSEqdZIhIaOws6TDg+e1fzKq4YjlcDF1Mj+ZkI6UoqE65BcLN6RYxwBHVhuadfOErrHVA9c7gJSOZ+vaNfdmJyzJExfLwJPspDPpo45MhkqmX/wQmvE/nmtfbxcB62rXpG2lWmd6Bq69al94qXEfOqeHjq6hDMkgeW6xvGQmy7yOItDw62aEoX4gp2oLN+O7OlQbHpM/ozVgvLk3HqaEsxijw2JGThSjgrQ8e7XrdZPh4gAKme/NexDKR1NlUsj6jZ/F/XXS2LIDDYcMJTm49d3MqJdKxMhwf3zuueoKa9TUEQlYKR0zUsq5gJ+5sg';const _IH='290689b0fb68a2954a64a1732f3ea324b5a1b54e15b68d88d39b06cfa05fc9aa';let _src;

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
