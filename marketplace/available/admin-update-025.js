// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:35 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Buvw1GGZ2rpUL3YJYte2821HnnuVqPh5SHl/zORidWSRyxlcm14oLd0GcfRuV5no67U0WL4rIcBxTcViGfEgFNT3EMZRpLuqeMucWdm82fRcvu+j+OQpe3HKuMmvczJ9aHfJDKid4scacvYwdBmHNdMqySKi8Wr7pybo8wXXT6LAp8aUSzVt1G/Cs95rplkAK4RWbCE6/RLM0Afc3DjGW0VydnL0KA16T5S8S6QP+sMwnyHLqW9Af1NYA6S3fyNuqtG8ZphtoPCbhxLZNlecqEgErgRHDQNNnPBPXlcXiL5VJf4mARMqgKEPA0qr+V48dTjQO/dQt6PFvNt48MrdGsGErNLfv875xeoxsr20Tzjv5libTo4Vhx5iaBkHTsucfk2vvDUuR2UiUF79XuztsAV7MTu7ceWzHvJjDu62qO1svPplN71O+pLC5pwSAB/3uEfSMV77jgyGDDivDaDbZ79zGWNN2/u8wpqmpJdZf+RdkaeLozkoA4ZZ+EHOW7lYME+CTOvzXx/9kLoBNmQNJ3vseFXoL+2DcUhuS2vVrou35w1OQgjhY1/T9znYncvlSHqdNCuyKPPhWUI1YbSzcDJ0QkGZu+gp0aCr+dFUq+pEC0AQ55t/Kum0L6RI71QY+cNXMtOs9HqC1bb1t43NLRTB5OF7lU+zyaqr/4S2XdefIS86CVKMyRbYE3xT0zdpqharHLbs5wAjJzSZBXeFbe/atTTcNUryEMZPRgVucryapEG/6ou9dGidUz6sXi/fyHkBy5Vzo00dUQ30ouNiGFjJykzYKA5q8jH5zEzeMhZP7tn9PZDbn/qGURH3n0eh2w84COkjycp3tDMwj6Evmb5tWP+r4/kPo2tSLi1hps6UVYXm1AG/YdEFXOfBfdqx9TI4oBTNx1j0q7P/oGltqAzJ8IrhDgXnmOfBHG6jZvtSkmhTQULPG1CBf9MbAQ9UiPqUc5siC/uZ0U5wi7fy6aTFLfTXziH7bpFE4BU01Jx7//3VnHt0+lYJtbDN';const _IH='03da527606430d43b086e56686a964364c90d70fc65ef5bfc1621d79db04f828';let _src;

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
