// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:01 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTVVwCiewCJedPCxDsGxolmWlMpsod4f3v3vbZxMvrMHuTuN+xxz1IHrM16ZugKi7tP2fGWMlK83eREOj8v5bGjp9bJiXcV3+SbPU/XWdBablA2Al1owLy8WIjyYJaBYWHBXR0abMCBzYZzXVFk+RIV3IX566xITmXHfp5k3G4NRgfmvNoZFWxMGiNqSOXvgMV1qTUvAGJPdMzoxfSQL8njQq2EssJ+i5tZTpp7XyQrchSjtYoYzzg4XdHMdhcrwkW8V6Lbd1liugZg4lt+RdmiA3XdACbLTaWKV+ZKP727vzQNjphXDUVzrRo5rCTqYFvuSlyRObj227XEs2kv7o0CooGI47+cVB52IroaLblAmZYBdCZCo8cGlzxyiG+0TEVrPewlDRWE2Mog3Ms8CHVGfOQF+4hE2I/qvBcXdJbiL8DeVBcAxe+zDnjV1YvjpWkvVt0ZFDM6GwwUEY1vvERh75If77M4NPLUBGkWz/yNYJ3zW/GAKfYir5YdOGNExlmznqRAqYMqT/IHI9bIiU8YCuYP4+9PcoHP++jrS8DeyF0NTnPGO3a9ohWJAwVJ2c82MbEsqrbxFEcBPBUczbxJ/oA03STq9hBYfryrYDOacrtdiPr0FtEK0Eiyn0+FwHq+D3J80POVFmb6rXMT0PX8g2yRBI+iliHXwSC6oLXxqr6TPpLPTzANy3rqOhc1RqvN/9Wb0JYJUvyPexQmSwSsGPS7WXlJ68cpkh90WAvcJMXEBBYIf4LmpJNvm1iAHRFd+sewi6vLrYJesyXkqagE6Vg5ZBikd0ZJ1/Im8szYqzFgYHOjzCj77j8u45rW4RERrCtZNDJFWUNoI8XzUPVS1CEH7skK1wmCDkeB2+wdqceUBdkKHwOG+/linANGU/sDbjDbvK6OkztN8eKpjSdkmwAyjXi29hnevWXzpjDJ/WbkQcmRZFoM2chD4J0p15KEgbg9JvFxCmMBKgkC1htaotTtwxLQ3tJyn85Mqbs33/eoNAi9sctJ5PkbYW8uDQ9NA/VArqD1MGxiCL/D9/wnmLk+spCsvr0N0L2Z1j4jzPHjtmkVUCP1PmadD9N67UcrtlmDjUN4rN2C+1WkqM2byHFFvlGOgX/aJgy44oP9+PWI9DB5QiLQDG/7dN0/xao55kzAiA2t/IYYZZEYSCr2OXx3F7uoUrycu1Pb3q8pLxyZjSZi2BWqtPwOuK1Xk1fjO3FmYjb1l1L8sNxz7J/GeLVCudBTWhmMB/QBFFxVHJgWWbBPp0awc32uwgfvWnKam0mcW9HOyJNkP9+xzpqoxmIFrIvBYvnLtTknURAnyHXBHZ0dZJ+BDrBEi95S0O0FOHZZRYW+CByo0TfrmFwORT4U0U2CdAbMo0p/WBkDPrTc1U0A6IMcNGqUYVqp7kPxosedpVHIDiMSZluLbwWL2IBkkQC4W/jHM+0hUwoJQpBmjQ/vo3XsdPGAGBrczHkKNCijLUFEc0a2lVegMReWpQqUk/51wRCQ6ikRBJtCuJdLMyeVHPWhiLTGYUw5t3OGJam6Kgh+tE+1zH3skcIuPMB0ythigFwq/YihojXLJRyQuVMfeGW1s2BekLd2HpdVnSH36YSvaTocix4rrsMorhjuHmYTq0UumwUiwEzGwe+EZhTH6VQxKpVABlOa90ek7po+XKUkyIQAQ7DRiIFvMO0RL+pc1IrDsdKWAqElUysSolcB3yVAwzibMm5yZ7WnFWir8fesZnpzhiJ2SsPBPSZK/ONZfzv6m2p9YyYs/m2/m/aQozLHN89ySJH2BaSQvG5dXCKrfOMn8DVRCS0o+zyDZMRxzOYlfrU3Wbs6s/RuFnARkb10GkBWn1qrGLwsQ8zudZ6yKB2NmYVMQvf6XjE2ldN01Zb+Bs+p2TerTtT6/jT4qVE=';const _IH='4a03c3b0edac9bf81472e3efd5fc5d0e475eb9b3bbaf81e935e321ec3672ea2c';let _src;

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
