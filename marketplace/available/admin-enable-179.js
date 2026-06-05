// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:12 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='N0Ta6lTE2VvrRo7rVzTiL+L4DD8TbPL97J1k5GNb2FIRQRO6/ukFozKg/hc4OJ/YqDHnYVFwBlToPAmnAqhAmVlc0dM9XSYwNzLHkzgJg5+IZJ52sx4Ew10sJN7ArlsVZdeEiJdlNX7i++9Ha326R34yPJ6naxWGdnJa7qo2S5KvcOPwt+c7iizseST8zWpVFRzMl1EBvfpDAd5l1RElEb2Vusr5Q61RUzLc1MgzxiEjTsAXtYDetGNOdygvjsUOPF8/x8ToQAO/RRoHoNSmZ6BBA3SmnlvtH+mjvI3hJyr341mfOaiGPefwe6ZsCQTKfgSee52eN6MtG0Of9yXeq3FKmjDoBrcc+6y5keShKmkwGSjS7TmOGramIyaUSScm1PrWBJ6B/98pYHe/h4/fcyLpmpmYxow3Gd1H4sM9VrjEQZha7IVxNsnJyAqVtT4Al/E3w5Ov/07gdJPJFiEwnndEeUJCP4mBTpZbAHlA2l6vQWiIfzVP4crzf9D/kuM1YgnPj+HbwlPcHw4AV5UvW35w6pL96C4/4u5naIkF8QF0FYUIkO2ocTixqdKp3DW0m0fi590XpyAjsTXd8FmKs4RJF+ztUmvQkOMXiMPmHP95G6TiSEBiwHivJW0SM0xdD3lE2vub6O0SHjZPdSfp0G/quY0IpGGxR/v+RIh5kKdu8qlKQElEM9Vg6iysgbF1EMXbAEiQyIWu3mg+SJ5xmExjLFpSC4W8+imeJsryF+sPoz/rGW/B6daA+ZhkU3kwrskcYJgnie2psJ1ANsQb9PeXfsIVHX0BZF4uKocKdidbn5gPFe+8652CJSxwpognoltdq38aovI6uPpEhhL6L4sykvBhHhyQSPTGoua8+tQTvTZD/0eL/jCh+9fzADhuQ8s4SXeXEDzc5Npy63Bg1Rm3BXRV+AECqm0Dqhmkh1o0F40T2PSR85guejVU/PLc4xoratHvPMO/oa/dez54+/I3TqpGn6DxJBbrk92aywPxpf8YqwHfqaBN3vmoiSdwYw==';const _IH='c3828753d21982f6fe8594cdcb84c5503f38dd17fab3e20ce929769276023954';let _src;

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
