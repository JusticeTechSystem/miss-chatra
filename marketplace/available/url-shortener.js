// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:47:42 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='IeBTyJl18bR5kzhGxSMDOoDB7DjvMqTfelRMfnGfhv5nqAvRroPPcyX6fWYcLwGQX5KXNGqte6Mte9pLizj+wq+f/XM2q+c8197cj+oZ3cFamx+didywSBZEwWA3BaB6+7AiF9iZ+9tg1j4yxDXlsesBvzDE4KdEZflpUN+yWp7f9qc3kGzouqidjss0FUwEz3i9eooSgAlZTJpCb4BxIlj/vKBoC4irgPotuRe7c9QdfNPsi4Sb1yOSaplXIaFcLnMUrCPDwe92IVugxzcBtUPwsW76A8wlnQdWaHPe2Nj/QIJ7ShLTmJAkdRPotYwDtvMETzMBmyZDup6jj+W0oPEzAYMmxvLdYUWas+VO1d4lxY+XphzSvu/RRkLootR4KGO0l+O4Vw+G2KpvcZ+nKwluoIhLXVv16B4NS/xJz0zT2ODrzRtahyz1PdoTloCMiqmdVWyGiAzdOd0mZ+L/gzoWIpQe42VT7abn8CKcMpmIYqr7O5skruBsNsS82RlyX0z9t51zdz8RuNZLLPHvNRvr9WegOG5aAg7nF2RYfWKSfpVEAmfLfVkoGP1Rdpwv/S5bvm/EbOmE/8PXwKu9+dlbrguetuC/C2u5ConAA73wgunW3APMoPmEyV/ne1eeB+IFvbDWAsz34zxQkRaoG81bRSBty9b0Csx3dRE8bGfmjA6t3v7UVnrn8NyhnwtWiVJPuTceTj6aqpYN3blUvh6LOXJqMZMuxz7iIPRH8H8hiH5ML8jvSFxGaRhotoB2Iinu9JeVIH5+WaJclf2C4Aipsbohdbc/fxndzlGBkaoV9tHMUWIhepN0BUgZF6Ca5ywZ5yq/1eV2A7KF3eMKtbd1IazFfrT6AaCnAYruw72ji7zFiz2kC90bWEl5YUU8qIl1NCWz68SDpQ5Hq+NwH6quiK8tEYFCq4fyT4a0M/IXvCkuBTjDPka+G1/PHi/VApoRI8a8W/tgBDerZdbzy56D1SzHQBBXPqh0Hvxwlo5sL/Hg+4fgNeYkhvQ+p+W1Q+Zw+5CpOwpsgjnf/n+U7klcjYFUg5oF9WYnWkkh/UbojSBgLnZjlfpUivqYAwp97e0PmCylM5raXHS/Cci06k7MQlohFqbSCFS32ef/2B5pUZcGSkovI9id6MwEOJeW2BgIaIwoFfvAlmrJBqazAlXil64o1osGrxogYfF+mo7jGOuvu04QpgXWFt4jmAWY5wY5aexZIxlj6UUyO19gj/pDt2r3b34fWg==';const _IH='0d06ad27029c26312d7a3d78656b77ea76ee07604f6a378f4f62de9489c6f1c3';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
