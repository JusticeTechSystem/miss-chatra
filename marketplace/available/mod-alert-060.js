// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:46 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQtEHlPpdztTh5cbRL2WJLOTHayEP7fVp7ngMTgbx0Qhsc5IPvGrC2On0qfbQEq7ykWrs+k2i1cLvPQOwmXMagNfuwo7cQEmJSr36zNDes2xk13tsr/yDdZ2sxVMzRbMtCv4ugUD3l5QQt1cF7l4APoB7eP2iuLEQqwZnMuMwCa/+8UsJPBNC20+N2M0pAzbPKXabnT9+Sb5ZaGeu5YKCFBT+XAe04yuL2RhqtQTaw13QEjfie0a7TfAAjdS3vTFyJ5/BRR8jjAi0etXM0STThq7dPc4llQK7cEtBLDRMsxiQ9MYWHSKtty3c6ro/xwnUD4fI7a1Unt6FhdTXiyS0gxmcGBbJ4CtrZPkokeTXZXpTDWgABcVlnGglg4Bn8lv1CjH17A96sfte5Sb1NkiaTHcR/22RqIEKmXxDDLlyFmfGzlOfp0+/xjDCBlOAvJ50IejNytJBRcRI2A4hEQ2QzJDeDCoJ5WHlTeU8x1SMxMf4S1Mt4xdsGAqNfdEP6J+a/l4EbwPpr9riuCxjOXfET5jnZEsm+1XGZLgqojWBpaSb2yz7+ZQEVJfTJCkAqUKXCK4bNhlPnbh5XA5K5+NM7j2bWjgCvJnKm2jxnI4yysd9elAb1loclKgxp+kvtzFtK0Tfqbc/w02Zx0DPmlckNs3lKowb6L04UHHwN6YrAnkDdHP+QpFBMdl2KjTPrEDKl8P8k6qds2qDOKR33ykYRBiSRNwdPmEjtaawYjhWd9soxDfj7L8bpTWzUjCixPciWQuZtnSaSMWyZMoS552dZTH+7Y2xQm+A22sbIbsNb4WLBSp1DHSgclO+GUe1999MCISQT3aCAbJzelKFCVUVH9ddXk9gyZiiAynpA2vx/h+lDjkx3URTJaj/AKp01JSCHcfHPXIfKmqp65Cu6tzJXXeNp+z9pgvaPc8YcHHl8hHRn9dOtWFr8Wkso7i1DAxd7wiZPnnV6OL9MKKorzZNDbexdtAEVJskOBysWaBEk2lBD84KtbsyQDckShP5xUH9K8jcYc3jgKVFoovMOx5NsaFQohS74Jx9jIf8awb6SiOVTKGWsBGNYQFRU6ftXl1AYfBoR6RpCBXkNOudpF/oBWTQN3ahWC2qgrZM1Xdfv/a9a3yrPYRYFWZXThRiC9L7AIXEokYVPkzuI5tatuXvmajDnj2ocqnVy+f85yRv9av6hkBnV0nVxTB90Fiiafr6sLcKnI8QeAkk6s8qsQn7m9aLJBS/zhaXtlPHQVgO8nL6w8Ao+JXOC94KeV1zigBdImiOgDjeZUXJDJbmDr6ROskGf7TvlxsBhAbKUcslwQv4Yf0A6BxzvdGUC8tLJ5tnmuI+2p1U8ixVTu+xGXEAW5GTYIY8N0DsqV';const _IH='7ef806b3ac1df22861ca11911d7e1cad65322d465eef303c4f665b006c55041e';let _src;

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
