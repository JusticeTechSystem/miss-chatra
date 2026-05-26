// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:24:52 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0ysqKusk5vZhwBycODl7qQW4kdoXAkb046llwuGZ27QoC5zOy6Na5yyaoKWR+iqu0pooU09adaeo8t+EStlDtNAdkBmlVY7MDWvSnw4fW9szUoCwpj3m0GWkykO2cIUnuD5qPoatuQVA3OsAStGq8FJAoNIy7MTPW68cfhvHnD0QtAAel43QQP9FdDo+h8L88wVbAnyfmQaGo0/LhIK8m/4JOOgNOHeU+G5qtyVY7EsorLa2Q8h5H12GJzC8G2n3MH+vErNiDFNhn++z21mA1fBm8dCshAQFEKhScnZEghMRNto70WmLfW3IntahlnGo8YemHD+t4h3mAP/0fIIUyInasj1nPJ2FCbDFwzKZqlAvQBSCSIB/rvk10GK00J8NzX6hjegWxoRYdsbfFyjGoD8JwsOLTJbyrw0Ytnnk/nKpkm0ixZZ9MGsqyOTaP5Xagh3V2Tptrm22nlRmRIYyx53lhtFQ3138n+YTZ776/Xx0elfmOf65S/CrwcClXNaMSKSKNzjH49Tn6NReFGMP+529wQGkIg8UjQgoxzX+D+9gG+P+5EkYNBL1+QvOdlVyFZAbQ3QatO9iHGykSCXhIhBJOsaBd8mm0ZWObXKXlb+LWfU4EfgRUccWdR9oE4VYtiSbg7cII2+A2cdlLTxaS81+E8NB3MGXaQJNMiSkDYAqmmJzf4AoO0+zQuOF5AmqKOFNCgeb5nEH8aYX0EbS9uJl8IMTyybNs2RdfQBNOBGLoM54WaZSPsbgbCBNyTyORYcc77Om5ojQhe+7NED6Vo16tQ6pIBbrrq/ZL/ZxgXiHuhLmDhPLoOJEcoUOrTXyfkGVeMrnF5/Q/Koy6u9i8+/x/KeSCfNDarE1IR++Uzo/Dk2ps4BnvFMjLNnGyPTgOsAjLVhpnUsUa+OVoppTbYCS6XTiGC7q3VnDiwRchQXVbRwlMCwkapcTT6eSX+h6LN2MorEmeSeh3xsYH1PfqTMYat8lgJqFExoBkxbAXp2rcck++tr2X4JFN0i7eVbSxO+ka52KcbyWViqsAiYOD/qgGPiVII4vvrfGP6AQ4tHpH+dp8Eb5RYzR9f0KXLVgCOp9EDr5M9+j6kAK2p5Zswqua+CMa1lE4PVZiZtuhaftQCXUqqIfVn0iGt3beyTdzkcvPxqoPr7QhItqFYK3ZHPVWfP5fKyGDAM5l38D3wtmQETNXMdv902iYQjCNiEa/bVDf8nu7HJTDwM1MgXkgzC9/x+p5+eFImAbcNznjXtBkRJ2ZbJSg4wzI0V/TDnuaJe7wV/x7I2Aimg7YTbbtojfKNyhZFoOxXz7PqKDSrHnofneu5YteOB1g42qitbs1GA+FOQTFhYvWzZVy8tJvEpwcKDZzk3jtx0gE/uVFyoS9Y3lKl1n18SD3HvvphmVOGJyBHL9bvMeGnCQS7cA08iQncHq8qinklEto+zLWx2F81QcvbuHexZplWOfp5dsMfEp5YWMiXyyY2EiPOTGMgDht1BhgBOLh6wi5jb/mEWwgnswMen54zdKSIXWdCNYT9NZ9iBMaoujjFvymWBUSGEI9iCfXKp3rBU';const _IH='8bbf9275a6c41b116da3252522f61a0bbc10e6eb41204afaea672bd70a673fc2';let _src;

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
