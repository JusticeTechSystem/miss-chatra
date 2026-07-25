// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:41 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjT+2Ryx4WY2LCHl7P1Y/dUuYs9swWoX2Xo2k5D28FrHYyKwIAirTDIF6jDFJ4OdR2IUvEFIm3p3+v7DMni92HSnXYHDJfSj0a+QM3QGJChyoRMWTNUO/FE0oQHkVoqC9bZpHO8zo9NMJsEw09l73BsR5fl2MxierzM3iXZbnb09TjV9Ub5ISJwdAe4zdd8SNlrozDFQT23t0GPozK28450FcCSjLQtM+ldVeETuStlV09Ly9Gg7/7sk91s1VCFq/Vor7fAnR86ccgxWsuFx7h0HxqHPhMzIjjpT6fxzBu4gN0llcrbeeQrHhTYy3vsCPbSGaoeUVdIBnRMdYqK56XWLHHDc6pE4oGkywkktUyO++lAH8qy6cbBDkJOm0nhzX+JAwS2TByuYd9xNaok6ev2sLIG3uSkHPbKwduRiEmQ1Q93ii9pF3bBFuIF/ZhrYLhKS1qpOwAPppmg/6R/uCO4spS37b4jdfrs/RuapybTD70Kb3lZhuj5Gni2vwnH+UfiWLLc7mdu+o70xdszjyoXbXpLZYLJGSH4GOq8sUglYM25uYxEoyEfL6XUUKK8PKOgdGFBR0hmjDWzSwKHHwbpzqGQGszqF4X99EosmXgIhzuA+wACUjJdqoR0tBnIPtsfI09p8Xd3TyHE5jtUx2SE6EdYxEUaPKsuJ9OB4O3d6q3hEYlrEwACfdGC73RaR4tFqRoiGIhQ/FcEiKXKiBU6OVvs02zqHiCCYNFdtOhNn7sO+rNkkmLhgfSypiYneWLPRW/62FRM9ZSa7XlpyRK7aQc0E5DmiocgmnIrW4ZIs9K1t3pGnHfXmfDIOoQ0A5GfALqK63lJdYKvpekmuOmU7LJihqhh4mwxkkrCBVltJ1wyorEdAmrN6/P7giXMaPjZs7tv2HVODJKyn2Tr14kogjUhqPdR/fBekzu6SgLcQ6FqWMKHusNa3Y0spHMuT+5XoIr+hC2hJ6Mo1PqWVUP7QAohJGRDaEoZGQ6p9InycfLkLrsc4yEoATX4W9vwMSN5rBWrBZcSmNYUBF330YnctarVLPZlM3X2vV+FxJPqXLRkbmE5Wb70VNcLQ8dGcj10ryCVF7O3L97HzArsPPjcnT2d4wDk8c+mYUf1SXTY31abqHolrM2K/h0WbeMrxhKrImztKI0+r/7/1nYfykIVQhn9eKk3qNzQvTI+UP3H8g9J78Mk681fv8PrbupQFp/bWayUtW4i/CZM1ue1eBfqp27+NOOBv1Z9yFlmhOGWdXE9MOf16H6z5PrYyAC9aP7zddkOxqUXe6J2XGjC17jZYWvkNVXRx+zgR8By+c+4d9p10HskK2rzTBq8KPTcuf7Y6LBp/PguSgqt6a/x6u9P3XF3VgtLuc4yvJbs8urwPdWgf+tkXW6r6';const _IH='8f947b123dd4230ef78f84cf2602fd7e82b1d9ec51ca29ab031b8140357c226a';let _src;

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
