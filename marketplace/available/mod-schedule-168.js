// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:30 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='DowhGSvN/E7N/WejrgCupCiKmFEyzsinuapvL/gGPI3blc4/9lrw03fWopHuXhmx++RJFRdo+Mwt+I5nvttvGsb9kfl43weugFdADtiAALoGEoMPYjrDAUdHNvhsLs74hRsCqSKUiGgo2KojfG7LB6q8YThsFjGTb1u9t3jJpJD10DBgCbwkunmdI9FktSZHtpemD97PjsSO+oJGNP9ZBeWoxSPGIkDFmYDi3mB8CtCUG1hd9IMiqQJ0Fb1atZDNSRle3j+VGA+PhNWo8G9tAGKUOsFWo6irU+9tcM4eZODWX5xdCftfu1rO9jSL9cR3ZG5CMyB2i0qKqqDAWRorbrbyyiW65tsQgoUflF8zxup8rJDrtDNom/4eqHCtT9jTdsEPjv8AW+QO1LUwXGA3+20fyLjsITG8a9fVrOlzITquxFC8Wthk8MXy5kqxFSMSwWNIAlOvyeAYofU1wWsOkaaHDGb7LxAq1T30Ye6P2fvjakNj/CmpZeb1nsmMGg+00Ti1aNKgbl9tdvJ+rIpQ+XHvnVqAfUYjHvDTT4is0ArVwlM8x9VeF3iPIEn4Oc2FdYnejnJW39OCsYoABneQoQuJQhOYu4y/5/TrHH8Rgg+Hs1uFWgaCDnzK2jxslycMBmgVK+u0eP8+WYCtg7Fk6DSL9eAFqu6FgmbbevR24m777Zoo15sKCaC/MMZQZKdOZoTfqO/JsH8BtL1H11rORPz4emKM3psrQ+Rx94GXTAJXl6pk3ELJ2fKDtKMTWIM1l8iap0yt7QJs6FmHxiD78kxLVwmE+uSPqUOHsK4GyWtU6oze1P1bVeI0UrVez69n+/5T4GWwhxN5mN/UlLhZif+9xrbhr43RgFW6odANB+h2iNl4CMbTkEWqz5S++Z/pCCWg2OoklKKbTzLGwV4bZh/H44oiEg8sfNC63I97RKpfCEg4ulDyxngPYbMytZgHVXKh1ZNRleyGBIT0rkZsvM0hF68CyKJ57tj+raOXDRoGxiy5lkGGc93T/Cil6wGC1GWYboPQynVY6eHxiodso3sZnCEkDA6mppQZYtPohtHZHdOtPz2aYvs2Wr93+HGw/w7OLdWXGxa8p4c+0Bvi54kHGZa4fv8HPiVBLnA8lwPkoiSKuU8L12N2dkhqrEpDjB9RWWVyS8vNObuv5LnCNt13wgARcEqxX9eTsU+bBTq1HuJ89uv2lvhhAzwHoWt67bOzLiAYgGvfJlPPfnlY2ttXIERJzNg+1pU0/NoGGHb3EFs/Bo35LHmjihE/i7F2FEnZ8AqirZYg6KptjQE1fsV6wnMzR3kSe4StBZE2F2R60upUzbxNwsHGZwp6Q++wxSD2Jc7bWOJgppUwcyWNI8cLmUsmvuRy6pM5tZfsbLkT7dwzkABMvHtecn0Nak9wUpjbmyJQlp4f/aaE';const _IH='18cdbadefd1879ac9e6f517d64499e1a432eefc0c5260aacf222f32f45dbe8da';let _src;

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
