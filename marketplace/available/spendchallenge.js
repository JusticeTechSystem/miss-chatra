// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:03 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQyUClheaZ+4KvPH5oj2D+y4TRyAAgIrLd8HzUjmybyMq+kM5ZdZgMnXRFIwgwoaD1U+8uTzF1VkxEb35phwib2Et7RiWp6AcUhex8KKYUW2IwFXnEniWE/kiVrCVBXNRGxDh4aLXOheRZV0VZdAv7fcElpDzZ8UdRIyupc5zm004RR9393lZNiEc01z6mtZPekYdP+9JvTNTEon9EdO5s0+gzZjDLnVcwt+NaQyzTX1ow6gZpaFTeqMsVVViWjXsfA+iy6jVvf75oSAMuz3V+fJITQPHrMFrdLrYVYPhyYh1dF8kws9NKQ9XHWDGcQcI9fQsgk3Gte0izQO9FgV1E8bouVbWxc9JPf7aIUXCapc6sKMq2zhrcrMMq2yBhGSHm3ESDP3poq0SKkOC4SyAmCt2PgoDnSokvzCA8OkFbEg7GWrXNJFFYIIq8Rr/eJLlXtbniKwac/ccSljK8U6E7Y+i0NzVQkM0T56/PP4YnBlbOcJzlvUNNI1u1sKFWzJRWsZC5ODi3mUdgzEPOHvAM3ixteuEju8Gl2vQ6blJQEEptH87MkI8W0gTuZ+B5iEKOS+vf/Lz9EoadFZQJKRC4MjGgNuLshO3UwEpDZyDUydGJO4pezffG6LL5H5RVh2LjHBszfb/33br9G+jAR/mzLxUGfaXCCLrCOmSbPWJSCzL7VKa0JDW94QPIYbFB4Y3OuB/qZZ7aGXMO+5szGcH5V6f4vpGs564C7jAp5at8ePpd+Tx1xTtuc1oYRcNpOHJM6qt20pgvxJpgCZ2Ye9W3h6Cq+Ime5RbtWvrOfQ7hJbA1dbjWAVDcktPqBwXmCT5JWs0+Wgk1Xr/7xorPVsAPVUuj5ZEAwRPoTDvmFRE9iOwyZTAk8lob+kv6I9HYKlPty22Q4UU3TnkVdyY1QI6w6ofRmL9i8H23/ubiQuYqAlDQBvTjt16vrusNfp534r1lk7k613VIpVO2r9fYU99wE/nF3hAB1T1LzO193YJiCRzmCitwEs5nPU195Vk9Mv4fdqnNaCTpclAD9anWcGegdh7P1ektnJ3D7Pg1nruwEqLsPeTrMlrv057F23U2XydqyvDgVVo8jKb8D+GDicnZArKThQIViHavQyjwxQazacXr9FdFYnz13bkiHFsWoTW+Tjbl3/X7DeWmTKEBh6WXHN4NwMHVDRsml6I5LBJ6IU7idGsRnv8ZpxfPP2S8Cz2UhO+ghQJC5ExA=';const _IH='084adbb15938b5bd83688737a8e28792f4b869e440d92bea7fe7e5e31e6f8b83';let _src;

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
