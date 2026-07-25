// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:53:03 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQaJDXCuyEeR5yHHYODd3QvdPJk5z9iCU03YPkBJjvumBK5xZfqy4/lDRFQj77t+Obellji2k8jFffLY1TyPYUFkyI0SrS+cVSZgdWewS20PYgSwbU9Okd+FrXxy9DKCyjBUYjB5gO8aND9KIKxQpNee/A8Hm5ciGPXyM5dzRuYgX4uMtHf3iFuj3fBXgXhOXwmif8Ixwn0mEDCknaTgIVyql4Eyc4ajaCHlm9ovGXWyPJenlGERyESFyz0HpWce1UcjV4koqFtxgVMswV0YqYWnRKcUuPPwT62KFioSqpl1M+80Q4aVP53+HXpK6h/aiNH+MsVAdDH7HWpIWGQs6AqFYrhiQOjH+OO7VZrpZ0azaC2JYjLntBHbKeUaVxrsqlwsgce2w69fTPkOWoVdrnrvHCPLLl3KGWZc0SYFUqISojGF1a0PJfx0ct4EN3VZb5ZXAuwbzyUmqeg0j6VYScjdFfHzQVrl5+HezoX6fJOfwuPVjR/yXqoBH5MEXrvavk8V1ajs8rPAjy0+vjmYzsvoCUARz3TWQDM5j07LTxBnFs49e4ES5pt3HqCgDDAYcFGh2xBcNCM9tlvB9yW8NfY1zoGBNbst3zpWTG0+FYUsqVE9OMCHFHtgCITMnVox6H+niRiMms/jvcHtO/ibM+jAxNi8tlToTl7H7PRoje22RMMka/Isx0aNnP3Ll9C0ifxkZDPzq6c64WMCGm7Kw5MEfns8mMvr5WXNY1RqIlyi6IyLkoMWt8SseAuHTvQJkbGGXVTQv1Vx93QQjXtoIlypzl4ImxdMKtq+TTBPZe+Nxk8vIJltiD31pSQkOR1NF801klx5bGe3IeK4pDtt1qvDTmoZULY2SC0XnUl3M3Y3je1wqw1KnRbyyvZslB7jqoK6Jo0PKzG1Tv0CTRG86mcj2WzeJZ+CAsVndYWXE+6yTuwHdZn21kmwB7Uf+9OvVj8hRvUEbywpEDzs/M27zW7SlEIWFI67A5RimFph0nV4ojpB0cYKZxdpRkeX5cYBv3XymnLmh9G36K/lntAxsANmzcBNXywH4Ofp2gwTNY/q+Ck7X3W8L5rWRgKCrMQ99iGNqw+4j0vnNPg4doOX0XURl9+eFr+HbGIjtm4LUGtEag/eGTjMSJriLmWrV+Z1puFhOmwDKKXesBpOV4ubZO3162oSZ52Ag0Ru09YeHXTN/Rqs+m1HmLSJJvx005xpqhOnXP/C7aY4UxWmOehw1SNJmGskHQTzDOxesnwl5dJgWL6bmVq2B1557sP9VRb7SFQix66lpV/UMh+NqrYQdIAGF/F+20OLCwv04KxkrWq9jlZUu7U/i8JPMDgbIBWheicUn7LpMYI+EZctSkgVnTf1lSlpDYBJmht';const _IH='24228114ee130c474f02bda8e3ef4931e2079f3a8f74b2e6dcf79716982c6b53';let _src;

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
