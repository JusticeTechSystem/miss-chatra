// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:44 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='5xBkVvNaAFuyHyadyAwsmESJKynyQHbS13452oev6wJTFPxjQ0DqLp8WvxIYIzihbWYVeyVTPmeDqe1WPsEOSyH0P97lQROjI6CRal3kQksUMOPsQqYszOd+VjE0/MjxMC8El7beCCqwaEqFOHrQdkcasH6cJ+FuDHq8aKg16JXSiFOOZVeMhfaucYX77Ki07zph4BOWzOxAPPGehGhynnC9LN6Pj0WWMXek1FnbDCQH90f06DtwWbxxeZC68FW+eUdHWvkmLWt8I1EfOv4KQyRqFlcFCT3w3kiIsj6DZRzK/+Po5eI9ELLNFuHOim8xImny1Xt9n30F3Yjf3wwsMq+S36pVl55S1y840RiLPsrZoFckAwKbD+n9/mbkTCki7SUY2G+XsFasvCahbEGV615nAnODda3oPY8clYdeKQomeZtc04GJr6L/+uaZgMoV/LDgA5cfaXAn4oBhhqxFngsoN8BvPWdx4ljeB7zRNSpkmxU4VZdWfQl/cNZCyqiza9i6xHBN6lfLFRK6HT0pxq+0LimM0OhbPwEcalmcW3yp5IXrJKCiWvBe+AdEmi8N2EbCb/pcvzDqxwcV1elycXTRyJ5W5HGGYnu4bicBz7IHSxxzENl0AEyWLI2VH37hDReYH20llMXP/szdg/VLVbZUtQe3YHRAWGDAJpRkCcem7mStKdKrthubHhxZnaJ0GtF0Rq15L8AN+lJlt/LYBST1lnsevw6vMXGOWjHQeXI0YACXT9ec30COH1zGoLDCeN34sliSE/NRsJX5YxOzESGY8i+oCWyJw2FX67p3eob1OYbXTojR2sSI/2MNUVHiT7RoWA7jQbtE2a0JjwnsmDvCp1Z6rS58XQbdU5SZF8Hw2MAYgR8IcjW8Ag7dInmIbs3mXd4J2sFT4oZd6CuERjq0FNBSbDcHb3yXXMSzQH4WeltRF3ahaso0fL5q+xqMHq+o+I4czzO/Sj6nxWgK3PrR/YwwZ9/Q2GvT42GA1Y3vo6LS6UADsRQpdJ2a4J8p1/VwQA==';const _IH='4c57dc41e8a3fc048bae7ba23f479fe2de138fa3e0d20669afb1d0dd9b8c3e90';let _src;

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
