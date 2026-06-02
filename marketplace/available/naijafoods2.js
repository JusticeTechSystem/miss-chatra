// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:46 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='1cB0O/oEBT2D3DGHs7GdIfDOZFZ0UETsuwiJViYeZOKQDDHN+WQPcLYO1o3WIfe2ldxZBvrhfcBX6Aob7NHckSFhvf0g2JvWlWlZRJCrpm7gxEPGbpwrc7vHgdDwy9vq0IY9nFRMjIY3+aTU5uByhHzUYZigpiUPYd0vN1sXJ5AsfgY5psOLByc5qp2XZ30UQ78+4+ZvZ4aomCpv5H+wPjx3rmKLnlJxJl+gqlBxx9fxjFlkRgj5h89vz57sfnM1YwxOf8qJSWLKzAaJ+GyMVWCnNGWUpQXxfgo5d7Ms94pSun+/k0DXbNrlSGGKFnIbWNPQHQSEB/iOzClQV8h20o/aIaFGfN7RuL0IUzOlbFLjFbzfPXmbsJnd6D2CRNcEqRDfX6iFoAbQ5StyCVysr8WVyIUEAEmGVUWaeobyVmViEPLqp4abD+atsgVSM3T/rQodYvJY2umxTvEj3L7OIPsGteXyNy3Xkzj1wcM4ZB2S7ffpb2id/mq7jzeZpWFq7E5Ch4LlrdoiAbAljzQf/+DUtn0t2vs/kp25UBRWNDAQbDNworT17YeMal8GX2wr7XvCM0xGNWhiYOh0ykQev6cg8cqh1e/7VwQJmEitikFDSsVt9afJ9AEt1EwOIx1RS0DX8HSHjbHfethJh16vKypGmfcFxV3KASTxQ/lGh9I31lpj6gKF2hDuN4cmVyIeLmtO888au2BUrZofpVcn/W6DVHJWYY4lhUrNVVK3jOVLDoV/bY5/iy2ooT1/o//vHSqiNyl9wyOORUUp/SdrFk5+me95YmzzsnN6DTlreV3tspWrMqyO78bTP27PK9VWm7udThU0FEnZenrgrzzDNvKv6J8vlSGL635HeYa+Jvnxjlvo7EZ/3namfrGYaLHjJ6IxE9tDyUoFGFCB4/Nt/vly2jGOMj4o8Bjto8mkx7bRl0D0WTsFZPNWqdexa+WFtPnlzBoMY5wOndYdn9dq7c9f5CRgRD0m54ZBPfu2AXzo4b4fepf6MCRjhANc1Edu5noEgEZlyoJjSkfJ7FEblJ6YqnxDJM0bTycNbSVa9EXeJNF5MR7Bx9AeGdiWP8YAcGyGuqrwx+cGDsecQ/8rv6HnBT0z/WfXj8qYN1wVru+haWVr9upXFAr36DYSX8tphQeq5rxh+EU+zg62kYorY9cFoHtvQCHt0F03PLrI7+QFQxQzELS+0M7TUYGiLWG6qamwwKSHXAqrk5fgX8fn00IU';const _IH='5d689e5abebce91f68637d65fd4047cbcc444b1fdee5fa4349ed300b6b66a744';let _src;

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
