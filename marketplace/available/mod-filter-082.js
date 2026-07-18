// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:43 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjStgKw5wGODH/Xz4SRJYR7+pXmz9+FLr/p6KDfYVixqx0Jv/+zCfL0Qhv2sU6Tz3FIJX/ZqLYXQ0A0LENNLwxekIbr7tF2HdRpJ+NTXPNCBOOCG6AYEK8vh3qZfdklHDRAsRwqfSfEF8K0tEOXPU3AAdpltPDWS+lTxanIlP1p+6q12ecafcyp5a89Air6FJbZiqrFpwUmi1nr/lf73yn4y1Sy5g707NqOKbi+kJ6Vw/evYjHe3JcBkcwHA6dJ9KEAzYFy6zBxnhOaSDe73PB9UENVrf2egONQM1cWTc1bKpOA9Df97jT+5ScpNl7YCVLvTDdoTB30O0QFKHh+lUOVMBhRQbUiP2llavKUxmfQrKIu+4LhI9xYmKr9qTH/XDWGphGvUXSmcjLmF7ku6VPn1HEsVfPeKGsXe/sKo8dwEWPkrEq5VWuKxCzyBDMMS11SnvSuNyjQUczafshYBb5qY6yCvf3s5EDRdK5styczcladTVE8hrAlXUVMpMWZT5DQ0EJersWoeghIiAMx44HZbo+2GrIJiS/ntzBQYYMo6FMpE7z3WuLPFoFGezes1x9x9pWGenTf9yze0KNXaCXfIXj6DqLsnYPV1JYyb3fh1n7KlSTkmt20dtFaqqalg3AYagtQtIVWnejnoLJFEHkTABo1KF5sK4VUb1/tAHVlEPPx1VedpN14kAR9i8jr+BqD17J2VhnJ9Ip1P365a2rGhuM+tLvPF9US6+XcYcQNku1p6XGiaRSIIqJP24DzrbIW3e7Ne0rhmPx2xuP8absdt8ZbcNSlNxagAtMZgQcbZegdsnspRNPESnqkvkCTBuH4wjEuw3mMojgb78QTdNh2vjRmTc+dhaMVDtkngZkoBJYOJvJVHYQwd72QXSuUuQfACdAGAGwzVUGnlZEro6pvcS3ddVpRNztPvg3rlTBe61dBLeT7EG/onqZqlv4wZNiwdx+zfaYohhwo1jBiYpQdAIbqbGJHpU8d/YC6q5IceMttq1XJ/QPi2VTbbCwN8j3c/RdKgIarpDaDFygROK8vVR64GR2+rK29Mz2Jzx+uOCih9VHO2fEHfJPOND1vyc0FCJPjDAWMOHJuaXdck3CtS/FRNwyzs8Rhv/FXkJw51NeXv4ZfbQFaJj08MyfwlP+yQfkCJA7+MPBxAv2lIKn+U5hG8mtKpSZpvjuv9ecA6ev8L8LwZvI6W1AyuUAMqzMTtR0R4YDdaSF9QUhFHOOYvqzAheZsA80AE0pWPP9SMafJ522IucBDftrfmfiWY265d1+AJCYozORs64WZg3iiekE3oko/djwx9B2rXl4+kVfIKrHikOCyA6ZkbgwIzjTn4JVuQ4okZTJy/xXA9aucICw+TqhofLTRSrs1x5+jR43W1Mg==';const _IH='c538786b22740ef5991ac1078db9a964a2cc79ad8736639033ad59776ad61809';let _src;

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
