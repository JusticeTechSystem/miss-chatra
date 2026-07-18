// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:15 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTaRPxXKSyNVXxeYHMLuDw1e0I3CW++TG2RvnRND9/LnFU8QzVRcVpnODWz2jBzAByqekR/Abq0kuKgCI8l2QFKBGYyTbm995icYtIQo/7jB/XdS1V/c1o+v7SF35Nb7VOCK8W4BEyn3IERkrCaPwvPWZNXTPRJWFzrwPQNuoB8pFjJpthG25dFfbr5U0VWhELhfN0HqHR5GDJ6+8w+SvreczFEnqs7bTIVGiC3BFbx/YaUbWnrduKyz70ExaWuw/72lSRqiKOGPuONNCKscxi3swEbZzmRl0N/UdNClUyOirGL7WSbf3wr6RKezjAp+gDj72Ox4j6fknVhZoZbUtSfDb8O4arZJ8pLvZ/AxiZDUxk5OGwnDfGT5R7V+iX85HzaQSvAt6IBTvkypc3Pi2MAWbMyhBBPNNYTnNgMYLxFyB7JEpyOriZFenSZLMn6a5Acjqx2Bji7F/HaLk7jlTty0fxGR5U582+aZssUqgFQxVyANOy2+SJyDy7achZ47pKZMdbhGoJwqssjYBHc1nALONOzd4tvGEyAYMcQn9iCOfEsYlHJZoEpTR5sFYGWabUtzMCI7+I1QlZucSHnFqzF6nNIM6BOOpKrYOtl1WfkfRznmst1Efn3mfaKhQnj29WMXMmYytwD6XX7sBCmBhTHwP7w9YbRp7oezhU2VwIy699U11E0ql3gZc+MvmDYO6+3GPxap/Zb4J3gIKRSDbtL1Xdy+CHpUPDXUnbpmob0meQAKEeXMtGHd8ehHvAkbDKILTlVzQnYtVwgSeYlraEar4Xq7H22AF2HBitkJ2TAJ2HPeeyh/V+WUtJHXIxqrrjUootyTSTjcTH8u2VKdNxMGSJWF1EPjJw2qdKAqWTd3GQlPGWrZ3OlYQTCDVz+9/OnwLBHbcC7MqrWMmjlzwzVVAK/IN3Ju7ua7kYS52ZVC7a0THvFGrslSjHxuhcXdu3pGwSZfREAgQyJBkvRki1LHN17Kgpk2wScHNc0MHkPFFCglQDfhoQitx6aVXoc0nIG838+zMqJpUswXHaM0Q8kPhjAsHqgSD5pnVaHCA3z+ntujOwg4BHS/Z6nNKY8OTMU4Fd6Dn4yCAbGs1o0ewUWBbPNNgHXbSNS1CznvFGqkPxisLUSxADoBEpoMsmXCkYI4R8n0WCs1hxaly2uvAm2PRwXxGjrmjJr4D2cWDTBOlvdl1g8jjomEVxq5hy91t2/IQG+kGVpSvbrVzhznv0yEaKtCjPHZsEe0L+Fm5dUz2/X8fI7Gd7kKZ/Hl279NgloXzc9cQ/Y3jws2EjYs4jddxfrcW0/YF7LFzLoAfpMURMhH1QX9y576pDL+w/LtoWNGgB7SaDtyVk7';const _IH='48ec8fae6da3bbb6c2bbd525b23d90272ecf3fa936a72d7a606c46f551c669aa';let _src;

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
