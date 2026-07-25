// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:41 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRqG1nfWn+FrUzSy+VZBmh+0A8Hvn3VsznFMy6Wu4BPenC7ry5sZ6MA60cHiUXd4q8Vf/EPkjXkdKJG/tb10RezyA54Ef/8JB7/T7NppedlFGqqivcDUa1MP4ERhJTRMsyIcK++3I6t34TDRiHG3A0wxPnwmtuUTniA4rr1BnSVEZOuZa+VdMXlLiGUma0Y+MNi5MKcHShi7iY8uiQElTS4w0Jz4GmNNmdNBOr0VBW2OF54lQW5FOgsu4W+cstZNvsAJs5aRvlulDWiCW6tRPYj0VfcAouKlqUuRh6RPcxBaJIuM6q/BRy2RQuCmmtBreOnGP0Qq6nbK2spZjSaSsdK2EmpbL/KI7ImpkTgR4hfbaAKqERcijCL/dTvXWAbAl1vIBAtl4q4J05Yj8DY8xngx7OttnaoMyJyJPqPnZP37HbP/3woxjr4Z69pVNkRE/ag7tkz0kwouY8vZp3p5P/ghk1dbUEB9T8YEG7jT8wNmCzGnpiJLVkos+I0f/YMVUar0tGk/RSN0OqdTY7naUh7MKg4BlRsHM4L2gQedeIBvtxFsefKi6Y+plBfta5/MT8dG0t5zMSkqUVnzQaVXYON8FFi92yjrO9lm3MunJeqGiH93KpWuGuFW1oFjTMyaMYt3Vi43qkdjgmig70u5+Q1nQsLAgGdi1IPLFVUban6Mh0Osr9krNggTKKHiK2XHdJkiOzXHqIVPacjWJk+EyzO6mRyOtRUPn46Ma3nDOqab/R5vg==';const _IH='044ecef392e22378d48dba387bd8b94582d1c0747881de4a38120a1db0d032e1';let _src;

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
