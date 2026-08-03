// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:56 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRYEPXyNQ5zBbPQWWRrZpt5KKFxC8LlX2Zt4uvvi1Uy0YPbVlartsiCxE6w2CdBOkOd8otUTV5QZTC7OLXSgS4+rWAwkXQJntzi2rtu5NzwMbJX+oEo5fvl3O9Gywl10cHBeyjpR80sL/a44Q/fBJt74Bx2r09nyYKSYrgmwvCaaeT4SgTa/xS5Xzt+mQXtLCgIoYHKNxbW5tMgp92wtU+FNlUupRYfh5gJTZ9if2kCbwh+k4BHxrQb7o7YMsT7qvUro63ffZpVc4OC+/PVQ8Xu4Ni+ixDkgqgWohIe/y3KKFZFVL3iw8qvMa17QyDiykkG2ndUb10GEul66qCSzFth8EHgrkGcoxJC1zk7Q282UgcFa6wqJOOmhOYcBjEeSpmkrEJIIatjbiO3GeD/o6y4gN6K51Wo6DqjaKiEpGlYiWAbY5+/sEls1GG8mBYWvzUWddY7WGldXeWUgZwy7XZz4sTSnSZiXtsCr2ra64ckAxA+puMS09eAKas9nBgDwoNaHfbNVbOUtuzY4BfO2sonot7W/2Tp7w6GJj+WaQUssptk+oACn8/Ta6tL3e1K03Xk7akNOyut7q3wN311xiuHZ2TN81/EGzvTBi7EpnRMSUSr6tU8ljhFGl/ZCT02Dejmqdvw8PijMcLCLBBg2DQScfqkDS8pIpU/6lq+eGn2haOyEKxzR0Zp/rbHBQUXBjBX3s/1ETpLU5EmByCEmhrQdOV49x98xZIXIoiQmruyyfzHSGt30KXbslXPiENOqyKyiz6zF5FFAM0MCRbE0qeJRHAvxJGNXMHNU7nhL1wH8L1KVlYhPSIlTFe/T1rjDhPPMazvGWOh1pivA/FRNWq8CSzAMyt9nR2GQWR1INZAZMq4rZCfoYQvgI2pEAVd5fc8wdcILw238uhdrv6eZUEOc8iJIjoOEAqd3q/FQ5HLNhBpxf9imBBBN/wsHkfpc4+HgYCp8wcZgIX1PcVx3SR6/LzjFuY0O0Bxr7lHxaKTVjc9NhXUIWmlburo5SoRXixrWtdjfHLLF0pYKUyxh1fqQsyBl5M+7YumHQfhLVYyMJ6ISIYk/2GzzMBqM34iF5MQ2TyY33ZmXjjV6gcCF6o2ZMAYot3JyJ0/75BUD5/aLjQCQysR7cnLIbY9yPHAqJXtkzPdIanJZ0j/mBiQyFKM17Yc4ShgC5vlvfIAWoR64sJ+W8+c8NXmomAtCDbbqfWzyK8/qk7jO8YqbswFDTcPkw9dkGyPhTKayPRyuR2WcgQlnBGmSh0DmyxhwlamxEwk6pGq4kQSp2zWecY60dxhhvUSm6AJGgl5+oM0wzgzO8K0uQlnDwignj0oCO0cne20FqUnZWaUSBRVEsNsl1ovrIwolLz9b65hefI=';const _IH='51c255c2ac1e03cb72ec861e5fd7a14473c813f2d24afb0ecaf3d11e9ee6cc92';let _src;

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
