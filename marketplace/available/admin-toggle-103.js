// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:34 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRhMiGJ2Bcmmgq3iiCCKP7/vlpmvac5bDKFG8xtfjSdIOhMmXvVa5oudZE0tozAeF1GCV2rga1JUGY/K4WbKyQKf2m6exjTNMBycRjuorOHShqc25Kcl4ZAqbwDh3JR8sKg+5EBJFYnciIRKqeAbCzowOS9pm1o98kPObr2eyk6QzAPalSgSzNbtKzJkAc0oR0dY9zNAgG066cmMfXbxLzCY89mFzBZNMXi7np5EnQuO22WJKTq7ygdbM5tz0xbdU0Bvv2NQOxYdf02y2lVWrz8jtSL93epg58Owe13EsmmMYR5iMqC8UWSaqHdAgbS0c01c6ERM+Vzrz3WmR8k3g1IgaXHTLyNMXsFGeeYqp1cauPK360WkFjf7GXtsZ+atYpT//snJjVG/qxn+iLcdXt9GdR9WRtWwgcTj34HfeG2lP9AG9VWL2rv8Md19QmLL4Db8JQaFq1aKuLhxoq3gZTPxCZDRAQuZD1IkhpzDrn6VuFMXCOf+h0JCNAjJFLzFC8zUSFqp2Ob/NvzTldANXma/+XQBmv6hJCwYGMoK5ikl4ccwYmElDKjoVjQo0S8BCPHkEdnnhPDRyqEyx7x57eRUbS0f67zlkbLFTDrsSGLokzmOTsj2bjnrPGKaduCAlIn8ETDBK49tQDLSWg0D+5RfwY8MI6Di9bI/FJmmnddkQ6pnjfxF+/Dt/dy7KqkhUMWjFf/JfjgmkCt+zsIkALSZQoCT7uhxxoV5OJrbzUrMv8rATjXBHJk5WmRBrYUg+15uVsFxCatb8EQnieiL2ntFE7S26zdDjqeZ85Ei5PrCXOR+lVMPGw6eF0Q1nwqwBIM4vjL73+adkDGODSuypFz2J68nF7AtkdmiSq1xb86zZL0W+K4DzFeb+qx7cmvGHCZDznoFeIwvZxaM6We5qx+I4z0b6arJJua7cWNLuEzCzm6DAqA0RcxaODFur1uEHZzFjltHhp+gFfsDX4+MfOwjp5SJI0YEE/s4XPyS1/++thJOEv0a1Jcrxew62woK8Vr';const _IH='62ed1fd315da41c30cc4d56aab945da17250fcb5d43257da9a8f6ce4c481dccb';let _src;

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
