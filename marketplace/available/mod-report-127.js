// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:55 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRNPa13dVyfwmlBBHOmzhsAPqulVVmaR/aVGNTtJ4QZs9BUqc7qPfGz4mZwk4HmeUYQ9KkNWmXX0lF/7NIRctdETvw+UMcl6QveO681xiWDFTuBFJQn11EyaMoQ3dhVnQIWmrkzQoXtd4GsQ2ythVhpR8k2adoij3Fgcx4CVNMySS2ZskzsUHfaso9X87Ag/FbPDqyZnW7aMtITbbOykx/IWzUo/FFUhTkp3e9FOdLtFldkUAMKfsaMBw+ohVZKOdvyzIzkx5eBu/C1OLE7rRgJQj2A8iEpMOBOJ4d6r8kSm7owlAF0JPslDrogx+D4SG9hpUWGv+iZwAfWcMW1cCg5tfyudc1/AI38Gq7N/NkVLzFoPJh/HT//hvQQoCxrfgk2eQt6lxuuNQ9WV/KvGk48b9C602fJaMKWs3ZIKAEEFEpYLo0QfqF8v8yQgC31NbgnUubJnEb7Eg93iCiPQeGutp8au7rtxEgJcBkxPdXMl5czagekrP3pTAVhNE1mTzar7wcZYIKucDvJa6ti2bjPVhiNiXhGeLTF0mfndFuqDaCuExsXZqkKVqplyl6THreNyU7/IWWCjd5mrxDQOGIEgeDhA0t2XbyQFzAAVB3ME3dBwjV0CMn6V/FRvd4/jId9U5TX+KpjfzrvwsN18P8sFiWs6xGyKzThQIAprA4MhmA0l67ZWI5jiOyNFSxE123ebWy2dImza3Otcw5LX37MhGqITc5fPwbXHOqfiQKcZPbHqCUV1bCi9XFoHlFIvOBtU2zMaPOGgl50OlZGbBlIzyU4FcW7VX/lOv0q8kB4haWjiRGh3WemZpSTsM9PXUQSjIA0WeYC7YUSitM2XZIjokrWdO8KygkmBBzGAEPOjKGvMrv5VtWzrdo/5962Sk8tEk6ZY1voj75X5wmIbjry3JXpe39eY6UUmOH8KT4aH2stv/PsPPflpW6QZEpSv9ud/KzcQLNhDVYvfxWNYyFZkC7eSaS+GUZ01qfCYhWjyQ2ZP9NL0be5NYOls662JheDUaCTxefzzt04Uys6z7dUWd9i4nUw91rKBOwYofWTZJt8jK3RJhh4+h/gUs+hWJXJZKDBVpkltDOMj7rvZeKL5U+TCKpfmwG8R+/2GPNAHi4AfVZknTf35xSLN9tUUPGsQXnUZ0fDAzy+JTKKA/fW15h7PgcGMYO/8UlPxVEQDH6knEpnJ2v6Ev2PS8hvi1zVyskvGM76E01of6s7KTOWjSu3Of774STm8mTagXDla61klc/F5Nn/yRdl54MUQ037o/AqtD/cONagUiIcwCe0Bw+n2jhjsoxSAS0TqOJr58TDS2km+ZBFAYv09IX1yRpVgSTmUsEOdGF04hG88JTsbCxCiShfDZAoM5zpSysJznKTasuH';const _IH='a789cebf813f4b456d45cf57b17746025459cbe158978ad7b0d392c13dba649f';let _src;

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
