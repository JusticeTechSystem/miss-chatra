// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:32:56 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ3wmYqA5LFTX5fNhHu5fu1L/qsq1lu0jZNdSpzOQlbqmYddJuBKwDfWz165pOaHm13y+fnUoh3lZ+Y3z7TNR4w9h81HVXdLFl9SCn7d54Fsz4CEufr06Xp5PrTi47vZCZgGgNw7v0WTdWFOT5iKW+X7thVgMlsW1Mg3aDf5vvojcalTW/PBlIL3pWtnOQniUOFy9Pv5+fjDQSXD9KikFhVuMZoF5E8Zzh8R5muXTnf62a2ebQ6Gk739ADEqN/bPgpalq3bjDdJMH8/cX8gUGLy0Yrn0aYAYgAVpJ3drTEvUWuzei70DIy3Dt6P+hG6RO0NKa0SNjeYD0plCFfQbtLilOh6xPpPeyMqmGSTES/0xxH+oKDOlAb5J1FPgfKD6WsuD30w868dSKlgdjfQ488Ac048BkarARq+AFx8sYovOmK9ir63GxTjjELqBYY7MyRnDERIdK+NLNeCuZ5jHTA/7O841/Tbz9/qQkIqYRnD/Tu54q+0xCdL+F/cefau7CavAcPHCa2ki+Nem56frQGImhKULUiRnovfkc/lC+y1GlM/jzZZXeqW6QpdMuEzPoXC1okIT6Ki+hVAwsOej2k9olfQb26A8VVGwBeCi6251yMwePhxL/O0JwbvOTz7UP1fqaIHhegefmZNzNRwaEgB3PWzFTVt6YE8bEQR7OmETFCC6nqfyxYqiPTf1r665+Y3UIBTp5u59Ya9zSDokjKquneQLWN+AarRpcj4QhlwiB3W9+AOKihQh9/xu0RjI41eJrCZzXcItOEi6Bm/AkB1KB+dtVD18P7ouVcHlQINy1BjTDd7Owsv12Rir3hyuNNM1DVOTQt8CpR3cFyjCaVHt2QyUIhMljIclRmDAW4CHavDMoXQ36y5gPCVKirK8Whi+kNzgvxXfrWllccsEFnQquJb3pR5ge6wAl12w9uE+KC1pM1zOGGlwPduhQU3FhNmbWfb7d+q8IeVV3CrCrAmiBo7CWX5XVECNWZaLf3uQSh6AkorpHmDh+KShzWIASb1aUNc/kiCgl57shIycY72XKCqMA+DRdB1agRLbNswemH+Qg+ezGq4y3KokieRr0tGxKr8tpxb0VyTqlabBK2nMy+OHsLT/R57hjO/Ciy4v9W2GWZX1I6Ff2BPQqOMs5NMaGUFvh1bq+3vHLQPhD0wrZpMX9/0JJ8/31PQxhFBGs4M5wRB6zkvg1G5sq64GUUzc/0R3PkWxu5uFDb6nMQBC4G1eqDwtkGIP8K5lw25zItTvaggvvl4o5nZjOiGyttdjW/HhzWiZGRwW7H5DY+BmYYfun6wOFbzEHFHkYksrRdnWp+awWDT8jbYRoxkZ7qGqQxThMnuJ9k+ayICSO2LSvUkkqcg/JZxdNbLAAb67nqL3YKb5n4V5uoLXtHR4UJb8r76PpIPxSJS/yzX9sXF0WsfWPZ0MRq2cAFMMmFTo7vDQ2BfIe7imeF8BiWuRTMDDShNI=';const _IH='ae8685b458d26c12df918f42946add8e44a9d8f5a9ff4185c9e593709eb2be03';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
