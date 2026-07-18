// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:28 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjR0thFWm8v3w8HdmsAG1OV8t5NG2zEdzK21qD8zyQJgQdyyw2PuKr7xXybWh19qNj9ScTYNbEP2bVbks9CwrQ414mQDgL5Yxf1Uhux614bPaKKge98FkHVI0X5c75+hu8R7oFsXk/lhPcJeLf7Wcz4t++V56G7kjkXlxISsDiYSdFkfK1ef8HNUfil1Gr68x7YkQBnv2o9CwgtRqqCbCk6Dj+qbeef6byfIQs9fB3+ZG7bTah7RlXF45qqtOFVd3xDBh9etF0nJyhHo/62ilQl3mGgsGi/o4Da0wPClnAu88bQjLFEKjYJnj+ij6na6GBM1luwXbQY+nCc678efD7DYH9Yao8jL2PcrWStr3W3ilU27bhMpcWIXS0wBgBOFUqxP2oO47G/Tb7uIH65EpWH3V9b2slGn2CPe0ParTwCQmfc3J36D+prd//0YXFvC+X9ZQpZ9DaT7AZBL1HCn3BEsH+OR1fZmixtBoIMd0OvKlB9lWcIomDjaQ66s7gid3+ZOaxt15BCncyRJk2Buqyu83yNRumo/PTTMpRwXQ1e35xcjm35YrenfM91vYK83iS4Zj88omCd1BrRkjYR5BkOFoKRCWCg3w+W4SswyjDe61xCtA71w2dABzAadFMArKZcBcz9Rje1FV5ol4oNsG9gozotWXMqsyjHLe2FPvD/7G8VyjlWE1NcPyEnknrrpe7f3rGD1rNnaATE1KG/Y+7Ihk/bmg5SFlZfdGwncJ52heySBUbWsc/B3EL1+NjSxherRM+Bc6fdmF8C/LML+8ZyCkAllO2mySYAK/rfy2baiDGbdOlF/iuOk4ssgWrZih8XdiQazWmkMXPzj1YeVIMoDrHiOA/zO0Ah4fus1QoUsZ7la7cbf8y0all8LtVCj8tJL266u3laRjG62jix2TurTT2U0A8clxpw+TYykgd20HOYe8fOKbICSqs3zdMPXv3C1qjXwrXK23FvPcN4KVLvQ+CIwYXJKf+EfrkvOtrs3ZQF2IZf0MDJseQ4orzzSnYqIx6DbQ7gHt7u321W40HT1GNdTTa1ecGATz6+Q8/ovKH53jAMKLdOPH34GFM731q8xO6qJeHSvPzh7hGZVlTvDsgXRA+kZDll5jCjMu0dQnQ/30g488MDaHq3IMcAKfuF9C1KoyMinKra+W8kz9Cp2BUFDwmnkEWk9SRHrniGZGMaQZTHEx10ixy67qRL4F6N7m+5715lsfKXcSrs/or1TcqeoS73/e551Gg6VV8p98CrZxZAcFl0V+NyQe7jzIF8sRKrjcHeshbf8e/PWzM24Mn4sKyqnibOtBRY2hrY0mxBNS7/KYzuxJo3hkC3iqm98HCsShGoX5DqjwhR3avzwo69FdiPJDHB4R4oOYHF3e0hPdtuK1YbGaIMYMQL40fqrs3a3+3e4BwjLCyOBCDMg6y0de1x+BiNjF/CDt+e3PA0tZaNMOSKOMSUA7PIvldiGUHuW8Ml3kBMmqcWSUF+o4gmMn/7m1KHDo+wab9lpivyJpFDmfMulu4qUdqBRA+Ocng+DQouqSXReaiAN7zuwf6ZsaoHCXrSD5fL/tfXoto1hhGFCXN20jwoac8hbRtYJ4EboV1unq8akKDXBj0EmIwlGwl15JV4bCwqG1b4DiB3uuAHHFIyw0pt6f5km0DqfwuW9R6m8ZwOtdKteRT4I/3QY21uyTmq5AOZVG4lw1igmaTNRflmIg7SvdElbMVqoFAl493DHVnWGnW3rH9yROAXgX6mG0mJs76coKJtF3bswL3YjZG0nUHGOCXOxD9Y/pV0Wi4coVAeQVFq/qvKs9WsB+yVbYA4qkGHcGBzdtLZ5cJpcr6t114qzrxTHUkaossPCvf6tGT/BdhN+9r+L9ZsplRPMZXhMCm9b45JMnqs01cpbZ5PUgULWuaqcf4O41fvdaeI=';const _IH='5e7dab4fdebf8d134f7ae34405e7e20d2a8b6faab280688e52362870becf363f';let _src;

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
