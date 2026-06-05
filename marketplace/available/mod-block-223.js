// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:03 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UYySuEeVBWBD33OugcGDQ8eq6yPMFi4pIn2DbOyvoJ95aakLNUEZLqWMS9JTT7OGP7WuG2hFlPxXExXQYaa8dUlXCKv+NP7sCADmqQa5Yn0z9N0b/CrWBG79yoP5GYmIcFEfdhLxahHcbPCNcuArs30x6ZvzqYusOPQ6N3VmcxCDHSzra8hrShVumh3jVDbsymC5zaeILNSymTZ/GVeJdnX+3DPENWdXrznILgwstwNpPHnujP7e6+z7ZiaE+NygPrV0VENpA18Ba0ovVO8rJ8lWvN9W6cdybBT7AbnoW7oGAr3cbgr7+fcu/fYh8nUmMH55tYNWGAP8kiyZQQyuSDk1qD1ovQuLGvnXBh4o68nUHKVspIHT8GGh6JI77mngxgMvaVoQQfMvUFXusqIAb+8CQuNWvWHflXgxgwf3J5VKOGnn6kuiZw27CLBZNrKa5Vg5M0v96hJaCfecLYA+XZ5P74wVi9X/GXyRx9BeWC6oeP/y6LL8344ffd2Z/bXFr9ZdfFoJ6SA7iSW3W+xA2zAuVP59pqnmFtUiStAWGzHCXv+Wd0k4ek1rX1j06hFUEHnHrriZIPefsexIfKX2N01LWrMW1x94KMaPY1RwMizRUAedyLlDnDZWlRoYz2NNJ2NfGSDhcixHzqj44bYjEYiz80i4b8unl2QbUGoj5B8tajXNFWnFmozBg4e04bOdw0AV6nwuyuzhyIEkVMrEWzddlP8Y2OcDFgtb6Y/y4EkKtUM6LXodA9oAO9II7KugcgatqHgQCBvsL2UW4DMqGEUjbjOxEHgJr6cPDiM4Bz4UvYPzRxMCtCh41AiCx7zUzvIATS4rBgj0bpmcYWAnkqdoYdULScl1O/hbL+8iltDKkA8dkcFfJxms2g+S5ROwVWNjyCQQm9fh/DO7x0HmkcdAwIv8X7NbGaeWcp7tkwjNHrm+79umk+bXWa6d58F0+dfZC7mst+7wL0/IjkNKW1GM2Rj5bpPp/OIEuWaeel9nKlDXdn6S4zy7Zt0CyQLGZwP63Bbfo99ySJlfZ7a0Wflr7wJM8AWUx3uwQSWYbI0QKSWeGof7sBBTdsdL9xePxSxD/56pQXL9PAI3mHk8jRzhte/ud2rBFdgGcXodhfcwh8wUN04DKrGjlcYAewPDIgg6NkUCorTttXPOoi+LIMQXwY3zjxawTCoMEZvzlcHPPt2Yg/yDsXXDt7ZgkaFqy1R4et0EulhqvhhY106+JFQjxOHdNh23heTSeQUcORdekmqQLkT2mnxt3KihQulZWC3N93MUVltim4RXseOoH1KnhvgdPFSsLzVMTIqmOfqCSXsSEXuS9F+E8MBY2t2L2wdpYXT8XO8M82+CNHwxoO/YY2wP8FCEFwchN6qb';const _IH='19650ce474b6c5b5c23389272c0a00da55d2d8d54ca538edf653b98d35f3c9c0';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
