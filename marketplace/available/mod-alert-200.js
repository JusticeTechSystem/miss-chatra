// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:23 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='L59byGx43X8NFU9GRSddam2P7GJepsehlYU0C1OVDXo/GP57YgB+5oiROY43RDnGF6YNYCSycHr0f40hXQB+VF5IpDBHtwhOvV8+lSC7gDtmHHtYi97D92H66dfDfMDL9JNqSL6osbZQV8my6/sDiIEGK1eIkn42aU+/OWTF8s3rYiTLlA1Mfitxp/UGdn7s/sUyYTTYQUwd27vzICcmMJPW/v1HuxVJEQ4Anv2PN96jko3D398PLvns/XUAVBD3OdfFC3veUK7X/tx+t+zSyDLHP40vQ462zAm3GXlKFV+uIdaTyl/JCSAj76la1U/C3oHc3T9Xiig8maDxKCG2MpiG372jHYzkBMdzmVJddhlitx9qkWqb8HWwAMuUBG+wrhflr7o72nji5bKns26IElz5zzNbCYn47HonPahvPBhb5XlR9ZlDvsRUxpnB64KRCCbr6QvG3eTfiVoW7fSdY1zb4kufan5Vzo7WFXflz6R9zRGqlMtk6JinAVc0XesGwSKf8kQduwkSaK9r/BkqhNZkZF8iIAkIrslw40xJC+MurSZXXY6HhQY3zV7Hri0c2DWSIeTLF5rmzBV7jzfslAC0Y5/pWdK71vgu9VpvcAPfTdW3LGYaLT3dvng20A0RncLuSqXAl5pdz54ZMBPU7mCTQTElpVIHZ2lh2In/SY/vpoArKf32ao4oKEmzb74BK7j68ygSGQRfdBeUROVkbfA/dYslvVA95BZx3NzdDQ7VM4oc9yEiFJzpb9iqIGYji3WjwKKOrWleBW9qcA9nhHXsrDgkwWrNs4fyTtECcFmBRADP/Kvx4SDxq6KxmyO93a4CqMAPXXoB2naJ9CCiJmD6DZYyVj0XbzYua2NyN4JNnEA+1gGlp7Q1isP8BjHtskA4ssXrv5YVI0UJanvP5/9goTaVIlM/nYPt2OxRBDykYCsmkEvf7RdzGb86pWMKPCnkjKLc4XI2JPy/9k7lwP+iOGJTtxvBzdB7EEpDRDc4f/QuJF9miEn/UaCk9S/E9Mj6QRk6dHsEFku1X0ZzTyejQjtDcn76WR8NRtSXID8u4pvrd8kQarHASyA06u4/C45QU/+Zji1CwrXYKhwqKOHftvCP78dEyn3wt2qCE+KGbrGiUD524td+I4S3LrqnQlJGyZJ6aM6MB7oxdMq/XAuH4I5bZqpB6yvSFTXpYp9et/UH3XaYaLUEsQuYbJhjgubKaM1pFdgriZJW1+F0o77yKSyv4mkHQ1XTIxVUX2nIvpKx4clXOmlOh5YbWA4S2SsmfbxzLMoItDkIbNAml9LyMiVFJekaYnWQtGsV6wLYRC8/I/go84n/UJ3NWsjIPBsWs8AOqz0vxCWGO+rKvZKA3vzqu1sIQnmBqY1t';const _IH='dcd4cd2547acc69d3b84cf52fe62d83d82972df76d86c23e8b352a9676ce3754';let _src;

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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
