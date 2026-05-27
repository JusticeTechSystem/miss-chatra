// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:47:36 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='h3S+WrEJi9asV9kj/+LWyMI5tpZ7adiCJrjDvcuLu4sFoHPALM8jvalVw3E9VtA1X0orStUbwFyzzrdcvahDlWKNvIAKlkY207/TatR1W23OR20djZFyAs49JogfnkLEMTluc/GJWK4rXoUSL3nOlr5VO3T94lgrzNCrJl9HEdIg6+Onp9XSlOG4cvLFhdg25XMRuVLjI2p1Rw+XMP5rcbc+OB80Jl9+iAOzV9bxFIe1zUlLE/p9wGTgIc5wRChWBk2R2rkQHZpAAD6Dd0XI/BhS+NdB5AznmI8lu+9A5/VQw5A8+fvJ3YDOeyCIMRxydHWRIEP3xEFHgyKX7msezE0zpPnKcoDvllylVQy8fARChD5QCBcO2MUIWi0jwKOVLf0SxtfBvsvEU4vwck5KYfpnW9BXn0kEdvXW4fYexcguA584xmMq8YqHXy7AU6jPVDx4kFF9upMNhfydrCF2ECjdLcTY0UOmQh9MuwFxYam/CDbnQXoojTgOZ9XzUUiOqwFIDx4neLi/gPyD4K62fKIVqH9nFh4dNmxiO1kGvc2+faABIKdP8WCsf+DAqXNX6Ydfa8Z3PjY/aWt6y5xa+HHmgfdhKqzzS0X27k/vUryvhDnotQAbAcunHsCRsy5MlUJ5HyY+r2ojXUqLdr4IluuCoWfvfl89FPgcMTuIyxKezTjXlf/OJLALWq/wO1u6PTWjYjlMPxAsoK73rPD2LuqVfHBWE8HGSdtPijA4Dqtme+T61gSBeypiy6obU5h2NqiKJgnFMwfH5XLbgFVPPkU7/mqAyg9nxsJvB3IeXkXAyeJ9rfGu90cssKfhXeWmoC+siURCZ0ROedXmF4TZx0uF4FTA4Ld2yEj62rv3wSd+DJ5drxG/zKrVgkU5ZaXpwg9MbQFp4AcSDuYiEID7rr2XyTIAvgRxLwsvqojMdbPaxDSd8YHApVvZjnOLgL19fsM0TyWvuhkk+xZYdnI9EkzEqtUFV58L9+zqYgwLmKZiOgMDLqxXrrTCkTPe1X0okrsUzI2aEYT5xaFXLv2RiUz5heoPQU1nV4a7hPRGfnRXdGtHAaSVL3VgjnKyrqiZ+lOSyrE14xmaHY1qnFk81kaCQbHvwGWNg6sD9+mtcZ/NzXavTjJVU9N9eMa7nCIZ8pEDsaBYaAuoSKqwqMqYIc3II0qWiYcHo3vr6CIx/ACyKQoVWCO1uBeVbohiQ5SWkIEtBLZbjHVIVUpMVIsVSibzwVFShSob95xFbYFPKcL+cEtLVPkAeR4pkKnKjXABP+ETWYGEuaFq8L5cH/ZsKYO5JzS2zIZyX6ND6kQfIaeF16DzB1VHv4UnjTXkHET/6U/e1+KosfX6sClPm4jAeCNt5g7rEMhQXGcQjwSpv/DnTkOoWdW86NRmso5/qMwM3eY2mCRjwWcSxgKGt2np8R8lCBRo';const _IH='3873eb4c7f421a8ee349ed556b0b937d1007ae54eedd9290805d32c8f08b9f20';let _src;

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
