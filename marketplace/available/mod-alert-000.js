// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:32:42 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ6noT9tKhDWNAqavwhtgBnj4unxZ07ylYM9J/jXbiuVtpHzDfLz/pjPJLK6y2hytom1YIHGqD71ToFdhnqng9YgnIR7VzrGm5YJ7INIsqKl7jabu+4HHhn/ywEB8eLpgj7mvBpEEa8xz4Pnt7eAj7U212eR2HmT3OyLD6OryxAatsNb3WyguaPwQamdmqdmdnHG8IeYTq2bUtrbUsIb6QjaDkVPoNJuZumRxtr56/XMnbt1XbDdafApyCzNxJkJqN6nBHq53ZKLPVf3SschNpp/v1+3WBzIYg4H8J4jGH+QMqesz4F9eelKU6o3YZ061CPqkXsYbdPktBsW1lpAU3Q0lZslbNw2yqTzwl+nyudkeC9+8Ela1WwO/ElNwDG+5V8GZYOkLxvkjaOO5bhcrNEh04M0qj48/Am8SZGnf/n4U3w0eUfeDum5e0OwvYbXyE4oVp7ucGSNN1YuMSzL3NvISMVkbVqA32KtJlZQwGKUnodrVgTrDxML5gVX3dV9yBQ+9HUpJZOTmY5FI5m5BaQkx6br92Ng+UczlsZmfIqkgFKED96Iew44FgTLo9Ns+XcRb2A5x7T2oAKQKq6eQiT8BiUaEEq7OilBHlTpHw1ELrkeP+N/7nWRlZu8g4xmkcW0FoD+zk1N2xpP9VLdon37Z2uQQ/0oYObko8FWLf6a4ATVdeIJKloiBrhHkI1c30QTysSDqi56ySZOl7PGUT/JgmD7JKpGwUyx+TqnR/2Z77vy41ST5JcqRnHI3KP5pIvbrsqJKlKregYfVvRfUhDLF9csbOzPaVFfLG7Nhi92Q42zrmQfyJTN384kKoN1hB6Jc17zz97+yZm0+ShmjbIzFFqRONDRc/TGYsRjEM0fS1Zh2MBIjxGt4FHj8ohP9TiXQ3MrJvQbDDZQ4DJpi8XE8Ke7P/2LsrgyzcECwQlyNuC3G7y2Oo7ULhQ7OCxh212aOsBqUfsN5A33dm280YWMvaP++WkE2oODdIBZISas/9Es2IJgH84ExTD9aikH3KZpoxsGCfDYJfgVH5tUoXXKleWF+Y/DuiZeXOFckxRcEhZoi/H3CqOuL9YPujpgqPGCn8e82MFnGJ0zeTRSE/ww7Qq6NJV+on2/VkYNEkedrrOE7qShrU+sGF8crEIWhECeCZiKp+rv7O4dfG0ysLd27s/53+oT+ODdLq36GW4U878VaKS9sj5lQ0gE51D+LxGywQYR/RmuupqJz7q1YWp47kkJsiiOFKcuM6PsDBsyWqE+sMj3287L6xFLLsZDxbC47Q40lU6Em4M7p5FGctxD6U6x1HgozG9JF6neHvavFyjbL2Zv6Llu9Jj5L9SnAzS2bDb4fw3DilBKS2XMsd32wPYvC';const _IH='a291315c615ef1a6638f091a703aa0dba8b3dcead96c73a72d35ccccce52c692';let _src;

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
