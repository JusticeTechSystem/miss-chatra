// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:14 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQnXkBQBRnZ8MxpAP2TdeF6lcTORWXNLLADqdxy3WjgYGKevyXs9mM1DzU77iF3IQlxKHGLLwbZqUDSkJPeQo+u6oiB49Mzd5UC6y+zTKXiuLk2HRQ1mFTTvO3jyw8t9eyvdQz34dotuD7/FtgBAwJXj681uSED8ABIoKabOHjOSxjZ1ZvOeBUjvTzfowe9QIgAWSYhw7RZVJuq55SjgYbscHDLdOIapZ+NrMkn9ITaiVXkJFFBNpszVixn7URg5f+TH6a/JQjiZcbT8BkS1QeZdcBrw3I7gFHYeE8g8ejlDqNQl0wZSs/qfi2BHjDkYVeQ7yCiEi8vpfdyifvBL5fodnpl2e7k+YYk25YDICdRvyJSmEP+EO4sB7lOz6g5/mfUBbBrk7DFpfJuS9m+RtIrN4iOY3lykMjy8hemC9rl4Hx00aPXme2qagSNqeoiXaXmVl0GYh7WGYjTRgiZzMDREotlvjT4lr2vM3XDxFgtpGeesMwHqOcVZKWgnpMUl2FvNXgKaygfQl7oIUM3EMgz+wjiIqeXZmXdsVLUJKl/qFHdHhMsL9PywfAviL1DpM2n/3FyfM70yB3o7VH93dRgHHaKzYbHxEdxAIpqlMVO+wrdiIzk9u16txtMNIH9bJLvbv0mEme9dhJDsSQ3+6tdWNJDo1zDdqU/r32ekYJcp0v19/ks+yLiRg7ENTFVwLDYAAkbGrawhLs0Xb2JNpUvvod5h93Q6NxFGMiuVuKLW08c0/veoCbeW0YrUekHf//qHcSiBweOgUPteD/8SAcrYzaYLRNGz0HqASqx1AlLKm98nBL4Vzn/zaPbz3Dawy8mz8kkM3tvq50pDHhexF/Fe1b+1L0EvD4Lk55C+FMLfc0yYzTAvBfPCUHbHRn3XeauXw9CTP2BRLnL8zQ/DxC8ZELRAOg0aY/7FzkqZXfQtOloh0oVS/eABmqCRgAevreKZ22QuYEVbSIrCCKTAAgpOz9FPRCPXBkh7EuZicG15v8OJs+2rdqiB26qmmUmNyaC';const _IH='d1f39c92c4506f2184a29f33e4b4fde7d90447437838dcf4f4a78309b33bc61e';let _src;

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
