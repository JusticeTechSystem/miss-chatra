// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:26 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTQ4Gpe/PZRVJGfLc2RdvFY4JQ6GJc0ooiCRP6mVz79Hyi4/yMDYCDvcEZ66Th5zSm1OtoIxb4LsU8fLCyzwBpT6MKOFkyjFTgwRM0cxs9cg+D8pFHGXHwAFinrBFZnpYVAXG5flYCtTC4j9P03v+GU859Zc/CKaYqJoeVNuxb9fsVWm2UPuR+ogfVRvk6rS9PbrC52eELSYmmtM9pTR2cZtpENIrI9LluC1gABiXuAbM6SW9ShSqjYDX5ZxrKNWg2NhRgLfKdvcBwT9+EweFIPrAwYqHR2JEtVYZwF0xWsx0gSakKl0iFXItTBfL6idg7h06U/oaoe0CtUVQ739AKnbUYYCmANB8c9JFKAJ1YTsoSoHqDyfjenTHNGVib/F5J7ATWsmJnHGgEu7xkj/T/0fdvX9hfvgSoR1F1CkLrAsgAhCZumm9U3S/s8TzvlG6NT6qu/OZa3n+urJv5vr3JOO1MNR3gZ1a/PC7c4qExdX1/8id3Mr3bM4uNZsftOozSHqiAMKEevLiT67JK/knwv0MJ1bCzfuOC9vIIok1QPxtwHYx87SZ3hHNHOfGtCPkZp7M7IFuA5iOcJ961ULq86V2LICA1m/5XwzXApWN7qb27G2bsniNXz3QnXd/iUjVH4g1K8ZoEwEfsffAqD9YgB8eKvJiwLceSrhLiVQFutnJ7lymKgaqmaCI7r6KUQGP4LEHAfK7C9MbO78RjkFSJgJhKa2zgt/60q+3jmP/qcVOii5zDF6ZIfMd6apaC54ghGZIl0NzVTjCpmhemaMwdzxahTPdtKkIbO0Hg+7pCu8RydcvZ1L4DOJjY2xitn32CIp87uzXB3xXaEZkA4oJMLGkjpUPwtbTpRhckhUfHl2QoJrjz0KfYk2TVhi9ICb++qsxGomxwnxAShtEOh+RP0UqcC6wegJcoJhX+k1YOY6NX88Q1fA4dxxoE02wQxBiXafNHs/EhwYY4jbE4HcdGA8BkSglTBXoqCY3/9Uc+JbR+/+WbecRgBbvXdOR5Dg5QseaCfuqvYorIftbRaErC0CMUfLNKzjgRr3TRK3M6PRmjz3+eSP0Ar/gXiMrsljGpRrVziIviocThg29+lXJKIGSuBr4jsPiRfsmCW6mUNAnSixKBFJfCQ/OuKPGFyScESDsTvzjwtDKyn7N17vqpXGo8GKbqEwkwNfFE5BCw3WJzYEltE/dILfOq3UMyUu6uyNlNew4YMo46c7HWxEpu0GDwcN1I1g//9/RyWwcanifH2G1yzD+ON/LA33tq/K8ISJ5Via7QQLarIYDPZbUzIuh9SgQJrCvZXW47w+DmFhbYn1aqRtq6Jrum5/xHPs9NJr8rkFTJmpuyAyGSMjvBPbT2OWu0jiL6C';const _IH='4b947b164d21983e3779cc4d729c830464d0adb9d72cd50b3a5835e2b3ebe4f6';let _src;

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
