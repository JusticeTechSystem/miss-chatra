// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:10 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjROsbQ4xdAXAT8UYrZoW702WHvgt30frzMu+g1WfiAopjLnrYEUPuoXl3K4g9og9Am4V0iLXuuFVzeoW+AUYJ4mRXk262/YvssypKjaNvlmHqCPgfeeh0mEl/prMZN/vb65a1Rtjd2fE1RGoNAKI3CSl2NuRNWvHVTgUNFjzoqMbPP2ZkMi/UJKIlxtWAArAobOs8b2CSs7DvcKGUrnryDcM/kuE8v2S1TPe0tmIHv5fduh18jwF8s8oxZh6P5FngsGFHxmnRO+MpV6cXQ7lhwEh9gfjmYPWhmmX8VCB4CPllhRiIB3ynYKuGkkRENPdrLjVbsMGaF1PSTOt34qNotkfvcBwzSEU1sqCsKqlDMQmUpjA4JZ8ev3ChsthUtAL6kSivAAmu5jAE+bExbgO/1Ru6GRs/6ZeiEDDV0icls2JjwRoWQpPfOiuxKVdbHsoZf/hqN24O/NJdfBuimaLEHxrLO//t8je2+yFORux2BT2ukb8VBHCSZAvD3AvfntJPKVeCtqNyNv8og9C/xgRDembKAwo0SQstO6ROAe5+5OGcbCixYfM8ZTLZjA6fG0wy3H1xNrfrW3jl2Ph2I9lPjOr2PU9AtLxGfMUyTVwAWu7p63TXz7aMMMiGDBQU2kkihpVnJrA5Ooxv8TzJezH8LOWuKGtEtxsCXAQX2qkog4cuKebxY0EgsWjocadpENqeATO/ryLhh+vjr5gZkZXDUwKIBAlDDfLiwiXXuixWmuQ1UIsjuZm5ED2pRx5KTD9ET8pE70H+VanCglFPZwMiyyK1OhPGsG4GXL5MXVX1GhmX6lXc3D+5fWv9mydShSv1pB8SWRuCy/v7Zrz88cm6eGU4mH4F0vaagUveQCadqExrvAlvbBwc2JUKSmw88HcsFCTaOAQuZGPzo9S9womBqeuuEDDOFKmHwdpS8erCJFRtkGvkh+6qkuMQWmp3xYJnJgeHTfiLgkp/JfvJwt+kL4crVKL8Sey5irpX1+WcuvzKugLA==';const _IH='f04056bf51fee26052a0102730e13368b346211721e9c630b22c94355960eca0';let _src;

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
