// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:08 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='7awUHYJmOu+v1uWVAaQb+7qcHW5Q2ggRnvL5gmpFdE23nJ9XPXq8DBHr35PcJrnJOEpnWwY7hIUSZqgYq3H7Bzn+3BVLhgijDbt8XUHubT8XngQ66TBCFnLnIIHOL/QQbQakKe5vnR1yQptwwHG75jTV8K3S/YA9CgdSIq3tUToa8i0LQEPfhpvd9i4jI6D9hMtmh9FsfBaU0vcIzMXIGtC4/rAoyrTa7ABMAdQaURVEEReq7yRVQCZY75OAoNt7xsq+5NUvhLGG1HO3K/5qRypk00hfLQc7VzmwDsJ/A+K+yQdslMBxcFnY33C8rcHKyKKSy0ScFpyab+iAxojGNJTF6zMnvC9H0t/D68S3+qLFronAb1ih4mJU3Lgb/ibGZe19wnmvg+/oOMXFFICYN/rTZqqke4NYwxDW9NM7Wj5jeCDkbpywBH1bNhrrYZHrnDEwDp30SqlLaoQoFnMVmpXoxk5nJlJR1Ad1/c2I1fuuitt9yFynSypvt8hEOEj1hhcksF60Pzy36FlP7ZyARiV252wrEFcEyAJoN9GtAQ2tKTkK2dZubD6o+iIVQTZ62+KusKcqslBQEcKGHj1yC2Q6WJvPjrp9MAvTy+3uHdV0QdftLpeVrzsg7XwDZVkfFcauK4ZMfu0KVG7jYqF0eITlcq686kB3HvLEMHHwBRxfWcQOGmxh9gEIo5RvhP1r7Bon6NPattZahaV6ehPKkPh0TZHgG/qWWJXqptWUJJ41QxeI9sOK/uaGt6u35tmQeuVWT4WlQnFdgyxRCVsOkDUPcANZMiWXlQ56UbKrT6l/OrGIYbRQNnysa/RUc5QCrAnPVLuLB4WGw+LTR/VL+N7ikxnaNdwfXC2kYr/oMq3WLMBXXZvAudfYjumr5Q+OpJsDIWwJLuIKBPiqj//GYfr+uwrRsU03U/wUMX8QGjYlbQ6BkQE+SvvaMArB8k/G1+z5TbGRZDrBQGITKwGMFacAHhDF0ZapC7/cZ7b4D0aFLVexD/LVhka1ilHByG/UAhdVWJ8Zq5etsVqQGKknFSb0gCKNQPvd2O3Db0lpBPdmxyQk2a5x/ddevML4cp8AldGn69ueZUzIJ3Jj0AmguSL5hQxQqbeW3wEeQe91j3SyLPjHwM00M05+GX1jztFTVmVmF8vYEW/X/ADVoBmEl08LVCrFDE0J5iYdNoprORBhfZqcm89pR9lxj8npHz7Vppl/Vc5l4jqbtdqV/s9CmpiGMdIgHskJrEa5DqjaVY+L4yLKhKsiXU9u98uCiG04bdMbS+4JM9StqTVYyp+N5LqxmOcheBgYw5fntjcgukT2EgmidBbldjmjRGnPCy2/lt7Bdq8YYPBTh928v2aLTs0wM4owpEUu0A==';const _IH='9d4f5c500aa7b3768bb6c6d2774aa1a9e149f64fb911bae3da2c4b860f1bc321';let _src;

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
