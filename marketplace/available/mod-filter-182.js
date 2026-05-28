// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:25 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='+sz47NO9mbMLcmfWysQLlGe5KrbOrv+QeRIYlEIja0TeTwXH6/vjl4/itu7bhoOCkm1eaF2GhA5rg3o6RTHKb9nLpncG6vs94+NMpIl063ffhdETKd1qB21aJ/qbqTA7pFg8dJqY/1kQyZodGPpjzoEhRtnOJN02iskGKq1/vUf6E5VZi4bGK7NDIPRybC5Liwi7N1mFRuq+C80dLYocQ31cPgB7NgVAFQhWkH6EkvLqwMbjWquQE4ofum0oCrzzINbB9DWfliZVbtvjZjTu/mbv+ASD2lqVkcDeyz9dsXBvOsT9zA/sOPALrNgtllsmZXbJRLA+YWoJKgNlPabpQ9B/echpjUAA2GBQgN1/IPoLCASrAHj+DcceqxgLvWj/KMX3ZTdO5uNaz35sLkoGXzZ3yhMchndvZxiV3iHPqAT3sZ88hpAmstIAAMfTNsv/si71NYX0frrsyfACyvjH1xeVC3JxI0h5qvCY2mAKqjpPi1NI9XYm7JChCTYLVmPsYho2d+twhdpJqBRIPKsT45yUk8tEqds3CiEF/3HmYU3pRIioR+ZL8WB6Jrhl13VYIGuQeP7RVW0aom85jSYKP14MHFZC7gh7m5GRpPVHfsEjXrV81MuSgtUKuX7JwiVjjOfLisN0qDmWTPE3az5rnq64OhAU6VoB4zHa3TOLbt1sC9yRMF3TIHN/WIZpDkl6gnOqFMin20IK5zKnl5zZPQhCO3qJiKgHE0hmu3+HxRbAy6XvW28dw5uEJ0UVZV5HEwAiQRM6XdjHHowwKW5anMpSgGAZIYQvKqZAoSvZZgOQ2P05u3zclAd4s/Kog+YVcgCP7JN1oMaSuOtTMb701zBlKUU4K54PqVgsW4hEy+SFxiNJi+0EKT6VM5k7ups9BH2mXhU55PnQqX/IQjZ5N/zwQwa7zvmRyF5OQIGQgTXiWSitMI23uiRmaMVQyoJXfYWwONrRBG6kNHQ8DQ8uB2VIqLFAucPZ+7WG0l4iyixwL9fheLCkJ3brm0suiYs3opKlvUf3FgD6RM5ZVDJgotDIBMhUszzSED4xGb7JEbEYp7NS8mqdALFxevjDWPOSmHzFvNF37ZGwElR9VfRNjL15m1myyvwVqTRtW6ScaMO3ZzP0F9+5q8Q1K2UaZZOj590U10j6PuOy6feAhytkRoN4uTZcOotkcBMMa/Afxho/YYMfpGpCqrtVl1U4sNQd4fhSPMuac+gIHGcVyFqN0ZEmLVUgKLAI1IEx7GDHj4M9zKV4kdRBdCtkitDABWiEbUjQdkzQ7wunJWTow3Jw2i5sKfTOvFDxQ33BkUSj2ZwgIMWVQRImVApycdKGtP5IDeso6oJkM7O9i9DADe98bKdR92HUaB6W33cuy0IZEhOnbpL+EL1u1Q==';const _IH='41df40a349c6d584301c6ffb7c7272c6d398bce595b5e2f722828c3cac7913e3';let _src;

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
