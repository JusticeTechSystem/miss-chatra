// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:50 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSqHcDSl8KPmcRNcpkF7cyZig6lEp1L1/HmRzQrY42qcxBjsf3L1BtLEeggufjtShSd94bxCVUCl6Zc1zDYZkzSwf6WVrv8F322yEELaF0Fe2dJU+ac3WBGs6amKvxl3uDCTFHB6Pq4KI2TBdsEEcddhC+rknbHA36FjjFzw7lQSXrU3Us7HpmLoeeg6sk/wc3vSnCcaxOfJARoZCGTQb1fqdcONFP3KHq3EXphfAXN/otHG8ELk0baB+Ai9ghMm21dGnlvLLDbtuE1rkSLx7wbSUPiTbeZxJfBosJ2AQpIlaQfnsk3Lvn2q2VLuPxfFeQOulBpqAWvkHpxkwRjxzgLgFOmPC1IAgfpkaEpHuzBdMkdifeZZnXzHj4UEWpXBsb8JhLuPNtev2LLUvrN/QbGpySPmo31TNT244QWDJI6irUw2Cu6SepzN9jfwrmiIWoitOE0ovpyTbbl+rnW+dTvxIh1ZX44k+RO08Ma9coRKsSMoIn4D7x4YEFp7DrKMOR8BymCdjuF6Lp1PVttHYDhxxIAjQjOi7kg1IFSMn/+5P8yM2X+sCFs70nQYa0P9Epwwnh2nUKHBHn2mQEqbAdbLTcFARz5cvjnFpjXJl4mWT1odzB/5ky/HbT6QBzHBQ4CZuE7p+Yn6CrD1xo6X23tMG/aL2WxNiUsgXOGIO/f5JzR5MiWGHjPegdRcqsziFza9DjrhzRZ2EGanwSRkIM3KmoiJxe5myTFeGlbRySGxO7kJx+oJphauMy9iP+PZEAV9HXnd7S9aZM64bvf2enqNmGQjS2dXSdZOSNFNXo2SslYuzsRIbH7I4If0Ca3ZAHeuUoE0p5iG78pWns1ntCkRezMZAKEdzsMkSNyf2miTGJXjbhcCz4Dg99+Y0f6y8zczCKBAmWp8XgtNvqeMUEIfvEsVa3luVJOQ7A95oBDhjSnMJdP6ESNcmbh5M8/eBUsCLS4SJ4TpqBdEBYssjsFwX6Bwexcc8VpX3Mu6or4muYsWQmcUmLz4OSbBFUv7lAt+wqPEcFsw+AQ25a8xGL3Jj5af3ICCK4p1G2RQQ+HChkA2TmdYIJb1TWFKGKvEt/wEFRyAwrrBuelIg==';const _IH='b9deb2329495faea1e3af92af0b510bd9eb478d7645e7440af1d6d1a9f208247';let _src;

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
