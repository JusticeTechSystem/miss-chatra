// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:28 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='3MdCEEA8HrM7bJcofntpH5qgV9lCvWYkTC5Bs+KO4CNlrO3DAdtnSjW6POJdDK98fV5VpuVDH7OKJnCW6mm5a5hzRtJln+JLKRjGXWy3Kx+/aJAwurTZLXBi/JAHNqMHeqiXRS61sJv+3DKNTX133T/2xPNIV3OCG+p7e6ABkgoLlUh+9ymdo9VjLvQCzoOd8MT4gvjP2EDFHiPEusKPQfDazj09gP5uPX+2/cYLfr++JNh4OO0Ix4e0cs/bkXg9IUi8+7SPjTx2lpA3zLP8a0NJGbCyWOBJyOkY2zd1i/eGUyn89wW1I+FQda/cVshOg9fXlJnX9x3cRTmPPS2rkZ33MZ7bzGH8vbLWQ7Bos4ExFINSaco4DwJ3MnG5bbzfWKzYdBAyADM+XEzfs8hFhGZt68MYEBq+rwL1Y+y7dTJdnhlDU9MNiYz1Qj4UUb7jEA9eu0VegJ0k5k7wFiEMJToZf5unTU7JRvvssPGHiKVuWNAbHpLatKVrnsn7243ln4O+HG04CtLUkMwQtbVGm5epbF3wuRBB8qBy63uOGOvcu0fmqpJd/VQwXP407RODBbCszuxc6zGjLR7mHntZ7RxVfW3Q4swuWNbOXw42fSG4e+VaCA8LXnH8p1KMlKk3w0cIrgY4EhWstGH2tMH2pterGY0vJnCBPhjW9rHhMtjI3QE0vJkkudtascYyCsKuaRgjpHuc8UzQ4DERBwJMTLtpMAnEN8Fin43UFrklwvFKWbbkSd3jet8WVYLpjuiFk0TcOXxJQCK4aaCLL3ouOB5wXuN/dos6eANn+yqyxUmwZoEEQPVL7OwT5PGyjXw6FZ1NZ6u3A3Ue2bdg4pQkL7E7lOxSGO3720GGCXHz2BaIvt4STbdvYIycVJrZXVJyWYaQtLGp230dE9XaNuz6qGD+Cvqv4oTzlKwLn+a4N8cyynGRLKG6U+iC3MU+yFtyUt3Af9V+gUsOSZSzTD7Whi2tcQ8hKKnItSADY42kBEKhQ6PzK+A+FgQWLVN9EiYccHGx/75fKx9ckv8NqUSWMDnp8LqMQqHQQilzQiH4x2/S0kZndLYgXakjAbtOeiKmzFkRcnkMxlN6/gfGn3yZWJZ1BvuShMQ4CSX+ND4a4WaPQRsp4IX8EDXMY8bt3GCiX16pIPpijNshcg8kQFnhHaAqyRX47Mr2rOZmaFRqgjLEYU1hdI9oVyuAUF2HVE2OGmbu7WAbQcxnBLmJu8hZqqaKkAyMI2ukT6Qb8tP+EMA9eE4SMYpuRV0Bwoexwf1kAc6er0By9ksUVHysHvHo8Pny7iX7jMQRONlVB3U1/Rctv4DPkg0NBrwXNZNGS5hrE1HRKjXihib3toi7gn5Bj66fF73ziTzaRioQUVkF9ahgb37icGnfTL8JdXNOSLtkzQU=';const _IH='da79b530b62e43c9cc1acf27d78eb236965a46b7fee85469fab65916ace8e439';let _src;

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
