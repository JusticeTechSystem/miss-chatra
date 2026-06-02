// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:54 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='5wIfJSio6sSW02dy7+3rr0MYKPLTukx+nLqAeWlMy1BeZzidT9p69Z778A5iSKQTB3Pc2TpknqwSwPY0Je9gZXzhBeetBpRevbAanIry+ffXQXzLagtzMXEABjWlFQfDd2XpwKSQh+lEpWyU5h/6vF7QO/fPjrtvaevS7kHSPnv66DjmeLxxqPewSY4EzLqxGbAwFNfN7A9lGpEN0HatEugPnawFJhnf0icXt71i4FLvVtGqEBoK6kFO8dlUVbxZ++HeGZuyr1RBa9xU/z6QUiDUIpP9yajKC7NtdDJLdI/POjoKANOktxm/DcqkT/czxvBDeUMPMYZTPfiUQDGnvGq/SWJ+kKWS/XdlzNFZLOI1CyTFVaFjJOG8fSGVPi8PA4gKc3eH3PAHp6OpFkPA2Vv8EH+1tSvTiK9Z94pea2vOj6xehHZBWFM23+cAr6dblJd5sVSJnojWtrtEqTNd+a+gBK4ruzqj9fyyjLuZe6OvKX91mRmfPlivY63qOnTlo0WpYGe7BNNRtik9PDxz7BO0rJkeUOWXkNONSyqRC508r0csNFNjLZWlBvjarLJ9OsoBUE98ECdMye+/g+C2OnydhDcnXrE/YxqGR420c6jAkUQFOTGkKhWud8NbaY6YU7AyaBkBO8DpU+/nuP9LBJ4syP5Q1exBqw0NtIFwRJovtm/NtQ+63dj3dU8dOW6M7hmR9DCH5Ev305x1blw3GiG7NxkdxGK3G0Ll7gNsEh6MpsbWRCNa8QqCsB05qFUiLLvESQJg6x0GR96HJ2S8apfCI02/6/mkqgF8X0/bryMiqplgenH3x3afY+VL4lfV26pKAU7/iTbwC6avAzAchJlMpMLhsFH+4AQhX96NIUBjkWm2MDF3tbDbEkiUL4IcXsH4kmrHvUjTkG0cNNHtWPgQW3zglhh82Qc4oaOm7DD7N9m1gKxVtHq+JWX/lieMoUBjKE1SyDkCAkHmkIxyz64I3xf2Vpwzr4oJ6cWXpW7j6wYrEhjMRY6zMTcJfPFYbwYXt9W1K+/UmEFOqAnx1hA80jkThpCOeECWZiOmH5NDSkXwhb4xeTFVh9Nik/dYWY8l0iFTRn1qix4WU/YaY/OuMFqecGD/CKl4Gabige+19MLeGX5yw8y73hlmm27ZkF016Aa3DJO/LTQXzW6bC6dx738f/4/wDkSUjrEHiWwe6ag2SKhR2nqanyhSGAia9rrUgNTeFAzWU77TM6TC0C1E8Z1BF1Qa0kj2oWB3RTYBkxCju2iODbXTH2up/+suHkCt5iBucHiWu5AhrKSKrnwfq4olNf5AVtCo4g6NHDfrjPP3Qah1CqOAJirmknQsvQLdzHTQaI4emwC4C5eo04OhF9jhdh1lJObGckzTiHbIWuWMxzs0Fg==';const _IH='e737ce4d42b3f0c7c709d52671ad7d209350efa07b099332ca12604ba2fd7a99';let _src;

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
