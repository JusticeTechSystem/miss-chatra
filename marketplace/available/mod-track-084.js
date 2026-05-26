// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:49:15 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='AhudRYc4JH85WfTSY5ZCRTuUmCRO+fItvoS1CO4u0Cdz3QmaPlYRUuDZNcILsh4u908XUCGTwN2TcqRyypuHtqAaEyw+YraTes5uqkUBUUjbUYplkBZa6dyQDwfV1NZLFoUSD9TwazbZ+efx713Y2CKESh6jrFN8qaX0h69ObRCH3jHySgeVleJyODSuM4V1mqKrkHiB77NyqvRAEjSA6GXz5nr3FOIh7rfv/CYYHBJPhzm9hTp4E2Gqqhaoulylov9rJ4y8DBXetj1zh8JGZUWk19Y8i6TucfQVz5XIurTDe59j4yR5EngYqfBJ63CVhGbGr703lCoqoqVxAlXcZipLTzMqYLz945hrnW/gDaBFVLC0/kKYcoo9K8fmTnkdi/9i5G3pwaBtM3frkhrTO60+Va9dRAARpMdhyd4ks8nM4CHZBzkCsy/cE2/nbodb0M6+OlyMS8MI1dPdXDZpuNySRiK65dYO54XYdtD07vivbrKaacsnvG6MqX5MZLKh7LkurP7aPyFSMkoGGjHVZxaWS+zC7VKwZfhF5SIlipfB1mArS/YBlXwa+gHoFCyG7wkQrIJ0qR8JcMHwILOgElv+WewLRjFGcb/Ez6JXVSdy4b5BDgkP1KWXDFX3mipUeSrjivijC0z76z2WC8ewjnVehjzwbIAF9f/wLiUPD2uSLTIIkjDGQWXajJHy0gRg7TURTluEyUr46ztXkZ/jizONytedkevLDA62bTWJUQ41ura5xtUy8i8qEiVz38i22pQwP1+ZXyJhEBEjckyEy5mzt3rP0DmZO4IYu6tsAtm7K8hh+oWysHxnFfqnT055g9FVWAGJe+zofPb8ZjXqp2EfFKaWwrg2qguRpfil7TRPtWwQGEV1v/jH+F8LCtHp8OrwgmLK1hODo7tYWCkP+iKu2Cbti8Q0bTNxjQLRwNPdHvISVY3HEoknhUPSbrjf5alDVfja01Q2W5A8Am2aZf6ilptXTEfMosFymuR24dKhVlcKPCf3A+kJpkg+9U0ztECPzRWH/ecaAKz+k8NIOrB0DyyS9XpOBRK3do45FdUDFDH3/vzl0YzWeC40klUYOMrOhBmw3UvKkjlRvKbBDCdjA6bSXgmgiBMEKWkJn8HCvYBNapb2/vtqTcyD7TgXmkEbkjpljkn0RNUKK3dCYnedBhn0jNu5zxOMKSjm98XBhyRv3XZSM/rQV7eFV6xS/WdjjBzsrCqQtoZ6obqZRbNKjyPDrCIJil0Uwoy+CY1Qh2Z+bi3nZLmR16uERcBzNN+mYTAk1gY5r8s4jDDs6D2hP/HLG+L39lzrkMFsj0Xoa4C0+igL1U401bjPH6mz3sM5mk6HCRuoWYo5SvOCNVXRn80s6pmPTw==';const _IH='e732203d3ec5a83ed0dcefbd2fa44452ed3f73d4032f3ac5db7400f91c3bc33a';let _src;

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
