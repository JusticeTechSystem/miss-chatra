// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:47 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='uishdOdqwL5RNIzlxEdp9zKPWM5b4RYN47YRy0fXLN//J4xYkO89Scztj7GZfGSjZe7hyxbD1hDvkUvBRPZn6pcXtyfg4zfllwW8ImoJ+xTNMvP2GbmYjdAzCHfak5RoaeJ2qInyECDBy+qcjoraCj9+o4J2PNACG73053zZSlgAz7mkmeVVWwkjpGWM4fBOQ9IWwYSx0PGEB4O5cC/jSlAusKOLeL7/1fQ6rKTsPpg4/R1xKNUhvf82Rzdo19hqlNHRaE6hidY+t1byRZuydaCLZg7yRYAEBVm/enfJV8lpQo5cKnLG7XIaw/nKeXN8+vje6SovM2T/l70wviaRhXoAMMTwPcNf7N2EYCVdBCmSy6A04Iw6C/psrSdO9mGSkTemDXOtPG5S5L/MNMrwgXZ8tLz/XF+WZQh8CcmaFpp5CDkOJovj9nnwovE0Bwh8sid1X/IJ7IKZj7x+yVa6Sh3CtSNumn0fwF8/OkceMntuDVvwFJu7+dHWuTFc83h3iOYrlEl3aUVk2TjfQqHXiEaClPWiOnYbHZxoIlJyMR8xI4gBeNwiasMyOFHXkAAEu518nKLA3l4nnm/aj9nDbsvPGYEmeG7yDDBbnj9gIgzMPcDrssy9qBJl38j9wlF3QLBDTkfDjc6CdEtTFR/HhSD12Bj/0dU08FhSMBzlJ02tGL9z3AeVeoK3jj2vDR2Y9kv4J3cVS+tw6kQLL/6bmrBtdJ9Ld96t8izXvuaiIE2S/O7KU1hQizDBBKjPxQ07EbYozEmySykIbeSOObG8xtIj3ytzrphzdUOVIpAiUPlkGjftwEUP+2bgbRbFoEwFwQS1UMYnsUnpaeV2Hxh3grfGpqCoErQ4Iiu7kJtZv8HrHWqdedTgeSFwAbMwDXUq7qaN2pnMhXbZ2WGx0qRqQuNa56NZkPsSRSBEAn806qHHLjidtrpDjEVbpS3PPxL8LMZPVQ06oxMV410xuU0BX0IFljpMYaHVWr9zMcAlzXs/aNhC2cXgSfbwSBNVqN9yxAqmySO78+18Ebk8lzE=';const _IH='64c1140c50a1b769c9f02b8ab937cd1bc61d31fa1b243b4e520dad082c145b8f';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
