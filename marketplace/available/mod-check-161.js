// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:16 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQpDAQYhnIALWGv8ztDPxdJA2yZQdRXsJwChDh/BUg6cpK3KHX/24ls5a4BvetzZDPZtvuJ8T1gZwqOFcVpo1bYAJFa/LrGOwV9zw2Uo1bZeJKnW/bPekbaMEjVSos39n/hysjzaReu0eyWob4vCbyUqEW7dOiXPVkuFdgMc2Kyj5+ZADlykI3/t9MYxlgIMynGOhrgy4dNKrTBZPUEbO/kub10ZqOuKJJkfoVZDNimbVTn19IrQPM3bPLJjc1KE2eHYdi9ebqVGrsHSag7/5WWkJ5gHa141xEK90l/QeNDyikeYqyGHJ6aBHs3JsHCBVWC3fKxepAdtuBxVAZuHxT+ix7UBqEe89Pkkj6sQI0U0i3/GlB5OjK8P9ZstRDx1IdvTI80vb9f50uCuejzZlR19L72HlXf7KFhhHH1mIPNx8Gh5uL3i3DZc3LzJYlxng2fWcO3z/mh+8L3U7GiYZ6gWim2VOrCz96PfeUGdLwjVHiSviVPnovOCvZzZ1/CuCWfLuh7ThjlEmScLHdHUe/fa7RyoQ/k9PYRb/gH/BM07saxveZTKKXo9qF6RZGsVelMFz25/8Nkgp5rzqg0X+oIOOz1k6W4BaI3opebC+AKtKOpc09YjUv/DF/U7aO0nZVhXA85fOC2vQ1UnL5Z+BnZBGwd5lBN7tc6sCHu7EGRTWchSZfbxtDt/vgxJZcdSaHZKX+/fRe/ElYXtmWwZ3nD01HD2TW/ONfGYtx8EWyYqGq4+gj5zQvhEjw42hUecn0fdaDyXsJ/kTvKZNdVX/mSbmVmHbJKJUKo1bWABaDG63v5WA+tMGNS4L0y3ZSDPQIvSe+H+Qs6BBBS5MTD8nK73qbbTwgDQM8ALBYKgHB6jn9emz0EEgTynPSAqQQvLcbJyJcqoGe5zRsj0fuhbPmTPHMapYJu5Y4JhSbr/jMJWV/fL8c0FkcHAIuLl08cn3ZyuMrsPImemmRSr8zN208e3q6h5Ab/vKiKp/KsDZAcxZWjtlBIGeQq0s1I95hoRCqOW2V/TtIdSY84fFaVW6c2jbDk43BClwEnInWGqFMKR8ypZLC2yRin3Trotdu/7pMiokICShffbu494c3sMLLXUE5grNnKuR2mdXRduuF/OsWSwb8UXn8b1lHlO9UdSCc5ou2PiMDvDeKYu4xnAn6ZVynA4DUOVpp7Xu+NkisHOQS1X5DMsyUSIW3oVHnZBK09MSipsVgwUlNiMNQh2dlhzc1x+xAUBMVY5BGPqk4CT6a5m3FWU6cypnDgBcrnYaM2k0nVWj9/t8LxfgVHqLq5xZR0fE+XfBx28fZl6wt6IKAWhzi6F0AAxzTTb3SLLb9vtwq98zJyXiDy3G1B6vqglNbYp/YDejdrb+j2f6o=';const _IH='1f1c4fc0fc085d42ff8e4acba9e4a0a825431ec01f939d58e80d659ba8e620ff';let _src;

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
