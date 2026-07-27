// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:09 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSNwV1QAw5/fd3u7GvnOfQiVUthsVM32R80E9dB7qQNTSELoKIePIL29c/sGoKwfSL5hXZpTYzMuClYDrHB5QJYjCBUF6iPx313WME6WDF7BonAb3J+vDFMIZTqrEv38AnMky7nbUivzN63vWjM0hN+b8RM7wFnHgtfc5/tgCq9KJog8J2lUkgNmx/XzuVDelYYJUku/KC9RQ94F846hDx93wgwzCkLFFdt+IhG3FM37HJrh8PQGCnNoKLVxlkcz1zTpUrr/lOOyTQqjvamtwzfacRaMHT13zMhGuN+x9VhLW2adhdc5TWFMH36WMlSdy89zTvQWpf/X6hRNFQuhhGSOLdVn7mC5MvZlKZioMqOemvq5GQqO7eqJ9RN/eEYbX4q3vO2BdhFhyv1SLIQ5x74C2xDcJOE7a25NUDfnoplEm4zpP8IrPZcSXnxaEAruaXxvMqBmIJAXORQAsSyRERDcvMR8Wy5RvobakgPkN5X/0bgk6P0Fpz1r9yQ4zdp0b5Q/nl4yinnmu9efz6tXrKuNu+o5d08gFlo3aSMiR6I8Sv7np8cFmEesgHQmOidQyGLauhSsBJnmK0lB7agp1w2Iqz9CYm/F0s42hzRgipmp8z2uJIWwbO22vGvG4Hdoewc6BuQZpViY7OXzhQ707laDRLP0YaFCsiy+G9wuL1P4eoYII97Vdxt/R1XgifqV8r7CSbfcPWBd+t0/w26WhUHWlrzNYHO4tOYohVIqGjjSV40Bmqmo6ok003IJvJ032JYN/SiBUF57fceZm/pwPCXOsT2M9h7pn28fiLjryggxrLwY6mLXdLz1iNj3Q2Qf0Cxf84/j/ISCAVXmEOD2EcVKzRaeh4vRbys+haOm0L2j+Bq0OEq/4mkm35VYxXCJ9qVSXMUGXicCRUC1TlDXaq1nRjgl8cpPig/uscgKvgedcDa+URlltGbElNT4V8i3GkOqyTM0vgUQaXQwatF1ozJEiuL0j2ZBmpti0Q+daU6ztV8zHRyEcjsCBF6FIdIuI/KOR0FXI0SQoL+Xc80OpBAifrJ6KF6NyK/+81wiX2jVbnSb8AL5r56r2AYtBLqU3xpByNummO+7lXqJX+K2zjij9zs/ACFypwNKF7yTXe1PuY6uh84bwipHjPCLKHT0QwpDfRlj08xD25yoo5rvoIWzoT+2eBicVUgPR9eSZCwdE0o9nk9mtetAG8iq308Y8Rklqc2ZzbTZPu6fieEGEOGaOtZpOtrnnGFjMAeqHpo8djIAxGhRS7K/m5ofpq3Brv5y5EXSaWpGIhGj58TUCCIVoBzTIwVszD0IIQIAgwxmWG22FRJ7MQ5nN2CF+VKf9WfMJ9j6RzFeZv1brZyvgT3HySWFKjKGW89kNWtv91W/c2gQY4CiepcQUxTRDDIVfmyU3UwcIbVJeEjtcHVvWEVJKx6FXy7OQ7VOguZCBOWk4WPiWT4oaqH5FMMoGnvdX2jzK/k2Nc4cYvk6ilBU33HvP5FJ7c=';const _IH='2b60c4d71d065e5ada5e8388c33513112f9beb5e0b8ead39de2eaa6ac09644fa';let _src;

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
