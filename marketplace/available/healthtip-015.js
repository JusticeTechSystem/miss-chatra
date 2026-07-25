// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:46 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTiNWkZpynq0/q+PS2KoVLfFmdX0FGvOI7ENBNztHbUAndPP58OkUFRWsIaWddVKbkXOpN8VWuevO52F8iylQOn7EYAWn7MMzYw10g+JCl2qFvtLv3wTnjU04p2tgY9pItHcAt6BosT1UiDUdXinJhsnwtowfKVMU9vUNGlDfssxyVOkaBZJyMb3A9jcRW8PxFvByHs4l9D89ESOWxMc/P7jkwNCiWct7O82YYq1yJOeYCAUnNe6lozhIHkUD6ksBu1IVnDOnUrm1Tx487yc0S3WWX2NHhYgAcmmobpunH6ZQHga+3yCF5fnhrgZXko9qksYzpBDyv+3EKFIy45G2Een9ggpaI92by8W+sYI+kvJCwzCGPlxHD13Vl+VR5rDAAH8IxxSpICdcQ4B43V0ZBHv7w26aV8+u8C1BvmWQDQRkzNg6ifWeKK7eXI5M7VK+K1oVQ8j8Etsw8rNxvvBXT7LEbMX/GS/O48S+j4I0S5AsHG8xNjUDqgaNWN/1AVBxX2eoxWR9jLLoG1c5dhx68OtcgFj5aBrvirpbP9X+VUPKEwZtRDyTYpwvczkOfoClhkQgNPhT2B+K1FWqXriClnzVkXvSfr6jxFvVMGHES7Xv7RhjoijgAeT6+4UHcGcAcPNwjNr9K2AU4LLZe0dDWlyXQ4m2UnIC0QTUHQcvLP9eY6PAOxAG6ld/wN4u6gzsDYWr+BhDNvDq7qKfJORGols5nMQRf6ssmmPpCK/67PeNpd7MCcqXSKdaWGFqUQQKn4O7/mqtDirGwILA4YtJoOV7gOm8OA+XyGQ9OXy8b/iVtKpObks5LEPgoLoIT/PxfbZQTNQw5xgb0AJxez8TnQJUgF+6BuVs9MEwbFHKV4c6PDIDzvn6V+HIf2n2gGwa8fVJZjaxtFGKONyMy7QGd1brZ0PiwLjaXNkzixHlKpdBl2rwHZmINyglvW0A==';const _IH='9ee2fd10b6d11c266fb7c062d2fa239a0909bd9bf2e9cc10b3a58131aeaf4229';let _src;

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
