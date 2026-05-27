// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:47:38 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='9vco1+Fwz3ZwKwDqPWMtp/j+bsqxLJ0w7sZqwxP1dQMP33OszHHIqAFZ+f5JlwQ1xvURNG9Qmneqd+G/UwKshxl0cupuV+dV5+FLMTlUWNIRGkGuslZmJSgJR/ODU7CiWCcuuRMsFXdOaF80O/mp2GlUrh+/tyaw/dVc3SdRz57kMO4l4ZnhMUKaFo5K84WnE5ZTqMNba985OL/VyM45L5AQY/cGAZKwn1jEqFgF7RKpGlIP7N6KsZ54LjVuWXDFgzrmhJJgYDJT1Opm2cEQGHkyUzGMWXdhGJrjFpptpjvUsn+0RtdteVi1PQ/ktC1pXYYxGGVJn8aETZs7DIY1sOR0B5PF37+2fgZEKSKxLgSpjZuI7ikyGgcNOH9aAnmrRcV3ITRpmOoR0tD9MOxQqw5xU2+pYw7g7OGbEjFrIYOJKe5fgpLHM6VJYp172MAtvQ2EgEOSPhllx4nYt+B5Oc7ssfeKnuzqx7vfiW4YHwuE6/nl1kFzH1NlOFxcd9PdCdRY2N8TU99jWM+r5y+Bmg6JLqW+Z0JExbijvXgBldDawUZlk1yBbxiy5FzWNIo3KxSA8GJv+XZyXsORWnBRal4hswMobkmXKedJ5pVHjEjXzcDb6jhF1gvsclbuIQUeNUIxXYk51A8x2eFH4m/5jl0zcmD10hCRE8xlT2hm+0s+LTbCyYVrGXMWDxboiBiyEkgti+ScyBHcJFiIvURKbhBFJ+XFsM8XhRcKXuQ+t/C9bdRt/o+bUqaGODgMIelrlkTMzT/iv95PFX9/X0aoq6dhUp+oFqbywDUwTPFOWYXZ0+ggBCCycpn33A+/UoxxHIb7fFHnp85XP8/eGYo6QVq9lTShhuB8zMKsFmaEXY44HpzbDjDx2vDNoDT/OHFssw4GSeej46DMJSe3G/UAu2GwoKhHnLonZr1ncScZWhvpDrGdBFClGLSKQZOrXbJ6hLHZPgynAByCvoN0SsA1/sbJxEaXQC2OBHd9YEJow4MRPV719xezqCCZvFheziHrEToZ7ldg7Fb14R9knAN6tiirGNY2vPxuP3Wb2xzpGwrh62Y492F+6lNPULL9/a185CEuwSXHW+7rW3XbvTEcp5TVdxBL8qHWkZfwaTLUW2Ht81W02JLkoiTbSCaOAeeZ2eGjKnkF08srUA+SP+rqqdneKlwOanqBR4r+Hr80wGeRsKK+1iVSoW+Uyh2asilY3dLzJ1qo5ydeYQN59jUWXkCHpwgD0xKJ5MbtKyiLUufSckKpb35MR/0CqDkSf5tVyaAGrFqe5bYMlyrVl9do6C+s4KcUYt9F4nBXz0579TkDpzkO54H1T9Z4k2ZNnc0OONsFwcQG1kAtTxiMLmpapdSkIqgaBka/EiZHqaUJ359kWaW3CPEC+vtcFzx+WVub+bl17bIbMhuSluAOQpqct3BJRvWw4UqxDxXZSS9ze9byxdZewR8OJeqHRGzUrHFRRWImGcnf+NjlGX04FFOW6tLSIXWSHVD4k4t7UKzXGDEhokEzbjd3H8v/8eNUXpnBnGmU2W1GmGk8aQhsnsvzWtFcgOlI44EE4bo1';const _IH='f69f9f1889aa45b45c3ce7d4e929902177a8aa97df14f983f54ee6b4d3fa0332';let _src;

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
