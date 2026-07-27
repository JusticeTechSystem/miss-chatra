// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:26 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTt1cpOSEtHjKbKAdlwyRwmyvUjlVwtSMYDq4kckwCUs6VBzvemuuFzbdBUJ7t/MFgXJUcqYDJb2tmgwLoHKyTe/uCinwxbIOxvzYIH5rst8gofcCQZSWJAU6VTCLLtfeMMw+3/S2zeptS7eVnz9S/Fa/cSFdO2oV6jaYL8P5yxVHLpxOgHJMcAoWw0Bez2KFHLCPSLJ/XwKaoDef5lVYTzZ98nA/2id3j34DftMEoKVu30S0XYeCaX2S40jnM5NJ7NEcO+oSmCuDcU/1c+ouE9fWwXHvNFB0PC2fegVqj6p5EEZo4rmRGfGOOUXWyPxaPq1Ibb90wcS18l1SEMzRzyF/lZjXgAQ8kiBkZ/peB+iyCvVlHJOoRkKa/S4R9WvLcJfpj90RSCP//fENQXnuvK3uebq/0+kLbSjcMz0pvZKOA3hMF28uc30rZ+YBoR5+Dyk6FctOslu9a3XGWL936S6lxBwO3HYIjbYixEIVTQBgl3/hCEdIpyn5jdTlftjOGtkjY6MQaajAxKVBeckpKxKquIxIIxn43vFC/eRCfrlz7AaeVTAuRVirTB/xC34dgvKLUiwx+Ps+135xzfK553QVvkezKKD3m2eBzLWq/ALc9AM42Ks7ZGl1G2HKauj9OsuUU0uCjKYQpgIRa6TJjVwb5z71VANcak';const _IH='56d4df12689f720ee7e0f422506984c0e18cf255e52828552320777667d831bc';let _src;

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
