// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:41 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRMBxPNPpZA8VoLYXFVoQLxHpc3AhT5kxpM+2jgojjdEAtOatXKfAITK8zit/rCctJXTkYve6pcEEysimdp1vmYzmTl8/W5I0oWrZe4viRNfyGYgmI6svxvEPYZ1wQmsaxnin+wXk2SZN+gpFJ8dyZ+cY4m76+D4ictX7JfrCxbUmffiQG13qgI8CbwJkjPdpqXxF//qhPaDVM6Ai5N2wwTePc1pDLS5rhyA9Jh3feP0IscbBlAR99zHKFg/uqCbySOjNyU6HrqpVbf8hIUJDjRE1ofCmOKxSH6RwAszWYY3v8n8nIzQbDxUsd2HxSwEVkaqXgxVk/fCh737ILaI32Ej9FKjPLr1XoShv3hN93bjqRpIE+NgIrO2lvkCJPovyQzHcavJIVevIKy91u8F/m56ZKlH0QobumWOZg2OJ+aVNFjFBDfagUVXpaxZei+/+4m6bMfEXuAtdTxHFVxEbmI5vCiYfJkK5awWFOnPP5S/uSZj0v3kq1UI7Sl85XKS1/DHpQKDELStYNj1P01TX3z4BrNeVNETqgWfxMCPBXkYWUCL+PZXnbbyAlJ+HE/x4OnFwJmnBqvxVOFiPA0XKF+BQjKf+H6ekc5o37ZdwzdPvgu7WK5q3wt7hycg2r0cM87ASz9Civmh1vtviWxPkk5IyWm++1xl75G+bEmZMYtlYbWNQZ/ANAeLbXk5l//fr+bqHm6N/W+tv1cht0cF4HlLur2aSOz4X8nfkvc1NFA0kQyIKuLPMj6PuYxl2moYxVzl/PskfUhKuAgHbOPUiU++hu8sqpTgvt8MojQ6zUlMlLv6f4tjWHlV4HEnq56+zIgnl2bxIg/XzvaUYzHLgy/2LBV45+0QTkKvo49iGjfXihr23ZQJu6NOO2uNTskI0CwonYpDf6bu4HHY1Vv8TNt58fw7xvERx82pxLPCyuAZZF7Et0VKk+IjfzhdphznDGApyaAA3cH2ZGQJzoDiHtYRSK3uDyMS5Eb9EM+ufMaE/ZXBeH+dhex4pOPjYmLI3fy88Qp9huvdDxJa+h1p035Z4TsYJ7A5J6SjN+eiwa3N3Y9uDhekJ4mbLBmLFikeFLRmGqnGt6hDkTNVfX45NJFrXrfoFsGSn3SR418zV2j9FhkYDikXpUC+sh+1Ts40vD6Ri99aZGqnid1HIpmBGt4PfleJ+KEGmSV97gKuHB5RruZeJxIi87Hs851oOKN/ibH/aWYKlVK2BCbRy8jCNpTiIUYtI2V0NQqQXoBBGJOwxojpCuG12P3kPy6ReXhN8WfCJ69UvX99pP7UYGq2Ev31tFjWBQsfdRGfhoS9zd3pYXZUF37CgDcZXxyTQLvd1V/mI+6F62ivMkcGarlZEpp5HY5zXXGGkl1UBbhnDxIW77wqw==';const _IH='22e1e0421aa01c19c32cdd96388415c9811a568602ee5f33758676a7cd665ab9';let _src;

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
