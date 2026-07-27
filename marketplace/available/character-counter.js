// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:38 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRgkgfPyifAmOhEIgAmJedXWxhF5KchBcmuqQgTFbvENvjz2l5GEqOdmRpVO2aurR1VWX7GP1W9FJF9bEXC24SizJZ6U78m3EQZUdzswfypV67wXIO2xR33fu9iao+SEOGgCoR/UScdJfyEKpq/j6vQyn5mt0dijkgy9/771jY0RzkeVCOvLhzVJ23r4uYMMS+58ybUgyNtkns2LkYqXQ6AmMbyPEUBnwzZKWmDvCsz0rcqynjku9wNawz5KYv4RyGMnGIRSbLaXMizwLW8XSlC9QLBuAInyOXWlknhquO6bZn3+BW+bSA/LyiyGhlt2LdXSxgrMTfEXr4rZ/fzkgGr0tpalWDq5xAh9kbptn3FU8TV8NHDVNgwQIcUShPvgUJiFVIGx/7+p+NhEVZUs9mfPJmYzXUa5RtMNVUN4B7I1cknvDyBI2uZ/3xqPc5qjLmwDPUdbwYY1MvMNd5rTujFjwV1lMP6z1hDrLzpLo3RR1ieib9ycmHX9QizTm5tV76ROZCWIrYhOTeKim9JI+Ue7gJt8HMaq6E9+JL3PgTZNkh5yNiUU4ycv/VhNC4kHWjog/7dQ0HtaSfMDyFm76CHDE7FD3+t+6/yRlsCK0B71TMlGebuEEBEMb6qwVZYz1xTC1i1PPWs4qkqtCq8wdxYTgJ50/As+Xig5Fe/JmpdL6e2WSwgp1W50FWwUkfQ4cjvEl69MVHbd3koluWlMZjAt1RhxG1UCD0Ps1ddEBic76MTenixBzNi/6VZtfRALDlPzoh0+JbXwOlhv0FDHRdyX0mcx/VeU4jZGG9hS8EGz+6XtIavyq+LECvZEqDwbRh2yMwQKu93MsmGz67x/s8Ki79gHYjwkviQfORfhl5nV76ECuNgsU8HFep9HOB9PTPhNIylqr4vTDHSkJZUI+tcez5uCCCt7gUXCUM4hT14NnpjFcx7p5GZ+MU7MtXUGu/aGBGUYpww5GhMWiMHdgaA6IyVnuLSGkpV/GvIcP8lUv/7ybvgW/EcRgt7/fOJv6tfy/NyAfQAYMtrJ9kMjBtjYukwL5EmlMQbAR9hXBw0nXExKNXCO0YKLZBLRrSoIDsZiz0k4mwGjWOrsj3NVqkzJtF6X7306Z+xYqDB1pht5EKrcRxtBWgtmSxg1x7RYpgH39Sy/OdHVZFV9zPTqdU117mYBPQ8zdkJj00ZNsNcuHtODaQn9g/ndSAIT5ph7pntlKhumqi5x0gOhlk0ENcy5wVyjOwLLHXiU+GOOR1IE2pbCaf5VZa8ZuvDYAZnCfVqH7V/0kKi99t129mQUKH2HwGKqDI128CXLPWMWPm/kQ+kWCvVaYKC+reQhW2YRyk/8nqdJSs1gq2sf2Jr9kFanPaZI2Ud7UHsMwTr7VBaS7q2p5z1LutZmEbYPa72XpF5iE0FXBEKI6lXyiZ8uGjvD/c0LxPAb49lSfLFrRi17+N8Jv3qkOnpl1qS7kwonEzzgpCqvHuSmWhlk9qqVe71AxFedLxvvnYqkfOVeAMMbDnE8feC2cC+mc+yiD/MfjWnbUN64hUavXbEYBT5DCFvwMnWD6FC5kWoCJczdQ2JgsoXXef97PNoxPSZ+JH/ZKzk4FPMQmSPGAQLxguuuS+xBbKHw42Z8sCQ/nm4mtLlXy3bELWK5kA4lOl+OcJ0JmJAE75cBWzI3k6W9OgvvMu1zywnEEpxI9AEeJ8+JMhxjJ9l';const _IH='d3e7827c1518162ef084fd475b636f3ccfaa27f705c225511166a27d8a137ea4';let _src;

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
