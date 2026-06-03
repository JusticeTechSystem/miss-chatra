// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:44 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='CHXolTrKBXBZObZ5MJJ0C4XOITwNVYNa3XRGfKvGuGSq1y8Tl3vAeb/sFh3CukB+q2kHVKfPEJ4kIPbeB1OudTpWNmAUr5Kfu+WVO7JCe61ZSSNAnVts2uNv2Sn8s1dKgzzUHrr5VDJsSLJUeNDLc5MxOhGegFAFVG2F0+JgTw8Nu9OUzazyXgD/N8tlyIU8jiSkkA5E70GMC/wpMhmTYAe7RHtLx3qauc/qbp2RqTf7zFGvRobI+Xa4LI9t8EFeRKu77gCuch0E9YSp/hh5+64N/NOynlYGwMNsNcsDhmtI8NxHrke/YH5NLTG9P0F7LZQjaHf5oJWMhxEhWhHB/MVO7zfPRokEZudx3KBCm0qbNliSCXTyvnclIbQL0cWQ8ER7WUWQ8IDqR/0Ma+j/3JxBcuVXGgRlovciw50PPPQ6IXFkbBEL3asHtFl2TdK8w6Xb6FpnhY+CxfHr1RPBg1sE7CGckmy7Sy+fdTH/7v7Mk4FZHo3P1aJGq+a5xNmdehghj5dveB1SLSEzdgbBluD1D08KbeFqnG2q+TrMD3RunQzX3RWlAIi+8ECFcyHO9lrj+CqpPrHpzYHkq+NfQW55S6ci7PrSHS/VL1721qtZUOCjMUtFgjdYtMURhYEWZ7kp8yc/4Aldve4b+8EDSfuwaZY5/hkXeEuhQ2pJyaVDUT5TWKVH8ZxjAOhSjXF3qrPXrFDhwPsNBPEWoQJWX6GzsvYyCtEQSJWcni2bu/2wFKNsXigWw4jnaIwRHJU+yqlD/Z41AuJBTLK4IkcCd6dfKf3OmXelEAcRRxN/Modyxor731kkhLfCuMWbk6f58oOIp9aQWjV4CACq3HFQnG0annltxTy9eZ5hMJf7fH1pwR/3EoRHhYY8sUByO27F0NpJv0i+CDdJJsSsj6zd5LtGkGslZGpVm162qjfMpYhy8Ho0xmXuTPq+7zPUijKa/DZjFoPheq/iFonDV1pkjO2DfJpsUqKj2PN17edgols+6jJBJfMTZ2SfDRnB9MQ4kTD6I6S/A38=';const _IH='667f7a657c4f4c11532eae09863f091581ceda9cbe7da0d2694ec12250ea133e';let _src;

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
