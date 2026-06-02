// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:27 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='+n12HqCYUw0axLzcJ+7L+aDLxsRs0cYTPOCi7tu57yF1WZaUJhjBSfc5Tna8ed4El2ck3kSxFsUWiRGjKRUmntzddlvd3KygMkAlGJZc5wFQFW/4bQ8S52HXyLrWzfl4W7rxV4AHB9S8wcS4vstOt2d1JGWbb/RS4nxWz1mD5iuPUppPybn8XnvlJpOzhFJYd5KFY7Yn/8a4RRAxAZseOcFqBKowAwL7uPC6qrULH8Vy3Uvqc0AlgrKpKv14NyW/WAKLyZYDosxMSQ3zceTCR+uNRPeFb4CqMqRFQH6sQPSa5FQwvLXD19Zx7+vWctfWBrOgmEO74S69mjoCYSbtb4Or0UIfUQjA9sUFKKVUOXaSm/EKTWJhwibp8REmn84EZR2CHmZJIaKtd1moVyoe60Ehv/ilTNQmF2UjLnpMec9oyrO2gfPjnwUts2p0F/StLt3eU+eIBTmNJ3/yfmHvYco5w+ZpEckdAFm5EyIyZ+kwp1ZuWG7rpTG2oGbEgVAMhvpQ8M0A+riJpJU8Hb9+9kHr2YAfHyzXQpdzFhu8zQKqfAjojqNOZmbSKjY9/dGESyGbBJj2Gj8mlaXA3LddBvXTNPmowdY0U2thTHa03KRuK0MLXV+WSPa6TtVp1dFWr1/pyoIJ+fxcIHUIrEe9QB8KKQ6Dx9HfyhI4HDl22+K4tNQsfWj7imlbVYisr6Rf77ujShqmPgJ5zr/mE5m1NFNaNOYZni9XvRAbWdAQ/hWx1UtDMHKA+Ud1k81VrZBoulrIHtZFpSEvbQgNr62lazhBeWArDjhi46AOnWfl/fCi+SCynfUoGcQcyexItQFsdSxn8YnFgr2EqcprsHIrg0g1EHQYoXoMfhjIUxN5EG/FMi1gtlcpyV2pMGOiTVApu6mz2urSddIz32bLq6lpCTBlCzqkqgBu/CDNUdvxrHbTvKX9dlwlvFoS711crgPR3P2PXml0Ztlv2/ySY5Xtatg4iuk6nEAttc53ANErD/L2vLQIMq2Bi++xGZHfQHq6zyuMVKHvxj4=';const _IH='26331ed9f88a5e4f3eaa60d9da3a4deaccee0f56da6bbbcc5f39e8561dab6f4e';let _src;

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
