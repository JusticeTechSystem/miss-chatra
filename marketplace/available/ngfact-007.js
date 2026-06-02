// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:18 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='2gtFNEUV0dCs8SMQxkX9PO3JBV0QLC8u20eI1gC7ZLtZohYdAkv+cPr5wMmJ4j3xFkZ+DwMumUMAtNLj39xtAcJpCre2Ku2K8FpVpOSi55cfGaflCpcsLHXnhFu5f7AV1zvZL0UDajU4SVopNJ25j64YQpDGI9WiHSu2BXNzEsyOpgFTmm2PTF/CVvd8iOsA6bDLPt8nzE9VRckdlC/Lr/wEnW3/bB2kVD1YeZfYtqCGj3tnMvCmHlXUStfxn61+0ODRKFy8cRJDfVxMgynZQNgkBk2q6cElJb+XJm7omF8mxldNBA8OuzxGX6uaKDvt61D3XLLpf7FLYMDloGjEPx4KnEMkf0wbyK0szXQst7sY2GmEdw1R7fv/bw3/CTcwIKp4q/j269IXldvHxvNak0a078Ib+R17vU+qItpAp/l10E8JBZmwGAeS9XP1wydwLmX1Qr5XCUxuk/RkdpLZ58O4DsoHUv0S6Z5tFRZtTCr8R1e0Hdq9B5CxwMq5mi2Hkg0sYbOSo+SJlb7ASAnNBseily9eddAvyFccZaJ4nwG83v3sei0J10SCJJnkTDgFGMudm3Opi9KvZj2CLlz3jTZdoi0bg83E4Lt5nSgXSeDGtxkbDOQzXB4OWbcwRagoCMVHhUJGesZgngELHfX1pzNwJP0mEHK0dKLneluixcAx0FH/tCKn8J94QIxLCFnz++Mt7oBfJLntzuzLv1yWqsI=';const _IH='4f36df8f7f8c6d4bfb7baf676a98e991a48ff28b870ecf0e519772e5a7e9dc38';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
