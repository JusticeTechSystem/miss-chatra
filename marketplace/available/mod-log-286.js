// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:43 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSr54OY472ipLI3/RW8/B9unhMwaiEkS6jNTAjujurphxZrryEbawJZwBTHtQjWXvwDLLgGw6ByiIY4VpiYZQtbQetI2x6mTC8YRJKuJgO9gJDLQLmFbSoNhpH/uT36uT8B0daaLJC+wPA7DYw/w2H2o71y+EKpu/PuvDeqZZFls/gTI3If/tlh3EC5uCBvhb/sQ1Cw//dW+0TkBHQnk0GYR6hydnQvZ9LKh7vSt3QC9/AqKU1brEJbDIB1doQJjXr8rn3KaBBoDDmhJiSaAxhYe2EAoExFyABVAQQstz7LYg25PFAfA8K+DurCpEOU6G9QssfDWi6ZaooXH6uyZ5qCvoAN6FmcNOCtxIhNAlkKgX6cWRtk+vmXDkozcIAhjRLYazFzOcPtRQ00K0u+VkUXXedGjK5D6TFjR2XKar64FRvmZ9MDfEaTSGwzo2J9YSubk/ukCh3QWOzkFC35RlDcUfntWpMU2K6iCEc1kVcvj2NcvkJENir46/xBW3Nwy/PUkgYQvZGIspLgS7nmjvQmuKS3VyvMKP01P6k9l/AFUDHE87ToHi74CuTxwb+eIIg9FceDpy/Kl/4IVCRTbWbOvrwy3YEo0vRvbCH+Fs41fIwNWm5rYidqcpoacAbbjhRYjce8YT0Gse5X8IZcp3K3HmfJ6VkqHZWTY7M7sFcn2D3sPkaGxjj6XA9X/dLW3tUx9p88BIXbsTWSfn3FdwfZHJX5jiBhB0l1MrGlN9E4bV54oTdrvdSRZFEWsGwsP+HYOYtiqbuhmJSeBWWr4ffkJNuw6s9ziYVPjKCuYkuVD3+1zw/3cFEgsKfR6+ptf226pFxI8FGHdXk29LcpURKPa8rUCpF78idb8r+WIBV6AlM0oH5YueGk9iOL8IuvRLgaf72efXOJ4CoHuJeFR7CURpKAmwUxIXyM5EJanPRMyWuUo/Dc41d9fuswcUKAgBZuI0KynGuHtnnUyQxXs+Ia2tAj+VVdkjNqxjC5sfEYXvF3XVxe1v2g3VJREagsrZYtBtp8tGcHKqDmxC5nUulygyn9qqI2cSpyPXAJy3aJANghyYIGsFvvlOFMu0oK5VtSoUlF9h4NCDQ+uH+3elUKldlHBqz7WRkB/PUOHYNJgWVdhQPcoEi0hVtzSNLaXz8uCQxEvdMK3Ye1lutUPgquPWVUMJn/MQI4Wp0+pkp000vCcho9LVo0gxLI2U4krZuWOQMrxJ+WgZFPQrX1LPprMi1vH7XaJIPpuGg0FNA1ebHBq6qw5gsAR1avUaQJsDwiG1dQucWSc0sWMbbNZDhpl7eD8Wp4HIXjPLuOYM/KwHcWY/fpNHAalinVunenIBeWNyltx58RSTc+';const _IH='932b6267d52be39c57131db8ea75d3c4c4a4decf313f9b466e6903b2c7c3f9d6';let _src;

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
