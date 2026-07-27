// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:44 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjT8AavIpB85/x45y92EkPdpFCcKjbsiVDcLrmRNSvNryHzJcFs7DtFPO8gU3Wm3p1BRZY6h/n6Pb3ziGW9OyUpQ0cvDxC+X008znHGJPN7fN44g1C5slp6GESLFzho/6xpSEoVKqD+uxBx/HPtUQNiVvwTNh9gf/qxUyjyPQth088JFdaTw5GJRf58NkXzanJ+aGHh62TSPODY1BkBB7ypsSrd9arif/nJNvgezPFSWHzMLC8biu9ez+kEeAq/ih0G81hy75wPkz05HiFZbxGkOh/4jnlRAOTUxluGP9szHvXPT6nUk8qpOPXAKNTbr/1EkoFW8yzYdX22OwT8TUtumn8yyXg/EUUcO4s3GqS5gArwEHHIBCqA1fgy9nE4LW8hieWHWYDoiE35Cpr7EAGg93zEe/PqIXds0VG2H/zIYOX4SaB2x7MLi/G8hk/IOsGlmsGgDJxk+LxIMCZuqWbQYM9wbF4UC8x4bldOOqgL+altPrXaSZjAoGKQGLulVFT5phBVUfEEOsWIqOiiIZyx2vMk1kQQTf7BQV4gFTSMwLPvqNUMcGAhIYsGt9VswjFY2YsuefoNjgbsbnEuwJTUPQ2PcKmGkdaWJ4VODXuOb7RIEZGvzS+QskXCRZ2hZaAo9dPi5TDG1rBiz7XyccjyrD1L6uL8q/ezmPOtuZPZM8b8gXje5Mz2aKhKuRX5ufS7NW8I+rhtK3KUgzgVSHsMrct2TRGTrwDo9ndr3KA==';const _IH='1cf22a48b99b48ef6d0e92366d5cdc18b00360e9e5d5987939c68ef3b769fb9f';let _src;

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
