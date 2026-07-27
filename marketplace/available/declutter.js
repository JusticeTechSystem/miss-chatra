// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:46 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRxjxArOmobiIiI+A4cHbKUuNko+oeEQqKHTruTZQEzcUXPnGwGIdfX9LwEuFdET4rsqWz7auVsjJ02+YC6JJThTPEdNuJ7qxB8YfZYC9sF20nStgmbEkWQYMB3MprBGKk/06+y7aN/ZdHe7SVf3jfk3dHNxwAKG7IpiHLFkaM4GaP2RheF4Y2pdtpPPaBeTOtmJkz/27FBmKKl9pgJQQrQpoGUhWDg7f5aA7cpIERD9gwnfxeSQCr8V7JnAsPA8mJ9yjnmULxs2Psw9LskyHcY60/1miUeYYvSI1eMbbhPVyzAMJKceBkHTXeNO9hgLobkc6C4/ox7CarbqORcKYPcV0e8DWlIcraiKvnwqF4/SUi/4zuM4C1F415dYmi5f8uAmgfs/i0fPn3StsplnPxw8OEDqKUYdVoddEDKIJCmuaFMEkTDoXVig560vBP0BtANlADjRhQZF3Ftl7xQ2fhqMNPobNR61ZLif9TFmLIzUEaHypGbAkK2e111zGCumWwRG51C442SEMPGPW/vHSPQ1FDv90rXWS+KzuueFFqpRPt3/bikF2hxq8M6yhqexBYAVIc1cQbmiV9SDJtAJmTv6QIzjh7REN0QTi+YbnWx9DRG0zL5buGA0Z2+ARri9u2GgMNsCa+j6YjQZoEFld4vbs8WZmECH2Qj5+wUFVOHa7ZZeOKZaL99wI/yjL+CaPdqQx2NDsalMNWFb0lVibnM0M/3lBcMA/ZGz9hvXWJsmSsxXnSpk3pD2XHsubrDm3NfzET2/amfv7aGYoQ6wrIGGEONjwLT/bp+JYTIAYQMqXiPFnxkcSogCw3QKMrEMzIOtyfFZbXoXvyGf4ZpOUcbvnuR1LXczakJVUlcVD/W0kMfzZyDw7wL1NJcRt94+ULUoo+FlFmN+D0FyR0gxv0VPk5Do8aobQjdR+aBX5PQ7DoFzS81IdC8YyN3QLQTS0fbxBhsXqzZWqRH0C+ErcEA1gGEwnESlcdxI3gMU1wgDIGF2lp43ch5BEFyuyEGJBKcD0vN8Drjna6hMsRmg1WdPaJl4QDNxKonkntoX1otAclAoQZfwO9Hndpuoc7ol9c4J3LdcgKP08cUMpyec7R6/IgzOzL20DqSVOVwY51FS/GUN3CipQTXE4etsB6MjQ831uVaLCWATlJEAKxnTOdhv4jXXjXlvBs1DAMYsCm4Xfdg0u0BmQl6eUwyxhe5dWZlF+uAEhgOOA==';const _IH='208cd431bfe7e34e777db8b5117eb790a87a676ea55c82ab9cb62921a00a44ec';let _src;

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
