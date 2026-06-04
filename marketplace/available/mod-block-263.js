// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:47:58 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='9F6IkWjQreWqESzIsaVUwoYok2nIF2LYxo9gkrikvdSv/dNoD4aDa3aPo6sVqPo4IDv6IkqeWU8aD2bS+s2POYafgHq38kvRjKM2iNLVxcO/74YzfqJawrbrB2m08SEWBNCyf6HobU3P6cp16tqMZCbtikSocrzSgIKcHZzcbIqz2LRPyKw+Nu+WiLypBNUatjeyrzQHq478jG/3wd68FbNPHpK4TMLmMoww7ZMJcpL1E4+nzOrJezDaKzYMDtp+ySxunQqEqAXZZ+p52+UinGQK7HqYsmP27w1aLBKfEqFNdv/LK+FDuBZb9a1xsK1NfxKtVIgyUZU2DFkwfSe96G0KLbhfm0x8SN/L/qD2dV1Xe6OYfEwfCHwwafuwW1/dNWzYgrAV+t+WJjuvR4sqdcAskfbwy1W1VNuntuQNDbMZv5ou2EVWSSIqI0onWk9RXuameWBqGcZ0QEpVp8tgXcm5rOxYQQrw0SHXilN1C8Agma6OTvr1mn7jiKS7zpHf8woBsAiQFZCNcdYj3r+o3UBLVUagM0uHGHQNHU8aaIzgzz0Xplftwy9avtOAm02+KvXGUm2/5o5cTVZEYND634OWGOi7K0necKmjY8LycVIcUsc7WTgb+AnYNI8gFRBrTtjJmUWPkOgUJQOUHZBgh35JB+BP2I6VGArkDOCPN/vdC5hqlAjKGGgiEj3BMr9mwWlRfnZJmLSLHm+al49Zb1PT7f8r8M9SFDgv7BMCD9M94wTZaOy+6j9O5s0StmGaGBfLWPeXwYKpfqWj+xYD2vdsB21kljNMUHxtg4GEX1GULdDEFSJgXSMDD595IsoW6ase8aZTvuwQb5COVJ9xTZ4h7dR9+/4JyOJfx4QmzPmAFfTgm9nXUNo/mn4vzxQ4YCQHGSNeGXmpcEAcH7jMihuvJO3NjLLk6A1RG7hqQWmsrx7icdBQ7imGO7HprgYhs6qCKQGqTapxiEk5fmvMNSc/ZYfdpNFMWRwn7nZGBh36a6Z/tEGQxUYwpHeoa+YynYEurX8TkZO+zQ9iJzwkjAigudlEda7LzykFFb+JAxQ4C4JRxlIzvy3SfK0F3J7Hh6q6jCZKJyjP8nhrgLNct60+nTuMEAglUUlFJMsK2t1oooxEFUokxEpLZUtzZrQJLTSBuyMWTDm+0okfpLztXd3y283UHnsC702uUdNt058tVd56oC7o1CHSn4XGuILqHZ0JYeBJtxmMFLo5nH35hnPVWxVnX7x+d/thadpN3RCtAAOqx97p1W1HODOuXKsT78OXojOVwdkaXGZTyxUvb28ahg5yc6MYBEzAHYslX3slU9eJQh67Zv+b4dtvJ/uEmDaFyhbEkY5Y26tTaaCLbfW+iTKb7HALlBtIYSBd';const _IH='ea007167dd2e74bd08aad0425717590e6b2edd4bdc84e25dea3fe1416963f53f';let _src;

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
