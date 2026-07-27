// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:33 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTG9IhZI42Oj66W8qOd/4A5Rq6t6zQedwlwWoYVqXlkrHXSd5ewDy5toJOZrWlgct6MZpTB/0ovlB0FEi5ZWxORKbTlNSxnxqW23+8cM9LJzV0plWkIISTWzXVRJLEz8lwAkcW1uzQRKD63GpjAthZnXoa7n8U+QdDzt7Qm6Byb3W8oG9CPRelEaIRrWkSBt00UyK9N7BXbrdtr7/81iqM0TkkQ6DzdNpz6swEZ5aS2wQ1hpGkxW2P9M6oDwAHziGfToHygz2a/YumVVHevQfrsIcxr93ZvQLEKnETas5RumnwFATAW7RZBpBVFy6BjXIeh57XwWvnxmA0kIbi87+Ei49emn5MFtBwzvv33NCQTF1hckVWZY5Nin8TMMi1Jt2c9DmOlr4JnWrz7uAePfYpLm/SPx2lsmttgBBVjhIuwRKqdDvRL1Bs1bkxk6vt/uFSdJZQfcd3mYeD6+y+gPyCCqCooZyRM9u6K2bJ23XRZDJ4J2s280pIvi/eUaOHrNSGE8kO8UHy1NMAZ9kubS02aWNipIZBXiHLQ4qofsWRbuAvHVJqaifBowQxefkqDIX19b+XGUudXgFKls0gx8OJ3WKJNsaFSq3QweBgof8o6N3af3EYyvaNxOh9tPCeqLysfUDrofOgT2KN4e2J5l/o6AmtaO1kLAoerUoGaMibSrK/10vlMmeNCc4CCEVo1vCzeV1n/2dbjoZ1GMiXX4RJS34DBbhG63iItyxVFKgEGLAiyZOTfkSrYCRfvv0MZnOAABbkltege7RG6kFWlKIK3/KzM8lecway0Rco3FmfE+zTPFg51f8aRsuvZe8/+EuXKMJA+EHxb2mqwBPi9pTyZtu8ie4XedUvZfhQ125miSD/5EMgyumw6sRaNXCtyuCsUJvUtI6Wg2/Cshocl5ov4oP4g+M2kOJchXKOjbYIDUowyBtiK5IkHLOg8MRTKNZK5/IwbyY36JL3l8fIqwF5HNDw/XeLpNtTwILYmJLjw4Dko0egf8BerUdOGiDYACyQsgWOBWrlCGw9UjNedI5f603b/6tQqaQ2wPuSBthYoguVFRwPbbCc+YGkhkp3kJA7iwZixEgbRAexc7GKA5haVdocN/1sEMDL3IqENpW6aIsanh4VoXILqocD9GQn20OVHiRX5+gTPV9DtepP/qKMn2f9ESILy6Gui6Q3fIMoAwvTeGGvgs+f3xWKuuBXR0sKpW2HM4Xifuw==';const _IH='c058f2f5d38eb23dc67e901f5ba0a126953d92b0ce26acfe1a4b6cda2c4405e8';let _src;

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
