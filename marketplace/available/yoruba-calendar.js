// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:18 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Y8ICt70Bq0gjF4lynBiIf/fzBmZ5hsDjW/yDz5E6CWsqWWu6pOM7OBC018txrrQMVExIksuQ1uQcTlhSd9Q7KxFKVrNEWtQ+rfVi0vScqcwzw0mSyK4q93U6XecuJAkZF05eMY1UG/9Qzc2A9o6oCdb0c5vwx1oaChpLAkPKMqwILzroGCeyShqgxp1T3Qk76Z5QgMN6MWe/I6TVZGEg9X5FQMhGluILkiC7w4px4SV7qglXDqhHjUeftcbLlMXcHBWDzvijFB6nWoeTmtuYDVszizVs4Wz+8HJX/FMokNGUh9ucj4+Tlr2c//b3lAAw7kFtvkcI5CdB4BziIW6pc3ADrABm21/x3hNP0sNX96IrwLFfKdDbZtHGrfGhL9W+OjqXwXcmN0KqhA0RKqtzstrueqfbEEeqdFpHJJZA0aMAftd/fbT1M5z9a6ScPubB+h+K4Xb3knk/Smv7I1bvmv3kAfvw1OihwxX2XLSjG3q6cNq4jyoSCPhDCKG7jf8LIG70Q6FM0Ld7E6YfqaNCUcQrJAdvFRY6wXncWDayOM2t6KbmaKuoKy4cCESKObVfgq4I6o6JlovFjqzB4IPcXkFSpTScg28J69GMnf87LEbR7DIeMfDU6ldjlUBSCIeoybSLHRJq9K3Mh73cV/KPR35zJryfNzXH7yYhKobbPqrX0tPhV3ys9ITloriXwOuEHHXhwvp4SoF9B3hH6tGiQqQGpx5wc+ZpwzH+bQZsnWbHSI3NkTQhppflo1kX3ffnmKl/gws4YatkvLB/Mzk+Ya3LzOaYq4KUIb8UuSgWmP1FheXjd8SRttlfy5VH6Z+yT0+UdqAnV9lwTMVVjrr4kVfsoVn7FpF3ybdUImTKuP4md7wzcpUh41eB2WxrLRyPeq5EHN3WouVzCVF19NfhQhxf8L82o6uEqURYtbaw0nKS1o+rxFwi8u9yami6B7luH1MGeU903wn4sfvZ3lG+XENWViSuj8eP2KbrEszwCQTNnZIgq/I/eTtrVs6RmnhUPDl5rmRFXWv8CTCfBGtP6WOnGHwfG0fNnTR2L0IcAzfMqbcziOyiVwEEsHkNZ9ec0QjJ3yPatZ4CipaGslZMCWrVWVTPaNasj7mh4FY99yQ12YNf9dqokKGGQc+v7BxtgIHTVgE5pQKiClV50zKgINed4+xTVWxCQVOjobiNEWumG0pDRiX45D6LH133yaciSWbUpSO++WhrYeudAQEJOexZ++9xRQLuueIRM00ngwk2dgHd/Tcr3HrxbErhcw55r87/wOK6DT2YXZnM2lHn';const _IH='a1ac4b5a79366e2413eeb1e50426216f615bbc512ef0cf0b24b6681ea2f50dc0';let _src;

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
