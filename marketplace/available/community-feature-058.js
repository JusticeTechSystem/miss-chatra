// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:45 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSHy0pQbE3tl9N1vZeOCBhOcq4Vh/8M8rUYxBCa/a9HSqtCj2oNRLWlTPgCV+qPxPDpeyj9yDJQTMcHW7fpxTwFOFljD8vncd87WXWYQFSWv917wQm6qCsIznvvOkFvZ3ORraUSEUm8AeGe6Sbs5YA9KFh4iSAmCSFAB9gtTykkqi9qoTKQn4cBeBvTBg9kEd5hTyfL7d1kZeS+t4bE1ixu1OxGhPkpO5ofNKMhBZWDq07cxLNO6/S0xX+P5BcdBHdRfOvHuUddTS2HwqoB6B1mwCD9vfPuslhSkQWKJLaEQ9lbeXrxyoN4/bmV4DQzSRka0N6QgNzLhdSZlkrNj6rj0YwQpgJXBiTuhNaWm8VVzUSa/u5IWkvP0JUgi8m7AQ0JyTQxTwB86swen2sjsHvIgjzf/tZTlnzA8wGKZY6t0Sl27JvSqxLYgvxSKQXLe4nCDJHNjInZRDoj9R7ulDKZccHkoA8HIjYInH8B69xI38rtxPO91bSGK5YrvtElmZ9x0KJP1BcUEOT1QHznxaPgyBAFdd5WW5f6ZpeD00CyoZqBDew/pV1L+L1WWZ1ZTRq8xbdlcXoSbyfSVzC/+bcb7xVOamzz2E6oKYysUsWQfScY2qA93QoxHLKotK/djK+gToWvzTe5EW0KwvPZEFdoDZJoPGDXbRR/3R7CjJtHWzp+a0KJVy+4O9MzxSXgYjWXntfmSXmAzmjoUCCt+UCZa858TnfcXPKh';const _IH='91292664779ca84b97ce5e92960258eaee70fb06f6f48fbb8a98409d5cc19087';let _src;

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
