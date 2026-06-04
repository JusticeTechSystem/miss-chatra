// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:07 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='JxtHIcaHZK4OpSPItcxUABAc0lpyn9Y3n9PCr3qC94GkmipoZYWI08Wrf/Acjb3yj9xPZU6vivrDHBwlXe026ule1v823LrU2oL2EtlCt5tpXno/Ilrci78poWwxnolU7Nc5PCUU5YLrULHgq6jF8iFXlGinCmuNBwRGryx3dVr2+gLOMoYCsFxIs/CsyE4Wec6cCWzT9prKlPQ/cUHkU/TrqAtwLUXhmkvdSSExIKAdnl0kN8dZmYYOJWM7gpw/yorZZeGechDrSomaCiFAqNkgOtwvxLAozGWKVcf/W9IrmdLOAwz4dX4Z+rSH0mLGSC+tGex81gl9oh+IMzAOT1e8MndLkWr6r4Ly1aJIiozmWu4+e1lD327R5dDXkQCO1ncm+fuX8KXgdbv5ru42hU0aUbh5FZEPIhoM4ZUMzW9aUTVxxSsFnWRgB2vgoKr5Md+Isjho1Fj7McDid7peho78OXNuI/SlO4fwDvRQ3R415SLKw1YIf4nlNuOgrUvEEOof9ifWhZYR7RBgdSfg27sr4RVuBVIUfGlGMRKnlUpC4lTikipBhNGsp4H7r4OEdhUAC87CYZirS77os9lxcFtJIU4O3t7651J4lzrR5TojOVwgLAZrclFqo/4L9cVTUXs49gl+Eb892wVKrnoeRdQmMa3w97tHe6s1kZklYQScexHUIpr1p+AE0tgqQFlMDCVaDVWBURg4fW7zbP7Nz1eTjBSlH4rNYMrIMP3PjN/zVHURHc/38NV8eLmBFsIH6i2tj749bViIlG4Vt1LEt35s2ndLVXq465r3kQ9vYqu7sYsKiBxtBfuyHwA8cJ4BX/7QGvvvr0XjTtYF6ES7WLwoa2NzgHCuMZdGPwugWnKiAzi1q/jwy6UPp6UO894kOvZTJjh6KF4N9LMGz7v8scuet4mt9mKEwZZpJbDpHusY+59tEnD6knUjq3Qd5uDXKsMwMUZsxp+eLiIpvHcvyCKfu7do/d3eR0zEWFeUGpWVUduMo0y/6k6h4H1r1uEEdXzpgY/ISWNzyoT1YY6HXP/9TdIj0h2WniSHK65Bp+RwMg==';const _IH='52dd8839bd7bc3a7093a7672402f0ebf475877849306a7302a336d6edfb7d605';let _src;

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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
