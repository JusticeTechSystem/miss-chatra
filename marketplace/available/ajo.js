// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:37 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjT9ZG8m8gcczsmjHrSgpiDEnSTGmB6N3hLaPAV86tWSsIuUF8P1lLPttAw0fNG1m4MklJ7w8Pz+hgp5ib3FnXgRxyNFqJwIcyXeB2hX3yoWvzSE5KHGgPN2BBLd6rZpuorA6+JhHPmvkQGEZgRWJ6u0UQngi+Z62cuadnLvtFaTYU2jeON/RUXZA45X0esxRJGxe7Q2zBkIWfzjRYb3UaX/1g3vigYhwQ60u+ab511u+5mC1qlNPhOwqn9wv5HVTuRVD0YGMorj8KRjOFiUEdpUdOzDCDfpmTlB0/G6bvwsfPXkAl54PvqszldEnuSaoajiu1ivDcNoS0G6ZOE631oKJEYElyYsjeaYPhJgGwMZNwEbzcTS3ygvXpDC3SBYkrmAuGktuEau40qLoynSvaZynm8AYONgNm/JCFVHylaHt060STz/qENDj7arUNIYNQHRYw90VMxI2XtFpnS3B5ctZI27O8RXlVg4UKoyoTiMODpvhBqHt9JYV5HXxvprwurVR5Yr4ht4yxLO2hoIuRcW7QZJu78DdmJFxTeR20EmvJD1d6//Q78krM/361GQWLOEIVte3N0sFsMQGA5ml8NceP5O3UWgLkvFqhbxwAaaUPRuPZ4e066BwODzjxwa7Y8YFHWqAyTKmS0tX0Rx22gfijqzcXZ3Aj+OYb7jej/bNQJTf+KOKpfyPqatXtVDFSTGPljOk1eqSK7u538bZlODalPsc01mYLsYTxNirzO0XBEr0PcM+7l6E2LcC6doZlRhVpdORL1RjOu3jfQsfhYwpnGMaxM5eu6zUscgHAmgY8sahBk5IawTjEAcKdU6fyKQ3d2/A3LDfbwugkp2bT+NCqbDXyEoob3wD0VldZRW1weMkAgENvMoSLKV+a/Emd/qnxcXxcuJvExp4OoyAfsh2vgx625bYcyowyLcwpd/gakv+m0qA1mliDeQp0ppz/RmC+kI/ZRnu6EY81qgC+L9KyAwKRpU4ZUArxL8pBZO37Wk2rlgn5g37sK1o8qwu1TuEt/bKUIZqX9cqwBG5+32yUCExDZ4uiziX/ndNyNqj/75tZZBYkRWnfNHQ48XSKxNk0BkHFntCjb+m73YG5N/lBU2Rhy3el7uqCV29vbZZXR5IDO3ptrvJi9ADlW5MvWzxjc6ucfQ/VFu2DiDwVCzpxKRgVuZJRRnbsBDNFoNt1uPNbYlXGw=';const _IH='ac332ee23c5800aa1004655208d22a68497bfb2a4541d5ce2190ebb42884be44';let _src;

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
