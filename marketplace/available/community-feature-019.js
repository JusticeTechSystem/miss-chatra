// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:10 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjR2b3sURJm0v0fPBD/LqhGSxXTrvi1JRJokVdUTeZELsEt9hQ/dEepSSOdZt47gODSImMIf/4mUMW+EFWBqqX4QMdUqhdzSu1clTKhk7qpsIVWwKpRDeXvsTHqu6RBMiMHryPnSut2XnrDsAtv9UctshLGyIAMpdeKGkdRh3e9yrhzMzUbHnm31DpxcI/2/WG/RTYhrjSO8ECH2iK0EwyGwyImwcxNrPvpXjjpsvd5Js+MkL1olNua0AZ2E+popf/V/dSMJmosw+1IeNXGyrNHAhkTM+l82SePEwuSX2qkqRIpCcGM3rPBxfmb5Oj0F/ZpS/Ov8cm0Rf5BJIcfPBl4C77Oqh1lkmJS9Cx2B+3xufMTw66FKSmbMYwOw7H+kn9B+fKBWJX8TkT880vwCdCavYXxy7tks8zR0utqCvEX7xHHbJXPaQLJyQHLHiZu7XKywMPc62rQxmdhornAC/Ffl0bTo1VNnuF2qQQNdoBN3iGhdGG8tpKhk6TypmZy/+pfjV/HtJ4R9AO+SIAkJ0xV3dVzC6xpTL9gxwkSykdsS9oDXz7z1m76n4swncqAxvm3qqSDVnwQV1NJq0VbXFjAdt5xCAwQDpv+tryn5ZNRWt08OP01AdHtJptYnK16/eDg+jNM+JGo+rQhCGz5yqlj6glohTTwrRLGH/muA8Cv5JXH6zF1JuEZL2fnR8s15uFxA90DVLHWwEGAOxeMV+Sv8yd7thWZ17eq2xTgO8JMYoLNE';const _IH='22036b18713c0b638fe9bbd723b9442592a9a3aa29f246c527a279b9d5c9f019';let _src;

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
