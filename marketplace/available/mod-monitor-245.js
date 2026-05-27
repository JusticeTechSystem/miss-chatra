// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:04:51 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='nkzHRSIyXnUAnNtxR1xZ5tlvbvaOXUUtA/BmdBFceNMVwnbB01MmI4Nw7khAgn1NWcnjXkkD9CAbeicSbgJzv6YJJZ7JdmmhZnVDBdWR/N01h9K3asxA7V4fzWFPjoup3i7olhxRQULpbUVybaqN+2TA9ZR0dDkizK0sfjfeRnMxGBYLkGshJwXh0cfmdQ7zeNxtyhIZbp9GnEechfe9Ewea7c7RskI5MvoYo2mPTSsN/9M2VYzCdQ2D7ReB6Ur9xB80MBLpngemb1ZFjDCi0oMFw0GWB95Ds2qTSSmIFOxfyDX0rgaqqs+H2xzKCiDFn5GhurJe7fvM+b8+9tp4lVAndUnagVZ8cMPLhUIEyF3OGOOn6Yl0e+wenPwl4qMOjesyDpQ+DJUO4w8a+s4+nduba525ii3vamZMcgw1VAlp2F7UtrN7t6TSYqWpsfKAyNBatiSOCwHjKpArKbKJNX3VKLw/+FsuisO2uhTJouMxJ+uuDHHxOse80GMNK3LL6SD8refaR9b2y13iDME5PB4p9cT7G7XrkqszKE03qBYP0SBD51BeUldapjwRDJqZf8RwJaKfI2Eiph0iGgTyX2ZTgA9SISm9ND79fmPyhatz6h0qlmmuLRqZDAbh23MUDDNaxne3HacVsvIVxYKkVyfvUJ+MkH000iMts1dIvNmpCXA6uYadpDDZgVhST/m5aft8e+4xWl2m7lQKBD1KYHzMIepguRSEQSUMJVD4slTVbkG2339d+TqFefawzGPeO4C8d0BfR6mWXyMtjQZ2XEHyDQD3ibIo4UVi5QwMr8WGiQTOhzNXQHZ+yBRDD6nqX8GfMbkHr/FqfEKO6X5utW/+eQ63YyOTeDQilygW5NXrBVndJrKpRRvhEmTYtppNWt8aEHKskEb4L0N4HYJWtvbxfpd3PRKhl0UiFNeSv2IH6fOUIf950RScbeA39mmxClo/g60pALIqI/gR2buyBP5+XWBxnmoItPdLFb0atJC2OLNYAJbjxWSJOrNmTGE4mXeVDyCNKTrzmT6pwZyFWZ0K4InjXm5mzGLvUdt0t5czMxVuRWE5N1UrS8Rn9oJxq8gyBQK5IT2yO+0B80jXTYFw5/ymwDy/hg29jqi9bBbAODIN8JGTLtv98GtEl9pMTGPW8/v/hUQbNt5JKJzHqmfcK7o7LZ0kIj9tI/9iYMnnwtG1UZVWepc1omdV8q5I0tc0gjUbNifWhMR4QoO/iePWhK+mO4zL9BFRnjizDNwVtaZ4XJQKP0wZ0q+DskdkMnUJUgZJZbT6heYn2a3pJxHgaDgdspQETF5QvQEVuBc/+SkngfqU2teMiApBhYnA6GeTzNkOchvZpwQpubJYu4ZB88O4fTVb4KoktBgMpn0/sG3+GcPjboaBzwFqluocpZA=';const _IH='0d2f5e53f849e28c22a31ee1495216677fb962e6cb8361328a73df8de94b9906';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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
