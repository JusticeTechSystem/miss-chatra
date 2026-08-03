// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:42 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjT2PE1SwISBHAzJPCkyuvtDXZfAveg7H+Wb0UjNB+Vzf9gpKs7MW33DsckdMLcg7sEZHkxLBFP1ldJAKXltYNQkrYTgFn823NXicGctE7VHFkolgt2ey0GKcYKO7SWG42nizQWtZNX60MSK7wGp6pO/oD9RNuXTe0Bvwer2u1gAPMnYfH3uzvuTrDh6b/cjuJehsBXv4s/bxbfX6a0o+1qe4GtmcafMkPhdajQrDid18/GqEakFt8+ulrEMNt0UWymT3k4dtiRzpP8UjOL/0h7wOuv0Y8o7nfmgoJdCJEKVdwk9sMr7/VHsVs/ZT/L4+wgKOrsMk9Yezk+b5Tctf2WRXlQ22wuWTEGcb7moh50BFH1C5kRHHncGWguLxfmu1g9JL7tI5FtlMgFnRuQXnWdfZMTCKwYg+rGJPhtfIdk5tDlIUA6vsWO7MccEGfHaoP7ZAeoz7k3MvnUeqQh2PG3t3HrAGkC/DxRGoeu8louM7Kgvn2BImgA8a4fQLzp13ULAnVuCT2/9QqGWgqkH76ApYEcv5L+Hm7IaNv5Syye+PZUZ3+/LrJN27JFUI+qiOR0edtMZDyptol+0g7V9x4+V1UJRKeV9MsBCHM93nTxyflGbWcEXD96cv4FAbk1lcxG3EgIp+84Eka28Xzu2hx1jUT9qlVUsAWWU7BWouJtEt2oZQR0snTCLolHskLvI3VR5FZOSykvx7rvGqQN42pZpQELs5BkPTnqwiLq8b5GwOXZ5gG97Nc3eGLr72sMNQ+qfQIMEmhZTrAEI13FrwWkwPoJFeIqZZR602Ql6YCJVFRxEXCiWQEDaoJRhvO5A46GC2XFXpseJI0Cv86tjFBlXnF8vhhaK4i47nlji8eB7WG0o2aoEfI2TRghwR2dYgnQkb3P0dHAnonTcUd+VUUSjqRfICwUPuDp0OzAoLaIM0usTWcyI7MwLHD5E/fagyu12QT/L8JF6tKVoUPK+nLsa7CimO7AqBgHYqMUZk/9/3Mp6IpVv7AiCmmIiHb9SbLpctlSooxALvq8W3Zc47jQ5DR2ec7+17Bc1lRrXc8OY92adpNDg2uiHypUJfUjiPfykdbceeJABHdNjPwUfGVnrH9QptQW5Jiuj7XfpvhWV1fJ2lI7+cvV6YqLRra2xIcbiB9w34FkUWrMcmE4xJQCrgDqL5sxlifnmlOk7BEF0mu40gssncgliAk6DgU6AE/OmLVQCD+VqFpA6D9S0OY9RvfrDQ0p3TF5KpA4hZ3ZnUTMJVZDCnxX8V+3g/0xMxxMjOE8uyH44k0Kn0XG46/Nl50roRqt9z/wYwYZXwz2kj6MnuMedqe1Ij1eorowxR1gpFKUo/YNfACajF2A5/GyASfqS9P9Z0p7KgOw2Wju+Y+j2gEOQ';const _IH='d8c4a2a2d263a7f80b3b76d6a2c42585299c66c70bd2cf1e1d279c0983c4a942';let _src;

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
