// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:48:45 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='EiRNDMcFit7z4neGz2a01XrLJwXeJOrfACD4hCABrWwMTkVOVkK8rH8UN8A/QcelZXXXv2zcEORHCzV8Y7C/HcZl7dZTsThUjstjB4KYRMgJAoCN0d7UAqg3WqiAHSrPoUM4aUilOJId+K2A3nvcbEBEM9KTXrRqY5XzfpnkhN2GnUpxL4T2Qoorr79KCAsb6hmQ/+dXUy78bigEET5nIfMfO7Wx/DFO4lF/ruJiDQyqAytb2TafFrbyE6v9XNi81U5qFx2RH0U6gLuiZ8Fca2x+Vx6Wjj1dh30eLcPNxvfZ4RWKnmVh41eHUTmKJTj8sfX112iWmp48PVdYRTsTmpnTQJgRypX10H9XYyAMBhepvxxVSZpWNyC4dpzZuOM3wAD2M10kQBJhlvrxD1iQueubYM/pW69D8LI//wK+39MLMyegcvj8dgudEoCrXbHsr/diyoDQG5wC5MaTlfHzWDpvHAWts4OqdpqAaihZK3K47SN9Fk78K1qpo9DKNIDKz0hZxfv2YWSR27FN2kKAoWUgI1UJp8OIUuse5f6WPC7rGisJngzKvarpGle5sQL+H7/AU7LoDkVxQ5DnDXbwIF/QqijuH5TXumdG8Q+foIqQPGEuOLpfuHxKJ7N45UrX+RRBpsBv8T/LFdm1uN4efBdqOSkODZUgXVPduMOWoQiFEGt0/9tyhLWQ2O6TAe+PCb6IsQ6TRYTEXru3pf8qLqBjDbaYOxHymhKrQQJh4w==';const _IH='d220c182a200c56763de6a6b18e8e4a08ec9681117ac8c94ed3fe1ff5233ed50';let _src;

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
