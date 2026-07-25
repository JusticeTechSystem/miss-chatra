// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:31 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjS+3rxHkjE6kfbgRH3emN//S50jJ4f8W3+HsUgJcfeq9ui/yPONg5cT6Amr3SeKeZnXTZT1dZAge5nSkB1IQbPhHqyOegThomyAcZDw8gEqPSmuCxlqq5bKqytO6piyhwwJuzaf2zjVoTPqoKg7cM8kT1evG9I+AJ78K7TvQpM7k5krqV2c3EERZTBzPMinpED2eokrD0hb9r1b/jGKJtGmQL6cRrBw0CYVn4a0IiuIjCewwvWYTN1Sp5ICSjdRKJK+dHAVBeWLhWGxEWU676gMbH3FeiMn4aImZXC27oFN55g2OcNmJInGHybB8DL72Buls4QuBfM8UBt9FMcu1VVmWzZDgW1/yjDAhe7XIq+d8lMc1hNsbwQIeQAILB8ALiKdKvWSqU+IASAmpHV86jKNGbPvyz4B3CGIckeYBuxJAWS8F5qgS6hrhl48Q14bgJ0ntuXjGk1TYZ1qkFcAw1OtO0LQx/Uhhz5yQ06D7oIU4OPupJWTYKEE4toXhPlKmrU33wifr5AcJA52lE20JJKhLH9u+COvmel4zLV7WGISxSYEEG5sc3N7SrI0xbntRvHHQ0XM5vOKqNdIjO5wuGHrWwo6aZq0oYrEeV3WfUgMl52yu3nuhazAJVwgN5Tnmeoxa5rhQQGwFTegfLq1iKOMgBILZbjwQYd8Xb5bqPNgTFJiHJL8yK/JPj86sMyreGwwZhBlLteo0mEq7BHKK7XbU98kwA3csfWlN3aBPonYlLQomS7oY53UnYYNotyLbT8ARvd7Mj0tNWWAp72/LCty6tKPSLVtVj0RfUpw0U1jrx+M2KBflPh3Y92mTgJQPQs21UUvP32+av7oudS3qbuqZjZIl130ZDJb2Bk8M6BjQj4btJbfJ/ZhuEPDKTd43cYrnfL5Cx0ie8ghWIcBIdYHXJUBpWXqXsJmgC0Jt6+Qv3gTI0kXK2JbJb+dBw==';const _IH='42b6491945464ff5e0f1a7e9878f3bf835de8f83dd40a7d803b7f09fb4d90fad';let _src;

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
