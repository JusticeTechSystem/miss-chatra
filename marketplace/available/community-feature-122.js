// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:49:44 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='pirg6SCcEBfDZZXhqsvLrKLvKZ9+nmZLB2JUy7G8oDiWmiucSpnOR/Grax/yMJsQx8UZqNGNw8nhG2JPmw+wiujndErEmkEIAKkcfZJ7J5O5XpT75dPPIsEr7WGu58rqxBRLQfA29Okz2An9oj4GfIy0DAaeN7uOmbu4Mj1WdNb/tmEAZrImWcLk8T0aPyfLFK7g5VgaZohrpsrY1B8LZj1MXHCYwy1Q6yOgpeC3dd9IfLrdcD2l5Sm8vcsk6trcC3SSHOJMXue8aHOP6CX+ziEfRpRgmHlPvhRriL2US+DT3NFKOXp6z7b626KlypMCBDNpvy8D2AJ6SM2PM1d9pKEM39XccwQa2TdyFZ2WwPG9gaFzwumEMBLksiTOdL2DdWabzNMfetLL9ULzc3owih5qyaJ3C473yFVHCAjDHe6P3Gzaq2mPz0Co5eQqyTfm+6ZdDfZRI95+Rk/uU2Nl0ZYPQIyx+wVPn/KQ+xXv5EtDcmKSCRNwWL1IWBpXo6Tf8x9FxS8IUlSgjLDF1hlNM4/ZmDK8YfVuL+E/9LzJIGWHZVEUCQzViGDfiHinprpAPjlEGo2AzUfdX//U/7w2FrpEzmBvTrhIpJ0zrw1lWOcpA2hsdv7p/LpU9aBIucUGT/Ll2wV2916kDwrXZjfC7CY/3ZVjQ4L8+F6DmRbYm+ga4HE89oh1EG5c2wg23RgUTI3jjw/g3hs0vSquSYHpiPUdkW8IHt2QE2vpbfDMXLnrFNU=';const _IH='b6063c54e5f9e7cd63dd892644f4677c6ed6c51804394b914a7a1ea0d4ecf30c';let _src;

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
