// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:34:07 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='7TV37pf7Wv4XNvzBrK+wu4S0QNRVs4oOoKWiIswXppk9M17fG53kbJMWd52qLk3NiXHx8cSrxi6C9vrCzYGB/jZ49zqn78MMWmKqLPntoxPGlFDF+3h1MS9YkqjilZ6056y2sa90nqDEykJQbKG/BRzIIB+xSQiyEeLIEZLXd8d0EbR2/485aQCeD5zsGM5qtV9Co265wzNPhVuRVMUwmjYg+ujA+ZIR6ydMwbce3qDbzojmgTF3ZmvJR8ekbCZI6tm464JnS5d1owQHPoKDmetQoMRDAuhl9lXXjWr0x9td7YvL40uwUU7zt/PvVtkPus4SaFk5jFQ8oBd7KNwOwUkIGQmXnJxSMhJj2uYaQeGtz8737NYc6f4f68Mp9DNaJ3BcmVLYsZWd7tRBIXpMiI/gc/xiTz1HaJ6hqXUHW8E6LXZiuacB1TZAnfNQxcBS5W0cORMg6ZWim/paqLwRw4nZPzQoK54ZLf3pf3QYlTNHMV+CdCGj4VjDQAxR19h5+JeBp+ktGriTEyMt9Clkv6e4qo3w7k7EEY0805lGlCXZ72sY+cP1SBtWkB3AplTBpG/Y9QKPWvflytNPLaYjMxaOb+jHilKgnsz03LgUt49yqwSwAKzpvXUz1QqKuxA/Qp3XkV/eGMgIsp8S7TZw8SMwypPhscPAkhNu7NRG7nXuZ9hC4Q9Hg/9iMNx8W76oIu3Msu/NOgvsdiqlmksPXHVhYHqx/NpQB2+jN0dzwjCCsmy74VrPCv+UtHr2NVBChSlo1Y4pKJLqla4psltwgIe4Bi+56UVtK7n3P5WmBT5r4B22ZR242kEoAvnepExesyGbM/nurFyhh3qvtn0HjX3kX7xL13g3mvzyqBm954hvbvVzxp7by+ODbkHAeHLtaBMZn6p+a2Fl48DC0nUsOJ7thB9WuTff5WNdWLlSYwosUsZ3d+tKRPeasCwC9JcyAp5upSNA7H1EMsnFOVgT9El8AWCpYh5qiOB3fvFr7i+HujLZ4zQm3Z6DK0coQExFRboGpPt19eDYyRVCv73ObOsd3jEgPlehKJQctxHCVgY+z6lZm3g1sgtm6b7sX+lhNPd/71MEunc91Jbwt91O8OBLav8cq2J9aNUsLVHOSJo52WP3s8+n6avWYNtRy2blm+6DrUmaLCbZo+/RUHGWT+Rr83QxyMXNTjtTWjPisjugNGcxRoG27V/Jw4zF9c+4pvfUA3tR2P59LZ9dvLXFd87jQtrQtl/BYexu1Im2zUrwUDJwzmGM/I9ei80RbNEoiQxSUhn2NyTAPm7YX9gs42Ph0aWZG9GnekItqNeIn1H30yfRVuhKop2bTDhvIgCY7/CY+8PEEJ1xtrOsQmxshbAuq88So3IA1vgaBFRXPAxIun1U0j4Yruq5sxZnntgeXvkx4YyzyDdNQWqWUexN4k/qW35MwW4PFOZqXmGANWZ53/BSchEg1+2fUrJTWbVlQDH0Zf4ae6SFMQrXz3wC18Y0ErTV2tDlTCisubdsH9c+RjgoZvx2KB+C2G2FsJGGsMtecWevtRkROCs/AArCFEZHeLc5IQLi6la3zkxEfr01PU8BDaeBzw9aZWwHAaGM+iQwNO+OR23bl51f2FQExhbxwyzf+wBrmgy+Trz59x7FQYaluwQ2IumH2JOTRy/Fk7ofaeie7QEap4xNQKQTZ1DWnHlpw/Yirg==';const _IH='1634597e026c9ece5a733ea7b926d5375f54fdf7e4ad172e98000d2b726bf4ba';let _src;

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
