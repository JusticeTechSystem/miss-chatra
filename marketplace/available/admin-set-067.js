// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:23:57 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='uteKKjKlk/IEnze+U1msf1ItW0Vd4U4rGUSK+0tBoiTT/n/j0NLOussCWrjKAKxpncdNQUfvQpovpU9ZYSwVOxIWsDQKtiy6/2g7LKMjOtqs37LiG0JqoI4VDkkrwr+v1JrLMOstTtf6IRF1n/9XyAoO5knZUiVXss9cAfsFzm8iDhjtTre488GhwwHE7RBW059/PZain3D/yx0y75U7BKAlPk6zLmx9XVB3WLZMXiGSz+IjruxFMobt4Y2FWCLKIipa1AVN6vBInrN6PEXO9BgFnAh5QsGrOlxp3vRDj7vD5+Fn2sxwBIPRfPJlENTP8fhHc5oSinwfSJbPcXiJJCZKDhJMMw+JmLImyWNDVxcgICAUdgdGWza4nrKxQPsccnDj+/bap8UfxPtII+45apRBewPBKwLhrYPmSwvGKBWErweOgHCUVHpfiaoWLUyo1d3zisogCWxqlDRZdLjc5/FoaxP0JGVV4ob9FPdXPTtK0Q5mYIoAE5mhSr2CxtUhiApmrI6TSNi4HDnZwY7rTU4/P9snEVc6zJ9bNcjPcTI8JMpYyn14h5eJoVWXJhp7+xV3T2XxPZ0c1CGfQggKHq+0Oo+hqTyQz2ZzahGUZK2pnBQQ+6OaiWhidnAZ5Sy22AjmPkyNt7V2V34XJoDHIS9EqOqsZeDLbQ/HlNJjPxPS2bI1QqmXh4AwB2Ilm/5dmhdIaO9R9bX+Ww4afSahbMOUBO0054CoryWuFBmhILCmO3/obSpviVPlcRn+BUQkCDhs2EiTHeibFVMf2TYXpRJBQmgQksmtzostNvufoS1PnIv9xiDVowRR4PyftQrdO1NfU59xw2NQu2AIp1moaaqNIGhT2TVBs0oChsJod+FfaSGHiNnNkBUPxa7LuRHqbu4jael6ImaRlDua26z4dQyg101H4bAwlIoN5M4F5MOsAZwPNBjnxPHdOig00/NwLsOSoMutdPaqZzp3p77vhzd1VeY0Z3GV';const _IH='032475621ec0c2f360884e32dd1a80fb5f5b796dc277b4f8988c771430faede2';let _src;

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
