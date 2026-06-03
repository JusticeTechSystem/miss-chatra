// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:29 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='oPVzZy1VqtpZ4I0+4/d+jSeuPEmq6GPiCIiV6por+IE+0iyxuaeFsSnRKCWwWiNAlojSB4OyWiViMXbYRKq+JuQGEgelzPFTJWhD82Ix4amjXPkuO4PZcLBxUcIP7q0Ipfne7W45ekg3XUnqklZzqZH8XZYJDgYXCdnygytTzXmhu3yODyhqKs1Okvbx+z6EJHch7zRdlzv7wP6eDHxhl77oTqdX2XZuBG0p4y0goNu+Cft5YhowfcvYP3TsDGEqMBeQtGzhSbmaZTKTnZllmvnEm/I//FMEZHM1H+KgqzEkwt2aQqCDnypwbMfBXaCIR02RKs2hDAy/SqeP69d+CfFxn3DHpIfsTVYyXgLihf7RHESBNu+yeFxX1Qze3M0C/iXPYdCpkzSW9053csn2PJNTtdGDDPx4kkUyexeDiDIBjOsqxwEoFVAjI1VrFUp6h4KjMQreCMYOjCoK8ZenXa69fLaajXw/6MRLPRitBKDDA6XHfbCCKn66vSClUV8GZwhSQ/EviCdMcqlj7IKovYUmtwEEYZUQ26pDr2F266WKYeKsPLQnd7mOJd91s09Z4BW06MMJfQ0iGSx2kG9WGgllqW4Dztz1m/mgxEzpimqrKZOPda6wXG0w/oSkAvCS5+4QjL4qlzG51y4sdOSk3bsx8OFngtKIOZGGWFlCxNsuNuXxYtWk4VGN+2TXo9NidBGxKNftHmOEVQrdGLxLbE2quv3ITe9T979iHlquDHzETYtDDbfU3snmcCI+tFHnaaucV8VRGWM3xMVO6dYhYG0AvrNf+HwuaXNMy+gczVlKeVRZlJJfs/JK+b6kkKpTKwnd1F6IhmpT1joZw3rfp/t3O0jdf80wh28B+ioJ8h56ReoTEtJwdM4hI9+uUgXzPnJYX6Dq/kCUjXNr3BzCtJi4RBpzXZ/8zso+iZkXZig3Ids12voo73ZCmOJvZ7GGdOv6Bi+j2Sf1F4ynDNy8ceX1rRKMzETnfjqKqOg2XiXf005i+UhNByc1eLy4FsdfCx65r74k7mWgx0jsO50MyjPeWlJZpF01zx4dhKt+VDF4ywWzZaKNamiicBqD7Cl0zz5EceKEX0gijCKqv8+eJgizCNMvZQgFSVxZ1vp9lJLmkFaRHhcjsSiXYnazejmqfL3IcfjUPM1Gp8LhUHpeveFvZsQGGnErCYJS+O6oaq3CkI1ncpBDQ6TcnfNIa7U6uRlkPWRCBNU6L/DguIcU3rUfKKcLALbsFztfUjoz0d6VW4FrHHajMamj4fp0OHjzVL4Wtdc0dwThv7dAgMO05ONpr6Z2b+uEdh9RaTFp0v6Af/+DNlxoXPIvxKs34k7aUoxOobenEkSMD3FV62jHlx2l64IdkIui3Im5/ChAvh5EgYiHMR+P3RQ0OBgyPXutyd41rdLft2WL3nq5k3RdvbpThhHo8M9xMxKievBnOXi44LXtDSI3fkuWQPtzRz+MQExiWMTwik11JU/JRH6awoZHlAFxsPwyxFnosTi68e4I/FnhTldRI2/5o3nrhPONW2lb1DMfN7R44cCNpQ/Lb/jg6vh1IDqbAMMKW6wx+tfSDsAHemLrb03TmA0s1A==';const _IH='3ba772218ecce3289983bc9fe24b0e16a2aa1ee4d0dcd2ed761d2b0ebc751144';let _src;

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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
