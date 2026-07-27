// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:23 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSHPdoIPez8tQ777yjnGb1yrniHeQfp7XQS1J8LRtc23toH5J6S5os6YJzbw9d3kwyoJu+CYu0v21IWgb77+Ce1T0ukuMhh/OiRfEwgoM201DWjrq2lJThLg3FAKn5zGcQTMAPB+giX5VkKDEtoNlGZ8oMZc1XBP0Vj0TaEDdXS4PB9B4IadGmpD1msOdJ8SUeqGqfbeOXldFPzXQUBhxQR9XTN6Ql8eeUKW3GlgyAHyBrjB+X4kYtpS/M4hq/tD6DviA5PAHSLZ8E2wYnjaPJCIU0pFyDn20Ft9LiqgbhypwJk1ORuIcBQ0i/gSbE/Qjux7Q9Zg/ExzUp67iMH1uiU1K0DoKbRSgtlDoNrchXf0VXknxgaDV3BTdt0oQVjUI4wztzHiFoNTF77+m3zI5lZC59pU8vHn1O3Hlk6Y94hkazsK0N/nLqqaQnJfTx6xrJulnD3bbZMYmuEWghg5amKDsbj8ffjdndBXpelyvQMsfPqx7PS7mwrjCoo8oJpwp4YP1XObQGC5G5DS4HOqt7RqPH7Qhzp47vIy88g8CVjP1y/7vwRMinui0z90JjDmjAd/P0jvIz1UI5KjtIGCRuoPDWkOJISNo8wGYOwDdPyul1zNzeUXZLQGgy1xgOu1TyfgwkV6Ud5B69ztoC7OrtevhH6Ogrp+6vwAbN3GJj+hk80UkJAmtROGSKCQVyOfZofjMEuEe9tWAw7HBi5Y/ZivSpdUfoHnEJkqlY5pNAPaEj4PO19H+b1S4JW4O3ejCufw2AswSAapwEMzufpaTT4fai9JBm5fp4x3IPK7V+piJFpOSMpyGQPwRxgLl2klD0XVIwgi82Dsm0tIJAJfsKeVdl4POd2OsOoIGy0hPoJ46lf9aH7LUG/knEuhU9A/umr/AXmvbG1s6aIfJSRhrV/M2Dli+4iR5es+Cd0ns4Y7pveJlPi74T9VEOJZ9G4rpRhtsB9tRzeQh2CdIz/9UDGIvlDHH4AjGuhCIA2bWMzfm8/qZwWnz0h4gHhnebxYUnNv9R/7KK+RxLPcwhhL64isoyDYIGESefvCNmXIqmGwOOekJYN9PtAadVG5AgycM2UWbW3l2crXqsk8GhyDnxfroJBzjuVtt+7IavZFDggXJInLFhipt5+GTO/G01iT6ffyuKrD1F1omu+fSM4QMY9G8QbdyWvTbuqhUtLW5QdtXTX+ZV3b+9wJ682SVRBnuQrKGkoeuEpvylyGVV8nJXRNsT2W+uC/C5JSLWQqeJXVJ9FKO+GT5LX4mxmNa7oGWPlinjZRLQMkF4Oul3S6EL6jgKv6n+JOWrqHlQ33H4hqivKbUy0glLalGsExE0M+Bip3hQsr0laymMy3ERRK3fnmyjDUSODHugNJIl3CEm0bKkwUwyvzT/C';const _IH='e67860045ee7ae657fc72310857cd13ebcc1e46604a74a6ef477db67cb53207a';let _src;

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
