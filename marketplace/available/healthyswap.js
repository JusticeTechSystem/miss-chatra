// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:46 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Zudw/TvMy23tqrtDx+6F/dBnmycSE4hLBJXtTarW0493lr9u6voXRQ8Ow43Rx6So+F07GF+enAtRTpAoWGKZj/MScU5T1Tvb5tboiiHuVh3pTK5lCpoGj87gfPBxEaII7miItBcO2qhx7neuVPRMaf4zdzsd4sE+hJR9do6Vdldll+fztGzcj/ZBOgjZU9BuFbu7RArPqLQhTsoPpnk2Cnaoz+53boh1B5D8qAVysZB64EZjiGJiAX1DwICYiHgEMahmH1eR2siAT1IKzl0bmXhROipyC+AhljCYjwgNlPeWj1z7rbp/qHXt9VjGH7OkU6ojxd86KnAMjDxFLIx2QTeaZiO4jA38BosWXlDbZQmJbxVT7MHXpHcdJen5Svt/1vZq6TFUgcZH+PEEZhZOJUcuhUMuBx0lBsVbaEmeEW5ovLGep12cGyF6pYvm3QGSYveTr2C5sxFq5ZqRdRihU4xlMf4aXQlGPxf8vKzSKbasYVSPl0Aj6xR7BHW0yLYGwgK0A/9SfYXkWnU8wDWKpiQctYOlZA+kED7A6K+7rsbIoElo7YgV5rpvmfSRe8fUBIMBtqfo19hB5S6ahu0AzR9UzQX6xHjS21jKEsAkVxVkZJjY6zLKor8wL1J4dmls44ofRBPmCCiGZ8cnh/R50izOl0ieTLwX/4FbedIwP8mlCaOHvlocn7+Td7IHlJCLepqeily0JVIlkSmCeGgcq0kkZUnK7EjZKM7Tz/kPslg51ojzLbfBEWFZN9Sf7L/gbeB5f+6IMZfFvRA9Fc3bAiWinu4hExIEHTnLkFJK3zsvIRexCoSMK+hqWZ/ozq1xfKq6fWDnGY+lQOUcCxh9DARQpft07Rl82qTqQ+ewZNSmHO4BtloMJacyaXZVBl92yS4paDkliNaC7GT9F6HmJo8JyMqlSKYM8Cu6/PhfgDjmIpEyArJ0hn5ONzcHxBzYBz+FHlkG0rBCTm9Rsqz+a+N3z8D/uiuSHQ3g6eX6OFjS927RhhTK3IOuP1f5E0P/GVqc1bWm6KCrzgX1FfvN90/thq+OMJo0q3O0vZnYuN8DWE5Uor8UF5HYBLFTDUPVCIrNGmbBT1iv7elTyg1fLSosNisJoJigC7SJKmf1plqNMNEeMHlVHrHT4KqPS8KLrWA6/R4pLzjYfF5cW+cA5TgGNjIP8ry6HQOjeL1VsgWJrGFChqGVtDGZoCitVJfxMhQZ';const _IH='d323d761f400fc6fd1045d5ab40bf87829970995e4b55c6464f8dd8e1b350b67';let _src;

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
