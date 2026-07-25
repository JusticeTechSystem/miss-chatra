// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:35 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQuVZY+B//Wh4Q8Lkta3u3EZB742Vf0t204aKRndDN6/O8KVoeD0K7nhxB+HdBhqzEoxiFB10grPxLbxuzSWZvcLE4C6p+WwK/iW5q4fTPeViv7g0MinzWwDHKVdl6fWq8roLjMxfprgyLh7YT/ZUTWayXwG6GdxEdUnrHhvfTgXESgCZaklMxHou1E6rO5gcZT5EXB9wnnqnzkcWetyf3vtrMYgz8RTmQQNF8ZXDfJd34MC35pTJMM0mUnmwL+gbUqhR+EXo2QYRyKObMqOSTFVtbp2NhMXxWY3npq7Lb3yrf+hOw4ewhSXf99DwbLkZv8hEggoJdogvAqYtaTAV42iAZrZPXoq4IiaBIF9WzUfct4wloomfDxzC8YOs3nJVphqanS1RwzCvH6bn0S2xIVJFeVryQi4pK8xoKwL1gHS1Ndc63R2vxcAbZlPkusyY8p9hiHPIgCszM6LbjYKFEH5yb8+RJIvAkMtfr654qy4/B1o3j2clud/bZASmWgYUwsJPNZrxOYGwY4Kh8FgcK0d0KEaDkRkH1WLh9gdVIk4mODaKQ2sxoPOPs7947P373ZUYobRKvoR/r5fG+Xh0cBOpnfQZYHRKa5w8tWM181U6hH9C7E3bCQ5WgEz1ao5d+z/j5unyKWl7iwVnRbCvsXguSTUmiwjqxz+6/Q/GjilRAZ16Spy/7vS6yEAU4HRmZPsOJJQaiPSJvVjJTRHO743r1EXXXDARop07PrX46ET3vs/KMnLdAuT5Lp1Kkd5uL6Qaaq2KtF1GwNRItWJrbjay6E23dZ/NaE9zAHavUa1Y5ifIB3tuvmuFI5wqKJ0TLkiqDGu/FCUA9jMVONE2NYm1i4XgR1ftW5mVzt/zNQrl5SB5i9JjP6Oa7GVJGACpgR7PUZarYqkQPUQqAkU3x6a70DDmtmYeGbjF49wHOMpe/X7NB85PyyydWzeV4FHlAY1FkeUK4ooEMDumbwtiT8TELSO4wm1s9hGjM6N5gzldHbPJo4gFkiBIFe/Ojq1Bcp6RmHbABKt/CsyGv/a+pi1xJunDiKPl7fIic3TvXjxDRtXhrqYE4d3KfRSH3YKq7V+bgs2FDfw95fQmkV1QGQpFR5C7pm/4CpiGEefCXj95Ui096kXSrYU02AKPnZy7NNUG7T4UdGxdvfLidWJKF/1E0JuLCf7lJmlOLUndCoa36fPmV/UfT7yUlRE/YSZN8xG17p1NM1yfqSSTeWNf+oAX90KiKKH+Zr/iOpGfcoP1Ym1pXvcLqR3gA5M3kr0+Ud6WXyQGuBC1ylQn5qKh9GX8gziQeewAEs7CujOPMRcPL3sMtWW+Tx62EtArQDhSfkuUqHADzL3/ArrQOl9dcs7tLmnQtFHUkNSp6Yxt4=';const _IH='6ccec0117079081db3464507eff2aaa9a2c6fefbc1df3c61a733f0e73fe263b3';let _src;

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
