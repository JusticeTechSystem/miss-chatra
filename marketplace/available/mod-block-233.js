// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:02 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='6j7XLtCJePnnip88yrog6O33JjXAK726H7Ea52l8m9lHSayY8ZkByAOqRoKquQV/VGQRS/M4qXKzaQ6yagoWIR8nWBA6GCVJafAJjAJ0utxaYU0KqZRCIC6A8h8ubWVpA+ijgjZ9+NbGQj8CV7IlsRFctbUe2T7MC1z0rFMIwQuKePA+Hgr1fuK6c9Ps6xZXc4U6jrbMjNOgCK73L9Ekq0pfd/jKt2sa8WvI7gaaOXVU0TXRQh5vk3vfLY1OMrDACssp+OQW4PQ50UvhOJqY6/Gyi6pQ4NRrmsMvfY6VOOfqqqHx1l/tevxafT1mPcP2PpC1/m5suG0xf/2pMm+eKbCp1j/Kg4S4gTeLghlvnrL89WjCStYRYzfUnGqD5p5T4s+8wrpXpRtFUzZTT9M6gHoevTForIpOHXuTqkRQxPYzhECG3uuHOx1Y1UFGLYAVB8jMD9dumk3SS1YARJvXqDh5SQufqeW4Gr2LAENLCkVdJknHKo/8PQtB3KvFAWu1qhiysxHoaY6KxMsSja17E1RQuJvgsI10jsxgihWLiVYuvepNWjHBL+a/qJKBT10so543W4TD3gKycdE8Y1GXETSbHAGG47laHO+iYVwbvDlfEb2yvbLwANO4pwmM0oEurblWfBazQ6JgsCL1mIsjAdbOmoy/c+WGkQra4T4koXUIX6OnYrgwLjlFuLnkW+Ea9q5q3sZmxHoVZAF8xCl3Hi6GbriF53L3jHx0XIP998ETkNurXPXBJh7jEB/t/om4R1TxN5YNxZMpogdZo2XCA6IWI6qc6e8jiqjuhIWU7OpjKd0bMKcJhwcPfRvZmuJpd0RxJRmkUjEiDSO6Kd4t3y1E1/H//e4xrzpOVc/LKulHSrYM9lzTZjoVvnDn1OCGqVzgQOKdfbYYs7FYL9KxRgdeKOgqU7U3m6OfA17I7YxosAHK149HZqzMoe0gFtjCXCANXLPn4+GeOXZ+b/ARgX6uwYtdnD+DFVBUurHqcWDF6MhJzfhb/4ntsBYhhKzfABvY68QlTuCZ7DL2nRRUKPL3ZiI5OJYGUhJY/bZ4LNjHK43bZedy++cXkPIXxsu/HRI4PEsMZS49Qv6iv77FH/jSrrZjjzvodwJF2vJUVuWAQUueMf40u1FfIWkqhfn24FU3Pp7iCokDlZN2cyjiLW2Vaavk56HENdwLI8GG/df4AL3nVKbYWOqK2BZxAWxeY9410Mc+KFuB4rR5//ihrPwB9Hp8TYnKZ2Ticje1NcNHCN2YCX3ufvyezyFrhPO4d9I2+H8o5ihzqjA5OyV4IzF/XLSvoCsmQIJ/ibdtegAKJ6IJBapxlckvThJFP07ODx9qy95YxXmquOIUfFzhAKVrRBw9RwLjsIyPrTnn';const _IH='8eb6acbe3eefd40c30f4706922f5fd374e97840fa48593889931f58fdae31427';let _src;

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
