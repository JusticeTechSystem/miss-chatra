// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:51:36 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='XEJLXlpOPbWajvLBLf7SJ903Fj2KGlxh1C8qf8xjA+voBfzFQMbvp1vtA8zfiJuHCx8e3iNzuvAWk9sbzypIMrFxP97WYO3sJRvQsdRGsSkVpO1U0Jh/Jjkaf1/GrcFxqfirfAk4bYI23W3W4Zt6mgs8G8V7DRcmK0rNVPBRaxPC6Jve/lorMhaFidcjiPahyQ0Dyz/v5ecjCZkGckOE/VDXPBhKwRqcp/5dY8ptBL2IVfIrfCAM9iQFw4i2tKhXAH4rDlYmARSgA2wEnbyph/m0Vli01JnYevRdZsVHfcG0e/xu6VPnZ8WdZubss7qKmf2nv4Bk8PKH1htBOA9S+e2Nrb9rnbUPHa7SwWJULAlIc7ZWwr90q5OXLXq2uMaERmiJ/5Gcqdhyqt8sp513fegtmlJLGj4KtrXZd4ap7ehLhBVCCvS/KKYX2UjM+iUfucyQlYiAW5jVU1W/Mb+n6yp4Jiz45JwLbUgVMkblhVifGizQ2hhfvM/hsdYd9ZhWUsuiZ5QMaaafSQFRiPCo0RV5k8nxUouILYfb1FMCRUH8LrlY80hOcOwuZ0BFbwiZQXxZJK+NirkbqD3mE0/Ux2jee/S7y8t0sgD5m7K18lVReRaEaTlaMP8RXDZ6bFfqkQlyLlaeNZ0XTyNjxdivVRMrq3musFRQs/F0CE4SYotO9Gh3zo/1iZAG35WTEQnVpsedztMgfveW/8dbn2d0wA0cKS59L1ut7ToWN6MlK/vvo6iXVgwiNCk5e16WBIvSLKqYu6XZ1dNqvhXJjhhXuA87sonnMFUZx0gMN77dkfqjOViibhPsOlpqt6jBOax9X+pFhPAD1YPKvfAZbR7O2jzIHAsu2nzRto3lGRZFVUbFpDbA16zJyWya9mNs5UXN1mAVPYT/BVqhk6lzyMrXTlgbBnQpiqTEV1Rn9NQ9hFmkVwwLjf9lSiVQFIpbNt3D5rSZLbCDc9BmfqqGeZ1ZynMBo4UNHeUfWVW/9Z0HFQPy6WMKgxCTNVVKOEHM+ps0e+1FgXCusDjTew5s1w6D1ly9qLaFknDYzGQCa32okmv3PaMJQySzGDM3PIgiuMxbrdvlgM4EcV54SNE/+e7IWrGohbx9heRdNQVT6q5pldenC+79CVVaz7wLmE/psuHb4H2zZAYguPPol1shhvm0luB0crQccPvMCdlAqd4h25ihQbElKZoP/UexUd1rqQMk4vMCNbxI5jDkrxR9hOvU8Bwppjyyzw6AShisw/ktLMrZYucrooIQbbQ3Hq9t4xLPOM9Q3IqIWOcP80kSEzA2kaRhMRfWcj3Yyzm/KhQJEz5riwQscPMBEw5kLz9DP6EYD7eMr/0NgoC5mpS7tu+62RoHOpmhUHhPkfqe81isC/sqPUCd7V2GpUjEvU4B';const _IH='4542668f4a0f441b251149a836bd842c524c5ffaec6788860090e9cecfa0b2f6';let _src;

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
