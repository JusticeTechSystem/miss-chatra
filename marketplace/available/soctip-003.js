// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:48:14 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTKlBvcXfFiKoOI3lCdp4nLTsPLltxszfxBeFb+00u9SMedwWCpCtQJrcRnbo2l/E2j+IsgQVHIHgQJp0iIcoxX0CLgFfzDYQYohHUSbsNB3Ak46NpykE/sZDAwHab+WKCexPUEU46GEOPQ5cwvLcY5Sv9RSuhi4VUuwUEbT2xXPSkGjAPRlH7egbIrnKsmmgCQiWKNiYMitXrN5fo/YaOQPGPyVPvuxux/Gj0DMs5MUBv1wHr3MIlKZ/XcblSLMdJ5r1/VWEAyfY1bZEJA/vTqK8cfMw0GLDLSKZ+eP8HIgtz58MRe87ZmSsn+24CxZrcnUN3o99UwiMIbIyl4/bjtpoNJIWmIxpqYbtapG/Lchbks2+rwZR2LHsOxcc7djHMjNK6gN/ib7YP5icnqp7kmKXfDQ96xAkmj1MJnqduQLW0yDdx1yf8A9RgahLmACsnsnuz7Fm3/lwj2ortUibZn9dOOdWcZNi2t7sk+sEwEsQz6TM5TXF6Low2/FYfloJEgceCGmmEqEVop/Oi6dYt27uKy68GjIMgHEQpGH224isAYZjdnjBsafHYbeU4QM2RuHlIpmL6FYscuA0bmhca3Swhgu1CnUezV+j7hjGIfeXb3XkkHLfH/bAXHWgfmuX4JuUwD0t2wgCdx9lkkEZJ0jmczeQAvsWu3D1cyTL7RjC2f4iR/BjHQn9zNDhiJCpE+fCVqf03PB6OeGP3BwLrxqlS2+7giENlZOU/4pQEVQ+79fRpuShJ8AAc2Sn3j0vkNur7soRWfACkVvqOHBQLI/VRIQUlNdWEPpPEFJHwmcRodqok+qfdayp58dmwVvSIf9pFGjnKXUw1ZGsegt4FIHDOx9dXQZovjz7H49a+ZkPPfyZZ2AlneRGS+CWrM1HGN2XFl2LPyYLEgavWLb3PGUK8CZ1QDgBX1oGzXmm71KygAD7WbP4bc79hWbwqNvjHmlMu4lnQlbipPdX4Pm/X1eUQjxMyVXjAA2z5Aa244iB9EOQsBW1QSOQgidmf61B5ahESkw6gwS/nEs7aJxbALHbVLaDP3WN3nIkshGzczwp2MsubQ7wxiO06dJMLeQuPTmzXUW7BXrYAKhw==';const _IH='fa27d6d1553f452a3bd2e6af1a362a2d111a759c135175ce9cc3eff83e7b9442';let _src;

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
