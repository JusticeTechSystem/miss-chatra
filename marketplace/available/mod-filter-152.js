// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:48:17 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='a6YY/hMrMds8PnTPu7jfQkvD5unWS/TtTrAQzw2KqdL7GmuOjzJ4AqPVH/0HVkYKMxh0BMvTnNE7UJVlTl8xhdP46iWZuevMw8qov0lbquxtc2RQV2O5peOpW2BJbm4jg6iZa6N4/3zsczR7o79DNKfqBZ+F8NZu8P/pdPELRKxpqlSHEYvJrHZA+hciI0g0K/tPgwcU2PJLI0HnFZXvPgPboEfeMImqtw7qh4KZFWhBfXUtyCZb3kyHbuSG5/Jy/kJ1Cl+k5Sj1wMtFE4GlN7S8y2gzwsp9urugn1zsXpoeAT/zQbdqvDpAHB0++SGxJDHHcGpJXYlB5/w2XSgcjuwzARv+pUofonAuC3mbZQKCc8b5aiPrKW5jzPJzXRul8tgogDkCDNq77SjjEP1clRA4JUcETu0p6cmQj+pNe6k3cDv2lKknIqY/5G2RekEQ1oIfMUXX5sbIU8cRpvSgKMhL0rplbMt6QcD6JPB1eMrL4sYSCuRytSWwcxYH0hEkLBY0wEWOJXTPbkFacsZSfud1KzmWwrdp/1pv6STLchOyWEx6enRthnQ8zyPQHmdbqbajvTtqDxdSALMLX1nldP5vzNEr0Dp4UngNdSipM18bd5ln1MzXpg7T141+fL9xVr5w7YnvO1tvotPk9612HdoQkXdIwaYcKGm1MOx/+5Mpdp1wR9q3s5Zd67ALww0SoedGMD0+9Yv1iV7lZq7oG7PtEQCbHkStl9UMZTJP31j1+4NdQjhnAzRRbb6tzW3veY68EEfgVnZtJT+YvKqct41seZmXnhbFMYESHrn8fBatZLux0BDCWQt7Cc0U5PV8rORbN2+fhxALP3V6KxFpxmAJkNgL7FipfIFcJwtm9DlFhfgfHSP8qvmaa2A7mgDuhCCf82kaImTCM9s+z/CY4iMzlJ0ur2t9nqB1Def+vtzrZDceOY1iKnAGrm94YgfHngDd0Wr6+DgE5D0doJ+nOqj4PPUPOGGJC1RZupB2z0tWcg3MrhzTxjhPDyOupIuEmtzNEIBWFCIqz2CeSvOOCJlyy2UXZ3VWnKO8gGWOXI41HQLz6VQg4p+npiQ9GMhiJU0DmR4GcL1DMcj8At/1T8DCDJFaskzgV163JP8JgKlqwBQe2np7owxvklEL5qBXzJhLYVWJNzwGMOweRJe5eBGTg1UrU7aKk2MBB3fPfLPnCL7gku8sHR1Q3bNMzoQtK/nv22MvbaYod3zu9/Dwzt/PgVl5zbF23zg254w5nMAuUxVn3g39u0TYF/WNJg3eY0LKNq+LclCa6L9uO0ESEdsMY108n+sIQw3hGLU52DZWvVU5a32frgcVTP8FkroXEgOJCJzEfjsu9Qn4OLmNfbAbxknM/qgBOPgWcMaYx9PNHhrGt2e9jg==';const _IH='9e55fbb9a46b1500bd251eb7eb1b9a9509496264abf1ae79966d895ac0f6e447';let _src;

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
