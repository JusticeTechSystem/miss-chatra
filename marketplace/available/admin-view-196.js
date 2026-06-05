// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:50:55 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='eXEJhfk3+ELOOjHy9o03itYwNALdtn80ueJVqn16j9/2U25aqjAVbCz/qORDSss2zDcr8LMeIKt/TsyATEi+xBfDNLEieyAfHHwO1KWmjmdKL/xUzTQwfC95SpCODBF8b8S3wnAkd0o66g6A+URM0srkW3r4w/+hhywXHbPC7PhsC86TGqB6uotUkwDddeUdNoDwGw4SP9dBGHTSZQeZLFrrExv4Vg3XaMiQw557o5CWsJv4oo+w8tuDaNH/MKY2rZq4gIQEPaQlodMiXyYSaojPpo453zsnfCDJGPzZvXNOh3XHjmT4aPqDJ9raHPNJI0Kb0uQqJyTbO5sCrlpWroxVc8Oaee+G8W66uAsgT6K1b3H5HBezapTON5Ol0REqSdwIVJUl+C89m3QVUsE5nAQIeXVzlIzu17hWxpkxS31wjv2MPuWBJI0mPaAhXJ3rro56jyHdkwtNTb6u90XtskvnQ4NVLxfBMIFZT9Q4u4u/AUO51/u/y0muDungrBxV4HaGmRLsYC3mJd3FxyOv0auhq8wLcHw8soKdmWBDap1CnqYE+DCcGxkFi9fkVShF5rWgdrHK8cl+23uYzIZY+wi/jycFXh9Jrh+jhANHSL81RMj812Q1/hn91n3DyrsaMQGpp38DTXIwxbB/SvyNG5Lk7m40YgwhTT0Y//Sei3QdGP+ypi69rThq1d80lUqJLmj0XtJUEaSLbqSgRCWYvJZ4Sk6aTTtiJblw83pHuTNqiMQ5OnRoOx5LFILMqsCq4sLg466g7CdWq6dRmsnxuxkT1xzRX52Qga7fqrcMPEil2B9LhhU1Auszjld4J0yQfSBh9kJ38rYXqr2COCtEFx9dO+2L7ILWBm097XbNEjHcLXhmkdrVdn6mKsy80771wAiyxQDf851qbvs0ZLou5U+SXuOsUp7rEuAeaLLXkATEMQ3Sd1TtbVbUMS+35ThhWgHVZIuny4EMXGeY90dp3o41Azh4ulhAFCPuS/5hScEPwg8=';const _IH='b16f821011f1b0781c58887d6574776fff74d3d6a91515851275a66a6bcd835e';let _src;

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
