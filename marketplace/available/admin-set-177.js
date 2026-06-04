// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:32 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='7VqKrhRbjdrN8X0QTUs3/xccmeYJsN0fxREgZBcIqnIx03a6Psog7c6eXIqdN+LbYDwZbFvFLo2ydkjdbCehxf+rYf6Tamf7TdRzcwhTIsuPzc9uApXZayiwT8c+MekzrPtF/cnwj1NM3Si9zLtYTpPCYvyHcTCo+qz60zamEVXYI4nneuWq8NOGsX1qwE2yJVXGwmA54oscoXC2DXu2RIXDJfQ3Ie2cKJgHZQgs6Rkb7DDjYPgIj0r2WMcLhl6MWVlc+kMKOCbxTMukaXFKVR5fwzTSaZAxXLJEW6FHQ875dle7VdgXKBcuUfthpgOQ3BjSCKs6xxwtJsbwYBkj4w7VfRSCm7Rj1fTlMw6cUtJrrP5HVFrNIAe6Ug4SlkXZyG99ySD961JKpEfgYH0WMVBAO35iO1SnPlR3Xdb7qMZc1QxqPgf+cP5BQyChYWWhmXxyW86erwZX0A9+pmXxxDowqwXvcCOG4PAAvgK2ARidoJO5/n5B41l3C3CZFiYjLIGkWfOVgQzaExB1cpA8N84nZcqT3/TO0wwH4IwYO5zo3F71xaMAfCHngiybQc44HHwMkGpybyuCuFfHD889O+UpBIUHlJzEusLO4fa1mxoTe6AvglSZ/2cFdzcOwuycDbgCnegU3y7+qY6OgS9/jMG4YqCCwhdqog1F5IGBW0PoFe8gB8YAsLHA6bSNM3GCNLFc7yetj+prEAzeqhaPIrC/U4zs1gFV9G1Ie8rLWsy3i//p/5GvcU407Ouw0ZzZsaGcij2HHkyWnlWBiMA1IS9RHIAN8B2p0ceBY5qPla7QsgiNf3nv6hoti/ObLJ5XGZhDMdNyUC8j56YdceQ1Vi2uhEmbFxgFCPwHYfpJhGg48xuhLziXmq5iiX8Dwyd3P2Gg+9A/6U+roR2pcc+ZBqGxmHZzHV3iD5btTGFPoR9vjbxyLyx2MDjkkpWtqPgFsCe+/MU4HIOXHtOIRDcP6YPxC+Y87Oz28gOQPw==';const _IH='c3263a37479530a62b3b7b3c7aab435353bf4d491657421177229da1555ace25';let _src;

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
