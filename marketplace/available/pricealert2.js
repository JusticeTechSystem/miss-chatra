// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:06:00 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='qapti+uRzNuhobvkOGDbxVDOJyo2RBNXszTrvp4YOcZ9fjcyqjJ/Cx9wjvqBR+D7NzCL5cLv+I9SMa8nuQRy+6pRwAIBWlxeuHXZ07A754Ch+ovqhmDAjRXldXmrc+H0JyyHwBNxfjmnBCqW0gH/GNDuu3kcMzPbJp7VRQo8du4TdhNjnb3vADoQiK8PYekatojmzjkcQQL2pht9aO1wb3SzXX0cCr5hhOYGPi6OkEPM3ohHJrKWXy83oGHg7NoCo4NsI4bCkWh+IChk6cNbM/PBR8vX37SqukyXJ14xNPxnvwRQ7urzPm3H6XkWwY/hxjZ6hmiUfWWZpGLGUj6IvcESshk0l43OmBQVPQ3PEdKjpDof11U2W+QoM3JFjjD7E3DZpkogD71DQlg1TpMDcsypkm2VisfS4UBmiyZB5gODsyKapEvZfAOIELYl0GFEMrQtAzxijZXC9yGMqaaqaPUocg1q+C6SSL5gddKpkFMH32oZ7mfRiExJohVhRRR8Yq+J/VTdMRtz6zXeF/ymfRVIFhU8SMgCuLFaHZOLgYfUDSdhZj7KLyTIBipijVEoDpkM+YyPM8qmmyfCp0GJybOYNf0Z52bS/I2XA5TOZIBx2bMn2VXaX/WWnmP7PVPrZTNb7R6RDP/ovF4iQcbSViIaVhtPooikxvPZVw/iDmS2JMlthKrG/ZX1sSfMirTDc59pBz27fhebgbanBxEaJtK1EnO5xvwhwbOCfL93xrzu6chKqpufLyCkUV5uDnsZvcjK1zkhYZbUJ4Ot3bzpjqNWzVDC0nhIchJJD/sAdBZZIr35TWNQTRvjbcynoG09yoPHcJb0kh14pbUmchkuOON7oSqbJvY6GXRc6+du0sU0magmal5yJFniJy6SmbnmqWQUkfYKQy8+BzgItAkchlnoPpN4oLSB042jbbavaBYw9lcDKEJadEwwsLckZ3w7fOoY5dJCfVkMgCiRPymdTg+Vx/JCjWt8a1gTI/sEVluxkw/N9zm9Bb2l/hudTtNebY0K6rn7ONJo0uXooZaaL9K4nVcYrF2J4OO9Inv7xuhvNdt741+v3z5JQBoRoRaIu1pS2klsbrtZktXY++kmocoUArc6CfDBBIuP3ywf/TePCmpYE1Qd7DdbJv19Fv4CWkXMr9l7rlpavXyrCz6CAYwCAE7H94Z9nAVC4b2ltKpvKmg4VJVBIg50dpvl7j/ZibL/CEA=';const _IH='cb3cbcd8389b1c436c05b34092e66da7453f57f34a88f6a21c3dff57f1d9a5bf';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
