// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:48 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='U1WRm9l32NytjMYVRZmgrAPNvHXms/Yt642FrP+ZSwYAfqUVkjgjdY7PBZtch1jJolJe/Kkl1XKUhb9AmQmLOh77lYY7hxJFlO6s6lMcqIgG9gFf6vjHBg23IcqayWIx/WG/J5kCwUDzCli20tg/t6ttH1rJlJBI0rykMCttpYe3QyNsAkelEJW4vbEFZ9z5JjTQ2uQoVm/1Vq5SaojwqM9oHZvaG77PFThdq3lNxek60SA8kbsOPhfarKiqSU9jOBdHV69Xwzg7PcmggwmzXJnVpc1I9A5n1Jq11GRGvehLVcdC0lnhmop9elPSSgv0sz7VItOWX17MgoHJ9bhf85Kjn2BN/Fso/ewZ2FNMW883lXMM8xKIhjsbmJYJfRVHIGPFpL6i6k6AF9mtSQXIE7TIgM6Ypjzb2k9in9OvrkV9NZXOp2fDtM0M8MBto3Ky4CUtA9j8A48W2TWb5sp0Vt2NTmsUwjTTRgw7zCQcyR3TyT/ETV32odkfjc7HPn9vu5LhcL3g7L9D0hcQ9XTga4QA6GJZxvFxzB7liFnVdkWVitbXLZjadDE7ypY8UQlscNqIvwh1rfdkRpSKQFvSDn9jtHJ7LTGzNAW6WltUrNRpuM/APmEDAo1M3i/Y5Hm41qvWIxGec/I9vOL11HVJ7p9DmOH+z9Twnw==';const _IH='164dc6f037e40bdc5d7e3ff129959041ad1c9123c2dae1fcd45d956da4440b9a';let _src;

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
