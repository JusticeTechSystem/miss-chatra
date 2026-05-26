// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:44:38 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='fSddTb8z1FMrpSiavU4m8fibBj6TdIDDc1ZHsLEkC2Huv0UUjTNbLU61gXuHnJT25t3mIYSIHEphLYzj4VW88m/uYyNUvP/f9paPA4M4Z/mGQy6xdUos5yoyQOfuBZ5/hUTXlcezbDs7lKKs1LqEBX7gP4MmNpvkweTBt0sUinOhfqGsTX76ZVC4PZ6JBGcnKC0a42V8MpTNllQSEKXIj+5bHvUaqxQIDfY1CI8w9lcLkqiWHeeUgh9rYyChazYcSr/6KxIGt2+7mvYtCZsbCPgmiAdTFXP0FjQywexE8/h3hqmIjaJn6lwSwTtOFGSSoXiMIBFQGWzCPdRxA6VEiMFAhQyB8VAmlgeZOijbLd5Z4K55cf5bFHDl54469e2fGUQW+0vVzihPC1JFvhc1H3PEvcIEnCpdGN2BnLsdSSn1N/hl9HOit3MEhQ8U7azvsyialrzwvfWbBOqCudyPdqCqoeAD/do=';const _IH='a7f251df4527b132dfff678df3b07b29d1e7405eb02be0c0bb66a32ee4f10d2d';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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
