// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:53 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjToXe1mzseEsDqojvlr5HFT84y1zr8uz6OEzlHPMaOgu38LRx8kMYpI2RqNUQMGwKWc8eHWL+BiR2BlzAf12IBIoPcMfShabRFhIUpMFn0938+h2jQWhwr29o+nIfyQI7xBgYLKBeP6PEUBgmHwh9c0wB61CWfHpRzMY8XlrxBsb4Ut2Dk55Ob2d089ktZYPbj4+Vu77Yh/IM9cvXcDPhHLHMvk+sXUrbs/DoKEGvGjDQo5IRm0LA20wuSYBaXffkmeNOL9Ny0Ua2OMXCxbiylfiCcPrWNWs3HZgq/69ZT5l4rWWynT57MqGYx6WEztVXTtHnA3+XhNsqwTvnJY8OdOo0Azy5ddt57KFT+OjiE0JC0IVSEohqOJvY1pktndlu2yZwQD+ENub7K2oE+B+4eMh3exx3bJEYgPp9oXIikJfdbabTCKwLpWlCZqlbUdO9qpPoQESQeOrOvDy4pCeANDt8AdUjWGYFaxoLJC1TUO6/OW/855Pngbd9zx6A3avlwAn4vnADF/ZzEm2dD59lo194jOEusKId2bR3eaOjuG1O7dk+hfikuETuCd1Fxa5bBJPw/MKkGt2RfT5jxv/HS5cNNCnJbYmJfdOjitejunqFzXtj6sL0DNmvVTWagjG2RRlYllYLtHlYl7Ulgg8bziJCE+uNQ8m9Ata3+i/yhYW3vI5mDvFXgHgx7rCtjs+IKYLrj24kGVLIGfeeVjuFdpk3SSlAj5/t2Rg1PntDA6eR7b5gIAsPXwORqVeOfr4KaY682wUOFk6kOq6Bybd27P9n9Sw7XX82iuCdu0xULy2wlgt841/KWcApqZ7h/emQnul3xkCtE6W4guxTR7YT+3SzxkyGh/GVljcqw/kPP+u4k8pgLL+ha3BXtLwhxRpH8e+fmOGLHmIpjsg6V5u2rwdNnlakMP9kvfuqZFb/nrBIzzmrd7QlHs2lgt4wBYGyGWHTmRXSDfpgBGh6ttTbNOeqC3qFStQjd0685ovSF5cRvV8kxhOdDFQ3RlaH4VAaNFmfYrSUdXKLi/p/zLJTUs1183lf3/ERZNHBzJX3H0vergrwtHUs1nEXm9ENY7rYbmEP5etbanFGklemd+5rsXC5z8u1jvo2p9+MPap/iRRnPlw6tMtUfwpsrEQROuFXVgzZmUGfwMpi/uKEQmC7k/RIZbBfYZf7ZZdFS8pGglhNCj0BijkEqSR+jZt7v/lD+Psbpojp57ntwL4Lyv9TuEtTEeL3GvNGlHH/ynEm+5DAwMfjd0KLKYJHh18hyWpmk7TG5WZy0m5HY9Qm6ux+hg1tBtjVOn5NrXhahDeOe+gUpqWvbmd0GDHGnxEV1VozoX6oYYC+2VUc4gd4MBN7gO3nv2dy5U2kByFhA8bG3IqcOIo5oopqxmY8DRQYNJULFVbZ4EZzgGnqvY/xa8i3W5ng6D5CnBfA2Xo8g/sJa5H7vOcpDYzaMugrR8Zt/HwBGB06xyO1/F51XG646KooxmS3x23/0lzeelHR4IW7RIJwgRMBxtrtBHlaUCzRb1MQczrfAuAp81EJaKOU/qXOpEwTJSoMfisSWoCTw/BVUO5N8BD1i0ki93xO1tnERMsughJgillQ==';const _IH='0a81da1214d31ec7454f0a890e118c6eefaa72e951ffba3838e5430998e47a8d';let _src;

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
