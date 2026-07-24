// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:48:10 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQTQNukQRqMZRXyY3zE+tCAIgUvptzDhhmlmkEzrxkVRGpSS76dhZ5MdI4hOQOJjlhUoKhKe37CLR9MgETajHmLQWhqOnLNxye9so+P7tlaPxNwmB6aTuuD1AYmuL7TCENwoezZtqu+s9+ghzhn6r8llCzILnVKnjXruGjjC2Jg4Nar0CKDsj+pjRjyQylKPr75/a/4yXlhPpcbxcKLos2NRsKNY9iD4AhTCFfZilfzV8lAv3GxNjkXy/3mNHsy5q3r7YBUJkl15g/vLtKkYGfxND1RcfXoLrfQQcQeuTE9JZFVoMUQJt99pNZz3EwhN8HBkEG/NC65AzpygVZvNLi8j+tHcQjxLSYkkjXwdJ1/EJJM6HNQvfYFxCpb+xj6s40tuP5tm8Rf/uE/q9AHDYYU0TPdFeJCHb8q80fT3iXTJs/t/10hrUyWIZx1r2C17u3fW9COTMjhiRwsGEXzcJ23idwLIja6uFv3GlDdAeUDJBudFNlCG2k+t/YJ2FuEMpqIL15XCOQVQWHuWcWSeoBrEMmoQ2lZf3/Zz1roWLNnOeq2MPPydYJHIbRvF2F0q4K8eKxPA2JL0uC4gsKVCG25G+Ad3SmDw1JKg6+HwSJUJlciICEHMF1Yo7sOff5qqVRG1Pr3PmLc/Us5paRvdqCqcK3cB+EFrpFbPrThxkUgojV2zgkqodD1DeSBqednt3mCVvl+pDef7IsFoj7AOn28/0O5516Dv4ROo2WWt/tOnDSccFwwS2ZGBWZbopUYomSEPAwbiFNJ5sB/TNoWbS8nPOmAY3SGcioj7AbsXpfwloMnsQRHsqxs4a3D52QKWjfJCEyDopmaIF7JipWwLXxoB0RZCKj0tgM8iz0quD1ndWUUaSDXs8is3h9DA+xPOuedkOtZxd/L0rUOj0nLhTwM9ZTjynO5n8NZxFrx/RL2ED0DOj7yYZS6IbApheVNrnmKu2yezlxw6HZK/zcogQ9Q4N1bmO2dLE0MlUiisvrn4J4qDg==';const _IH='fa82178889f2224fd5de099721696279a9a2338eb7f1e97ec90e73b4189e2e57';let _src;

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
