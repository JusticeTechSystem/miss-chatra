// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:50 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='swwib0HeKHGsmioIgc7O5Av4APuMVGSE3+nkeb5u6yq2sX4jzvbx7WRf0ywSiXNGSLu4ju4rCT35XChj6N26pYH/YV2nQJSZ4qCu1dni17T+3g9StPNSgqXbNdb5TE+VzIPZHIiYxeBl4p8b00sdc9wdVnuwTjuJXzSsAleqDfG8Mzd7Gyg3T7dN21Q/akF6+7LVNLwa9evBaEPj8SQyA0AmqWMdF9hlnrTc4HDIW6klubvScQqfdaLR7BiAJzt8jx4Mf4YJEWQOFxc6H5zSCCNVHfKK030VIYXFTkIeCN5AfXZXPiLqw9WYORdMwWDcSb61e0qcMG/LtV97XWMB3MlxC/653OjmIIz3SIF28aYQ3rGrrnXsAn5rfQ5ZX0mBg7AENUFG4iHqvVcaVA3VCm6+epeymcdC0o+UOlNW8Pm+Vj+mi7MePZCkmRlkYhyt3AYMpeWkuHPZT3v5crPA5ubGd9SsvIqPd+SlbMxJ4xPjAOONYTSnGyX//olxxqU7wvLAIM94E2bd7yvPK0BdqkZK3+8Txl30piAQZzPHicNm7L4sthaZmtPBduxMigp4jtiU+c8vqLcnJUJPz6l8oAIVZqFOD3lc+0+3N6Hk4arULx/Ju43YqH1sW62fZsomr/J5cV4sga3+h/90mRI0H/sR1qW7f8Tw18RgR6kZwjmfMEHXW4etx3g74nQFaeGjgEd5nOBts4acOnGPVaTS51jH5H1xU/eB6cDHyv9XI0lL3rgDczg38eLvzksJjmILXQEZWQUmjZYi1Cr1XDl5KZ3rcmyAu9KCttjI2Zfk7m4N1t1iWo4YNNr916NAAexmjjj1cMLbwV1HXCxl58oTlbfFzuZ/6fAdjts1bPW0y6Yt/Mp5ertnVPfQwlKlAO1UNC3zDd/IlKKWWD3QvzyaAkyh+sqLgLEsnnzMVe20tlPCXzHQM1CzryljE/3vBE5n0YNO2bVlPwkXxPSh0QMZn5otDr2UwQ/k8OqsduULGVOHbX1JmQqKaZq6PBzentDuSw==';const _IH='51c2ece92fb4767f7a201f65c245cd974f5738526dad41265fac17b43a6a2a02';let _src;

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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
