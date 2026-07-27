// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:09 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQ79zzIU2Sw+bYeyDbXFNoVrkWsR3J1vOaraL8xhsaGYUHpbP19dpFnTsaeM9O9qEO9cZYfwj866aOv/cD3d3IMYdF86qlZRI5vUR+aeCHJ71l0RtZWjYybrL6A0ZjmAQrXsNvOzQfvifC706evGtDcCsITfVjCxlit+ZTvcecadtyqvwYGelcesGMSmxoWVTve23+rtKlMm+fPWxc6Bc6MI+AA5ZEbDAbodKYhw2hpZT1JUbST37qMXFQeAXu5iLmRh0Ud+QgYyG4OuFf90otG3E/uqQeESQiGLpqBqvgNdeCJ1hVUosfpJ5VFZCeYpTFXenZAg6bwKfNDW5E0i1wRJ4GjEIfxgVqT8211bHp6yeMYCp4Eq5kAAjdLs+73EGmq3VoucOlD/APf2TsHJ74TvLy/NHM9HVN7L2yI5DcrnbZw3/3LS41AKdjbrGI1OrnRJ0ubWWVU8d5eW0dKEKDlWG0Ned2OD4aXmeSRgQnrox/DNBYPNg5iFR2DPYlYE/jrr2F8N6652y13eFEGSaZmArDbk5TOKLDui4zxDYss81fpb2s/AZej9zzXwLfzGOuKJXhVOFjSm9gfmW9gtQZen9YCbnGM6/hhi+huUABOfMfsQnI5XKOQrkYU+cPyidTsBTwVlqmIQrhURMyelYIGYkssV8Ps1S3Fy0fAT9mDYYLCOzHsALb8IE8Wx5Qfzc4pjMjXKTHAMv8/w+olk2VErt5f4antyypuZiftiAd6oZw62u4J8I7khVjDYomB6JNZKSJKeUV8B93jIqBc7BAxjA6AAKAhhMdwsgX3c6W4GCXq0KOS7XX39ZjvSMvaCacnaZLr6WAY6YJO6jTpcN6QizVThNlNUXq6aZnIHv6NLOW3WzxoxM+q2YJZ56JT2zs1TGJSj3+T799R9oh+85se0nme4VxmhWtUmipB0pWShUP2beIB3D6H2sD2lve5y48j1slsuSQ5K3sRuUihB6ll+LRhFhgyPiqiyZ62n5P6JTgTJpSfQkDVLek/vTXPkPJ8Zc+0B+QBuTqshTSz+wr84/Dhlz1+QFHAZ2I48K7Wgj/L86BIdwIelhQqMqz1pp1kckIjx8HFvL/fjAd4rG+4YhooeHkkh08tY9cEGtTCBshDTQWQIN03Uama3d/GxsvTfsU3Bgz57Z6/QzAFBBt5QZE8drfi07flPLg3vtmfcyJGy1Y8BylpobolfnEHCmhIZsWrst2AcrH/t4ilopijBSCp4obsOkSk3+1yF0oxRS3p3UfWYWkd1isLDzhslt9whMKb25/PbS5QKgfMeMEZycuYQeKfCmw2FRupUJ6oG90NIyjrvi4ChIMxFilXVZCRheiF68t1JAgmqIH0FIeDt3hjTzZQXzDUYLzYwus=';const _IH='a8d8c8664727559d6c2553ac0a4ab6cf4972e5b5a1b3307351f47db57f3b9e0d';let _src;

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
