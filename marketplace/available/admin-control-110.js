// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:31 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSxvk10XPZ9Uwo5EFsrRuDCUbIiITgJV1L1OZeI1cE2Qg0veuBGZCUaBdP87lat0w1ZIYvgyTVlvXYHp0uBONiePqdwJpLp2CxpDbPH2NLUvKjYOwZLA50YFe03pM09TN8iWgqJEZydD1B5QKkuiVc3djXqtJRp0cH+sbkplSxavewE6o0QtMmQ+N7ufjvRN1JuBb/vMaA+ZkqqULgjLlnFI2t5QKtD+3ZjcMUxmauWXaEZmMPrq635hA++V6it2fNRxtxBg6qxWWxpK2Sn6EUJev/3Uq0Hsa73uZXiBNnrmmttXzzUPUIgSGEWM+md2nNOM19rQvE14cLAGraVJ7VyafkTt7WtDr+AOiWaOmbCLA+E5E2fJ4Z03mdYcjaAB0NyOZl5QNmcttzGf18Dp2c5oYc4ssh+rKYF1VXreBBeXmstpABckSOinD6IZ4cofTwi0aH1bDkZZ8PoGidHjLJ/r/RWM5NdJTdFcQBCZ0meQSLBC0Zh4nwSMKHrGJNMXve4BPm3YtLu8Mges+L4wnQWEyz7zk6zn4IQcE+rJojjFu76BcgplpvBYZUTY9GYYRzJc/ELl9h+ebfIKpJMgpfjICT8YNHcRNUfUgQ6fvBmCt66pLjkL5NCtQFKfIsXy6vEfGw6Pn8qraEgMKY9y6jtxHikcBUkZJkEQnAI6CM620zH7/evteF1mQyA9qEa1853p56CBtCGs6Vmr0O1GeOlnWuXlZTxaYirTVw3TwavbxhVH59CaLZxRlKj5szwJafRZB2VCeLpnPgrFDhmRRo0RS1eEKnzcPbgM1sPutftUyfYcaxx4LXx50YFrHRyfECL/1sSfqfCrkCJHKyKb2nDSdj22AIld6ICqAzIGJW5Zj2Io5kW09QUgbLs3sPt/MKaCUCkQoNDd5JWb7SNPOp4drEUfnyKfnOpPZlxLF5nDGmVSW6Efq6TnH+X7s2pOE76uX9PbdE7l/099XCBM/na0W94fuLELTq6VoBtWFPT0igQFtNwQY/VZpMwoCQucC2ZrSQGfJwSYg==';const _IH='138f71ba1774c8adc80aafad8aabb72e8db2762c0b4606abb85a340ce98c346b';let _src;

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
