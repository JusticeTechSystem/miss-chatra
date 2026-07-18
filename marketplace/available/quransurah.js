// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:03 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQz04ahr9hTMA1V+d1yTtlphNie4QTGGcYvU1RrvwI1+QeJH0yfGHKNFL/QLo3vt5UBOubBLYI0au+e3WVQu4vIcSHthpn0YIow6HizvicT7U2GLDSOPkZirSwFrd6v60QtCx8PyF21H66lRmD2RnsOkSVS6dFAhB7IZGqBjquifqeD55g3QGbE6/3vincOM5f94UU1xWDtQMbnlVorjgXPzGeDtjHNNqfMBl1g9Lh499WBOtHah48lWLED455mnAFT+GOwJ4urJ5UPu7B2xqOA8DIvKjVV/IMok6N116PxYmQD7pfhAoI64zHxtXeXb8GI8k/H9HNtR2oSw+PsHjM6GLoIgW4TEF1H+9BwIjjIkzOdamwU2h2QSn3rZZbbsQzUIMAyeB8r+TRir93W5e7CmsHjHnjhK+5iFsVUuyE6Mw075vmJuMhe586/5u/xevnwlgsqbNQH+/n6gDUoRcjunmtuJAImrzCL/PMTNoI5qenMmUxZu/lVNPP5M3StdrpjmYU464SDHSx7qQIhhMWtWeXjPpszjqkQFevWj1k2YnYvWxHTO7GbTV1nqTEjrGu4gGex0b/nlPVo7o/YzB4jn1grpZ1wdrgYDcowZJnzqIptM56wjousfWxgXETMLa1rxyrKanZV0ablRB5ypQlhuDXXgK+ITsoJjm0zuSZ5fNPEnTEn7SeOph3nFx1ECqFPWSIPgUX489e/kO9sNT2/bEFJly5zAmf93reN8yZOfgHON8rPcxpp9+L1B5687IAmT58bwEaI0KmD29qLtQXc+88tZK5NbyWLY/Ot4aq//2CKeTQpa9Op/1SVq6HBTaQRop1Wfl+S+O7Xj10kzd31KjURBTnmnwZn1CQYeiZ8SpJJBbkwYwDAO+M7IOMHHOXnE1Al+qz5z/42Oh567AbRHwhjdu2z3HhNChRH8E44Zc4Q5Hg3F6RO+LswGhulBNMDwZo2gqcVhu3W+uZz26HrZBSLim3qarzy6F98CiWvfb1Tik3CBb5Xp9D8qXVoEBPFp+tGafIL+ecVK8gDrHU7FkyMZiwulbnVp1m16QWeIA3+e4NDcxnzaekIswIlMG5Wmg4iTCupqLZ9YlPUSbPJ6wOk7MDn9hwHGTo2jd//7ocLkTeDdSupjaFBIq07VBcKH9qzzEqRu09eB9iqiJtqmqpsyZiqXppk3DUvMQs06993pDNyteBoJk5QTuoHQSf/4J3iHxA=';const _IH='37831377d4eb239055b173b1cdc4552378cabd12e2fd56103280c45e630c9917';let _src;

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
