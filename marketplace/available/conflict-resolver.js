// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:48 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='K+40/kH8IgDOq+4niDsuW3fjVfT3AzVVxGoEQRvRgn+ni060Vz45xsbcfMDBecAcd4l4Oftk484G9yTRkA8retOlLvC+ZEBxE2uar3Hj/bojZXKHcZTT4Y3nzXwKW+ava4olJzwO53CFtnhK53JsSpPj/Z18woxxy3wKhYnH8hELdwIKMPFt4ioiIqEF1XU+iEVQ7RjgzsdTuEbWgplW4Bi+8K/Wu1MQlQPVlxo5v+ou0e3GUg9xQjdaazeT5MqAsjDh0fJk+PFW0gtj6vwN5aboR9CBaEexTWuPy39RtWKzBK0elzcUvEEkG+qmdh8oDHUnov4p3IrucWpnaVGa3ylAxKjzzGc2RfwX8psGhkbQbGVI8BHJhFi/v11lYSeWHPG8fYXGq7b1K88nxT7DNsNhDECiWvCUnc3PUmaGxlV6NZS19SRDdwI5l42GLB/W2rfHDzeIGy3UJ/TUMB9e3exb9OUzLAJXLCdGiB4RN0PlOpjwsLitrVbz49tCdP5h52ns7AFIr+8PKRuavDNO4iOwhMIK+Yr6ee5cOEVgXI69fwheOXnPLhp1FLwFtjEsI/vYCKYTM/FHYDzs27S9Y1+1HryH9Uv6Vxi/90oysSaWD16At1fpLp4bw5+ES0uUs2donMSDeGPr6lVwq1pzF8azaWmkKOJzbG/uVdnSOTlHpHYNGO1FGY7WYoNzfIJv7baK2uzqQ5XFeAfKHbmpaOp2maSvT8szM3cvmzDggwwRog+RhkG4/7qOR6UjOzn0FZo7X2mj5fNIn0eDJdhtdjEO6D2EwgwxKXcebDyCxXGkorzIfrv8k6Jv6U1b0jYyOsCV+EuxibxYpxe8AbBoMaMF5hyffLvbNFuuqQPlO5Xc8DTSioJ3k21RIx1LkRx1U41vmsUPrAbuFyqTDQk6s5vT0kZoBkWn0rukg840HxruYDLOpiNouhZwrOwbwoPleT/6kAdZDpI9zSBHh0moC4THoKUyyRM6LjbUDGxa4HU55kdFR0hA7gwnBBlLAHs+qltjR/28OTqn6Q4Bl31E9lxK/pcA8bahExv04IsiXcsegyx9zfCNi2XyfkOEnf5D6jYADjgF7Zj+X9X7t++v8vCfaqQOMNXqzL9JQKJbhs8gvCtGYpDSyGWR0Ga7ONHvpMYMw5iBQOVaauqlKdKldDLZsJWJsYl8g5Zl3aA+hxLc/P9VWw9rjB+u1h06TIE5/Mz8+PRsyBwbZPorfRsMnLiZezax7MvyjPOA8MRGbkZ4lKh704Tt/qNSuXEFNUUHde8B/IIL8f7VjNi5uDHAF+xjn7J5IcZ7kBxGQWxGJ/4q8uCj2hsNlOSiWyMLsAi7UViDQPz1sBN9vpuHPAVCM+xsd56oVFKkaXcVDJw8NyuJlAL0k+1AkM5lICsOHgwXdXAAheiQYzg6cZbtC+k1D+vfnfrD/MR5ukAkbQ1/YdfC92x4geMZgrS/e2rIcrCe34kRbbPC/xQqvWPxG2GiPjIA+YzApsG27maaX028GHBfHN8mCN0PhT6UhlSruXJYBchfIu+nQ3+ud/N82iKPGH5DHGLIY3Gz2hK8eHpDySS+saenduMDQS42e7Uc394wp1da94wkg7CKsrCz1MeDHsnUDwNidQ3zYUlYXpqvTu/tw8F1rMwZiHEMutGyawsxQdzj+eNrcMVzAj5Yq4l14X0pVsH3L3d7Q4YgDefDMqtPQeqcbIn6t6PUKH7MtK2cc8VGK8rN12O71dCqlOacBVe7j5OuO0nyPjuEtEP4jMZKLZ0NdY96pWUo6Gg3t32xmJdwW7M=';const _IH='1a0d209e6ce36b8b0e98858e7cd881bf7fa2cd172e5a0e48bc1c9e0a5442593c';let _src;

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
