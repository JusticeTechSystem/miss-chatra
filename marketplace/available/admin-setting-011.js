// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:32:44 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ++JyI3Q0x46v5Sm75ReagmAkaYMbzWuOgCJxCbrwgwCIjypMZpw7CukiJQc24Qxx9NM9o4JPTty3qEcuatrXkRpLvPsaxsUquWI0yOmmkXigCAQZz6bEBG5p339RwgPem1BRXWUCZeN/rLeARuvTI6wiF9X3T/fajtrGDEI+aCUy257NIQtYBtlR2NCOZZWPO6y5kTFlO+/i5zCVpR2mio6ysNZr1FR4Bpu4JCU+Fyqh4bN9nwafJnx1YdZqtAC6CO+ISUgVOaIF8QZJvMcIXxAgcIs3E9c1m16dNH+rtJ75UNARyMtTwtj2XSkme/U7hAhC6+hGJWw6D90BABju8nbBOjLfWKKYAN1fyZoyIWTPmPbV5ngsRzqQcGcuj9OE7varxGxc9Osgr9bV4rGvW3G2YAcYIcLXAMHEvo1eZm63z8g8+LhhYfwnZkJ4hk1OjXBr67xzLUsrNLJRm/djc2/pY4IblWuH8/aG6L8QQXzCzpF2iHMDJrg2wqyEeXM0snP2YP8nLKmoC0z5q8JYAj3RPfAIWJWT1k/rnKIbQSqJht+3HewraJn8CUAa9aFCRmdShkp6np5DHGMTLHr/JoxZP38g8OTq6IzYdferQixTUTVjyt525tlOaxS5jB51tKJ1deldCjUUqO8ZPRAWBCmda9ZmCuQRzgBi7NdlIQv04uCgD1WodX/mLSEKbB50vRJAEDnODTiSmRI87y2IWc2c+qv+Nljzf6mSAeqC2Fz+YDmfH7ccGnDTTH22hurAe82D3+rUdO/l9Ji+fZeBTm0RPpcnP73GfC6XbSllo8satte7MJZyeywk27Eq5vD8uK573+h/laiAXixrCNFj6toqllO449TJIZCXOOcyNT5tfWq8aULU6WmjdtdgdI3j/Og5CUWvIWhBW32Yx7WLHzGMoK9R59w4fpqDVcrXTw8E7ovqA0nzripTFzjLBhDKM5oDsyL90mDyFtHq1y8aw3iM242c2RXou7V+mBOobZDXUbF+GJah0ZGSm7Em18GBS39Hys=';const _IH='f1239198d736e1289d0022d2c17618880dd7feb3e500a8becceef87dc17e014c';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
