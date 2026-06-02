// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:43 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='DG2TugCUhjOylOztk4SH1uDyyZWWJKk+8+uHNwKdfRI+JPqwJv1qJwRr1d4Myo9GUn/0ZxHKp6Ghzdnrprz42YYaVu/emh3Wrhkvj64os7adl6mUm5PGYuNpKYHslBv9l9BI1e5awFKj291KOYlAbBd/lPL2E0KT1PPer4M4AQCdcvDQOxRMQHqVRnUJym2lzUIsiY55tkM+rm7A/YdDd2805POjDSKcu1zLYKmJpShG9IXyg0hLydRf9Zin2vjZ0AqVsvnW9lQbsSg+UuocJsD7wNSz8ha8ZFJ33BDL83TgONXkmXQXeX5GpFUMdv8YOVTnbRGOq1l8g0nHLdsj42wij0lgy3eEPhWrDLhpVRFb4p5TNO6zcWBAn8v+kEjGg27Z20uTmSTBzXg2T9xXKerWrp7b59G6gzNYZdozC774x6YVGnNrMNVr63oU5u6VdE287F5XhgA/z+/ywaKVrvQyK6fmxMZbcT3mZJKnfsBFhoXxld1F5Bs1TlyWtDVu8jG31bSfVtTD0Tb2VHcnvwUWvULuj+0p7/K9PnIxGDR+eH2NxkGuhvUMP/XYeSL2Eo1Zvw+laJaELFrKSKeMUWslKXwi7srSqQu0+S6UX9BrV3cK+upKFR8HccJRrGW1keZZoTpmD9pYJe3HhkaFxoQw0+wiSRf7GIrMvh5qo6BzH6dewrjORZp1GaT/n/WnkDqRgpwzIhMDSyMEUvaNH12c1R/GxOpM6w5r64qqY1Zw7znEdV5BK2+ib5QNg9dHM9rXQ5JGzubL71i54cmKZ+387/csC6VUDKaUUz2Ci07mnw8nClsAYFfKR5KSoywHpIdYVPzEhtnKJDaq3EJCKxcSpXCLSw+VFIXItEnqjgeipLlVBJWJ4ZTNibGRkT0CYfXQ3VVh/L6ToD02Fc65wOeEitO5WzcvBzVgb+VmtjpOsteirlJfyzO61M2T5ZEqtfAOvZF8tAuBM9pjMTjdHSZbOpv3aXc6urSEgNhcCVjc6/lPp+skErYUzwxlhuS5siALaH0eGjFTUI3hyqCgJBlgUK+eklPQk6h5GcptAeq0vREcPUJTwvguUBe7dzdkUN3cLpdWRzeb5Zcg2deC2MtrwzXJk3zmLLPkWJPmErvnOiR9+ReAA0ec+8YCNj9EYZ9WbIgmCKokQZl7YGakVD+MWA3nIsip1Uqgl6dyz/1KRceecLFdSSDF6XVHeDfJDCPUwYz3sd8BmZceNKNhHOdlTEHhEz2yTXVd/ttlR94O+zeJxcPOxSd0a9TBq04KU0Uf6nLq+WOJV+4leMkRUkWmK1MDtJo5Rta60tOsMveLKUh9Kti43AlPnmWrWSNHRtTPNaKUiTn6VMqLnN1peeG7VNxqQAJFZfYtner2wv7v5qf1ofZB/AumnZeO0bnfRoKnz5w44Up6W+Kg7eWSu2yBzm5aLmSpGzazLxjhwUu4gX8kjRXQPLp5YNc0rWqdfI1ohIpOKFc8xvUX1JALi6jMJGkbKKaF/eX4NbNRnfFh7Rn1Y4pJk25pbw3FoMUNqikxwBt31LBraUu7jlghbFPwSFmTmUW6BeuuZZJ8cN/9JN7pu2kELRvQCQBYG5mt6eVMNNZ8EGPpKQ8CL+tE5toFOrNotgzyXiuV7p7o';const _IH='3cab9dbe5ee0ea43cc7c7aab319bb8a558effa3c948d84fc7dfb81255fa98cdb';let _src;

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
