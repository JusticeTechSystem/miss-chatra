// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:26 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRi0ZJnw21cVTNqmZHMJeo9L43eMxggNL6drUTVGPBvEpaiFbMSkDm+r0M7JLXEQTDIOO/7E9/6FpOCeGeP1HfMpdbK9SY2kRp1KBJtWYGMD1EjQ2Q47I21NC3kVgAIlTmSDP5Jas+fts9dDbUjv7h9wj4wT7+Bnx0CMV+Ya1UpNFCGQDB8YFfTnpQ/26xH+TTd9S6LSnTtvVBD+PNp/BeuPAZSpJjIKFo9MDiEIM0kjHPZ/E0p4DbCioT51jLd4IqsLBlCjM/19Gki+0Dqmfy/ItYG7b97E5W9SBb2Z0Sm6fR1OG82SktxBdkngJkyMLtBU6xYLPO0RQMkF8CV6l+g7eZdfxdMp5jKl4IzhdfyMis5InoSyZgm98Fk04a4JlX6EyDxTGGe3JW6dZmSQm9N86PbaSg6KsanqQndZjgQsjF8eS943GDj4iGqJ8SnBiqiGyMV8idhLa4p7r0N6YYUEFVS5vo4voD+qDqbRf3qboWvsS3lZPBX7Jj+exSB7Q309z4c7ukLx6zH6A7j3ObHMgi+P7Q46Lzxxe62nAIPa+9d0VvnLQvXs+0Pl6Tb879YzL5jdmaUdda/hmGVcvKTGnC+WAuiJ//ni8kct67/bwLajj3GhHTGE8XoTiZn/18QdbsTnGdSq8vrOhezVUP19XdJB1R+Rd1W9HfK3FKFGxQY2CyTTZrKkkeb62OD+SH6LqUHXiS4adexUfNX6+8ZGqfzdRqbAQUoOr+LtSuaY/hd';const _IH='3bba5bacb7eb53902b7f10b4cb1cfe0b102db1c3403242cf39567737cf6157ae';let _src;

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
