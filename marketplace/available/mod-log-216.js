// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:52 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTUZeI5ZZ0wVYKuKd28LD01C3PJXU0Z4FuHduQfVJK3X5R84/II0Pt44GSFX4ONoX2ZImX/XEXMEsb2F9Vx+5JESdbNqxcAPoOpXyYtCfcmmjZ5jgQVaPU8C0h03nicH4EnmJkOHOncot8tKvs45UNwy0IuncdcIlPgFJ1zU4pVPr1KmZMSg3OVJmbEay+fN8ZPnkBq1pWipfgIwjfClLzEvg7IWz3Z4cuNzikWlStrhOkIHfRy4sR97ijkit8d1nCfVj88NvGLJrIK+0m5Tpy/Gy1SRXvvBAz4DRS041l9D69qF/R7rgM03hq1mTfsF604Myy9N5Ak2fr24S88buJU5Dg31Vi9EARFU5ZTGsgieZkwviyT0abunyWnhnWAFF6xFOsvClMfOUM/HNIT1y3BK+Wm3Yx1LdyznA4zyiasGRiVuUby1I17nv0PvlU7L3/q6sJeQj33cFpQb5FIVkZrYl7/5MOTLnI3L+yhvF28fEEL9evsxLpx+rTgR5Imlmb5+MEu1i55NDFfa865ZhTvunnf90tw2FpaXD3QYe3w5nuBBXEeJ1u7XXFLrkd4Nahrns7ouDRKdi1P925umpw7yYgs5VWzb4mhThLCOL0bpi8T7JIRQgPqR536s37DLdieXhjvS4wLxlYNcN1xKmNyBQ6uKsecaFPFflmDAN5WYQPErQMp0cfz/X1lZEiNcE0cRU6A7EWqTuLog/hw1USdNGkgBimrSHuosmHMXCwpUY7pCJhp/o0E2ZsMjipEegZQwrQx7SxDBqMmJFXII3X0scyAcblENZwQi6vrb5OX2GlIji8WgCCah/Gl+AS4xvLkPF47HIVEawPDJKeI7h2Krswn4IFMefix2RMG2Clj1QOY98a9G+pfZLUgp7iX+EDu8AaxTfpiea9882ZqPVLmc9OkkgccY5U9IVA63srTEL4D4P928Hzg/KGk1rh+0vWbeXqihf4sGGvxJhwdWzlpxw9EP1Dhw+q28boK9rjs1wD5xAECYaofDwowsYRqNdH5NGBn93euggL7VAcp7P4SZzCiYgj65fvvuj2jzEoPLttvxHaF/zf4PzPVovTY6Od/7WnVKMlt/sw7V10NW3npVazo5OYxnTU1YTBGHe4LlweMEe8VEPRDG2pjMmHgy7EjuX44MQ3hHBbCh0leaCYkt+1/GHCYah229GHQFXmDm+u4olxz+I04fqWTuU6pupdJZ+alnWjpb4xyBNW53GiaaHoly3Nh2cDmJUVx8h6pL083WTuqgqUWzRFnW4GyZjX9N1oX9gUxWwmITsgEM8+MG6bUf+Yfv3EkFjbH1yNhfswTuJM0FaYQz6uwBMpPkLj9RmTr7EtMdnAj';const _IH='68e867322a450e2176b5ecae2ae50883a1e483179d0ec24aaefdc6854a102b85';let _src;

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
