// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:20 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Rci/VHfWQEUYJkbHYFRhJyDupHNqZ98miwxvfJNlH4X2m/aQ5aoS/ECcnglqn+YUPHd+KhE8YgzPR0cXu76IZN371RmZaZGBrjd1y8nWLeYYzybbi61gxj0FtTnZwCqnWcHLO5dmUxSMc3/ReHkALpw78z8gBn1h//HG7zsbbfoSoqM15byRuquphKb153T+p45gy05tdcQtvHGEnfBIf7kTqv5XlU1q9CmHSGP0jHF9i1SAe8l3zBSX7oGntJT/OOd75ixLvQwpZnOcF+SNZ3F26TlqmuohzXO08cxSM48JYfZRI7YmAQuLfvkXuJCQxjB39XUgXOLMSEC+uLMT3h0mg5oAmtIgypochswiP0Xuy9tXdfzxJvnNsVj/AcnChq5CvX6D4uKiMUk8MMW+T9E4YtpSBdr+esDpOTZqV/8BzVzOBzAUxbf6NR4HQ/AKEJR/TwesmV3Yoij/W0bvtj0XSNmnPPZpSdCG036v7ehQRyNrmvuhNeFIFhfDhuY96xQhYp7xeYUHq/uPrmgzvu9TIr7erNRjtyV1Ev8KpowhBHZau+fU6chxViFeiwCZsShtor5CyG61CIVYIDu+j02mq8QIIx4nuAroWJRwr0LI/NdW2ZbLHqmzBmdWNkTcKlob4Tj/x3wtzJKjRY/4qSFEUWxZzN0O8NvXm2QqNBV62YVq2SowwlNB6FaQjsQ+7OtW+BkBI3PKp0x+aCttZ2xr/ZaENgBihPmh+XSZ6PU/CEpvkP4/OwNTxZWAs7dRx0uxt8l4jKB3mLla/t92vK2q7JLMKQ00VSi2a4cax0By69h6i55izmV+Pxd3nrT4XKfCNnFL5Eyx6bdM+sQIPzeBsIX7+jwkS872NU4hbThSV2YETaD0W2D7CUi6EKgl9K+3rUXPjkYVoiO8hOLJd8ERq3OnMtA0EFWc0yzBI9e5cq26NnKbBqRNu0UjFWjP9L2hGYZqaRoyUlonJv0Yv+pyM+sw72STEKr2Gh38JuaejpEQgax1oOf8rydcpP7F56EKCXrrvkNdNi+pnTaD1SE2jo/FSpcsIHkY9mUGmnX6CkOAUi0k3yCJoQ3IszxcbtJqvFHQDbZW8aKbpYMr8VP08VOI2FeiqD/ZLUUZgSHbcPWtVNKffo6SupEzk/SFekXM/Fs7wSmVXkCEJ1ZTNEBeByvORIJc3S+AAeyoCaP0U9ePZEwmjWd1gx1PDI7+YedmDYtfJgxurL6XHJ+Uxa+DhkXS71rSmLZfJa2H2BhphHMpIRe2RcKpeaNIgiqxcTm3Mf3D9zpVESxigeO/VPcyNUAb2RELpnpoiXbOM1waZKTpa5MwyDsulPq/X7gspIssfNbYWO0gA3MeUSOKhwQi5KiV4yZCoaQyHUNX/eypfFgVzKfEAjWZ8DbwiyiG/19nivdT5iRibRCROeENkUGfYwxLxnvjRenPFNkRDyKjlRhr7KTl2h/BANDmuuPGkursU6Fp9Bxu3B81kv3fYnUMdyibSmW9zYLmR5nC9ysoBFTISEJs5089UAX50amz3QMAE+NlI5Fmipw0QY6Us79xOMSYCQjStNjgLWPXcu/Pf6S+0byC48/e7ro+Zinpfdv5tYnSaDatSMe1WZQqmt0zbO+peM2DXkt46lO6kDamnLPw9ZorHAl29fiT+0GOTJM1gJ80VLCKTRsnR6aOqj96dE2VKhtr7Cpq6c1PMdJA3Gk=';const _IH='d8e995c73f3aa342ed98a8d10506d1061f8fa629ffdf80e335baf1f23da6a6ac';let _src;

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
