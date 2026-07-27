// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:25 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQZMbtDTGFTgpe26rdSuUC/9E0Ei7dHE+rExYeLkeMSCbYQGMBADVWq/kdX5We+VKE+Gy7DM7KE9zVOzguIkxoj/w6iBEtKLnoeb73bRfpnDe9OB9f1rmvAM+lPnX8qMBxGCCJScHau8tU/IfTFXstS+R8BCmCYmAxSuOwcj3iQR8TaN1rH8ftQJrCa4QPNK70oQHnz74DBog51bfwP8DiRLhHzO/kkXm7dCdaecQGUfvgqnOOc7pk6ejkBovKRjuCTA6jM4+F10i4H1gilxhEr+GJtfG8Aw4w6pOdcJGrzBO48aOYbmqNQCjCuancIBtrkh5o6osi7/xjEfl59R2jC3fG59V9Fv2JO0ubU/12JalFPLbjFBFtdwoRbfyFROZjaS6fwi0a1GPtRW/B4e9rl3DpMwIrrvYP2fM7Z1B9XLVyqPewC2E5gnPBlSkXF6/LMHcgK9bSzAyZR2Z/i79r8VJX5rgtuTGlYophVzQ9YQXriIPc870jb+Nx6kOWYniaOjIYmR4R0whkH1l+fxJIMj9Nj1+zS4BrO8jt4T124Dk3D2i6PnyJVkXaBu4cw+BXMfI34HWjwp7bO6CdC5nNk0thtRLvxGDRgL4SzmxOFqfmZN/fJWanuuVM+soFCSsIqPtBNVNn/AEdMsQW+XgVuGPgw8I5Dpd+b4mjprJiaqLpSXOrYyhN0fpT8KKysMcB+WOPacRGvelam07ysIGLSIdCDJzjFuGZQHRGh9R9tVyqyzWjZ0WbmOk15BQxzlUKR7b6N91jmSdncAdOdXPeG+sKc/ByByHPcBZfuvfNxdare1sui2SR77vVs4i6S4zYlyvqQUIQn0c3F4+ltv3VK3nerJMWxJoYR95BRE/qN/aA8rMRousCNkm4zxz/z9x6gdW0wYbc4vz/9y6UlR1TSf6EySCxhcgHPO2VikDtb3m/RND1w6KGItbD1OVU+aXsakSjUUGYeeGOd3NLQ8bl+KLkm8KPsuLGanOmv9PgO7TCRpGaCi7fb97+dR024aT5Io+DkgmJ3JFZX62UDHgZfkNRQStCwikhkl9JW2bla1KIFCVMYvZQJsr/UqAnHSN3wyXkRaPxTO2F1kOWAyg4+sZcIQd2caG+66VITndnBGKWUlnnl6Rz60mWPAUegsIKzPSMFPM47J+bsrKOUZXbugGnIOvMqpll+43FklO8fx0I+wl/lDT9dHOiG2N+4wJdfNBBDrDmYXvw/UJx0lBxwt2zvSyaOS3FxhSPiAjvmlLp+jXYacYod6s+cp6f8Xl8E+wsWR2X+/YRuEtBkPWa01D18xClbcDPqMEgJx5Dc78DKh3zLhIs65GGdV8Gp4Zu4hVlCb7GdTKBheVmSib56QD8LHZ3DlLlmnGNLz9Q=';const _IH='8454f72de09c06ef98cc4a208b796621369567ccb5cc9e7b518d74a082dae833';let _src;

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
