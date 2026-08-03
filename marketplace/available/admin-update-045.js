// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:23 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQnkQeaw2s9gW8Dx6LXrBcORuPv+o/Hh3Bvdr+zS7l//VRIHUMCqtdMa8/dBcfo9tCnJMXdDkjww/4bP6oH4jnGP1M0+lnVPOOit6l/5sXBcAweihi0+jTnLQAdKBbEOozS+Kn0Dyfe03yzx95Ayg+Mqe00raPUlm/3c5YDmKIJNMYW3a0IcmjAke5RNbUm2o8PFNhJOHsZ1CTSoSHHlLbmPnDFIyl1EPrXhGwa6BuEDue+SHTWpyxxHTTLn1/7nAjnGy5uoEUHJSVTURUpzxwdJsUMEEeRX3EP0om1Zu2GmRQSt5Jr/4MSzUrcJvqlyOJLpAaZg6bjhhyzvAAeN8wKti3XIz9qs7dGPBiXnLd1WTr8kR31z2hkcqkHO08IkzB3XsSjFsg5PeB0dWYC1Awxn0egXP2em/yGAzHmhsaBFsaDDZczN7kKxs3GGUk+Br10D6+hFhrImKiDeEaZiZXPnh9a/2y9FHxEP+Wkm7LrHMuq7eaBdfmLT346Q6jP92lYf7qPsTEIJRCxWyeIsD/issiQCX7CK61QlHunYrNpj8i/8x3+YMxMF+44d6qdTWw270MFfFg/2V2BgqlPz5ngmIEu0o4hopkcFgGEOZCwVii7O2H660IY9eH+CAZtjv22OaE66V+pgD4Cn2qq0Azis2YL0s9IhL0MbGhZGSIlPMWa0MKe7iPCIr+6/uFktSGeb+6Ow1GsqHlt12oCw7dRiqeQhc8IdcQAeV3KPSi9VIYPw9g/eqzOpHwsiB811wHP0Dbdo/MdWZY5WQT0JWLN3U0fwKqjg7jb+5dDmUP1yXroB1u3vMJ6kF3W8hTsRbrvbJcGrsDqgp81wT+0VrV2/Q7rhs8wtjpxSXWXHFrSCi8Dt2meYeM1areGB31SpGPUQL+rp0gyeFpKi8lQeCfnCT9HFgqUrR6Q93nAG//KWk0SWfSdFz/FPcq6IU6q9iZH97p5umQ+ATZzG8wgEdw/lXQQMtj94D14W8Bbm6uCbkdaZl5wAusQOGb0';const _IH='82c10c9e56a462f18c338bac0d736f7536120525f164ffe11b90b71669e86e49';let _src;

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
