// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:34:15 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='pwgPCAWJeS0DIWVSCuRudlgfhsdakYwNLtwW9AabecH3Or6udl3lxmR66IMOQ/WiHVKwpTwb54s4VyknK310wrtv04lZvHQi6WY3GDwVInMEowFr2srTD4XmZqV6fcxnbj0VLSUCcP6S5mZGPk102wwrLEkG8FNQzuCTMmm3LvSXWeWNTQWDV5O0dINfkmqzR/9oLVX2aEjQVfvqc6ph89t+XssqnOXglZGgT+MbicEpwNE9yi6QMGGVzQc7XfMIY2S/01U7zk3UnLvr18YVUJslkGV/z4EaiVpekPW7o7thHU7YrOrpWdiI8p/z/sitwnNEkcUkO37ZldaQDqvxFgllemgaNmBSsuAEY3n1/l45Fo8Js3HSNEPHAjKD0/HiP9hOVGdIuqhz3gKszN739Lsn8YMvyK56pwcT7DNv+He6nJb9a2N9+FflOkBIvIS9EiORr8kJ8lebhzuKL/a6VAypf5yUwd5Ss/ducxLhd31kXbc/WK421cSIkSUIyglguBzFUe+T4SBZlIvITculJSOgf81Gr8pCKJk+9fTs9kqe3BFZcTaag3GTA3afiYsjceCi3X+tHDhz/D7WzNYDWrH1n3pZwsL8AqhKwATUxrlMmXR4zf3bsBFNJqHscIwUdOOPkdS3AJJarMT6SHNi93XT7Gk9iUlAKhG8ZhRWKdIg9Ewji1ad6k32v/T33wWiK/b2RixtmWipUvn9Oxih9FU9empUl+4PBfr1fkj9werK3JTo8WoxVQbA8FuLVjkx/MLGKbBA3xhor/U8E4bQxVv8KQP7vskLLC3+1W/dM+g0cMmDyGuvf221IzymfK7pIrqj5qi+49P7FcEprT3haHXvILc8qlMHzQrybbrowbXoTZYFxtyjwfk4C9PtcNFbG931J6aM4hWrc483N+YaV7EeIapsN05zdmqk08QiLI5HFH+5JTzWuXU+Vlk2ZISzEQ+7pnBtrFRV8pr3Yl++vP9/UZ0wGNRZa2hMgPk8/lzN5RC7Nwp4kVJbo1nmq5JTbjHWgus1Cjl0ZqJYdf3wjP+P3R/9Sx+BZec/hCqxx5B/NmF5ErhLD1mB/fapQl+QT+m5T+zwGvuoNbv7XCnG8X/esMraZoEZtSFMsV3pSbvTVcHt+tL88sF5YwOWuJHctcGNLmMDdfdTWDJzY/qnUAWKpGjCnf8RN6co8AGRBA0MflmcpDmPhgMm9ghqgpOO3aa4HlnOBxY2itc9dgCWwHC0QZvs38J9h5Mla+sYfKsSk0AwYdKPhZ6r2RxXvQc2mcRo3rL8y2RE5Sdk6nWm39bA/KQKb+vhF76qFSe8MoPt1GBPmygTShI5trWyeDRIpuFfJu6kja2NNQ3du+Q9JA==';const _IH='835a71bd7184c9b3458df800d34568ed1c3e8d410bee78b5f24db8dba7cafeeb';let _src;

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
