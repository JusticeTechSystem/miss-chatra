// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:41:04 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTvUXrE8o16z3kfhy1/IXw5/i/gUlEFq86uTyHW+uPqky3A5UPSMk9lPZ3VwpgASnhGCbD4rXxD5OI1D7MJPOEVb/rt0pRhACM/3B+XRd+jY5EagiSiWjHm7Vr/2z9vrTLT50AEcggf+PL1kSXuT0CQAH9gWId9HIFFl6qIRuCdIugV01WSur0kogFhldxiYN+EvD527ShBjMsSb2GOcQbNmk6ZVrWHePwxf5A/6mUC+JjYaXCow91xUCEcGJLfOtI4taBGlAymjP+Q9Yjh2TwJX0lY1rKFYQbhCYZO2OHyG2sftk2GqpeRZbaxf+yG21ZF5csYkeZXDWGyhNCotZP6KXgbFISve25JahsSSPrtnv0PbRrLPlk0IUnTr8cFBKNZhcINETD1LpUA+ptV3uLHBIs5btCc2zh6YLgr911l/JkUVw7gpl1m/qFRgwaJZRH3LzE3+eSmfnKpN/B5GK6o3isfDDmKVIztFvzSaOolyh9yYlBJv8ft+80nhh6YpXqqmISYcvp4s+mt/m+B1heVLTV5j9rsNBiSWWty+GDJ6Tuj4PhkbZRae/cYgiaPYO7SJ+MSaFayBVNP+EjAB6phfbPo2Mgm2SipiJ42nTNMLPwqsKrc/c/eGTEKFx8f/8WL48LOYwnfyOwEGpZUzhSmzIX/rviVB7yJD6k/RYc8GCtu1brEe+5xbNRWI52MXy3J161LjAuxuyy06skCaDv83WxFRsjALbKzOSOnsmqghKrVqnNSQcWbHxUO+9oIs1oBT7MBIOYWLO4/7sShMulmuRfAi7vwO0OIU6meTF7PoT6Jf3hdfWMB6Ouki0wN2L1aHJcSGlxKJyYk/4/snWpwlhV2K03yeMNAV+yhcSlfWPJPHTRwhcjM2roeqr2iitjOQewP09weytYxOgDj77mK5JkbrhYj7SNyeV8t7X1N3NtUTfvhBtBMMOaUm41bh8xfslExEhN/KgrJGhthD0muOHAAJnwYwag+ruBgn40MUvsnEC8A7tESPi/N8Twe9EesHjmypo2CyaUnwCkJ0UsMJenK8l9R3K7sHPRj1ZyQ3zq+m2B6K1+rR10C2yRIsRy8w9oqyE+vbmLOLmoPvf6WaQAstgVGmAHEcC5z4234UfccqT+3VX1+/3KSlSkMrfOZTMIoxKrpKQ1KB66R0dINPhWMXE/JLAI5g7vP8o07G9XvFVcpftJKGn3QzA/vpdoVIvMVxl3Yh26IYpkdH84YZH0Oz1H6v9WqbTBRllI4nfvPxXfq7KhKlwjzG/7TqHEoylhgSThelz81h0zKo2Vpp0s9qoBH6DIebmS7H1n3mq5ZwoltZU+z+rVyCDwHrBgx2TIdrHWAQNF5+Blq5hUN7vsJDiETM+exiSwGWRWO79bfIRqyEbfLb/kKyPYdT2hfvWxq+SrqZi8P+FMw8ZSI4xhD0vwZugBYckWYsc9KAj3RK58G6gOKqDhbB8jJeWSikDAoyN0=';const _IH='a8e753fda254ee5ce05d02153c3c896c3ce61311c8644f08d4f33d5487c90cc2';let _src;

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
