// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:51 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='j2mhJcSI5V9Md1SAf4hn8dz83bIKKoXsFodeONALyTyR/Yx5MGPnT2zuPGFiw0sR2R7SZ8uLQ5lX3++Lv9bEqoD9vsQIGuphuTvfteLC46LbBFIiKh+UXbGKv0VGC9saByIsiunF7GgnmVNDmhPAdoR3A7npvThMBaswun0Yuv5scxcnQG0FI7Kxa3ALEavJZVJ2pdDdxGbADipfT8Lcdcc9qh0vO2FalLhjZqsM2mWnreQSWew4A0zo0WWEu8aNbcA0r/yy8HCAlf8A7I+yd7nfxfNI71QNZTLULW4jf1DBj4LtUtgS5UfLsjd2jKHa+n3hfpVhVUkmmatkYwyFrNEv1KLkCKriO1/JIF7wWP1UGeJmnAc1Kh8/NFwvBoAIJgyPNmXGW9kt/LhckxawX8aXtmmwFJPzS1VNq/NV6lp69ukPxCCNLnEtRSYIfi8ktYpksrMU6TRI9uoMY7w3GO3mA4u+g1hQWghJ9zEPflkmSV5NOqWhyoo9scZqdq0Pr7/W+Bch/TBvMgND9EjFAKPjv4vji2ai4P8NgrsElJ+4nNJe009LlRU9gJcVIMnfTfx2T/GO0RU772nCQ/dRku2zTHnG94KuTj/xTvergzcTGkmlxD8psc5QMxkXG7W0QZIoGeFXlvVHTVtvYsjrNMhpOlAv39d/j2XzypJZ6q2BiI7q8D4/aqpBnOjQPlReBZW9oTlV+ZggzGsMKel96vP4GLNm/Pulg1FABQ4WZFH4Yse7dUucR2IcoZx1HHxr/lTlnj3onmHY5+IBffEEYkf2P+T2YgdrOkDAq6isPYYknrZPvVmPk6ujloNU1KJGJZ75A2XtSZ4aj78az2Mb4PNg9BZ+hMGUroNQXj0WiEU39gJqtiPGwe8khPbiYDUI3Dvf5bln6aC9biYBlgUGoxvCpsWkzbioPaxUmROcsCz4T83wW+EUsselWdvxDryJowrLxua4MRgJ/RB/WZvUHq4MgKck5cCYboFABNkZ7qtGJtSbFTsXB5z1VQkXn8weWw==';const _IH='e7dd3253af965ebaabb5d6babe88b02ec823b5c6149bb87f14d47cc5edd494d2';let _src;

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
