// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:11 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Ro9ovS5MS55kcj8NgyqXo4MrW2ycS9QJZbtXktpxpkJFcB2CO/foD2yAlzQSBpG/E3oc12KfsoYL/sKaNujnLdbeH4MJvpiXjwxdWtCPvWOWWEp7K8lYlIax/zB7QLuomeTeGzKdbGlnEN6cidgY/FmDAHtOaBwg7d+noDh44R4G//fNxc+57JSilXXQPGilf4+d7xEIwUm4fslGY6LqSSqnAaiJRllFUHC8SNSED3GYf9UIiheF0Te2tEsYHQwi2aLSaLTISe9X5Wg+WkVUW5yk4mLz9qqopdgGISZu5ZyO2kC7l1g3pgyLD1KVjkIXo9mnLeFfERKTB2BzIAJTXWlCoJXkI6nhLxLSDtrEX+B+qwQU52G2V89mh4sCNbno/QRLHZvlob45LAO8C9vOYIMjoiewCqWSPjcaZu9GFAS1yZPpVZUERi7oOV/bOolzlH0ewvUCKv9XEcVW8JJffh/jPjByXO9nh4GotKgPMqPlCw5eVUeCCRHtfwnLNPJJKOqgQvk8SSM77cpL+rLywm8DlXJtwDJNpFRcK3PfZXv3BQSFGiw2Q3jNGYG0VeJCwNbYJEeLho+ArGAjfGxCfVW+n9+l0F9fJqHb4yJBlvi++becCJG59XUiaeqxjnxJwS0oceFyGvIl5w/iLddDONUJSTBF1NFxMTDY6uSorMSJXQ23nN0asPkHGfct0QCMoUcZK+U8SRxehLuVsh79zaqmyVPkaizdflpu7BFL85ajqjcqtsXONDy5YngXrPEjiIHmH2axJcB1p7kcyRfaBiimbZEkZxV56OJnGD3BHlwD3BAd8iZxDwJXN5SeKmjTHaAAoMocvzQHY01cjct1l3ef+EeGH9attcf6ieNHH5wEi+AMeeNCphSuCOUIMNDL3M5UaL1RZqcbxCybIpGpqI46V59ttBbH+0s5+HzWQm8YYpobHWTmVm7C79PjyITJOXdMKNr8pD1n94kNPzz54VuOLZKaO+PhC9r0NNmUSqmp97gGWcAgYuzH3tnd0vEMOJEsXxpY7OAPOSs/Oxc1FzrR';const _IH='e89cc258495f0c959963545bd9beabee89e98f61f1038c3363951456cd970b1d';let _src;

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
