// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:33 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='eCqCqqsUWE+ASzG13e/Pz5hbCdA/FJ1/A6nXFz69um3zX3BTjCMJpWNZiEg4JEMV6uQHLzrAMaP7HRlK+k2klnwqM4R8RI2U/SShXZVQtFkgnCG9hEhCZ0KdbAy/KfqhHSeRAXd505byvnJj6qFnGWVLMrpeCMrqq8SyNua9A6Zxm91ytTHQb4K3xEa0oeoRykYKyvV75NtWqA1ImCQAM/MLtBd4aERsSoSSQOS1Fv0an4JLCtSsyRjXQMYCO+wwPH5LJdxAoEjzwibWByX/6tRxm4dkGNe6GcwIhDc0LEFbar8elwUNqrRo0QM/KcMZ61uyBZi/10DYP5nr1lnQN85NGQ94xxBnPTCcjFf3iOdDxk8zV6x5fajUH07ZwMzxyq1e7lBrxCwo5lnRCbA0ZB/oe7WvV0JWH/+TjFm3obdf3Uogp2+jDdgqFsyfTp6ftRwhUFby50gBfX2PLpeWyQWvleCd1h4/1qGiIkwQZi+BxI1Omf9LTauWH76Q/X7rHkZe1re4uIEwLb4liCtQq+uaXRw0kNV8bGU5omal56iywWUkB2lwDWzfZ9VTAXJAtunmbJwv4fYK8vaEiOuZ67lqYuMnsYj4J0XlBYulNAVwyVd7yTe7tqm0Bi+X4HapFmTgKJn1uJWoM28B8OOdoY1e2f58txwmLxeL6leMGssvM0A9uuSnQp+6Im9IbWxlb6XoHqYq2/3Nh/4uhqjLet110l3cyR1eaVNxtq899oe3wBWVX7TYr7W5Cx0wSEVC/PPuMVQcX7vMnMc64/O6v+/hGKXagIE/tlVfYvMDdkYFM9MM6B9dG8/Kx0n0ebwOPXoTaSY/jwHMeuMiSsJ6h1RjF/nS8JcDiPAYW0hw46/jqyht7CboXJMp9m63p7YBWL0/ayQ1vIjW3PgB4CEHppHWKUpOgVawP+aYh4LLJPZIBafZ9QUgvkVShwYQqZeRrL/L89CzLmoL9nmLPZ2El0HORla6ny8ZMpgJYkpjjAMzY0VNg4m3Tl/9hLXU9PkqAY8Vzke4ct6yz6nxM2VJrz6eftympbuEXPGgn1ZRJEiT0lb9ZrjMaCkQ27Z3QcQ2H3sn/pfQrdpS3/o=';const _IH='14417e0745de43e8bf7c1391bd9dc58a9fe1854c708528faa07c66af1b5ed248';let _src;

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
