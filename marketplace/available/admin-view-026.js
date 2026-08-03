// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:41:05 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTptJ0fNwFwW91Pr+G1H7JYiKAN/FJYD3oXyVCQCUV4B/byHBbZgx/gnjPGRFRNyecdk/oeUu3GcnTeFKswOg5UveI8IWVaxqS959Cjb1druKzaMu4SlsyoM7OTUCiaJVBi+EKW8xNcTu6Y8B9GL0cUe7dfY+Q5KPgSi98BfwwqKIilSoTG3wM2kPRoGuGy005GiTGtcO8S+PASZAfcTuOHS5D85wHHEmiAGmFrPD/vO8wpoyiIS1AyvHZ5ta0jtzkRi6tevq7N9Zy/NVeZFjLItS2rO9KH0mg/i1h2s0QKVtotowruZbU5uCxXgumRDBknlWoJPovD3jKPxBF18FEgABOjXjiBp2548S05tNhuooKKvOB9A5KXCyoMAZ9h84oXrJ5UK9UdLAm2NvTqskIrtQGU5BPLT7FL52nsocVQ/Uhvzs1zcsvZRS9eSCclDTRteEHn8HFFcJuKnu/eZrcJcuHZES7TsnI1l3DhHPOsDmdrM+8Z+TT/9TelALiAmjo7HIuX7G93a3GvHTuLa0hjnL9mYNrahmPuWYSiryEMa6ET7JKzo6B3VYXdyf7fSLoSkvlJm1ZgE5vnz+8zHEm2zGz2XbVwFoIzxLnRWR6+2TsAKS/PzLow+DO6RRo3xppcKwFMHXjdc3PHeEqCZo/wdcCvgsSAZydPUdv78Efu06LszL3qljPJ1jYPxJ5Sm4fpXiYeuXe2LJNNXuMCa3RfWTlSEvzF+9W73DFIRkgeikBarj3n5CQSWJ/gh4UFOGWcsZ4Tn47FJdqNOTXjbAyVaAJCnmg2M3WpBKqMmZVGx5q6o8+wIQdi3EdCw73o9b/695JcvneE9gAH5LYOxNiNZB5+wyqNsk+RaoEmP8U+0fEgeDdY7eBsk5eEht0Uz6T3zx8HP0MAZpKrNIarWxCVKaxEk8+uZKSG9Bdc2xASxdWgOZcwBbYoVPsR5PFmwBjhXCtYmNVp53fB3FK7AUNCzB5QK+C20ea0X9wIpQ==';const _IH='5323d2f3d4f693d15187dab0089bc0f31afb0261817fcf18ccd7cdad689b464a';let _src;

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
