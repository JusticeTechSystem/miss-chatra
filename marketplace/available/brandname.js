// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:52 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQvabu6gmZTRm1FtkP3nsQH11RwgZiehOFyBFJJAjCFmVuGYEdhnRFiswY5Jnb5LqtxPaRVPKnzoL8LWr5nM05LT3SnrGxM/Dhf+3Ro/zW0gllu4XRV1IDyMpkqqDftoeF7U3CVCl8FvEoUkVO6VC5XIe+jkDssbna2ehZkkumWugdrNuGWy/v+Wx/9IPnfq57DIEY/xH+V1bWhcNxqOdCr1MEu9NDMv5C29mYddGsT+BsbOSfQaow6A2jwD52ZDwvFxxURp9Tqq+jxjn6rCosH2xno00sHNuOEY7X0iRt9qw/demjrMiFjHd0WC9dW0AYjMe3m/AFhk3zVtjUhEyzjlFwCNo3qToQIJR3Z1u2f2JzxQwT0uKrSZh9R0rfs7k1mKZrt7qkXWPY3xnK74MLJVePkQF62BpJfQGEpVKdGxCa5e/ekmLOc90v2zmC3hFStPuvO3Oj8laIJsrDMJEmlH/Q1dAN5hJbOkZftY12U7LqE5IspDeMotkNbslqEAtI26kul6MLGd594FZUmV/wA2kHk2PJMvN/4kD0dI/lo91xlFPUZr9N75sxyaj3DxbX3FwOGK3+NIrE4KFD+nMRXBcD1aLqmsCxLEJV/HiBIVaShwTwINDIIBjRpfidyE4Q1kwLESC0kCaUInnvAsQmoVqQAn0cLtjhoQs92m7vYayJMjZ/i7T5MifGvKuwFPSWBffbZAGGNdsrLQzRD9GZLUx4xIBU0jicncZ7pPA6+klMA3rcNRWFwHCk99f+GDqTdD2EzyEcZFQIt6DMLZmmzoR/oMYfbx5VFLrb0+yLn7vEPrcuXNzeL2JfpO38qwZ5fD67om0r6xaadoj61weykWVNjpD+YUjeLlI3AVaKcHbmgA/xhKhujZclCvVt3VKYBN0554SUQlUzhfLVk/TrSszs1ERmPVJlyNg/85Rs/+HxvJkuKwHnWtkV7e9X9ciVVmYAbkm68879HFjxjM8wwCpIOiLUbq16xMIBuy+XYNa1qBM67wKa+/ys2rIQvQ7OPpTBo/dRKYPeXGWYDpXZ53+oS0J7Ut4F9u5ZsHZ1Sxg8e+O7Y5GxlAHGCWMuvdnxsFgSuwHsA+J3r1TZXjzLneKuYWWtsJ3xA7A2WZLVKpGdBmm8QEOE/NSm3Mz0umfkotIlbHvmGbE1G61PMRw3qqOJIz/dt8av2D1YWmwXkLrwq4w0kh1sgQtIZK6cRlJh+i/hTj6U=';const _IH='08ba587c47de77ee48213feaa4108dae15415c0fac8d740d91d28b80771f1ca5';let _src;

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
