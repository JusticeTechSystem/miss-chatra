// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:24 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='3HP2QesXWkZQEMgH0DRhJs5B/19kEjiNPMYP3HwFyMo1aFoREFg7KFj9cuoigVBTuGoOZ0/ivRBbY2CVaP+IQPqdwFwbcoRWih70z43i0Ll7LH2n36o/CHljMRAo6vUE47hEdh54LHeP5noDmw5e9FjqOLETdSHV0eBfuOk3yxyuSr+H49jyrPqCpd/eRD2pWBL5GaqWU5ulnUNnG+XOPeiESxcuMQt9svCkBpJmPYmneWiO+k4mcZ+nKwPkEpjnmCcLaR2+PP1k+Ui89qPcuD9fFHSmdf+HKMXaM5SfiUVtkivCnpZahaVHtTDErKY3aA1N6ryoXlWO06edrMnoN169Oojog3qbEZqeh4Ky8RfdfzGvl2fh6CfS3t7iLy6Z8aDfc4Fy1feCW/vRrMahl+5fOq7XeQx0v49zrL+rj1FWlSyS0m1iLCAqc7W0bZ8jKMjSqilqNvFRBivEf4o3UESYJAtBbxWMmRG9L/vPVtpRCzNsq0/9ETuCllChHzQtC9MoFipBS+LB6g4rCFravQ8YRuEYC4KAPAZaS9vxg+vC1TPvNbTMBzEzaZOqoy4kfHGinHL3g5/sTvsFG8OvuUCfTPUTiiNKr3yFjblE/TyVVwBaNt/fH+co1m06gDIsQ0TNWt9H1MVKETT4munGqO0tnzeuClpkLhuCV8Ue0ny5RxbikNzxuaDjdPjK/jWRXIu+JWdNHFn+1w29nKp0EVkbs7iC6dvODAPfFYP4rePLvWd5z4Sa4ZXGg5Uilq00m+/3kgKxVq7YdHrUzr/XyhICp2YWmYRGEXzutClKV98jjXKLJ4c0XRNKQm+uAedKm0eqXvORMm5znfOIS48VCPoGkC+yxJ3bg35SsR4/4KpzPj90z9nlC3SGh/BWUSRLcLY9WYWXxoGVVOp1Vvwo6Di8BULeRRjR8XodHIq5hrisoskavFn3Mr6wXgC3Uu9DcsOr5yy/z97j/ydGKWCehF92/pKQxblMDExTAqMN3QD7CuY2QGs+cucba6slh9Lr1cmssxnsigpVQDHXLejaCUbUHnCQkG10XBEbkmTwAowvo6lguqT1r9i4+o/rrnhQQuILaTlSZv3okIoSa+S3gP92+W666fhy2AaIIHDmyt3Hk832cMzjGq5KaEjgHWjIDH1p8RaZGndAuT5JoC7o3xtaK1vKKhfLBzq0SJarYyXiiiA=';const _IH='1ef17912b5a6297267d08b52d2c7aea07bfc05783ee8f5252814e20eca9999e3';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
