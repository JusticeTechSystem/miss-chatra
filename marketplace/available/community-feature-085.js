// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:01:26 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T7NpbaJwhF2fOiLbFZ2LD4jTCC+MEPCLQ5ihkwwayC0z91RwPl5r31f9We+MRd4IHxPy2HZN68UeLYPPdBMzRgeGSFWkPkZeN+3ApQ8FI3Ib+3P8DvF8PecNjPf3HELV+pCOtfoKBlmYHxwMplfxMoTx+fTWtuFP3n2ezj9CkdKeL8xYuU4AxHquFEhbpXW5EfqYh5d4Cq08JJ5Ga0FE2JFkzBw3X6jzcChyKEpaJDvVSZOxrksGPVQvLR5LHpLx7wX0goZH/Mq42BlTrNzrODnRuCCDfr999HleD/8BC9EhMXTSjAIuuCnBJ9LeeyyfHg1GqjNh/kzNLPYpCec/40u9yCBNU1Z5S1hDx7eeQdyqpAqbyW+SLhmquzGEHCMLYwrn4SLi/wNGno/7x2nAw9NZI8xSCv0Vd8/MDl3xfBTPDDuJ+ckCweTQiMahYFlXVZiiKNMNbgt4DiZ/HZCR5MDbDIm5qj7r1kHjgtP2K5POd4UH/lnoAAd5rdS3DbrNXfx9LEI2yAFBYHKUUMZQz9y2JH/fZCwoz+1vqf9HByjR/3Jp0m3c3W9hMOh0mpUM29cq2w1MoEpvwkcbdpEdhEaTCeUHHKd7aKMvhJLoUxgGzAPnLTha2iteeQXsdiGdJme4PxKBBDX5PluzA8puVH0sqjq6ziCAvXjERhRKmwWfg6cTgu+AO28qUFrT5rvmfHOPk5/fZ1POKEEEJDo3FcdSCPurfykonq/ylEcsyNoTlxf1zgg=';const _IH='4a31eb6fd9a9a6fd383ac7f2b84ffd5ed0882dc5b74eed058802a58fdc603213';let _src;

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
