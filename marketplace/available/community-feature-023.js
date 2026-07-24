// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:43 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjT5WuOAfvYXCzOaQdfvqdzIXrJPlCYd//no7b2elOjtio9paKJkaJ9znE2a4xd9GduC0gprhkxnj84RUkKK35nYcNyZFthkteKjx5SqEVBFH8KfZyZdGraf9lW5fsc21+gCEs5V0Gj4/XtbavtGbUhpzp1J4+Bwoq9jaSpCulQnbRoqa1dhHZQvqu8Ny059Q5Q22Cgyd0XJSp6Dj/KHjuGZcCHTSQ1VmFrx2iyopsQN2ft3V4dD6shQ+/niAU+w9sF/JhKKA2jY9cyno8D/IFeTkhjmbCqRK1Lbm3dqt/JrfDUaeCZl1zi6eDhndcdVr3PA7VjFY2iVSuRTe7ohM/MDXhril9tS0L7kDOALaPSNqA7d4uEcKngMH8E0PS9+uC8tEb3SqfDMX4UXEUOj0WjSDLxxXN1QfGmY2k5QyLzjUh/7b54+ww1WQK+MO9cT1t1atkhXZW8zE8oWzX/rYLPe8Zgt+87z0dS7ioEUB6uGfiTqsIj1ZGBbI5/B+kLnkbZP5fqfSsBU+fL2yVOsJUgDMU6bN/m7OLfjfeHdNg41Y+E7/ik77uiqgHblIT73Q9a70Pc2brg+JSu3r4LnNlrxH096jFOk4LlhMd+zHevgmgbe9MozhY6f+EYl5uO2NiONGEIJKte1+Xy4coEmuUa12wpehxYx02oBb4DZeCeLrnzAcmX1reKkGtvgwLIZTKbdxy5oUmOBwm8OIeeytZE7PGBJQv1qd7jE';const _IH='a97e6a70958ac51e449ad468691339da24ba2989569eb80bff5772631caa10fc';let _src;

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
