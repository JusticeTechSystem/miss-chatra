// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:36 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjREpV6bm5wtB2itX4HG0HOeZR4V/vrk3yEpK4SJ7OBORJ/PDFTUqYrvUJ9gkw3BqyuLnRSpjCoeb4FtpZPKUyIgmmywWpye+YvbsPijva9bXdkirn5BvsF2emC+k3Xsn1EFZJQ5ceX5GYCz/p5jlUpgXELyhrSblSCJrJc3vmK+sx1a1JRbaSJ+b24Usm6TnGqsF9QA0CYph5Tg1Z1wxvQjQO/L3hydruttxwfRmPHjrooBfaYGskpAsaI1PR/SaqByK61grHyc2rAGavnW48GEslY62VN+akzdmNxVVpZ5Daee8l+/BwIFW2SL/n0mgLOHla3Uv6mPOzfbQamRHt9XBFwIujJQ5EmxzYmMrDxA1W438bManizO8yU138j9EsUU4MpY2lylmpqDvHhk9/TekvoIfwTfWo1WbaEzCLDaIecRqnCbH+LuQY6BkL9p8LTzdaZcccYIZHKmaTwa6uT9jCEKZWFDiTdbmKONUxHYNKvKUOUsdtjTnJdmWozuhXHKJqehRLO/er+icgYi1i7seGbKg2bL2onUFw9dDI6gOd18miKPlwb+eFdag/5XMjk73Y0Pi0A9DWXhdpYDOgskDFcEbSu/K37Mcoq1pj3hSpNfyRYcTZZlhBk5amJuGEvtQ0wFXVVViY/aIUD2dxuJ8DQTBye/a16W0AN4r/tW7HCwnONaHRlKfSn0/0/80FzgClODsBIxRoVzayUScaFdUrt0axRF8ZIzm4ki8DulmEmWy9I+j176D5tRPV4qy+Pv+xg2aKqZcQSmdu3/qMTmQuKgEwnDVv/qbHlu+N2XhE51EPFNO+PIV61aQKdHEsv5i9TNP0k/PdnonXlq6UJZF7bWgeK2lHmsgy6bh/sap3j7J2HUJ/cedOkku4sYgqWivvewgSBWgWQMsmqdazTb7RCoQBatd7dEsE9lyMkjLOewsfVVPYpIszvpFMEtS9Kl4mnEZVuJkRXcOUQV1z79COA35EgtHBsDyCN2D8ti4eHlVFPBdA==';const _IH='0d12ae5d15c70af813f8336be0798b411bc4c5b36d050d9a950de610363dcba4';let _src;

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
