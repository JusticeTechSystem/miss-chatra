// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:49 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTuz/+ndBHKwVSOAfJyGl78RTE5x3q195FF2uKif/A/NAHx02yLAOTZU44jiToLSzeOX351XeWQ8gkKeh+Xvh6jR5GwH2E/+RDetAPhPxLnU6kVWVZvGOz5vXeCpcF2C50OUliqh4sJJFD221KJW755TXKlJG0igIAmSdU/R3Qn/Wtn3kORlkdvIBGOQYO8pkE8URH8hFq4ddGTsQKahapmmz1MIsU8G8Ref4NAdjqZMgfNcaXBE6xposymFnM6j5B+MR4q0Oro4AiY/bz+cBNipNs6css1cYziMKvZWBMAqjrr7azfjMTCJDFxZINIAA3/3gOAIdIyp7f7HGSlRfWnWltdGC6UkfdClyvKyx+CSCGzJu98pYn1/KqaGXpmeQpke3H/5FQuu+IJIB3ftRGAFBWhGhoNWPh6qEo4XD4sSfExQX/E7UadZj2IZ0lScNsDKXIRI+nWd9xLEenv734B99sk2MFTYCei4lezuIAhE/HseYDsSny88Q5StCQpjlSTz4cDrYlxIgj++mbblN8jHe2zu+G+zlRAfJ18omioMwYRDD+gOT3K0IxI2E340rbUe+2AmkNBA8osjbn0QZXpTxGNGobCcEn2rVbZIMjvG5aHwBNWWZKBys2E5vP7rN1Pi6FfaKEIvdKkIwHMIIKSr4aosXEdhIDtOkQTVH7S+Kiu0YfS+R2jM+dgXZb1CgBmV4kqQY7U42FHPTSyg9Xl/XE/ZJwhacX36SoePLvwnSdHuYIVQysciXCvbh4Ps8sVcS0q8wHSK+Bp3gma1lIM7S9vwpBVuoD/piCvM7Bwm1x136RhQVO8mhJ2MpD0CwfTBKcgGP99hnD+7EuUfLEy/6UxdE9q1DdlOGb3TeYsixyW0IbyWPtNvxVoaDVU2rOOWKnWUxC5NArRQR2KRORHStoAwqsLWZrS0irq+q6GcUzVuBwWUhuAN+Psw5VyTG9cJkmsfHCsDh8s1YhEkpn4oVsdTI2dtplnbgL5jUKNc8GjTjF2r1vQ5fLb38QcfDYEFldb';const _IH='a91d9fa593b9ae3e581d4d0f0cbfac02c8084a42dbb572819ad172bdf75122be';let _src;

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
