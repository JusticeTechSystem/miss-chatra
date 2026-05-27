// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:51:46 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='VsE/YTj5bwn+/nvNHKA3KH9Ulv1Gt7Vflrl3879TMp6t+qMe6QKbP7Y9ehkFrUqt6GsOxP2ZBcvnb9rztdsogp86yNZUnOAbAQY5OYgbDIb7riaRxI3pJ1M16VAPRrMHgA4AaUggws6LeG8aaTR27PyaGYWywtwtksty8Wvz9zRgChvB5IxBiKJWBud2vGzhiZHdaj8+BxYOhZb0aD7ASUQz8l22SPqh1QO3jBrHwp+7shDtae2mppJJzRkvPnxhLi1Dr1JX+BmhHS/7aHTvFfaP2Okzm9MoZD6LUZu32hFkLQHDJv0afr58yUncTV/KHx/HtappCf9m2kvESeCAKfoDzucT+QeMdN/OcMPCsNetRdNXRVHrjQC5OvlsM4bbLuS3Jmeq46GEgswghjcXCYnV7VIKkMmNNxmliQ74Z2H8O04azA+wQETF3F8QtKwfDyQ0/FOGMUxxYqETW0bYiIahHwM0CRvIifNARuGyn3XbenqFLBz+VjuiSybbPTUhgsFFewo26OiRC705jXhUwF9lFM7YAKAheBMgdHcoHDQMo2AKU1zkvmOH8lJHWvnDydhfkh8nIlXBWbIOv3nukhKrZQELBdWwKuhSSy8YBOOZVWxmJ9+biB/Z1fg4u7+R423tSG8et798L9eG9E7gWNL3Ondw9t3OuwPPXExiyYLTIxL9nbvKS/kPKg/3IwBbuF2pWr+wuangon+dmQrgC3Isyhys0n2ukPHQISVfhYPBa6D4/xecmG802bcgOvuEuebYlJ6xbVvWUhZH/XkNEA/1ojXD3iHEPk3EdyNDdAUQFB7Zs9L2YF5Auzu/lMtOn/m5VRGLWM5z2hQnJ00dTGzQlT69rEP1OH6UfanxFk5JK4NmdXJOf+SMs9OVE1ASL8wKzujrtWjCQpfoqfO9XtscAe6Dq0R/ha/d0b3Donglg+cFQoqCZh/7D/qUysFqSpCnw8humk1muUiQskOYjaZMKSQpxjFGkhtq9B7FUse+8/obZ+x9YPZSjENlhXIsuH6PMphyLAMe+B92Ur3xicAEtFlmCvFJNqEkdf3Cx5yBiSiQCXvjCIBjssZlPKdg7VSGCyltgPFyQN0nMAhC+InqHhLu7Dw6oxCrAv3xgYCkhsmAt43dkHTYna5tigvQV/BTCG2tAuvrWVFC4s922EDN/R6SgPITuix4K6adSv9gEVhKiXHPwZgOTjeX+ybwohl2aFH0/CYCVrLQ5fjs4IyL5FuD24V6cAhK21c7LLAoSzU6NkqC4VBzb2W6AKfWOX6GYdO4j86oFhCynKSikGivr6S2QozUe+YjgVy8lG9bVp/NMzvt+1RUIbeQ7SYjBg2prq3CWB/MW4DTTpXskuQlHWt9b1dqfNapjvQwxdS3eOA=';const _IH='35fe14d87d18651c4ba66edc95b54385116d263dcc82cc5ba8f0fc89d298cc6c';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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
