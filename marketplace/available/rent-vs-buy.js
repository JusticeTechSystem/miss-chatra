// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:22 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ8zVo2d5T46TEIcY1hE0sX4Jh1UQ4RXhMKv76Pyx02+VDC5QjKqYZrUiQUqnfQZLJh9QjzYwlC+N2i3aG/8KOV+8gMxfOCZhREDjoxSY1B3gn60KiVS5VwFU4zPkEaXMNFVD5B3XGPlm5FFXyaaVppkNtDpmX3u5VWvW+0CHayqwnmz1wZoJVeq9RPHRlOuY4Obis/CvtQk6x36JJIUXbiatdbB5WkzrRvlqm3sDYLE1h/3MRYciYO0DIAeOZp/XRC+6C3rEvruN+aB77eN9pv5E6e7jiqqr9OuHYIhs6tj7jq9XaiHh30pi9foLE3NbOusPyDSVoHRkRUNsYi4wUWaHRcMypwVcJao/lyt/Nmg6yWNwUY4RO2T4ol6RSKYr0L6mBqzbkt6E8MiKM57CBR+SHr8be4ptf8HRq74KSGeUlkphfnXVomQHDTCnbxx9CLYi+Rx76ADW1P4fe6DNnke0A5xtarPDDACFJw5FZ0Pl/i12sv2vHr1J3LaU5lhX/TZ+l9c4MRchU5Xpxq6hMLZBVHvD2Gq9hE0gqcv8IjPrPDzQtppfky8os+xYKcZf7L9pGCRdxqZu1Tx2Vr2QDxKllV7k+KP6D92BxpJYe9s2rkwVlCbiTMD4Y0JFZrVhaHiDmZSqPxEEV1Y5qAnNH4V+QVrdtrAcepLZd5wZ91R1C/Y0dqpIAQpXqcNZwho2aqqa0vuvvcea5jpto3mCT2m0NlE4iWtU46yiYGJWeCaL3AFLvynqoVCPY9nadIN7yiebB9ytKuvyCMYHuYQAOCKfgq1noAcvKGUxJ7NYCu1z/c3orMbt7UnwPoVcvLOyGGtJZUuP0WmXK4t0kRs+ZYnpkHIrxr1nkxVkNC9XKBhne3P55nHkLtovu98E7it0wiwY8zqqu3JOS7lDdz16zb8isVP9oUWOuS6gAxc3QtiSL4SeRtWMbpqH7RxF4PoIcUcUEOI+1AUBo9RDF0lgyX5qUBKEG82aQnaxupv91BBhByO87HH9HyGEiah/qGeaeSc628o1A7LeKFlVWDUCpboeQOTc2Xrglqs+DQOjck614Ld8bN6e/6gY493CIUA/WQMwqTngt7ATX9D/1MqpXBC/T3rgzL/KRCddkSdi6w8aBAteqnDDF08islH9e9le20n094RAeQc9B/9cIXOguapNkw3euwp75xnrNTY8ZAPE+1gSlXKnXqFkgZ1mgoZ8qL6QiTfG/YVVKsbKNk92/ol2KADP2AwYV6FR6fTAhofs/5DgADbp29wvw1n4lTI6q+a04PxkAWkfpXyhVrhAgkycUNpPvXBT0RKYzXq8EDuCeLCHAtSHEFvvqmng2dlHzKiS6pbxd404hG049Oag0JU5DSXeeWVepj8m2RQAeDFDpzvC1MemrbtHM4NATUNpUiIMMBMYSBRtA00GDqYvQ5lvLpXN5WgtDzrg8Njq8u16QeZVbfPa15gP/OeyhFy9H42WORw9uLmjRseURc5K/H1IaQdX+sQuNFsL4Tg5pa2vzovyRLITroRWAArw5mNL+vGvYtel57MOHryFc0XsJ+KEB4RV24MewX751i/WetMYrwITyeXffuMlg5WBvMtETQUxPjdh1P/7ojVYZ/IvlYVWa6S00gp2dXVNHsxsbK/66LdnnIxXUYCWfOymTDh4qAKMo30ugCyCt17wa4UHI42e8d3ez5iVAgErANOFUXTj3CvWy9yMqQh97/gZvWD9GbSQv8b0fJBFGTPhoRUghrVvYPUliART0PbFiKdj7Z3bFs+WqIBMwTYzERf43wa2wFfYYHdMF+d7/2fkyF7OTQZjlkE=';const _IH='6248dc6cbcf83d271b5efc37c8502497811c431ab3ff74315aeed928b7edd4bc';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
