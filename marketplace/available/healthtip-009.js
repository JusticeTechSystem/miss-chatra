// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:36:14 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='0W3RrSlUzHCw1TJQIjFYWps3zzdaIEbrfJIZHgMcXbcxyosBnf/aVOXcowmNeHLjMxgHf+TtTaLuWyqPLDGlxs5qfJbOCfao90jQLcVegV4iwCX2CYLO7NP1Yzr1Or65EhOH/AiQhuxkaz4qLvkYRmUqRkZJ5sr1lBfY85qcmdNjTuGHihJokfb0BLG6hQWuR5QUR4R/bnoiDVk6yLsxSmb9rxXh+hGtj06fkmmA+wBHR9g1QIVbZtyQOCNJtnwllUCi9yGwrcSlJ0ME5qeR++AB/DHUOqKRUw1z/1MTrx9b8GatlYRC9d2cT6ysGJ34NQIkP2g2GluN8qlgoqqu7mahgKU3GFx5xnrOmH1sasYsd3rqq6KHv5yuDoW6L0JEgNlkCGXz/MIMuBS9mBxq1leHitTMKS8N7IuGZxwRaBfgOu1vrgPLvrjXAMUO66VTMooZlL7gGvFBL3yUW1EysVPWo5AcbVSRLHdTliPkbePXNYX4A73BtsU+PUeOIOToJlh45AzVBCpeSxXBwtcD1zUl0zoXORs4+BHEBDKsI+IcJMVnm7oynKC0SSEOCn6zjdYCtDmRgYVb/mUwJfRp4kfALfUiy6rWureT+QkXmANGaTg2WJSQ/avoEOTttyOfyPz7Q3FDbhSUKEsAuIgSN7Xlv4vx36Ir1lN7HqzRYzsy5DqNrq4nRY2i9oh+obNd3KCT5WOJswC0Bcx5XKiLsvCJEFmfw3lPoa+ieN685564NcjbDVT5Hb/h5sdznWJIgq3rcr5f6pieTdlVBhrejq8PQji/nSSGiaYsOG3slY84kdsQ7Y4QvUmusUUe3+ilCPNHgfd3aQrP94sqMCx97jx4Nd5+mEjYyMgzPaeVM1REeO4AuSNUZ0iIBRWihbA06WnhXf3YdsK1Cor+a14cXGluRhnkUE2s4gRvYXRJjsTtNpz7D7EwDg==';const _IH='e87db6231317adabb38e6e68701aaf9fb446666e8af0ee75947dac8d3c600bf9';let _src;

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
