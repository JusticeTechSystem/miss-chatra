// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:48:30 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='guLghwZOgmi39LklAjxH801M088gP7uyc/a5GMjhSLSUISaHgqRjnM/x1aKcCIWO11otjiCi3yBpxa3VseWnoYQklOaXKBCyqY7/VT5BZi/fXChN+7HMlnFKvKC+23hX3QlcAOdyeJZVCj09ODwc/xMpp0xW6ucwCuO4RydGpn6P2YLAyfsSTIPbj4RedtLaq8pBfaFcpzsvDRoPiGHD9aYlz71OGvjdDNpl/18lpGqJC1T3OUa8RhWo7LgmuzxIGzaBpAhm94/GJ/BsFh6a8OLB8a6aL77mkjxGtCx1kRnmTcdZnzYUrNNkHhVORu8Yt5uveglRKWvOfaWyDxgVIp+TMeJmehpXbVkZKIVwn5wm0bNxARN1l2JtEpuVVgJK3Qr53tRF02x3SUHl8U6/CVqni95OM008/5mlBIhr6zLRMS8IPGxAo4CK2NxAjPSfDoPbnsGDYSNcaVxnNefFX4HOKnFYZJ4PfZTAzJZfaIiRnwXEkkuHDVosgBRMnpG06Wck1v2HT/lUx00BM5/m43lFytf+85L9QzXwIM13UfP/t9G8ejRRnHXrnr6GA8ZbrvHKe8/J5j9poO5jwxwC1pVRTtxelANFQj20onNzOlQMWMtt3fssSZ2SNDFVCekk1he8qT5EPOdTiJA5BufBS/BrfXfyUKqdqgZKZbvmc4GkTfQil+4o4yJzBhInqhTJ6xqxRHATKvT8BLJJNbA1/jz/M3UqrA7e6V1te1qk1Vp5sFYlmKnoO/2x7R2tG2iOn93aaoTUMnBHV23bpuxye507EoyZXedPzI9qb2JPxHeKYoiSZWgYE4WZmHNhG2mXBho4YVhTOukiRQS3MaENnOPGU7RmPBNidmakVjob+ZcNLwXiKLPvFRVeiGS4KLDnUSC6ppDdJjapmknLiG8rqCvEnBE/7IdCfgWM5NqSF0v8rg8y3OwOHe8wNMkLnelSPLEu0n9gc8F07JnXxvTHrAlIlC6GiT/VyZ/rJndfpxjatMGl9M9K1bRLwu6NL0ghQrU+8MluVedGKCz8fw9Rm5c1PHSuZNQZAlKXj7ML+DA20QiLYvoAR9gv/M6HrsvXBhJO1Vqh5ag7SZRvFoXA+ttiwQJdbmwiW6E6ppNN0UuLGIjuYZvWUq/ogenU8XNmQbs9iv9wzW9Y8ZxgRFdXD9wW07hwt1ZauCcda+pxTpE0hNG86gsSFM1ZApzycqiEgCXGbPuL3IqkDMGs+/EDD6GLTznXcLBQZ4XtYpg070SUD1pQ76vBKR7MgZQrXHpuG4BzW9SY8U4vycnXtsvCl0Z2L4JeSMyHAJy0ltyInMyH4AK9NaAZg2Ei99Gwz5Osz17sfNHNAsRVtu+8vnYrUwAxX1y9O5PSkG7BNvaz7y3FumMj/Pf59g==';const _IH='a9f8f618561f902401b313001d1e4b1ba2c5f72546d2da144a3637848982277d';let _src;

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
