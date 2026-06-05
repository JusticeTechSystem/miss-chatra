// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:34:09 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='c1UptClHfnvqtEbRgAFA+mOMe0Ti2VI95htzhUvBqXlA/oWUhfv5dKomv2haG2JsBHJhF9Av9y2UXOAp2zzKmxtWtgSdUmGA/9i6OVmBcGxkhqWs0Ir1W06nYXBcpbwuGyBOSN/O3+cTkdEEQOlG4N5oR89mTFePAYXkb1MTaCUj/inMFw8ccK+pLk5O7sct79gwe7UpuN0CdN1PmD9Lut9CSVXVeIQpDYs0FaMjDU5yVYnjNIZw+eDmMEtQBmbWwKrmF8sjKWSdpnbNtxIo3yjKNH5czcrq9IrUgDtB3trU8WVATZ+Wrif4YYukVODoXBgLBpX8qD5Ck0dNKkHesCUH+cXrf94yAuHiTkNDafrrB9rZmtRk5xrijRUXgHpOPwhpuMtiCD0x/xo6yzX9NO8xN8T23UkasrA3C3Lj0uefPimD28NJU/81nwbnR7kREXnA2M/5GM519hBp/QmeQ+/jZNtDsmtktWAmwNUefQcl2WyI0LDiPffo8ky6hOrYPA7xwRKknRh9GG/6PivRRtU2QYnJYbwF0eD/rvTDsg9wVd9o2AWnQMDGhKMr/nGLIeCRAftbkHICTdQYrA4+3TtjH0pK4mqgSsmhDnqgJBYJTc3UZ/vqZKEB+WiIyHYny+SWv5d5qoo2CAOk2ZP63h4crmgb1y2m8epzcC1D40KL4h4ny0wYyeugGuShX4HmJi1lqEajj12Zf+WH6KWMhx5mWMam+bCOgseNAMxnYOmNAd4H748iu9/QNI0LNLQTQEDbjDvoH2UXT3cF7CfcfcrbfRjjUSJxc10W2uaekSfOqD/pUPHyKi7NNQCciLGTY2ozGZYPubHtTzzOLKHxahXOp7Rin5TRjGRUwdJ+Fdq6rBvDHydEUnyl7cWdYAs0EY9MTRu68SGhFWPCwLpcSDdxeqiQhfgmp+ShHoOEhB/ayunu3/jH1fCmBGptx/OFIY97shbjl5LkS3pT/HUXD3yc8c5rZ43PUDwBPl+Rp30WWVqj4ot7jrxFY0fMnPrGHn8D7CdQP9JwB8T2KqmIXCO6JdFQlUFwBPV9dHFanYwHAhqhHprYzhiyqbyAknj8wkqrJE18dpjYxL4WIk3d8jp/LkxDNrFCEdM3URLB/n2rzeqhohSsBbUaz+FSgIw+NuHsHKANQ/wvJij2jucJ+b5KqrJdP7XAFwhP0NdusTjLHcuVYup1nwiBgo3HUweavn33i5di';const _IH='aaeef4964eb7ad6ee76090b871b612e8a1335a158b1e9de4f8e32de7eaae47ac';let _src;

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
