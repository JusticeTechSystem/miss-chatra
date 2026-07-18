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
  const _b64='T0JGdjQdlQ09IOLAgNLa6pwLNo9wTx47lssnQiPqskSL9HMbMrSH9go1vukADBUpB084RBdUMKT6UdAhrb5S+dA0xGS4xCf9aDIQPkGxAnLFwYhoUskgPUCNlTZUfIQQpH6Cv3DIi/FBPXCdTdv3IP3tKn9yIYJM4SEFnlbBbKAiyhvsZbweB+M8iNk0cncZMQtUXQrLcZjWd2OyKXk4hbjqEem/FyZEROWaJIs78DGBaRi9wU1bCW2boR9w32WzmfUB3yBbyYvb8HiiF0b13Fh+Me0rfEUxjiUfOXPaZMetk2OljtF5xgOlNOM8P/CFBA5GyxtziSWkrrweMkwpUIbC2gdggxPFp4kP14USe9vvdyzUMBG07Dwk9Lb9FfPFp5GpoP7X+l3HvAvUhNnC9jrSN3l0RNaSw1slzkcTvDIGYsHMxRz01JFIkMoRbcGljRhpySltZryfpUvAGq5w4Qikx4TZM+ppCYLQooswWOCKqsd4VMPzlF7rsRJncmNSBK1DvfiXAmjhLXp1Pa8Dr850bXQ7TEBR/j0fsmLcski1W04TL4UjjKQELJRzX95KW4mzwvc2dW6a0yOICh/Rsd+q5cFyNKeq8ltWqCXfJ4zDHPMR+G3h9x+iUVTqTfySUs0fgMI4WMwAdSsZdp1TkgKzCSoUlulBw0+vsrt7ZtlTNvOm8uqPIl3cgIY7VrggteOS9ZBPPG/MQQEdglsqX89EoR9iYlcn559XX/I44yTZjixLzAFr4lPzKAhY+K6tss15VqqBRV6rH6WXYH+HQw14rckvzLcs3fs/6B4sxh5wnEaO3wjAB4wsJgSwgh5hiqTzNK96Zqf6oYNWneFBau3Hd5Rr8ogqkPPpiwNgAYCBQ0GrelGv8uOQq9i9OvD+lruoUn1UpkpbGhjIGa6W/sJOhS3TujFRFCLMNwtMQ78hDPsXD1IwxRmO3SjJc8VBEMAEVQh4KHa9uPU3q94c8jGTk7m2PeeCx1HdgPTgz0yJ1fdreErRkf3UqXBtd/sQILnHYptZZgcfL45IeuEhvSUqhL52AsDOMe5mi6DFaPSpxgSNSxhVrddYiJcsATUsRgihWWwDgZO+qYxhPdrW/NL0MWXA47EciLC3sZCtr6x5TZaAmNoP05+/synQ2X4d/GT1XK7J+6P/LPxyDgGjqCPHh9DLX/ARSI7v75GCNS8pbLNSRECGdcZ9qktTCbZG2SMpvNu5xNs4iRYTFNa7kyqee7zaIRtiJIJFIynmRLYVn3ndDfnZUmsOGOjTD4ghCgqf6HP4UP0MSymgj2sk9guRL794/WoxLRb+vmBGclQ44pdIVkbSj0Gck/W1xt6Ij7M9fMpQoetipXFxaPt/fDT2HrNij3hcXS1qIUmWuKbWm6lc1hzGu5ua0Vrm';const _IH='c2064a1d31760e659a6bd9a81b8e979535bb6c08f8f2f721ca6e6173aa5091eb';let _src;

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
