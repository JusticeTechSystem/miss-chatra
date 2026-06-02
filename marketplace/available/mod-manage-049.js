// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:36:09 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='O8QXSLMqO7jXI2TAj6NgK3Vb/kf+bAeSZulM5rZF7OGQidTTEYsQ9ibk5OaXsBiAILFxZbZh5Khj3JcGoAoTuVrRwg6Q0cE7nVPGw0JWu80X4KdTN8yTQ4S3XDm7JjYy6GHXfdk4h2Z9GiF3r9vqyXRn7GWgCAdfw5FlJgYT3bWs9MiLB3Sn+FsLWA2AEk/xdk/m2A2FBQKshoytN9hyPf9LfLsDqXjopA0GgxHskJ/Md82W1O1Rj9fB7nqth3st1awN+soEgLIhipkB8QJcHMN6xTSF0t22l8AqnqRs/UnLBPw5Orr5nsHbffBagJyXZoB745MQeyk92pwimwfdDaQ2vAWeDYpAT/z7lBQOsVDeeVxZ68NEg/Y/IyGZYroChCGEOVLh3s/gPP1MRlRwk4wjqIot+qPNAAB8O02nEGulpERkqZNHkENM/LlbeBkXCxTyjNe2IbvG/Gn7zjhqYUHU/zaknIh/idOaPBZTqfk6NX+QM378ulqrPAyBBZ0ZxOyxl/FKr/8ePkcD/FjPs8eZ2AvGDqvYeXButruY1XCNpqdzTuzoToSxhPIan+e33zrg1IlVA3Q0jaFr7webt4Kps1FcY1i9RNmv0pQyQ7S7OPDpXEFXneJQVpoIeKYbNpm5kfL+Hr5lLjtT16cOVfbRTG36MXEnwIXXqSvANxTljqb2Bl5QGHOV7tY1CdYfCbvZaI6izMSEMQlRrRcK544TKXuxWCdCd0vch9slHLhUeX4clYkB0K5TZPBkJ+bsn9pkFRmzv+3Iu9hUPybkcI7cB55cPvmDv5Tl/2sAdbskon2a44kveMsFZ54JFzZwddzW5DSDHXPO+LHtZPS0WhmYbqS7DQaCbMHvVBHB1e99EkOkHdN5d9FTqr0qB3URpBB0ridOttsqeMSKQz2C3fwBlZnqexeKyFi460GVKCAxi1uyF5GtR03uAQwl2dmB34JsMhTIuP6hs4DonS2nqEhWzlN0up4gzcRoDcTrmCiOv3Ht9wq+Q723aW7O26aAaz8WOqIBeO3mK8qGf5cPcQ7yl4QATp4NvlaBebEYhnCGc6Yo04QygRWC3VBrOImRpPIHkkJc2ZXKiyKUUaVuqlZ+jZX6gOYusCk1RjZQ6OYGIOMVLifaORUsYjW4ozQR0fqoqIrriE3xkz1xbFFaS9HBWkLlI75wfPy8O3PIy5Y29WGp72MKU6nJW6YlefBGbCQ4sI7tSw85kWiQ539AgKIVPpar9aJ7zDiyVtzchd0UEwIUgfPyiByiCJs7iI06Qd86VZF7mUs2pgHjGsBRQ5TMlrU5yTflwsff6zX51TMZr7p3KDsNFIcYEqJiJrKUBNWWjwEgzphFUaLICaAvIdYxsjgzSK0ZgUfug7BWfk98m7I=';const _IH='603ea2b189860671e47501f157e4b1a30e79a3448cbcacada46530f180af59d1';let _src;

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
