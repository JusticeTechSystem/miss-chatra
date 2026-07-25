// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:13 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSwFtQzRNiUQO8pdVrYkmzvEuPoz9O9dNFq2gL2w6mhbyjSiRHJEbsq0SgAV/jXQw/Y505iN+8/xI/UzmYax/ExF1GmImi+ClGzijrlME5wfIrj3YKRGnqyC6BjUS+bzSRuUiCqG0F8CSUnurRetbXgRr4NPya381erDlMLhOzEMVg7+0OO+HpoLVKQkwvqzbjngt0LWx1WUij3htvW/qLpvaV2sChYY06wMSbatO4DwLDZuMe/2cY1cdMHx63yH8sjP+vbym04hmjBHnzkKT21h2KJDDs90haoJhJoNWCekV3hmqQUQREysVvLd+GTMiBhcZJKPyADlsga0FmYD+Kc3JpBjC3y2zxsn+ax4KPRvJ8XHIkKpEyf1QO0Ds2TcdcdTqTZekG1kLLnTJEoQkJsjoNj+hM11cPamIWhhiDhP5rQYp924Gx1ZXIgswVAoguu5Gg4r2C5fmp6+lL5Lz6a7JGATPHuTE0t4v2rSIH9Oa3yRYi1Au24p7UuaXeqg+qVoV2MPrZlhnx65XqWSEKPKtIes6Zr9SAmGzQCI47uLL5m7/KGmWL/yn4imL6Np9xTUyqW430rv6+WSSjE9W+OGFUSasXKEo7wip2GhrRk7MgrakpgHsrk74cnOYEEuYfj5tOdXkhO66F6bAkdgQ9PdeSIvtes5UCiOoVZcI/ATWWO+H7/eKprXvfSzPeIWkeERlTger0Vf58pOcXOt/8JgaezbhMfBA/UJUj+3hYcAxW+YuUqZG+9eqPMIwD80Hz1fy4KQQt63BzfgZUpsg4UzhWRRIG+adzvtX7M/c2gOvnEjanfK/PTIG5AvY5OxGtjFl9arRYSdrYyUHwCzIpGFpe2H5KrkEHjy8nqeMpwYHKk0XCJBq1DhyVc2LAYt7uvrntgiIoCiRY/XaZF4qweTTGs+cYG3Q11IA+gM+pG54vyuglkeqOBv0+pi1lcJoPe8aZcmQTZV5qRhAkvRP0rqngPRCzZ8GbUWvfTlJGd96erVMjxzvDBziDKhKDrsP/PHWyn7qNlQiZ0UHPREABN+58rEq8TD4YZX5koyNywqWeORKXx5r5nsgFmBH2uMT8HtFPlAUsFTcB2o8GLTPdg+s0zeR1+jPWrP8EDJ9Ht6USgoP42loTMqzATwILdnbEk7pxe9i+xa6Fo9D+ifoLe63NP2BvVbvf+SyelAmtUvGZo1+81jrwXtgIWGg==';const _IH='9d03ccaeb0670fd8d985abe176b4e406d78c66a0edab39f7fccb35a04cd4de51';let _src;

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
