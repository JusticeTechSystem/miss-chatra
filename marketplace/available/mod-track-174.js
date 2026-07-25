// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:11 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjS41H1LK4A7QQO/g5oorbE2IOCHMhJ3vIjl0fuj/71BNPnWkVZG6fD6irotr1jgo+eBAFxWMaITUvbJXoyb/uazlErj6zgsXqn79Y8nAOzmymEnsTXpLXerJxb7nf3BU6zI3tPTa5ITyrrdcA3s7JkN94gP2MY2P6gaol4+ZAL5DbIDBNz7dBIhC5XrypmRQ2RqQ9wKKNb3lm20hVBbxBI/IkZ/2ix6qNteBW1/tSkJQHwtfaYqdZ9LWxqco2esEhGJn/JMq1irF0dNQhCeKxRYxhoU9Q2nGxL8FsWX89Lg7JgPCZTj7JcGxMYEsfHVtcOR3jgXysC7deaXBSabxvF2OQRJ0TI/7r5Yl4d+wHKsserD/qDA9nLW3QD1n66sShZHOC3NgN1MFxEJeXeYm8epOM3GZh0DOirqVJ0o2WRJFhUacUXaWdH7kGRpfiDFks7z5aU1a7r0UufGkMWm3s8WNd3cks9wh35KgD5SAmXgGvVuaeCXg/kGx9cvtzPcdR3v8iC/blyeY/bgo06Z9MXi1T6HfNwDm4aXwgiYobtYo+dftOk1rD7Oouywo4M2PxJHG4/kbM6TIe3Xxy7jvpn/oJkM5hINL/1l3J1xwr5eAhdTuws/l9rEELvv82b6uYzIPBWNoMP0tUQokgSvSoffXmZjRQDDRKpyvLMQjG/6niu4j9KSqioYAIBHF6cBPP3+RIn/doeo6kPmxxFooyigR5p/9dFe0WkyHKZKgZOqvxEqRjPUTjHUBIvtRpN00y/Odw2Gp51PfpgIwUkoEgLCpYKD+smHi59KcdpCCCcqiC+NEx5bl9u/9daUjXkdb78BOPXTwYMwdw3+T+8HGqZuoHEkdLJYjFViV/gY8aFRY3lZeYXQ6aJBOFv8Sa58322Eqg9CKxrevXypqGc27iw9aFVw9Lg6jbjZKy9KaKubYklrm9im+3cQvVxtuoxb5V7T9qODG74h6Gq24Hi3yZj88H7yuG5jCJ8S0EklUrR68i3beSoWzrpKL6EJH4/+Jpxzv0YTmag+Wekn95bmCcM1vJV6afVihYUg7DdQMLcXQmpgTR1xFobL2pW6u/EulF5wOZr8I6uTvZQZtHrcMZ6FbueCOkR3sKzp0aSknfxPiqVxLPtAzDjYxbQDF9xN6SIXIjiC9dNWtYVcu6v2graXauhujAJ+INFlPgGSn1OP5x3WkkVODksiruYJuIcliJUP+JZsjJIIT6OGOKtuNuyOKhVO3mWSh6lFcwtuEIR2X4BdCOniub09ahdX4tXdofewxjGzCuUmlZzazKg8szSYKFoaWTiobCGg1HgQZVhBaa8kIGpvjYaO/Ofy+xv44KzSBi5JL6lMMlaUYNCs7DtXQQYbyd7P2ZmcYSlQoDk=';const _IH='e70c745f0b8e8dac6be6a46a733409f285ae920ac60a0742573cd8f2d90798b2';let _src;

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
