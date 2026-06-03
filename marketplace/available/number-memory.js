// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:09 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T6CtxrDePLJPhsseYf5AKTX1IZyFiHBZuYoVdrUfQ7WgrurYnWrkUQMoiuJ7QBepxuS9abTQ6sOyGdjAEq3mvSA+0pRx1JNIV4kRGD3PyDdwda94UzA5tQ4VxpO5KoN3DUkeX3qIH+xoynnD9wAIuO07N4jp37C9BDtG8i9MIsgHEwxJUQtlVanXZZfgGrwTDqRKz9PUuqXmAS+X3PnFNHQIVr0m7GcOqmis5EW1rWDVaUr2wTdDjWEyNci2mu8Lo6uv88c1CGuVTjAGzrofyeShDhCLpm/0WFI0JALm7zR3Q+O3cH03Q+4X2lA9w7eeXs/7Ld0m5xdA7DAtb1szmYaeaBFlfVxGTEMmFaO338xP1NqpXlq1nLC8rMS/AUW6ga0Fb3suGutBw52EXx9tze1H+Xsja+MPuYXoCXVXnwS9Jing/1t1a/2gke8KOR/Bn8QbKgbE18zFwNNeJbQN5Bd+m9DsNdgNhz//jXePLs21so5YnxpMYdoaqXNLtgx0oORYXwz+JdY/l1cqiBb+X/cJW95l2bIrsVxUx/LAGSq+FDi6uWDCdujHCgyUD8CWb1eNPmkA1HBTV1XE+jmY2ED4bIYaqprzHFVvAm9e45FWs2//wD0ODCR6o446V4kAXn7HEiYIUDD5Ck+s1VKPn1iBbtXUFHbiwdPNa2zTl992WwI8Ng9miOS7gDKeuwngHmecA+jK8TMIlhZQbb2KtUZ/dW+oGqKsqcABLUf5fDHs8m8UpAO3Ff68XKLVEV2h7VAG8KCRQPmvCOteTB4B+6RZO9KpaFdaLAMb3PAf6AB7zbuX8+422N9EE9FGBbkycBvdS15bh+2Ph+YsXlZYmXidALg7ipsE32xQ7KRmE5/2xQ8+UHYzR/G3zHOWOySBbE52VaMCrUrpbmK4ZFRpvgdhgtW0PpAbjq4oRfXuge6ojWBA8QUJA/0qQ/mlT8VQ67YHXwwKLV5Uyp4E1DV9WCkSW62e6EQejuA3tYaeqKZd/aEqHQLBD1cXsk4nCh1ki+brGF4oniabo5kFE1YjqyprBxOsqypcLZxquQLqx3x715kx5b/MRmphvT2P8/qNKLdu2DZpPVnpYAvnjRSjni8YHZYxI+ddy/pEc/xCkUSfXJ8tXAMSIL/oi0DG8x5zd3dlZYeLvifP4yWKJ9Gf66aVSx3GQTgoPg36rDx0VpPy5TN04qu08iTyyQEDx1G59Q72kaxstLJ4Fbi+yDWMd+Uhtv2bLDQMXNhmtdh/VbS64owGk4j8jJ/sR9dcWl9Lcc9yp7REe/UMpyO/UoaYdP1PZ1hFIYRbuU8twLXJfx5jCW3PtapXlwRoaZTs64jHGcKo18MH/KLLTsww4gSsHb8KsLnzeFnTuA+dU7dxGY5xWP7a0sRVsmBc+VuTCX3EIB7MZmUa0UR+ZfAJtfujlJq5DrRuY6kefmcnrn4tZ5/dBXzqMckwQ8ggsWB7yUzAT/iZ1E0EFc5EVotvJsa7Vi/qxh+2FAQl';const _IH='4e1ba213d3fe73131804e8d98aa488a2cf78fe4364220897fc26314e8984e8af';let _src;

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
