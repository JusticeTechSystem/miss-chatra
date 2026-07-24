// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:56 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjS20wHO6MsaHBK6hSci2Ywl7nt1qWYn2Q00LCHhWEWRMD+2TQs1pA0QscR7zffsBCHrnWIMIX1Wpq0AQFc/hhD3biDxxSpFbF9PZ5lcFpkwd0mFPCNoTea0fxgFT0yb5iGWZQoPaVts5h9zkRKgM7HXca+gUk53YBb6q7GoF7LHpDTlD/vFlhidN/uABntY0xC3X9eVk6Of96k3QHbHpTthMV5Mbtwvhq1qxBDisIavww/UI93q8IBtOR4wcYFsgb6Pdm2UNhVemFV5iP9STzfTMfnQ0x1udYlArjkr301n1Kh9LAm0z5KW4g6fh0RSP2f/lH/qvBKCXU/KbqiGDa4XYmMG2Jmdm4XtlFsr1EHaR9sZbWYouypE5tMTlmqto/d0V/FHMFwwoG+nxM4AE/ZCTgBku76PilTsqUZj65wLKwGdDIYxbz1yHITyXURlIxuBs0zq/B2X0cU5SkK3smcUZAPP62CPGVCrUDPDtgP8L60kyCiCX1KGpa2zSXB2BPMp+N38zU/sH61XNrFIswN4CDmdzCKBD3TEfGkMkCOgMzT5DGvcHj0e1rul+wR35MvrAjm1udjV3UoAn2FS6mw8ruMkr56dolO5HovH8ZB9YChjKBP7Y/MBYRTrjwZT2DEAt1ZnwCzm7NzSbmFkASFB+X/UCc3PrcGKCHqKfreuvs9IHq64u+zr1I0AFOR3ajzLvyPXGHpo2FTM7tX7c6cCkaj5lTpqrsYQuzGV7yxktgFg+gNJ6JysxNbVCM30tfuUL6E7I47WVvxJF1jdie1UaYaSK+KdZP7hmCF+NRR9m1WsRZOrzZoEtvQw8ZvJwEp2cqs/wqlf9dUi5SADUo1E2ZRQU/CuF6P2hPETtvfide796N+OKJIu7jAKsnK7EGWJEn360mKW+1VQBXuayN+XrtPd6VBHqjc20ep54ylbmYZKJILXW1XYGlbfAa0353MSouZTtEaq+sdWbUMlgkshlIdbnOKkSQBGyJQGAaxMVByc1Zb6DophAFWWVjYViT8yWb6RTdKAG2pzuLVY4lnZ9nULcYf87miTknRMH+cTjNjy';const _IH='7a0087b215dbfc0a0df965f47fddf4c86b6ce13442f87aaa21623af5327a8ac4';let _src;

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
