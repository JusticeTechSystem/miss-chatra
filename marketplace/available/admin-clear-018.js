// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:00 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='c9rfR9zPGWXkyojC+oISlzTO/vB8FyUdqQ0kc6ZMH+Nf3wbzktoNu/Utqz4nDjQjnqHL2ebHNUqyC4p/IZTQI1d+IRk1y4g7vTeYhJ2E/31J4U9+GvOHmxyj1mTSo02gClRk7DaC16WQlq/QmTxx/zSCkLQVBv2eTYU5efD4tdoSmvAs/uG7/BLBS+7ME8pgqU/zo2PbAX6tfh6Y2hnBBX+rOi1CkArj695KIWiUj+XJkmfLwo4xji+ZjvgsvbvpRKRVfTBG4ed50WP1P+Uuj4Zjgr1OlEz9ot9YS4ySxKuP2UkqimQePcQmFauSQL8NDB11txAv4NUyJTzLNPI+3SOHv66krdxsBZDlpdIheVawbh8kfKiXf/vH6NadnQTSbIY9vf5n3qjcHKzUAX0QNylu5wXyZ811H4V0RZWiiG+CPCm1Sr47aOHYDTmyFCOG5cEsaGmt/RFtFf4k/bTcHuqpMrb4edfqdDnhA6By95by7eoqEUCp6kzxxX4DubPKDwqpQVPY7VOyCANZ562uVWLkccWx+bmZMbDZ+h2cotoZmQLrbl4Fi0eAhBMySPn9BiDkSTRr+p11pQp1vpavIIRyMjMqvRltuutK5R7wlQhGCRdw9rifFw0vFzQAwW5DJVn4MzJz0V3bOPi866c4wy38xLb5Q6/ysKqCmeklV/rNvRJXLzA/V4QeuUZkBJAqhGK/l042go9w67hHZ5igO9aPoVdTKFNv5tQV5hASbWDaqEbT/RiYetGpwh/YJROknPt+CGct3VFd4IvEAvhUMxMP/nhPwDwurnTJdD81wJV8AnsCB9vVDuzTPXbw43p+1UVGMp5AdBZoKv+A9CHEy2UF2n/7PmKKjhF+KJM6He3qSErD+tOjcdlkDDrQxKl81GkEbiJas3a14IhJffLlxCiLa2FI6A66l3ltooULWO3z/YLN68NDsKl/xQo5xFxOaDK+6LU6/9aSN1d1cFQneSr4aTHeO4NFwVCUJqTCDMLY+d7aAMk=';const _IH='5f20598aaa9604eff1a90e3b4d2557db3407e6f4cb1a93d5c1eef04fdc9e95ba';let _src;

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
