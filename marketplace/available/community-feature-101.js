// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:33 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='6mwvrGoZbMTGns1GUMHXD/y1UPrylBGMdSwU8d8GF7a9WgGjIvgT/DN+Z7dwKOej/58YwPXWjIcX379R7U8vI93rzBtJbg873cZvDgzovxi9OeAuLTI+fSJ/gKY+QgoTLtBTs9rAJifnnEC3BBOKTKjNOl9JZ7yx4Dfqlzd9gc7BtricixlB4ku6l7DdBzrg5okZLQwuiuDtDkSi1/qwB/y+RN43yjsc95fu1BjwO8DHE/PQlap0cEFpdFt57vowQKs//Q09VKTi9tgH8NVMr5Y4Rc7kCvzIn8AyoIciseZgs2gXYZkPC2k6oknAMgGD6NzqNzgdaBLGPpdBe4spCtHItGcnBwNlaPRqXFEwb2WxkUhISnJZDaR4vl2tJVoxB8CfEAfDt6DUrVOrqlo2psn1m07nEENW4i1dKbr1pxcDxLwkJhegPTu8SaakuBIf8hBLKchrBTpGM8r1DyjcvxxvbDNNgDaGfMlDi4P6BVvz1vm/D1e/8mQ1icUXuM/AmKcdhToTdb7pDUgDDM8O7dsVhb9sgT83Q09y09mpIZTzvIakVhg5WqBVeL9SuCB9LyK2tY3I2IvbQ72FwPGXj2pD2zWARyViGX00mi7/1cplSu0HmEHo6wLWmmcsROjBMrWu/ScptZGAL9uHkArBlLU/dZTFoekP/Bghm6WrgE382hIZkmvxTKVP+9/dGjQKNbTGY8COUTpsAkimbHtdxUurzp6GQv5f';const _IH='cac1e4ff52ef6b23796291a6d91bff448223f70c673fc473250442d976c5d0fc';let _src;

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
