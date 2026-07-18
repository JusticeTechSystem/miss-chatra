// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:15 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQAeAG6FTjSL8aLnyRNeQY8/Z6KevfdmdEUuL0wNjJkU3caV/xnl07NN6G82FCPWiKWD1BxCsbfvJgv7L4cSvyx2IbzPydIrhYZIpWng8i2H8rgesQF7cVbq7XDc2mytG/dr3U0ChxTlBYvXkxaW4mt1F4R/4BAiHPyQlSLpXzb7GCCy4LUgdpt3MmLTODa8mX9CFX6QeUp0Q7eIhGI3l3F8/wUgMd2tu7hz4XMRdnRydmgLTz7Y2eI9Kp7Rsn0FubhlwpL28DtLmIHRR9znX3iGmuEYrlf+J3wOlgMWpRK8letYEoPHi3/z52iiG9swRqghjNULtYofqgZXjAvUSf6qz4OejgmZ2bNUEHTolQX2KMN1zX6j0d4K2ecBA7okqfMvLDQcwTbp1bquqZj97fld6Y6I0VGlNGCtkoKmqoW+ZE3TgdD5irgcpu3w+Q6kzIkwy1UGbl5j7PpWgd3EMcLt1TMs1Fa3365AAr4i06SOydtz4qnbZEiodGrkEKAbetYN6Ar8cseep6ZDL/rpcuGqwDcI06ZOGDjU/IkHlojEJYv+59Y97RGPWN/E8X9qusCzZGU9b6fAdgQKF/Bt7aCZN2YFX7FND/N/gA4xM6J45WGkW1qhI5to0K1I/rxsOoY/1ylxVqO1kYO3rTb3A6aRaZ2sk4aiM28v4MK9kZIbhEeZKGxrERC0ZvsI3bAF70wRoJ9iTo7OjFNtxOLHOBcV3OGHrRSF6ktMz9iTnm0L92fuZjLmNupCPuSOaoPZb2RG2HqUcny4pmB1GPWjWdlD6YwRCTtXgQhS6rUzVE+wHXZwx2rAj57vm3mSk5FoA6aD5N0xcbl/MwjHs4tkcArwCwkkVeC5YBVGqItFp740tQ81gb0fF/ZzZi3b/OHuaFXGH49tI0mrjIAJ7oUinK6UflzGxiQ/dYWCcYd/Q+xD7pYjyS5zPQ4d8qxI8KAZYq46YmYIVW0ta0YkhUBB+924x6JMH7N94UnuBbEarRIwwrDKlfpinAny9LS6AYbCLibWCp+kI2PifU4F8cFIn1WE5m7mV4p6uRYA/Xl11U3I/+cYOl9f/NKxhXvFM6wjoT+FissiGCOfBSQ8+jGu6RwMSHq8LonB+B7F602/V+p9QKMzk4DsyEuH90t/B7RchP3S6mU0VlKWr5YwcYJk/uj0ZF2d48bfLdvUL60q9SPG3lgLAAxwVZUA/QujdLqxjPLVyzWTq98AvRBunU2A0n3yBxv1VzBoNvZhm80B9rlA07dceEWF/Mp7jGJ6LcI9IoHjn8YBua73IaKn/gelH6dtoibHEZVAKyQl1CBHOulJkIAfo2w1G6Ydj8qiq43scw5xtQ+umma8cTqBL4VCn0kkFOrWEXDxWppx0wTNCqLH+si7FhcVXe1vaieRipefHCSAb91ZC13LQz3/Ogl/scdphA+dafWpKRVHmf+anD/h5qRa85MJuKGWczYmYQfuPkbzpYRvJBOuFuJg6kdMnMvvdT8arC4J/KJ3tV2TXrdbtczspVB2gMkSnLQzKHnRX6s7vWfQyFWLnR4kDbWoeiHkI9Uea/UWfmnMgEskHEiaAvP2WFHwEIkYjCRxFQxJz7FMjxXYUIVFp3A';const _IH='c70408fa218fdc498659d7941ab1995561d489c6332eedbbd0bee4adaeaa47f9';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
