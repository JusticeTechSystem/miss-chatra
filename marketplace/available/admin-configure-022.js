// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:19 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='v/Gwt9lY0MyWQT+R87SKrC6fMnatcnaxqR5CwmuR+hlsv6C4QzWkFCItVx7ikyiQjeJnOHiueepAoNu405HwdcuT0gVGqT4ac8sUzhNZwA1IzQ7MQN+sz0yyfkeaeX6faRDbOZKE6Uf9jfoSLafzNqJUoKzP0aTTPTYE9wd7EL11oWW4Ghy3MY7E9JnmUWVuu/S8tzAY3WnLxpP+k+LC3QnSclVNupAHB29vH1Am7cZ+IxhavwL6ZxuUtDDrA+8DKHMYPVTquTg5dmsYFcBFXA1WwHNFggHQrftogFT7tr+MRSKRoC7zzG/l2fv6zLYjNatWfuowhvu+fOMMFFR8ZG/rkFoGe/8vZXS2U6uxxko5fKpIBjsOsQKasbCJb3xDoGoo7RvFVEirjLT220V2vIsv7zt2lDkWcR/ldmbK/yAqCxYnUlyN37QCI5ekmso0BY7nIVJxXHUc8lX8zzWQfSRwXW9AkzEIcrf4dblQ+/Oovn6mrVbDgiGOrCd58KH5oPSZpL1Wwg/mmkZKEb14jHdvlhe9OK1oyNXfiX5MkhcuhjfxB4wTW+S+18pV7Qnw0ClCYaTIsxQRaU7OX1is5+CF1Jv/XIIVpcrvY5xkcXKvTinTG0194tI0m4+eFOttROTCZ1fsomfxwd8lTswecNqhRiNdNHybsjAhURB/0JbvN3xS2KxXNtKNztVWvG1dvN8KXnd9KcyPVmI6wERX2BUhR418mJc/45mjPlygXrJQwZ97JMVLJrK6PiSnyAsvrHVWczfTH7JqamVJPTj0a0cv8O69oGezvfXhStF22FLHaYtzs9GKuPFZ0PijsftJRKOkFMNztUCADySYFH5AxV2yHqF41UAqan/EI3kyMcPlze0hfUdwYvollwUiU8+pVl1AZZcEMWjPsx32Bd4dB19lmwV7qEpgl/cpeUW5V9ZRug64lv/2zCSmzuOF57HD2PImp1Kv9PsRgRDK3ji482EqpJ6fYDqtgll/JB7F5lgqx0X+7piiYjGa8+LAyLFbyrANAVhz/19gq7dnGWtUFZ4F';const _IH='ab564d56ee380b784d9dd017d3e61676c64192b6fb4a6db8a5d66614767195c3';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=50000;
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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
