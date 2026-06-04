// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:47:45 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='X4a4Px8a5LTK34locD6Ej/3nqkqppWqWxrWuu6HbYI6sJ0pnqdZVOnj96WY2IA9hYa3UvD+IOrY1vJgv0e1sgya/ZUwFbs4/2ic6n4eLkNzl0Hukk6Oaj5HU72HvqBRfE7yuRDbMh1oEM+b9Hzc/BLjFMsh3UwPRrCdOgbOmVFPTWRiYnNwjOhNSlGu53Zc8+m3a9g7wWFRVHaNgTu1bnl7RcNtS4Xmgz7Tpi5S/XpohNN9ZCU1V8EhYtMXuRtA42Lt1DmEMUukCzsy8ziwtGie2pI5TiYy640LvdFskkQvjtJOwjSeDkP6Mh98pZEkQ7V2G1mQcpixkQDJyL6+z/QI6mEEfJX1pl7HiZbAx1dc8RmDU3Ui1mstlPM7HFgRwK5wawoiffv9k8U0QiSUoKVDG8qs1C+x5d1fPxET1KDz0tuWEoLDqvghCuZj2ek8TQMDucs7MWmzgTjQ2DEslogQPMBs6A/8LNC0UuVRDBTnmGAsa1GYVlSZ9LERpmN+ZT/aDUfp1qfyax4CrRPxJMmh1HN+freRPp3yVG4Qo6fFlNybuISZ55D4PVv7kJMpGDjO2ffcpTC08QCNkxcQS3QTmrOye//tgpHn2hwYtaXYKyc9ms0Igy/90Ynh2PBeadZL6uXK2+Z7ER1bXDdFIAHDrLgi587Yo24IEmwBCV/av59EEj5DjGeeHTD/SGcdpcInUpQbjHH7udyGuXRki+2+faJ2EoN9P3y9JjvuwUhbDbZzNuoks8WUnqMvpjMV2a+Uq9LOBQCGpYrVN8wPp7cl8uANMkrdGJ+JS8pGMnQxWLPQYHUEVm03qz35a4ulPaqK8K8v/waa/2lXa35iF5Vd0xRqmX0KXMq3Fyhz6sgBDyOQZ7id23oFSYUVEpPMLF3D/5T5/mqZh82LFLZsAlGy/XTc6HH7AJo4ei/WTy8n/81CEYJ5YP9DDILfYy5chnL6BpmzNVHKemzVoGj2vL1B0QVbAUWPugJH5/VwjWWPPctnzLv0wGwJvTsYk8/CbHZ39JJoFQycdvr/LbsmVuH7DrGs2lZNQ1KR+I+Ry7fPR9UQ797JiJtMSgQMw1DffrFVjQRcDE+V5eNlB1fioo4J8fZdmGhZicu/cZNUMinKNA4HK9vlBIlrZPA==';const _IH='709a136b850d6ad258ebbf83b968cfe6b22ec138f1915e779913167c18f969e3';let _src;

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
