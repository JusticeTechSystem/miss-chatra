// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:00 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='rx1ySPrQ1hGaaDwVKI9VqcKkYAAuzklhc8NgvflW6uC99oEIJ1EhlDd3WfJ2c0qlscbMj0DQpy8pWclrWJa7qXyotcFy1wVddTSIOzOBb8VCnUfiNyT6QOLtwBkwwP4ELvbzMglx1CMrdrW4HDhPgpPcuHPPY4kOIu9tcUeCV57d00vJVn4iLsOuuNlTwjAcTWcS70XO46HVk5T/F5iUPsh6t49+Aagh2cZuwXh10nhSW7dWQF+6VWx9iKNYz6cgpNI/diqgIoi9YplRFjcFWPkf2NueJsjKm8I3lvxYE1aGOTSJAthuHOsFb/cYFwqelLz6nHElSKXdJfIl+IZWeua/PCv5kKEjNukjoNaRDjML8bR6LBfc6O/MsyXHV53G9XXTOMjlh6RQwzD8XuCJHda5yHBS1VjOF2cGcOp84dqOkKyyGXIS2N+kFQ8RQbMp3W0GRSnlZQPEPGAEvN6hFQOqZUSuIHDDcMgiWT2oqFBgzc76tliQttTpWU2APQYpycsOX27dzhqsh9VigW7QYsdMelIf1T1rBk9uygSLkMaxqzOGSAP2eCC21yI6N8r2K9BmySQaaKkN5HkFumrsT7vMMNl2TUlc2esI8RiWmKVDKsvSX+MWiqURARXwXBnSPDgfy0p70wDsBlfjAeEPYuxhKdtPtOCwyWci5v+blRXu+OcARTESnQs0w2zik0OwohPabDH7iodNkQCszRPq4C5UifBqQyLD+3imxubH4WZtZDYAYJ+GYYloOJdMbNfYTjPVGtERINdBx+yX80UpSmCnvE83PGDYvM+eGofUSfIaqclWGMjtbIXftJUtWyhlh4gSW4qlCHHJ422IdOyGZlq+FK3Atte0FEUCxqFJBNG4oH7Z+lrqwFJ1YMgwENML9Ef6M7c6p8olR4YDN7zoiIaMWg1GgH5iiAA3DvojAp/eug2L7ZCdnAT563zxyQYXMFC0WSK0UqYB+C8lFUC5pPIp8c4QoJq/4kJmnWT3Y0WijJIZ1xyhOkJU8B9Xmp5EgQ0Crq2AsE3T4iVI1hcN8YN9JeidBXMtBamCmpm+S2Pf';const _IH='6f32ab4d3d0a59e090c95a18b816f2acf49599cf74b2b6de0b3750845c487751';let _src;

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
