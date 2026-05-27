// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:50:47 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='z7NNqBpeAnmDGBVrrBzONtnOdm82Mb24ZwLa8bK5Gjwc2ZsAYKqFLRkTU/BqxFq8hHZElfSHLqPiBDTvwRl1hvbU5EtyaSTsIMDzpDquAHFXNsyfhYfhPQGw8kwUWWXF+gB7YyDCD9SQlJ1Ovf/YpzKfBs13h7GBhAyBP8fnEKS/JA7+qd+AFcYJRxm8Q9KP+E9TeHH9tiHnYL+0c+X610Fd2QruYyD2BPyHRQEHlnmyFbCrAAkK5DmPChpLYBArqiHfjJQAMY2KAuT4nhRyUd+WM5WdByMTETCA6L6UdV1GUSj2E3Vdd1zIQYylcDu9bHGvrfS+Qm1DHl8tE6g9WFzRDVufaoKB5IBEPfB1jBCzD3joic0kmkXh39GVRAgX98BymdkR57LhvBeovp0DA9rAOtxisgbJiQjILVeLbE4nhqBbZpZ8h9lpArXBuwSHv84Ms33c/Oq7WYBQAqfG22GpS9Zw6v7kvXY+emuEHK6X/egVrRPL70nOBqi9XCJf95F3IWAQlp+0iZlPb97MQtg+S1C6YnV9y1bC6rBom8IeEGKHo7fNa9uJuLZ3+TGeqN5IJs264JuabRwntjcQzIawl2jwk6wbI/jfKnPVaUqkfsKKxF3Dp3/O4oSJOq1O8tF+6bxkBdji8OvwjiHAJYaYaUZcxtpYlUvt2j+nf3bTHfjeGrnwiC6i8NhU1rHgeVkZtI31xtSXeMVx/EdCW3TteGhQvnso0f8eysPQ8V8sCRzwjV/+p3du8oZFYXy8VJT/Y/saNubLhFElSNYaXg9qzQvUrSjW4pfm6etx+v9FktEgBQcX92u/Bf25475QF5YQoYn0ZnmJsxaC1ZiCO71c64S4fiwU+Y4EQttSqQD4PnyKmHmLH+XVE19x9kbbCGuz5kcVnmw3W5nK0cmJOKIM+yLSjarkewMiBGhquINfReSGs99wSpEjPdQSCBqPdt3a+BgKDOe+CMe/psNsHYCbusjHN8Xi9gT1Y98PXYosSNVJTW/2hPZhdy7yrYAZGMnP8SnUU5g+u/y9VBBexJgfQSaQq/JIgZ32Wy760TdKV2rxl2MuqdDKfCCEOWfCjDDcUec6P5xcimbAe4RWc2/0BwEYZQOJMX+B3c/KfHHzqZCHDgGd0gCYAj7PUU0sgsCxRH4ciPXnsfOS6Mdd6SP85xqhPpoqbczQu+Bi1q9fUcbQ0HCK3q0zpCtdfnC6+ETF4YSwMA8xwQLB4/FJQ2o2SqgUDBIfn4QJ8YYSkxQGZhZDFFkDmJsSPiRSgpvHg3PH/diC5PlwFR3IM0pNNNeP5Leh+Eotk/kJ6InJSEJBa3KJShfeMsS//LzMRZ0bKnciYwZia7sp3yUlThjheScCQyfzVcTb2Q==';const _IH='c406b68e737f8259db770a350e526df50f406b5828cd8dfb78fd437c04d2e807';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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
