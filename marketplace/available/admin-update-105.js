// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:13 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjS5ofvWgN5lT1mnNZ9qGYMV+dGo8dAlcdCLO/tMVhfM7HuBDYVBKkLW6RROuYKafG4+XDZ1MHDlZevmueUE+pUYHL8NC+SZD0bgiymbX7cbz2tQ+/n4Yfd+WTGw1rJ4mJbe6hihyqsl6ba+sLBlw5vOHZhWxF/lUGnie20Si/gK7QiK+uNnkZthDf3AHwuAM8YKUHaF+yqNW7QI3P25Nfh7uVxPwR/GH+yINIGfvJ0a81tlZJpPNiuEHVcRVGgWkJVFqM1zNqDfpSuUKWYPo0K0okn4H9mxnHb4skP6D2jdIUMLGuB11HyHoaArUR1UqzGGWbbjVgHYfn01n5HAa2TTeoiktlL10dRpp9DeGEOHmUyZZexz/vGyLbok/XqQ21MrbahCV2LqZj8EyFsxf4Nlge3tB8eVUZTwEaVggQg8wcc64D1F71FCfgJ1m7gSL8CyLruAwVaxYmNtSfg1hVx+MIw0qhzhZf1BP9y4zKA84CAdtgwrnVxPcH+pK2afW6kxNYXaZIxvDEDgYmbLJoM18043aAXmp3S3zIx9Xr8laiuHwUYdL8uqLRhf1wD2bh8qlWSxpRohMiF7H3HJ0IJKy6NLDv6Rp1X7gEvsqYC04vEjn4IVPdNxStrERDmLRUzC0Y7K9bBwd1xH3cC+ZSAvf94UKcvvYyPX/EoIwcLTt83PCcXGRq/hr25RGZw5OiMXEX2seXfgAt9TKpkEdX/d/qOSfZLu9kF9YcWFNTMiwWq23oP7FcoVlrjvtp+MF9uOM2tmChHCl/ISD58fWKxQYLIfcHututlBNGGtwNgH9kcuyRnkarE7lI3v1KmrLS+6Up29fZzlmKY/FBo8YNstDKj6/4qkHDWdZOnI1/QG8hf6HLxP5IDd8dEZhP7JxOXkuBVBJqhC78NNGBr/MV62imirUKfzKq4suqc5UIoFYmK0i+WoRbgYrNjQMGbdxmOKVymbqooTui+yL/qIVpmcgvPWIbEgR5UMsUiCtSAI/kQJZGOU0Ug3EnmVJbTK3P5C';const _IH='ce8a22806ebf67d9879495c2a4d719042cdd8f4ab884d1652e01fa17be8ba393';let _src;

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
