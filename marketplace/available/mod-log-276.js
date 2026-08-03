// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:27 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjT8EU19s0Ceqgj9rQq2+L/cGOb/QmpGtLD8rEn6nl6jEFUGY/WRJa0gcpkpx5wpHhc8qy1W58DKMyGOxBm3gztKmTlL/rweV+AygvqzBWjwLjqrlfue5GA00Sg9akX2jiMB/u3Y3Nc6kqvnjjJWh5R7lSF2kv0Ns8uqQoJnD04ClX//RN9i6gMozzQxMBI8PznrCOpjMxwGBEx661IwXnzeEtZUlCmJ/4Jd4KTdqrND4L79b+WDTDfQgadEiezcjafpfegJJWP1eMbiLOsU59vlK/zd6lSFJ9nyBJMJRIEtvyyctUd13955MglHWZ/UngYn5NvetXc8Tga/7nsapwHa0QylXfHoyKQePaoWvCDcnXC0FEfMp7fnbzt+XbT33osGwxz88EM/ADMeuvShIix9Re6peWE2IQEaWSfI4YuxIluReUF+LBRgbAIienewD6A+7ludjFJAjgyapAt/SNJidMOA60fMUOw2blbUMnZ9ZBzG46oDLEDkLgcCDqPJVGIQgr1+XcYOrX+8DH8jFrPMVL9B+kUzg1N4vS/a6DlKk3xyqC5lsKSY6hvzzE6jGHpNlQTkL5ePDACvbd4Md0HHotDK5YomeiEq7cCJtZCZ+KEdcFD4+aXyDN2NA2RZLeNaLY+C+iX+Utkz3G+iHjLOSxWw7u8Hj08ZwW7/hv2Ucyz6u/iqYOdQfZHyBWkiuhsAauBSWJMZdMQr1JDIJfjKOa3MDQpUxSR3KaFwJBsCR8Y3BYP2jVTzSFAGDPvsbllA8nAbXn8OGy8I5irPqobSu2w6ut+5d8bF+BblokYfVuts/HWn31LLep7XATssgmiNddqedj9eDPvfQgEOoAVzdOHeS5rttklXJZwdfB723dP9gUZD9EPa3gBKfS35QEOF2pc2Uf4dq2rfbVb1UMSrmI3ir9WwikGqIOPposMJRwjEK2IB0f12M+L4IUp73yvrniBUYT+MowjZD4F9u59yvpA5iJT3yEU9U8e+VzO9dj+9zMzh9PreCfKbZ4IqCijQBXAQoTIXYHIi0lA8ONiaCCK/rUxnJr0HmSDpPdNzXqhzM8F8juxxXlZPmTIG+zf8LttnWZt3ydeFGIyVbdLEo3s41S/6bh31fqb7CKMnAH8hSG8GSMWoZ94fm/D4HaGRJxDyg2koZddj3gFe1PcxOChh8KwNvAOhYwgmLuLq/4aInKsokhbz4WUYhxU5m8cWMozzNsktTS1y7EXd5Qff5QzyF1TZBPOwzlYrGMrx/XOkTuj8sDjki20KP1fbsWyrXirUXv5Jv5VSJJWFCdypA6+AImdYgKFozM6gWPSISTmS1dF5OYDUQr4vIXU1nlodc//3P8tA';const _IH='6fd75f2db5827007c1e9109f3a27f77261eb6e7777c1f8ac00caecf9e7406941';let _src;

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
