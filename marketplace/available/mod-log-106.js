// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:26 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Ol2uvFBVAOx3+GQxkZ+DBT8JHNB3Tm97xiCwN65Yi8lP1Q4in8SRYGtj3Hst3qoYucIPbjcnxRdE3fi5Wu4mnkREHip0hV7SmlaBtBcYXrLLZbrPH0Kkjjvb3Hf+YGD7xE358/xJNxPzJauRm5Ct2511VTip23RRPjcuIU2US2Bb3I54HDnJ9NIyXkopyMN5xDVO66HsWYkO4CeXUgq+QXZoWqGF2wLYjXEWU0HdXmrbPg+72193QVq718XBCNKVVFT4BqHLpaKccffYSPpydobyOM/LFeW96UQ+HjXYengt+WyfuRq6DGx+6mjyCNxsK/0Qb28JvmcStZhkWxDE5EeB/ude1iCejnM1rTf3whs4SznETNM3xHRPA4aSqV6jLUUrAq2ufjyOXMJl3D1lMti8qKR0sDR5vd1aNVft4gcYKcWUxWFcPHbcrWAHyqIRViN+5QNrko2X47dsHyW22+Mislh3Cry1ghuIuL8DQoLhj+fkHEEKsrieD549ZynS4kwMetLtgGol8/mmvZpUhuMYimMtT8PB1fcKDS8QL8Ir2xHTfhs32h9DUBPWltqtGBCOdkzdR3NkxhpuY3Uc+B+CLFIyK/GtCk0pltrWGUOhzImpqCXRvhdFeSm7mVpe5lyfO8C6rP4+KD8pXCk3vtLswwYhbCRHh7srXNMow+ZWuyNjZ3qWsaF7FRx/4hNudY3OZekoOti9/QO7BWFbjB9ArWEDGPfSd8BvBaF3YvviuejWFhbfAEywOGL3ZE2Gfzkf+/fQ6GOhLZP4tZX/V+JAXgfehawu6IqyrXC/Cc3ZYEE4A6amAhVqX2mJqMLXZG3FJCuKIK1F8h4vj96QpUPHJZXimELyJErt6/c4BpQxdmg80VWAw2OOhQqRnxm3JpRkKGizoq0TTp0pljCjO6BntyRbsQDyf60UuhiKcA8ymc48aguTa4lm//LLtPbtxWppePuzMFXDcUINbubw2MwjtMHFXNn0+bnBDXzIo9PIRkUn3wZsgE97BGWi+kDi4EkSaaX2ePO5uICzDRQOuQhNc+vmq9a6UUSaDqnXiBIVHPoFcSUkMsQbVrXwocCs/T62QtPkzXv3KPhdm5g7jSiJcjqZrZOT5/f1Mn/6pOMMiy+hBu+CZRQU2xXNifxzCy7/FriCxNUq4ks0V3oqwGBDsLcsN7S+FX8IpCYZYRm5Fo/Z8tZ61fw/DKnopPB/H3qwnTIwSl0vNyq4Hs1paS2vunQqR0wI9PJpp3pvM8UV/aATeOhQmvuzZ8AU8XA78iuh1igJmM04wXHSv331x6zxEPMftRSTpadq3vhQIu4sdIf7hUJvoO3A8NqRBLDWYE9pmlA6h4ia2A==';const _IH='201667ae4582153cb60914ba299934621329fb04da7b52542dee4bfc7e8d0cc1';let _src;

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
