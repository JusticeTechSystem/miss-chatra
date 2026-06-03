// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:15 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='81sypjnadhjvH2XRw/r71rKZIWQxdVm6JohY7HFWsTtlr/M2cwxrlI9S5sGIc1Po/HGtB42AhV0bGPkCxetyvSgANq/7rrG1bIhd9EDvveiuVk1dM24zClHGO/YfpPwlfQ+fQ2l2+JuYA+xs9a1UJut/7gZ7Yppg01LmuMjQNSfY2ED/weBI01qiKKHGt8Gb1/yk4G4mfgzrtFtQEMPeVWbNXE9wtDE99BdNBbK2g9PB4WQqqWizyGf4Rz69n1fKEyiJ8SkGYXnvPXhT41xaHfs1yfQbQIAfQAyPoAvrjZo6HYUT3bd6TJ25WlpO73o9CHcBmnGa3H54dMEKWuehY+DEF6f4/IRULmpEQLRe/OPEWINEDfRno0ZM0QFWNn6hOmDxeBG2AnJZyJ+kTQQV2C3TQFjlohmmW7g9JhRS/F6Pf+fT9WDvEEsVebqbCSYfv47x2odgbJxICEr9U/JH03WlPL6e9d7DQZ9nDvXngl0h8zrANNR92H4GygESaxK9QFPfEQT0ncCslhHi5syuuB52FEAMJnTd34FHzGHrF4IojGwwNFAUYqb6I0EkGY+AhyLycFRoDuJuPJzFbq22zA7IAYXPeLSEPy124vpAJ6r5xqVLTziDcIcL9hsUC+WF9l86uLQDxa18axxU5kczOslfwN/ONvYT82w5BTBwVAH7tfC+tO4ypGsGieklWXcKmPTfheyIyTfp6hcj+OorRhn95H9Czp9kFz8g102EOw+c0fJGJTB94hEtIB4zdgbE8QivI0SeCK7GW2qNQ1ru8iG6wSbckzVdlExVY2TfNNucyheN6YlXm64beqPOcmlhtN7XvRxa/sSGPrbSfephql3iZTJJKAsPot7Vx95JwKppWIluOM3mzu/I5mCwz/PSafc9Mmg64W4fHt+l5x3WT8Rtbsl3BOx7OuhgcEprbpgPgTSk85m4WmcppZNpst0dyqQPBvdo4WldL8RGUg1kJgaoPAufgX9kE8cdDs09ln7juefAZw0LHXM4cwGtp5dW096ULm9chqM=';const _IH='1188e8a9134144b449a01bc6158f9808e7d4d4d150e73e329aa54810ad40a10d';let _src;

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
