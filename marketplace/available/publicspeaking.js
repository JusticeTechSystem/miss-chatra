// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:32 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSaeHwSsYqXSu95r2EF3tc8w2R+b9Xo2+bg64pL1lTwdoktC/IiN9S4Ui3JBRzT3f9z9kLgW0PGtIWp7BCcBS9lXlD69RP990/h6mYIR04a3MlJcSKVDuyfwdPI0qLjln5klmIENZan27OlbSPjJ6BeUFTU6kd4jMhlg7cYwUgWefzg9yaBerbEGQ0o2zdebqm6SOn+ZJ6HasKETJshDihH4EcLM21k1K8W7rmJFp+pBKTC3mIAjRZXtlqTGN5csaJ2MtctdEsVAaweorG65a04fVxWGs/jyHdJSttucwEWukFUebrF22pRe6OY/ZlenLWJvMzlkebZZnbO8yaXdpIAWgUiTBVh7iRcNaPHZV1AC600EbOaCjCxlRI1qWUXgCu7w7ZzYR60SKGKRJ84oRntOSSTXBnaAeNh3RyHaYUKiCWhCZNzZk7oqZAJiqJ4fslsP4aP+vUlXjN9w7JG9bB5VwG1NebJxeuHkd1r7XXsBUSSayiGXhP2bJmM6FV4J3tR5g/19NIXkYTILZGSqIK0iIxqNq6hhq4keE5IUi1k2eSAx66kcrwWoSnnp++VOSYCzxZzCdEeOtW3s47/wrusuktpQ5I4mJTFUheZXOAxcXemtmyxA3QpbKvX4AHRgRmltILmNG9OmJ9x3D8uIvikZ2UU+0kIjT4ZQW4aIk2Lm53ECNnehpH+eibiOUP9LmU/OoG58WyHHEI9QmfUscPfqJqucY5dn3j1r/5sVs1EyEIsXOxOcRqy9dW511ADlbIIkKOyeJEyb37RVY0mtHTlW7933mi9d54S6O0z2hQ1AvZ0QuA0SlPIHRUUNAw0rzViJeiRVwe+9hhuD4IYZxV2pQ8RmRQAsC3Up5P27hI0OgSy4Lgn7xLjT1kadm48UIsTXDw0NN8B125z16hOhIDRHWJO/DLWcfLCjELFPnJWwNvobiGiPy40WFIBS1IUt3gqyO9+KuFTCij4/b6UtEzGRd4WAi06HkUuV+gie519tye9Zh1eBLsu6LQgOCmpYir8oYmimFURnQ6fiZP+Z9DMYQ8B/rEgtWFYxYM5zjv0BVAIpZAvrIlLdn9tEevPfUUF3OESgq4dQTuGzy+fIj+F+yA7FmL3BG/yRI4ojrlwS8Z01TF8zyStAj3lavfvzLvZsAejxzglEl3Jec4G4MwZNE91kZn3zue4ByW0pY4jgDcELcPecRQNAGaWJoVlt7s4+nLdcFm0gutLFekWDw6AEEc=';const _IH='81fb7f51eea24f45fa875d2c35a2ca6e8ddf1655092dda823a720ddf7d89c138';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
