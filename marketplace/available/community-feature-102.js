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
  const _b64='UUVOQ+98cYmOGm1Ny7ot/XX37UtAj+2bSn+6hJOQJzrOJvZKOt6IfeAbKuICvhITEVatirLiZYeZmWw2xb2wWg9s21edkxw0ycDILFknP6NM1mPKaDcpPpHGf5M+w01ASv2huOTcVmm1IMNgr+zVMixAJtXdZlLIZkKVmd4S8jT5/SZ8EF5DtZAXat86WotGpC4NaNbQiWo6T4dZQOaOK9XpSxWTzSkI4B2RXCJ8oVgNeSYf4ohhNNpyyP78wG8bA/VcTcE7YXnqRJkqz79V/3iEsCVPOinhynZvs4NK6jQDkjDZqdzYGgk/+aU4EvHJaOM8C3KYvS8OPRgVgaMBPbuKVtKuClStIJyopljbcYubRX86hoCsXHZfviXRA/JIYR8JWK8iCyKoDr3iDyDCdzs1VGochQ21wa8hezf4Co4uusiPpOmYbDTRkdFtoawtvEcOLNu5kDN6zqazDp2yPziLoOOPz2bjCUrZkUcY1UmfXE8jEjwARxMhO3G4E7I6zy+AILEjIlZ7izF/LW1assrdiQqHYJPq/KCt6+HTR92l/En0wNIUyZlCjWzZpDCfowGbuFT5hCPdHZ7+lAtBEs4DWDpqlG78QdhnPIb8t9nRFv/bnSy84FBWxMi5BO9Q6yGWT/GSMcBfaAUxZsjUVq2o2NeoGo2PflLnHviYvNwOzwZgF9+id7CcRuM/em8n8BP4qCwL3hf27+K4sdRwI99MSUxKYNQjYL0TdeUB+jOp/nqPfsvC';const _IH='b4229b47cc8958cf500c135218a8cdf8c0cbc71313c332dcbcbd1a5df7a3a46b';let _src;

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
