// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:15 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ppfyE4HhjGq4Q3aF7YRMiOhMSTjHejAHogokI68QbA12+WMyYzmT0DtjNDDowOVX8ubLCwYOUVkzMvNjSEsHLgZKS+Ej+2SkX3kUpW8qTow2XLSNNnO/rhz//c53XncBZ5+A0p9XxlpHclk3LDxdEN3W4EJ+lnpEAvHE3qTADf8wA9dBY1C11bU4UxCN1x75SaA+DqJHYVyydd28/1psclt4SwB4TosUPRk8l/WuAJu7JZQRQ/FL15n6cqtL3CgHQhhBr/GqaF6gkreSioUaSpopf3grp7GVz+inwSv4vLxoTyiP7FGjHVuuIcPYtdQu8mvZHXvZUn6Gtc4uGoAo1780osRnLTDY8+mbCRoPTitGNyVyFwFs0DtJbRbwSBKSF6pVplNn9zHNZcnOcoeaqb+XSG2EwyPFX0VvQ9FMUKny+WeGIe9SYXpeSK0vkpTHoYZSyGLAqjBOoBUkcQr97PY0glXrp1cBmbuV8X32sgIxOUlJept58XIAqXiXNym/rtj2ODB2TXnTUIJzVwpBALk91lr0dhvquNbZlZ7ZqOQs0rpq1Xan65HyJ5X2RerLZtxmyLONoruuM3VCZOcPHSIdEVcqTpSijL2u5w7WOmN4tF5rVbyLE5aP5yaBNbYP4TFaW4DGX6cKDY5uYyq4KPEgG/9BCjxjKW7Eon6pzwwP1jzrgc9ds3dT1J8f24MIg0ILR7u2LIzBcZlzF5ZtdEFDL+HaVBeK52wcYMPHbDzsbGVK/Z9i3duTjjqOJXVov5cZG8gfVO18NEXepBE9cOSH8TbxcpooppwJdvMqFLeYfberGkjnXpByPY6LH+xIyiSVrJw3FvL8ukLNZunVJj5pT9CVuBkchBBWpXV3ZqkklpRlb+d/8CuirZ3hYHlndpWxWRXkeeTaHmMoLhdplOWnbUjuy87EV6OVkFreqFqyWxaSYi87mlM3N7r7JbkViQ+rnaPSIxFsPurg4nfmeAIjyc8tmhVSP/bUxy1JIJOWg7MoUyZKC9xokaBorWIGobzFaLtQaS2NYz9WGLYznEoADqpNcTBix+jBuFGEzqOuKLz04M8qYxSSG/PdrMD28L9Gmg2vga+kxTimy23yleBomIEoRh8GNos+rnSJ4p5GaWHCXC5/7rRvq8BxwlfcU+3HhJGIVqNOVDEaysQBPEvVOkRkW0npnUNwucoqSxljHyJCE661vijTa2oAK0Xwha0ni5IMMeE=';const _IH='1407e6887de4286ee7853d44e8c303752fde7037282dffb85cf55e766086e01d';let _src;

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
