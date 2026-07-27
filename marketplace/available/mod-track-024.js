// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:14 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRsG2LAL0ahQ289rG9pz/jf7jg6RS3MAY0gByWx660Q1pXdle8ORV+9GV7Ds7Y/XGf+ooYiP7YcXInGyA5Isx63Tz8Wn7uU2KNEtGV4AcCOQisblgDjwQGlE9ubKdGsdXOlYNZk/X3rzxjeNMXiOwzqetbJEQo4VsRLbCtjMgnCYqMN80LEhUPxZxuus1WkbvtfuC+j6gaOMr/mHyMprLylMJGX3YlyNx+apc/MbqBOoP2NGgwaHKM6Lc2BiFujwlcp8skZinMvk+UlpV3Aww/d8BpSJioaR00t3hFvUan32ClLJdMvucVYJMPts7avyl02DH1ytOoLY4CjnjKFOPDO4meyrj/gNUbQZE/EbWpcaltHjvf0Q4FktNN2GhvXvVPJvrtoXUwfirkLGu/x63+NHn+/MITmpOiqhUId2A2A2Kdjm8m1rLcvNMtI9bfBeSsL8/fAqtUibiLhrABkLZZRpeepLtQU59IhVmlkHUsx/Izw0o5GyRIKCQcc2Y5SGa/OTZscDj37In3unVdkM8upMfiPI0MZJXzMXHVmed4Wn6ugEUzOzclFw8cWowhpQEQsGMCxKcT1gLqg4yEwhuuWdxnW8r4XBsshjXt/+RDKMcstcuHShAcOprdwoU+d0gbw5HHQKgffmDsr1oQ4JjtUoPd/rC97KC8gXA1AZAYXSzsnt6TktZ2nozYEFt00W1s9pTYi9xwTv4/vBLP8S1r9DQyLf7NRhL+Jn6uZOugfK60zlDgQ2B8cXSQue/Bh73aW2s3TqkIIFUJwxNqAcNMFRhXO22SfKZaalOvVoO6CtroK69dogah511LBD9PHNyZJUK8X2WkGMsRnVkFnjWtikJvQd2XEeJgqC5PnEknF7olvBZ4w52jSpX/CGQG/nD7l+0scC1aVKeH5WOH28LqqD8KEHkMYGui9ML724rI1IvfSyM+LuzdwchaUT6apeWyFtdqM1ClwYTDc581W06xRUVEBmXy1Dp6WW0dOb5ABnmaXJiWJE6GaX29jwnDVGll1YKZa34z4BD8ScqeSWsOMnRN7E/976CpTuV9MGuX3+sRVO2Ey3i5qhkJCO3w3W3sqbcEtu+ml4xk53hmmC/L4K0Gm1ijl+jgK1dWqyTatZSEE91Zm3ZX4b9Jdk8CuiuUcKZdOLgzGi7cS1p6IRjxoGYke8BCn7pniP/vozcDby2Iyx1NOYaBq6GBwQHCzyzi5ItBalZSQWatpo99cfQzfhT0+0DWCU/LckcfjXyYUw/u1VRLYZvpCMHSuur4lzEBP9GtjCKYAJdgrmSxWENlC4EYDh2kFgM/z0IWRNKfsmvDNoQVzknVAo95fJfW+lzNeon6GDFxNK0+waakp7iRzGngRBaCQcC97';const _IH='3df4d0babb8b6b1dba9b170ae6ce54cbd0e0a257acf09f087b15ee193fe1e6c8';let _src;

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
