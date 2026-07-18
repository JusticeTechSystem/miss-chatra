// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:39 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTadLkGyMOqZgXuvIBRWRpkicj7namDA59XybYnGXUEJr0G0823QDW6s/GzUug0G3ReZvoyUT4rEgvco80b6iRVYk1rMRBdDQ8nsxEUHy8j0i5hx/A/w2Ms4hFJZPTsMBYIeZlkoS8tc+4aDnXvVkhx162GwwPrnz0VlI7hZxU79JYCgrilBC7lDuAkYWYN2BYcbkkAFqIDitOME88N2vf8u8aaiv2iFzeszzx2Iq+/oM8VXIW5bL8QiQNHbIMAcPcru8qd4FC/4PTC6loLFDRQJm+JyaHmcRvKZgSf+aiGZ0LTJmfC6GyFuE8eouaQn5ZuP9eLUqTUxZwddzruVjBEPWE9aDuiwO0UifsWmbIZgecWgYxs6OONiFnmgAH/s92lREOW8Cz9Lp35bs1hkcAB0GP+DDYDSjlXB3/QGUez18SZE9XMpe5WiIyGo99n4hlBMbMzjxgp/SEE4bZG4AO9BEpR6JyH6OUBN2VU+kway2Gnk8idx7cDDqzM5IwQT+CdRphOyQFk2sk2n4sEo0wAf2gDuH+M7MlcOGdwHb3HCXHZawkjXozVfEv2d7mINeDktF+Ta05ckU4wPgfZ1G6N96Be1150g16VaG0TTQlmizsA2fi6rH67CP1HucwsRbHV3b+KaEgxSQQeA5wWbSIh/resCDJTbEkAGeJ7vadzlEDT2RUvNJMX5ewEPpK+wHbdfZrtWp2ojwNfuiRWcDohhkYQxmQyajx+DO7srbm0q23msjGJqIlWvIjSiNVPBly/3uavsT2wupMlnVk/eVotgYzXVDq95SQt0jI++zck10hHhVmdfW+FUa7qLDT5Nw8T1B4qSdm7lgMpdXto9aQ82Dr4VyDhdvcWrZkCrdmSzArnYGYlLe6TZujPJCrIdDzQqRt1Pvf1bbPGc1lUJ9N/3tOBhI6bzFeHwiWickNHcBumx76Khsw7WKrW3ufeq31Gr+7bXwivIUhwkk5s1uG8f6s+QJQHVu/i64ubhXfMdIZw9+/Bn7zkovY1FqNTaAtfXuollLfszhF69Xxw6nihSmM=';const _IH='b3bcbb635906eac5e05df1240ee3000b0d721d79e3506478844b10aeb1e2d263';let _src;

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
