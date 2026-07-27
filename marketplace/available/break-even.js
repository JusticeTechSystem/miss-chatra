// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:29 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQfHOLKyCbvbS+tE0lqkhtFHeFHwpQGeCsi7UZGzO2Y3fUvrzqxsL3wBgFWc5yYSGNr9TMnNdClTsjJ7nzfLp3bt73zhEv8LtfODc9kD+Vl7eqmQThoT/I8Li0AWcEsRgjM9Xss6ASvsArhezdwN0yr3HK5Y4u7hFeSgIqa6nZZrCbzO78pf09Hna9U9WHgFRucmC1o4w8mMVwlLqlazK3UYHNnAbSr/3WuR3pv8BP421fG71yOfhFLMMuaGv1MYc6/E7lyx3oo+tFOewf/4mJpd3VVyELGQQE4MD2BEUxUVfxC9gXbFSAL9wepxAK9ea24DV7ZR/i/kGa7zrHwES7giONaW0unEQGi23Np+gdaYakPDYy0ew9u5K7u3RknGAtuH/nXlC7hcdW94tRcnTWZkkGQUJtT1YW+JkQnwAl1aXw90fxp1OnDCcbnEHemXBORMbdR/SCcEc2fon3OSZc/OrTMS2vDHJC7tgCPcKhjbG9yMolYMapBUYorehM6ke/SSMu7F6hclj4OqCcAkk9Qx6+E9thhxijc7yRybFRRn/c0xCoIdeS23H1GyoZqGK6BRYP8a9FrJh6vthrVdYcKs8lrWJ5PQ/WszeO870PAZp5eMit8e8X1quLAPqsXtRFtsMWpdRx0BwYXtkjYfI1Jso9Bq/bGHck4zbWvSgdAg74LN61F81l3B22jE683LKQFswiO2k5KidOGXJMHC/sw5X5As0NvmAbj/VvnmL0iZBmFffEzJYmV2pxiN7sd326STCeVbLrdmt9tPazKFwdJc7agiOAVVFbp2yySZYHK8Pc2zfB00XrRSUufxCPUBXFtAB9Vc92KCrfzqgsbczalnQ2Lq1unfKR+54KStcA1AaSMLtffNTH/bvxy4ks06B2eV0vaD3v4sDywZURP2jGLfrnBpQ/sicwica4z/WrMz1RghGCw2GF/cKR6B078ZI8ULZz801YjTDo7B55stNixbDSu5vqNA5oG/Q3koWKHRKoEEQs7Zy5BcUj7nuZwaEeMoCYBPFmkccXUnwyoLZqfoqmg7Zxje0YtHeJZlED7gooMoeVRm3KJyJL1jBLSqwxk8eM6ddo6aGqUPC/IDExiL84ptXlcbHJfKjnzAX7xTpZGLw/6J1CR3h5NdpZlV7/zihTbyH0HRYcufuBqCdmZ7LzVX8Fb24clJqfz79MZbIVXd9Kgb3xbdrejAPmYU7QbdO4byv10fB9rDgpXn0GiXRmgNYdfXNL2gONSL2jYG0n9D/dhfZnRv0EujyFyL6ybICldubHRtTx5LKdKR258PEsd0fS6v5ENphi+1NYC8ohJLJYM8BT/ROK06vbAYfImabamtlCtgsVv/xtlHIe26Qqhb+XEyUw0rGcvcQE01nBMWEh+tuyFNYJ3eym8Mc0Wd/rMUiIjISoOEyAr9NhBmGFiHSvVaqdfmoiToiPtR7kTz3uxx9i1j6po40hbtlheOf5Fj5NAvZgjIynva+p05G8Ib2MtB7JcRH/iJDcWvL8zEn8U0WUfaLtQzbxT55Jglt/qgqdQGGS8nnDNZrwXSgWx/11+KLWsbqk=';const _IH='39c0500f94dacf49bf053b8810d3f170a24780fd0bb38aac014e9f24c38adff8';let _src;

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
