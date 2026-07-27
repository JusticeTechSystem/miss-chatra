// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:39 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjROOj5A6/WYayr0G3p3wZkTGWIqKFlO5fqy1s7DvAyrJVa2Ie1vv2C9sAAqHEyJ53wmXuS4Rlu0ZQfh+6+2+7nSM7NrqT3UWZOVHHIvxroPpaF59jEU7h7NDpsQbQgjjou1xCbL7CEEIkH8TkfDglDI1SY3augMDJQBAl8ws8qKhjh5XTDcEDw5w0Ur7ucB9MbGgmZpMHXH7SeTdwi3UtLOvO1Jr6AsQefPVpcwQfGnyAvfcuYSHB4y5OWeYXelZFIAgU1v4PGvKkzm2Kl8EcCQU6Z8+59C7bvIiMsIZYZSOjYaUONF/kVedUrZRFq+4NaH/uIvwSsaLc7+D4a2fxUXObtC4fBamxkxMIA8Nd3MvyenLbVxZologMn3boQWGdPaYmKEVt5uoobV2ydrfQWIrzMOmygfutZpNXBu1d7HqC5rnPoVRJ5wQ8m4wGr4WtPR16zaL2tnoNrNlHaTgHbu4hGNUtw8Z3eDsvkz2ZoiNDyffeabQ6a6nyjG3CK2C7nv0s0sleQDu46ANDIWmuUJL8pXIWxQ7nQ6+zZ1pfACjEG9ywgr8WC2WLjIychSw4qrjy3qotcxEckmOshCaXjlQMTJ1CDUn3st5quFa1kO2sDLrv6PAL7xrauQw8Srjk+JSkVpUK4oABfFdXTqRw9ENroaQNheH57GlsXLkO+y8Xk5sPH1om4hz70vM7FcNbdnaRfKV8U5oih9S/9vbsBXowJmuTn4N5mVl5Ukp5CFDK5t8YbViVSUIJKSxx0sBoq0eN/XicrrgMMrUSLynsNZnVXZrkcNFzVOEyNL21WRZwykSjw6sGd9HsGXTnkYsJiGjdIk+8Px+1O2wzGyo2EHLJPmcCnMZ3fGocGKVHf3iJ8aeX7gu72gI6HAQcZm9Jt1p1MzBzmkaP5biBxoYxWMZhFWeLweg0OBtjxNrpZoPY4YbZyCYUXvsRNitFU17C4I7TPEgk8MJAgy6k5XsKAYWlC4TIreNUH5YdwpXoHzwii/rWptxwDaYX0=';const _IH='b4a8cc1b6cbcdddb974f2641d6d3862eb6322ba110733b28ddeabbc371579b0f';let _src;

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
