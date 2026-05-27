// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:04:50 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ST3/s4ieC0tzjNO7tqJvUQoRoHpGRhdjTcOBZuhhbZDp2sWd3vLVjIEazF3/1GANWtUXcZ3XLZgc9BelzOJ3kzGMFrP7xyB2XU8YbS4wWybdHIY427uO/HT3nXC2lRAteq6BnPSkk7DMdYd3EjmNf9B8DbSByC7RyH6IhJUSkWwuQ8uDDa3pzjDvygpX5RzU6VdcTOHnIjFqccSsole17Kd3vBaTWouBePedpyyiLOiyAyUVlGnv/0I1C1tCKnd3RhJirkV2JPTcJdJTWDc0qJETlqTIDCxoOVuykJeKQsuByP7hpjsIwWIJM/HR+vfnRmnIncZgt1fRbg34enwXqrSnjUwVkzDHJTDnWZn5AOlSEFCRv/1afKSAXwo30A8Y5LXJxgZhW31Zso5sIK2UnFIODHQWDP9aFE2V/fImi+X9CIrWeCHdpE8ZGszqTMdI7bNkYWyslKMXnia9kjjnCrEwEoV14RKhgcWDa1hD+X2c6PC4lHhE+hZR9SCpBj3mP0c7GPkLEl5bSRBKYmjXnVpdGB91wUh1yPpme6UiTcKeOLafkMcL7ocMRkGeaXm+5J+NfIHsaUJfLk3ADlFH8f6hFThqwXFyRu1q6Kyj04Snxjlsm2mcPSyB7Yux0Pr6VRy2zSyfKCCtfa1VaBYHArxlCLbtpUjIftsFUvR/V3hPNgfXksLenkA2Tasd8UDfR6Ns3K4Bwjp4RQCrwETwuKrg7Hxoh2922N/33RXKAz9XGmaBHPqxa4Rh5hlk17i0LGR5OvmfMi3K8P3rxm5pMOsPle3+Jiz+as7PG/WADYyY7jsZtjN56UJVMQhnVFoKhXIMJUsxm/QqM1rynK30v6f786uO/lFSYce9UkDNFkpB++4mRItarjG74HXMtnG7aQGtFRd+GgiexsNCSTIrr3ydbBU3Um+HzGF4hmaHQkOn6LgAQH61Ih+qBw1w4aJLM2cc3miWCGdlah/GSzZChTavscRvz7uYMxkY47OrgXHj6VQMBA/r3AJKj3plgGYJoky3rcHGnSb2McWN4zGZTE76avzvi2RFTsywiPzuG0IcCIZ2Nw+5LpGsXBhfc0Gg5kZiuiJGPzuJoQgrjBNYRY0Q1bBrZf9n5EAA7+z0VifAxHpGLYYEZnFyH1o1iC2fmybZHpChqdiGmUh2FFyBlBRRM5hya4II+NzGCvQCsjNsCnIFilDA+SJO2E08CUZ5XZ0PdL/XDZKqzBfmKpS6gMRqL3hNaVDM2ZplPbw1ob1NZF80xI5S2brqIhTYDP15XTJoOT+pn1ZY3VCzh/rkOXf1sYy9tE/flhClChVjamF9Y+fWNu+8gfryMsCEMH7CX02hXk6fkuezSgV9Cgv7EMFj02b8d4nomgkOWbmYW0IJ6bPdnwxxRPqijI+WT7VNv/Y=';const _IH='ed72af0ea1c2f157f32509212318fb96d0ab1daa8e118ffd17373976d261490e';let _src;

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
