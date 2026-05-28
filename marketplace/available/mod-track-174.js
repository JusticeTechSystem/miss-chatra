// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:31 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Rk/XudKUrCJVT9Y8RGnFeuT60nO2j3yIAbsIHzEn4iXmCWIqxUezN6c5ArrWroQIK+3CV2TMIUjLOUpO0/ZewOTRspJt+Y0D4vxBigY3zLSHgfvvpHCeac/vGhsWK+4w1kR3tjYLR5R2m9wP06EUVrY+a0BV7tGQeUxJQU00hTD0oC4FzgtO5gRcfi05DH9P557iPRQLZU5yq7V3wewiRWjRpdHctQb2yARJCLQRSFU5zfu4/7J8y6qD+SyntVRfD8a1N5CImUrXSPW9Z3GXNr0pPtbaZS0tJ5yEEDlVxp+L7K+/rEOZ0CaOinM8ntl3aLY2wMZk55CitXLWK8O9F1lldiLOfzd7lcwAJvGSdC2UKffZsddH6iotV0fZ1khROuFh59JrFqGUzfCndYCIEI89hVwFbMDO1egGkMDUw2SN+hjDmB1UNHvTjrjvf0PPnzjqHgpSlCvw3kAjd1z+qpOjPV0kxw3Lfgr6spP4d8egIDCqY0gCXAJo54uhHWxwv+VRYTxMziYRIzBJBBczb/4/vpBUYebw4J4itcD9PFyQJowU2qwAOIKUdi4KEtgMMusHHXKoyxMe1oauc68pBxYk8bo4TaH9DcCbFC+M4Lre3RaKHJaRrRhhTQkRAp8210PopOg/j5dx+1ocOE8jAkafCfQ+MYofD68YcN91Bd+WyrcS6pXDLhtWImGHaH+XQRtnSZVpOP5ouiXnDAN0SNdR3yyjkHmAQ05jdSnAFnm+zOJWN3w3yw0XmTr8OiqL8kZKNz1aPv9YcTuiBbeU2RXbr4uyTG4VQpdAHoDy9pr+F1vk5slz1/Cnzp8M7n07HRWytoKbmHg9qXrJpwbWITYuJtfJcLs8EsVqNFqK1GjYKLgTs/wIG0qe17vLuWJf0BB1QSqtnPERaZ0ieDp5u+ERrrw5K0ipGAzH5/l+Qny5Y8tS2CmlDIzqpW9qqiBTN2nMZ2ATck69quvtKcgVW9qGC00UD7s3v/djFdyk/u36mq4US6BSaDe20vcArD/81Z5MnhVNp2nWxEaK2wNu8fR+90FNCxiDaH7+NcoOqaFG/4qd3PLi2eJ50hphf+5hk2It9O3SQZPhYhJSg7c9WxbP+4jYCx0CrLC/ppkjTYDmCRE/OzAK1Kth5qTaqUPVtATpWciClkeNjO3guCF7G0kji9K56mcyZOrFTcEP9IriIa7wodN+j6+kWNE+Y59dMp1saMggnj+j3dGvWx5KoTuBvuozbTCmbVtsi8x2ypD0qBvf7vb82mQfpaFKvCa1lw/XSaYuHicGHB4NZxEYUk7KNjuAUaFQY78NgqulOz79GOsoSogsBXVBVS94GyXPHF+6Loh9qBQKPh3nLT7TbmyNZnfmaGONsaZqDvRd';const _IH='c54ab6fc34b41c9de63239eab7915536cd1ca383e11cba1bd19531fc38899d4c';let _src;

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
