// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:49:27 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='wOvsbg4OwBym6bF+WduEC0wim4/KjMiJ4eNggjo2oj5bxCzlpiHns3OME90XlnqmMVXKz8WzKvo8EmMT4gT8jBJQRP2PnYX+qhjr+Y+StrwCccfV/4puDUzAXdzKV2BcFm7bzfuVOoqndN5zM0IjxpoDcKZoOqu6BWdwrUxT9j8s0VYAXvqXeWHN68iAY2pjlcOAPAcV23gxD9lhUK6yvFNecrbJosdkQD74bkrqsqtAkD8JLL1SvGnbR3z6g5sgNxl8naMH+8VuRMIqkYEqlfSQS4iLcLaNy4DzGHcxwanzZ/QOsr+QOWFFB9DSQS2vbpUycH92WZSUZRJMJVvf1htbTEVab+D7ZfdTJSYZz83AgQmRWwjSE9rlFBgKSU4ei7952bD+nEIpjNUMZnxzE+v/R7SvwOj63dSbJ0blncGWP3He+arzzR7l9oS0FTqcYn+yN9crvZhVmgw5mb707MxVqN951njDUFbrmlyVhA1JMegGjiDVDwyEPiIAyECVnZpHPM9DWiN96W1Df4nD0sCYUy1mSSvC+l7Qhz1nvNhGApFjS01Ut1Gw3vanxrjMX3tXEDyhGQWKo5QVT3WatVv0FVut4x8jFlvZBlWpDw+UYmRqZmRkyORNp/ik5KQ7Y5MHYG/9oGVrm6fNXkjWkcMBtCP2QWsc8X4tIt2HwOLgL8W766FAJ4J9563EiYgydjiWGRi/v0uvfB1tBjL2AZ6CCzUtvKUUbfzbIxkFYeGxBhxJoeteAzfosakWMSVhISlYS8y2rBS/ond/xYWs+gMG+dzTOzkwxWrPcfmg8orJmGjwFWWQr2XgsIP/9Cqpz6E9fw6feHkWsmQMsMo7l4T4K5D3KgkTTrGilJitbpXhNpY6n3W30mMFXhUqzeBnRDlyOjb6Y7ZE175iwEoTQA6/zNphpz58vNvXk2b6OtiWUGuIqVJaygW7XYxFdnnXNTswtxehQcHPiLyNX8N8rtHZHOvkeOX6hF0pjYSr6P4L6rH5ssg5xjHKltArpRVyOQ++9jkvqHkn8/wzmRiNdDqRqTsPae1LPWVSig5iL9QZsDgBLrSnCmdiknlahhfeuwJS9SnA0qtWxdg/l3hGrywdJikg48EL//j/T96YA7WGWn2TxzAdq9RTq/SzW4mBOwAw3NmF+OjCARhDPOJE2yGPstkHdIgRiRj/JX7DGSciYIQhEBvUXDaDh2VdAoJ7jQMKCqoXnTW9KMqe5tPMddKNNO7ouWKppfTG9EGjx2fAKDPfXHqskDiK9uKRJ/ENeJA96nHw29VUaalAJT/RZm4qCgWxJvxafB7j4uKdEh4Dg81DKTt1E+03VzexE2IIfdW0/Giua9q0IKoqOhOx85kxNyWJGyirrY6lpwJK';const _IH='fb30fbb4839e87ffbfb3fd1d5c8f08e8f1be2b1186036d5ae1558e5aa5b34a98';let _src;

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
