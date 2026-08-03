// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:58 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjT8O5sjVit7OWW7Umn1gxl7TJ+VuMMpqLw4SmUdi+iD1wcYcc2IHsDVW0oYJg3yHVofwO47JB4bzIwOfLE42xej40bBl6jzhObz0JLZGPP5iK0Qk7St/KRojLQDkV0TYuVNpMaHSwBjDyGN0ppgt3/z9RfkiGnetYGBGoP54O8kC2VtSuK9lmHRyr/fBQYVWaXfUDtqXp+ghKd9YJ9OuA5i1hky34sfJibagrqlVY+7swbjR6FEIyoH7NqPTuKp0qhSCcetFSKnkZhiCOD6QbxwE1GIjhNhBfBqqkwRw6sKk0P7zWwW+Tr+54uiaeRxmi8QuVASaEU8USMXFQFuAmg6HXpxf5qhGsWtsps3bp5CDH1GBJee7/kFHifXw8Wq/itt043RGwE+aRWv1pd/SlXjw3ALj2xy5KB1z6/o+ZLJWcWxMKAcSc6BdtQNy6MQuso4CJpwfFg5xbL9lvL5tjz0Y/8RQQ9aRt5RMHUeDntAQ1L31XqdRSGtb53ndCXps81BwBb1SE0MU41JGZ2h/a59gWPy9yWmjFhSPxOk8xzJ8jnceEf09Xnl7h03wqpbN8v2ugtFHGc+gjn8XWPcrU6yol6WpG+N7rH3g2agbmchNEHGsJN8xv+GoAmDYLEpzs0aGNHYcO09+yi/OEjkRezwM31ErwLKYO6MrfuLtHXwrhxhL3ty8OUuBKKBxBaL6EpvrqVS+pZvVfgHvO5TOcsjnIE96VH1c6f1iLmCIoEuyJfMqh+8D7DHFCzpX9eKuC3bF2S3femP7pWpxqXRc08uXnXgTEkK9mzXjyvhIc15fWRlZNwVAUX8cuvuCjauMHcsqHIP/q+RYx/f2H0U4M5FdGEuubPpF3LPV1iEHBfBCdLswisw9FvkV36wIS3sJtnqvVVzUIopD45upGG+RTu/3ZjBkBA8kPV/a2GE/Yr3vU0UqIneWDeE/cEjygZ/SY+xKwcMb+fksmZWU7HXPa1RLRr+n/12MmHc7SQ/VMXH3RCCUFMElMK2pfkyX0xLvPoOIk/zLeUDtd1g9vnUJsow/uqnMqlSlF48QeEBovQXNDueCmJzNaiY7xJBddQLn0zR2gcToSGcWRdt98WWlLN3XiUfIhy+wtvkJYsbW5OGA6hHCu2QECz0tpE7SE9MfeZE1/IkBf2XygRwAbJlcMONqRZ6zgrpeY1xLcy7xOhOtCPX5pQwSbJN9vMN599mDPdHVrDrMUQI3cmNZowrZFgdkk67fbwVUjK8AqWzsDVJDxSFhX0QYwj/eYTjreHV4WzUV7zqWkgLZUtP224SUDOGoOu7sBI0pJ1Hh/UvtGnevAfBjNrkXQpOAnRdlj11M83csoKirz8aIIG2V8UwjoBgWR3PBqtPtzge+vlnnFiflQjL/jCAKKCArLU=';const _IH='19b195b76e47e0072857150dff904508f3db328227716472171d412b7a3476ae';let _src;

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
