// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:44 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQXoCdn5RYGP3kAKtphdMsMN86/qUIzCv+HIWFDGiewG44ozODmKaWwj1vOjcZcUbJsu1XoH5QRK0ifDMIE5qp5otbP/ahqLkCzxgtB+0kSzFuz0L2hvlXa6mLhU01k4ug9OE3wyNgOS3hISrbPF2ahHYLR0ggC4ocNYUmhNjLWdlXQdjfHBcmTUsF8ZrpeayRuIwqvxOKSNynCXow2spQyASlGQ15eV6XupEDUj77RDgHajPhFZr95H8t4f52lIdTyTuy2Xe02YAzldpT1tWmkJ/wL/Vebu4ohL1NX+uTrWgiG2lvK52/iGCHHjSC0aOCytd/Ej3IOvrJ7RyYSWhfzD0B4qMrc93G6gDQJ79XpBFtuNqhydNNtIEUOvgM88mlGZYphRaG+MkIapLwYlq0q1SSCeWdRPOLx25PpDL05+DGVakckx7O+9qdBgdTtzlAII7XKhTYG7qsMDTkAwE6FqBbcyvizYYIr8eoX7hUorvfYrHQJ/qr/Xlcs13CiJmipwo7k0uwilt2NVvmu7DPxL/QiSkJrh6LTbgJ9BRxCBIPyY0ou47m5Jj0Ir4xgNTbYwXscBmBe754/D0LzCx4yKUmqMUE25671DHlrbCS6peTyXhOigktiWEq5snNelpzidtHhB1bSzUEoNJYyA9oD+b8DXrK5OS12keKNKXOZpb3bHDWO7x5GlhoEDHHZ28uqfKDyl9fHs7RhgNKITuDrdn2fDBUxbIuxotxUtTybpBng7ejssRFpmZdfBbzm5RUnVZUYvEqb3NqV6Zp6MWjQfRJDSlMDqfF7oL1AlNy8po7xk/zIOlKkrzJsaNMtg6IsklNa/H7pQcGJs3MO92ME72DFK9swJVJMVVCtuKP95GdxxXKvYdz43DdgkLybC8PVvYFmQ6cgWjx2UyY9NwxSIIZvCxwAHQZ1mtxuHmJaG81EdcZc5/irryhI0B/J0jtoFfWaf3gBhCvwq1kwJkTHKZ4ywJ+w';const _IH='f769e2dc2618244ee9c034831383af192dd3232fc95b340b46f6a2d1adf37833';let _src;

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
