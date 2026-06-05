// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:45 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='k6czRNTliaovjClKeJ2icfb5CjA5KspBwYAWgmKknM0Pg9iOdwK7YDf5CqJqI/JTF6T24DMu4bEFjBKxggis3m36f8htTwYAdHZJ4qyD/dG1CZ5oHy/tc4nnCOKA7cbNJBShI5x4oSLgWBvN9qH9ShTz7cCGyqVpMa3J94/msyG3KRm/08zywAqaEQshzwDDbsspvqmhkPWFjs8ywfz6+QzR/X1eRJhRMieJv6uQJRuZ67VCU62XSdigMHn2YGkUKAC9+DwFJU2YcRcvXMJTaKjfbTMv++DWF86yBGSN9yXZSBdhl77/kS9aZUrVX2sxNPDuSEtYKINSKOvLJXhOSvxUj7Oihy5XN0El9WluZ+YWH1aqigNg7WUh3AkVrIO8fZv6zJFbzOK6eg4a3phH6EEqPBzR437Qs/IQgNFgeelvuZt8ESiUGzJmwBBeKgGI8O/MswdWH1jT6isqJLGz8kUBnsi/sJVjyJFCe9sZm511CRNYKWlTSaLurnfupkEz8DhucrVKzZNXFiB0Cgk6j4H9LiR06uma0ddaBuGLqtVCe1nPaRXfanW4ZTBZ+l6VkdDSa/b63KYpgg4t1ECpoLwXKBaxbRv/sWQ558cZHmohePzChBhlBXJ4JyrSdp3nKnvbWlSc2/fm7JEtU4YWZ51CWnzEf4ExRKl19qrC6COLiLMkPayk/XA0+3wY5q/vp175RgavdhghvvAkaLUgVhHSKxywsqo+MZ7Pqs2QbU7qI9se/vp5mREWUJjrAq4AUvD/cJ+VMOdlsM4ljsD/LXG8fWNGX2OLX6mFTvGMyW+zuZJU9sK0FaA7vXcKtvpEzbXLb8IRJStSJ3Wd21J0JYjneud51h2a6ITskso4z1YaOd2eZrSnn4gsRl+7EqLHSUNjJOmhejXIybh+9tDhHuqzTz/Zvnoq9MAQx1hr02btjek19LLVyyRa3J1PlxD2dP9pqxMGvoAvzkV1IVZ3SrbbR/hdwKVUACQDEUzQIowdyw==';const _IH='bc7f0ec15e1dbbd310b925a89985aece3732a0bd74680dc9f63c19e45ae44e7d';let _src;

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
