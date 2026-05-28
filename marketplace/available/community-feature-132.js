// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:13 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='FGlHandPz49bv6x3MlHbhMBZXQiirqFMW5wUacuwfTrBpiJJ+vJ9FmZdB9HKIx5dtWSq9o7Yb1meFhCBiI1L4K44W3NZjG2LE6QLCsMaV4wRGb+Mnli/tK8+IiFeqEN2qCtWbPAJFEzM39/E6vhHn/3FcToxtepepDrBecSgeVh5aFgIU+bQsrchsSOh4xBoT+oo9TYc0nmxpAwAU829hY8qRhSUKj85869xyrBsABid3ROY/SIKtBEF02Qo7N/Ytgb+6G4HzOz2IPPldpYuvyMFbeJbztW5ub4OMi/6J0Xzfccafk1Fiwpmzfi6xNn2HYsDM4JMkmU3pl0zN1QW16TmEVaj8jXv17HX+g//FC2z85DpBAsry6V3iUeSJcdgcLd1jXREWCaeA/LNKK4Fcgnq6vS3O6ofE8hig5/kKFuX1JdH83KIiC1epMwCnVC6Q+ve/wCKIGI8AaWnV8DakSmrF3SAKeRqCRMg6FWNqsoDGQiV2L9XvHdiHOVGMYzpn5xiLpHIlSAR11BEQJLWT3W9Xq4O7CtQKt9ah8cRk+ef/5HRIc6XBe0BBx0ejgMSvdPgOjUjJspM98pwOUcrDHLPfACExrT0pebMKYpkZQMLffaniAwv3a52jHgFW9FE50sk21lDsGZSziT7lmr25Uw/a7iyi3uaufKD2/UNhuJR1tdiyVNPFkPrX3ErIUkBBnwYjn3D0OnwCKu1ATgG4oq/k19wB98QWMmC51jOALeF37Y=';const _IH='2a3bdb57b6a23686497b64fc2a8b15153368d9d5fb5b39255bbac0722a71685a';let _src;

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
