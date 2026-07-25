// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:11 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSECi2Ayjw5mhoyWtWOiVsHGgGGtTLgAmiNY8OxTf6Q4BoJICB7aWdoqTwL1oIcKUY0Q0fhCJgP1eXG1z3o3p81i8JjK65ymL65rjBCPtZKo40KLota1bmfMUYAGFAajHpTq0kuw9lc+PhdkCEkhwgIFijP7UoymzXqmdLnttpz1jKPwgD7ATaFogGXiX3W74fA6xlQ7C2+GPDsy/FGbx748+1hYYj/Hx9WD+3p6nNaieuBfbXlF9nZbeIMSGG7e9k/j7V6WWia9/3Gve60bfIaOBhXtbv1P2VZwrd0cxR44WdcXUN7YTBR0pI74cPGXo76w13F9HfGyHhGwdeRZur4vp0RqJxiKTeLm/qJwx1viCkXYylsUZ40giamXZ8x1SAFLARojqDWzMWpIoGP8qYAbI/HSDKih1VZ9FIfXO9lC/wSADmjNDaXuOX12RwE08PBdOQReFMiGPtw8dIN/VDo6M/TGXm04Gi9ru3aZQknLQKsff/Em7uQek7zXcjG+5NstZXMrr43y2mGaBA5ol+HLeLwPyNoHgw7m8HUquxCegn3GddsHoUtDZXY33L6MmOSLaJifMy9T58m8ZfRImVOpXuROHhz2nd5dU7Pa9jn9G8shREObvaTN0xUYe2NJSrf85crWb6XSDYWTe9p1DN1xh1US+IHK4ON07igtCeNZ/OkNyQ6qEW144YFXGjrP62pXbi8Z20J2I1Fwaj1PfPCFz3W77P2O/YwaWyjlRPdnjIYocJiRGmcvh5q3i17iEaOJWZBPCX9DLiATZdB2b6hxl6/OSwXRfMvBrU2+StsDgyOoY9cgoE+zPTxMVCVwm7Ei+10mIthAe4mo4CMHFyjB+oSs3XP3vGuH843Uxsr2TUMOqhu+P65mPNVbVEScD/xQ1OTjfypg1yM/yOL0ZfHPqx5nTcez2UFz750+JIERrhFERV5632QyNbERDzqOLhpHRpZa9pEnDHjS5eqEvy0dn+/t0quyB9XoodeopuewgvqPC0aoHTrNXpo/sf1/kueJX/47I9nb4ZTzYZI0/iAt3NHH1DYyIw9uwJ3dCfl5PwFdHMbuCOb/rJyHkt7n8b9B1x78EqdjZPB9djIsnW+C3J7+Al9NEv8Ck/ON8h2pv5qne/FqUahEij5TJ6BjAddFwzpfTK+MsQogo1LgnQRn4MWvi1am9pgUJ9de696DvM7HqnmBcQHaCrPdTPnpVXPq48hXu/d70lAhhRPhjimbFc+VrsZQ5tSafeFPvEX8OrnfpShgvzpUBXc5JqPn+ETSpWInlVNGNxqu2t/cvhgNvxNe0Pz7SHkxuJlSKcCKkAce2QaJdtl3U1JVr0zKukBPFdfLwSizdMmX/H0yJC8NNgLBcdRX1Axdvls3boYWc6K+8bFmP0S';const _IH='f43e1e85876f509ec05ff8193e026fb6cab454d1f3f3cde39e7e9980747c110b';let _src;

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
