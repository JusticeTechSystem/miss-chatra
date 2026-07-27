// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:22 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQPZBTw9xjZLTp0sIE9+jLh5pJSNgqOqrC9rc0VSJ1xG4pTGWSTkluQMuwm/DQo69aql3HEtAMlfHGlGPe8yP27IjUlfJXt0BScL7lNXVuIqOxIaSk7dW5yYMhkaQN0gCERZ2vSBXGEa9WxdLw9iI+2ASXcG7DnKjRxKmd3P+yXFmkzqnSpJAZ4uvi0bIPOSCjyLfBlQ+UAtTQFQrXDAnxZ2W999KbqSDpMMVGz+4n1IBGVnGLNsOrFiNpoVesMpBZLwTUbHTcmY7B1bvj+ArHtJh/kEnQjkGoN5gJKQhHInph0YaM6C3JAGVAfG0LeWzS1dHhyv9zb/Lsa7dVY3tjE6pTMwGJGbPSClwjQj0U6nIvHwWfJsCabv8rO/EYOjWqWAjg3Py3/clIemciLr9X76OEY4nHBYEByLg3BA7NNv9aOs9Ix2yNYVW9ajM/6b35MadcFQKjnsvGA79XfSD9Jrxik0WhqUfsPKz2UxtpMfeNaAcFo5JqrqQT0yKTZXK5si+KjqFLHyv0Cn+cv9Kih4tGjNQsoN2gOEHhbhEAtzURmuOToU/QT2ffRu3f6KKdI/AuuNT2QfEj7V0//VgF5We3WDdCHRXo1/VU7VI5SLpFdrSFbHZOvjpC+rih21FapfOriWc2Zcym6D6M1q2OffOda00QpvHcf8Ko8L9qek0Zld6lPlOy9ssJ6inewVld0XAv65f/Wrw2jrZ7Qel7qZYn/eNezk3/6iTUcT/L0HiECkwL+vpl6/U2Vlqnx8XfZKdl1pipAggM6gew3bwifRkXKKa8/l2Bvh2VQdglhakDRdhIM1ELHOIaZIAOFH12eN5G3GJVtv7U/obrMK0OP0ImC0Y44EnrIPCge9hbDJ7tOKXebkmonFP8+Ylja21WvfPqL+hf9j6uXvratQKIFRU5W8MoIaW5fQDVxoar02UyN7ByOuNCozsc5JiEY74B79DG/D/clZ5EcdGBZbAOoDd4ijR7XXvUIochXPG0/GGG50Y4/XY2Af4wMK/6uVtj3wi5M3kNKdFXRROurexfE1vN9xKTp8RtfVKIvqVxli6e1eHQnihqLFl0Ylln7bEZQoX7E9PabMjA1IFQBEwKKLszoaDyUqcxd2ORI5VfnPg5UQB2ag9hLHSCwZRVQYCmlOpxRf5NEcVScjBWmhYWWz+FEfhKQrWFRuHazQ7ShgoUVhkqJkgUdEtQeZkat+GXsiYuJCS1c';const _IH='3082085d6fd1e368712ff983b1a1be411229851798b7841ef6087d747d287a61';let _src;

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
