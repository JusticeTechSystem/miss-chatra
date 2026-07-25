// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:10 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjT/MM1q2pPcOJHn4Ip9j7sCZ7FiNMj9WmkDg1ftFVsUUekd1H3mOSOHJNpsiSvR9a4GUtBFt5p47C6sVbWmccTl5bFUVJi+IhwkgRxyX8LCSrVG+iESScgRd8DzWp/X08XaS/LvL99imDsQXvYRBI82MzlkL1TVNO748tL11X5xpJ1KDni5lZ98hSHsNcWdvZb+3OJiygKKDmrw1wggUwXgB3FysH3iB7gTMgh7sheLaKARAsozAdyNc1M1C77jkcHzBCvRr5Vtf/h3GDPkSSb+Gb1fVjdvoEVNs05g2bWt/02WhDbeG5sH9vHW7IosrBNoRiyPw8t1kt5Qaqu8kjFRPr2Jb/0OaUobd7LcnX2XT0Hn4OkXaEI9ODAVQ4WaygmHvagk3nRoBC01kqy4wDTu6DbvUjltPWmhDy7gBQj65tIdyw+uGngz+vgV6eKG5tF4H81qWKq49n3zxdNZmVlvK4jwo8XWXtoTQCZUtj0qfbToJnEy2PjTPYMM5U8Whim0i7fdd1tyvnv4stwouMbUzg3vx4DRGbRfm0wUpRzu7VooasiAw6PmW/nF6eq8tXXSEfAEwv42X1ob1cFHxWKNxZRCZA097poA7j1ubJ8qDzuXsPc+hMyfrttX7Yj0E7oa8H+Zn0bEs+UVUZOE9ZjKEUkRK7aweAi02ShU9FrhwNvChm9Wc9dIdmZWu4mIMdXp8uoSdZF8/MHb5KgO8VkB16mxLw+1L9KJe3f9S8koD35lMufBSvkgdBKNygq40X98PEJi4dPZAEnu/VaeOF2JX+KwsFqLNn5y01cKI2pPN9E6PPCQz7CsB5E96ifVtG6bX3vwn7evE8SfG9Hcvadn33zhhC+QJaKc2jacr6W99ZxSnnaZz3wYf38peoVdzWWKANcOEnc/mGB68nsjsanFQvlKwW670Fo1PMrKbrI2QkqHce86NHg8/qtQMTAl/s5JSXnVEwdRJtRmv6iyRNDzySdzztrkZlt2HQ2WqNip482kzsJ7Ip4mQ+lTqWwzkhzMYURdEy5Tu8ydLeoqX2XVKoDk8pmstf+7Y0Tkezpc2+34MLV4F5cu76HyL6KTJdTkNTgmI/l1XkaRg3l/nIyFMZ17PWDQkyUeg6MjkLAtQo4UVB24KoXcZBxHOE3FEsBzH1e1L7B70+yOiEkYJo+eUOiG9XBQIdkjd/lrgnjS3Lw9dLIguEEzF8gKyBHll/5etyxJSzhbLhXV3JXsVzn5oBbum+pkjKx2kT/qWQjRJd5RQo06LxjWfWUyLIuK+EvLJxKJSCzkZMAlv6UVD0LkNZOAIbXAP/osfyc0dWc4jBQlKv75K4sG6UYkx7WLYPcS8Bi/b8m9Uwkg6Pv3KwSiE+vHkCAALedV';const _IH='e6614585e1101a50cc1172dc9cc86321f51f5981b74a5036ce6e9048381aa0a3';let _src;

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
