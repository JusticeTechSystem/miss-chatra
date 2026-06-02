// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:39 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='lAnysnE3fXrU2b77bmDcAz8qau9xl2XDfcnovBGpHWsW+ur4TRLMd8FBpEzhVO2GIuHCfPZUTH9wmed6GsIMljPAtjGwKJ+c/MyU8I5rGvC6n4rcICZHi39fPrxqyfFvliBer0RGaqHZIhGMTDW7RurKhmb2zqTGr8JJsv+1vU9MncjHJaJFpidI2OdmHqB9miK5p99PsU1BVRWcTrPRsu87I+o0jY3Peh0sC5TxKuSHIhZB3PuJLOEtZZTXJ6ERus+tqLeI0PLaoK4xM7qj42kyTVqL+mSJxo/1vtyE8WNGrP+4NSVv5WDOyJw2Qfge0+LfXMM2X0doXCdJp56XkXLH4Ini/xMcFntTeCALPUvBgRSePd4SEqi6dBF4x6G7K5lO6baiUURzdMKbkQvItjuT32592Ko23RTMeBOGw0ryEllKLbui7LfBSgMkO/87+L458YmsvxRcg+U/dwfSzzvF/xb0NR16ApBnjWuv9pki6pdANmH9jiWEdGYu9mfeKW6lDEJS7DVisIHj6A955XE17y4QozpMzP0UgqfNBLDlkq0amTBYFFWGChRu85uPkYMfH7bZR9bIEZCTtnXwkntXkzVp7B/SzH2mV3EzDnuaw3hLIJHoBja4ez6u/+mHoMY41Iezc0kkFno8lMX2cTTYa2K7ufEmlHvKK0yf310K/CeX5ytsTsljJX2yCRk3V7xfl5mY8oazoejYGOwbYKSsRqs7QrgbJhxHj93aomgzBl6hv/doY15PL6puBInh9LMaseQkZzHfvau/h39fu74C2lPq9uwYEUc0YdFH1z7th7Qq+c6M7gEEjQ0XKWKeDg1HAkYu3XMH1q8+pvkCJHliLcAmH1XL+00zaAEXn8WwyfGC9UhfSUmo6/SJSQ97PJnn/n2xW+JzHF5t/DeZl03s3ZG3nkuGt1bH5ROmbCUIg1OyhWckvYP92ZoyoFzkYoPd/VvGq7XfSJ7DQXSe6xru2Sqj/KWsyO1Bp7+EVvyU9RkggNfgGqV4m5ei27Kzx213lwaXclgMN9Tizo0tEvTUVJ9LklF58uaM8aQwnM1MpfkSUQpeK2aIgFeoHvq3j1xdCa/hcXt8ZbOa97KZjfErWrb85pxt9kjWqPprRf+1zNkQ2z2xrrjoFEV6QcPWFpvV4Ll22Ygcaox1bgUBnTyeH4CbSmjIgQSnQc4iqt+hYzQpkf4XYZZy1IdtCL9987s38igIaLSqG8zzZ1gyDNJb5tZgxjT3ceSYaKUgVWUmFLn4+0XhCH9iF61mGnGh+lArViTlwp/fFMdGxf7KfPEdmDfykdopwj+u/Ovnnyf6EI/O2UnFuBf/lIaGC72ETVHgNcLJkoUDwtVGLaAMABRKDNAf0fiV0YGjwUT8o9BhSBM=';const _IH='96890744827a55b891ec75c2a549b65cd2a8b3f9a4260d3ead142c5505fe8f52';let _src;

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
