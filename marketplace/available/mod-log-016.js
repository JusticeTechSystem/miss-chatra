// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:12 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='iROQqAfmGwCxS11joMTluofAYxy/gTxr4p9LyFQBT6ccTx9sm++M4NS+2+t2w4vDpWXkWreq538/NdTRUMJ2Ei8sFq2itlF7OC9Mw7QmJfQa0HhWaTqplVRF475wDmrwXRBHxhUS82w8EqP8jFVoF39rFfpeIrm+57bDEfmB7T9B1W21sulSdMAXiZRhBTGdVpWyUkAfGn7SBAXzD/R3OArZqSjRdFs2Jinc86EndmS+nxl8h5f0rRH6vQccIeHvsUzDfcxZF5trSh4ODT7iHqyvG1M8s46FfvKY6kpL/ujFLy8wekEC7g0+Vfm0xH/L7lROhW1wvPRKFLgX6YnfK+LjPlIGhlqF2swoYKljV2t0ga1zxLcrtTSl/+D0TDBKAriRb+u2l3nenHme+TREG/JOFTuv4LFTyEdSdfFMuUSWO9rIq7pNXrqPSdytPvDiMYRP7SXgkqPdF28qooalusdtqK/4I78KU6lpilJttbWxElV1h1Dj3JkczNvmF/Bcdl5HnNUaxZl9GocBb1QRgG9ZTM5VwZOU0PkItbiV/NeXDc0AmyYSc4maeGYyEyOmIEQt9WVhr5MFf/Qe7swKf5eXH43RuiranM9r7F0r4c9Mg5zEbwxt2NQGq6tSJYogYHtILe+efVEw9ZVWSDImQV1E/QmsNbcspYDuJtAVk1pb5wCd75IPFaoiikKklguOVhWEx8bAk4xy4lF5ZWSN93dm11bwc+gCvqkv04nIj2D5qteoXJiKYHume3kMRO5EkT+sJ/pgAaKOvRcNkdjFgq/Jx1xev8DogprcnddpFnGLy+XzCWiSQXJGBYXzOiZwmmWx20l/Z4H77q09zDQIPl0OYHB8zuXoaPan+0P3FPZ5Av6wGq4SK64mIT0T0WMma9bmQr6p2IIG/pmYltivCSYgAA4BO7Hj4/Wi8Q4zApNatzDCX++FI9IEZdgmTJofhW6LEH5fJ9nQRR1xO6ERL4kuQ+AuX4JWXR7dwrUUYbhwWPDrP0n0NxsOCvrgrUBdjID9pvBVH2HL8myzmbg0WgvzdiNA19+8cHe5wWzdcu1sjHAhgcaI0MjwV9syU6IiryKwjtfrsgsrBqvPlqUTai90lXrKF09WQSM858DDyrA6uPCytpVdRUIePeS54e37PIC8xNTPj1gwUydhBrzIPkCvb8tW6bXROkNDMVAS+Pt2e0ZuxkSVILJOToqVIZBSM4P1OmXq48Bkrg2Xb3KGnPKZVco9fky3TCuvfJ4yh+F8OUXWvzsfSVAZTbmv0SjjsU3n6K3YghpQsT71uTRMeNlDSQDJuH5Npoz6X31Ci9tY+TqwizPqHDxUrPkEECQ2kUd9dM0=';const _IH='2bf4d7cb447f811a8f5bd2af38bb5f9e76c2220d2afb225fe123a2fb9ea362a4';let _src;

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
