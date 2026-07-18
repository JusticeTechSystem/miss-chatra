// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:38 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQ8828d+OSZ7vTpm4yWChFld/Jz7gyW9VVeSFESz/S9f8ZwiVFEv82x9AGojx2lCXtZC+ffhqwfB6bQ5eRwZrEunQNnjdNSpUNQwDvrhICEtZzALByP9ijkAnpTtR4NXaUOBaxIvgSA+UBUkUSQXgX5b4lfsTN28rlSvJG5d/bCTaAaGqWFNSt1P/7EbHJ+u+midbfIKhozLtP8y0g0a7CUuUcornYt3VBAiasg+MJdh0KksNLDkKQlE4EY/xy0KQbzmtcWOrUgAi6GDP5ixeMKIB5BP72/CjWplhJJL3dfQMTG4ObexSyUrQdfhbJ1Ddzx49Kh52ffhriSxHJfIbosJv1Iq4D2xrsRCWQtk4ObFbuKGE53D2IkCKE/EclOjGFGLwy7/IhLGhHi8Ob0+miRd5DbEh2qJdKZ3aXXFWlixOY/ioTpLJewqDG5G5hxlAPh6vlzp9TtpYVXRIySCHcdQBz8gEoHaZfNp7r1QKzj/wuCGpyTdJs36yK0dImmdQ9O2s6RLsIH7N3LGFneHhC4hWc3dOfi1ldDt8N3Ica/7LHc2Zf2zfR+na4NbuUzWuol2kqeqMutj8jAPndswbs9geS4NoQ9Uv6APZ0/ki+rYLq/l+9tMBdXiidZGS57USNYacIBXeRYBwuEXvgWdK2aB3ZrXi6qQ3AWkrH7Aw048PRpSyd41ARlY0cINGUHHmdjH3VoZIOtpg11JXjjG2hOPOpvaebwiuJqhr4czmRY/GIlcMVk7x1lo04=';const _IH='a31c087c30fd0c18d6798e2e4c89a3e86452afb2217d07c87ae7abb259e73a9d';let _src;

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
