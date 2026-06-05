// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:11 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='2okwtxdRTEbc70JwGtD1ccAoraQ32CVFZwO9YD0z6/YZTbdxiNJ7nFjb4GOFlVtUNh1SCGpI0OEGDTp6yCHXjCADG/F+2J7EcvbnaoTC6bCjqu+qze5UEv/MgJfeR3TipCUv7B+36IzMVOdh+F+iIYjwZpvg6XID6V0k8p1ttKF2gHYLvJkdeCtkIyj8W7HLGaiGPXKwZiS8A5DTcZASmRyB8QjA9jzO5dujz8wOwCyVd5N6jPDrlqICpYUN0w5g+wZKt7tz6X3gdOMsNYRFy0R/4SEth2TuvIhidaUyXd5hQU6xc2FO3H5zyLyjMUXcCCCQ6klUxDw5BOPSU7JaxdJqQhkCmKP0Mv/CQK3QSXYbup6NRvLbaigehqI9lNDyXoyLTeR2ej5wpEe6vt5oKLoj1AhthwhlTpcRue7/ucG87huiYnA96t+ml39+rA1OIeM1QItKpj9T7bdaSggCeg+zolCy+WV06nbrZIYhkNRpm+zy2TP4cqsmg9vRHp10XYy3hmcRpzP6TWbu3K/4jZYqrNumpyxsTceqlWbAsO9QL8xBPXJ2VwOu9ooDu1LKsZMP5YXcTldb5oVuYy6aSQgleX3ShNmu35jLwcBK2DQNXEN9pTEBqDka1tGB293XWLNHYVxMWYQxfOw/xhGCctDUgrRE2T+SCDgu/V1/R097P6JXS717dnrcwKMTDUiVopTdK4Nsk4OkPFczbAzMMsrNoehKw2tcSQ5l8Dg+irN2FF6m5K6AMtaSrhbgKIwigu/PMn8NLoRXLAAawwZo/wOInDygDWV5eVPwU18qUGalq5HX/G3ex+d2tJ+9QjMIqWo5tbHl1b9+ryafeTNFeIRWBKDZz+vEnVPBI0wKJDPABXh2bJQFwxq2nhCnSIvWeac8FKu2njk/b6m6FaF5gwl/5vM4ObScdj9xLR9E5loO4NT7Op8M5kL2RZupkX8cOCsaJV1BypgSFd6LxSdA0D/35NpYPEa4bmiaomAynXrx61zuXuLlufpGMfAxrHGLeP2v4byp6zHQS6s20ISjhgJF10tFXB3IzsTtD3CTGJZc72gF3kJUBRduIWegyquQTdd4AZnsFaSYuDlVOFWubhCO5wKaBhSY/zeRnGRPQn7V8JxXxUv/RGUVBgUMU+YPSbDL5rGmB8stOSMkMyyU2njaY+kZ4V+aYbHV0DxiZFbSx1DWq3tyo9FUHt7enyIf1KQ8othA5OI9Obiwraw4km9bZ9Wr9C/IHL5Hpes08+0pvhvdDydmKeBdkGjiII13VOydcmpTRJMnYRuok3J0csKnHuazL9XZMdvnZ8qcpRZac4TDIw5VLgsnIYm6GskMVYMs62O4BMdeqnLxdErEDDSW216NNxKrya6EFsSAQ//+oL22hPeTpQ==';const _IH='59f09b05e20ffd0edb5454b8931a739c022982d382ba33518bd421e6ca79bd95';let _src;

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
