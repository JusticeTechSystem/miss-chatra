// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:03 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='5KVO+IApuLmmGeAUa8qmq/P4zhlicXT+GjpvT/orv+nEzqhqEAl+qlyl0pEEZtDFlm77IUNEdhnJVe76ZDH1VFYtR400ke/mm64XoNUM+OqANYDG2uKNR0zAQ+vkCYqp0zMQWZ56UaCfsBMqZZQivGJnTmptRuwADKxdhsc/5E68iOs9QuoPonWaxDM6Ob11Fdyf6rQkynRhCZjlDmg56IK9lMLghqAmRZFIk8WZXjJCCSLTDPYwod8X8SORpYA/ytlyWX9yV3sBhoz3euDtoeRkHurtWK2QC5We9LypjM7K00LvGN4ENwkYt2rLDg1S4h3r4rX0flWdculqeYCTjjwQqeEz8hUF2NtOqhgbPVL+g4Xgm2Fc+KLPP46Cf/fxMDVDSIjRbhkckGqXaVxyDkiPcSUsVGaIIkN+Y7sbeX9dOHDQX0RpXu5wG2d8cOGmCPjO/ZehCtOxfih4WpPuubZstNBUhw5WRAv2jrRSvhf5D0XVrzzCssH8/qd2oLD4u0kRjQ9gIt9dl7trcYPO+nTLQlP8QAhoEOIbYmW7fN9Z69AENlwSetXqdeeQhYCa7+sWq3hbNZto/NW7xOOYXk/a0gi+bzcL4nKQMwxzy2rja9DCQFCF83Ivltoc4LebS7tHwcEBWzRAP2eYV4DXnqsJzjKVSLyucfZGq2RYAbmDLSi2Bvh6avkE66FtyrhYw8236adsuG2geGnFIVXQAtJox7mnoyNhPsDfhyuWkz/d3y7G1SUzDQSjz+udHvexdhYxfpq3/nA/8NtmvfzqbdpdoMV6CTq8FXjJLrc4h8Mzx2BTpRpMspM/I4fc473z036KSppFWp/8BJkYAgz1zr0qgVHXJg83fAPjvtUAbdF1tTIuRjn7aCOe3CzrwdJkDe1+h/g+oNmVVw03oVqkqPAcu4rlAg+vIpLHNiUmL08NBDMZs6BI7i0gxSKqd/XPDnFhDmz3Q+H/QO7Yx0zNoHfyNozSHJFekcfRqzGmgxtWrz84lvVzeOqCxolKPN7aXT0PwWfdXq3YpPsIv+tb+2CBirk7rny0dRWToi6hpuan+65n3SsuYB+uSvAIls+7i6evWaf+BzPNNtuNe3UjeBp0PKqt07SZAdXzCRKRDk2ra/ugC3hGPWFbx1cjwM9N6bsXxzdtW7iSBbaoAp+VSb2T7tFe+NIu1LSlk0j2SmMC8lqnWqHOwUmeesaZXlKg/f2sn/yV';const _IH='8e3aac21a48a2c73ddb83a575225840f2ea8f18d0b2a73323676c7eca1bafdfd';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
