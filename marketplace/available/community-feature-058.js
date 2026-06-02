// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:05 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='gpPQHiKYoICa33/zmy9YwcQEhrCJKnjXypINzoUKoQLX3lcwnLpVdnprSJuaOrQ765MjtmHnDF7J5Ol8Tl8+zENAgWT6lX0km+nvhqvX+k1RUKu4bZyBw9JmNT6aKlNBNz7FKkUciPr8WT5XEZTORSCNwX0K7x98r3qGZ1eA+X9oYJB09F7CX76n3aLyrwhdZzqdBfkowS4fyabVIl4mQrYlcR8mN3zd4RglKkFYG82a/pogenfzf2QL4dZewawD4EnzRYd8+GSdIbKEyB8JCfSfRLAwKwWrv0LgOPvisIooSUdT5SiJOCmT1b3oKIW2EOMRCvO7yHZDW26y5OoyHMfVfnm/m1AXx1ILysEig6QjkcHT+ijOC++B01FwfAn4wxZvz0z6pUF6ZydJjkLoEqSGs8OCLU4em74J+yIUMqqbTuUDcEkpaJRJP8tYpFYHJLeezSDnXpbSTn6y2TvUWRcRf7OdndQ1cPnDbaXrU0a1sq5Xor6UhMsY4KcnQsAXd9l98hMGX5SHd65Kha3L/GOiO+KPORf6E8qBcqxu51ISkQAiMME6drWhtT8BG8hNX/nilsr6D8GfNtBNQA2spIeTSzJpVUH4r/kwa4MWmKxGpAntGSMzDrOSP+8n7KYYvVG0adIKfg6sOjh64oKSpj7TR7RvlRi7TG4dpT9CcDS2l7XjZUh0WFk+GDCRf9htU/gGNinckwHP9SrAmnksgwAVFX2JKw5RUA==';const _IH='5b2423ac6f8b8cde4125251824001bad59026388d4ce47d64f4d6cd8bff3a8b4';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
