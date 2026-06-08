// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:31 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='0D8hAo2PZdzgAhkHOM0wd2T3XjFKEtqlWCLyrjHenmDcq9EZdbOiV855SjZfmMiHtZ421Feh+h17XalbwzaY35x4r0ZsBg+Yvi6tpn942mjD9X4xgvNbNcEv5201GRGHd0DGA6YrGKfmReh1lpPJ3U1sdw5w5bLnJsxrPntl+i423QpX+XB0QUOIeW6zop0cn8zUk0k3vOTbuK9qdSEgFYqWRzwXsfOuAzWm2wON37dtdCo3mdGBlSRYMlZJMpV6IERwojtLpDmdvTqwclpAyfBJK+OSys72KwuJky2EAoqGm2npULcWPGol1GVLeMbdHxsqcWHdWy2T7WAWL2tlbH/5dZ9pvUjRvwCMwqjxt2flLupaCJcdHxV5LwFCUNMU7oCtckIto03BiMDK3p5WX55LRrIAdcxA5L7/M6mNZsCPYVULkf+RfqRp0+UApsW4npboFHyfZDCWc5wsYBN+gNpn+NuRHwhIpoOdZ89BEeIyDJ3j+DXXjwG6OfArszgNknC2QJ+7mMhC4fc3i5DmAeGTt6xAaP5XXf6lGv50xB4INqXChJv1LmfxMJW3TGR8yzn1IRTriIK5o5RIVgmfPiSwYJ1DtouZX2/mk6+iZb/ykN8te/ibOQGeBrBBjYrsYOu3c/4IRbsv6PLBrs6SZfecdo7ta0cd0E+6SO8G3Fnr0bFDX4KT0BSJWLl5cBjnUf3jTBR4JbYeJBoLCoKCBzuTt+Jgx0EtTDwytcIDhBxG4GfgLqj6B5ejj5ikUIO2ienVLEdLNDTVVyWE2ndiWEQlnMWO47gXYCFCXhbrQkXuRDpx6bqEs4BDH69aioBdt04zHmZ9Lg5mKZrmF5KG4cN6OVvs/ZMd5MS8tes8ljPP3NM7dAXJsYcECRwjY0snjel72webWWKcCpsRtSICjwE5o8+xCEPlb5EFE0lsaxBpJb2TOa8AQvbT9CKq6NKiHsOO7FzkpI6CxvHWYRa0Pss6qtY8GSU2bPcljyZ22xLYS4ou7pc=';const _IH='86b0a11cbf8f8f1d5e7e177c12fb2539d08a1c950b6cfaabbe393c5a530704ef';let _src;

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
