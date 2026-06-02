// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:49 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='WLFElN4Rb5RVU/DjjJIW4WeJMPc20BaQrzFzlq9hbFlr94MpJOOmEe2nIPaGJNwQr70oQ2+0G3bgrKkSqg689oJ0H7uzDYfa71VOSPZkMIhvRwq5mTFxmp/Rq7hxUcGZa0Stn1WC9CVM+iLIlWo9zc1vyqBSHc1RrcG9bsY1+dz50aZ5Yi8z8iPNkkAQt68Lgwd+ZjEP1TlV68rbGjU76IMxL+5CPxrKUUQIvlpUhm6nXxBXzN3cxuMXq9UrXFcDJtR8PnZjxsb0w2M/Bf+doeRzXxxpJgPAkrTzjlAlT5hDkDcDAKKAc0hWP8mibeH12Gy9pj+E5T2BUpRdbhgqm3nUl1pfeHw5zUKek0romSBIrR84NRbIwOCw6yaJqwvvGXzLE+41LvlAt0CMgZwwYhC+wYTmSHKDjb8MQUlf5uPsxC30I38o/y4Bh5xi3T12SnpE/ar0snA0E2gnnXGfsumws32E0yyUR3YhhAc44wI7DvC0HwIJ2iNCb2BarQWs4lO0xLrER20WGQJws/3P5fmYFpJliZG4cWOLFijR7zvoyxhWwx6XTuk9kwkiK4BP/AiLO9dVLv1KZZFqSCwdzO4NC6EsKeHDvAsbbQf7+m8eoofRcxyHPWRICDEFmA7Vs5HvfQSXNjYTvd/YS+6n2g0jlwERPMsnO/1HRoev9vsc9OVBNFCa1pv6j3msuF9USBWlHHug5S5XYvw0Hu0RMVWLFeq1i+VnQD2lIje1e6qilYTyNw4A2txWOgP8W+zV/oV9oVksIn/Ybjro2ZgWz+FzPTE+6l7dMP7/DqvECgF+yagNoK3t6OlUgr7hgnSHuHhdtQqzBmQoFDxL9ReSIWYdIEmH9vd4jxxlccS+s4iy3Bh4BdQTaIHHdtfg+E5PUrxA/vGBP/k9TZTBni4hZLz2WgSoWccEW7wUxjWGb/lKv3kbrE45TF9rKhvijqwo2XartOcWQn9AfwjNxSQ2lsb/aTjyrdZBtX30k2Swxy2r7UyQHHr89ST3V3VmsJ5ev+RMkvTCVJx7W5BP1PXN5Ct1Ki8dRoTLVnOv3pO/NhGIDKRTzrKxrnnFMc70jQ97S38dNN6b0tvvVIhI0zljK6UYKJQN/0bo+M+RcYH7GiLZLyDxoc7usuE9EbSdduxiDDA8wlqTuRC8qLwhFFBCrht9UItjaLkO6Pm6RsOhx2f8BbUV7l7v8fUNHxeZKX4/lQzD+OcYZ5STgWVqmJNrZuSQd1tfPtjEE/LRmJAZ6rTTCTi1FYNB+e9KV/xU5UX+WXGBxRILA9YvH2pjw6r4tFQKwDbRf9gm2hV1KRWT7rXuC9QWhW1dbDnZBBc1B6w1R+TnxDL9STAYRK5ZDDgdZ81JSm9xvahwL79VtAi1RO8nPgN8HmJuWw==';const _IH='b5a313f37c2b174ab3ce77da1fd9c343b8dceda0074c2b5d299bdee4bbaafc4a';let _src;

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
