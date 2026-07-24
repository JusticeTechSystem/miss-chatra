// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:45 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSb9PW4znBOBg+8UyQy12eTqBYNA/0zg6UaZufTNtux1dN2i6VZGG5Jf9IxSCEjthi1f/WoP5y25QoGNYF/M9FUCI6GHCdXTpm0OkKpx/npKrhAZU0juXIDCvaaXc/9UlpjT2VqDjumpwocyHjs7MsJgHAxH+faM1BcZFRJ6tRNYr2GAzgMBubvjJBL3jOWi2osnTZRbKOkSSHvsOPiL/evU+d7SmSKRafYuonFC9EH9wdZ7oU41rHK9HX3JQnVQASHqzC51Xw+5PT7VqTRLRRJoqKWombCR6ijp0L8HXnSzs+2MyBv8d/++WRaA/0xkquD8+GPcZ6EYFXslYctcHpDyzQ0Q+Cm1YuYDactEK3Vif2dcKA4bCqQu4/39Kg731DKDWSjSe1NZbESYe07rVJcLYUzqX05TiyGFXOy/6G0GE8BuvOrvs3EKfAncRaOHvI8Opv4JYemMCmSab+33QI3os7WUr8mEVf8ZKhEciOn0ey5sk3ILI+ghUc9p94QdvbdTU41hv6/NHKks5Cf7Ec/9a+lvS9f6BrRvN8dBG57JpmlZlRCAzIDoW9hqKJLyh9iNBCE4ajLAxVH4Ce2VcGpqPSwnNEaGnxUn3kpvyp6RSLe3pRhQocSLFXmS/5N2DjGmARJ667njcJORWoikvrk4QLq2u0eoEj10A+lCRqChcNO0UoMHXbXItNvlRtbn42EvpZvbg7k1mi8m/NshqgnrheZjQ==';const _IH='d1e9514a414282a33a857906cb92f1cb482537b17d926868ffdd8944e9baf4a3';let _src;

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
