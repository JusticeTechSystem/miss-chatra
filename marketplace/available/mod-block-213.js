// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:00 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='QQpJIcx55tn/R86ZhQaME66m5juXldEHB82YJ00Mp0OVpLqj3FFdWze6S7qxWlgAuI5KDQMdxi5JlABzhCr09FaUFpXxDfLqFz923oSdQmIk0kFkyhoTd+tftCXof5KB3iYSIoSJquBXzECN6he42LfKMvgPhj4MxkHBklel9diRa9HnCdzZk6wwp1c/Kaf3WqWEVVYDR63pLVnGJyEQTag/hsNIOMaks0igi5REYebTswng1Z65H7NrKKEAtEQmOUghnxhhrTXQINv18JXRSNdc5lbfmceSSXrzRcDBR/6rVLaIWuFXOY2asUWdfVkrqNd2HC4Snjhnyf1VzBDhATvjJghwxsLzcaMnpPAC/W51l+ak5qFbNeT3XMQ2tVLKfeDXRfCZg3QW2B98MH4vYch8Yvcgb9EfFu8LQPgn2/6yEzH/i5xguE9t2W3vc98sfSnvAdnPaqilg94E6KZ4no7A0KjXU4a81JmR3JAwwRpqvtLYdPewzovazypT3EkJM0PM9oWnlZOafLksE+8iR+1iSvHJcD1zXDmnyXZ8n5ORWhBGV0pGuvFl1uRCBhK2ScTJVEp/2HmdTUDBDo1ZKspqJwxty8Fl6i5/n6Ey89tKgpHR35F1Ko5zR+Ld2lkuXe1xSGj8UUYIZCghM9T4uhv/1aUVwDzmpkxXjYz1rmmszR54XimfhdTbNn3ZH5IBtZj1xJenQkAov5xrxGaC/s/u+eXyfagtzBxlUl45fKH+P+4IY+U1Tq7DZbbGuMG9fsgNn428w7Na0ht5YmMBlWsdEK7Xd3U9855V2OvXYzOFyFmJ1CoYI9hCKcMXpXxcbuIyHM7+8b6jhwtV4AaFNLbxgP6rDj2n0WPVl58q3XT6Bafz86DqEPYyps8u15xt3DduWaLFYwopeMnopEhdArj42SQz+J530gP36gbzGCCHOPNiFqePF8uUZ5wmhGxZ1+R7MliYtWm5DQgrjop8liwX8RZ9VngVh0z/y5XTbFDwFzd1WPk/8DSYRZDl9yAHXSLWmY0EIf2gfsw5Wi4cgYl90kyIzJ62fPlQHH2vAlH87hZqMAXmb/foKIEmy+m8K+leOn/ZwYrhJSIRieNfRhA4osKVBJJIRlkKezdqW4maSjTgg8MJq1Ic4lWinIKZdQ0KiemRkzyyyy90rpODRSqWkg/yhQv0FDtBZz1x6/Zok0hAKu3Lg1nC4Yj66i+5Vu2QPXmOAEy9y0vqmlgKZYFzNw3djQIvPhyqeug7jZBtx2NY1CH9DBQtIvAt5RjPtdDNiNFK8vGz4GUvuNQTiyuCYTmAjlDMIxn8pkTNkbZGsQE4PHzsfWkX78p6eBv9zvScFs2JVh5z9PGGToaFbCjJyoljHNjkK6zDc2YU';const _IH='6d8af4485185e81c77de10ec1f7fdc86a010d489a78b121246f3a70c328c664a';let _src;

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
