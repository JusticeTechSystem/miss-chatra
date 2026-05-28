// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:23 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='wFinBYK3Xz+0gzmCu66CUg9YXxeUi2emo7x7TIQ5evrBMnZ5J2vatt25TCn0AHXPQHNQX1XItTQ0EpmI56vA2PsefKID3ulWm1ytWCinUEwPS/vyX4KT+4N3opc71yQcBsK69r57tVUMlfFyivG1SfU2ZOYFIOws/Zdt1Xgd/Z0ZRNGH/gBz5v301mETGYkVnyKa7BxO3Zxiu9u3SizfBDX83UjZMmyfcfJmeII9p56wUqazQDgAOymjxS0iFGFCG0+M3kzSB/2VsFJbgj9AY54l+ndMJ4eY+aKhlKqx0IhOHdV6qaXHLonrAVvpz1QwFqN8JF0L5gqMZh0lzf2iWEVpNrT8+KiwLFlS88UZ/KZqnHKWt2Kz3LesqycO8frH7eI0dyaxx77KEGVmUiLyLGM5Eab6q8lwjwbxvaVRkRKXelBcKDsM/tpaSIysjVXZ3t65rZ2JZEZ5J3F+Oa4NhSsPcpnSnlMikhrUX0wyzjqRFmOjzHkY4LX2D47EYZhYhZyOXkG+lHkuHXFyTKAXK1yqh0lihhkSo4XCDw8T5gcYGVvJw+MLt7C2R9e48boZKJmNrorBL6qXqva6UnQmfzwHkd7cqhaHLjwmx3TfXXYVJv+57GBI+bq+bY2P3/M4F97Om95Cz92mzVs5GQeREEF8EGgqvUagPmin0TT+/dRd2sfGQ3zSGkf+v3DppnPtZPdOF5NuYb91wIWYpzI+yw617CUQwd2eFjMIsUGh/WLc1bCDfpfkPRolMqOLVlGPKq29QCizWOSpvUZWCvGWPWYxbU3F76IwCq0my8ygL0CtjopwkdzGmx5VRMW/9v+y5xsm8cLPG/LAQMOcMSzbT7OhnexUEYbdMThC/8ak6S8EQk1/yxuAPfrxeR0v0A2MeIyqrQ3r4C9frAGJnNOItdj+hBRGPMcUZaeG2XaDeiOOH6ijx9EPT0y2NKSTYMxCnquqM+ZwNWciDxP2rzs8zBDdrCCwwV74lQQUz7CwY90bcW1nXqjFvYSuy7CPXafH18iiDXgwE9PZA/UhnVgVn1jkR3JBksvWy0lskgY9Mc3oktTIUIL0Tv8mmYVGJXHUbkqM57SAk8vcrtdaAW5cxwsYUbHdsScQhvAZSljBRXhwl6B5SQTVJ9Lm9/CH5YHNMpSNl5hFfnQQEv3dnZA/6H6Ugt1475HkUNdZugMOQ4RMh1v5d2xWlApvtcbr6E9iMUw8RQI68KDLWkiCJ9i7sDFQSMwicS0RD6bCnBUYipErVAzdodEVzwJU6b8aU9GyCyrbvnjp8sKtkrhsG0ZsQziOoGPm4Dv29DUpba5pl5NQ8312xjGMxqoF8ah5sxFG7rN0sCBxih240WTei57m13QpYWMIjD8N6zqwBe9l';const _IH='3690713db7b07c2cd1f139d3573d75da8398117b3f24725f4852aab7e2a388c2';let _src;

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
