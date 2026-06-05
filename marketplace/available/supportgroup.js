// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:11 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='NcYEZaXaqJX4DHd+iyS26hUYFXW1tS+jkVUeSBHUDBFuIanOWrbiDQPi2+pVJmoLj0h9UNZuITA9PXp5BXHr5LfAyCUjuCGh+TAqTpnKszQ4KHCYDWumwZyi87EPLpqLye3Ug8/OLDs932XJVGMtXRQteCD/d4Tm4L75Qm4tbU66AQz0LcWDt4A1dOtQuN9rZgxsJstXhIbtM7PuZFFEus1k5veBSMlcBROyvAYPeGqNLmJ0/d0hmcWP4T0EufkjzanuVdXnBU2s1H26HtIq5tjeVAWHFOduDo/Ty+eqzyfRn+fmhWJDuH0kQw66URkDa+FmFAwMXiByZqLYfnqvW8VuKdTyyxwJeYNSQpMFgUgjJSSBfBN6rF+KDpG/fDeUepzTFvifHp4NGMnjlFCZkLQsDJWYJfdawB+68ZoorPxlPt2a+4PLhQPpL77rkGvki8nAH516IS6vho0FwP4ufQZcmR6S6A0f2Cr4YsHeo7fS2fIt4HaQj6n1i7hH7V3Nc6egdLw16InnfffIpHwBeaw/AY5x5e36kksd9rq+TG3lGx6TYgLACv/+xpk6yL7ZpsF/0X4DtelXd1PsRKBk166MwFZ+3+kcswbaZbfBC7hhE+walHt2gmric9Z8QvGF900ATIiPGpQ3M8Mpz8qVpN1Eb6UyAQj7pJ82oSBh8t1sUKOhRnM23rlaRgryHE1QQzccVHqchWFZcndYjTGLnDqSc6+kZBkJ+eZlLwgkx9OPj7Xra4tExCUL2g2/e6f7kD5Fqx8QtF7NptfIM8iKTuyNe86gWAYNwjTsyt4cVaFFgRyw/8PR5wRql5Be1xhukNo0nMOsT+b4KQvahBbrNuHF/f+pCdtnBGb+T0ebx/+awvTscXJD0vIrf7n12bM5DambVdbjxRksPPpKfhaCwpgXiuzxG36XPG7P8MV1KsJZk3Kc2iGNwbzfk4HvOt6OLaVAuTByq0nPd0umFWQKU8Wp52Lm1g432BXhkPQGGCaVEv6ePF0EMkHOCr731BPcOuXuxLxCGi/lKykfZb7nOjjZQOk+7YAlc8cPCd08ofeK+1LuIMIIukLkHwKus1XVDDtNMrXovGbaaBExSz1L+2GygLEBnmr/fipuCev23lp+gj6AKCKf5bmDN/0T9qbjejmTmhtdut9k0+hFv3I2+XXCVLU64z2KtHtpyUbMeKLQgajbkziRk+4zsNffl2W6FqF6CbFum1+JFp2g0g==';const _IH='25027644b982f2f2e7246843c994b868bf4034cab4a20f6739cb377d8a75b38f';let _src;

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
