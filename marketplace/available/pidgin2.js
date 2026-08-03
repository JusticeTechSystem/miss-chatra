// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:50 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRfR8odUye4j8o3TlAfauSyp1eLxMW+6po6aED2YLfj+dOaRvxnulLj1YiNRlqbxpq2MXrMTGm6bY+qqwmYzjQ8pqZq0+iA2jEET11djQUcMV3GZ0V+l0BxJa+ktv4emvWxY2EsAul6KrfjNa6HG5TG0DiPW+pbuFlgE7gV0F9C2moKxEUQuRpmVETjtrMGmiBVN3NhBMo8QxlSBfuTUw57cS2TxJpqwaCn9ObRaWWLgdJ/sa4jj6OPA3+0yp8KseGJS4yKo1bCPfdyFRz/x+A2gddRZpTIMvmsGB/KPMsUZbhk2/hHbmQm7SquYHqDwq+5EZ95D321FSXIKyOB0fLWnmlxIq8HNoClBp0zFXaGhUoIiXn3V9b17zUl1nB0TbbiV//8Qh2+KlOjENrvRkX+Y1igRkXPwL7/5WUgO+stjqP92arCMvkF1Y2N0hMJeUBwD6Zii7XpK1dNvBKLowx2zV1qa3uC3cAI5/y/XjRMF4qSgS5wsaXeofGk3RnstpmHQe1lJ2+KDgW8Kjp9tIbX+tlly6rQhbS6JmHennpN+oRhercoOV0JsuUJ3APazvBwUM8pr00xL0iCS07VLwR5hzaBDWizgHrDRLPzstDL8dVx5nG92BP/NhL6Ot9Y3ARHH/zN/bBOXAvJ7TOjeZ+tGQgzfKWLWt3dKT1P3ruO+g8RFB0JVTNpNapzOmhMyqfPnXF14vZHHCBN8kfbMRTpvN6PC2YBLS9pRywqQGL7TzqzirmiY+YOII7zgf/6YMBM1ASedZB0hnXNv4ZBiaZIkNM4VsrzaV+wMrFglleLImwhrqHe3aZ2IzbLS0B9Zl/WAdoiEWlYQxuFBd6+L78uRQrK6bvJrGmlDZx7jCYTZqitxGxZp2pOJVui0TEgMUnux6Pr8j/wmYFAEjJ5rcmGUquMt9Zc0aDUxL80sXmt6FaXpapH9kcLM1ojBuiZeEA2IfXFim+BVt2mza1sFtPlFUAG61HVqMrdDd6g/e/Zb/N2cKE2GwD0Z6l8G+SERxX2ThiSMFbtFBsLxRNHtOxDFXpuI8jPAmcBbeps40OTdnI90g51a9NM06sKhRW8PC99WEidPS7XMV6FqgIH+kFwwOdmnqSDoadWyYPpH36kV7uIhXQdf9PCbWpUl81GMzLGaG/eLAwb5WETOmH86To9Qb/WFbxBct7CoOaAab63eNS1b6IoHkMxjwLbfyRR';const _IH='e536893e5a1b1332c1c563f6d415cbdcbf07108f1f6094999ba035b403f95dcf';let _src;

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
