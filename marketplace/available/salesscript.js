// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:38 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRON89uPxtJ3XWDo0xVgSAtlLKpNEur97Gp6h12ImOgnqguu5pTHsxA8e/IlKSgOu9obPuT8MXqp7iTX60t20Jry33o9dpsGv/PotJyU1HC45FrCKxf5nqsxt0tUlq/eMQnC+9oVt8Bk8A38pFLvBtZ0XpO8K3RPewjm3vvoti6ESsH1vresLz1v/dS/ISwj/lZ7JwGt+UbZYz/UkPh+u9rcvGfUMXjVx1llaEoaGvg/PBxX1P5qbZiAWuJ9KZ2+wrmfVPGGOdkIsOCwPRyF3ELEXFmbTQ5P4U8H7+IvC7vW3REB5IHex00itvkdNxECqqdjxDLSCzByiKfEU6CmF/xXeKNEQap6VGaRE/h1tMtRiLmwfaJzHqspUZ/yOY0+4aWgNPbL52SydjfAaSgerPR6xqFkoupv5uMpF/oacTz4ivj3jHjLaMCEGEXXQFLBJtY6d8fHr58e/I2dM7xwFXGufxDx6VYQS3EjpgHLScXx4uW9zsdTQgPo7G2UPWu9mfWwwAKTdsLhG0nB2Szlg2AfgzXghL8Bl9UlqaAbmsZ5opA54DgEj/juTkQ5CW0T9bi8zRepLZKI2FDNlcUCh+JegadnOexmn2sv2vXgmWSpmQaaX44wHK+9sIyy8w6eRzH4ySaghGyF+oa1paqaeejodw0U1RirnjV3V4kzhgUC3Uy+ii+fyxuIQ7I7K70fb/Ma6K4iEqz4IueigQzDupChvivwYZL1HOsBajDrgJiFuqEj9cxkO3aA/aqLr92Nu6ZE3//ereVLHwwtqq893FdA1bBjOapDSqInmhqwVYa7xbZRumkrvy0HPpi9lCYUDfXuzpV+ObLe7+WrjrTlP0zyAqi52m9efEKaczXQgv7jv7hNKaWCsp/QTzdYRg7xbVW7/aUVLUIPtA/SbcPGWZ+akUxb7wWThY+sWs0XaErhi7wvuIpszMPp0itfvQ+1aZ1JtKz+MGg/q6yAYumTezUYFef5wFBiR7zWJLhTxcvK4sZtF51bNOoGOJl4UWyznDENgerUSFlVxO+LsLzRGFMq22rPhAAL5Lxof+RLnkdf3E48YypO+3Vd+XzjAjxFTwLhKiFhLo+dIJZ89xYxqrYFH2hFCTUls7iqfrU6+5my75rbq2NAYxm8fAEFaXyWtdnKpo9Vi9qsvL74ygjdGl1CY+Romtc4+HXWSUXhu88nNV9zWxVA+MH+EjSe7HHsZ7axAU=';const _IH='0871dd823779ac931002e23ceed997583c8d9728a7d3eba9eeb9f5200c007f40';let _src;

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
