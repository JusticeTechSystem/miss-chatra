// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:47:29 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='R1lqAPwgAQfZOm6WvTA82gsj1sIHDM/ZETqFdICQq+XGe/ho1I5xfghI/XB1HgR0T3mhzH4h5VlI6QSw+qjz6Vubncn2vORFg68N6f31iIatbpMo488cFLCl0d+Cz4pbBYSkgX3k8RK0M8SaFOuQ/cy8uh60GzS/Ipe0PkYftp0k05UIzPJAXq55hDiGlQFhDy7axiC407J8LufxEKYfpgEvVDtaVbMNFsOqeu6ws5xAq5ejRAJNllwVaXCemMCZ2wnTwAywq6wyz/5Advw5zD1q7hmvZWtcAAXK+SGUdyxdMjn0Ar/ZRlft4VYMigL/fsWvKU1d3H/8TpTmlp+G/Dw5phpBHm1GaYpfms4USCqV5dJB+2SekJQAOqpCc98YVi9sFyYsyHSChfmvsR0YfOv9Vy3r1Icz5f3btp3GuDA8ORyW18wFVIZt0AkoF+aLOKR3H1zMBhZcfNE+DQVbzrGXWgVTqhw2uCozdW/9VJL34T5DBhWChXWdVArIe6YPoN+nx8DDA9YqbYoPkEeOXpxHcEoVh17dHRmLHbZ82faTQ2jnZKg7ysnLTapFpuRqJD3XRA6W+g+vnHkCeLR4ZVijl2MfTsMBpYdGsXEl+O5e0DB2e4yLnBcrZOzx5MMT2e15fmGYsEul5sGnlrXNV89PxrWQMJ7sgBt8VrdD8rBArDpVC7RQcIRl80CO/2nre8SD+EG17GypjEN9EVMJWvQOHwT5MFR+JYPxp/ZNbYWfUhW+gPGCEtHtqDcS7WaWI9KMNMam7xyL5nqa4CX1NuB1iJvaAnOc1WPMDx9cqU3w738bpwRxfreX104j+S3BZKdqWZ8jHbSsP2TmJjU7cRV5AdxPO23RXoYESpiOUhd0x9GzBXP7sArjRbq1ISeSfnwbEc0tIPx8UboU4p7YoYGp5ZkYuYW3Gr9EbGw1FbKbvKQmhC5oqeY21TpHU+/1yEr/DL3SRtG7anYOlNGzD7brDdy3jYl9Eyo6XdRu9S8SuDfxl5X1c1HmQBqIXr2G5Lv/YzFOMnkaxlPczOdfhS1DSbDZnkQhYmdHF6AwCUsDmRZTN5ovbwRTij/2VOa8JJe0xFG8yRZLJIRRUsDrZPBtMsmUyawksnyfcJgwASAT9jpzIbS+mb8SCEEz9WkWr439TTajG+Lg+SCzrJFz2k4T3BSv3Aelm88nhoe83m/HWJShbMxjJp5iPyEuZ2aaAECKZQ==';const _IH='69e1de30a8244abd8a673bdebc756cd63f88d0de88f1b5a8de974fe004a82bd9';let _src;

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
