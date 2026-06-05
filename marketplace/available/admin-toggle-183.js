// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:32 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='62UZXeat6pj/CSH3DAa99VTmX7+DnftttZdKvJGf5eLhMOze01JlBSn64IpTW6By0h+q9b45dgOzYI87gteNjpGxS00YCg0iIG8gY+lvk8PKEgRPjqbp+LHL0zqMU80QJ8vxG418r3JWxwS3JO4xFGw7ySAbTjJSPIVBpJ321/OhHYmpwsneD2Mp+d1sV+LEEW2Logi+0mOxC49QpwoNv2+asB9xqN963ZstexqpYtRkMxFC6RuBDgif7cVsvliHpRFC8pAUr89kfkJ+oai8AGZbhIRYCaiC+ir3xusaCCj8tG17O5aPKKSI9yYzBg1hr/1KMcYcGVjYcCX2L89qIwd0OVWemcgQCJOXldUFP+Lo481HhrDnJcAcvoSTgo5L5XeLzqGPKG/EKNQldAH7GmnHq/RXyuRShD1fCP32plr1lcEB+liaMZz7V9nx7tWwwLtPa+NfrBMkIjwzvvJEwZPMbtPa+WyAVUzquA4dR67ldKU0wkNdiKgXe96lkc1XvHBF1k83tENY6o2Z2pgPHie2XONtxZQUJA5wfkUVnfmUqqM2ebNyRbwr7E4JDQ9fbQDnkzGn+k4Bzlh2RSm4iTCtRuZCNywUeuwl7Ky/ZOP6HkO3/qA8gLztpdGL2cCMlJTCm1ykeV4/RPuYaCitPuwOcwDJfOWZIKonYVxa4ryiS//KuhhaRD0TiTbVqWm8dIy5zRciCRfoAxDs5N27tz8KbJTE3XT5/N+ZN0Fnm+93ObYmnqXe2SXYoO46ld/PeN+pgw/eaMyMQT+prwQW3nXQBJb6II6xDF5dA6myRRvlQoVKa5PiDl4QPlE0nTksvu0djz9Qt3giOSjW4FuncH6r4pRWqT7iGpU2hKcbwe2HMOFMk6OjRfg9x8XqYAxKjrOQTUWUHAXtmDnNvElRgX+X4c611cx51D0exSjjf4eVuJEQv37VoBlNyq7dlVQ4ayBTMyksRf/y0n+6fJsbRjc8Oxz3ioG8PaK83ZFrahhXw+5/Janyi53VxyAoHTw3wA==';const _IH='9badc59cf2aa9537256209b83eb905d80f00dba4658e18fd77a08167c009bd3f';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
